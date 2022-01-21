import React, { useState } from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import Scroll from 'react-scroll';
import Footer from './Footer';
import "../App.css";

var Element = Scroll.Element;
var scroller = Scroll.scroller;
scroller.scrollTo('myScrollToElement', {
	duration: 1500,
	delay: 100,
	smooth: true,
	containerId: 'ContainerElementID',
	offset: 50, // Scrolls to element + 50 pixels down the page
})

function Section(props) {
	const [scrollStatus, setScrollStatus] = useState(true);

	return (
		<Element name="myScrollToElement">
			<Wrap bgImage={props.backgroundImg} onscroll={() => setScrollStatus(!scrollStatus)} show={scrollStatus}>
				<Fade bottom>
					<ItemText>
						<h1>
							{props.title}
						</h1>
						<p>
							{props.description}
							<a href="/">
								{props.link}
							</a>
						</p>
					</ItemText>
				</Fade>
				<Buttons>
					<ButtonGroup>
						<Fade left>
							<LeftButton>
								{props.leftBtnText}
							</LeftButton>
						</Fade>
						<Fade right>
							{
								props.rightBtnText
								&&
								<RightButton>
									{props.rightBtnText}
								</RightButton>
							}
						</Fade>
					</ButtonGroup>
					{
						(
							props.footer
							&&
							<Footer footer={props.footer} />
						)
						||
						<DownArrow src="/images/down-arrow.svg" />
					}
				</Buttons>
			</Wrap>
		</Element>
	)
}
export default Section;

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: ${props => `url("/images/${props.bgImage}")`};
scroll-snap-align: start;
display: ${props => props.show ? 'flex' : 'none'};
flex-direction: column;
justify-content: space-between;
align-items: center;
z-index: -1;
`

const ItemText = styled.div`
z-index: -1;
padding-top: 15vh;
text-align: center;
`

const ButtonGroup = styled.div`
display: grid;
grid-template-columns: auto auto;
margin-bottom: 25px;
min-width: 100vw;
justify-content: center;
@media (max-width: 768px){
	grid-template-columns: auto;
}
@media (max-height: 200px){
	margin-bottom: -15px;
}
`

const LeftButton = styled.div`
background-color: #171A20CC;
height: 40px;
width: 256px;
color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;
`

const RightButton = styled(LeftButton)`
background: #ffffff;
opacity: 0.65;
color: #393C41;
`

const DownArrow = styled.img`
overflow-x: hidden;
height: 40px;
margin: 0 auto;
animation: animateDown infinite 1.5s;
color: red;
`

const Buttons = styled.div`
min-width: 100vw;
display: grid;
grid-template-columns: auto;
margin-bottom: 30px;
`