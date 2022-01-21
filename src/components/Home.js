import React from "react";
import styled from "styled-components";
import Section from "./Section";
import "../App.css";

function Home() {
    return (
        <Container>
            <Section 
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Exisying inventory"
            />
            <Section 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom order"
            rightBtnText="Exisying inventory"
            />
            <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Exisying inventory"
            />
            <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Exisying inventory"
            />
            <Section 
            title="Lowest cost solar panel in America"
            description="Money back gaurantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
            />
            <Section 
            title="Solar for New Roofs"
            description="Solar Roof Costs Less than a New Roof"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
            />
            <Section 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
            footer="Tesla @ 2022"
            />
           
        </Container>
    )
}
export default Home;

const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
overflow-y: scroll;
overflow-x: hidden;
z-index: 10;
`