'use strict';
/**
 * Lesson 14 part 1
 */

/**const DomElement = function (selector) {
    this.selector = selector;
    this.height = 100;
    this.width = 200;
    this.bg = '#cc33ff';
    this.fontSize = '12px';
}*/


/**
 * *класс DomElement создает объект DOM-элемента с параметрами
 * @param {*} selector селектор .class или #id
 * @param {*} height высота блока px
 * @param {*} width ширина блока px
 * @param {*} backgroundColor строка цвета фона rgb
 * @param {*} fontSize размер шрифта внутри блока px
 */
const DomElement = function (selector, height, width, backgroundColor, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = backgroundColor;
    this.fontSize = fontSize;
}

DomElement.prototype.setText = function(text) {
    // * поместить текст внутрь элемента
    this.text = text;
}


DomElement.prototype.createElement = function () {

    let elem = ''; //document.createElement('div'); // * создаем элемент динамически внутри

    if (this.selector.substring(0, 1) === '.') { //! создаем элемент <div class=".myclass"></div>
        console.log('selector class');
        elem = document.createElement('div');
        elem.classList.add(this.selector.substring(1)); //добавим класс из селектора
        elem.textContent = 'Это элемент класс';
        console.log('elem: ', elem);

    } else if (this.selector.substring(0, 1) === '#') { //! создаем параграф <p id="#.."></p>
        console.log('selector paragraph');
        elem = document.createElement('p');
        elem.setAttribute('id', this.selector.substring(1));
        elem.textContent = 'Это элемент параграф';
        console.log('elem: ', elem);

    } else {
        // * если селектор не попадает под условие
        console.log('генерация пустого блока по умолчанию');
        // elem.document.createElement('div');
    }

    elem.style.cssText = `height: ${this.height}px;
        width: ${this.width}px;
        background-color: #${this.bg};
        font-size: ${this.fontSize}px;
        font-family: sans-serif;
        color: #232323;`

    elem.textContent = this.text;
    return elem;
}


// * TEST * //
//метод createElement() возвращает сформированный dom-элемент
// с помощью append() можем вставить элемент в нужное место на странице
const elem1 = new DomElement('.violet-box', 100, 150, 'cc33ff', 14);
elem1.setText('This is div class block');
document.body.append(elem1.createElement());


const paragraphElem = new DomElement('#my_paragraph', 50, 250, '5e5e5e', 12);
paragraphElem.setText('This is p paragraph element');
document.body.append(paragraphElem.createElement());

