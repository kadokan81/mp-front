import React from 'react';
import { Helmet } from 'react-helmet';
import { Default } from './styled';

const HomePage: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Main - Marketplace </title>
			</Helmet>
			<h1>Main Page - market</h1>
			<Default>Hello</Default>
		</>
	);
};

export default HomePage;
