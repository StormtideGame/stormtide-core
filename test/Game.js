// @flow

import { expect } from "chai";
import { Game, GameDescriptor } from "stormtide-core";

describe("Game", () => {
	it("should construct from default settings", () => {
		const settings = new GameDescriptor();
		const game = new Game(settings);

		expect(game).to.be.ok;
		expect(game.settings).to.have.all.keys(...Object.keys(settings));
	});
});