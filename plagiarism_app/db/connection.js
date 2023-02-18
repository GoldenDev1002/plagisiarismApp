let mongoose= require("mongoose");
mongoose.set("strictQuery", true);

let connect = (url)=> {

return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true })
.then(()=> {
    console.log("connect to the database....")
})
.catch((err)=> {
    console.log(err)
})
}

module.exports = connect;