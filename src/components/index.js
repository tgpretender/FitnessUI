export { default as Header } from './Header';
export { default as Footer } from './Footer';
export { default as Register } from './Register';
export { default as Login } from './Login';
export { default as MyRoutines } from './MyRoutines';
<<<<<<< HEAD
=======
export { default as Activities } from './Activities';
export { default as ActivityRoutine } from './ActivityRoutine'
>>>>>>> 65a56e7deff678b62ced2697911c0d4b8629f9e9

export { 
	fetchRoutines, 
	fetchActivities, 
	fetchRoutinesByActivity,
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