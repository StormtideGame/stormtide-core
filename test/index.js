// @flow

import FooBar from "stormtide-core";

describe("FooBar", () => {
	it("should construct", () => {
		new FooBar();
	});

	it("should have a foo method", () => {
		new FooBar().foo();
	});
});