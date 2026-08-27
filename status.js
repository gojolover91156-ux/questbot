async function setStatus(client) {
  await client.updatePresence(0, {
    since: null,
    activities: [
      {
        name: "custom",
        type: 4,
        state: "I LOVES U"
      }
    ],
    status: "idle",
    afk: false
  });
}

module.exports = { setStatus };
