// Import the node modules
const Discord = require('discord.js');
const md5 = require('md5');
const fs = require('fs');
const createIfNotExist = require("create-if-not-exist");
const file = "md5s.txt";

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = '[your token here!]';

// create bot prefix
const prefix = 'pok ';

// create tiers
let uber = [
	"Aegislash",
	"Arceus",
	"Blaziken",
	"Darkrai",
	"Deoxys",
	"Dialga",
	"Genesect",
	"Giratina",
	"Groudon",
	"Ho-Oh",
	"Kyogre",
	"Kyurem-White",
	"Landorus",
	"Lugia",
	"Lunala",
	"Marshadow",
	"Mewtwo",
	"Naganadel",
	"Necrozma-Dawn-Wings",
	"Necrozma-Dusk-Mane",
	"Palkia",
	"Pheromosa",
	"Rayquaza",
	"Reshiram",
	"Shaymin-Sky",
	"Solgaleo",
	"Xerneas",
	"Yveltal",
	"Zekrom",
	"Zygarde-Complete"
];
let ouUUBL = [
	"Alakazam",
	"Amoonguss",
	"Bisharp",
	"Blacephalon",
	"Celesteela",
	"Chansey",
	"Clefable",
	"Excadrill",
	"Ferrothorn",
	"Garchomp",
	"Greninja",
	"Gyarados",
	"Hawlucha",
	"Heatran",
	"Hoopa-Unbound",
	"Jirachi",
	"Kartana",
	"Keldeo",
	"Kyurem-Black",
	"Landorus-Therian",
	"Latios",
	"Magearna",
	"Magnezone",
	"Mamoswine",
	"Mew",
	"Mimikyu",
	"Pelipper",
	"Rotom-Wash",
	"Skarmory",
	"Tangrowth",
	"Tapu Bulu",
	"Tapu Fini",
	"Tapu Koko",
	"Tapu Lele",
	"Tornadus-Therian",
	"Toxapex",
	"Tyranitar",
	"Victini",
	"Volcarona",
	"Zapdos",
	"Azumarill",
	"Breloom",
	"Buzzwole",
	"Conkeldurr",
	"Diggersby",
	"Dragonite",
	"Manaphy",
	"Ninetales-Alola",
	"Porygon-Z",
	"Salamence",
	"Scolipede",
	"Staraptor",
	"Thundurus",
	"Weavile",
	"Xurkitree"
];
let uuRUBL = [
	"Alomomola",
	"Arcanine",
	"Azelf",
	"Blissey",
	"Celebi",
	"Chandelure",
	"Cobalion",
	"Crawdaunt",
	"Crobat",
	"Darmantian",
	"Empoleon",
	"Gengar",
	"Gliscor",
	"Haxorus",
	"Heracross",
	"Hippowdon",
	"Hydreigon",
	"Infernape",
	"Klefki",
	"Kommo-o",
	"Krookodile",
	"Latias",
	"Magneton",
	"Mantine",
	"Marowak-Alola",
	"Metagross",
	"Muk-Alola",
	"Nidoking",
	"Nihilego",
	"Primarina",
	"Raikou",
	"Scizor",
	"Seismitoad",
	"Serperior",
	"Sharpedo",
	"Stakataka",
	"Starmie",
	"Suicune",
	"Swampert",
	"Sylveon",
	"Tentacruel",
	"Terrakion",
	"Togekiss",
	"Volcanion",
	"Durant",
	"Kyurem",
	"Lucario",
	"Mienshao",
	"Reuniclus",
	"Talonflame",
	"Tornadus",
	"Venomoth",
	"Zoroark"
];
let ruNUBL = [
	"Aerodactyl",
	"Araquanid",
	"Bewear",
	"Bronzong",
	"Chesnaught",
	"Cloyster",
	"Cresselia",
	"Decidueye",
	"Dhelmise",
	"Donphan",
	"Doublade",
	"Dragalge",
	"Drapion",
	"Emboar",
	"Entei",
	"Escavalier",
	"Espeon",
	"Feraligatr",
	"Florges",
	"Flygon",
	"Forretress",
	"Galvantula",
	"Gardevoir",
	"Gligar",
	"Golisopod",
	"Goodra",
	"Honchkrow",
	"Hoopa",
	"Jolteon",
	"Linoone",
	"Lycanroc-Dusk",
	"Machamp",
	"Mandibuzz",
	"Meloetta",
	"Milotic",
	"Moltres",
	"Necrozma",
	"Nidoqueen",
	"Pangoro",
	"Porygon2",
	"Quagsire",
	"Registeel",
	"Rhyperior",
	"Roserade",
	"Rotom-Heat",
	"Rotom-Mow",
	"Salazzle",
	"Shaymin",
	"Snorlax",
	"Steelix-Mega",
	"Swellow",
	"Tsareena",
	"Tyrantrum",
	"Umbreon",
	"Virizion",
	"Yanmega",
	"Zygarde-10%",
	"Barbaracle",
	"Bruxish",
	"Cofagrigus",
	"Exploud",
	"Kingdra",
	"Noivern",
	"Ribombee",
	"Slurpuff",
	"Venusaur"
];
let nuPUpubl = [
	"Accelgor",
	"Altaria",
	"Ambipom",
	"Aromatisse",
	"Audino",
	"Blastoise",
	"Braviary",
	"Cinccino",
	"Clawitzer",
	"Comfey",
	"Cryogonal",
	"Delphox",
	"Diancie",
	"Dodrio",
	"Druddigon",
	"Froslass",
	"Garbodor",
	"Gigalith",
	"Golbat",
	"Guzzlord",
	"Hariyama",
	"Heliolisk",
	"Hitmonlee",
	"Hitmontop",
	"Houndoom",
	"Incineroar",
	"Jellicent",
	"Klinklang",
	"Malamar",
	"Medicham",
	"Miltank",
	"Minior",
	"Mismagius",
	"Omastar",
	"Palossand",
	"Passimian",
	"Piloswine",
	"Qwilfish",
	"Rhydon",
	"Rotom",
	"Sceptile",
	"Scrafty",
	"Scyther",
	"Sigilyph",
	"Silvally",
	"Slowbro",
	"Slowking",
	"Sneasel",
	"Steelix",
	"Toxicroak",
	"Uxie",
	"Vanilluxe",
	"Vaporeon",
	"Vikavolt",
	"Vileplume",
	"Vivillon",
	"Archeops",
	"Charizard",
	"Gallade",
	"Magmortar",
	"Samurott",
	"Sawk",
	"Tauros",
	"Typhlosion",
	"Abomasnow",
	"Absol",
	"Aggron",
	"Ampharos",
	"Arbok",
	"Ariados",
	"Armaldo",
	"Articuno",
	"Aurorus",
	"Avalugg",
	"Basculin",
	"Bastiodon",
	"Beartic",
	"Beautifly",
	"Beedrill",
	"Beheeyem",
	"Bellossom",
	"Bibarel",
	"Bouffalant",
	"Butterfree",
	"Cacturne",
	"Carbink",
	"Carnivine",
	"Carracosta",
	"Castform",
	"Chatot",
	"Cherrim",
	"Chimecho",
	"Claydol",
	"Clefairy",
	"Corsola",
	"Crabominable",
	"Cradily",
	"Crustle",
	"Dedenne",
	"Delcatty",
	"Delibird",
	"Dewgong",
	"Ditto",
	"Drampa",
	"Drifblim",
	"Dugtrio",
	"Dunsparce",
	"Dusknoir",
	"Dustox",
	"Elektross",
	"Electivire",
	"Electrode",
	"Emolga",
	"Exeggutor",
	"Farfetch'd",
	"Fearow",
	"Ferroseed",
	"Flareon",
	"Floatzel",
	"Furfrou",
	"Furret",
	"Gastrodon",
	"Girafarig",
	"Glaceon",
	"Glalie",
	"Gogoat",
	"Golduck",
	"Golem",
	"Golurk",
	"Gorebyss",
	"Gothitelle",
	"Gourgeist",
	"Granbull",
	"Grumpig",
	"Gumshoos",
	"Gurdurr",
	"Haunter",
	"Heatmor",
	"Hitmonchan",
	"Huntail",
	"Hypno",
	"Illumise",
	"Jumpluff",
	"Jynx",
	"Kabutops",
	"Kangaskhan",
	"Kecleon",
	"Kingler",
	"Komala",
	"Kricketune",
	"Lanturn",
	"Lapras",
	"Leafeon",
	"Leavanny",
	"Ledian",
	"Lickilicky",
	"Liepard",
	"Liligant",
	"Lopunny",
	"Ludicolo",
	"Lumineon",
	"Lunatone",
	"Lurantis",
	"Luvdisc",
	"Luxray",
	"Lycanroc",
	"Magcargo",
	"Manectric",
	"Maractus",
	"Marowak",
	"Masquerain",
	"Mawile",
	"Meganium",
	"Meowstic",
	"Mesprit",
	"Mightyena",
	"Minun",
	"Mothim",
	"Mr. Mime",
	"Mudsdale",
	"Muk",
	"Musharna",
	"Ninetales",
	"Ninjask",
	"Noctowl",
	"Octillery",
	"Oranguru",
	"Oricorio",
	"Pachirisu",
	"Parasect",
	"Persian",
	"Phione",
	"Pidgeot",
	"Pinsir",
	"Plusle",
	"Politoed",
	"Poliwrath",
	"Primeape",
	"Probopass",
	"Purugly",
	"Pyroar",
	"Pyukumuku",
	"Raichu",
	"Rampardos",
	"Rapidash",
	"Raticate",
	"Regice",
	"Regigigas",
	"Regirock",
	"Relicanth",
	"Rotom-Fan",
	"Rotom-Frost",
	"Sableye",
	"Sandslash",
	"Sawsbuck",
	"Seaking",
	"Seviper",
	"Shedinja",
	"Shiftry",
	"Shiinotic",
	"Shuckle",
	"Simipour",
	"Simisage",
	"Simisear",
	"Skuntank",
	"Slaking",
	"Smeargle",
	"Solrock",
	"Spinda",
	"Spiritomb",
	"Stantler",
	"Stoutland",
	"Stunfisk",
	"Sudowoodo",
	"Sunflora",
	"Swalot",
	"Swanna",
	"Swoobat",
	"Throh",
	"Togedemaru",
	"Togetic",
	"Torkoal",
	"Torterra",
	"Toucannon",
	"Trevenant",
	"Tropius",
	"Turtonator",
	"Type: Null",
	"Unfezant",
	"Unown",
	"Ursaring",
	"Vespiquen",
	"Victreebel",
	"Volbeat",
	"Wailord",
	"Walrein",
	"Watchog",
	"Weezing",
	"Whiscash",
	"Wigglytuff",
	"Wishiwashi",
	"Wobbuffet",
	"Wormadam",
	"Zangoose",
	"Zebstrika"
];

