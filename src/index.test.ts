import { expect } from "chai";

import Fooer from "./index";

describe("Fooer", () => {
	it("should bar", () => {
		const fooer = new Fooer();
		expect(fooer.foo()).to.equal("bar");
	});
});