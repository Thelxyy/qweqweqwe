const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
    const embed = new Discord.RichEmbed()
    
    .setColor('BLACK')
    
    .addField(`__Heimdall Komutları__`,

    `<a:buzz:763696002326593547>**avatar** Etiketlediğiniz Kişinin Avatarını Gösterir
     <a:buzz:763696002326593547>**sunucu-bilgi** Sunucunun İstatistiklerini Gösterir
     <a:buzz:763696002326593547>**ping** Botun Pingini Gösterir
     <a:buzz:763696002326593547>**rolver** Belirtiğiniz Kullanıcıya Belirtiğiniz Rolü verir
     
     <a:buzz:763696002326593547>**Özel-Bilgilendirme** 
     <a:krmz:763673719792074773><a:krmz:763673719792074773><a:krmz:763673719792074773><a:krmz:763673719792074773>
     <a:buzz:763696002326593547>**Random-pp-gif** | Sistemi Suan Bakım  Aşamasında Kısa Zamanda Düzenlenecektir!

     <a:buzz:763696002326593547>**Linkler** 

     [Botun Destek Sunucusuna Gitmek İçin Tıkla](https://discord.gg/FSTPUUN)    
     [Botu Eklemek İçin Tıkla](https://discord.com/oauth2/authorize?client_id=763454772438368286&scope=bot&permissions=8)`)
    
         message.channel.send({embed});
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['buzz-bilgi','yetkili','yetkiliyardım','buzz'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili-bilgi',
  description: '',
  usage: 'yetkili-bilgi'
};

