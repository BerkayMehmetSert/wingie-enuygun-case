import { createSlice } from '@reduxjs/toolkit';

export const workersSlice = createSlice( {
	name: 'workersSlice',
	initialState: {
		workers: [],
		vote: 0,
	},
	reducers: {
		setWorkers: ( state, action ) => {
			state.workers = action.payload;
		},
		setVote: ( state, action ) => {
			state.workers.map( ( worker ) => {
				if ( worker.id === action.payload ) {
					worker.vote += 1
				}
				return worker
			} )
		}
	}
} );

export const { setWorkers, setVote } = workersSlice.actions;
export default workersSlice.reducer;