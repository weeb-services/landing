import React from 'react';
import styled from 'styled-components';

const NavbarGroup = styled.div`
	display: flex;
	align-items: center;
	@media only screen and (min-width: 1200px) {
		margin-left: ${props => props.left ? '20%' : ''};
		margin-right: ${props => props.right ? '20%' : ''};
	}
	@media only screen and (max-width: 1199px) {
		margin-left: ${props => props.left ? '10%' : ''};
		margin-right: ${props => props.right ? '10%' : ''};
	}
`;
export default NavbarGroup;
