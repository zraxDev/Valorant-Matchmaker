const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coinflip')
		.setDescription('Flips a coin.'),
	async execute(interaction) {
        number = Math.floor(Math.random() * 2);
        if (number == 1) {
		    await interaction.reply('Heads');
        } else {
            await interaction.reply('Tails');
        }
	}
};