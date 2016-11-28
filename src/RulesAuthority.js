// @flow

import type GameDescriptor from "./GameDescriptor";

import type { GameState } from "./GameState";
import type { GameAction } from "./GameAction";

export default class RulesAuthority {
	settings: GameDescriptor;

	constructor(settings: GameDescriptor) {
		this.settings = settings;
	}

	getInitialState(): GameState {
		throw new Error("getInitialState is not implemented");
	}

	processAction(state: GameState, action: GameAction): GameState {
		throw new Error("processAction is not implemented");
	}
}