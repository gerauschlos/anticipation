import discord
from discord import User, Member
from discord.ext.commands import PrivateMessageOnly, BadArgument, Context
import config
import re
import ext.utils
from discord.ext import commands

from main import Bot


class Game(commands.Cog):

    def __init__(self, bot: Bot):
        self.bot = bot
        self.guild = self.bot.get_guild(int(config.guild_id))
        self.player_role = discord.utils.get(
            self.guild.roles, id=int(config.player_role_id))

    async def cog_check(self, ctx: Context) -> bool:
        member = self.guild.get_member(ctx.author.id)

        if self.player_role not in member.roles:
            return False
        return True

    @commands.command(name="reveal", aliases=["rev"], enabled=False)
    @commands.guild_only()
    async def reveal(self, ctx: Context):

        await ctx.message.delete()

        player_mayor = await commands.UserConverter().convert(ctx, config.player_mayor_id)
        game_mayor = await commands.RoleConverter().convert(ctx, config.game_mayor)

        if ctx.author.id is not player_mayor.id:
            return await ctx.author.send("`You are not mayor.`")

        await ctx.author.add_roles(game_mayor, reason="Auto-assign (revealed mayor)")

        revealed_message = await ctx.send(f"`{player_mayor} has revealed themselves as mayor!`")

        await revealed_message.pin(reason="Auto-pin (revealed mayor)")

    async def can_whisper(self, ctx: Context, reciever: Member, whisperer: Member) -> bool:
        if config.game_has_mayor is True:
            mayor_role = discord.utils.get(
                self.guild.roles, id=int(config.role_mayor_id))

        if self.player_role not in reciever.roles:
            await ctx.send("You cannot whisper to someone who is not playing.")
            return False
        elif mayor_role in whisperer.roles:
            await ctx.author.send("`You cannot whisper as a revealed mayor.`")
            return False
        elif ctx.author.id == whisperer.id:
            await ctx.send("`You cannot whisper to yourself.`")
            return False
        elif mayor_role in reciever.roles:
            await ctx.author.send("`You cannot whisper to a revealed mayor.`")
            return False
        else:
            return True

    @staticmethod
    async def is_valid_message(ctx: Context, sanitized_message: str) -> bool:
        if sanitized_message == "":
            await ctx.author.send("`Your message was invalid.`")
            return False
        elif len(sanitized_message) > 200:
            await ctx.author.send("`Your message was more than 200 characters.`")
            return False
        else:
            return True

    @staticmethod
    async def send_whisper(ctx, receiver, whisperer, sanitized_message):
        mainmatch_channel = await commands.TextChannelConverter().convert(ctx, config.mainmatch_channel_id)
        whispers_channel = await commands.TextChannelConverter().convert(ctx, config.whispers_channel_id)

        try:
            await receiver.send(f"`{whisperer.display_name} whispers to you: {sanitized_message}`")
        except discord.Forbidden:
            await ctx.author.send("`The person you are trying to whisper to has turned off direct messages.`")
        except discord.HTTPException as _Exception:
            await ctx.author.send("`You are trying to whisper to a bot or something wack.`")
            await ctx.author.send(f"```Printing shortened stacktrace for debugging purposes.\n{_Exception}```")

        await ctx.author.send(f"`You whispered to {receiver.display_name}: {sanitized_message}`")

        await mainmatch_channel.send(f"`{whisperer.display_name} whispers to {receiver.display_name}`")
        await whispers_channel.send(
            f"`{whisperer.display_name} whispers to {receiver.display_name}: {sanitized_message}`")

    @commands.command(name="whisper", aliases=["whisp", "w", "msg"])
    @commands.dm_only()
    async def whipser(self, ctx: Context, user: User, *, message: str):
        guild = self.bot.get_guild(int(config.guild_id))

        whisperer = guild.get_member(ctx.author.id)
        reciever = guild.get_member(user.id)

        sanitized_message = ext.utils.sanitize_text(message)

        if self.can_whisper(ctx, reciever, whisperer) and self.is_valid_message(message):
            self.send_whisper(ctx, reciever, whisperer, sanitized_message)

    @whipser.error
    async def whipser_error(self, ctx: Context, error):
        if isinstance(error, PrivateMessageOnly):
            await ctx.message.delete()
            await ctx.send("Whispers only work in direct messages! Direct message me to proceed.")
        elif isinstance(error, BadArgument):
            await ctx.send("You did not give a valid player or message.")


def setup(bot):
    bot.add_cog(Game(bot))
