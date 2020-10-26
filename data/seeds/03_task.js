
exports.seed = async function(knex) {
	await knex("task").insert([   
    {
      id:1, 
      description: "task one", 
      notes: "create log in page", 
      completed: false,
      project_id:1,
      resource_id:1
    },

    {
      id:2, 
      description: "task two", 
      notes: "explain database", 
      completed: false,
      project_id:2,
      
    },

    {
      id:1, 
      description: "task three", 
      notes: "explain javascript", 
      completed: false,
      project_id:3,
     
    },

    {
      id:4, 
      description: "task four", 
      notes: "explain node.js", 
      completed: false,
      project_id:4,
    
    },
    
    
  

	])
}


