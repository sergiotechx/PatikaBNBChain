const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Counter test", function () {

    async function createContract() {
        const Counter = await ethers.getContractFactory("Counter");
        const counter = await Counter.deploy();
        return  counter ;
    }

    it("Deploy test", async function () {
        const  counter  = await createContract();
        expect(await counter.getCounter()).to.equal(0);
    });

   it("Add 1 to other counter", async function () {
        const  counter  = await createContract();
        expect(await counter.getCounter()).to.equal(0);
        await counter.add1();
        expect(await counter.getCounter()).to.equal(1);
    });
});
   