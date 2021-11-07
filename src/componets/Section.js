import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section({title,description,leftBtnText,rightBtnText,backgroundImg}) {
  

    return (
        <Wrap bgImg={backgroundImg}>
            <Fade left >
          <TextItems>
            <h1>{title}</h1>
            <p>{description}</p>
          </TextItems>
          </Fade>
          <Buttons>
            <Fade bottom>
          <ButtonGroup>
              <LeftButton>
                  {leftBtnText}
              </LeftButton>
              {rightBtnText && <RightButton>
                {rightBtnText}
              </RightButton>  }
              
          </ButtonGroup>
          </Fade>
          <DownArrow src="images/down-arrow.svg"/>
       
          </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.section`
width:100vw;
height:100vh;
background-image:url('images/model-s.jpg');
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:${props =>`url("/images/${props.bgImg}")`};
`
const TextItems = styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
@media (max-width: 768px) {
    flex-direction:column;
}

`
const LeftButton = styled.button`
 background-color:rgba(23,26,32,0.8);
 hight:40px;
 width:256px;
 color:white;
 display:flex;
 justify-content:center;
 align-items:center;
 border-radius:100px;
 opacity:0.85;
 font-size:12px;
 text-transform:uppercase;
 cursor:pointer;
 margin:8px;
 padding:5px;

`
const RightButton = styled(LeftButton)`
 backround:white;
    color:black;
    opacity:0.65;
   
`
const DownArrow = styled.img` 
margin-top:20px;
height:40px;
animation:animateDown infinite 0.5s;

`

const Buttons = styled.div``