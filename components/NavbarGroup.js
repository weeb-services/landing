import React from 'react';
import styled from 'styled-components';

const NavbarGroup = styled.div`
	display: flex;
	align-items: center;
	@media only screen and (min-width: 1200px) {
		margin-left: ${props => props.left ? '15%' : ''};
		margin-right: ${props => props.right ? '15%' : ''};
	}
	@media only screen and (max-width: 1199px) {
		margin-left: ${props => props.left ? '10%' : ''};
		margin-right: ${props => props.right ? '10%' : ''};
	}
	@media only screen and (max-width: 1000px) {
		margin: 0;
		justify-content: space-around;
	}
	@media only screen and (max-width: 699px) {
		flex-direction: column;
	}
`;
export default NavbarGroup;
