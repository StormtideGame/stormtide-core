import { expect } from "chai";

import generateId from "./generateId";

describe("generateId", () => {
	it("should give a string ID", () => {
		expect(generateId()).to.be.a("string");
	});
});