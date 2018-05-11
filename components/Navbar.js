import React from 'react';
import styled from 'styled-components';
import NavbarGroup from './NavbarGroup';
import NavbarItem from './NavbarItem';
import NavbarLogo from './NavbarLogo';
import NavbarLink from './NavbarLink';

const Navbar = styled.nav`
	display: flex;
  	justify-content: space-between;
  	align-items: center;
  	padding: 10px 0;
  	box-shadow: 0 8px 10px 0 rgba(0,0,0,.07);
`;
export default () => <Navbar>
	<NavbarGroup left>
		<NavbarItem>Features</NavbarItem>
		<NavbarItem>Pricing</NavbarItem>
		<NavbarItem>Partners</NavbarItem>
	</NavbarGroup>
	<NavbarGroup>
		<NavbarLogo/>
	</NavbarGroup>
	<NavbarGroup right>
		<NavbarItem>Blog</NavbarItem>
		<NavbarLink href="https://docs.weeb.sh" target="_blank" rel="noopener"><NavbarItem>Docs</NavbarItem></NavbarLink>
		<NavbarItem>Sign Up</NavbarItem>
	</NavbarGroup>
</Navbar>;
