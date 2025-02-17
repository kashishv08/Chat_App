const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection succesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}


let allChat = [
    {
        from:"neha",
        to:"khushi",
        msg:"hii! hru?",
        created_at: new Date()
    },
    {
        from:"arpit",
        to:"aman",
        msg:"need motivation to study",
        created_at: new Date()
    },
    {
        from:"kumal",
        to:"Harsh",
        msg:"please suggest internship website",
        created_at: new Date()
    },
    {
        from:"narayan",
        to:"tulsi",
        msg:"where have uh learn spoken english",
        created_at: new Date()
    },

];

Chat.insertMany(allChat);