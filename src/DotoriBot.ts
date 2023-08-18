import { Client } from "discord.js";
import { config } from "./utils/config";

export class DotoriBot {
  public constructor(
    private readonly client: Client
  ) {
    this.client.login(config.discordToken);

    this.client.on("ready", () => {
      console.log(`${this.client.user?.username ?? ""} ready!`);
    });

    this.client.on("warn", (info) => console.log(info));
    this.client.on("error", console.error);
  }
}