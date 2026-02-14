import express from "express";
import path from "path";
import { ENV } from "./config/env.js";
import { conectDB } from "./config/db.js"
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { functions, inngest } from "./config/inngest.js";

const app = express();
const __dirname = path.resolve();

app.use(clerkMiddleware())
app.use(express.json())
app.use("/api/inngest", serve({ client: inngest, functions: functions }))


app.get("/api/health", (req, res) => {
  res.status(200).send("server is healthy");
});


if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../admin/dist")));

  // SPA fallback route (MUST be last)
  app.get("/{*any}", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../admin", "dist", "index.html")
    );
  });
}



const StartServer = async () => {
  await conectDB();
  app.listen(ENV.PORT, () => {
    console.log("server is running on port", ENV.PORT)

  }
  );
}


StartServer()