import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
           <Section
           title="Model S"
           description="Order Online from Touchless delivery"
           backgroundImg="model-s.jpg"
           leftBtnText="customer order"
           rightBtnText="Existing Inventory"
           />
           <Section
           title="Model Y"
           description="Order Online from Touchless delivery"
           backgroundImg="model-y.jpg"
           leftBtnText="customer order"
           rightBtnText="Existing Inventory"
           
           />
           <Section
           title="Model 3"
           description="Order Online from Touchless delivery"
           backgroundImg="model-3.jpg"
           leftBtnText="customer order"
           rightBtnText="Existing Inventory"
           
           />

           <Section
           title="Model X"
           description="Order Online from Touchless delivery"
           backgroundImg="model-x.jpg"
           leftBtnText="customer order"
           rightBtnText="Existing Inventory"
           
           />
           <Section
           title="Lowest cost solar panel in America"
           description="Money back guarantee"
           backgroundImg="solar-panel.jpg"
           leftBtnText="Order Now"
           rightBtnText="Learn more"
           
           />

        <Section
           title=" Solar for new roof"
           description="solar Roof cost less than roofs"
           backgroundImg="solar-roof.jpg"
           leftBtnText="Order Now"
           rightBtnText="Learn more"
           
           />
          
          <Section
           title="Accessroies"
           description=""
           backgroundImg="accessories.jpg"
           leftBtnText="Shop Now"
         
           
           />
            
        </Container>
    )
}

export default Home

const Container=styled.div`
height:100vh;
`