import React from 'react';
import styled from 'styled-components';
import RoundImage from './RoundImage';

const NavbarLogo = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	cursor:	pointer;
	align-items: center;
	justify-content: center;
	&:hover > p {
		color: white;
	}
	@media screen and (min-width: 700px) {
		display: ${props => props.small ? 'none' : 'flex'};
	}
	@media screen and (max-width: 699px) {
		display: ${props => props.small ? 'flex' : 'none'};
	}
`;

const NavbarSlogan = styled.p`
	color: #c9c9c9;
	@media screen and (max-width: 699px) {
		display: none;
	}
`;

export default (props) => <NavbarLogo onClick={props.onClick} small={props.small}>
	<RoundImage height="40px" width="40px" src="https://cdn.weeb.sh/assets/logo-small.png" alt="logo"/>
	<NavbarSlogan>Weeb Services</NavbarSlogan>
</NavbarLogo>;
