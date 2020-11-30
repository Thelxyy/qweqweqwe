const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = [
    "https://cdn.discordapp.com/attachments/697505578972348436/737311070364106844/image0.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/737296516774887505/bc500ed43e3593fcb9b10331ae644586.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/737286213723226182/a_4a728888f25331995f9c61df26ffffdb.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/737113186280538152/image0.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/737052176106520687/image1.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/737078026923409439/9190dc1cb39fa98fd9e12bb135aac545.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/737052175754199070/image0.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/736898906633273364/64.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/737004415197904916/a_3bfd1dff4faab26f7a612a34cb2eb049.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/735948576739426385/1.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/736928294414450718/ROF8OQvDmxytW.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/735948476520857650/5.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/736757429450309673/image0.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/735948187487174747/48.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/736588684270239774/ezgif-6-e83305d159d6.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/735948178855034955/anime_24.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/736388428761137193/14Nqi9PD8H.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/735948036202561677/previewfile_1877013475.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/736388213421244477/Yblikw9Rj1.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/735947565966688306/a_d6e522c9e10db64260eccb3c3455733c.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/736388155229339708/zyJgqrsAUg.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/763727028716961802/Animated_gif_about_beautiful_in_Itachi_Uchiha_by_claud.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/763702718723391498/039d19ef9dc5faf68d16979f24b4dbae.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/763702718052696074/tumblr_nuu8gp9yM41udvy5wo1_500.gif",
    "https://cdn.discordapp.com/attachments/694695881852584096/758090310407684187/20200923_011914.gif",
    "https://cdn.discordapp.com/attachments/694695881852584096/756564857809010839/Anime-Girl-Witch-Weapon.gif",
    "https://cdn.discordapp.com/attachments/694695881852584096/747471863302848604/tumblr_nkedzrMQBr1qlnxfeo1_500.gif",
    "https://cdn.discordapp.com/attachments/694695881852584096/746366164644659200/a_dee8835da5387c6bab64c2ffbac50622.gif",
    "https://cdn.discordapp.com/attachments/694695881852584096/745952534434283550/giphy_1.gif",
    "https://cdn.discordapp.com/attachments/694695881852584096/736869251784114196/20200721_220936.gif",
    "https://cdn.discordapp.com/attachments/694695881852584096/730333334370123826/a_35e23a0f9a8b213503145d92fe9b6c0e.gif",
    "https://cdn.discordapp.com/attachments/694695881852584096/730333097966698526/f3a625dca57936bc2681fa4ffec5e3fe.gif",
    "https://cdn.discordapp.com/attachments/694695881852584096/730333097513582612/a_e9af6d01c6f67ba5e5795624c6a54e33.gif",
    "https://cdn.discordapp.com/attachments/694695881852584096/730333096779448380/e385c547359ec924e292aadb6c5648ec.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/735621470969135217/sasuke_al_moj.gif"
    
  ];

  let result = Math.floor(Math.random() * replies.length);

  let gifembed = new Discord.RichEmbed()

    .setTitle("Anime Gif ;")

    .setColor("BLACK")

    .setFooter(`${message.author.tag} `, message.author.avatarURL)

    .setImage(replies[result]);

  message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: ["gif-anime", "anime-gif", "gifanime", "animegif"],

  permLevel: 0
};

exports.help = {
  name: "anime",

  description: "Rastgele gif atar.",

  usage: "anime"
};
