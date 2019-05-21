# nomade-Uber 
 
 ##middle ware 
    -helmet: 보안을 위한 미들 웨어 
              요청때마나다 미들웨어가 요청을 잠시 멈추고 검사한 후에, 위험하지 않다면 요청을 계속 진행한다. 
    - morgan :
    - cors :

# nomade Uber clone coding 

-basic language node.js
-database graphql /apollo
-extra typescript

## Resolvers List

### Public Resolvers 
- [ ] Sign up/in facebook(0) , kakakotalk , google email
- [ ] Sign up/in email 
- [ ] Phone number verification-->twillo 사용 [but .env error/how solve?]
- [ ] Complet Phone number message check(인증번호시스템) -->돌아가는걸 먼저 보고 싶당...
- [ ] Sign up with email (폰인증 후에 있을부분)
      --> if U don't have Id at this system (User check)

###Authentication (인증)

- [ ] Generate JWT 생성
- [ ] Verifiy JWT

### Private Resolvers 

- [ ] Verify Email 
- [ ] Get my Profile
- [ ] Update my Profile 
- [ ] Toggle Driving Mode --> 내가 탑승중? 대기중? 내리는중?을 확인(only Backend)
- [ ] Report location /orientation(내가 폰을 움직일떄의 방향 그리고 내가 움직이고 내 좌표를 변경할때의 위치를 의미)
- [ ] Add Place
- [ ] Edit Place
- [ ] Delete Place (이건 왜?)
- [ ] See nearby Drivers  (움직임 트레킹도 가능하나?)
- [ ] Subscribe nearby New Drivers (다른 운전자를 얻거나 새로운 운전자를 얻을 수 있다.)
- [ ] Request Ride 
- [ ] Get Nearby Ride request 
- [ ] subscribe Nearby Rdie request 
- [ ] Subscribe to Ride Status(요청이 받아드려졌는지 취소인지 )--> 승인되면 real time으로 확인이 가능하다. 
- [ ] Get Chat Room Message
- [ ] Subscribe Chat Room Messages Real time
- [ ] Send a Chat Message


가입하고 내 핸드폰 인증후에 프로필을 가질수 있고 업데이트 가능하구
운전자와 탑승자를 고를 수 있고 위치를 보고하고, 장소를 추가하고 수정할 수 있다.
장솔를 삭제하는것도 가능하며 User은 내주변에 있는 운정자들을 볼수있다. 
그러고 내가 운전자를 Subscribe 할 수 있고 새로운 운전자가 왔을때 실시간으로 알람을 받을 수 있고 
Ride 요청 할 수있다. 그로고 운전자는 요청을 받는것 그리고 그 운전자는 새로운 근처 ride요청을 subscribe 할것이다. 그러고 채팅룸이 생성된다.
이전에 메세지를 볼수도 있고 나는 새로운 메세지를 subscribe 할것이다. 새로운 메세지를 보내기 위해 

## Code Challenge

- [ ] Get ride history
- [ ] See ride detail


error list 

- .env error (환경변수 에러)
-  mutation error (nullable-error)
