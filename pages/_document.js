import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class WeebDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}

	render() {
		return (
			<html>
			<Head>
				<title>Weeb Services Landing</title>
				<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
				<link href="/static/global.css" rel="stylesheet"/>
				<meta property="og:title" content="Weeb.sh Landing"/>
				<meta property="og:url" content="https://weeb.sh/"/>
				<meta property="og:description" content="Awesome service to make the lives of bot developers easier"/>
				<meta property="og:image" content="https://cdn.weeb.sh/images/r1_dB-1qW.jpeg"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta name="Description" content="Awesome service to make the lives of bot developers easier"/>
				{this.props.styleTags}
			</Head>
			<body>
			<Main/>
			<NextScript/>
			</body>
			</html>
		);
	}
}
