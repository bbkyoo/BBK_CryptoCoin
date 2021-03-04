const bodyParser = require('body-parser')
var express = require('express')
const login = require('./lib/Login')
const regist = require('./lib/regist')
const bit = require('./bitTest')
var cors = require('cors')
var app = express()
app.use(cors())
var server = require('http').Server(app)
server.listen(8080, () => {
    console.log('connected')
})
var io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:8080',
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

app.get('/user', (req, res) => {
    console.log('access token body is ',req.headers['access-token'])
    res.send(200)
})
 
app.get('/market', (req, res) => {
    res.render('market')
})

app.post('/market/buyoreder', (req, res) => {
    // 종목 수량 가격 토큰
    const order = {
        type: req.body.type,
        amount: req.body.amount,
        price: req.body.price,
        id: req.headers['access-token'],
    }
    //해당 id 지갑에 접근
    const wallet = xx(order.id);
    wallet.buy(order, (err) => {
        //주문완료 후 주문 실패시(돈 부족 같은) 에러 뜨고 주문 성공시 처리(클라이언트에 적절한 내용 전송)
    })
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
        bit.getSelectCoinData(['BTC', 'ETH', 'XRP'] ,(coins, err) => {
            socket.emit('updatePrice', coins);
        })
    }, 3000);
}
    // socket.on('Coin data call', (data) => {
    //     )
);







