export { default as Header } from './Header';
export { default as Footer } from './Footer';
export { default as Register } from './Register';
export { default as Login } from './Login';
export { default as MyRoutines } from './MyRoutines';

export { 
	fetchRoutines, 
	fetchActivities, 
	fetchRoutinesByActivity,
	fetchLoggedInUserRoutines,
	fetchSelectedUserRoutines,
	addRoutine,
	editRoutine, 
	addActivity,
	editActivity,
	deleteRoutine,
	addRoutineActivity,
	editRoutineActivity,
	deleteRoutineActivity
} from './utils/index';

export { 
	Activities,
	NewActivity,
	ActivityRoutines
} from './activities/index';

export {
	Routines,
	NewRoutine,
	EditRoutine,
	UserRoutines
} from './routines/index';

export {
	NewRoutineActivity,
	EditRoutineActivity
} from './routineActivities/index';