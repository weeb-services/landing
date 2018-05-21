import React from 'react';
import styled from 'styled-components';

const NavbarItem = styled.div`
	color: #c9c9c9;
	padding: 10px 16px;
	border-radius: 5%;
	margin : 0 6px;
	text-transform: uppercase;
	transition: border 0.18s;
	font-size: 1.1rem;
	cursor: pointer;
	&:hover {
  		color: white;
  		transition: color 0.2s;
  	}
  	@media only screen and (max-width: 800px) {
		margin: 0;
	}
	@media only screen and (max-width: 699px) {
		margin: 5px 0;
		border: none;
		padding: 0;
		&:hover {
  			color: white;
  			border: none;
  		}
	}
`;

export default NavbarItem;
