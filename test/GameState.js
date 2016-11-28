// @flow

import { expect } from "chai";
import { GameState } from "stormtide-core";

describe("GameState", () => {
	it("should construct with reasonable defaults", () => {
		const state = new GameState();

		expect(state).to.be.ok;
	});
});