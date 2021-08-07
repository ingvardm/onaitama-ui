import '../../Styles/board.css'

import React, { ReactComponentElement, useMemo } from 'react'
import Cell from './Cell';
import { Redirect } from 'react-router';

type BoardProps = {
	boardSize?: number
	boardState?: string[][] | undefined
}

const level = [
	[' ', ' ', 'O', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	[' ', ' ', 'X', ' ', ' '],
]

export default function Board({
	boardState,
}: BoardProps): ReactComponentElement<any, any> {
	const drawCells = useMemo(() => {
		const cells = []

		if (!boardState?.length) return <Redirect to='/' />

		for (let row = 0; row < level.length; row++){
			for (let col = 0; col < level[row].length; col++) {
				cells.push(<Cell
					type={level[row][col]}
					piece={boardState && boardState[row][col]}
					key={`${(col)}_${(row)}`}
				/>)
			}
		}

		return cells
	}, [boardState])

	return <div>

		{/* Y ordinate numbers */}

		{/* X ordinate letters */}

		<div className='board'>
			{drawCells}
		</div>

	</div>
}
