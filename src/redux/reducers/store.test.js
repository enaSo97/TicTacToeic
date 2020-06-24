import store from "../store";

describe("Test the store", () => {
  it("tests set_question", () => {
    store.dispatch({type: "SET_QUESTION", vocabId : 0});
  });
});