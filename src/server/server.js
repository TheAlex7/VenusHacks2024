import express from "express";
import http from "http";

const app = express();
const httpServer = http.Server(app);

app.use(express.static("./src/client/"));
app.get('/', (_, res) => res.sendFile(`${__dirname}/client/index.html`));

const port = 3000;
httpServer.listen(port, () => console.log(`Listening on *:${port}`));