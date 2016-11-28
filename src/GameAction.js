// @flow

import type { GameActionType } from "./GameActionType";

export type GameAction = {
	// The action that was taken
	type: GameActionType,

	// UUID of player taking the action
	player: string
};