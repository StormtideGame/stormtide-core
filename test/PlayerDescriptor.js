// @flow

import { expect } from "chai";
import { PlayerDescriptor } from "stormtide-core";

describe("PlayerDescriptor", () => {
	it("should be constructable", () => {
		const player = new PlayerDescriptor();

		expect(player).to.be.ok;
	});
});