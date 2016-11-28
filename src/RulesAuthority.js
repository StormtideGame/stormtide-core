// @flow

import Game from "./Game";

import type { GameState } from "./GameState";
import type { GameAction } from "./GameAction";

/**
 * A base class for creating rules interpreters.
 */
export default class RulesAuthority {
	/**
	 * Returns the state to be used when starting a new game.
	 */
	getInitialState(game: Game): GameState {
		throw new Error("getInitialState is not implemented");
	}

	/**
	 * Processes an action from the given game, returning a new state.
	 */
	processAction(game: Game, action: GameAction): GameState {
		throw new Error("processAction is not implemented");
	}
}