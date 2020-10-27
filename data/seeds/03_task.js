
exports.seed = async function(knex) {
	await knex("task").insert([   
    {
      project_id:1,
      description: "task one", 
      notes: "create log in page", 
      completed: false,
     
    },

    {
      project_id:2,
      description: "task two", 
      notes: "explain database", 
      completed: false,
      
      
    },

    {
      project_id:3,
      description: "task three", 
      notes: "explain javascript", 
      completed: false,
      
     
    },

 
    
    
  

	])
}


