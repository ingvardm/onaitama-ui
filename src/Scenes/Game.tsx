import React, {  ReactComponentElement } from 'react'
import { Link } from 'react-router-dom'
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

	return <div>
		<Link to="/">Back</Link>

		{/* enemy player scoreboard */}

		<Table boardState={boardState}/>

		{/* self scoreboard */}

	</div>
}