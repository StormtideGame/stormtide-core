// @flow

import { expect } from "chai";
import { DefaultRulesAuthority } from "stormtide-core";
import type { GameAction } from "stormtide-core";

describe("DefaultRulesAuthority", () => {
	it("should be constructable", () => {
		const rules = new DefaultRulesAuthority();

		expect(rules).to.be.ok;
	});

	it("should process actions", () => {
		const rules = new DefaultRulesAuthority();

		const action: GameAction = {
			type: "Nothing",
			player: ""
		};

		const state = rules.getInitialState();
		const newState = rules.processAction(state, action);

		expect(newState).to.be.an("object");
	});
});