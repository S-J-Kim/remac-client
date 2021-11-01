![remac-logo-02 2](https://user-images.githubusercontent.com/30287999/139634438-6ad8c4e3-ccf1-4559-b4f2-0c2742d2932e.png)
 
# REMAC: 유튜브 콘텐츠 유통 플랫폼
[REMAC 홈페이지](https://www.remac.kr)

## About REMAC
내가 생각만 하던 아이디어, 지금 바로 내가 원하는 유튜버에게 요청해보세요.
REMAC에서는 내가 원하는 아이디어를 유튜버에게 요청하고 영상을 받아 볼 수 있습니다.

## Contributors
|<img src="https://avatars.githubusercontent.com/u/30287999?v=4" width=150px/>|<img src="https://avatars.githubusercontent.com/u/69349288?v=4" width=150px/>|<img src="https://avatars.githubusercontent.com/u/78783840?v=4" width=150px/>|
|:--:|:--:|:--:|
|**김선종**|**박예진**|**최성민**|
|[@S-J-Kim](https://github.com/S-J-Kim)|[@yehey-1030](http://github.com/yehey-1030)|[@castlemin](https://github.com/castlemin)|
|Base UI Components<br>Base Styling Contexts<br>Request Chat Page<br>Mypage (Creator, Requestor)|Base Auth Hooks<br>API Fetcher<br>Signup Page<br>Main page|Backend Develop<br>[REMAC-server](https://github.com/castlemin/REMAC)|

## Tech Spec
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript(ES6+)-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white"/>  <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white"/> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/> <img src="https://img.shields.io/badge/JWT-4479A1?style=for-the-badge&logo=JSON Web Tokens&logoColor=white"/> 

## Used Libraries (Front-end)
- React-Router (for routing)
- Axios (for fetching APIs)
- Styled-Components (for styling)
- luxon (for handling dateTime)

## Used Libraries (Back-end)
- Django Rest Framework (for APIs)
- Simple JWT (for Authentication)

## How to execute
```
$ git clone https://github.com/S-J-Kim/remac-client.git
$ cd remac-client
$ npm install
$ npm start
```
or [Visit our Site](https://www.remac.kr)

## Demos
### Main Page
![image](https://user-images.githubusercontent.com/30287999/139640698-1114ed21-6c56-4799-85a5-c6990eb11d73.png)
- 카테고리별 원하는 크리에이터에게 요청을 보낼 수 있습니다.

### Mypage

|![image](https://user-images.githubusercontent.com/30287999/139641878-622d7a79-ba58-4524-bd5a-0a56bf3f33f9.png)|![image](https://user-images.githubusercontent.com/30287999/139642699-4dc18923-9a6c-413d-aceb-b061a3f2569d.png)|
|:--:|:--:|
|Mypage (Requestor)|Mypage (Creator)|
- 내가 올린 리퀘스트 목록과 나에게 온 리퀘스트 목록을 확인해보세요

### Requst Form
|![image](https://user-images.githubusercontent.com/30287999/139642874-e1f6c99c-130c-49b8-8b67-18ca4c134b51.png)|![image](https://user-images.githubusercontent.com/30287999/139642988-381bdc0b-3e14-466c-9a71-3f0dc467732f.png)|
|:--:|:--:|
|Request Form|Request Review|
- 크리에이터에게 내가 생각하는 아이디어를 요청해보세요!

### Request Chat
|![image](https://user-images.githubusercontent.com/30287999/139648181-4e33309e-e288-450d-8a7e-048bd64d67df.png)|![image](https://user-images.githubusercontent.com/30287999/139648266-d6af0cd1-a97b-4149-aa28-ef4be8953902.png)|
|:--:|:--:|
|Request Chat (Requestor)|Request Chat (Creator)|
- 요청사항을 1대1 대화 형식으로 크리에이터에게 확인할 수 있어요
