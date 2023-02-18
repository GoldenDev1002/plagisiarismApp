let documentRoute = require("../models/model.js");

let getADocument = async (req, res)=> {
    try{
        let eachDocumentID  = req.params.id;
    let eachDocument = await documentRoute.find(eachDocumentID);
    res.status(201).render("home", {documents: eachDocument})
    }catch(err){
     res.status(404).render("404")
    }

}
let getDocuments = async (req, res)=> {
    try{
    let eachDocument = await documentRoute.find();
    res.status(201).render("home", {documents: eachDocument})
    }catch(err){
     res.status(404).render("404")
    }

}


let createDocuments = async (req, res)=> {
    
    try{
    let eachDocument = new documentRoute(req.body)
    eachDocument.save()
    .then((allDocument)=> {
        res.status(201).json(allDocument)
    })
 
    }catch(err){
     res.status(404).render("404")
    }

}


let updateDocuments = async (req, res)=> {
    try{
    let eachDocument = await documentRoute.findIdAndUpdate(id, req.body, {
        new: true,    
    })
    res.status(201).render("home", {documents: eachDocument})
    }catch(err){
     res.status(404).render("404")
    }

}

let deleteDocuments = async (req, res)=> {
    let deleteID = req.params.id
    try{
    let eachDocument = await documentRoute.findIdAndDelete(deleteID)
    res.status(201).render("home", {documents: eachDocument})
    }catch(err){
     res.status(404).render("404")
    }

}

module.exports = {
    getADocument,
    getDocuments,
    createDocuments,
    updateDocuments,
    deleteDocuments
}