// create gloal point variable
let point;

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
    client.user.setActivity("pok dm"); // set game upon login
    console.log('sloooooooowpoke');
	createIfNotExist(file,''); // create md5s.txt if it does not exist already
});

// create an event listener for messages
client.on('message', message => {
    
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if(message.author.bot) return;
    
	// if the message that was sent was in a DM, have the bot respond to it
	if(message.channel.type === 'dm')
	{
		if (validateTeam(message) === true)
		{			
			// create a string with the md5 and a newline
			let addStr = md5(message.content) + "\n";
			
			// add new md5 to file
			fs.appendFile(file, addStr, (err) => {
				if (err) throw err;
			});
			
			// return md5
			return message.channel.send("md5: " + md5(message.content) + "\nTyping `pok valid [md5]` with your now-verified MD5 will display a message stating that your team has been validated.");
		}
		
		// if validateTeam returns false, team is not valid;
		else
			return message.channel.send("Not a valid team!");
	}
	
    // Otherwise ignore any message that does not start with the pok prefix, 
    // which is set above
    if(message.content.indexOf(prefix) !== 0) return;
    
    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    
    // display test text, akin to ping pong
    if(command === "poke")
	{
		return message.channel.send("sloooow");
	}
	
	// read from a file with validated checksums in it and return a message whether the team has been validated
	if(command === "valid")
	{
		// if there is no argument, return a dummy message
		if (args[0] == null) return message.channel.send("pok valid [md5]")
			
		// create a new string with the md5 and a new line
		let checkMD5 = args[0] + "\n";
		
		// read file
		fs.readFile(file, 'utf8', (err, data) => {
			if (err) throw err; // throw error if something goes awry
			
			// check to see if the MD5 is in the document
			if (data.indexOf(checkMD5) >= 0)
				return message.channel.send("Valid documented team!");
			
			// otherwise...
			else
			{
				if(args[0].length != 32) // if input is too short
					return message.channel.send("Not a valid MD5 checksum.");
				else // if input is invalid or undocumented
					return message.channel.send("Invalid or undocumented team.");
			}
		});
	}
	
	// command to initiate a dm with the bot
	if(command === "dm")
	{
		return message.author.send("Please send your team, exported from `Pokémon Showdown!`.\nIf your team is valid, I will respond with an MD5 Checksum.");
	}

});

