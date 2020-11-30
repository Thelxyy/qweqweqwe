const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = [
    "https://cdn.discordapp.com/attachments/704396564227031130/760251214964588544/1-2.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/760251259528675338/tenor_23.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/760251371373985802/animated_1576143796944.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/760251624584773702/tenor_21.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/760251680636928010/tenor_16.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/760251739521155082/ataturk-gif-1.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/760252213191770182/BogusAbleEasteuropeanshepherd-size_restricted.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/760253264381345832/mka2.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/760253650442125313/DesertedDecisiveCub-size_restricted.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/760253695014207508/15F2B353-7A67-4A0D-8E2A-1F5B3F7DD09F.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/759143005801807882/a_506a5ed28255ba7cf4777c355a7e6e6a_1.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/759143026827329616/a_da55e12616467c7342fcab32b8e80c88.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/759142928781541426/37.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/759142916433510520/15a8bfec7b02a219ce30990c006d87f1.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/758559239730888714/gifff.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/758274282555179018/1505175427_ataturk2.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/757915740673277983/tumblr_mcmdmmISf71rqsva9o1_400.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/757915738907607060/bilinmeyen-1.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/757915685031772200/ataturkey.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/757915671081517086/atas_-_Kopya.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/757915503019688056/7b397c232e47a6281e219f0d2672fa8b_-_Kopya.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/757914606009057290/tumblr_nuax0ot2371sh9ol7o1_500.gif",
    "https://cdn.discordapp.com/attachments/704396564227031130/756797525826207754/SpanishDangerousColt-size_restricted.png",
    "https://cdn.discordapp.com/attachments/704396564227031130/754651498054549575/6.gif"
    
  ];

  let result = Math.floor(Math.random() * replies.length);

  let gifembed = new Discord.RichEmbed()

    .setTitle("Mka Gif ")

    .setColor("BLACK")

    .setFooter(`${message.author.tag} `, message.author.avatarURL)

    .setImage(replies[result]);

  message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: ["mka-gif", "mkagif"],

  permLevel: 0
};

exports.help = {
  name: "mka-gif",

  description: "Rastgele  Atatürk gif atar.",

  usage: "mka-gif"
};
