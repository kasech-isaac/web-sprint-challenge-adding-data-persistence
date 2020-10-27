
exports.seed = async function(knex) {
	await knex("project").insert([   
    {
      id:1, 
      project_name: "frontend 1", 
      description: "react", 
      completed: false
    },
    {  id:2, 
      project_name: "frontend 2", 
      description: "redux", 
      completed: false
    },
    {
      id:3, 
      project_name: "frontend 3", 
      description: "javascript", 
      completed: false
    }
  

	])
}
