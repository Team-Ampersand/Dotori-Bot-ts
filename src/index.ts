import { Client, GatewayIntentBits } from "discord.js";
import { DotoriBot } from "./DotoriBot";

export const bot = new DotoriBot(
    new Client({
        intents: [
            GatewayIntentBits.Guilds,
		    GatewayIntentBits.GuildMessages,
		    GatewayIntentBits.MessageContent,
		    GatewayIntentBits.GuildMembers
        ]
    })
);