const { GatewayIntentBits, Client } = require("discord.js");

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]})

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith("create")){
        const url = message.content.split("create")[1];
        return message.reply({
            content : "Generating short ID for" + url,
        })
    }
    message.reply({
        content : "Hi From Bot",
})
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction);
    interaction.reply("Pong!!");
})

// client.on("messageCreate", (message) => {

//     console.log(message.content);
// });

// client.login();