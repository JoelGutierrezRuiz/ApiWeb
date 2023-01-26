const Express = require("express")
var cors = require("cors")
const morgan = require("morgan")
/*utilizamos las variables*/





const app = Express()

app.use(cors())
app.use(morgan("dev"))


app.listen(5000,()=>{
    console.log("Servidor iniciado")
})



app.get("/",cors(),(req,res)=>{
    res.send("alguien ha entrado a la web")
})