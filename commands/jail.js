const Discord = require("discord.js");
const fs = require('fs');
const important = JSON.parse(fs.readFileSync('important.json'));

module.exports.run = async (bot, message, args) => {
    let cell = "Does it even matter?";
    //console.log(important.testing)
   // let test = toString(important.test);
    
    
    

   // var test = {"test":9}
 //  console.log(important.test)
    important.test = 100;
  //  test = JSON.stringify(important);
 //   console.log(JSON.stringify(important));

    //console.log(important.testing)
 /*   function finished(err){
        console.log(err)
    }*/
    //console.log(important.testing)
    let location = message.channel.name;
    let tagged = message.mentions.roles.first();
    if(tagged === undefined){
    message.channel.send("You have to mention a **playerrole** for this command to work");
    return;
    }else{
        for(let i = 0; i<26; i++ ){
            cell = tagged.name; 
            if(i.toString() === cell){
                break;
            }else{
                if(i === 25){
                   message.channel.send("You have to mention a **playerrole** for this command to work");
                   return;
                }
            }
        }
    }



    
    if(location !== "jail") return;
    if(important._day === false){
        message.channel.send("This command cannot be used in the night :grimacing:");
        return;
    }
    

    if(message.member.roles.some(r=>["Host", "Administrator", "Owner", important.jailor].includes(r.name))){
           
        let jailed = cell.toString();
        important._jailed = jailed;  
    }
        fs.writeFile('important.json',JSON.stringify(important),'utf8',(err) => {
        if (err) throw err;
        console.log("Saved.");
    });

}

module.exports.help = {
    name: "jail"
}