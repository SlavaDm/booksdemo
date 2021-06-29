import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '../../index'
import { NavLink } from 'react-router-dom'
import s from '../Form.module.scss'


const Login = () => {

	useEffect(() => {
		document.title = 'Login'
	}, [])

	const { auth, firestore } = useContext(Context)
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)
	const [textError, setTextError] = useState('')

	const loginHandler = (event) => {
		setLogin(event.target.value)
	}

	const passwordHandler = (event) => {
		setPassword(event.target.value)
	}

	const log = async (login, password) => {
		try {
			const provider = await auth.signInWithEmailAndPassword(login, password)
			console.log(provider)
			firestore.collection('users').add({
				login,
				password
			})
		}

		catch (err) {
			setTextError(err.message)
			setError(true)
		}
	}

	return (
		<>
			<div className={s.form}>
				<div className={s.border}>
					<div className={s.item}>
						<input value={login} onChange={loginHandler} placeholder="login" />
					</div>
					<div className={s.item}>
						<input value={password} onChange={passwordHandler} placeholder="password" />
					</div>
					<div className={s.button}>
						<button onClick={() => log(login, password)}>Login</button>
					</div>
				</div>
				{
					error ?
						(<div className={s.form__error}>{textError}</div>) : null
				}
				<div className={s.info}>
					Don't have an account yet? <NavLink to='/register'>Register</NavLink>
				</div>
			</div>
		</>
	)
}

export default Login
