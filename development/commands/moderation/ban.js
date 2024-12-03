const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans a user from the server.')
		.addUserOption(option =>
			option
			.setName(`user`)
			.setDescription(`The user to ban.`)
            .setRequired(true))
        .addUserOption(option =>
            option
            .setName(`reason`)
            .setDescription(`The reason for the ban.`)
            .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setDMPermission(false),
	async execute(interaction) {
        //Get a players rank, rating and position on the leaderboard.
		const user = interaction.options.getUser(`user`);
        const reason = interaction.options.getString(`reason`);
		
        await interaction.guild.members.ban(user, reason);
		await interaction.reply({ content: `${user} has been banned from the server. Reason: ${reason}`, ephemeral: true});
	}
};