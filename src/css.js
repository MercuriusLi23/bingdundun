const string =

    `
.bingdundun * {
 box-sizing: border-box;
 margin: 0;
 padding: 0;
}

.bingdundun *::before,
.bingdundun *::after {
 box-sizing: border-box;
}

.bingdundun {
 position: relative;
 min-height:50vh;
}

.fang {

 background-color: #393939;
 border-radius: 52% 48% 51% 49% / 27% 30% 70% 73%;
 width: 20px;
 height: 15px;
 position: absolute;
 left: 50%;
 top: 200px;
 margin-left: -10px;
 z-index: -1;
}

.wai {
 background-color: #393939;
 width: 50px;
 height: 35px;
 position: absolute;
 left: 50%;
 margin-left: -25px;
 top: 218px;
 border-radius: 50% 48% 60% / 48% 45%;
 z-index: -3;
}

.li {

 width: 36px;
 height: 14px;
 left: 50%;
 position: absolute;
 margin-left: -18px;
 top: 17px;
 border-radius: 30%;
 background: #8c3736
}

.mouth .hudu {

 width: 60px;
 height: 60px;
 position: absolute;
 left: 50%;
 margin-left: -30px;
 top: 168px;
 border-radius: 50%;
 background: white;
 z-index: -2;
}

.eye {

 height: 66px;
 width: 160px;
 position: absolute;
 left: 50%;
 margin-left: -80px;
 top: 154px;


}

.eye .eyeLeft {
 width: 48px;
 height: 66px;
 position: absolute;
 left: 50%;
 margin-left: -16px;
 border-radius: 58% 42% 64% 36% / 72% 25% 75% 28%;
 display: inline-block;
 background: #39383e;
 transform: translateX(-100%) rotateZ(-164deg);
}

.eye .eyeRight {
 width: 48px;
 height: 66px;
 position: absolute;
 left: 50%;
 margin-left: 16px;
 display: inline-block;
 border-radius: 58% 42% 64% 36% / 72% 25% 75% 28%;
 transform: rotateZ(-236deg);
 background: #39383e;
}

.yuanLeft {
 border: 3px solid white;
 width: 23px;
 height: 23px;
 position: absolute;
 border-radius: 50%;
 top: 26px;
 margin-left: 6px;

}

.yuanRight {
 border: 3px solid white;
 width: 23px;
 height: 23px;
 position: absolute;
 border-radius: 50%;
 top: 28px;
 margin-left: 14px;

}

.dianLeft {
 width: 6px;
 height: 6px;
 position: absolute;
 background: white;
 border-radius: 50%;
 top: 8px;
 margin-left: 4px;

}

.dianRight {
 width: 6px;
 height: 6px;
 position: absolute;
 background: white;
 border-radius: 50%;
 top: 8px;
 margin-left: 5px;
}

.face {
 border: 1px solid red;
 position: absolute;
 left: 50%;
 top: 130px;
 margin-left: -85px;
 width: 170px;
 height: 140px;
 border-radius: 98px 124px 82px 84px/104px 93px 66px 70px;
 background-color: #fff;
 z-index: -4;
 box-shadow: rgb(102, 201, 253) 0 0 0 3px, rgb(173, 35, 96) 0 0 0 5px, rgb(81, 122, 183) 0 0 0 7px, rgb(250, 198, 70) 0 0 0 9px, rgb(128, 201, 111) 0 0 0 12px;
}

.body {
 width: 214px;
 height: 252px;
 position: absolute;
 left: 50%;
 margin-left: -107px;
 top: 98px;
 border-radius: 91px 105px 74px 84px/128px 119px 129px 114px;
 background-color: #fff;
 border: 5px solid #393939;
 z-index: -5;
}

.earLeft {
 width: 44px;
 height: 68px;
 position: absolute;
 left: 50%;
 margin-left: -90px;
 top: 100px;
 background-color: #393939;
 border-radius: 7px 52px 74px 84px/33px 68px 129px 114px;
 transform: rotate(180deg);
 z-index: -6;
}

.earRight {
 width: 44px;
 height: 68px;
 position: absolute;
 left: 50%;
 margin-left: 45px;
 top: 100px;
 background-color: #393939;
 border-radius: 7px 52px 74px 84px/33px 68px 129px 114px;
 transform: rotate(180deg);
 z-index: -6;
}

.footLeft {
 width: 44px;
 height: 64px;
 position: absolute;
 background-color: #393939;
 left: 50%;
 margin-left: -58px;
 top: 334px;
 border-radius: 32% 67% 17% 32% / 1% 24% 37% 28%
}

.footRight {

 width: 44px;
 height: 64px;
 position: absolute;
 background-color: #393939;
 margin-left: 20px;
 left: 50%;
 top: 334px;
 transform: rotateY(180deg);
 border-radius: 32% 67% 17% 32% / 1% 24% 37% 28%;

}

.jianLeft {

 width: 46px;
 height: 16px;
 position: absolute;
 background-color: #393939;
 margin-left: 13px;
 left: 50%;
 top: 382px;
 border-radius: 71% 29% 30% 40% / 13% 60% 20% 90%;
 transform: rotate(180deg);
 transform: rotateY(180deg);
}

.jianRight {

 width: 46px;
 height: 16px;
 position: absolute;
 background-color: #393939;
 margin-left: -52px;
 left: 50%;
 top: 382px;
 border-radius: 71% 29% 30% 40% / 13% 60% 20% 90%;
}

.handLeft {
 width: 40px;
 height: 76px;
 position: absolute;
 background-color: #393939;
 left: 50%;
 margin-left: -130px;
 top: 240px;
 border-radius: 49% 51% 42% 58% / 17% 83% 17% 83%;
 transform: rotate(45deg);
 z-index: -8;
}

.handRight {

 width: 40px;
 height: 76px;
 position: absolute;
 background-color: #393939;
 left: 50%;
 top: 194px;
 margin-left: 96px;
 border-radius: 49% 51% 42% 58% / 17% 83% 17% 83%;
 transform: rotateZ(60deg);
 z-index: -8;
}

.xin {

 width: 36px;
 height: 36px;
 position: absolute;
 border-radius: 50%;
 margin-left: -8px;
 top: -8px;
 background-color: #393939;

}

.xin::after {
 content: '♥';
 font-size: 32px;
 position: absolute;
 transform: rotateZ(-65deg);
 top: -8px;
 left: 4px;
 color: rgb(172, 3, 3);

}



.wuhuan {
 width: 60px;
 height: 40px;
 position: absolute;
 left: 50%;
 margin-left: -30px;
 top: 186px;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
}

.hong {
 border: 2px solid red;
 width: 20px;
 height: 20px;
 border-radius: 50%;
 z-index: 1;
 position: absolute;
 left: 35px;
}

.hei {
 border: 2px solid black;
 width: 20px;
 height: 20px;
 border-radius: 50%;
}

.lan {
 border: 2px solid blue;
 width: 20px;
 height: 20px;
 border-radius: 50%;
 z-index: 1;
 left: 6px;
 position: absolute;

}

.huang {
 border: 2px solid yellow;
 width: 20px;
 height: 20px;
 border-radius: 50%;
 position: absolute;
 top: 10px;
 left: 15px;
}

.lv {
 border: 2px solid green;
 width: 20px;
 height: 20px;
 border-radius: 50%;
 position: absolute;
 top: 10px;
 left: 30px;
} 
 `
export default string;            //导出该文件的内容