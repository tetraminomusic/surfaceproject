// Этот фрагмент кода выбирает все элементы с классом 'store' и добавляет к каждому из них слушатель событий для клика.
var buttons = document.getElementsByClassName('store'),
    forEach = Array.prototype.forEach;

// Проходит по каждому элементу с классом 'store' и добавляет слушатель событий для клика, вызывающий функцию addElement.
forEach.call(buttons, function(b){
    b.addEventListener('click', addElement);
});

// Эта функция вызывается при клике на элемент 'store' и добавляет новый элемент div внутри кликнутого элемента.
function addElement(e){
    var addDiv = document.createElement('div'),
        mValue = Math.max(this.clientWidth, this.clientHeight), // Определяет максимальное значение между шириной и высотой кликнутого элемента
        rect = this.getBoundingClientRect(), // Получает позицию и размеры кликнутого элемента
        sDiv  = addDiv.style,
        px = 'px';

    // Устанавливает ширину и высоту нового элемента div, чтобы соответствовать большему измерению кликнутого элемента
    sDiv.width = sDiv.height = mValue + px;
    // Позиционирует новый элемент div по координатам клика относительно кликнутого элемента
    sDiv.left = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top = e.clientY - rect.top - (mValue / 2) + px;
    
    // Добавляет CSS-класс 'pulse' к новому элементу div для стилизации
    addDiv.classList.add('pulse');
    // Добавляет новый элемент div как дочерний элемент кликнутого элемента
    this.appendChild(addDiv);

    // Выводит информацию в консоль для целей отладки
    console.log(addDiv); // Логирует новый элемент div
    console.log(mValue); // Логирует максимальное измерение кликнутого элемента
    console.log(rect); // Логирует позицию и размеры кликнутого элемента
}