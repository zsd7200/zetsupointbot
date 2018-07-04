# ZetsuPointBot
Discord Bot for validation of Pokémon Teams.

Export a team from [Pokémon Showdown!](https://play.Pokémonshowdown.com/teambuilder), DM the bot, and it will validate your team based on the ZetsuPoint™ system, which is as follows:

- 50 for Uber
- 35 for OU / UUBL
- 25 for UU / RUBL
- 10 for RU / NUBL
- 5 for NU / PU / PUBL
Tiers are based on [Smogon's Sun and Moon](https://www.smogon.com/dex/sm/Pokémon/) tier lists.

Teams will be considered valid if they are 100 points or less, and follow certain clauses:
- All matches will take place on Pokémon Showdown!.
- Species Clause
    - A player cannot have two Pokémon with the same National Pokédex number on a team.
- Sleep Clause
    - If a player has already put a Pokémon on his/her opponent's side to sleep and it is still sleeping, another one can't be put to sleep.
- Evasion Clause
    - A Pokémon may not have either Double Team or Minimize in its moveset.
- OHKO Clause
    - A Pokémon may not have the moves Fissure, Guillotine, Horn Drill, or Sheer Cold in its moveset.
- Endless Battle Clause
    - Players cannot intentionally prevent an opponent from being able to end the game without forfeiting.
- Mega-Rayquaza Clause
    - Rayquaza is not permitted to Mega Evolve.
- Baton Pass limited to 1 Pokémon on a team
- Not all 6 slots have to be used, but players have to use at least 3 Pokémon

The bot will generate an MD5 checksum and log that to an external file ("md5s.txt", which will be created if it does not exist), which can then be validated in a public channel by typing "pok valid \[md5]". The point of this is to keep teams anonymous before the ZetsuPoint league event.

Requires [discord.js](https://www.npmjs.com/package/discord.js), [md5](https://www.npmjs.com/package/md5), and [create-if-not-exist](https://www.npmjs.com/package/create-if-not-exist) Node.js modules.
