import discord
import config
from discord.ext import commands


class Game(commands.Cog):

    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="whisper", aliases=["whisp", "w", "msg"])
    @commands.dm_only()
    @commands.has_role(config.playerRole)
    async def whipser(self, ctx, user: discord.User, *, message=None):

        blackmailer = await commands.UserConverter().convert(ctx, config.blackmailer)
        mainmatch = await commands.TextChannelConverter().convert(ctx, config.mainmatch)

        if message is None:
            await ctx.send("`You didn't specifiy a message!`")
            return

        if ctx.author.id is user.id:
            await ctx.send("`You can't whisper to yourself.`")
            return

        try:
            await user.send(f"`{ctx.author.display_name} whispers to you: {message}`")
            await ctx.author.send(f"`You whisper to {user.display_name}: {message}`")
            if (blackmailer.id == ctx.author.id or blackmailer.id == user.id):
                return
            await blackmailer.send(
                f"`{ctx.author.display_name} whispers to {user.display_name}: {message}`")
            await mainmatch.send(f"`{ctx.author.display_name} whispers to {user.display_name}`")
        except discord.HTTPException:
            await ctx.author.send(f"`You could not whisper to {user.display_name}.`")


def setup(bot):
    bot.add_cog(Game(bot))
