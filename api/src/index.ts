// Required External Modules

import * as dotenv from "dotenv";
import express, { Application, Express } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import router from "./routes";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

dotenv.config();

// App Variables

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app: Application = express();

// App Configuration

app.use(helmet()); // HTTP security
app.use(cors()); // CORS
app.use(morgan("dev")); // logger
app.use(express.json()); // Format JSON
app.use(express.urlencoded({ extended: false })); // Parse the request
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use("/", router);

// app.get('', async (_req, res) => {
//   res.send(`I'm online !`);
// });

app.use(errorHandler);
app.use(notFoundHandler);

// Server Activation

app.listen(PORT, () => {
  console.log(`Calculator listening on port ${PORT}`);
});