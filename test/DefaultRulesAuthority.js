// @flow

import { expect } from "chai";

import { DefaultRulesAuthority, Game, GameDescriptor } from "stormtide-core";
import type { GameAction } from "stormtide-core";

describe("DefaultRulesAuthority", () => {
	it("should be constructable", () => {
		const rules = new DefaultRulesAuthority();

		expect(rules).to.be.ok;
	});

	it("should pass through player descriptors", () => {
		const settings = new GameDescriptor();

		const mockPlayer = ({}: any);
		settings.players = [mockPlayer];

		const game = new Game(settings);

		const rules = new DefaultRulesAuthority();

		expect(rules).to.be.ok;

		const keys = Object.keys(game.state.players);
		expect(keys).to.have.lengthOf(1);
	});

	it("should no-op process actions", () => {
		const settings = new GameDescriptor();
		const game = new Game(settings);

		const rules = new DefaultRulesAuthority();

		const action: GameAction = {
			type: "Nothing"
		};

		const newState = rules.processAction(game, action);

		expect(newState).to.be.an("object");
	});
});