/**
 * Функция-конструктор создания Персонажа
 *
 * @param {String} name имя Персонажа: мин 2 символа, максимум 10.
 * @param {String} type тип юнита на выбор: Bowman, Swordsman, Magician, Daemon, Undead, Zombie
 * @throws {} показ ошибки о неправильных значениях вводимых параметров функции
 */

function Character(name, type) {
  this.name = name;
  this.type = type;
}
