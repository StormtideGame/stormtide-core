// @flow

import type GameDescriptor from "./GameDescriptor";

import type { GameState } from "./GameState";
import type { GameAction } from "./GameAction";

export default class RulesAuthority {
	getInitialState(): GameState {
		return {
			players: {}
		};
	}

	processAction(state: GameState, action: GameAction, settings: GameDescriptor): GameState {
		throw new Error("processAction is not implemented");
	}
}