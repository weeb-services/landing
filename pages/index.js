import React from 'react';
import Navbar from '../components/Navbar';
import HeroBackgrond from '../components/HeroBackground';
import HeroSlogan from '../components/HeroSlogan';
import ContentWrapper from '../components/ContentWrapper';
import HeroWrapper from '../components/HeroWrapper';

export default () => <div>
	<Navbar/>
	<HeroBackgrond/>
	<ContentWrapper>
		<HeroWrapper>
			<HeroSlogan/>
		</HeroWrapper>
	</ContentWrapper>
</div>
