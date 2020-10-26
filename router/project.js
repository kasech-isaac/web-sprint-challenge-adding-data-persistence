const express = require("express")
const db = require("../models/project")

const router = express.Router()

router.get("/project", async (req, res, next) => {
	try {
		const project = await db.find()
		res.json(project)
	} catch(err) {
		next(err)
	}
})

router.get("/project/:id", async (req, res, next) => {
	try {
		const project = await db.findById(req.params.id)
		if (!project) {
			return res.status(404).json({
				message: "resources not found",
			})
		}

		res.json(project)
	} catch(err) {
		next(err)
	}
})

router.post('/', async (req, res, next) => {
    try {
      const project = await db.add(req.body)
      if (project) {
        res.status(201).json(project)
      } else {
        res.status(400).json({message: `try again`});
      }
    } catch (err) {
      next(err);
    }
  });
module.exports = router