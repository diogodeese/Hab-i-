import fastify from "fastify"
import cors from "@fastify/cors"
import { appRoutes } from "./routes"

/**
 * 
 * Lesson 2 -> 43:00
 * 
 * */ 

const app = fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
  port: 3333,
}).then(() => {
  console.log("HTTP Server running!")
})