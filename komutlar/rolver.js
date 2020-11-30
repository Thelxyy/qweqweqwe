const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES"))
    //Buzz • Code♥World
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(
          "Bu komutu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın"
        )
        .setColor("#36393f")
    );
  let rMember =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);
  if (!rMember)
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(
          `Rol Vereceğin Kullanıcı Etiketle\nÖrnek: ` +
            ayarlar.prefix +
            `rolver **@üye @rol**`
        )
        .setColor("#36393f")
        .setAuthor(
          `${message.author.username} tarafından istendi.`,
          message.author.avatarURL
        )
    );

  let buzzrole =
    message.mentions.roles.first() || message.guild.roles.get(args[1]);
  if (!buzzrole)
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(
          `Lütfen bir rol gir veya rolü doğru girdiğinden emin ol.\nÖrnek: ` +
            ayarlar.prefix +
            `.rolver **@üye @rol** \nVeya: ` +
            ayarlar.prefix +
            `.rolver **üyeid rolid**`
        )
        .setColor("#36393f")
        .setAuthor(
          `${message.author.username} tarafından istendi.`,
          message.author.avatarURL
        )
    );

  if (rMember.roles.has(buzzrole.id))
    return message.channel.send(
      new Discord.RichEmbed()
        .setColor("#36393f")
        .setDescription("**Kullanıcı zaten bu role sahip**")
    );
  await rMember.addRole(buzzrole.id);
  message.channel.send(
    new Discord.RichEmbed()
      .setColor("#36393f")
      .setAuthor(
        `${message.author.username} tarafından verildi.`,
        message.author.avatarURL
      )
      .addField(
        `<a:761109334477897768:762014879523405846> __Rol Veren Kişi__ <a:761109334477897768:762014879523405846>`,
        `:white_small_square:<@!${message.author.id}>`
      )
      .setColor("Black") // Botunuzun Ppsine Göre Renk Yapın Daha Uyumlu OLur
      .setThumbnail(`${message.author.avatarURL}`)
      .setDescription(
        `${rMember} **isimli üyeye** <@&${buzzrole.id}> **isimli rol başarıyla verildi**`
      )
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rolver", "rolekle"],
  permLevel: "0"
};

exports.help = {
  name: "rolver",
  description: "Kişilere Rol Yetkisi Verir",
  usage: "rolver <mesaj>"
};