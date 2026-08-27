async function setStatus(client) {
  await client.updatePresence(0, {
    since: null,
    activities: [
      {
        name: "custom",
        type: 4,
        state: "Serving 2 Karan"
      }
    ],
    status: "idle",
    afk: false
  });
}

module.exports = { setStatus };
