const { ApplicationCommandType, ActionRowBuilder, ButtonBuilder, EmbedBuilder, messageLink } = require('discord.js');

module.exports = {
	name: 'verify',
	description: "Close ticket",
    default_member_permissions: 'Administrator',
	type: ApplicationCommandType.ChatInput,
	cooldown: 3000,
	run: async (client, interaction) => {
        const buttons = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel('Verify')
            .setStyle('3')
            .setCustomId('verify_button')
        );

        const veremb = new EmbedBuilder()
        .setTitle(`Verification Required!`)
        .setDescription(`You must click the button below to view channels!`)
        .setColor('Green')

        
        
        interaction.reply({embeds: [veremb], components: [buttons]})

    }
};