const { expect } = require("@jest/globals");

const getAnimationsForRow = require("./getAnimationsForRow.js");

test("1", () => {
  let row = convertToElement([0, 0, 0, 0]);
  let animations = [];
  getAnimationsForRow(row, animations, "ArrowLeft");
  expect(animations).toEqual([]);
});

test("2", () => {
  let row = convertToElement([2, 0, 2, 0]);
  let animations = [];
  getAnimationsForRow(row, animations, "ArrowLeft");
  expect(animations).toEqual([
    { e: { value: 2 }, distance: 2, direction: "ArrowLeft" },
  ]);
});

test("3", () => {
  let row = convertToElement([2, 0, 0, 2]);
  let animations = [];
  getAnimationsForRow(row, animations, "ArrowLeft");
  expect(animations).toEqual([
    { e: { value: 2 }, distance: 3, direction: "ArrowLeft" },
  ]);
});

test("4", () => {
  let row = convertToElement([2, 2, 2, 4]);
  let animations = [];
  getAnimationsForRow(row, animations, "ArrowLeft");
  expect(animations).toEqual([
    { e: { value: 2 }, distance: 1, direction: "ArrowLeft" },
    { e: { value: 2 }, distance: 1, direction: "ArrowLeft" },
    { e: { value: 4 }, distance: 1, direction: "ArrowLeft" },
  ]);
});

test("5", () => {
  let row = convertToElement([2, 2, 2, 2]);
  let animations = [];
  getAnimationsForRow(row, animations, "ArrowLeft");
  expect(animations).toEqual([
    { e: { value: 2 }, distance: 1, direction: "ArrowLeft" },
    { e: { value: 2 }, distance: 1, direction: "ArrowLeft" },
    { e: { value: 2 }, distance: 2, direction: "ArrowLeft" },
  ]);
});

test("6", () => {
  let row = convertToElement([2, 0, 2, 2]);
  let animations = [];
  getAnimationsForRow(row, animations, "ArrowLeft");
  expect(animations).toEqual([
    { e: { value: 2 }, distance: 2, direction: "ArrowLeft" },
    { e: { value: 2 }, distance: 2, direction: "ArrowLeft" },
  ]);
});

test("7", () => {
  let row = convertToElement([4, 4, 2, 4]);
  let animations = [];
  getAnimationsForRow(row, animations, "ArrowLeft");
  expect(animations).toEqual([
    { e: { value: 4 }, distance: 1, direction: "ArrowLeft" },
    { e: { value: 2 }, distance: 1, direction: "ArrowLeft" },
    { e: { value: 4 }, distance: 1, direction: "ArrowLeft" },
  ]);
});

test("8", () => {
  let row = convertToElement([0, 2, 2, 0]);
  let animations = [];
  getAnimationsForRow(row, animations, "ArrowLeft");
  expect(animations).toEqual([
    { e: { value: 2 }, distance: 1, direction: "ArrowLeft" },
    { e: { value: 2 }, distance: 2, direction: "ArrowLeft" },
  ]);
});

function convertToElement(array) {
  return array.map((v) => ({ value: v }));
}
