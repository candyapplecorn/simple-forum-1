import someAlgorithm from "./some-algorithm";

describe("someAlgorithm", function () {



  describe("when the algorithm runs", function () {

    it("should be correct", function () {
      expect(someAlgorithm()).toEqual(3);
    });
  });
});
