export { default as Header } from './Header';
export { default as Footer } from './Footer';
export { default as Routines } from './Routines';
export { default as Register } from './Register';
export { default as Login } from './Login';
export { default as MyRoutines } from './MyRoutines';
export { default as Activities } from './Activities';
export { default as NewActivity } from './NewActivity';
export { default as NewRoutine } from './NewRoutine';
export { default as EditRoutine } from './EditRoutine';


export { fetchRoutines, 
	fetchActivities, 
	fetchLoggedInUserRoutines, 
	addRoutine,
	editRoutine, 
	deleteRoutine 
} from './utils/index';