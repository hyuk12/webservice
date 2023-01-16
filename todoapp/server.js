// 서버를 띄우기 위한 기본 셋팅 (express 라이브러리)
const express = require('express');
const app = express();

// 첫번째는 포트 번호 , 두번째는 서버가 열리면 띄우는 코드
app.listen(8080, function(){
    console.log('listening on 8080');
});

app.get('/pet', function(req, resp){
    resp.send('펫용품 쇼핑할 수 있는 페이지입니다.');
});

app.get('/beauty', function(req, resp){
    resp.send('뷰티용품 쇼핑 페이지임');
});

app.get('/', function(req, resp){
    resp.sendFile(__dirname + '/index.html');
});

app.get('/write', function(req, resp){
    resp.sendFile(__dirname + '/write.html');
});