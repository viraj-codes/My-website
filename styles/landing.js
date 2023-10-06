import css from 'styled-jsx/css';

export default css`


@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap');
/* .container{background-image: url("https://images.wallpaperscraft.com/image/single/macbook_laptop_cup_177223_3840x2160.jpg");height:100vh ;background-repeat: no-repeat;background-size: cover;} */
.container-two {height:500px; margin: 50px; background: #fff;}
.container-three {height:100%; background: #F1F2F3;padding: 50px 0px;}
.container-fore{width: 100%;padding: 150px 0px;background-color:#fff}
.container-fifth{height:150px;background-color:#20B2AA;text-align: center;color: white;}

.footerTxt-one{padding-top:50px}
.footerTxt-two{padding-top:15px}

.centeredTxt {position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);text-align:center}
.centeredTxt-line{ display: block;height: 3px;width: 100px;margin: 10px auto 20px;background: white;}
.centeredTxt-first{color:white;font-size:40px;}
.centeredTxt-two{color:white;font-size:40px;}

//img
.outer-wrapper{min-height: 70vh; background-attachment: fixed; background-position: center;background-repeat: no-repeat;background-size: cover;}
.bgm1{background-image: url("https://cdn.pixabay.com/photo/2020/01/14/14/04/oldtimer-4765155_1280.jpg");}
.bgm2{background-image: url("https://images.pexels.com/photos/2599247/pexels-photo-2599247.jpeg?auto=compress&cs=tinysrgb&w=600");}

//
.section-heading h2 {font-size: 38px;text-transform: uppercase;}
.aboutTex{color: rgb(58, 58, 58);font-weight: 700; margin-bottom: 20px;font-family: Montserrat, sans-serif;text-align:center}
.heading-line{ display: block;height: 1px;width: 80px;margin: 10px auto 20px;background: rgb(51, 51, 51);}
* {box-sizing: border-box;}
body {display: flex;align-items: center;justify-content: center;height: 100vh;width: 100vw;font-family: Verdana, sans-serif;}
.maintxt{font-size: 50px;}
.subtxt{
    color: #333;font-family: tahoma;font-size: 3rem;font-weight: 100;line-height: 1.5;text-transform: uppercase;white-space: nowrap; overflow: hidden;position: relative;width: 550px;
}


/* 
.fade {animation-name: fade;animation-duration: 1.5s;}
@keyframes fade {from {opacity: 1} to {opacity: 0.1}} */


.txtAnim{ position: absolute;
  top: 50%;
  left: 85%;
  transform: translate(-50%, -50%);}

h1 span {
font-size: 40px;
margin-left: 40px;

}

.message {
background-color: white;
color: #FF0000;
display: block;
font-weight: 900;
overflow: hidden;
position: absolute;
padding-left: 0.5rem;
top: 0.2rem;
left: 180px;
animation: openclose 5s ease-in-out infinite;
}

.word {
font-family: tahoma;
}

@keyframes openclose {
0% {
    top: 0.2rem;
    width: 0;
}
5% {
    width: 0;
}
15% {
    width: 230px;
}
30% {
    top: 0.2rem;
    width: 230px;
}
33% {
    top: 0.2rem;
    width: 0;
}
35% {
    top: 0.2rem;
    width: 0;
}
38% {
    top: -4.5rem;
    
}
48% {
    top: -4.5rem;
    width: 190px;
}
62% {
    top: -4.5rem;
    width: 190px;
}
66% {
    top: -4.5rem;
    width: 0;
    text-indent: 0;
}
71% {
    top: -9rem;
    width: 0;
    text-indent: 5px;
}
86% {
    top: -9rem;
    width: 285px;
}
95% {
    top: -9rem;
    width: 285px;
}
98% {
    top: -9rem;
    width: 0;
    text-indent: 5px;
}
100% {
    top: 0;
    width: 0;
    text-indent: 0;
}
}

@media only screen and (max-width: 350px) {
    .centeredTxt {position: absolute;top: 16%;left: 50%;transform: translate(-50%, -50%);text-align:center}
    .centeredTxt-line{ display: block;height: 1px;width: 80px;margin: 10px auto 20px;background: white;}
    .centeredTxt-first{color:white;font-size:14px;}
    .centeredTxt-two{color:white;font-size:15px;}
}


@media only screen and (max-width: 700px) {
    .centeredTxt {position: absolute;top: 20%;left: 50%;transform: translate(-50%, -50%);text-align:center}
    .centeredTxt-line{ display: block;height: 1px;width: 80px;margin: 10px auto 20px;background: white;}
    .centeredTxt-first{color:white;font-size:20px;}
    .centeredTxt-two{color:white;font-size:30px;}
}

@media screen and (min-width: 710px) {
    .centeredTxt {position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);text-align:center}
    .centeredTxt-line{ display: block;height: 2px;width: 80px;margin: 10px auto 20px;background: white;}
    .centeredTxt-first{color:white;font-size:40px;}
    .centeredTxt-two{color:white;font-size:40px;}
}
@media screen and (min-width: 1000px) {
    .centeredTxt {position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);text-align:center}
    .centeredTxt-line{ display: block;height: 3px;width: 130px;margin: 10px auto 20px;background: white;}
    .centeredTxt-first{color:white;font-size:43px;}
    .centeredTxt-two{color:white;font-size:80px;}
}

@media screen and (min-width: 1200px) {
    .centeredTxt {position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);text-align:center}
    .centeredTxt-line{ display: block;height: 3px;width: 150px;margin: 10px auto 20px;background: white;}
    .centeredTxt-first{color:white;font-size:80px;}
    .centeredTxt-two{color:white;font-size:80px;}
}
`


