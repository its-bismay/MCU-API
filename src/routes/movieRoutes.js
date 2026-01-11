import express from "express"

const router = express.Router();

router.get("/list-items", (req, res) => {
    res.status(200).json({
        "message": "list item route is working",
        "lists": ["Ram", "Hari", "Gupta"]
    })
})

export default router;