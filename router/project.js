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
			message: "project not found",
			})
		}
	} catch(err) {
		next(err)
	}
})

router.post('/project', async (req, res, next) => {
    try {
      const project = await db.add(req.body)
      if (project) {
        res.status(201).json({message:"poject is created"})
      } else {
        res.status(400).json({message: "please try again"});
      }
    } catch (err) {
      next(err);
    }
  });

  router.put('/project/:id', async (req, res, next) => {
    try {
      const updated = await db.update(req.body,req.params.id )
      if (updated) {
        res.status(201).json({message:"poject is updated"})
      } else {
        res.status(400).json({message: "please try again"});
      }
    } catch (err) {
      next(err);
    }
  });

  router.delete('/project/:id', async (req, res, next) => {
    try {
      const removed = await db.remove(req.params.id)
      if (removed) {
        res.status(201).json({message:"poject is removed"})
      } else {
        res.status(400).json({message: "please try again"});
      }
    } catch (err) {
      next(err);
    }
  });

module.exports = router