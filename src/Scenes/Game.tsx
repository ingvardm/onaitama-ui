import React, {  ReactComponentElement } from 'react'
import Table from '../GameObjects/Table/Table'
import { useBoardStateManager } from '../state-managers/BoardStateManager'

type GameSceneProps = {
	initialGameState?: {
		boardState?: string[][],
	}
}

export default function GameScene({
	initialGameState,
}: GameSceneProps): ReactComponentElement<any, any>{
	const boardState = useBoardStateManager()

	return <div className='scene'>
		{/* enemy player scoreboard */}

		<Table boardState={boardState}/>

		{/* self scoreboard */}

	</div>
}