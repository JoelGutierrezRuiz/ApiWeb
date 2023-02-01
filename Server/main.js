const Express = require("express")
var cors = require("cors")
const morgan = require("morgan")
require("./database")
const Task =require("./task.js")
/*utilizamos las variables*/



//Sacammos fecha

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}



const app = Express()

app.use(requestTime)
app.use(cors())
app.use(morgan("dev"))


app.listen(5000,()=>{
    console.log("Servidor iniciado")
})



app.get("/datos",cors(),(req,res)=>{
    res.send("alguien ha entrado a la web")
    console.log("Hemos recibido una peticion nueva")
})

app.get("/:pagina",cors(),(req,res)=>{
    const pagina = req.params.pagina
    console.log(req.params.pagina)
    const task = new Task({title:req.originalUrl, // String is shorthand for {type: String}
    visits: [{ ip: toString( req.ip), position:req.originalUrl ,date:3 }]})
    console.log(req.ip)
    task.save(task).then(()=>{console.log("Hemos guardado esta pagina")})
5})