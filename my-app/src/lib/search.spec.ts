import search from "./search";

describe("search", function () {
  const content: string[] = [
    "my dog",
    "is cute",
    "cast iron pans are awesome",
    "it is hackday airkit 2021",
  ];

  describe("when there are no inputs", function () {
    it("should return nothing", function () {
      const result = search([], "cute cat pictures");
      expect(result).toEqual([])
    });
    it("should return nothing", function () {
      const result = search(content, "");
      expect(result).toEqual([])
    });
  });

  describe("when there are inputs", function () {
    it("should return my dog", function () {
      const result = search(content, "my dog");
      expect(result).toEqual(["my dog"]);
    });

    it("should return is cute, it is hackday...", function () {
      const result = search(content, "is");
      expect(result).toEqual(["is cute", "it is hackday airkit 2021"]);
    });
  });
});
