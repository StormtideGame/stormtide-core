// @flow

import GameState from "./GameState";

import type { GameAction } from "./GameAction";
import type GameDescriptor from "./GameDescriptor";

export default class Game {
	settings: GameDescriptor;
	state: GameState;
	history: GameAction[];

	constructor(settings: GameDescriptor) {
		this.settings = settings;
		this.state = new GameState();
		this.history = [];
	}
}