// function for validation of teams
function validateTeam(msg)
{	
	// initialize point
	point = 0;

	// first check if the message is even long enough to contain a proper team
	if (msg.content.length > 400)
	{
		// OHKO Clause validation
		if (msg.content.indexOf("Fissure") >= 0)
		{
			msg.channel.send("Fissure is not allowed, due to the OHKO Clause.");
			return false;
		}
		else if (msg.content.indexOf("Guillotine") >= 0)
		{
			msg.channel.send("Guillotine is not allowed, due to the OHKO Clause.");
			return false;
		}
		else if (msg.content.indexOf("Horn Drill") >= 0)
		{
			msg.channel.send("Horn Drill is not allowed, due to the OHKO Clause.");
			return false;
		}
		else if (msg.content.indexOf("Sheer Cold") >= 0)
		{
			msg.channel.send("Sheer Cold is not allowed, due to the OHKO Clause.");
			return false
		}
		
		// Evasion Clause validation
		if (msg.content.indexOf("Double Team") >= 0)
		{
			msg.channel.send("Double Team is not allowed, due to the Evasion Clause.");
			return false
		}
		else if (msg.content.indexOf("Minimize") >= 0)
		{
			msg.channel.send("Minimize is not allowed, due to the Evasion Clause.");
			return false
		}
		
		// Mega Rayquaza Clause validation
		if (msg.content.indexOf("Dragon Ascent") >= 0)
		{
			msg.channel.send("Dragon Ascent is not allowed, due to the Mega-Rayquaza Clause.");
			return false;
		}
		
		// check for more than one instance of baton pass
		if (msg.content.indexOf("Baton Pass") >= 0)
		{
			// get index of first baton pass and iterate it
			let firstBaton = msg.content.indexOf("Baton Pass");			
			firstBaton++;
			
			// check from that point on for another instance of baton pass
			if (msg.content.indexOf("Baton Pass", firstBaton) >= 0)
			{
				msg.channel.send("More than one instance of Baton Pass has been detected! Please restrict Baton Pass use to one Pokémon.");
				return false
			}

		}
		
		// start cycling through teams
		if (pokeCheck(msg) === false)
		{
			msg.channel.send("Two Pokémon of the same species are not allowed due to the Species Clause.");
			return false;
		}
		
		// check for any megas
		megaCheck(msg);
		
		if (point <= 100)
		{
			let ptStr = "Total ZetsuPoints:tm:: " + point;
			msg.channel.send("Team is valid!\n" + ptStr + "\nMD5 below will be marked as valid.");
			return true;
		}
		else
		{
			let num = point - 100;
			let ptStr = "Total ZetsuPoints:tm:: " + point;
			msg.channel.send(ptStr + "\nYour ZetsuPoint:tm: total is over the limit by " + num + ".");
			return false;
		}

	}
	
	else
	{
		msg.channel.send("Team must be comprised of _at least_ 3 Pokémon.");
		return false;
	}
	
	// in case it somehow breaks out of these conditions, return false by default
	console.log("How did we get here?");
	return false;
}

