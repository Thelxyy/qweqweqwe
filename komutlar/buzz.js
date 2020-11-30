const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => { ///buzz Özel gifleri
  let replies = [
    "https://cdn.discordapp.com/attachments/753636042346856619/758995200910819358/7.gif",
    "https://cdn.discordapp.com/attachments/753636042346856619/758995230530994216/15.gif",
    "https://cdn.discordapp.com/attachments/753636397688291419/758998273208877086/43.gif",
    "https://cdn.discordapp.com/attachments/753636397688291419/758998288782327808/45.gif",
    "https://cdn.discordapp.com/attachments/753636331313168425/754481778592317490/a_1e642f4ef5b2a2d0e7c4513c90ac5ffa.gif",
    "https://cdn.discordapp.com/attachments/695037143453794304/761254377376841728/a_1d8552dd3ec3efa6e761ea26f0d9b518.gif",
    "https://cdn.discordapp.com/attachments/763462658790916116/763468095926042674/a_29c01ab1bc19d4c7a11d0815dc6c09f9.gif",
    "https://cdn.discordapp.com/attachments/763462658790916116/763468103195295834/a_910714b9d82101bfa26e55bc89bb97be.gif",
    "https://cdn.discordapp.com/attachments/695056345413451927/756079363601989692/yN.gif",
    "https://cdn.discordapp.com/attachments/721044903165165689/761928604576645141/6lbX.gif",
    "https://cdn.discordapp.com/attachments/695034465340227655/761255374786920488/1536656125_1485333085_animation_2.gif",
    "https://cdn.discordapp.com/attachments/763462658790916116/763468204306726932/a_f26595250ccf8a7b857e4ef349617887.gif",
    "https://cdn.discordapp.com/attachments/615977432180326430/762023520414334996/image0-4-1.gif",
    "https://cdn.discordapp.com/attachments/699339066029768796/761700366911143946/2.gif",
    "https://cdn.discordapp.com/attachments/690234711779311822/760767915045289994/7f75f7c297c179d510fb08b7be57729b.gif",
    "https://cdn.discordapp.com/attachments/616157762392686593/762100259538599966/image0_3.gif",
    "https://cdn.discordapp.com/attachments/755894033880186880/756890251070406696/8f70478bbd95542483d23236fe3d053e.gif",
    "https://cdn.discordapp.com/attachments/615977432180326430/762023210170318848/billie_13.gif",
    "https://cdn.discordapp.com/attachments/615977432180326430/762023183175254076/billie_12.gif",
    "https://cdn.discordapp.com/attachments/615977432180326430/762023252239187978/billie_19.gif",
    "https://cdn.discordapp.com/attachments/615977432180326430/762023327778340934/ezgif-6-88fe0ea08723.gif",
    "https://cdn.discordapp.com/attachments/615977432180326430/762023392336805898/image0-2.gif",
    "https://cdn.discordapp.com/attachments/615977432180326430/762023420904865822/image0-3.gif",
    "https://cdn.discordapp.com/attachments/615977432180326430/762023426910322729/image0-4.gif"
  ];

  let result = Math.floor(Math.random() * replies.length);

  let gifembed = new Discord.RichEmbed()

    .setTitle("Buzz Özel Gif ")

    .setColor("BLACK")

    .setFooter(`${message.author.tag} `, message.author.avatarURL)

    .setImage(replies[result]);

  message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: ["buzz-gif"],

  permLevel: 0
};

exports.help = {
  name: "buzz-gif",

  description: "Rastgele gif atar.",

  usage: "buzz-gif"
};
