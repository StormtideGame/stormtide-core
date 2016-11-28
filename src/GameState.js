// @flow

import type { PlayerState } from "./PlayerState";
import type { GameEntity } from "./GameEntity";

type Mapish<V> = {
	[key: string]: ?V
};

/**
 * Describes the game state from action to action.
 */
export type GameState = {
	players: Mapish<PlayerState>,
	playerTurnOrder: string[],
	priority: ?string,
	stack: GameEntity[]
};