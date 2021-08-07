import '../Styles/main-menu.css'

import React, {
	PropsWithChildren,
	ReactComponentElement,
	useCallback
} from 'react'

import {
	useHistory
} from 'react-router-dom'
import boardStateManager from '../state-managers/BoardStateManager'

export default function MainMenuScene({
	...props
}: PropsWithChildren<any>): ReactComponentElement<any, any> {
	const history = useHistory()

	const onNewGameClick = useCallback(() => {
		boardStateManager.init()
		history.push('/game')
	}, [history])

	const onSettingsClick = useCallback(() => {
		history.push('/settings')
	}, [history])

	const onLogoutClick = useCallback(() => {
		
	}, [])

	return <div className='main-menu-wrapper scene'>
		<h3 className='game-title'>ONAITAMA</h3>
		<div className='main-menu-buttons-container'>
			<button className='main-menu-button' onClick={onNewGameClick}>
				<u>N</u>ew game
			</button>
			<button className='main-menu-button' onClick={onSettingsClick}>
				<u>S</u>ettings
			</button>
			<button className='main-menu-button' onClick={onLogoutClick}>
				<u>L</u>og out
			</button>
		</div>

		{/* Player details */}
			{/* Avatar */}
			{/* Login info */}

	</div>
}
