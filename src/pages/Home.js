import { Header, Footer } from '../components'
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
	return (
		<>
			<Helmet>
				<title>WINGIE | ENUYGUN</title>
			</Helmet>
			<Header/>
			<Outlet/>
			<Footer/>
		</>
	);
}

export default Home;