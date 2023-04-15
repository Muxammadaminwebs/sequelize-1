import express from "express"
import router from "./routes/users.routes.js"

const PORT = process.env.PORT || 4000;


const app = express();
app.use(router)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.listen(PORT , console.log("server i stun"))