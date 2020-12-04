from sqlalchemy import Column, Boolean, BigInteger, ForeignKey
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Guild(Base):
    __tablename__ = "guilds"

    guild_id = Column(BigInteger, primary_key=True)
    player_role = Column(BigInteger)
    dead_role = Column(BigInteger)
    blackmailer_role = Column(BigInteger)
    mayor_game = Column(BigInteger)
    started_game = Column(Boolean)


class AdminRole(Base):
    __tablename__ = "admin_roles"

    role_id = Column(BigInteger, primary_key=True)
    guild_id = Column(BigInteger, ForeignKey("guilds.guild_id"), primary_key=True)


class Player(Base):
    __tablename__ = "players"

    user_id = Column(BigInteger, primary_key=True)
    guild_id = Column(BigInteger, ForeignKey("guilds.guild_id"), primary_key=True)
