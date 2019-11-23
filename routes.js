const router = require('express').Router();

router.post('/parking1_lot_status', (req, res) => {
        let io = req.app.get('socketio');
        let parkingInfo = req.body;
        
        io.emit("parking1:info", parkingInfo);
        console.log("Request received!");
        res.sendStatus(200);
});

router.post('/parking2_lot_status', (req, res) => {
        let io = req.app.get('socketio');
        let parkingInfo = req.body;
        
        io.emit("parking2:info", parkingInfo);
        console.log("Request received!");
        res.sendStatus(200);
});

module.exports = router;