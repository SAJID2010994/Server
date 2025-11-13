const Express = require("express");
const { ExpressPeerServer } = require("peer");

const app = Express();

// Set port from Render environment or default 9000
const PORT = process.env.PORT || 9000;

// Basic route to test
app.get("/", (req, res) => res.send("PeerJS server is running"));

// Create a PeerJS server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
  debug: true,          // Logs connections and events
  path: "/myapp"        // You can choose any path
});

app.use("/peerjs", peerServer);
