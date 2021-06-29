import React, { useContext } from 'react'
import { Context } from "../index"
import { useAuthState } from "react-firebase-hooks/auth"
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Register/Register'
import Authorized from './Authorized/Authorized'

const AppRouter = () => {
	const { auth } = useContext(Context)
	const [user] = useAuthState(auth)

	return user ?
		(
			<Switch>
				<Route path='/user' render={() => <Authorized />} />
				<Redirect to='/user' />
			</Switch >
		)
		:
		(
			<Switch>
				<Route path='/login' render={() => <Login />} />
				<Route path='/register' render={() => <Register />} />
				<Redirect to='/login' />
			</Switch >
		)
}

export default AppRouter
