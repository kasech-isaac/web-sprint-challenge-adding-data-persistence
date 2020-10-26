
exports.up = async function(knex) {
    await knex.schema.createTable("project", (table)=>{
        table.increments("id")
        table.text("project_name").notNull()  
        table.text("description").notNull() 
        table.boolean("completed").notNull() .defaultTo(false)
      })

      await knex.schema.createTable("resource", (table)=>{
        table.increments("id")
        table.text("resource_name").notNull()  
        table.text("description").notNull() 
      })

      await knex.schema.createTable("task", (table)=>{
        table.increments("id")
        table.text("description").notNull()  
        table.text("notes").notNull() 
        table.boolean("completed").notNull().defaultTo(false)
        table.integer("project_id").notNull() 
            .references("id")
			.inTable("project")
			// .onUpdate("CASCADE")
			// .onDelete("CASCADE") 
        table.integer("resource_id")
            .references("id")
			.inTable("project")
			// .onUpdate("CASCADE")
			// .onDelete("CASCADE") 

      })

      await knex.schema.createTable("project_resource", (table)=>{

        table
        .integer("project_id")
        .references("id")
        .inTable("project") 
        // .onDelete("SET NULL")
        // .onUpdate("CASCADE")
        .notNull()
        table
        .integer("resource_id")
        .references("id")
        .inTable("resource") 
        // .onDelete("SET NULL")
        // .onUpdate("CASCADE")
        .notNull()
        table.primary(["project_id", "resource_id"])
      })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_resource")
    await knex.schema.dropTableIfExists("task")
    await knex.schema.dropTableIfExists("resource")
    await knex.schema.dropTableIfExists("project")

};
