// @flow

import type GameDescriptor from "./GameDescriptor";

export default class Game {
	settings: GameDescriptor;

	constructor(settings: GameDescriptor) {
		this.settings = settings;
	}
}