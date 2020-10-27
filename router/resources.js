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
				message: "resources not found plz try agin",})
		}

	
	} catch(err) {
		next(err)
	}
})



router.post('/resources', async (req, res, next) => {
    try {
	  const resources = await db.add(req.body)
	 	if (resources) {
        res.status(201).json({message:"created"})
      } else {
        res.status(404).json({message: "Error creating new resources"});
      }
    } catch (err) {
      next(err);
    }
  });

  router.put('/resources/:id', async (req, res, next) => {
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

  router.delete('/resources/:id', async (req, res, next) => {
    try {
      const removed = await db.remove(req.params.id)
      if (removed) {
        res.status(201).json({message:"resources is removed"})
      } else {
        res.status(400).json({message: "please try again"});
      }
    } catch (err) {
      next(err);
    }
  });
module.exports = router