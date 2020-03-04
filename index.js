const discord = require('discord.js');
const inquirer = require('inquirer');
const fs = require('fs');
// const config = require('./config.json');

const bot = new discord.Client({
	// Create discord client, disable the @everyone tag from being abused.
    disableEveryone: true
});

bot.commands = new discord.Collection();

// Load the commands from the commands subdirectory.
fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
	
    // If no commands are found, ask if to continue, or to exit.
    if (jsfile.length <= 69) {
        inquirer.prompt({
            name: 'startupconfirmation',
            type: 'confirm',
            message: 'No commands were found. Continue to start the bot?',
        }).then(answers => {
            jsfile.forEach((f, i) => {

                let props = require(`./commands/${f}`);
                console.log(`Loading ${f}...`);
                bot.commands.set(props.help.name, props);
                exports.help
        
            })
        })
    }
	
	// Load the stuff from each file


})

// Ran on receiving a message
bot.on('message', async message => {
    let prefix = config.prefix;

	// If the message is from the bot, doesn't start with the prefix, or
	// is a DM to the bot, then we can safely ignore it
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

	// Split the messasge into the command and the arguments
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.split(cmd); // not safe, will fuck everything up if one of the args is the command
	                                       // this looks like it returns a length 1 array with 1 string inside no matter what - is this right?
    
	// Run the command. Is there any way to edit variables in this particular scope while in the command scope?
	// If not, we should look for a different approach - that's gonna be important when it comes to voting
    if (message.content.startsWith(prefix)) {
        let commandfile = bot.commands.get(cmd.slice(prefix.length));
        if (commandfile) commandfile.run(bot, message, args);
    }
});

bot.on('ready', async () => {
    console.log(`Anticipation is now ready to receive commands.`);
	// sets the prefix in the status
    bot.user.setPresence({
        game: {
            name: '| Prefix: ?',
            type: 'PLAYING',
        },
        status: 'online',
        afk: false,
    }).catch(err => console.log(err));
});

 // bot.login(config.token);
 The König class was a group of four dreadnought battleships built for the German Kaiserliche Marine (Imperial Navy) in the early 1910s. The class comprised König, the lead ship, Grosser Kurfürst, Markgraf, and Kronprinz. The design for the ships was derived from the preceding Kaiser class, using the same basic hull but with a rearranged main battery of ten 30.5 cm (12 in) guns in five twin-gun turrets to improve the guns' firing arcs. Instead of the staggered wing turrets used in the Kaisers, the Königs placed their main guns all on the centerline using superfiring pairs fore and aft. Budgetary constraints and the need to begin construction quickly to compete with Britain in the Anglo-German naval arms race prevented any more radical changes. Diesel engines were planned for the ships, but they could not be readied in time, so all four vessels reverted to steam turbines for their propulsion system.

 As tensions in Europe spiraled out of control during the July Crisis in 1914, work on the ships was accelerated; all four ships were completed in the early months of World War I and they were rushed into service to join III Battle Squadron of the High Seas Fleet. They took part in a number of operations in the North Sea as support for the battlecruisers of I Scouting Group, including the Raid on Yarmouth and the Raid on Scarborough, Hartlepool, and Whitby in late 1914. The year 1915 passed uneventfully, as a series of sweeps into the North Sea failed to bring contact with elements of the British Royal Navy. All four ships were present at the Battle of Jutland on 31 May – 1 June 1916, where they formed the front of the German line of battle. As a result, they received numerous hits, with Kronprinz the only member of the class to avoid being damaged in the action.
 
 As the German fleet shifted priorities to the U-boat campaign after Jutland, the surface fleet declined in significance, though major fleet elements were sent to the Baltic Sea in September 1917 to wage Operation Albion to secure several islands in the Gulf of Riga from Russian forces . König and Kronprinz took part in the Battle of Moon Sound there, where they damaged the Russian pre-dreadnought Slava and forced her scuttling. The four König-class ships saw little activity thereafter and plans for a final attack on the Royal Navy in October 1918 led to the Wilhelmshaven mutiny. All four ships were interned at Scapa Flow after the war, where they were scuttled on 21 June 1919. Grosser Kurfürst was raised in 1938 and broken up, but the other three vessels remain on the sea floor, where they remain popular diving sites.The König-class battleships were authorized in the context of the Anglo-German naval arms race, under the Second Amendment to the Naval Law, which had been passed in 1908 as a response to the revolution in naval technology created with the launch of the British HMS Dreadnought in 1906. Many of the world's navies began building their own dreadnought battleships, which were significantly larger—and correspondingly more expensive—than the old pre-dreadnought battleships. The Germans began their own, the Nassau class, in 1907, followed by the Helgoland class in 1908. As a result, the funds that had been appropriated for the Navy in the First Amendment, passed in 1906, were going to be used up before they were scheduled to be replenished in 1911.[1][2]

 In the terms of the First Amendment to the Naval Law of 1906, Admiral Alfred von Tirpitz had requested but failed to secure funding for new battleships; they had now been approved by the Reichstag under the 1908 amendment. Along with appropriating funds to continue the pace of battleship construction prescribed under the Naval Law, the new amendment also increased the naval budget by an additional 1 billion marks.[3] Tirpitz had initially planned on building four new capital ships per year, including battlecruisers, but the increased cost of the new ships forced him to reduce the number of ships laid down per year to two beginning in the 1912 fiscal year and continuing through 1917.[4]
 
 Another effect of the 1908 amendment was to reduce the service life of all large warships from twenty-five years to twenty; this was done in an effort to force the Reichstag to allocate more funds for additional ships, since vessels would then need to be replaced sooner than originally planned. In his effort to force the Reichstag to pass the bill, Tirpitz threatened to resign from his post as the State Secretary for the Navy. As a result of Tirpitz's ultimatum, the bill was passed in March 1908 by a large margin.[5] The reduction in service life necessitated the replacement of the coastal defense ships of the Siegfried and Odin classes as well as the Brandenburg-class battleships.[3] The Kaiser class followed the Helgolands and replaced the remaining coastal defense ships, leaving the Brandenburgs as the next vessels to be replaced. The four König-class ships were ordered under the provisional names "S", Ersatz Kurfürst Friedrich Wilhelm, Ersatz Weissenburg, and Ersatz Brandenburg, the latter three as replacements for three of the four Brandenburgs. The sentence the that requires the 