import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
	display: ${props => props.open ? 'block' : 'none'};
	@media screen and (min-width: 700px) {
		display: flex;
		justify-content: space-between;
  		align-items: center;
  		flex-direction: row;
  		flex-grow: 1;
	}
	@media only screen and (max-width: 699px) {
		flex-direction: column;
	}
`;

export default NavbarWrapper;
