import React, { createContext, FC, PropsWithChildren, useMemo, useRef } from "react"
import { Model } from "react-better-model"
import { CellList, Piece, PlayerCards, SelectionGrid } from "../types/game-board-types"

const o: Piece = 'o'
const O: Piece = 'O'
const x: Piece = 'x'
const X: Piece = 'X'
const _: Piece = undefined


export const initialState = {
	playerIndex: 0 as 0 | 1,
	boardState: [
		[x,x,X,x,x,], // blue = 1
		[_,_,_,_,_,],
		[_,_,_,_,_,],
		[_,_,_,_,_,],
		[o,o,O,o,o,], // red = 0
	] as CellList,
	selectionState: [
		[ , , , , ,],
		[ , , , , ,],
		[ , , , , ,],
		[ , , , , ,],
		[ , , , , ,],
	] as SelectionGrid,
	cards: [
		['dragon', 'boar'],
		['crane', 'tiger', 'yiel']
	] as PlayerCards,
	isOver: false,
	isComputerThinking: false,
}

export const defaultEventData = {}

// create context
export const GameModelCtx =
	createContext(new Model(initialState, defaultEventData))

export const GameModelProvider: FC<PropsWithChildren<any>> = props => {
	const model = useRef(new Model(initialState, defaultEventData)).current

	return <GameModelCtx.Provider value={model} {...props} />
}
