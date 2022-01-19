const Discord = require("discord.js")
const client1 = new Discord.Client()
const client2 = new Discord.Client()
const client3 = new Discord.Client()
const client4 = new Discord.Client()
const client5 = new Discord.Client()
const client6 = new Discord.Client()
const client7 = new Discord.Client()
const client8 = new Discord.Client()
const client9 = new Discord.Client()
const client10 = new Discord.Client()
const axios = require("axios")

//-----------------------------
client1.on("ready", () => {
    client1.user.setActivity("Eirene ❤️ Dark");
    console.log(client1.user.tag)
})


client1.on("ready", () => {
    let url = "rvt"
    let guild = client1.guilds.cache.get("541336591482880005")
    setInterval(() => {
        if (guild.vanityURLCode == url) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/887281354113425428/vanity-url`,
            data: { code: url },
            headers: { authorization: `Bot ${client1.token}` }
        }).catch(() => {
            console.log("URL ALINAMADI ")
        })
    }, 1200)
})

client1.login("")
//-----------------------------
client2.on("ready", () => {
    client2.user.setActivity("Eirene ❤️ Dark");
    console.log(client2.user.tag)
})


client2.on("ready", () => {
    let url = "rvt"
    let guild = client2.guilds.cache.get("541336591482880005")
    setInterval(() => {
        if (guild.vanityURLCode == url) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/887281354113425428/vanity-url`,
            data: { code: url },
            headers: { authorization: `Bot ${client2.token}` }
        }).catch(() => {
            console.log("URL ALINAMADI ")
        })
    }, 1200)
})

client2.login("")
//-----------------------------
client3.on("ready", () => {
    client3.user.setActivity("Eirene ❤️ Dark");
    console.log(client3.user.tag)
})


client3.on("ready", () => {
    let url = "rvt"
    let guild = client3.guilds.cache.get("541336591482880005")
    setInterval(() => {
        if (guild.vanityURLCode == url) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/887281354113425428/vanity-url`,
            data: { code: url },
            headers: { authorization: `Bot ${client3.token}` }
        }).catch(() => {
            console.log("URL ALINAMADI ")
        })
    }, 1200)
})

client3.login("")
//-----------------------------
client4.on("ready", () => {
    client4.user.setActivity("Eirene ❤️ Dark");
    console.log(client4.user.tag)
})


client4.on("ready", () => {
    let url = "rvt"
    let guild = client4.guilds.cache.get("541336591482880005")
    setInterval(() => {
        if (guild.vanityURLCode == url) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/887281354113425428/vanity-url`,
            data: { code: url },
            headers: { authorization: `Bot ${client4.token}` }
        }).catch(() => {
            console.log("URL ALINAMADI ")
        })
    }, 1200)
})

client4.login("")
//-----------------------------
client5.on("ready", () => {
    client5.user.setActivity("Eirene ❤️ Dark");
    console.log(client5.user.tag)
})


client5.on("ready", () => {
    let url = "1874"
    let guild = client5.guilds.cache.get("887281354113425428")
    setInterval(() => {
        if (guild.vanityURLCode == url) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/887281354113425428/vanity-url`,
            data: { code: url },
            headers: { authorization: `Bot ${client5.token}` }
        }).catch(() => {
            console.log("URL ALINAMADI ")
        })
    }, 1200)
})

client5.login("")
//-----------------------------
client6.on("ready", () => {
    client6.user.setActivity("Eirene ❤️ Dark");
    console.log(client6.user.tag)
})


client6.on("ready", () => {
    let url = "1874"
    let guild = client6.guilds.cache.get("887281354113425428")
    setInterval(() => {
        if (guild.vanityURLCode == url) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/887281354113425428/vanity-url`,
            data: { code: url },
            headers: { authorization: `Bot ${client6.token}` }
        }).catch(() => {
            console.log("URL ALINAMADI ")
        })
    }, 1200)
})

client6.login("")
//-----------------------------
client7.on("ready", () => {
    client7.user.setActivity("Eirene ❤️ Dark");
    console.log(client7.user.tag)
})


client7.on("ready", () => {
    let url = "1874"
    let guild = client7.guilds.cache.get("887281354113425428")
    setInterval(() => {
        if (guild.vanityURLCode == url) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/887281354113425428/vanity-url`,
            data: { code: url },
            headers: { authorization: `Bot ${client7.token}` }
        }).catch(() => {
            console.log("URL ALINAMADI ")
        })
    }, 1200)
})

client7.login("")
//-----------------------------
client8.on("ready", () => {
    client8.user.setActivity("Eirene ❤️ Dark");
    console.log(client8.user.tag)
})


client8.on("ready", () => {
    let url = "1874"
    let guild = client8.guilds.cache.get("887281354113425428")
    setInterval(() => {
        if (guild.vanityURLCode == url) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/887281354113425428/vanity-url`,
            data: { code: url },
            headers: { authorization: `Bot ${client8.token}` }
        }).catch(() => {
            console.log("URL ALINAMADI ")
        })
    }, 1200)
})

client8.login("")
//-----------------------------
client9.on("ready", () => {
    client9.user.setActivity("Eirene ❤️ Dark");
    console.log(client9.user.tag)
})


client9.on("ready", () => {
    let url = "1874"
    let guild = client9.guilds.cache.get("887281354113425428")
    setInterval(() => {
        if (guild.vanityURLCode == url) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/887281354113425428/vanity-url`,
            data: { code: url },
            headers: { authorization: `Bot ${client9.token}` }
        }).catch(() => {
            console.log("URL ALINAMADI ")
        })
    }, 1200)
})

client9.login("")

//-----------------------------
client10.on("ready", () => {
    client10.user.setActivity("Eirene ❤️ Dark");
    console.log(client10.user.tag)
})


client10.on("ready", () => {
    let url = "1874"
    let guild = client10.guilds.cache.get("887281354113425428")
    setInterval(() => {
        if (guild.vanityURLCode == url) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/887281354113425428/vanity-url`,
            data: { code: url },
            headers: { authorization: `Bot ${client10.token}` }
        }).catch(() => {
            console.log("URL ALINAMADI ")
        })
    }, 1200)
})

client10.login("")
//-----------------------------
