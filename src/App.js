import { BrowserRouter } from 'react-router-dom';
import { useContext } from 'react'
import s from './App.module.scss';
import { Context } from './index'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loader from './components/Loader'
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter'

function App() {

	const { auth } = useContext(Context)
	const [user, loading] = useAuthState(auth)
	console.log(user)

	if (loading) {
		return <Loader />
	}

	return (
		<BrowserRouter>
			<Navbar />
			<div className={s.wrapper}>
				<AppRouter />
			</div>
		</BrowserRouter>
	);
}

export default App;
