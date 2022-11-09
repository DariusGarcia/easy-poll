import React from 'react'
import nav from './navbar.module.scss'

export default function navbar() {
	return (
		<nav class={nav.navContainer}>
			<ul class={nav.navListWrapper}>
				<li className={nav.navLinks}>EasyPoll</li>
				<li className={nav.navLinks}>Home</li>
				<li className={nav.navLinks}>Dashboard</li>
				<li className={nav.navLinks}>Contact</li>
			</ul>
		</nav>
	)
}