// add points based on pokemon in the team
function pokeCheck(msg)
{
	for (i = 0; i < uber.length; i++)
		if (msg.content.indexOf(uber[i]) >= 0)
		{
			// get index of first pokemon for species clause checks
			let firstPoke = msg.content.indexOf(uber[i]);			
			firstPoke += 30;
			
			// check from that point on for another instance of the same species
			if (msg.content.indexOf(uber[i], firstPoke) >= 0)
			{
				msg.channel.send("More than one instance of species `" + uber[i] + "` has been detected!");
				return false
			}

			point += 50;
		}
		
	for (i = 0; i < ouUUBL.length; i++)
		if (msg.content.indexOf(ouUUBL[i]) >= 0)
		{
			// get index of first pokemon for species clause checks
			let firstPoke = msg.content.indexOf(ouUUBL[i]);			
			firstPoke += 30;
			
			// check from that point on for another instance of the same species
			if (msg.content.indexOf(ouUUBL[i], firstPoke) >= 0)
			{
				msg.channel.send("More than one instance of species `" + ouUUBL[i] + "` has been detected!");
				return false
			}

			point += 35;
		}
		
	for (i = 0; i < uuRUBL.length; i++)
		if (msg.content.indexOf(uuRUBL[i]) >= 0)
		{
			// get index of first pokemon for species clause checks
			let firstPoke = msg.content.indexOf(uuRUBL[i]);			
			firstPoke += 30;
			
			// check from that point on for another instance of the same species
			if (msg.content.indexOf(uuRUBL[i], firstPoke) >= 0)
			{
				msg.channel.send("More than one instance of species `" + uuRUBL[i] + "` has been detected!");
				return false
			}

			point += 25;
		}
		
	for (i = 0; i < ruNUBL.length; i++)
		if (msg.content.indexOf(ruNUBL[i]) >= 0)
		{
			// get index of first pokemon for species clause checks
			let firstPoke = msg.content.indexOf(ruNUBL[i]);			
			firstPoke += 30;
			
			// check from that point on for another instance of the same species
			if (msg.content.indexOf(ruNUBL[i], firstPoke) >= 0)
			{
				msg.channel.send("More than one instance of species `" + ruNUBL[i] + "` has been detected!");
				return false
			}

			point += 10;
		}
		
	for (i = 0; i < nuPUpubl.length; i++)
		if (msg.content.indexOf(nuPUpubl[i]) >= 0)
		{
			// get index of first pokemon for species clause checks
			let firstPoke = msg.content.indexOf(nuPUpubl[i]);			
			firstPoke += 30;
			
			// check from that point on for another instance of the same species
			if (msg.content.indexOf(nuPUpubl[i], firstPoke) >= 0)
			{
				msg.channel.send("More than one instance of species `" + nuPUpubl[i] + "` has been detected!");
				return false
			}

			point += 5;
		}
	
	return true;
}

