const Discord = require("discord.js");
const { swap_pages2 } = require("../../utilfunctions")
const { Roles } = require("../../../settings.json");
module.exports = {
    name: require("path").parse(__filename).name, 
    category: "Setup", 
    aliases: [  ], 
    description: "", 
    run: async (client, message, args, prefix) => {
        if (message.member.roles.highest.rawPosition < message.guild.roles.cache.get(Roles.ChiefHumanResources).rawPosition)
            return message.reply("<:no:935673265245028382> You are not allowed to execute this Command!");
        client.setups.set(message.guild.id, !client.setups.get(message.guild.id, "ticketsystem_teamapply.enabled"), "ticketsystem_teamapply.enabled")
        return message.reply(`> ✅ **The Team Application System is now: \`${client.setups.get(message.guild.id, "ticketsystem_teamapply.enabled") ? "Enabled" : "Disabled"}\`**`)
    }
}