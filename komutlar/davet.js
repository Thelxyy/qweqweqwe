const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()

    .setTitle(`${client.user.username}`)
    .addField("Yapımcılarım ", "<@547801408599228436>")
    .setDescription(
      `**Botun Davet Linki ;** [TIKLA](https://discord.com/oauth2/authorize?client_id=763454772438368286&scope=bot&permissions=8) \n**Destek Sunucusu ;** [TIKLA](https://discord.gg/nEQzhSD)`
    )
    .setThumbnail(client.user.avatarURL)
    .setFooter(
      `${message.author.username} Başarıyla Davet Sistemi Kullandı!`,
      message.author.avatarURL
    )
    .setColor(`BLACK`);

  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet", "davet-et", "botu-ekle"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Zed Bot Davet Sistemi",
  usage: "davet"
};
