const db = require("../config")

function find() {
	return db("project")
}
function findById(id) {
	return db("project")
		.where("id", id)
		.first()
}
function add(data) {
    return db("project")
    .insert(data)
}

function update(changes, id){
    return db("project")
    .where({id})
    .update(changes)
}
function remove(id){
    return db("project")
    .where({id})
    .del()
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove
  };