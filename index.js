const request = require('request')
const axios = require('axios')
var express = require('express')
const app = express()
const fs = require('fs');
const port = 3000

app.get('/sample', (req, res) => {
    // console.log(req.query.url)

    uu = req.query.val

    axios.post('https://detail-updates-default-rtdb.firebaseio.com/sampleupdate.json', {
        url: uu
    })
        .then((response) => {
            console.log(response.status);
        }, (error) => {
            console.log(error);
        });
    res.send('done')
})

app.get('/shareupdate', (req, res) => {
    // console.log(req.query.url)

    sname = req.query.sname
    qn=req.query.quantity
    cost1=req.query.cost1
    costn=req.query.costn
    transfer=req.query.transfer
    dot=req.query.dot
    bs=req.query.bs

    axios.post('https://detail-updates-default-rtdb.firebaseio.com/shareupdate.json', {
        Share:sname,
        Quantity:qn,
        C1:cost1,
        Cn:costn,
        Deposit:transfer,
        date:dot,
        Type:bs
    })
        .then((response) => {
            console.log(response.status);
            res.send('1')
        }, (error) => {
            console.log(error);
        });
})

app.get('/getdetails', (req, res) => {
    var cc=[];
    axios.get('https://detail-updates-default-rtdb.firebaseio.com/shareupdate.json')
        .then((response) => {
            // cc=response.data;
            console.log(response.data);
            for (let key in response.data) {
                cc.push({
                    ...response.data[key]
                });
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(cc);
        }, (error) => {
            console.log(error);
    });
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})