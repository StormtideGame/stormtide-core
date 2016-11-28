// @flow

import RulesAuthority from "./RulesAuthority";
import DefaultRulesAuthority from "./DefaultRulesAuthority";
import GameDescriptor from "./GameDescriptor";

import type { GameState } from "./GameState";
import type { GameAction } from "./GameAction";

/**
 * Represents a game, whether ongoing or having taken place in the past.
 */
export default class Game {
	settings: GameDescriptor;
	state: GameState;
	history: GameAction[];
	rules: RulesAuthority;

	constructor(settings: GameDescriptor) {
		this.settings = settings;
		this.history = [];

		// Temporary
		this.rules = new DefaultRulesAuthority(settings);
		this.state = this.rules.getInitialState();
	}

	/**
	 * Adds an action to the game's history and applies it using the current
	 * RulesAuthority.
	 */
	dispatchAction(action: GameAction) {
		this.history.push(action);

		this.state = this.rules.processAction(this.state, action);
	}
}