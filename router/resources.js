const express = require("express")
const db = require("../models/resources")

const router = express.Router()

router.get("/resources", async (req, res, next) => {
	try {
		const resources = await db.find()
		res.json(resources)
	} catch(err) {
		next(err)
	}
})

router.get("/resources/:id", async (req, res, next) => {
	try {
		const resources = await db.findById(req.params.id)
		if (!resources) {
			return res.status(404).json({
				message: "resources not found",
			})
		}

		res.json(resources)
	} catch(err) {
		next(err)
	}
})

router.post('/', async (req, res, next) => {
    try {
      const resources = await db.create(req.body)
      if (resources) {
        res.status(201).json(result)
      } else {
        res.status(400).json({message: `Error creating resource`});
      }
    } catch (err) {
      console.log(err.stack);
      next(err);
    }
  });
module.exports = router