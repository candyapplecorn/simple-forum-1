/*
content: ["my dog", "is cute", "cast iron pans are awesome", "it is hackday airkit 2021"]
phrase: "is"
expected output: ["is cute", "it is hackday airkit 2021"]
 */

function search(content: string[], phrase: string): string[] {
  //for each element in content list, check for the phrase and confirm there is an input and if condition is true, print that element
  return content.filter(function (element, index) {
    if (element.includes(phrase) && phrase.length > 0) {
      return true;
    }
  });
}

export default search;
