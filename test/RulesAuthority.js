// @flow

import { expect } from "chai";
import { RulesAuthority } from "stormtide-core";

describe("RulesAuthority", () => {
	it("should be constructable", () => {
		const rules = new RulesAuthority();

		expect(rules).to.be.ok;
	});

	it("should return a valid initial state", () => {
		const rules = new RulesAuthority();

		const state = rules.getInitialState();

		expect(state).to.be.an("object");
	});

	it("should throw on processAction", () => {
		const rules = new RulesAuthority();

		const using = () => {
			// Totally incorrect usage of processAction
			const any = (null: any);
			rules.processAction(any, any, any);
		};

		expect(using).to.throw(Error);
	});
});