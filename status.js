async function setStatus(client) {
  await client.updatePresence(0, {
    since: null,
    activities: [
      {
        name: "custom",
        type: 4,
        state: "ʙᴇ ᴀ ᴍᴀɴ, ɴᴏᴛ ᴀ ʙᴀsᴛᴀʀᴅ."
      }
    ],
    status: "idle",
    afk: false
  });
}

module.exports = { setStatus };
