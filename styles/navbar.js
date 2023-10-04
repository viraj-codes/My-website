import css from 'styled-jsx/css';

export default css`
  
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap');
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}
a{
  text-decoration: none;
  color: inherit;
}
header{
  position: sticky;
  z-index: 30;
  top: 0;
}

.navbox{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  /* padding: 5px; */
}
nav{
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
}
.nav__menu-bar{
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  cursor: pointer;
}
.nav__menu-bar div{
  width: 40px;
  height: 4px;
  background-color: black;
  border-radius: 2px;
}
.nav__menu-list{
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 60px;
  width: 288px;
  row-gap: 24px;
  right: -288px;
  padding: 24px 16px;
  transition: all 0.2s;
  min-height: calc(100vh - 60px);
  /* background-color: #f1f1f1; */
}
.nav__menu-list.active{
  right: 0;
}
.nav__link{
  font-size: 18px; 
  position: relative;
  transition: all 0.2s;
}

.nav__link:hover{
 font-weight: bold;
}

.center{
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (min-width: 768px) {
  .nav__menu-bar{
    display: none;
  }
  .nav__menu-list{
    position: unset;
    flex-direction: row;
    min-height: fit-content;
    width: fit-content;
    column-gap: 24px;
    align-items: center;
  }
  .nav__link::before{
    content: '';
    position: absolute;
    width: 0%;
    height: 6px;
    bottom: -16px;
    left: 0;
    background-color: black;
    transition: all 0.2s;
  }
  
  .nav__link:hover:before{
   width: 100%;
  }
}
















`