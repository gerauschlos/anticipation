import discord
from discord import User, Member, Role, Guild
from discord.ext.commands import PrivateMessageOnly, BadArgument, Context
import config
import re
import sys
import traceback
import utils
from discord.ext import commands

from main import Bot


class Game(commands.Cog):

    def __init__(self, bot: Bot):
        self.bot = bot
        self.guild: Guild = self.bot.get_guild(int(config.guild_id))
        self.player_role: Role = discord.utils.get(
            self.guild.roles, id=int(config.player_role_id))

    async def cog_check(self, ctx: Context) -> bool:
        member = self.guild.get_member(ctx.author.id)

        if self.player_role not in member.roles:
            await ctx.send(f"You need to be in-game to be use the {ctx.command} command")
            return False
        return True

    @commands.command(name="reveal", aliases=["rev"], enabled=False)
    @commands.guild_only()
    async def reveal(self, ctx: Context):
        await ctx.message.delete()

        player_mayor = await commands.UserConverter().convert(ctx, str(config.player_mayor_id))
        mayor_role = await commands.RoleConverter().convert(ctx, str(config.mayor_role_id))

        if ctx.author.id is not player_mayor.id:
            return await ctx.author.send("`You are not mayor.`")

        await ctx.author.add_roles(mayor_role, reason="Auto-assign (revealed mayor)")

        revealed_message = await ctx.send(f"`{player_mayor} has revealed themselves as mayor!`")

        await revealed_message.pin(reason="Auto-pin (revealed mayor)")

    async def can_whisper(self, ctx: Context, receiver: Member, whisperer: Member) -> bool:
        if config.game_has_mayor is True:
            mayor_role = discord.utils.get(
                self.guild.roles, id=int(config.mayor_role_id))

            if mayor_role in whisperer.roles:
                await ctx.author.send("`You cannot whisper as a revealed mayor.`")
                return False
            elif mayor_role in receiver.roles:
                await ctx.author.send("`You cannot whisper to a revealed mayor.`")
                return False
        else:
            if self.player_role not in receiver.roles:
                await ctx.send("`You cannot whisper to someone who is not playing.`")
                return False
            elif ctx.author.id == receiver.id:
                await ctx.send("`You cannot whisper to yourself.`")
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

    async def send_whisper(self, ctx: Context, receiver: Member, whisperer: Member, sanitized_message: str):
        mainmatch_channel = await commands.TextChannelConverter().convert(ctx, str(config.mainmatch_channel_id))
        whispers_channel = await commands.TextChannelConverter().convert(ctx, str(config.whispers_channel_id))

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
        guild = self.guild

        whisperer = await guild.fetch_member(ctx.author.id)
        receiver = await guild.fetch_member(user.id)

        sanitized_message = utils.sanitize_text(message)

        if await self.can_whisper(ctx, receiver, whisperer) and await self.is_valid_message(ctx, sanitized_message):
            await self.send_whisper(ctx, receiver, whisperer, sanitized_message)

    @whipser.error
    async def whipser_error(self, ctx: Context, error):
        if isinstance(error, PrivateMessageOnly):
            await ctx.message.delete()
            await ctx.send("Whispers only work in direct messages! Direct message me to proceed.")
        elif isinstance(error, BadArgument):
            await ctx.send("`You did not specify a valid user!`")
        else:
            await ctx.send(f"`{error}`")
            print('Ignoring exception in command {}:'.format(
                ctx.command), file=sys.stderr)
            traceback.print_exception(
                type(error), error, error.__traceback__, file=sys.stderr)


def setup(bot):
    bot.add_cog(Game(bot))
