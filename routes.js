const router = require('express').Router();

router.post('/parking_lot_status', (req, res) => {
        let io = req.app.get('socketio');
        let parkingInfo = req.body;
        
        io.emit("parking:info", parkingInfo);
        console.log("Request received!");
        res.sendStatus(200);
});

module.exports = router;