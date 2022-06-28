import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWorkers } from './stores/workersSlice';
import { Home, HomeIndex, WorkerDetails } from './pages';
import { Routes, Route} from 'react-router-dom';


const App = () => {
	
	const url = 'https://62b98f8f41bf319d227f9ef0.mockapi.io/api/v1/users'
	const dispatch = useDispatch();
	
	const fetchData = () => {
		fetch( url )
			.then( response => response.json() )
			.then( data => {
				dispatch( setWorkers( data ) )
			} )
			.catch( error => console.log( error ) )
	}
	
	useEffect( () => {
		fetchData()
	}, [] )
	
	return (
		<>
			<Routes>
				<Route path={'/'} element={<Home/>}>
					<Route index={true} element={<HomeIndex/>}/>
					<Route path={':id'} element={<WorkerDetails/>}/>
				</Route>
			</Routes>
		</>
	);
}
export default App;
