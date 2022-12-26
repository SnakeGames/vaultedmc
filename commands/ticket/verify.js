const { ActionRowBuilder, EmbedBuilder, ButtonBuilder } = require('discord.js')
const { verifyRole } = require('../../config.json')

module.exports = {
	name: 'verify',
	description: "Verify",
	cooldown: 3000,
	userPerms: [],
	botPerms: [],
	run: async (client, message, args, member) => {



        message.guild.members.cache.get(message.author.id).roles.add(verifyRole);
        message.delete()

        const emb = new EmbedBuilder()
        .setTitle('Welcome to our server!')
        .setColor('Green')
        .setDescription(`Anyways, before we get started.\nWe, the staff, wanted to let you know that this is a safe place for all people. That means\n\n> No harassment what so ever!\n\nAnyways, the reason why you received this message is because you ran the 'verify' command.\nNot following the rules will result in a punishment. Appealing the punishment will not be a guaranteed removal of said punishment.\n Anyways, thanks for reading this message. - Zaine (SnakeGames) `)

        const channel = message.guild.channels.cache.get('1039961787291938866')

        const wemb = new EmbedBuilder()
        .setTitle(`New Member!`)
        .setColor('Green')
        .setDescription(`Everyone welcome: <@${message.author.id}> to the server! We now have: ${client.users.cache.size}`)
                
        channel.send({embeds: [wemb]})
        message.author.send({embeds: [emb]})

        // const buttons = new ActionRowBuilder()
        // .addComponents(
        //     new ButtonBuilder()
        //     .setLabel('Verify')
        //     .setStyle('Success')
        //     .setCustomId('verify_button')
        // );

        // const embed = new EmbedBuilder()
        // .setTitle(`Verification Required!`)
        // .setDescription(`You must click the button below to view channels!`)
        // .setColor('Green')
        // message.channel.send({embeds: [embed], components: [buttons]})
	}
};