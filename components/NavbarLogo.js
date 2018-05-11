import React from 'react';
import styled from 'styled-components';
import RoundImage from './RoundImage';

const NavbarLogo = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	cursor:	pointer;
`;

export default (props) => <NavbarLogo onClick={props.onClick}>
	<RoundImage height="50px" src="https://cdn.weeb.sh/assets/logo-small.png" alt="logo"/>
	<p>Weeb Services</p>
</NavbarLogo>;
