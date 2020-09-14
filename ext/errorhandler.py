import traceback
import sys
from discord.ext import commands


class ErrorHandler(commands.Cog):

    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_command_error(self, ctx, error):

        if hasattr(ctx.command, "on_error"):
            return

        if ctx.cog:
            if ctx.cog._get_overridden_method(ctx.cog.cog_command_error) is not None:
                return

        error = getattr(error, "original", error)

        if isinstance(error, commands.CommandNotFound):
            return

        elif isinstance(error, commands.NotOwner):
            return

        elif isinstance(error, commands.PrivateMessageOnly):
            return

        elif isinstance(error, commands.NoPrivateMessage):
            return

        elif isinstance(error, commands.DisabledCommand):
            await ctx.send("This command has been disabled.")

        elif isinstance(error, commands.BadArgument):
            if (ctx.command.qualified_name == "whisper"):
                return await ctx.author.send("`User was not found.`")
            else:
                print('Ignoring exception in command {}:'.format(
                    ctx.command), file=sys.stderr)
            traceback.print_exception(
                type(error), error, error.__traceback__, file=sys.stderr)

        elif isinstance(error, commands.MissingRole):
            if (ctx.command.qualified_name == "whisper"):
                await ctx.author.send("`You are not currently playing!`")
            else:
                print('Ignoring exception in command {}:'.format(
                    ctx.command), file=sys.stderr)
            traceback.print_exception(
                type(error), error, error.__traceback__, file=sys.stderr)

        else:
            print('Ignoring exception in command {}:'.format(
                ctx.command), file=sys.stderr)
            traceback.print_exception(
                type(error), error, error.__traceback__, file=sys.stderr)


def setup(bot):
    bot.add_cog(ErrorHandler(bot))
