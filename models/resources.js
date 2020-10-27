const db = require("../config")
const dbtasks=require("./task")

function find() {
	return db("resource")
}

function findById(id) {
	return db("resource")
		.where("id", id)
		.first()
}
function add(data){
    return db("resource")
    .insert(data)
}

function update(changes, id){
    return db("resource")
    .where({id})
    .update(changes)
}
function remove(id){
    return db("resource")
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