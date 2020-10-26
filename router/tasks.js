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

router.get("/task/:id", async (req, res, next) => {
	try {
		const task = await db.findById(req.params.id)
		if (!task) {
			return res.status(404).json({
				message: "resources not found",
			})
		}

		res.json(task)
	} catch(err) {
		next(err)
	}
})

router.post('/', async (req, res, next) => {
    try {
      const task = await db.add(req.body)
      if (task) {
        res.status(201).json(task)
      } else {
        res.status(400).json({message: `try task again`});
      }
    } catch (err) {
      next(err);
    }
  });
module.exports = router