import discord
import config
from discord.ext.commands import Context
from discord.ext import commands

from main import Bot


class Game_Admin(commands.Cog):

    def __init__(self, bot: Bot):
        self.bot = bot
        self.guild = self.bot.get_guild(int(config.guild_id))
        self.player_role = discord.utils.get(self.guild.roles, id=int(config.role_player_id))

    async def can_timecycle(self, ctx: Context) -> bool:
        if ctx.message.channel.id != int(config.mainmatch_channel_id):
            await ctx.send("You can only use this command in main-match channels!")
            return False
        else:
            return True

    async def switch_timecycle(self, ctx: Context) -> bool:
        mainmatch_channel = await commands.TextChannelConverter().convert(ctx, config.mainmatch_channel_id)

        if config.time_day:
            await ctx.send("Night time has begun, dm the host with your actions.")
            await mainmatch_channel.set_permissions(self.player_role, send_messages=False)
            # full moon, x night until necro, necro
            config.time_day = False
        elif not config.time_day:
            await ctx.send(f"{self.player_role.mention} Day time has begun, talk!")
            await mainmatch_channel.set_permissions(self.player_role, send_messages=True)
            config.time_day = True

    @commands.command(name="timecycle", aliases=["cycle"])
    @commands.guild_only()
    @commands.has_any_role(525059607937155072, 569304339684917251, 692849659642642473, 635943234568323099, 762137944655003654)
    async def timecycle(self, ctx: Context):
        if await self.can_timecycle(ctx):
            await self.switch_timecycle(ctx)


def setup(bot):
    bot.add_cog(Game_Admin(bot))
