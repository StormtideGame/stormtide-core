// @flow

import { expect } from "chai";
import { CardDescriptor } from "stormtide-core";

describe("CardDescriptor", () => {
	it("should be instantiable with reasonable defaults", () => {
		const reference = {
			name: "Storm Crow"
		};

		const card = new CardDescriptor(reference);

		expect(card).to.be.ok;
		expect(card.name).to.equal(reference.name);
	});
});