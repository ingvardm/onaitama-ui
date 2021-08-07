import '../../Styles/cell.css'

import React, { ReactComponentElement, useMemo } from 'react'
import { composeClassName } from '../../utils'

type CellProps = {
	type: string,
	piece: string | undefined,
}

export default function Cell({
	type,
	piece,
}: CellProps): ReactComponentElement<any, any> {
	const wrapperStyle = useMemo(() => {
		return composeClassName([
			'cell-wrapper',
			type === 'O' && 'cell-blue-throne',
			type === 'X' && 'cell-red-throne',
			piece !== ' ' && `piece piece-${piece}`,
		])
	}, [type, piece])

	return <div className={wrapperStyle}>
		<div className='cell-selection-overlay'/>
	</div>
}
