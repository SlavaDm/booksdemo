import React, { useContext } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import s from './Navbar.module.scss'
import { Context } from '../../index'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	const { auth } = useContext(Context)
	const [user] = useAuthState(auth)

	const logOut = async () => {
		try {
			await auth.signOut()
		}
		catch (err) {
			console.log(err)
		}
	}

	return (
		<nav className={s.header}>
			<div className={s.wrapper}>
				<div className={s.header__logo}>

					<div className={s.header__img}>
						<img src='https://christjesus.ru/files/2017/06/books-2379396_1920.png' alt='' />
					</div>
					<div className={s.header__text}><NavLink to='/login'>book collection</NavLink></div>

				</div>
				<div className={s.header__log}>
					{user ?
						<a onClick={logOut}>
							Logout
						</a>
						:
						<NavLink to='/login'>
							Login
						</NavLink>
					}
				</div>
			</div>
		</nav >
	)
}

export default Navbar
