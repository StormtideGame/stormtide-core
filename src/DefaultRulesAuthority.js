// @flow

import RulesAuthority from "./RulesAuthority";
import type GameDescriptor from "./GameDescriptor";

import type { GameState } from "./GameState";
import type { GameAction } from "./GameAction";

export default class DefaultRulesAuthority extends RulesAuthority {
	processAction(state: GameState, action: GameAction, settings: GameDescriptor): GameState {
		return state;
	}
}