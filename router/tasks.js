const express = require("express")
const db = require("../models/task")

const router = express.Router()

router.get("/task", async (req, res, next) => {
	try {
		const task = await db.find()
		res.json(task)
	} catch(err) {
		next(err)
	}
})

router.post('/task', async (req, res, next) => {
    try {
      const create = await db.add(req.body)
      if (create) {
        res.status(200).json({message:"task created"})
      } else {
        res.status(404).json({message: " add task "});
      }
    } catch (err) {
      next(err);
    }
  });

  router.post('task/:id/ProjectId', async (req, res, next) => {
	try {
		const proId = await db.findByProjectId(req.params.id)
		res.json(proId)
	} catch (err) {
		next(err);
	  }
  });

  
module.exports = router