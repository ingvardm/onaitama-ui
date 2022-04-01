import { FixedArray } from "./util-types"

export type Piece = 'o' | 'O' | 'x' | 'X' | undefined
export type CellRow = FixedArray<5, Piece>
export type CellList = FixedArray<5, CellRow>

export type SelectionCell = 0 | 1 | 2 | undefined
export type SelectionRow = FixedArray<5, SelectionCell>
export type SelectionGrid = FixedArray<5, SelectionRow>

export type Card = 'dragon' | 'boar' | 'yiel' | 'crane' | 'tiger'
export type CardList = FixedArray<2, Card> | FixedArray<3, Card>
export type PlayerCards = FixedArray<2, CardList>