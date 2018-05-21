import React from 'react';
import styled from 'styled-components';

const HeroBackground = styled.div`
	position: fixed;
    z-index: -1000;
    width: 100%;
    height: 100%;
    top:0;
`;

export default () => <HeroBackground>
	<img src="/static/background.svg"/>
</HeroBackground>;

