// @flow

import RulesAuthority from "./RulesAuthority";
import DefaultRulesAuthority from "./DefaultRulesAuthority";
import GameDescriptor from "./GameDescriptor";

import type { GameState } from "./GameState";
import type { GameAction } from "./GameAction";

export default class Game {
	settings: GameDescriptor;
	state: GameState;
	history: GameAction[];
	rules: RulesAuthority;

	constructor(settings: GameDescriptor) {
		this.settings = settings;
		this.history = [];

		// Temporary
		this.rules = new DefaultRulesAuthority();
		this.state = this.rules.getInitialState();
	}

	dispatchAction(action: GameAction) {
		this.history.push(action);

		this.state = this.rules.processAction(this.state, action, this.settings);
	}
}