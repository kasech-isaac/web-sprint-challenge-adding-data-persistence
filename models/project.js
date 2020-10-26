const db = require("../config")

function find() {
	return db("project")
}
function findById(id) {
	return db("project")
		.where("id", id)
		.first()
}
function add(projectData){
    return db("resource")
    .insert(projectData)
}

module.exports = {
    find,
    findById,
    add,
  };