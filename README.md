
<div align="center">
 <h1>2025 동국대학교 동아리 박람회 사이트 - 동아리랑 </h1>
<p> ${\textsf{\color{gray}로고를 누르면 사이트로 이동해요}}$</p>
  <br/>
   <a href="https://2025-dgu-dongbak.netlify.app/">
    <img width="200px" src="public/images/hamburger.png" alt="동아리랑으로 이동하기"/>
  </a>
</div>


## ✏️ Project Overview

<b>동아리 박람회, 여기에 다 담았다!</b>
<br />
https://2025-dgu-dongbak.netlify.app/

<img src="https://github.com/user-attachments/assets/508e091c-84ed-499d-a8a3-9e8f9aeafa04" width="100%">

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/28fe7962-dc68-4be8-b75e-c443ae7d0e24" alt="Design 1" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/d222e0b5-60b4-4e0b-ab57-0a80aab1a2f1" alt="Design 2" width="100%"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/2eda4545-4d61-4227-a40f-690829c62bb6" alt="Design 3" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/0872c940-4ccd-4efa-a2b0-625ca386e3c6" alt="Design 4" width="100%"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/81780edb-bc6e-4f16-9686-9efaf0bfbd48" alt="Design 3" width="100%"/></td>
    <td><img src="https://github.com/user-attachments/assets/d6544dd3-1f00-48ca-a41d-5c1a87f3c692" alt="Design 4" width="100%"/></td>
  </tr>
</table>

### 구현 결과

<table>
  <tr>
    <td align="center"><b>메인 페이지</b><br>
      <img src="https://github.com/user-attachments/assets/9c45982d-32e5-4bd7-808e-67d710770753" width="100%"/>
    </td>
    <td align="center"><b>부스 페이지</b><br>
      <img src="https://github.com/user-attachments/assets/3622cc90-fab6-430f-b567-a350f5a1c5ac" width="100%"/>
    </td>
  </tr>
  <tr>
    <td align="center"><b>공연 페이지</b><br>
      <img src="https://github.com/user-attachments/assets/403eb416-b28a-4e3e-bbb6-a23192e96158" width="100%"/>
    </td>
    <td align="center"><b>개발자 정보 페이지</b><br>
      <img src="https://github.com/user-attachments/assets/4e88466b-ea80-40c7-a248-cfb24763ea69" width="100%"/>
    </td>
  </tr>
</table>


## 🌐 Tech Stack & Timeline

#### 기술 스택

<div>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white" />
</div>

#### 📅 개발기간 : 25.02.20 ~ 25.03.06 📅

#### 🚀 서비스 기간 : 25.03.05 ~ 25.03.06 🚀

## 👩🏻‍💻🧑🏻‍💻 **Contributors**
<div>

