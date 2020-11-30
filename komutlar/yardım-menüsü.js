const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
var ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args, msg) => {
  const embed = new Discord.RichEmbed()

    .setColor("#ff0606")
    .setImage(
      "https://cdn.discordapp.com/attachments/715261850819756184/763702005750693888/ezgif-3-f2685c472757.gif"
    )
    .setDescription("**Heimdall GİF YARDIM MENÜSÜ**")
    .addField(
      `<a:krmz:763673719792074773><a:krmz:763673719792074773><a:krmz:763673719792074773><a:krmz:763673719792074773><a:krmz:763673719792074773><a:krmz:763673719792074773><a:krmz:763673719792074773><a:krmz:763673719792074773><a:krmz:763673719792074773>`,

      `<a:buzz:763696002326593547>**gif-ara** →**Yazdığınız Kelime Hakkında Gif Aratır**
     <a:buzz:763696002326593547>**man**     →**Rastgele Erkek Gifi Atar**
     <a:buzz:763696002326593547>**woman**   →**Rastgele Kadın Gifi Atar**
     <a:buzz:763696002326593547>**couple**  →**Rastgele Sevgili Gifi Atar**
     <a:buzz:763696002326593547>**baby**    →**Rastgele Bebek Gifi Atar**
     <a:buzz:763696002326593547>**animal**  →**Rastgele Hayvan Gifi Atar**
     <a:buzz:763696002326593547>**mka-gif** →**Rastgele Mka Gifi Atar**
     <a:buzz:763696002326593547>**be-gif** →**Rastgele Billie eilish Gifi Atar**
  
     **Ekstra Heimdall Özel Gif**
     
     <a:buzz:763696002326593547>**buzz-gif** | **Yazarak Buzz Özel Gifleri Görebilirsiniz**

     <a:buzz:763696002326593547>**yetkili-bilgi** | **Özel Yetkili Bilgilerini Gösterir**
 
    
     **__Özel Linkler__**

     **Heimdall  Admin** ⧸ Sâd ✙ Buzz#0001

     [**Botun Destek Sunucusuna Gitmek İçin Tıkla**](https://discord.gg/FSTPUUN)`
    );

  message.channel.send({ embed });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "",
  usage: "yardım"
};
