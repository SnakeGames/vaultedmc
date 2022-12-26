const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType, GuildScheduledEvent, GuildMember } = require('discord.js');

module.exports = {
	name: 'kick',
	description: "Kick a user.",
	type: ApplicationCommandType.ChatInput,
    default_member_permissions: 'KickMembers',
	cooldown: 3000,
    options: [
        {
            name: 'user',
            description: 'The user you want to ban.',
            type: ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: 'reason',
            description: 'The reason for the ban',
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
	run: async (client, interaction) => {
        const member = interaction.options.get('user')?.member || interaction.member;
        const reason = interaction.options.get('reason')?.value || "Reason not specified...";

        const bemb = new EmbedBuilder()
        .setTitle(`Member Banned`)
        .setColor('Red')
        .setDescription(`Staff Member: <@${interaction.user.id}>\nKicked Member:${member}\nReason: ${reason}`)
        await interaction.reply({embeds: [bemb]})
        
        member.send({embeds: [bemb]});
        setTimeout(()=> {member.kick()}, 600)

        

	}
};
