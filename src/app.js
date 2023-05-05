const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
const viability = characters
  .sort((a, b) => b.health - a.health)
  .map((item) => {
    calcLiving(item);
  });

export function calcLiving(viability) {
  const { health } = viability;
  if (health > 51) {
    return "healthy";
  }
  if (health <= 50 && health >= 15) {
    return "wounded";
  }
  if (health < 15 && health >= 0) {
    return "critical";
  }
}
