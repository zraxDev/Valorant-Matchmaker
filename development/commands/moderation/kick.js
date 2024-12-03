const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kicks a user from the server.')
		.addUserOption(option =>
			option
			.setName(`user`)
			.setDescription(`The user to kick.`)
            .setRequired(true))
        .addUserOption(option =>
            option
            .setName(`reason`)
            .setDescription(`The reason for the ban.`)
            .setRequired(false))
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
        .setDMPermission(false),
	async execute(interaction) {
        //Get a players rank, rating and position on the leaderboard.
		const user = interaction.options.getUser(`user`);
        const reason = interaction.options.getString(`reason`);
		
        await user.kick(user, reason);
		await interaction.reply({ content: `${user} has been kicked from the server. Reason: ${reason}`, ephemeral: true});
        const channel = client.channels.cache.get('id');
        channel.send('content');
	}
};