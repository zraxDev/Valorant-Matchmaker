const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rank')
		.setDescription('Checks a users rank and rating.')
		.addUserOption(option =>
			option
			.setName(`user`)
			.setDescription(`The player to check.`)),
	async execute(interaction) {
        //Get a players rank, rating and position on the leaderboard.
		const user = interaction.options.getUser(`user`) ?? interaction.user;
		
		await interaction.reply({content: ``, ephemeral: true});
	}
};