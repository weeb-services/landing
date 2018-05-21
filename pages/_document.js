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
			<html lang="en">
			<Head>
				<title>Weeb Services Landing</title>
				<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
				<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet"/>
				<link href="/static/global.css" rel="stylesheet"/>
				<meta property="og:title" content="Weeb.sh Landing"/>
				<meta property="og:url" content="https://weeb.sh/"/>
				<meta property="og:description" content="Awesome service to make the lives of bot developers easier"/>
				<meta property="og:image" content="https://cdn.weeb.sh/images/r1_dB-1qW.jpeg"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta name="Description" content="Awesome service to make the lives of bot developers easier"/>
				<link rel="apple-touch-icon" sizes="57x57" href="/static/icons/apple-icon-57x57.png"/>
				<link rel="apple-touch-icon" sizes="60x60" href="/static/icons/apple-icon-60x60.png"/>
				<link rel="apple-touch-icon" sizes="72x72" href="/static/icons/apple-icon-72x72.png"/>
				<link rel="apple-touch-icon" sizes="76x76" href="/static/icons/apple-icon-76x76.png"/>
				<link rel="apple-touch-icon" sizes="114x114" href="/static/icons/apple-icon-114x114.png"/>
				<link rel="apple-touch-icon" sizes="120x120" href="/static/icons/apple-icon-120x120.png"/>
				<link rel="apple-touch-icon" sizes="144x144" href="/static/icons/apple-icon-144x144.png"/>
				<link rel="apple-touch-icon" sizes="152x152" href="/static/icons/apple-icon-152x152.png"/>
				<link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-icon-180x180.png"/>
				<link rel="icon" type="image/png" sizes="192x192" href="/static/icons/android-icon-192x192.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="96x96" href="/static/icons/favicon-96x96.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png"/>
				<link rel="manifest" href="/static/icons/manifest.json"/>
				<meta name="msapplication-TileColor" content="#ffffff"/>
				<meta name="msapplication-TileImage" content="/static/icons/ms-icon-144x144.png"/>
				<meta name="theme-color" content="#000000"/>
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
