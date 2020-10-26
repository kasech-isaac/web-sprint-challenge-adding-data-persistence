
exports.seed = async function(knex) {
	await knex("project").insert([   
    {
      id:1, 
      project_name: "project one", 
      description: "front end", 
      completed: false
    },
    {  id:2, 
      project_name: "project two", 
      description: "database", 
      completed: false
    },
    {
      id:3, 
      project_name: "project three", 
      description: "javascript", 
      completed: false
    },
    {
      id:4, 
      project_name: "project four", 
      description: "node.js", 
      completed: false
    },

	])
}
