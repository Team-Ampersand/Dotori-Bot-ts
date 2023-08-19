import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js"
import { Command } from "src/interfaces/Command"

export default {
  data: new SlashCommandBuilder()
    .setName("앱스토어")
    .setDescription("앱스토어에 도토리 iOS 앱 심사를 올립니다!")
    .addStringOption(
      optionBuilder => optionBuilder
        .setName("버전")
        .setDescription("심사를 올릴 앱의 버전을 입력해주세요!")
        .setRequired(true)
    )
    .addStringOption(
      optionBuilder => optionBuilder
        .setName("변경사항")
        .setDescription("이번 버전에서 변경된 사항을 입력해주세요!")
        .setRequired(true)
    ),
  async execute(interaction: ChatInputCommandInteraction) {
    
  }
} as Command