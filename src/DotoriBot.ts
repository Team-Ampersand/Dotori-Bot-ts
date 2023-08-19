import { Client, REST, Routes, SlashCommandBuilder, version } from "discord.js";
import { config } from "./utils/config";
import PingCommand from "./commands/PingCommand";

export class DotoriBot {
  private slashCommandMap = new Map<string, SlashCommandBuilder>();

  public constructor(
    private readonly client: Client
  ) {
    this.client.login(config.discordToken);

    this.client.on("ready", () => {
      console.log(`${this.client.user?.username ?? ""} ready!`);

      this.registerSlashCommands();
    });

    this.client.on("warn", (info) => console.log(info));
    this.client.on("error", console.error);
  }

  private async registerSlashCommands() {
    const discordREST = new REST({ version: version }).setToken(config.discordToken);
    const slashCommands = [
      PingCommand
    ];

    this.slashCommandMap = slashCommands.reduce((map, command) => {
      map.set(command.data.name, command.data);
      return map;
    }, new Map<string, SlashCommandBuilder>);

    await discordREST.put(
      Routes.applicationCommands(this.client.user?.id ?? ""),
      {
         body: slashCommands.map(command => command.data) 
      }
    );
  }
}