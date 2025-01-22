const {Rest,Routes} = require("discord.js")

const commands = [
    {
        name : "ping",
        description : "Replies with pong!",
    },
]

const rest = new REST ({version : "10"}).setToken("");

(async () => {
    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(Router.applicationCommands(CLIENT_ID), {body : commands});
        console.log("Successfully reloaded application(/) commands.");
    }catch (error){
        console.error(error);
    }
})();