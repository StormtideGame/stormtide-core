// @flow

import { expect } from "chai";
import { Game, GameDescriptor } from "stormtide-core";
import type { GameAction } from "stormtide-core";

describe("Game", () => {
	it("should construct from default settings", () => {
		const settings = new GameDescriptor();
		const game = new Game(settings);

		expect(game).to.be.ok;
		expect(game.settings).to.have.all.keys(...Object.keys(settings));
	});

	it("should process dispatched actions", () => {
		const settings = new GameDescriptor();
		const game = new Game(settings);

		const action: GameAction = {
			type: "Nothing"
		};

		game.dispatchAction(action);

		expect(game.state).to.be.an("object");
		expect(game.history).to.contain(action);
	});

	it("should process queued actions", () => {
		const settings = new GameDescriptor();
		const game = new Game(settings);

		const action: GameAction = {
			type: "Nothing"
		};

		game.queueAction(action);
		game.processActionQueue();

		expect(game.state).to.be.an("object");
		expect(game.history).to.contain(action);
	});
});