// if a Mega form is in a different tier, add point accordingly
function megaCheck(msg)
{
	// +45 point
	if (msg.content.indexOf("Kangaskhanite") >= 0)
		point += 45;
	
	// +30 point
	if (msg.content.indexOf("Charizardite X") >= 0)
		point += 30;
	if (msg.content.indexOf("Charizardite Y") >= 0)
		point += 30;
	if (msg.content.indexOf("Diancite") >= 0)
		point += 30;
	if (msg.content.indexOf("Lopunnite") >= 0)
		point += 30;
	if (msg.content.indexOf("Mawilite") >= 0)
		point += 30;
	if (msg.content.indexOf("Medichamite") >= 0)
		point += 30;
	if (msg.content.indexOf("Pinsirite") >= 0)
		point += 30;
	if (msg.content.indexOf("Sablenite") >= 0)
		point += 30;
	if (msg.content.indexOf("Galladite") >= 0)
		point += 30;
	
	// +25 point
	if (msg.content.indexOf("Gengarite") >= 0)
		point += 25;
	if (msg.content.indexOf("Lucarionite") >= 0)
		point += 25;
	if (msg.content.indexOf("Metagrossite") >= 0)
		point += 25;
	if (msg.content.indexOf("Venusaurite") >= 0)
		point += 25;
	if (msg.content.indexOf("Gardevoirite") >= 0)
		point += 25;
	
	// +20 point
	if (msg.content.indexOf("Aggronite") >= 0)
		point += 20;
	if (msg.content.indexOf("Altarianite") >= 0)
		point += 20;
	if (msg.content.indexOf("Beedrillite") >= 0)
		point += 20;
	if (msg.content.indexOf("Manectite") >= 0)
		point += 20;
	if (msg.content.indexOf("Pidgeotite") >= 0)
		point += 20;
	if (msg.content.indexOf("Sceptilite") >= 0)
		point += 20;
	if (msg.content.indexOf("Slowbronite") >= 0)
		point += 20;
	if (msg.content.indexOf("Absolite") >= 0)
		point += 20;
	if (msg.content.indexOf("Houndoominite") >= 0)
		point += 20;
	
	// +15 point
	if (msg.content.indexOf("Salamencite") >= 0)
		point += 15;
	if (msg.content.indexOf("Aerodactylite") >= 0)
		point += 15;
	
	// +10 point
	if (msg.content.indexOf("Latiasite") >= 0)
		point += 10;
	if (msg.content.indexOf("Scizorite") >= 0)
		point += 10;
	if (msg.content.indexOf("Swampertite") >= 0)
		point += 10;
	if (msg.content.indexOf("Heracronite") >= 0)
		point += 10;
	
	// +5 point
	if (msg.content.indexOf("Ampharosite") >= 0)
		point += 5;
	if (msg.content.indexOf("Banettite") >= 0)
		point += 5;
	if (msg.content.indexOf("Blastoisinite") >= 0)
		point += 5;
	if (msg.content.indexOf("Glalitite") >= 0)
		point += 5;
	if (msg.content.indexOf("Abomasite") >= 0)
		point += 5;
	if (msg.content.indexOf("Cameruptite") >= 0)
		point += 5;
}

// log the bot in
client.login(token);
