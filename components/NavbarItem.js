import React from 'react';
import styled from 'styled-components';

const NavbarItem = styled.div`
	color: grey;
	padding: 10px 16px;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 5%;
	margin : 0 6px;
	text-transform: uppercase;
	transition: border 0.18s;
	font-size: 1.1rem;
	cursor: pointer;
	&:hover {
  		color: black;
  		border: 1px solid #333;
  		transition: border 0.2s;
  	}
  	@media only screen and (max-width: 800px) {
		margin: 0;
	}
`;

export default NavbarItem;
