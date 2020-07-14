const data = require("./data");

const Mongoose = require("mongoose");

Mongoose.connect("mongodb+srv://Vaibhavlm10:vaibhavlm10@webscraping.zzt0f.mongodb.net/tablecontent?retryWrites=true&w=majority2", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('mongoose is connected')).catch(err => console.log(err))

const compareandupdate = (dataObj)=>{
    try{
      const content = require("./model/model");
      const newdata = new content(dataObj);
      return newdata.save().catch(err =>console.log(err))
    }catch(err){
        console.error(err);
    }
    Mongoose.disconnect()
};

module.exports = compareandupdate;