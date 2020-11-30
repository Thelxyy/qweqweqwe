const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = [
    "https://cdn.discordapp.com/attachments/695034159093121044/759174657256718336/2e96039a875adce6abb08ad8179cfbd4-1.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/759174658288517170/261e3e526cb792603a01ef2d246ca057-1.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/759174659123445820/4ffac42175f2faad18e2e1381bf17447.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/759174660520411156/dd4633b96f6655935f90785aa415143b.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/759174662214778921/0f7906bdd699851ff4a38c04d22ddd9a.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/759174663812939786/303861124082201.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/759174665003466822/image0-39.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/759174665624092703/image0-22.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/759175010467315813/billie9.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/759175010081308687/billie1.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/759175011214163998/a_fad4f744e4eaa10f539c40e6a993b0d6.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/759175011704766485/gizemiabillieeilishgif_9.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/759175013584076820/gizemiabillieeilishgif_5.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/759732312249335828/billieeilishgif2.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/760405199021539368/bruh_62.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/760463235630628864/a_c28ce65ee289a39850384846bd01fbd8.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/760463232430768128/a_0a87a19c1dfc16d4d9aaf802657aac3b.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/755016134457294888/9.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/755016273112465458/4.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/755016519884472330/7.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/754935310290518056/backho.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/754656982534848522/image0-27.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/754656986783547412/billie_gif_by_tekashi_34.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/754586254888271902/a_fdc585614a491e2547e520be0595bd0c.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/753996345102041088/a_e10954a99b09809c684eeda9693154ca.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/753978714940768386/7.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/753521730399502416/billie.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/753187709530406964/1.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/753187519943802920/3.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/752516652528173146/unnamed.gif",
    "https://cdn.discordapp.com/attachments/695034159093121044/752516637638262855/80b7f18eb8104b3350a67dac570566a2.gif"
    
  ];

  let result = Math.floor(Math.random() * replies.length);

  let gifembed = new Discord.RichEmbed()

    .setTitle("Billie Eilish Gif ")

    .setColor("BLACK")

    .setFooter(`${message.author.tag} `, message.author.avatarURL)

    .setImage(replies[result]);

  message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: ["be-gif", "be"],

  permLevel: 0
};

exports.help = {
  name: "be",

  description: "Rastgele  billie eilish gif atar.",

  usage: "be"
};
