import React from 'react';
import styled from 'styled-components';
import NavbarGroup from './NavbarGroup';
import NavbarItem from './NavbarItem';
import NavbarLogo from './NavbarLogo';
import NavbarLink from './NavbarLink';
import Link from 'next/link';
import NavbarWrapper from './NavbarWrapper';
import NavbarHamburger from './NavbarHamburger';
import NavbarLogoWrapper from './NavbarLogoWrapper';

const Navbar = styled.nav`
	display: flex;
  	justify-content: space-between;
  	align-items: center;
  	padding: 10px 0;
  	background: rgba(0,0,0,0);
  	@media only screen and (max-width: 699px) {
		padding: 10px;
		justify-content: flex-start;
		flex-direction: column;
	}
`;
export default class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = { wrapperOpen: false };
		this._openWrapper = this._openWrapper.bind(this);
	}

	_openWrapper() {
		this.setState({ wrapperOpen: !this.state.wrapperOpen });
	}

	render() {
		return <Navbar>
			<NavbarLogoWrapper>
				<Link href="/" prefetch>
					<NavbarLogo small={true}/>
				</Link>
			</NavbarLogoWrapper>
			<NavbarWrapper open={this.state.wrapperOpen}>
				<NavbarGroup left onClick={this._openWrapper}>
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
				<NavbarGroup onClick={this._openWrapper}>
					<Link href="/" prefetch>
						<NavbarLogo/>
					</Link>
				</NavbarGroup>
				<NavbarGroup right onClick={this._openWrapper}>
					<NavbarItem>Blog</NavbarItem>
					<NavbarLink href="https://docs.weeb.sh" target="_blank" rel="noopener"><NavbarItem>Docs</NavbarItem></NavbarLink>
					<NavbarItem>Sign Up</NavbarItem>
				</NavbarGroup>
			</NavbarWrapper>
			<NavbarHamburger onClick={this._openWrapper} open={this.state.wrapperOpen}/>
		</Navbar>;
	}
}
