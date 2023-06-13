const Application = require("./framework/Application");
const Router = require("./framework/Router");
const userRouter = require("./src/user-router");
const jsonParser = require("./framework/parseJson");
const bodyParser = require("./framework/parseBody");
const URLParser = require("./framework/parseURL");
const PORT = 5000;
const basedUrl = `http://localhost:${PORT}`;
const app = new Application();

app.use(jsonParser);
app.use(bodyParser);
app.use(URLParser(basedUrl));

app.addRouter(userRouter);

app.listen(PORT, () => console.log("server started on", PORT, "port"));
