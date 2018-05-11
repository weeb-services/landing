import React from 'react';
import styled from 'styled-components';
import RoundImage from './RoundImage';

const NavbarLogo = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
`;

export default () => <NavbarLogo>
	<RoundImage height="50px" src="https://cdn.weeb.sh/assets/logo-small.png"/>
	<p>Weeb-Services</p>
</NavbarLogo>;
