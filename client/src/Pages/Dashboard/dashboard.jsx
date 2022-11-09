import colors from '../../Assets/styles/colors.module.scss'
import dashboard from './dashboard.module.scss'
import React from 'react'

const Dashboard = () => {
	return (
		<div className={dashboard.container}>
			<header className={dashboard.header}>
				<h1 className={dashboard.headerTitle}> Create a poll</h1>
				<p className={dashboard.subText}>
					Complete the fields down below to start a new poll.
				</p>
			</header>

			<main className={dashboard.pollContainer}>
				<form className={dashboard.pollForm}>
					<label htmlFor='question' className={dashboard.formLabel}>
						Title
					</label>
					<input
						type='text'
						placeholder='Enter poll question'
						className={dashboard.inputField}
					/>
					<label htmlFor='question' className={dashboard.formLabel}>
						Answer Options
					</label>
					<input
						type='text'
						placeholder='Option 1'
						className={dashboard.inputField}
					/>
					<input
						type='text'
						placeholder='Option 2'
						className={dashboard.inputField}
					/>
					<button className={dashboard.addBtn}>Add option +</button>
					<div className={dashboard.btnContainer}>
						<button className={dashboard.formBtn}>Create Poll</button>
						<button className={dashboard.formBtn}>Save as draft</button>
					</div>
				</form>
			</main>
		</div>
	)
}

export default Dashboard
