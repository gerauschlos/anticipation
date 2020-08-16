import logging
import config
from discord.ext import commands


class Main(commands.Bot):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def load_extensions(self, extensions):
        for extension in extensions:
            self.load_extension(extension)


bot = Main(command_prefix=config.prefix, case_insensitive=True)
bot.load_extensions(config.extensions)
bot.load_extension('jishaku')


@bot.event
async def on_ready():
    print("Bot is online!")


@bot.event
async def on_message(message):
    await bot.process_commands(message)


logger = logging.getLogger('discord')
logger.setLevel(logging.DEBUG)
handler = logging.FileHandler(
    filename='discord.log', encoding='utf-8', mode='w')
handler.setFormatter(logging.Formatter(
    '%(asctime)s:%(levelname)s:%(name)s: %(message)s'))
logger.addHandler(handler)

bot.run(config.token)
