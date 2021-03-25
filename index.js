const bodyParser = require('body-parser')
var express = require('express')
const login = require('./lib/login')
const regist = require('./lib/regist')
const bit = require('./bitTest')
const tradSys = require('./lib/tradeSys')
var cors = require('cors')
var app = express()
const db = require('./lib/db')
app.use(cors())
var server = require('http').Server(app)
var {sequelize} = require('./models/index')
server.listen(80, () => {
    console.log('connected')
})
sequelize.sync();
var io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:80',
        methods: ['GET','POST'],
        credentials: true,   
    }
})

app.set('views', './views') //html 류 파일들 위치 폴더 지정 현재 BACKEND 폴더 내에 views 파일로 지정
app.set('view engine', 'pug') //html을 무엇을 사용할지
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.locals.pretty = true

app.all('/*', function(req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "X-Requested-With"); 
    next(); 
});

app.get('/', (req, res) => {
    res.render('main')
})

app.get('/regist', (req, res) => {
    res.render('regist')
})


app.post('/signup', (req, res) => {
    var sign = req.body
    console.log('requset = ', sign)
    regist( sign, (error, createdUserId) => {
        if(error) console.log('create error = ', error);
        console.log('create success created id = ', createdUserId)
        res.send(200)
    })
})

app.post('/signCoin', (req, res) => {
    var sign = req.body
    console.log('requset = ', sign)
    db.CreateCoin(sign);
    res.send(200)
})

app.get('/user', (req, res) => {
    console.log('access token body is ',req.headers['access-token'])
    res.send(200)
})

app.get('/coinData', (req, res) => {
    bit.getCoinsData( (coins, err) => {
        bit.getCoinsOrder((orders, err) => {
            var coinJson = {
                "data" : coins,
                "oder" : orders,
            }
            res.send(coinJson)
            console.log(coinJson)
        })
    })
})
 
app.get('/market', (req, res) => {
    res.render('coinTrade')
})

app.post('/market/buyoreder', (req, res) => {
    // 종목 수량 가격 토큰
    const order = {
        type: req.body.type,
        quantity: req.body.quantity,
        price: req.body.price,
        id: req.body.user_id,
    }
    //해당 id 지갑에 접근
    tradSys.BuyCoin(order)
    
})

app.post('/market/selloreder', (req, res) => {
    // 종목 수량 가격 토큰
    const order = {
        type: req.body.type,
        quantity: req.body.quantity,
        price: req.body.price,
        id: req.body.user_id,
    }
    //해당 id 지갑에 접근
    tradSys.SellCoin(order)
    
})

app.post('/login', (req, res) => {
    var email = req.body.email   // id 이 변수명이 프론트에서 전달되는 변수와 동일한 이름이어야 함
    var password = req.body.password  // pwd 이 변수명이 프론트에서 전달되는 변수와 동일한 이름이어야 함

    const user = login(email, password, (err, token) => {
        if(err) //err에는 아이디가 틀렸는지 비밀번호가 틀렸는지 각각에 따른 에러메시지가 들어있다
        {
            console.log('err is ',err.message);
            res.send(err.message)
        }
        else
        {
            console.log('userData is ', token);
            res.json(token)
        } 
    })
})


io.on('connection', async (socket) => {   //연결이 들어오면 실행되는 이벤트
    // socket 변수에는 실행 시점에 연결한 상대와 연결된 소켓의 객체가 들어있다.
    console.log('socket on ');
    socket.on('Catch Event', async (data) => {
        console.log('catch')
    })
    playAlert = setInterval(function() { 
        bit.getCoinsOrder((coins, err) => {
            coins.BTC.bids[2].price // 비트코인 매수 주문중 3번째 주문의 가격 예)63,654,145
            coins.BTC.bids[2].quantity // 비트코인 매수 주문중 3번째 주문의 수량 예)0.00153 
            coins.BTC.asks[0].price // 비트코인 매도 주문중 1번째 주문의 가격  예)63,654,145
            coins.BTC.asks[0].quantity // 비트코인 매도 주문중 1번째 주문의 수량 예)0.00153 

            for(coinName in coins)
            {
                for(buyOrder in coins[coinName].bids)
                {
                    console.log("buy order price = ",buyOrder.price)
                    console.log("buy order amount = ",buyOrder.quantity)
                    //안돌려봄, 되는지 몰름, 될거라고 생각함
                    //이러면 모든 코인들의 모든 매수 주문 가격과 수량들이 출력된다.
                }
                for(sellOrder in coins[coinName].asks)
                {
                    console.log("sell order price = ",sellOrder.price)
                    console.log("sell order amount = ",sellOrder.quantity)
                    //안돌려봄, 되는지 몰름, 될거라고 생각함
                    //이러면 모든 코인들의 모든 매도 주문 가격과 수량들이 출력된다.
                }
            }
        })
    }, 3000);
}
    // socket.on('Coin data call', (data) => {
    //     )
);







