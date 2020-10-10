import logging
from typing import List
import config
import sys
import os
import ctypes
from cv2 import waitKey
from discord.ext import commands
import discord

ctypes.windll.kernel32.SetConsoleTitleW(f"Anticibot v{config.version}")
os.system("cls")


class DevNull():
    pass


class Bot(commands.Bot):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def load_extensions(self):
        extensions = [f"ext.{f[:-3]}" for f in os.listdir('./ext')]
        game_extensions = [
            f"ext.game.{f[:-3]}" for f in os.listdir('./ext.game')]

        extensions += game_extensions

        for extension in extensions:
            self.load_extension(extension)

    async def on_ready(self):

        self.load_extensions()
        self.load_extension('jishaku')

        print("Bot is online!")


def logger_setup():
    logger = logging.getLogger('discord')
    logger.setLevel(logging.DEBUG)
    handler = logging.FileHandler(
        filename='discord.log', encoding='utf-8', mode='w')
    handler.setFormatter(logging.Formatter(
        '%(asctime)s:%(levelname)s:%(name)s: %(message)s'))
    logger.addHandler(handler)


if __name__ == "__main__":
    intents = discord.Intents.default()
    intents.members = True
    intents.guilds = True
    intents.messages = True
    bot = Bot(command_prefix=config.prefix,
              case_insensitive=True, intents=intents)

    try:
        bot.run(config.token)
    except:
        os.system("cls")
        print("Invalid token was provided.")
        sys.stderr = DevNull()
        waitKey(10000)
    else:
        logger_setup()
