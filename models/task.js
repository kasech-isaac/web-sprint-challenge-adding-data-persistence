const db = require("../config")

function find() {
	return db("tasks")
}
function findById(id) {
	return db("tasks")
		.where("id", id)
		.first()
}
function add(tasksData){
    return db("tasks")
    .insert(tasksData)
}

module.exports = {
    find,
    findById,
    add,
  };