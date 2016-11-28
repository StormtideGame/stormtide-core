// @flow

import type GameDescriptor from "./GameDescriptor";

import type { GameState } from "./GameState";
import type { GameAction } from "./GameAction";

/**
 * A base class for creating rules interpreters.
 */
export default class RulesAuthority {
	// The game settings the RulesAuthority was constructed with
	settings: GameDescriptor;

	constructor(settings: GameDescriptor) {
		this.settings = settings;
	}

	/**
	 * Returns the state to be used when starting a new game.
	 */
	getInitialState(): GameState {
		throw new Error("getInitialState is not implemented");
	}

	/**
	 * Processes an action from the given state, returning a new state.
	 * The `state` parameter is mutable!
	 */
	processAction(state: GameState, action: GameAction): GameState {
		throw new Error("processAction is not implemented");
	}
}