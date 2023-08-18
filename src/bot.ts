import { Client } from "discord.js";

export class Bot {
  public constructor(public readonly client: Client) {
    // this.client.login(config.discordToken);

    this.client.on("ready", () => {
      console.log(`${this.client.user!.username} ready!`);

    });

    this.client.on("warn", (info) => console.log(info));
    this.client.on("error", console.error);
  }
}