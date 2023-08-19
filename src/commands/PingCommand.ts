import { ChatInputCommandInteraction, CommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("생존 신고용입니다"),
  async execute(interaction: ChatInputCommandInteraction) {
    await interaction
      .reply({
        content: "Pooooooong!",
        ephemeral: false
      })
      .catch(console.error)
  }
}