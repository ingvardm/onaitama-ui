import '../../Styles/table.css'

import React, { ReactComponentElement } from 'react'
import Board from './Board'

type TableProps = {
	boardState: string[][]
}

export default function Table({
	boardState
}: TableProps): ReactComponentElement<any, any> {


	return <div className='table-wrapper'>

		{/* Table */}
			{/* enemy cards */}
			{/* board */} {/* side-board */}
			{/* self cards */}

		<Board boardState={boardState}/>

	</div>
}
