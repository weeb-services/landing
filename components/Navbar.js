import React from 'react';
import styled from 'styled-components';
import NavbarGroup from './NavbarGroup';
import NavbarItem from './NavbarItem';
import NavbarLogo from './NavbarLogo';
import NavbarLink from './NavbarLink';
import Link from 'next/link';

const Navbar = styled.nav`
	display: flex;
  	justify-content: space-between;
  	align-items: center;
  	padding: 10px 0;
  	box-shadow: 0 8px 10px 0 rgba(0,0,0,.07);
  	@media only screen and (max-width: 700px) {
		flex-wrap: wrap;
		flex-direction: column;
	}
`;
export default () => <Navbar>
	<NavbarGroup left>
		<Link href="/features" prefetch>
			<NavbarItem>Features</NavbarItem>
		</Link>
		<Link href="/pricing" prefetch>
			<NavbarItem>Pricing</NavbarItem>
		</Link>
		<Link href="/partners" prefetch>
			<NavbarItem>Partners</NavbarItem>
		</Link>
	</NavbarGroup>
	<NavbarGroup>
		<Link href="/" prefetch>
			<NavbarLogo/>
		</Link>
	</NavbarGroup>
	<NavbarGroup right>
		<NavbarItem>Blog</NavbarItem>
		<NavbarLink href="https://docs.weeb.sh" target="_blank" rel="noopener"><NavbarItem>Docs</NavbarItem></NavbarLink>
		<NavbarItem>Sign Up</NavbarItem>
	</NavbarGroup>
</Navbar>;
