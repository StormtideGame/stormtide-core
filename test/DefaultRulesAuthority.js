// @flow

import { expect } from "chai";

import { DefaultRulesAuthority, GameDescriptor } from "stormtide-core";
import type { GameAction } from "stormtide-core";

describe("DefaultRulesAuthority", () => {
	it("should be constructable", () => {
		const settings = new GameDescriptor();
		const rules = new DefaultRulesAuthority(settings);

		expect(rules).to.be.ok;
	});

	it("should no-op process actions", () => {
		const settings = new GameDescriptor();
		const rules = new DefaultRulesAuthority(settings);

		const action: GameAction = {
			type: "Nothing",
			player: ""
		};

		const state = rules.getInitialState();
		const newState = rules.processAction(state, action);

		expect(newState).to.be.an("object");
	});
});