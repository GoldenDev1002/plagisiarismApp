let express = require("express");
let newRoute = express.Router();

let {
    getADocument,
    getDocuments,
    createDocuments,
    updateDocuments,
    deleteDocuments
} = require("../controller/pageRoute")

newRoute.route("/").get(getDocuments).post(createDocuments);
newRoute.route("/:id").get(getADocument).put(updateDocuments).delete(deleteDocuments);

module.exports = newRoute;