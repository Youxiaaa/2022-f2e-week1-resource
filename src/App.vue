<script setup>
import sideBar from './components/sideBar.vue'
import { ref } from 'vue'
import { startAnimation } from './composables/gsap'

const selectPlayer = ref(0)

startAnimation()

</script>

<template>
  <section class="bg-#FFC37D w-full min-h-screen overflow-x-hidden">
    <!-- Loading -->
    <div class="fixed w-full h-screen flex flex-col items-center justify-center progress__container">
      <img src="./assets/images/loading.png" alt="Loading" class="w-200px -translate-y-50px">
      <div class="w-80% md:w-40% xl:w-30% py-5px md:py-10px relative border-#007fab border-2px rounded-2xl -translate-y-50px overflow-hidden">
        <div class="absolute top-0 left-0 w-0 h-full bg-#007fab progress__bar"></div>
      </div>
    </div>
    <!-- 電腦版 -->
    <div class="animate__container opacity-0 hidden xl:block">
      <!-- 左側選單 -->
      <sideBar />
      <!-- 會員按鈕 -->
      <a href="https://2022.thef2e.com/login" target="_blank" class="fixed top-30px right-20px">
        <img src="./assets/images/btn_user.png" alt="user">
      </a>
      <div class="phase1 w-full h-screen">
        <!-- road -->
        <img src="./assets/images/road.png" alt="road" class="road w-[70%] fixed bottom-0 left-1/2 -translate-x-1/2 z-2">
        <!-- logo -->
        <img src="./assets/images/logo_text.png" alt="4th the f2e" class="logo fixed w-1/3 top-[5%] left-1/2 -translate-x-1/2 z-2 select-none pointer-events-none">
        <!-- second__logo -->
        <img src="./assets/images/second__logo.png" alt="4th the f2e" class="fixed top-30px left-40px w-200px opacity-0 second__title">
        <!-- 標題 -->
        <h1 class="title text-32px text-white fw-700 tracking-0.05rem lh-125% fixed left-1/2 -translate-x-1/2 top-28% z-3 bg-#FF5136 px-40px py-8px rounded-100px">互動式網頁設計</h1>
        <!-- 起點 -->
        <img src="./assets/images/start.png" alt="起點" class="pole h-full max-w-[65%] fixed bottom -0 left-1/2 -translate-x-1/2 z-1">
        <!-- 雲層 -->
        <img src="./assets/images/cloud_1.png" alt="左側雲層" class="cloud__left scale-0 w-1/5 fixed top-1/2 left-10% -translate-y-1/2 z-0">
        <img src="./assets/images/cloud_2.png" alt="左側雲層" class="cloud__right scale-0 w-1/5 fixed top-1/2 right-10% -translate-y-1/2 z-0">
        <!-- 起跑燈號 -->
        <img src="./assets/images/StateReady.png" alt="Ready?" class="fixed top-1/2 -right-100% -translate-y-1/2 w-275px status__ready-1">
        <img src="./assets/images/StateReady-1.png" alt="Step1" class="fixed top-1/2 right-0 hidden -translate-y-1/2 w-275px status__ready-2">
        <img src="./assets/images/StateReady-2.png" alt="Step2" class="fixed top-1/2 right-0 hidden -translate-y-1/2 w-275px status__ready-3">
        <img src="./assets/images/StateReady-3.png" alt="GO!!!" class="fixed top-1/2 right-0 hidden -translate-y-1/2 w-275px status__ready-4">
        <!-- 路樹 -->
        <img src="./assets/images/left__tree.png" alt="左側路樹" class="fixed -bottom-100% left-40% -translate-x-1/2 w-150px z-1 left__tree">
        <img src="./assets/images/right__tree.png" alt="左側路樹" class="fixed -bottom-100% right-40% translate-x-1/2 w-150px z-1 right__tree">
        <!-- talking one -->
        <div class="fixed top-60px left-1/2 -translate-x-1/2 px-50px py-20px inline-block z-1 talking-1 opacity-0">
          <img src="./assets/images/talking.png" class="absolute top-0 left-0 w-full object-contain z-[-1]">
          <h2 class="text-60px fw-700 lh-125% text-#007FAB">你是否也有以下困擾？</h2>
        </div>
        <!-- questions -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-20px w-70% fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 question__container">
          <div class="col-span-1 flex flex-col items-center gap-20px opacity-0 scale-0 question-1">
            <h3 class="text-#FF5136 text-24px 2xl:text-32px fw-700 tracking-0.05em">羨慕別人的酷酷網頁動畫？</h3>
            <img src="./assets/images/question_1.png" alt="question1" class="w-full object-cover">
          </div>
          <div class="col-span-1 flex flex-col items-center gap-20px opacity-0 scale-0 question-2">
            <h3 class="text-#FF5136 text-24px 2xl:text-32px fw-700 tracking-0.05em">滿足不了同事的許願？</h3>
            <img src="./assets/images/question_2.png" alt="question2" class="w-full object-cover">
          </div>
          <div class="col-span-1 flex flex-col items-center gap-20px opacity-0 scale-0 question-3">
            <h3 class="text-#FF5136 text-24px 2xl:text-32px fw-700 tracking-0.05em">動畫技能樹太雜無從下手？</h3>
            <img src="./assets/images/question_3.png" alt="question3" class="w-full object-cover">
          </div>
        </div>
        <!-- talking two -->
        <div class="fixed top-60px left-1/2 -translate-x-1/2 px-50px py-20px z-1 talking-2 opacity-0">
          <img src="./assets/images/talking-2.png" class="absolute top-0 left-0 w-full object-contain z-[-1]">
          <h2 class="text-60px fw-700 lh-125% text-#007FAB whitespace-nowrap">本屆主題：互動式網頁設計</h2>
        </div>
        <p class="fixed top-200px left-1/2 -translate-x-1/2 text-24px text-#A46039 fw-700 talking-2 opacity-0">以下兩個角色進行攜手合作</p>
        <!-- 角色選擇 -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-20px w-70% fixed top-40% -translate-y-1/2 left-1/2 -translate-x-1/2 player__container opacity-0 translate-y-30px">
          <div class="col-span-1 relative flex flex-col items-center gap-20px">
            <img src="./assets/images/btn_joinHand.png" class="absolute -top-70px left-1/2 -translate-x-1/2 duration-300" :class="[selectPlayer === 1 ? 'scale-100' : 'scale-0']">
            <a @mouseover="selectPlayer = 1" @mouseleave="selectPlayer = 0" href="https://2022.thef2e.com/works" target="_blank">
              <img src="./assets/images/btn_join.png" class="cursor-pointer">
            </a>
            <p class="text-32px fw-700 lh-44.8px text-#007FAB">前端工程師</p>
          </div>
          <div class="col-span-1 relative flex flex-col items-center gap-20px">
            <img src="./assets/images/btn_joinHand.png" class="absolute -top-70px left-1/2 -translate-x-1/2 duration-300" :class="[selectPlayer === 2 ? 'scale-100' : 'scale-0']">
            <a @mouseover="selectPlayer = 2" @mouseleave="selectPlayer = 0" href="https://2022.thef2e.com/works" target="_blank">
              <img src="./assets/images/btn_join.png" class="cursor-pointer">
            </a>
            <p class="text-32px fw-700 lh-44.8px text-#007FAB">UI設計師</p>
          </div>
          <div class="col-span-1 relative flex flex-col items-center gap-20px">
            <img src="./assets/images/btn_joinHand.png" class="absolute -top-70px left-1/2 -translate-x-1/2 duration-300" :class="[selectPlayer === 3 ? 'scale-100' : 'scale-0']">
            <a @mouseover="selectPlayer = 3" @mouseleave="selectPlayer = 0" href="https://2022.thef2e.com/works" target="_blank">
              <img src="./assets/images/btn_join.png" class="cursor-pointer">
            </a>
            <p class="text-32px fw-700 lh-44.8px text-#007FAB">團體組(UI+前端)</p>
          </div>
        </div>
        <!-- talking three -->
        <div class="fixed top-60px left-1/2 -translate-x-1/2 px-50px py-20px z-1 talking-3 opacity-0 scale-0">
          <img src="./assets/images/talking-2.png" class="absolute top-0 left-0 w-full object-contain z-[-1]">
          <h2 class="text-60px fw-700 lh-125% text-#007FAB whitespace-nowrap">年度最強合作，三大主題來襲</h2>
        </div>
        <p class="fixed top-200px left-1/2 -translate-x-1/2 text-24px text-#A46039 fw-700 talking-3 opacity-0 scale-0 text-center">各路廠商強強聯手<br>共同設計出接地氣的網頁互動挑戰關卡</p>
        <!-- week1 && week2 && week3 -->
        <div class="fixed bottom-0 left-0 flex items-start justify-start pl-5% lg:pl-10% gap-x-40px opacity-0 week1__container">
          <img src="./assets/images/week-1.png" alt="week1">
          <div class="flex flex-col gap-y-20px">
            <h3 class="text-60px fw-700 text-#FF5136">WEEK 1</h3>
            <p class="text-44px fw-700 text-#007FAB">The F2E 活動網站設計</p>
            <div class="flex gap-10px">
              <span class="text-24px fw-700 text-#A46039 border border-#A46039 px-20px py-6px rounded-2xl mr-10px">Parallax Scrolling</span>
              <span class="text-24px fw-700 text-#A46039 border border-#A46039 px-20px py-6px rounded-2xl">#版塊設計</span>
            </div>
            <a href="https://2022.thef2e.com/news/week1" target="_blank" class="text-18px fw-500 text-white px-20px py-10px bg-#A46039 self-start rounded-2xl decoration-none">查看關卡細節</a>
          </div>
        </div>
        <div class="fixed bottom-0 right-0 flex items-start justify-start pr-5% lg:pr-10% gap-x-40px opacity-0 week2__container">
          <div class="flex flex-col items-end gap-y-20px">
            <h3 class="text-60px fw-700 text-#FF5136">WEEK 2</h3>
            <p class="text-44px fw-700 text-#007FAB">今晚，我想來點點簽</p>
            <div class="flex gap-10px">
              <span class="text-24px fw-700 text-#A46039 border border-#A46039 px-20px py-6px rounded-2xl mr-10px">Canvas</span>
              <span class="text-24px fw-700 text-#A46039 border border-#A46039 px-20px py-6px rounded-2xl">#凱鈿行動科技</span>
            </div>
            <a href="https://2022.thef2e.com/news/week2" target="_blank" class="text-18px fw-500 text-white px-20px py-10px bg-#A46039 self-end rounded-2xl decoration-none">查看關卡細節</a>
          </div>
          <img src="./assets/images/week-2.png" alt="week2">
        </div>
        <div class="fixed bottom-0 left-0 flex items-start justify-start pl-5% lg:pl-10% gap-x-40px opacity-0 week3__container">
          <img src="./assets/images/week-3.png" alt="week3">
          <div class="flex flex-col gap-y-20px">
            <h3 class="text-60px fw-700 text-#FF5136">WEEK 3</h3>
            <p class="text-44px fw-700 text-#007FAB">Scrum 新手村</p>
            <div class="flex gap-10px">
              <span class="text-24px fw-700 text-#A46039 border border-#A46039 px-20px py-6px rounded-2xl mr-10px">JS draggable</span>
              <span class="text-24px fw-700 text-#A46039 border border-#A46039 px-20px py-6px rounded-2xl">#鈦坦科技</span>
            </div>
            <a href="https://2022.thef2e.com/news/week3" target="_blank" class="text-18px fw-500 text-white px-20px py-10px bg-#A46039 self-start rounded-2xl decoration-none">查看關卡細節</a>
          </div>
        </div>
        <!-- date -->
        <div class="fixed top-1/2 left-0 px-10% mx-auto pointer-events-none relative z-[-1] line__container">
          <div class="absolute top-0 left-0 bg-#FFC37D w-full h-full line__mask"></div>
          <img src="./assets/images/date_line.png" alt="date line" class="w-full">
          <!-- step1 -->
          <div class="absolute left-25% bottom-45% bg-#007FAB w-30px h-30px rounded-full opacity-0 step__circle--1">
            <div class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full w-4px h-0 bg-#007FAB step__line--1"></div>
          </div>
          <!-- step2 -->
          <div class="absolute left-50% bottom-80% -translate-x-1/2 bg-#007FAB w-30px h-30px rounded-full opacity-0 step__circle--2">
            <div class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full w-4px h-0 bg-#007FAB step__line--2"></div>
          </div>
          <!-- step3 -->
          <div class="absolute right-25% bottom-45% bg-#007FAB w-30px h-30px rounded-full opacity-0 step__circle--3">
            <div class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full w-4px h-0 bg-#007FAB step__line--3"></div>
          </div>
        </div>
        <div class="fixed top-5% left-1/2 w-70% -translate-x-1/2 step__outside">
          <div class="grid grid-cols-3 w-full mx-auto">
            <div class="flex flex-col w-full justify-center items-center gap-10px step1__container opacity-0">
              <img src="./assets/images/btn_joinHand.png" alt="">
              <img src="./assets/images/btn_join.png">
              <h3 class="text-#FF5136 text-60px fw-700">SIGN UP</h3>
              <p class="px-15px py-5px text-white text-32px fw-700 bg-#007FAB rounded-2xl">10/13 - 11/6</p>
              <p class="text-24px fw-700 text-#A46039">截止前可修改報名組別</p>
            </div>
            <div class="flex flex-col w-full justify-center items-center gap-10px step2__container opacity-0">
              <img src="./assets/images/date_start.png">
              <h3 class="text-#FF5136 text-60px fw-700">START</h3>
              <p class="px-15px py-5px text-white text-32px fw-700 bg-#007FAB rounded-2xl">10/31 - 11/28</p>
              <p class="text-24px fw-700 text-#A46039 text-center">10/31(一) UI、團體組開賽<br>11/7(一) 前端組開賽</p>
            </div>
            <div class="flex flex-col w-full justify-center items-center gap-10px step3__container opacity-0">
              <img src="./assets/images/date_upload.png">
              <h3 class="text-#FF5136 text-60px fw-700">UPLOAD</h3>
              <p class="px-15px py-5px text-white text-32px fw-700 bg-#007FAB rounded-2xl">10/31 - 11/28</p>
              <p class="text-24px fw-700 text-#A46039 text-center">依賽程登錄作品<br><span class="text-20px text-#FF5136">額外競賽： 主題豐厚獎金等著你</span></p>
            </div>
          </div>
        </div>
        <!-- 區區修煉已經無法滿足了嗎 -->
        <h2 class="text-60px fw-700 text-#FF5136 fixed top-15% left-1/2 -translate-x-1/2 keep-all scale-200 opacity-0 pointer-events-none sp__title">區區修煉已經無法滿足了嗎？</h2>
        <img src="./assets/images/bg_decorate_03.png" alt="" class="fixed bottom-1/2 translate-y-1/2 left--100% w-20% anime__img--1">
        <img src="./assets/images/bg_decorate_07.png" alt="" class="fixed bottom-1/2 translate-y-1/2 right--100% w-20% anime__img--2">
        <!-- 獎盃 -->
        <div class="fixed top-50px left-1/2 -translate-x-1/2 px-50px py-15px z-1 talking-4 opacity-0">
          <img src="./assets/images/talking.png" class="absolute top-0 left-0 w-full object-contain z-[-1]">
          <h2 class="text-60px fw-700 lh-125% text-#007FAB whitespace-nowrap">還有比賽等著你！</h2>
        </div>
        <div class="fixed top-40% -translate-y-1/2 left-1/2 -translate-x-1/2 grid grid-cols-12 gap-40px w-full items-center">
          <div class="col-span-4 relative">
            <img src="./assets/images/award_trophy.png" class="absolute top-1/2 left-0 w-300px -translate-y-1/2 z-1 trophy opacity-0">
            <img src="./assets/images/award_light.png" class="fixed top-0 left-0 w-300px -translate-y-1/2 z-0 light opacity-0 spin__animation">
          </div>
          <div class="flex flex-col gap-20px col-span-8 award__content opacity-0">
            <div class="flex flex-col gap-10px">
              <h3 class="text-#FF5136 text-32px fw-700">評審機制</h3>
              <p class="text-#007FAB text-18px fw-700">初選： 將由六角學院前端、UI 評審進行第一波篩選。</p>
              <p class="text-#007FAB text-18px fw-700">決選： 由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！</p>
            </div>
            <div class="flex flex-col gap-10px">
              <h3 class="text-#FF5136 text-32px fw-700">獎項 </h3>
              <p class="text-#007FAB text-18px fw-700">1. 初選佳作 共六十位 數位獎狀</p>
              <p class="text-#007FAB text-18px fw-700">2. 個人企業獎 共六位 NTD 3,000 /位</p>
              <p class="text-#007FAB text-18px fw-700">3. 團體企業獎 共三組 NTD 10,000 /組</p>
              <p class="text-#007FAB text-18px fw-700">4. 以上皆提供完賽數位獎狀</p>
            </div>
          </div>
        </div>
        <!-- 贊助單位 -->
        <div class="fixed top-30px left-1/2 -translate-x-1/2 px-100px py-20px z-1 talking-5 opacity-0">
          <img src="./assets/images/talking-5.png" class="absolute top-0 left-0 w-full object-contain z-[-1]">
          <h2 class="text-60px fw-700 lh-125% text-#007FAB">贊助單位</h2>
        </div>
        <img src="./assets/images/left__tree--2.png" alt="left tree" class="fixed bottom--5% left-0 left__tree--2 opacity-0">
        <img src="./assets/images/right__tree--2.png" alt="right tree" class="fixed bottom--5% right-0 right__tree--2 opacity-0">
        <div class="fixed w-60% top-40% -translate-y-1/2 left-1/2 -translate-x-1/2 grid lg:grid-cols-3 grid-cols-1 lg:gap-120px company__container">
          <div class="col-span-1 company--1 opacity-0 translate-y-30px">
            <a href="https://blockstudio.tw/" target="_blank" class="w-full relative h-0 pb-100% block">
              <img src="./assets/images/btn_sponsor.png" class="absolute top-0 left-0 w-full h-full">
              <img src="./assets/images/logo_blockstudio.png" class="absolute top-5% left-5% w-85% h-85%">
            </a>
            <div class="flex justify-center mt-10px">
              <p class="text-24px fw-700 px-20px py-5px text-#A46039 border-#A46039 border rounded-2xl">#版塊設計</p>
            </div>
          </div>
          <div class="col-span-1 company--2 opacity-0 translate-y-30px">
            <a href="https://titansoft.com/tw" target="_blank" class="w-full relative h-0 pb-100% block">
              <img src="./assets/images/btn_sponsor.png" class="absolute top-0 left-0 w-full h-full">
              <img src="./assets/images/logo_titan.png" class="absolute top-5% left-5% w-85% h-85%">
            </a>
            <div class="flex justify-center mt-10px">
              <p class="text-24px fw-700 px-20px py-5px text-#A46039 border-#A46039 border rounded-2xl">#鈦坦科技</p>
            </div>
          </div>
          <div class="col-span-1 company--3 opacity-0 translate-y-30px">
            <a href="https://www.kdanmobile.com/zh-tw" target="_blank" class="w-full relative h-0 pb-100% block">
              <img src="./assets/images/btn_sponsor.png" class="absolute top-0 left-0 w-full h-full">
              <img src="./assets/images/logo_kdan.png" class="absolute top-5% left-5% w-85% h-85%">
            </a>
            <div class="flex justify-center mt-10px">
              <p class="text-24px fw-700 px-20px py-5px text-#A46039 border-#A46039 border rounded-2xl">#凱鈿科技</p>
            </div>
          </div>
        </div>
        <!-- 終點 -->
        <img src="./assets/images/left__cloud--2.png" class="fixed top-1/2 -translate-y-1/2 left--100% left__cloud--2">
        <img src="./assets/images/right__cloud--2.png" class="fixed top-1/2 -translate-y-1/2 right--100% right__cloud--2">
        <img src="./assets/images/finish.png" class="fixed bottom-0% left-10% w-80% h-full finish opacity-0 hidden">
      </div>
      <div class="z-9999">
        <img src="./assets/images/finishLine_left.png" class="fixed bottom-1/3 translate-y-1/2 left--8% w-60% z-9999 finish__line__left opacity-0">
        <img src="./assets/images/finishLine_right.png" class="fixed bottom-1/3 translate-y-1/2 right--8% w-60% z-1000 finish__line__right opacity-0">
      </div>
      <!-- 報名 -->
      <img src="./assets/images/second__logo.png" alt="4th the f2e" class="fixed top-30% -translate-y-1/2 left-1/2 -translate-x-1/2 w-25% opacity-0 third__title hidden">
      <a href="https://2022.thef2e.com/" target="_blank" class="fixed bottom-1/3 translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col gap-20px items-center justify-center decoration-none signup__container opacity-0">
        <img src="./assets/images/btn_joinHand.png" class="palse__animation">
        <img src="./assets/images/btn_join.png" class="w-100px">
        <p class="text-#FF5136 text-60px fw-700">立刻報名</p>
      </a>
      <!-- join buttn -->
      <a href="https://2022.thef2e.com/" target="_blank" class="fixed bottom-20px right-20px flex flex-col items-center gap-4px join__container scale-0 decoration-none join__container">
        <p class="text-24px fw-700 text-#007FAB">JOIN</p>
        <img src="./assets/images/btn_joinHand.png" alt="hand" class="w-55px palse__animation">
        <img src="./assets/images/btn_join.png" alt="join button" class="w-100px">
        <!-- <img src="./assets/images/btn_join_h.png" alt="join button" class="w-100px"> -->
      </a>
      <!-- 三位跑者 -->
      <div class="w-[60%] fixed bottom-0 left-1/2 -translate-x-1/2 z-2 runner__outside">
        <div class="w-full grid grid-cols-3 gap-40px">
          <div class="col-span-1">
            <div class="flex items-center justify-center flex-col runner__container scale-0">
              <h3 class="text-24px fw-700 text-#007FAB runner__title">前端工程師</h3>
              <div class="mt-8px bg-#007FAB py-4px px-28px flex items-center justify-center gap-12px flex-inline rounded-40px runner__title">
                <img src="./assets/images/users.png" alt="users" class="w-22px h-22px">
                <p class="text-24px fw-700 text-white">920</p>
              </div>
              <img src="./assets/images/dog__run.gif" alt="doggie" class="w-[90%] runner runner-1">
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex items-center justify-center flex-col runner__container scale-0">
              <h3 class="text-24px fw-700 text-#007FAB runner__title">UI設計師</h3>
              <div class="mt-8px bg-#007FAB py-4px px-28px flex items-center justify-center gap-12px flex-inline rounded-40px runner__title">
                <img src="./assets/images/users.png" alt="users" class="w-22px h-22px">
                <p class="text-24px fw-700 text-white">110</p>
              </div>
              <img src="./assets/images/cat__run.gif" alt="cat" class="w-[90%] runner runner-2">
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex items-center justify-center flex-col runner__container scale-0">
              <h3 class="text-24px fw-700 text-#007FAB runner__title">團體組</h3>
              <div class="mt-8px bg-#007FAB py-4px px-28px flex items-center justify-center gap-12px flex-inline rounded-40px runner__title">
                <img src="./assets/images/users.png" alt="users" class="w-22px h-22px">
                <p class="text-24px fw-700 text-white">41</p>
              </div>
              <img src="./assets/images/pig__run.gif" alt="pig" class="w-[90%] lg:translate-y-50px runner runner-3">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 手機版 -->
    <div class="block xl:hidden pt-60px responsive__container opacity-0 pb-150px">
      <!-- 左側選單 -->
      <div class="fixed top-0 left-0 w-full bg-#FFC37D z-999 min-h-60px">
        <a href="#">
          <img src="./assets/images/logo__m.png" alt="" class="absolute top-8px left-1/2 -translate-x-1/2 rwd__logo scale-0">
        </a>
        <a href="https://2022.thef2e.com/users" target="_blank">
          <img src="./assets/images/btn_user.png" class="absolute top-8px right-5% w-50px rwd__user__btn scale-0">
        </a>
      </div>
      <sideBar />
      <div class="w-full h-screen relative overflow-x-hidden player__container-m opacity-0">
        <div class="w-full flex justify-center">
          <img src="./assets/images/second__logo.png" class="w-65% second__logo--m">  
        </div>
        <div class="w-full flex flex-col gap-10px items-center">
          <h2 class="text-20px fw-700 text-white px-20px py-10px bg-#FF5136 rounded-2xl">互動式網頁設計</h2>
          <p class="text-20px fw-700 text-#007FAB">前端工程師</p>
          <div class="flex gap-5px items-center bg-#007FAB rounded-2xl px-30px py-5px">
            <img src="./assets/images/users.png" alt="" class="w-30px">
            <p class="text-18px text-white fw-700">920</p>  
          </div>
          <p class="text-20px fw-700 text-#007FAB">UI設計師</p>
          <div class="flex gap-5px items-center bg-#007FAB rounded-2xl px-30px py-5px">
            <img src="./assets/images/users.png" alt="" class="w-30px">
            <p class="text-18px text-white fw-700">110</p>  
          </div>
          <p class="text-20px fw-700 text-#007FAB">團體組</p>
          <div class="flex gap-5px items-center bg-#007FAB rounded-2xl px-30px py-5px">
            <img src="./assets/images/users.png" alt="" class="w-30px">
            <p class="text-18px text-white fw-700">41</p>  
          </div>
        </div>
        <img src="./assets/images/StateReady.png" class="fixed bottom-20% right-0 w-30% stateReady-1-m">
        <img src="./assets/images/StateReady-3.png" class="fixed bottom-20% right-0 w-30% stateReady-4-m hidden">
        <img src="./assets/images/cloud_1.png" class="fixed top-1/2 left-0% w-30% left__cloud--1-m">
        <img src="./assets/images/cloud_2.png" class="fixed top-1/2 right-0% w-30% right__cloud--1-m">
      </div>
      <div class="w-full relative h-80px fade">
        <img src="./assets/images/talking-m.png" class="absolute top-0 left-0 h-full  w-full object-cover">
        <p class="absolute top-40% -translate-y-1/2 left-1/2 -translate-x-1/2 text-24px fw-700 text-#007FAB keep-all">你是否也有以下困擾？</p>
      </div>
      <div class="w-80% mx-auto grid grid-cols-1 gap-y-40px mt-40px">
        <div class="col-span-1 fade-left">
          <h3 class="text-20px fw-700 text-#FF5136 text-center">羨慕別人的酷酷網頁動畫？</h3>
          <img src="./assets/images/question_1.png" class="w-full">
        </div>
        <div class="col-span-1 fade-right">
          <h3 class="text-20px fw-700 text-#FF5136 text-center">滿足不了同事的許願？</h3>
          <img src="./assets/images/question_2.png" class="w-full">
        </div>
        <div class="col-span-1 fade-left">
          <h3 class="text-20px fw-700 text-#FF5136 text-center">動畫技能樹太雜無從下手？</h3>
          <img src="./assets/images/question_3.png" class="w-full">
        </div>
      </div>

      <div class="w-full relative h-80px mt-40px fade">
        <img src="./assets/images/talking-m.png" class="absolute top-0 left-0 h-full  w-full object-cover">
        <p class="absolute top-40% -translate-y-1/2 left-1/2 -translate-x-1/2 text-24px fw-700 text-#007FAB keep-all"><span>本屆主題互動式網頁設計？</span></p>
      </div>
      <p class="text-center text-20px fw-700 text-#A46039 mt-20px">以下兩個角色進行攜手合作</p>
      <div class="w-85% grid grid-cols-2 gap-y-40px gap-x-20px mt-40px items-center mx-auto">
        <div class="col-span-1 fade-left">
          <img src="./assets/images/dog.png" class="w-full">
        </div>
        <div class="col-span-1 fade-right">
          <a href="https://2022.thef2e.com/news" target="_blank" class="flex flex-col items-center gap-10px decoration-none">
            <img src="./assets/images/btn_join.png" alt="" class="w-full">
            <p class="text-20px fw-700 text-#007FAB">前端工程師</p>
          </a>
        </div>
        <div class="col-span-1 fade-left">
          <a href="https://2022.thef2e.com/news" target="_blank" class="flex flex-col items-center gap-10px decoration-none">
            <img src="./assets/images/btn_join.png" alt="" class="w-full">
            <p class="text-20px fw-700 text-#007FAB">UI設計師</p>
          </a>
        </div>
        <div class="col-span-1 fade-right">
          <img src="./assets/images/cat.png" class="w-full">
        </div>
        <div class="col-span-1 fade-left">
          <img src="./assets/images/pig.png" class="w-full">
        </div>
        <div class="col-span-1 fade-right">
          <a href="https://2022.thef2e.com/news" target="_blank" class="flex flex-col items-center gap-10px decoration-none">
            <img src="./assets/images/btn_join.png" alt="" class="w-full">
            <p class="text-20px fw-700 text-#007FAB">團體組(UI+前端)</p>
          </a>
        </div>
      </div>


      <div class="w-full relative h-80px mt-40px fade">
        <img src="./assets/images/talking-m.png" class="absolute top-0 left-0 h-full  w-full object-cover">
        <p class="absolute top-40% -translate-y-1/2 left-1/2 -translate-x-1/2 text-24px fw-700 text-#007FAB keep-all whitespace-nowrap"><span>年度最強合作，三大主題來襲</span></p>
      </div>
      <p class="text-center text-20px fw-700 text-#A46039 mt-20px">各路廠商強強聯手<br>共同設計出接地氣的網頁互動挑戰關卡</p>
      <div class="w-85% grid grid-cols-1 mx-auto gap-y-40px gap-x-0 mt-40px">
        <div class="col-span-1 flex flex-col gap-y-10px items-center fade-left">
          <img src="./assets/images/week-1.png" class="w-80% mx-auto">
          <h3 class="text-#FF5136 text-28px fw-700">WEEK1</h3>
          <p class="text-24px fw-700 text-#007FAB">The F2E 活動網站設計</p>
          <p class="text-18px fw-700 text-#A46039 border border-#A46039 px-20px py-10px rounded-2xl">Parallax Scrolling</p>
          <p class="text-18px fw-700 text-#A46039 border border-#A46039 px-20px py-10px rounded-2xl">#版塊設計</p>
          <a href="https://2022.thef2e.com/news/week1" target="_blank" class="text-18px fw-500 text-white bg-#A46039 px-20px py-10px rounded-2xl decoration-none">查看關卡細節</a>
        </div>
        <div class="col-span-1 flex flex-col gap-y-10px items-center fade-right">
          <img src="./assets/images/week-2.png" class="w-80% mx-auto">
          <h3 class="text-#FF5136 text-28px fw-700">WEEK3</h3>
          <p class="text-24px fw-700 text-#007FAB">今晚，我想來點點簽</p>
          <p class="text-18px fw-700 text-#A46039 border border-#A46039 px-20px py-10px rounded-2xl">Canvas</p>
          <p class="text-18px fw-700 text-#A46039 border border-#A46039 px-20px py-10px rounded-2xl">#凱鈿行動科技</p>
          <a href="https://2022.thef2e.com/news/week2" target="_blank" class="text-18px fw-500 text-white bg-#A46039 px-20px py-10px rounded-2xl decoration-none">查看關卡細節</a>
        </div>
        <div class="col-span-1 flex flex-col gap-y-10px items-center fade-left">
          <img src="./assets/images/week-3.png" class="w-80% mx-auto">
          <h3 class="text-#FF5136 text-28px fw-700">WEEK3</h3>
          <p class="text-24px fw-700 text-#007FAB">Scrum 新手村</p>
          <p class="text-18px fw-700 text-#A46039 border border-#A46039 px-20px py-10px rounded-2xl">JS draggable</p>
          <p class="text-18px fw-700 text-#A46039 border border-#A46039 px-20px py-10px rounded-2xl">#鈦坦科技</p>
          <a href="https://2022.thef2e.com/news/week3" target="_blank" class="text-18px fw-500 text-white bg-#A46039 px-20px py-10px rounded-2xl decoration-none">查看關卡細節</a>
        </div>
      </div>

      <div class="w-full relative h-80px mt-40px fade">
        <img src="./assets/images/talking-m.png" class="absolute top-0 left-0 h-full  w-full object-cover">
        <p class="absolute top-40% -translate-y-1/2 left-1/2 -translate-x-1/2 text-24px fw-700 text-#007FAB keep-all whitespace-nowrap"><span>重要時程</span></p>
      </div>
      <div class="w-85% grid grid-cols-1 mx-auto gap-y-40px gap-x-0 mt-40px fade-left">
        <div class="col-span-1 flex flex-col gap-y-10px items-center">
          <img src="./assets/images/btn_joinHand.png" class="mx-auto">
          <img src="./assets/images/btn_join.png" class="w-50% mx-auto">
          <h3 class="text-#FF5136 text-28px fw-700">SIGN UP</h3>
          <p class="text-20px fw-700 text-white bg-#007FAB px-20px py-10px rounded-2xl">10/13 - 11/6</p>
          <p class="text-20px fw-700 text-#A46039">截止前可修改報名組別</p>
        </div>
        <div class="col-span-1 flex flex-col gap-y-10px items-center fade-right">
          <img src="./assets/images/date_start.png" class="w-50% mx-auto">
          <h3 class="text-#FF5136 text-28px fw-700">START</h3>
          <p class="text-20px fw-700 text-white px-20px py-10px bg-#007FAB rounded-2xl">10/31 - 11/28</p>
          <p class="text-20px fw-700 text-#A46039">10/31(一) UI、團體組開賽</p>
          <p class="text-20px fw-700 text-#A46039">11/7(一) 前端組開賽</p>
        </div>
        <div class="col-span-1 flex flex-col gap-y-10px items-center fade-left">
          <img src="./assets/images/date_upload.png" class="w-50% mx-auto">
          <h3 class="text-#FF5136 text-28px fw-700">SIGN UP</h3>
          <p class="text-20px fw-700 text-white px-20px py-10px bg-#007FAB rounded-2xl">10/31 - 11/28</p>
          <p class="text-20px fw-700 text-#A46039">依賽程登錄作品</p>
          <p class="text-16px fw-700 text-#FF5136">額外競賽： 主題豐厚獎金等著你</p>
        </div>
      </div>

      <div class="w-full h-screen flex flex-col items-center justify-center scaleAnimation">
        <h3 class="text-28px fw-700 text-#FF5136">區區修煉</h3>
        <h3 class="mt-10px text-28px fw-700 text-#FF5136">已經無法滿足了嗎？</h3>
      </div>

      <div class="w-full relative h-80px mt-40px fade">
        <img src="./assets/images/talking-m.png" class="absolute top-0 left-0 h-full  w-full object-cover">
        <p class="absolute top-40% -translate-y-1/2 left-1/2 -translate-x-1/2 text-24px fw-700 text-#007FAB keep-all whitespace-nowrap"><span>還有比賽等著你！</span></p>
      </div>
      <div class="w-full flex justify-center overflow-x-hidden relative py-50px fade-left">
        <img src="./assets/images/award_trophy.png" class="w-80% z-10">
        <img src="./assets/images/award_light.png" class="w-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0">
      </div>
      <div class="w-90% mx-auto">
        <h3 class="mt-40px text-#FF5136 text-32px fw-700 fade">評審機制</h3>
        <p class="text-18px text-#007FAB fw-500 mt-20px fade">初選： 將由六角學院前端、UI 評審進行第一波篩選。</p>
        <p class="text-18px text-#007FAB fw-500 fade">決選： 由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！</p>
        <h3 class="mt-40px text-#FF5136 text-32px fw-700 fade">獎項</h3>
        <ul class="flex flex-col gap-10px text-18px fw-700 text-#007FAB mt-20px fade-left">
          <li>1. 初選佳作 共六十位 數位獎狀</li>
          <li>2. 個人企業獎 共六位 NTD <span class="text-#FF5136 text-24px">3,000</span> /位</li>
          <li>3. 團體企業獎 共三組 NTD <span class="text-#FF5136 text-24px">10,000</span> /組</li>
          <li>4. 以上皆提供完賽數位獎狀</li>
        </ul>
      </div>


      <div class="w-full relative h-80px mt-40px fade">
        <img src="./assets/images/talking-m.png" class="absolute top-0 left-0 h-full  w-full object-cover">
        <p class="absolute top-40% -translate-y-1/2 left-1/2 -translate-x-1/2 text-24px fw-700 text-#007FAB keep-all whitespace-nowrap"><span>贊助單位</span></p>
      </div>
      <div class="w-80% grid grid-cols-1 gap-y-40px gap-x-0 mx-auto fade">
        <div class="col-span-1 flex flex-col gap-10px">
          <a href="https://blockstudio.tw/" target="_blank" class="w-full relative h-0 pb-100% block">
            <img src="./assets/images/btn_sponsor.png" class="absolute top-0 left-0 w-full h-full">
            <img src="./assets/images/logo_blockstudio.png" class="absolute top-5% left-5% w-85% h-85%">
          </a>
          <p class="text-18px fw-700 text-#A46039 border border-#A46039 px-20px py-10px rounded-2xl text-center self-center">#版塊設計</p>
        </div>
        <div class="col-span-1 flex flex-col gap-10px fade">
          <a href="https://titansoft.com/tw" target="_blank" class="w-full relative h-0 pb-100% block">
            <img src="./assets/images/btn_sponsor.png" class="absolute top-0 left-0 w-full h-full">
            <img src="./assets/images/logo_titan.png" class="absolute top-5% left-5% w-85% h-85%">
          </a>
          <p class="text-18px fw-700 text-#A46039 border border-#A46039 px-20px py-10px rounded-2xl text-center self-center">#鈦坦科技</p>
        </div>
        <div class="col-span-1 flex flex-col gap-10px fade">
          <a href="https://www.kdanmobile.com/zh-tw" target="_blank" class="w-full relative h-0 pb-100% block">
            <img src="./assets/images/btn_sponsor.png" class="absolute top-0 left-0 w-full h-full">
            <img src="./assets/images/logo_kdan.png" class="absolute top-5% left-5% w-85% h-85%">
          </a>
          <p class="text-18px fw-700 text-#A46039 border border-#A46039 px-20px py-10px rounded-2xl text-center self-center">#凱鈿科技</p>
        </div>
      </div>

      <div class="flex justify-center w-full mt-100px pt-100px pb-50px scaleAnimation">
        <img src="./assets/images/second__logo.png" class="w-80% mx-auto">
      </div>
      <div class="flex flex-col items-center pb-50px fade">
        <img src="./assets/images/btn_joinHand.png" alt="" class="w-20%">
        <img src="./assets/images/btn_join.png" alt="" class="w-30%">
        <p class="text-28px fw-700 text-#FF5136 mt-20px">立即報名</p>
      </div>


      <!-- road -->
      <img src="./assets/images/road.png" alt="road" class="road w-[80%] fixed bottom-0 left-1/2 road-m -translate-x-1/2 z-2">
      <!-- 三位跑者 -->
      <div class="w-[60%] fixed bottom-0 left-1/2 -translate-x-1/2 z-2 runner__outside-m opacity-0">
        <div class="w-full grid grid-cols-3 gap-40px">
          <div class="col-span-1">
            <div class="flex items-center justify-center flex-col">
              <img src="./assets/images/dog__run.gif" alt="doggie" class="w-full runner-1-m scale-200 -translate-y-40px">
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex items-center justify-center flex-col">
              <img src="./assets/images/cat__run.gif" alt="cat" class="w-full runner-2-m scale-200 -translate-y-30px">
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex items-center justify-center flex-col">
              <img src="./assets/images/pig__run.gif" alt="pig" class="w-full runner-3-m scale-200 -translate-y-30px">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
