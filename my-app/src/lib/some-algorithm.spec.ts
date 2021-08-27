import randomIdGenerator from "./random-id-generator";
import { WORD_SEPARATOR } from "./random-id-generator";

const MINIMUM_ID_LENGTH: number = 8


describe("random id generator", function () {
  it("should generate a random id", function () {
    const aRandomId1: string = randomIdGenerator()
    expect(aRandomId1.length).toBeGreaterThanOrEqual(MINIMUM_ID_LENGTH)
  });

  // "ryan-is-cool" ->
  it('should generate an id with multiple words', function () {
    const aRandomId1: string = randomIdGenerator()

    const parts = aRandomId1.split(new RegExp(WORD_SEPARATOR)) // ["ryan", "is", "cool"]
    expect(parts.length).toBeGreaterThanOrEqual(2)
  });
});
