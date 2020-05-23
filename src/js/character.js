/**
 * <Общее описание>
 *
 * @param {string} name - name of Character: min 2 symbols, max 10.
 * @param {string} type - type of unit: Bowman, Swordsman, Magician, Daemon, Undead, Zombie
 *
 * @throws {InvalidDataInParams} - income params must meet the following conditions
 */

// eslint-disable-next-line no-unused-vars
function Character(name, type) {
  this.name = name;
  this.type = type;
}
