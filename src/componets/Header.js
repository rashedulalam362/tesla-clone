import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice';
import { useSelector } from 'react-redux';




function Header() {
   const [burgerStatus,setBurgerStatus] = useState(false)
  const cars=useSelector(selectCars);
 
    return (
        <Container >
         <a> <img src="/images/logo.svg" alt="img" />  </a>
         <Menu>
            {
             cars && cars.map((car, index)=>
               <a key={index} href="#">{car}</a>
             )  
            }
            
          
         </Menu>
         <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
         </RightMenu>
         <CustomMenu onClick={()=>setBurgerStatus(true)}>
            <MenuIcon />
         </CustomMenu>
         <NavBuger show={burgerStatus}>
            <CloseWrapper >
            <CustomeClose onClick={()=>setBurgerStatus(false)}/>
            </CloseWrapper>
            {
             cars && cars.map((car, index)=>
               <a key={index} href="#">{car}</a>
             )  
            }
            <li><a href="#">Existing inventory</a></li>
            <li><a href="#">Used inventory</a></li>
            <li><a href="#">Trade in</a></li>
            <li><a href="#">Cyber-track-in</a></li>
            <li><a href="#">Existing</a></li>
            
         </NavBuger>
        </Container>
    )
}

export default Header

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;

padding:0 20px; 
top:0;
left:0;
right:0;
z-index:1;
`
const Menu = styled.div`
display:flex;
align-items:center;
flex:1;
a{
font-weight:600;
text-transform:uppercase;
padding:0 10px;
flex-wrap:nowrap;
@media (max-width:768px){
    display:none;
}

`
const RightMenu = styled.div`
 display:flex;
 align-items:center; 
a{
font-weight:600;
text-transform:uppercase;
margin-right:10px;
}

`
const CustomMenu = styled(MenuIcon)`

`
const NavBuger = styled.ul`
position:fixed;
top:0;
right:0;
bottom:0;
background:#fff;
width:300px;
z-index:16;
list-style:none;
padding:10px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props=>props.show ? 'translateX(0)' : 'translateX(100%)'};
transition:transform 0.3s ease-out;
li{ padding:10px 0;
      border-bottom:1px solid #eee;
}
a{
   font-weight:600;
   text-transform:uppercase;

}

`
const CustomeClose = styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`