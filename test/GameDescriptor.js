// @flow

import { expect } from "chai";
import { GameDescriptor } from "stormtide-core";

describe("GameDescriptor", () => {
	it("should construct", () => {
		const settings = new GameDescriptor();

		expect(settings).to.be.ok;
	});

	it("should have expected properties", () => {
		const settings = new GameDescriptor();

		expect(settings).to.contain.all.keys(
			"players"
		);
	});
});