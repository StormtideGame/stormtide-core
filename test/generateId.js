// @flow

import { expect } from "chai";
import { generateId } from "stormtide-core";

describe("generateId", () => {
	it("should generate string IDs", () => {
		const id = generateId();

		expect(id).to.be.a("string");
		expect(id).to.have.length.of.at.least(1);
	});

	it("should generate unique IDs", () => {
		const ids = new Set();

		for (let i = 0; i < 100; i++) {
			ids.add(generateId());
		}

		const asArray = Array.from(ids);

		expect(asArray).to.have.lengthOf(100);
	});
});