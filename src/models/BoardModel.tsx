import React, { createContext, FC, PropsWithChildren, useCallback, useMemo, useRef } from "react"
import { Model, useModelInstanceEvent, useModelCtxState } from "react-better-model"
import { GameModelCtx } from "./GameModel"

export const initialState = {

}

type Events = {
	mouseOver: {
		x: number
		y: number
	}
	mouseOut: {
		x: number
		y: number
	}
}

// create context
export const BoardModel =
	createContext(new Model<typeof initialState, Events>(initialState))

export const BoardModelProvider: FC<PropsWithChildren<any>> = props => {
	const model = useRef(new Model<typeof initialState, Events>(initialState)).current

	const [selectionState, setSelectionState] = useModelCtxState(GameModelCtx, 'selectionState')

	const onMouseOver = useCallback(({ x, y }) => {
		const newSelectionState = { ...selectionState }

		newSelectionState[x][y] = 0

		setSelectionState(newSelectionState)
	}, [selectionState])

	const onMouseOut = useCallback(({ x, y }) => {
		const newSelectionState = { ...selectionState }

		newSelectionState[x][y] = undefined

		setSelectionState(newSelectionState)
	}, [])

	useModelInstanceEvent(model, 'mouseOver', onMouseOver)
	useModelInstanceEvent(model, 'mouseOut', onMouseOut)

	return <GameModelCtx.Provider value={model} {...props} />
}
