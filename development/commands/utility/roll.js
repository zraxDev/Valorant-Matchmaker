const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Rolls a random number between 0 and 100.'),
	async execute(interaction) {
		let number = Math.floor(Math.random() * 101);
		await interaction.reply(number.toString());
	}
};