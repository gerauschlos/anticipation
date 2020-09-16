import logging
import config
import sys
import os
import ctypes
from cv2 import waitKey
from discord.ext import commands


ctypes.windll.kernel32.SetConsoleTitleW("Anticibot v0.0.2~alpha")
os.system("cls")


class DevNull:
    def write(self, msg):
        pass


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

try:
    bot.run(config.token)
except:
    os.system("cls")
    print("Invalid token was provided.")
    sys.stderr = DevNull()
    waitKey(10000)
