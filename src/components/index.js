export { default as Header } from './Header';
export { default as Footer } from './Footer';
export { default as Register } from './Register';
export { default as Login } from './Login';
export { default as MyRoutines } from './MyRoutines';
export { default as Activities } from './Activities';
export { default as NewActivity } from './NewActivity';
export { default as UserRoutines } from './UserRoutines';

export { 
	fetchRoutines, 
	fetchActivities, 
	fetchLoggedInUserRoutines,
	fetchSelectedUserRoutines,
	addRoutine,
	editRoutine, 
	deleteRoutine,
	addRoutineActivity,
	editRoutineActivity,
	deleteRoutineActivity
} from './utils/index';

export {
	Routines,
	NewRoutine,
	EditRoutine
} from './routines/index';

export {
	NewRoutineActivity,
	EditRoutineActivity
} from './routineActivities/index';