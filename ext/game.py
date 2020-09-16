import discord
import config
import re
import ext.utils
from discord.ext import commands


class Game(commands.Cog):

    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="reveal", aliases=["rev"], enabled=False)
    @commands.guild_only()
    async def reveal(self, ctx):

        await ctx.message.delete()

        player_mayor = await commands.UserConverter().convert(ctx, config.player_mayor_id)
        game_mayor = await commands.RoleConverter().convert(ctx, config.game_mayor)

        if ctx.author.id is not player_mayor.id:
            return await ctx.author.send("`You aren't mayor!`")

        await ctx.author.add_roles(game_mayor, reason="Auto-assign (revealed mayor)")

        revealed_message = await ctx.send(f"`{player_mayor} has revealed themselves as mayor!`")

        try:
            await revealed_message.pin(reason="Auto-pin (revealed mayor)")
        except discord.HTTPException as _Exception:
            await ctx.send(f"A unexpected error occured! This incident has been logged.\n`{_Exception}`")
            dev = await commands.UserConverter().convert(ctx, "219915802818773014")
            await dev.send(f"A unexpected error occured!\n`{_Exception}`")

    @commands.command(name="whisper", aliases=["whisp", "w", "msg"])
    async def whipser(self, ctx, user: discord.User, *, message=None):

        guild = self.bot.get_guild(int(config.guild_id))

        whisperer = guild.get_member(ctx.author.id)
        reciever = guild.get_member(user.id)

        #                       CHANNELS                         #
        mainmatch_channel = await commands.TextChannelConverter().convert(ctx, config.mainmatch_channel_id)
        whispers_channel = await commands.TextChannelConverter().convert(ctx, config.whispers_channel_id)

        #                       PLAYER IDS                       #
        role_player = discord.utils.get(
            guild.roles, id=int(config.role_player_id))
        role_mayor = discord.utils.get(
            guild.roles, id=int(config.role_mayor_id))
        #                       ROLE IDS                         #
        player_blackmailer = await commands.UserConverter().convert(ctx, config.player_blackmailer_id)
        # player_mayor = await commands.UserConverter().convert(ctx, config.player_mayor_id)

        if not isinstance(ctx.channel, discord.channel.DMChannel):
            await ctx.message.delete()
            return await ctx.send("Whispers only work in direct messages! Direct message me to proceed.")

        if role_player not in whisperer.roles:
            return await ctx.send("You are not currently in the game.")

        if role_player not in reciever.roles:
            return await ctx.send("You cannot whisper to someone who is not playing.")

        if ctx.author.id == user.id:
            return await ctx.send("`You cannot whisper to yourself.`")

        if role_mayor in whisperer.roles:
            return await ctx.author.send("`You cannot whisper as a revealed mayor.`")

        if role_mayor in reciever.roles:
            return await ctx.author.send("`You cannot whisper to a revealed mayor.`")

        if message is None:
            return await ctx.send("`You did not specifiy a message.`")

        oldsanitizedmessage = ext.utils.unmark(message)
        newsanitizedmessage = re.sub("[`]+", "", oldsanitizedmessage)

        if newsanitizedmessage == "":
            return await ctx.author.send("`Your message was invalid.`")

        if len(newsanitizedmessage) > 200:
            return await ctx.author.send("`Your message was more than 200 characters.`")

        try:
            await user.send(f"`{ctx.author.display_name} whispers to you: {newsanitizedmessage}`")
            await ctx.author.send(f"`You whisper to {user.display_name}: {newsanitizedmessage}`")
            if (player_blackmailer.id == ctx.author.id or player_blackmailer.id == user.id):
                return
            await player_blackmailer.send(f"`{ctx.author.display_name} whispers to {user.display_name}: {newsanitizedmessage}`")
            await mainmatch_channel.send(f"`{ctx.author.display_name} whispers to {user.display_name}`")
            await whispers_channel.send(f"`{ctx.author.display_name} whispers to {user.display_name}: {newsanitizedmessage}`")
        except discord.HTTPException:
            await ctx.author.send(f"`You could not whisper to {user.display_name}.`")


def setup(bot):
    bot.add_cog(Game(bot))
