import React from 'react';
import styled from 'styled-components';

const HeroSlogan = styled.div`
	max-width: 600px;
	& > p {
		font-family: 'Open Sans', sans-serif;
		font-size: 1.2rem;
		font-weight: 300;
	}
`;

export default () => <HeroSlogan>
	<h1>Awesome services for developers</h1>
	<br/>
	<p>Stop worrying about how to design a database schema, get rid of those long lists of imgur links, and never care about issues with
		other APIs again.
		Weeb Services is here to simplify your life with a centralized, highly available API platform supporting you in creating new
		features faster and easier.</p>
</HeroSlogan>;
