const router = require('express').Router()
const wdata = require('../models/weather')


router.get('/getAll', async (req, res) => {
    try {
        const AllData = await wdata.find()
        res.status(200).json(AllData)

    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/Win", async (req, res) => {
    console.log("req-body--", req.body);

    try {
        const nData = new wdata({
            place: req.body.place,
            temp: req.body.temp,
            wcondition: req.body.wcon,
            humidity:req.body.hum,
            cloud:req.body.clo,
            windspeed:req.body.ws,
            description:req.body.desc
        })
        const sData = await nData.save()
        res.status(200).json(sData)

    } catch (err) {
        console.error("Error in /Win endpoint:", err); // Logs the error details
        res.status(500).json({ error: "Internal Server Error", details: err.message });
    }

})




module.exports = router