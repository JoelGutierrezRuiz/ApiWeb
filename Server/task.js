const mongoose=require("mongoose");
const {Schema} = mongoose;
const TaskSchema= new Schema({
    title:  String, // String is shorthand for {type: String}
    visits: [{ ip: String, position:String ,date: Number }],
  });
module.exports = mongoose.model("ApiWeb", TaskSchema);