import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setVote } from '../stores/workersSlice';

const WorkerCard = ( { worker } ) => {
	const dispatch = useDispatch();
	
	const updateVote = ( id ) => {
		dispatch( setVote( id ) )
	}
	
	return (
		<section>
			<Link to={`/${worker.id}`}>
				<img src={worker.image} alt={worker.firstName}/>
				<div className={'description'}>
					<p>Name: <b>{worker.firstName} {worker.lastName}</b></p>
					<p>Role: <b>{worker.role}</b></p>
					<p>Vote: <b>{worker.vote}</b></p>
				</div>
			</Link>
			<button onClick={() => updateVote( worker.id )}>Vote</button>
		</section>
	)
}

export default WorkerCard;