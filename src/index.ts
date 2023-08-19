import { Client, GatewayIntentBits } from "discord.js";
import { DotoriBot } from "./DotoriBot";
import express, { Express } from "express";

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

const app: Express = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});