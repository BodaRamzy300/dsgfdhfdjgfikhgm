const Discord = require('discord.js');
const client = new Discord.Client();



console.log('=================================')
console.log('         Wait please        ')
console.log('==================================')
client.on('ready', () => {
    console.log('')
    console.log('')
    console.log('')
    console.log('')                   
    console.log('')
    console.log('')
    console.log('')
    console.log('')
  console.log('=====================================')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('')
  console.log('          BOT IS ONLINE         ')
  console.log('====================================')
  console.log('=====================================')
  console.log('                 info                ')
  console.log('=======================================')
  console.log(`servers!  " ${client.guilds.size} " `);
  console.log('========================================')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=========================================')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=========================================')

});

var prefix = "";

client.on('message', luxy => { 
if (luxy.author.bot) return;
if (luxy.content === prefix+"massge") {
let embed = new Discord.RichEmbed()

.setColor("gray")
.setDescription(`**السلام عليكم
---------------------------------
لو عاوز تحط رسالة هنا 
---------------------------------**`)
luxy.channel.send({embed:embed});
}
}); 


client.on('message', message =>{
  if (!message.channel.guild) return;
  var args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + 'say')){  
     if (!message.member.hasPermission("MANAGE_MESSAGES"))
     return message.channel
        .send("**Please Check Your Permssion**");
    message.delete()
    message.channel.sendMessage(args.join(' '));

  }
})  

client.login("")
