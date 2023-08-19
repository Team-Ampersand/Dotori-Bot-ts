import axios, { AxiosRequestConfig } from "axios"
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js"
import { Command } from "../interfaces/Command"
import { config } from "../utils/config"

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
        .setDescription("이번 버전에서 변경된 사항을 입력해주세요! \\n은 줄바꿈으로 변환됩니다!")
        .setRequired(false)
    )
    .addAttachmentOption(
      optionBuilder => optionBuilder
        .setName("변경사항파일")
        .setDescription("변경사항이 너무 길다면 파일을 텍스트 파일을 업로드해주세요!")
        .setRequired(false)
    ),
  async execute(interaction: ChatInputCommandInteraction) {
    const inputVersion = interaction.options.getString("버전")
    const inputChangedFile = interaction.options.getAttachment("변경사항파일")

    const inputChanged: string = (inputChangedFile)
    ? await (await fetch(inputChangedFile.url)).text()
    : interaction.options.getString("변경사항")?.replaceAll("\\n", "\n") ?? ""

    if (!inputChanged) {
      await interaction.reply({
        content: "변경사항을 입력 혹은 파일로 업로드해주세요!"
      })
    }

    const requestJSON = {
      ref: "master",
      inputs: {
        version: inputVersion,
        changed: inputChanged
      }
    }
    const requestConfig: AxiosRequestConfig = {
      headers: {
        Authorization: `token ${config.githubToken}`,
        Accept: "application/vnd.github+json"
      } 
    }

    const response = await axios.post(
      "https://api.github.com/repos/Team-Ampersand/Dotori-iOS/actions/workflows/65967674/dispatches",
      requestJSON,
      requestConfig
    )
    if (response.status >= 200 && response.status < 300) {
      await interaction.reply({
        content: `
- Version: ${inputVersion}
- 변경사항: ${inputChanged}

🚀 앱스토어에 도토리 앱 심사 제출을 완료했습니다!
        `
      })
    } else {
      await interaction.reply({
        content: `
😵 앱스토어 배포 자동화가 실패했습니다..

reason: ${response.data}
        `
      })
    }
  }
} as Command