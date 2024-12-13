import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { config } from "dotenv-safe";
config();

import { userRoute } from "./routes/userRoute";

const app = new Hono();

app.use("*", cors());

const route = app
  .get("/", (c) => {
    return c.text("Hello from PalBidder 👋");
  })
  .route("/users", userRoute);

const port = parseInt(process.env.API_PORT as string);

serve({
  fetch: route.fetch,
  port,
});

console.log(`🦊 API server is running on port: http://localhost:${port}`);

export type AppType = typeof route;
