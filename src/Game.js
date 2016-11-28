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

	_actionQueue: GameAction[];

	constructor(settings: GameDescriptor) {
		this.settings = settings;
		this.history = [];
		this._actionQueue = [];

		// Temporary
		this.rules = new DefaultRulesAuthority();
		this.state = this.rules.getInitialState(this);
	}

	start() {
		this.dispatchAction({
			type: "GameStart"
		});
	}

	/**
	 * Adds an action to the game's history and applies it using the current
	 * RulesAuthority.
	 */
	dispatchAction(action: GameAction) {
		this.history.push(action);

		this.state = this.rules.processAction(this, action);

		this.processActionQueue();
	}

	/**
	 * Queues an action to be executed after all current actions have been
	 * completed.
	 */
	queueAction(action: GameAction) {
		this._actionQueue.push(action);
	}

	/**
	 * Processes any actions that have been placed into the queue.
	 */
	processActionQueue() {
		while (this._actionQueue.length > 0) {
			const action = this._actionQueue.pop();

			this.dispatchAction(action);
		}
	}
}