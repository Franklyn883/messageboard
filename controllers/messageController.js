const {messages} = require("../models/messageModel")

const getIndex = function(req,res){
    res.render("index", {title:"Home page", messages:messages})
}

const addMessage = function(req,res){
    const messageText = req.body.text
    const messageUser = req.body.user
    messages.push({text:messageText,user:messageUser,added: new Date()})
    res.redirect("/")
}

const getAddMessage = function(req,res){
    res.render("message",{title: "Add message"})
}
module.exports = {getIndex,addMessage,getAddMessage}