import HomePage from 'pages/HomePage';
import PrivateRoutes from 'routes/PrivateRoutes';
import PublicRoutes from 'routes/PublicRoutes';

const App = () => {
	return (
		<div className='App'>
			<PublicRoutes />
			{/* <PrivateRoutes /> */}
		</div>
	);
};

export default App;
