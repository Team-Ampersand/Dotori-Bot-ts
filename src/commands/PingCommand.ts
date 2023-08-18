import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder(),
  execute(interaction: ChatInputCommandInteraction) {
    interaction
      .reply({
        content: "Pooooooong!",
        ephemeral: false
      })
      .catch(console.error)
  }
}