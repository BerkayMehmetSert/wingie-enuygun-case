import { useSelector } from 'react-redux';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { WorkerCard } from '../components';

const HomeIndex = () => {
	const [ animationParent ] = useAutoAnimate();
	
	const { workers } = useSelector( state => state.workers );
	const sortedWorkers = [ ...workers ].sort( ( a, b ) => b.vote - a.vote )
	
	const renderWorkers = sortedWorkers.map( worker => (
		<WorkerCard key={worker.id} worker={worker}/>
	) )
	
	return (
		<main>
			<h1>Employee of the Month</h1>
			<div className={'container'} ref={animationParent}>
				{renderWorkers}
			</div>
		</main>
	);
}

export default HomeIndex;