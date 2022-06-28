import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoArrowBack, IoCall, IoMail, IoPencil, IoBusiness, IoRibbon } from 'react-icons/io5';
import { Helmet } from 'react-helmet';

const WorkerDetails = () => {
	
	const { workers } = useSelector( state => state.workers );
	const { id } = useParams();
	const worker = workers.filter( worker => worker.id === id );
	
	return (
		<div className={'workerDetails'}>
			{worker.map( worker => (
				<div key={worker.id}>
					<Helmet>
						<title>{`${worker.firstName} ${worker.lastName}`}</title>
					</Helmet>
					<Link to="/">
						<IoArrowBack/>
					</Link>
					<h1>{worker.firstName} {worker.lastName}</h1>
					<div className={'container-worker'}>
						<img src={worker.image} alt={worker.firstName}/>
						<div className={'content'}>
							<p>
								<IoCall/><b>{worker.phone}</b>
							</p>
							<p>
								<IoMail/><b>{worker.email}</b>
							</p>
							<p>
								<IoPencil/><b>{worker.role}</b>
							</p>
							<p>
								<IoRibbon/><b>{worker.vote}</b>
							</p>
							<p>
								<IoBusiness/><b>{worker.street} / {worker.state}</b>
							</p>
						</div>
					</div>
				</div>
			) )}
		</div>
	)
}

export default WorkerDetails;