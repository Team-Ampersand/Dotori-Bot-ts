import { Client } from "discord.js";
import ready from "./listeners/ready";

const token = "";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);

client.login(token);