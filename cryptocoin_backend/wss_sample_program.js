var socket;

// 웹소켓 연결
function connectWS() {
	if(socket != undefined){
		socket.close();
	}
	console.log("connecting ...",$('#url').val());
		
	socket = new WebSocket($('#url').val());
		
	socket.onopen 	= function(e){ console.log("onopen..."); }
	socket.onclose 	= function(e){ console.log("onclose..."); $('#session_id').val(''); socket = undefined; }
	socket.onmessage= function(e){ console.log("onmessage...", e.data); }		
}

// 웹소켓 연결 해제
function closeWS() {
    if(socket != undefined){
        console.log("closing requested");
        socket.close();
        socket = undefined;
    }	
}

// 웹소켓 요청
function filterRequest(var filter) {
        if(socket == undefined){
            alert('no connect exists');
            return;
        }

        socket.send(filter);
}

function test() {
	connectWS();
	filterRequest('{"type":"ticker","symbols":["BTC_KRW","ETH_KRW","FNB_KRW","PCM_KRW","WET_KRW","ZRX_KRW"],"tickTypes":["1H","6H"]}');
	// ......
	closeWS();
}

// run test()
test();