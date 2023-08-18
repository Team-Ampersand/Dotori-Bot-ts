import 'dotenv/config'

export interface Config {
  discordToken: string;
  githubToken: string;
  guildID: string;
}

export const config: Config = {
  discordToken: process.env.DISCORD_TOKEN ?? "",
  githubToken: process.env.GITHUB_TOKEN ?? "",
  guildID: process.env.GUILD_ID ?? ""
}