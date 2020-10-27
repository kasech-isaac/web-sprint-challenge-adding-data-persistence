const db = require("../config")

function find() {
	return db("task")
}


    function findByProjectId(id){
    return db("task")
    .innerJoin("project", "project.id", "task.project_id")
    .where("task.id", id)
    .select([
        "project.id ",
       "project.project_name",
       "project.description",
       "task.notes"
    ])}
    
    function add(data) {
        return db("task")
        .insert(data)
    }

   

module.exports = {
    find,
    findByProjectId,
    add
  };