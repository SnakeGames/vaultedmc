const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType, GuildScheduledEvent, GuildMember } = require('discord.js');

module.exports = {
	name: 'ban',
	description: "Ban a user.",
	type: ApplicationCommandType.ChatInput,
    default_member_permissions: 'BanMembers',
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
        .setDescription(`Staff Member: <@${interaction.user.id}>\nBanned Member:${member}\nReason: ${reason}`)
        await interaction.reply({embeds: [bemb]})
        
        member.send({embeds: [bemb]});
        member.send({content: 'If you think this ban is a false ban, you can it appeal it on the forums: https://vaultedmc.xyz \n**NOTE**: This is an appeal process. You can be denied.'})
        setTimeout(()=> {member.ban()}, 600)

        

	}
};
