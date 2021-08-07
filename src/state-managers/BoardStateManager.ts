import { useEffect, useState } from 'react'
import PubSub, {NSSubCallback} from 'suby'

type BoardState = string[][]

const DEFAULT_BOARD_STATE = [
	['o', 'o', 'O', 'o', 'o'],
	[' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	['x', 'x', 'X', 'x', 'x'],
]

export class BoardStateManager extends PubSub {
	public static EVENTS = {
		boardStateUpdate: 'boardStateUpdate',
	}

	private boardState: BoardState = []

	init = (initialBoardState?: BoardState) => {
		this.boardState = initialBoardState || DEFAULT_BOARD_STATE
	}

	getState = () => this.boardState

	onBoardStateUpdate = (cb: NSSubCallback) => {
		return this.on(BoardStateManager.EVENTS.boardStateUpdate, cb)
	}

	updateBoardState = (boardState: BoardState) => {
		this.boardState = boardState;
		this.publish(BoardStateManager.EVENTS.boardStateUpdate, boardState)
	}
}

const boardStateManager = new BoardStateManager()

export default boardStateManager

export function useBoardStateManager(){
	const [boardState, setState] = useState(boardStateManager.getState())

	useEffect(() => boardStateManager.onBoardStateUpdate(setState), [])

	return boardState
}
