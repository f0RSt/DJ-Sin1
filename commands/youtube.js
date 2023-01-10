const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "youtube",
  description: "Начинает сеанс YouTube Вместе",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["yt"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {require("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    if (!message.member.voice.channel)
      return client.sendTime(
        message.channel,
        "❌ | **Вы должны быть на голосовом канале, чтобы что-то воспроизвести!**"
      );
    if (
      !message.member.voice.channel
        .permissionsFor(message.guild.me)
        .has("CREATE_INSTANT_INVITE")
    )
      return client.sendTime(
        message.channel,
        "❌ | **У бота нет разрешения на создание приглашения**"
      );

    let Invite = await message.member.voice.channel.activityInvite(
      "880218394199220334"
    ); //Made using discordjs-activity package
    let embed = new MessageEmbed()
      .setAuthor(
        "YouTube Together",
        "https://cdn.discordapp.com/emojis/749289646097432667.png?v=1"
      )
      .setColor("#FF0000").setDescription(`
      Используя **YouTube Together**, вы можете смотреть YouTube Together с друзьями на голосовом канале. Нажмите *Присоединяйтесь к YouTube вместе*, чтобы присоединиться!

      __**[Присоединяйтесь к YouTube Together](https://discord.com/invite/${Invite.code})**__

⚠ **Примечание.** Это работает только на пк
`);
    message.channel.send(embed);
  },
  SlashCommand: {
    options: [],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, interaction, args, { GuildDB }) => {
      const guild = client.guilds.cache.get(interaction.guild_id);
      const member = guild.members.cache.get(interaction.member.user.id);

      if (!member.voice.channel)
        return client.sendTime(
          interaction,
          "❌ | Вы должны быть в голосовом канале, чтобы использовать эту команду."
        );
      if (
        !member.voice.channel
          .permissionsFor(guild.me)
          .has("CREATE_INSTANT_INVITE")
      )
        return client.sendTime(
          interaction,
          "❌ | **У бота нет разрешения на создание приглашения**"
        );

      let Invite = await member.voice.channel.activityInvite(
        "755600276941176913"
      ); //Made using discordjs-activity package
      let embed = new MessageEmbed()
        .setAuthor(
          "YouTube Together",
          "https://cdn.discordapp.com/emojis/749289646097432667.png?v=1"
        )
        .setColor("#FF0000").setDescription(`
        Используя **YouTube Together**, вы можете смотреть YouTube Together с друзьями на голосовом канале. Нажмите *Присоединяйтесь к YouTube вместе*, чтобы присоединиться!

        __**[Присоединяйтесь к YouTube Together](https://discord.com/invite/${Invite.code})**__

⚠ **Примечание.** Это работает только на пк
`);
      interaction.send(embed.toJSON());
    },
  },
};
