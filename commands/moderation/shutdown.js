module.exports = {
    config: {
        name: "shutdown",
        description: "shuts down the bot!",
        usage: "!shutdown",
        category: "moderation",
        accessableby: "Bot Owner",
        aliases: ["botstop"]
    },
    run: async (bot, message, args) => {

    if(message.author.id != "483675557557436428") return message.channel.send("You're not the bot the owner!")

    try {
        await message.channel.send("Bot is shutting down...")
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
    


    }
}