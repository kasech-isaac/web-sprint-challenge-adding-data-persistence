
exports.seed = async function(knex) {
	await knex("resource").insert([   
    {
      id:1, 
      resource_name: "teacher", 
      description: "homework", 
      
    },
    {
      id:2, 
      resource_name: "computer", 
      description: "a reminder", 
      
    },
    {
      id:3, 
      resource_name: "metting", 
      description: "updateing", 
      
    },
 
	])
}

