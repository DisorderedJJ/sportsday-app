import express, { Express } from "express";
import http from "http";
import cors from "cors";
import configs from "./config/configs";
import { SimpleErrorHandler } from "./middlewares/GlobalErrorHandlingMiddleware";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import cookieParser from "cookie-parser";
import { Response, Request, NextFunction } from "express";
import authRoute from "./routes/AuthRoute";
import leaderboardRoute from "./routes/LeaderBoardRoute";

const app: Express = express();
const server: http.Server = http.createServer(app);

// cors and json middlewares
app.use(
  cors({
    origin: configs.corsAllowedOrigin,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  express.json({
    verify: (req: Request, res: Response, buff) => {
      req.rawBody = buff;
    },
  })
);

// swagger openapi doc route
const swaggerDocument = YAML.load("src/apiDocs/openapi.yaml");
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Buisness logic routes
// app.use("/healthcheck", healthCheckRouter);
app.use("/sportsapp/auth", authRoute);
app.use("/sportsapp/loaderboard", leaderboardRoute);
/* Global middlewares
 * 1- Error handling middleware
 */
app.use(SimpleErrorHandler);

server.listen(configs.port, () => {
  console.log(`Server Listening on PORT: ${configs.port}`);
  console.log(`API Doc URL: ${configs.serverUrl}/api`);
});
