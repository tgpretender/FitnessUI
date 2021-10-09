export { default as Header } from './Header';
export { default as Footer } from './Footer';
export { default as Register } from './Register';
export { default as Login } from './Login';
export { default as MyRoutines } from './MyRoutines';
export { default as Activities } from './Activities';
export { default as NewActivity } from './NewActivity';

export { fetchRoutines, 
	fetchActivities, 
	fetchLoggedInUserRoutines, 
	addRoutine,
	editRoutine, 
	deleteRoutine,
	addRoutineActivity
} from './utils/index';

export {
	Routines,
	NewRoutine,
	EditRoutine
} from './routines/index';

export {
	NewRoutineActivity
} from './routineActivities/index';