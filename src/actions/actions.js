/**
 * Генераторы действий (actions creators) — это функции, создающие действия.
 * Лаконично описывает суть изменения
 * Единственное требование к объекту действия — это наличие свойства type,
 * значением которого обычно является строка.
 * @param el
 * @return {{type: string, value: *}} - обьект с типом дествия и параметрами
 */
export const sort = (el) => {
    return {
        type: "SORT",
        value: el
    }
};