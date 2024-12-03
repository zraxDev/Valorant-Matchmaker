const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('customs')
		.setDescription('Announces a custom games event to the server.')
		.addStringOption(option =>
			option
			.setName(`time`)
			.setDescription(`Time of the customs.`)
            .setRequired(true))
        .addStringOption(option =>
            option
            .setName(`region`)
            .setDescription(`Region where customs are being hosted.`)
            .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.MoveMembers)
        .setDMPermission(false),
	async execute(interaction) {
		const time = interaction.options.getString(`time`);
        const region = interaction.options.getString(`region`);

        const embed = new EmbedBuilder()
            //message.author
            .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
            .setTitle(`VALORANT Customs @ ${time} UTC ⏰ Region: ${region} 🌎`)
            .setURL("https://discord.gg/e5PuhNnsYn")
            .setDescription(`<@&Customs>\n\n🌟 __**Join the Ultimate VALORANT Custom Games Extravaganza!**__ 🌟\n\n🎮 Custom VALORANT Battles Await! 🎮\n🔥 Ranks and Leaderboards 🔥\n🎉 Map Bans 🎉\n💪 Pick Your Teammates 💪\n🔫 Agent Bans 🔫\n🎀 Polls for Game Types 🎀\n\n🚀 **How To Join:**\n> • React to these messages in <#announcements> to show your interest.\n> • Join the Waiting Room VC.\n> • Get selected as a Team Leader or be picked.\n> • You will be moved into a VC if picked to discuss with your team.\n> • Check the <#game-rules> channel for match information.\n> • Party code will be posted in the <#party-code> channel by the host with each teams name.\n> • If you are not picked, you may wait for the next game. If the host is not playing, if they are spectating, they will be streaming in a spectator channel.\n\n👑 **Team Leaders:**\n> __**First 2 people to ping host will be selected. If 2 people do not ping, selections will be randomly chosen by the host.**__\n> • Coinflip to determine who picks first. Host will pick who is Heads or Tails,\n> • Pick until 5 players have been chosen for each team. No takebacks. Your pick is final. Hosts will specify if they are playing.\n> • Use !roll to decide who bans the first map out of the 5 maps available. Last map standing is the map to be played. Keep in mind, some maps may not be in the competitive map pool.\n> • Lowest roller will ban an agent first, the highest roller will then ban an agent.\n> __**It is down to you to ensure the agent bans are being respected by your team. If someone is caught breaking the rules, the game will be remade. If they pick the same agent again. Please tell the host so that they can sort the situation out in the fairest way possible.**__\n\n📜 **Customs Rules:**\n> • Please respect <#game-rules> for agent bans. If the rules are broken accidentally, the game will be remade. If this is intentional, you may be removed. If there are no substitutions, You will not receive any rank gains and will not be allowed to join future games for a limited time period.\n> • Toxicity is not tolerated. General bantering is acceptable both in team and party chat.\n> • Try not to rage if possible, these games are for fun. Take it seriously and have fun but there is literally zero point in raging. It's also embarrassing.\n> • You are not allowed to invite your friends to spectate in the VALORANT lobby. They must be in the server in a spectator VC. This is to prevent cheating.\n> • Issue with the match? Ping the host with what your issue is and an image/clip to provide some context. If related to disconnects, please let the host know so they can adjust the rating given/lost from the inactive player.\n\n✅ **React for Attendance!** ✅\nCheck the title for the time and ensure that you are using the correct time zones.\n\n🌟 **Don't Miss Out!** 🌟\n\nWhether you're a pro or a newcomer, our VALORANT custom games offer a competitive experience combining strategy, aim, and communications and making friends.\n\nJoin Now and Unleash Your Inner Champion!`)
            .setColor(`#00b0f4`)
            .setFooter({ text: `Powered By Valorant Matchmaker`, iconURL: `https://cdn.discordapp.com/avatars/1219431216013643876/user_avatar.webp` })
            .setTimestamp();
		
        const channel = interaction.guild.channels.fetch(`1256292024588566730`);
        channel.send({embeds: [embed]});

		await interaction.reply({ content: `Custom games have been announced in <#announcements>.`, ephemeral: true});
	}
};