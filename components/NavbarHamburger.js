import React from 'react';
import styled from 'styled-components';

const HamburgerBar = styled.div`
	width: 25px;
    height: 3px;
    background-color: white;
    margin: 6px 0;
    transition: 0.4s;
`;

const UpperHamburgerBar = HamburgerBar.extend`
	transform: ${props => props.open ? 'rotate(-45deg) translate(-5px, 6px)' : ''} ;
`;

const MiddleHamburgerBar = HamburgerBar.extend`
	opacity: ${props => props.open ? 0 : ''} ;
`;
const LowerHamburgerBar = HamburgerBar.extend`
	transform: ${props => props.open ? 'rotate(45deg) translate(-7px, -8px)' : ''} ;
`;

const NavbarHamburger = styled.div`
	border: solid 1px white;
	padding: 5px 10px;
	border-radius: 4px;
	position: absolute;
    top: 0;
    right: 15px;
    margin: 8px 10px;
	@media screen and (min-width: 700px) {
		display: none;
	}
`;
export default ({ open, onClick }) => <NavbarHamburger onClick={onClick}>
	<UpperHamburgerBar open={open}/>
	<MiddleHamburgerBar open={open}/>
	<LowerHamburgerBar open={open}/>
</NavbarHamburger>;
