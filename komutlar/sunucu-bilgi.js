const Discord = require('discord.js');

exports.run = (client, message) => {


let sunucu = new Discord.RichEmbed()
.setThumbnail(`${message.author.avatarURL}`)
.setColor("#ef1010")
.setTimestamp()
.addField('<a:ysysy:763719985826103317>Sunucu İd ', message.guild.id)
.addField('<a:ysysy:763719985826103317>Sunucu Sahibi ', message.guild.owner, true)
.addField('<a:ysysy:763719985826103317>Sunucu Bölgesi ', message.guild.region)
.addField('<a:ysysy:763719985826103317>Afk Kanalı ', `${message.guild.afkChannel}`, true)
.setTitle("\n\nSunucu İstatistik")
.addField('<a:yellow:763719870478417920>Üye Sayısı ', message.guild.memberCount)
.addField('<a:yellow:763719870478417920>>Kanal Sayısı ', message.guild.channels.size, true)
.addField('<a:yellow:763719870478417920>Rol Sayısı ', message.guild.roles.size)
.addField('<a:aktif:763717115614068736>Çevrimiçi ', message.guild.members.filter(m => m.user.presence.status === "online").size)
.addField('<a:726100197146624050:763717112950423572>Rahatsız Etmeyin ', message.guild.members.filter(m => m.user.presence.status === 'dnd').size)
.addField('<a:bota:763717115399897108>Boşta ', message.guild.members.filter(m => m.user.presence.status === 'idle').size)
.addField('<a:ckt:763717133183877140>Çevrimdışı ', message.guild.members.filter(m => m.user.presence.status === 'offline').size)
return message.channel.send(sunucu) 

}; 

module.exports.conf = {
aliases: ["sunucu-bilgi","sb","s-b"],
permLevel: 0, 
enabled: true,
guildOnly: true
};

module.exports.help = {
    name: 'sunucubilgi',
    description: '',
    usage: 'sunucubilgi'
};