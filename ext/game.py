import discord
import config
import re
from ext.utils import unmark
from discord.ext import commands


class Game(commands.Cog):

    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="reveal", aliases=["rev"])
    @commands.guild_only()
    async def reveal(self, ctx):

        await ctx.message.delete()

        player_mayor = await commands.UserConverter().convert(ctx, config.player_mayor_id)
        game_mayor = await commands.RoleConverter().convert(ctx, config.game_mayor)

        if ctx.author.id is not player_mayor.id:
            return await ctx.author.send("`You aren't mayor!`")

        await ctx.author.add_roles(game_mayor, reason="Auto-assign (revealed mayor)")

        revealed_message = await ctx.send(f"`{player_mayor} has revealed themselves as mayor!`")

        await revealed_message.pin(reason="Auto-pin (revealed mayor)")

    @commands.command(name="whisper", aliases=["whisp", "w", "msg"])
    @commands.dm_only()
    @commands.has_role(config.player_role)
    async def whipser(self, ctx, user: discord.User, *, message=None):

        player_blackmailer = await commands.UserConverter().convert(ctx, config.player_blackmailer)
        player_mayor = await commands.UserConverter().convert(ctx, config.player_mayor_id)
        # game_mayor = await commands.RoleConverter().convert(ctx, config.game_mayor)
        mainmatch_channel = await commands.TextChannelConverter().convert(ctx, config.mainmatch_channel)
        whispers_channel = await commands.TextChannelConverter().convert(ctx, config.whispers_channel)

        if ctx.author.id is user.id:
            await ctx.send("`You can't whisper to yourself.`")
            return

        if user.id == player_mayor.id:
            return await ctx.author.send("`You can't whisper to a revealed mayor!`")

        if message is None:
            await ctx.send("`You didn't specifiy a message!`")
            return

        oldsanitizedmessage = unmark(message)
        newsanitizedmessage = re.sub("[`]+", "", oldsanitizedmessage)

        if newsanitizedmessage == "":
            return await ctx.author.send("`Your message was invalid.`")

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
