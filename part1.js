'use strict';
/**
 * Lesson 14 part 1
 */

const DomElement = function (selector) {
    this.selector = selector;
    this.height = 100;
    this.width = 200;
    this.bg = '#cc33ff';
    this.fontSize = '12px';
}

DomElement.prototype.createElement = function () {

    let elem = ''; //document.createElement('div'); // * создаем элемент динамически внутри

    if (this.selector.substring(0, 1) === '.') { //! создаем элемент <div class=".myclass"></div>
        console.log('selector class');
        elem = document.createElement('div');
        elem.classList.add(this.selector.substring(1)); //добавим класс из селектора
        elem.textContent = 'Это элемент класс';
        console.log('elem: ', elem);
        return elem;

    } else if (this.selector.substring(0, 1) === '#') { //! создаем параграф <p id="#.."></p>
        console.log('selector paragraph');
        elem = document.createElement('p');
        elem.setAttribute('id', this.selector.substring(1));
        elem.textContent = 'Это элемент параграф';
        console.log('elem: ', elem);
        return elem;

    } else {
        return `<div>default element</div>`;
    }

}


// * TEST * //
const paragraphElem = new DomElement('#myparagraph');
document.body.append(paragraphElem.createElement())


const classElemnt = new DomElement('.myClass');
document.body.append(classElemnt.createElement());

