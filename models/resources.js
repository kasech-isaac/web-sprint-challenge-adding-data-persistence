const db = require("../config")

function find() {
	return db("resource")
}
function findById(id) {
	return db("resource")
		.where("id", id)
		.first()
}
function add(resourceData){
    return db("resource")
    .insert(resourceData)
}

module.exports = {
    find,
    findById,
    add,
  };