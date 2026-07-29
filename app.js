import express from "express"
import "dotenv/config"
import budgetRouter from "./routs/budget.router.js"
import soldiersRouter from "./routs/soldiers.router.js"

const PORT = process.env.PORT || 3030

const app = express()

app.use(express.json())
app.use("/budget", budgetRouter)
app.use("/soldiers", soldiersRouter)




app.listen(PORT, (e) =>{
    if (e) console.log(e)
    console.log(`server running on port ${PORT}...`)
})