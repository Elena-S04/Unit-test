import showHealth from "../app";

test("should return array of players from healthier", () => {
  const playersList = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];

  const expectedPlayersList = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];

  const result = showHealth(playersList);
  expect(result).toEqual(expectedPlayersList);
});