|                 [박세호](https://github.com/sayyyho)                  |                 [오태준](https://github.com/taejun0)                 |                 [하채민](https://github.com/Chaem03)                 |
| :------------------------------------------------------------------: | :------------------------------------------------------------------: | :------------------------------------------------------------------: |
| <img src="https://github.com/sayyyho.png" alt="박세호" width="150"/>  | <img src="https://github.com/taejun0.png" alt="오태준" width="150"/> | <img src="https://github.com/Chaem03.png" alt="하채민" width="150"/> |
|                     `공연 페이지 구현, 인프라`                         |                     `검색 기능 및 메인 UI 구현`                       |                             `부스 페이지 구현`                        |                     
</div>
## ❓ How to Run

```
yarn dev
```

---

## 🎯 Commit Convention

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor: 코드 리펙토링
- test: 테스트 코드, 리펙토링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정


## 📂 프로젝트 폴더 구조

```plaintext

📦src
 ┣ 📂apis
 ┃ ┣ 📜booth.js
 ┃ ┣ 📜foodTruck.js
 ┃ ┣ 📜instance.js
 ┃ ┣ 📜performance.js
 ┃ ┗ 📜SearchService.js
 ┣ 📂components
 ┃ ┣ 📂BoothDetailBox
 ┃ ┃ ┣ 📜BoothDetailBox.jsx
 ┃ ┃ ┣ 📜BoothInfo.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂BoothList
 ┃ ┃ ┣ 📜BoothList.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂BoothMap
 ┃ ┃ ┣ 📜BoothMap.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂Btn
 ┃ ┃ ┣ 📜Btn.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂buttons
 ┃ ┃ ┣ 📂headerbutton
 ┃ ┃ ┃ ┣ 📜HeaderButton.jsx
 ┃ ┃ ┃ ┗ 📜styled.js
 ┃ ┃ ┗ 📂OneButton
 ┃ ┃ ┃ ┣ 📜OneButton.jsx
 ┃ ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂ClubInfo
 ┃ ┃ ┣ 📜ClubInfo.jsx
 ┃ ┃ ┣ 📜RecruitInfo.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂Date
 ┃ ┃ ┣ 📜Date.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂DeveloperCard
 ┃ ┃ ┣ 📜DeveloperCard.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂errorBox
 ┃ ┃ ┣ 📜ErrorBox.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂ExpandableText
 ┃ ┃ ┣ 📜ExpandableText.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂FloatingBubbles
 ┃ ┃ ┣ 📜FloatingBubbles.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂footer
 ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂inputs
 ┃ ┃ ┗ 📂SearchInput
 ┃ ┃ ┃ ┣ 📜SearchInput.jsx
 ┃ ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂MainNavigate
 ┃ ┃ ┣ 📜MainNavigation.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂SearchBox
 ┃ ┃ ┣ 📜SearchBox.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂Selector
 ┃ ┃ ┣ 📜CategorySelector.jsx
 ┃ ┃ ┣ 📜DateSelector.jsx
 ┃ ┃ ┣ 📜PlaceSelector.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂Sidebar
 ┃ ┃ ┣ 📜Sidebar.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┗ 📜.gitkeep
 ┣ 📂constants
 ┃ ┣ 📂Booth
 ┃ ┃ ┗ 📜data.js
 ┃ ┣ 📂BoothDetail
 ┃ ┃ ┗ 📜data.js
 ┃ ┣ 📜.gitkeep
 ┃ ┣ 📜common.js
 ┃ ┣ 📜developerpageConstants.js
 ┃ ┣ 📜errorConstant.js
 ┃ ┣ 📜navigateConstants.js
 ┃ ┣ 📜performaceData.js
 ┃ ┣ 📜routeConstants.js
 ┃ ┣ 📜searchPageConstant.js
 ┃ ┗ 📜sidebarConstant.js
 ┣ 📂hooks
 ┃ ┣ 📂Booth
 ┃ ┃ ┣ 📜useBoothDetail.js
 ┃ ┃ ┣ 📜useBoothInfo.js
 ┃ ┃ ┣ 📜useFoodDetail.js
 ┃ ┃ ┗ 📜useFoodTruckInfo.js
 ┃ ┣ 📜useBoothSelect.js
 ┃ ┣ 📜useCustomNavigate.js
 ┃ ┣ 📜useNowTime.js
 ┃ ┣ 📜usePerformanceData.js
 ┃ ┣ 📜useReloadPage.js
 ┃ ┣ 📜useSearch.js
 ┃ ┗ 📜useSlider.js
 ┣ 📂pages
 ┃ ┣ 📂Booth
 ┃ ┃ ┣ 📜BoothDetailPage.jsx
 ┃ ┃ ┣ 📜BoothPage.jsx
 ┃ ┃ ┣ 📜FoodDetailPage.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂DevelopersPage
 ┃ ┃ ┣ 📜DevelopersPage.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂mainpage
 ┃ ┃ ┣ 📜MainPage.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂notFound
 ┃ ┃ ┣ 📜NotFound.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂performance
 ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┣ 📂base
 ┃ ┃ ┃ ┃ ┣ 📜PerformanceCard.jsx
 ┃ ┃ ┃ ┃ ┗ 📜PerformancTime.jsx
 ┃ ┃ ┃ ┣ 📂container
 ┃ ┃ ┃ ┃ ┣ 📜PerformanceContainer.jsx
 ┃ ┃ ┃ ┃ ┗ 📜styled.js
 ┃ ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┃ ┣ 📜PerformanceHeader.jsx
 ┃ ┃ ┃ ┃ ┗ 📜styled.js
 ┃ ┃ ┃ ┗ 📂timeTableItem
 ┃ ┃ ┃ ┃ ┣ 📜PerformanceTimeTableItem.jsx
 ┃ ┃ ┃ ┃ ┗ 📜styled.js
 ┃ ┃ ┣ 📜Performance.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂SearchPage
 ┃ ┃ ┣ 📜SearchPage.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┗ 📜.gitkeep
 ┣ 📂stores
 ┃ ┗ 📜.gitkeep
 ┣ 📂styles
 ┃ ┣ 📜global.js
 ┃ ┗ 📜theme.js
 ┣ 📂utils
 ┃ ┣ 📜getCamelCaseValue.js
 ┃ ┗ 📜getInstagramId.js
 ┣ 📜App.jsx
 ┣ 📜main.jsx
 ┗ 📜router.jsx
