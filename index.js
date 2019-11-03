window.onload = () => {
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.value = '_';
  let carrierX = 0;
  let carrierY = 0;
  document.querySelector('body').insertAdjacentElement('afterbegin', textarea);
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  textarea.insertAdjacentElement('afterend', keyboard);
  let lang = localStorage.getItem('lang');
  if (lang == null) lang = 0;
  let isShifted = false;
  let isCaps = false;
  let isCtrl = false;
  let isAlt = false;
  const keys = [
    [
      {
        code: 192,
        valueEn: '`',
        valueShiftEn: '~',
        valueCapsEn: '`',
        valueRu: 'ё',
        valueShiftRu: 'Ё',
        valueCapsRu: 'Ё'
      },
      {
        code: 49,
        valueEn: '1',
        valueShiftEn: '!',
        valueCapsEn: '1',
        valueRu: '1',
        valueShiftRu: '!',
        valueCapsRu: '1'
      },
      {
        code: 50,
        valueEn: '2',
        valueShiftEn: '@',
        valueCapsEn: '2',
        valueRu: '2',
        valueShiftRu: '"',
        valueCapsRu: '2'
      },
      {
        code: 51,
        valueEn: '3',
        valueShiftEn: '#',
        valueCapsEn: '3',
        valueRu: '3',
        valueShiftRu: '№',
        valueCapsRu: '3'
      },
      {
        code: 52,
        valueEn: '4',
        valueShiftEn: '$',
        valueCapsEn: '4',
        valueRu: '4',
        valueShiftRu: ';',
        valueCapsRu: '4'
      },
      {
        code: 53,
        valueEn: '5',
        valueShiftEn: '%',
        valueCapsEn: '5',
        valueRu: '5',
        valueShiftRu: '%',
        valueCapsRu: '5'
      },
      {
        code: 54,
        valueEn: '6',
        valueShiftEn: '^',
        valueCapsEn: '6',
        valueRu: '6',
        valueShiftRu: ':',
        valueCapsRu: '6'
      },
      {
        code: 55,
        valueEn: '7',
        valueShiftEn: '&',
        valueCapsEn: '7',
        valueRu: '7',
        valueShiftRu: '?',
        valueCapsRu: '7'
      },
      {
        code: 56,
        valueEn: '8',
        valueShiftEn: '*',
        valueCapsEn: '8',
        valueRu: '8',
        valueShiftRu: '*',
        valueCapsRu: '8'
      },
      {
        code: 57,
        valueEn: '9',
        valueShiftEn: '(',
        valueCapsEn: '9',
        valueRu: '9',
        valueShiftRu: '(',
        valueCapsRu: '9'
      },
      {
        code: 48,
        valueEn: '0',
        valueShiftEn: ')',
        valueCapsEn: '0',
        valueRu: '0',
        valueShiftRu: ')',
        valueCapsRu: '0'
      },
      {
        code: 189,
        valueEn: '-',
        valueShiftEn: '_',
        valueCapsEn: '-',
        valueRu: '-',
        valueShiftRu: '_',
        valueCapsRu: '-'
      },
      {
        code: 187,
        valueEn: '=',
        valueShiftEn: '+',
        valueCapsEn: '=',
        valueRu: '=',
        valueShiftRu: '+',
        valueCapsRu: '='
      },
      {
        code: 8,
        valueEn: 'Backspace',
        valueShiftEn: 'Backspace',
        valueCapsEn: 'Backspace',
        valueRu: 'Backspace',
        valueShiftRu: 'Backspace',
        valueCapsRu: 'Backspace',
        size: 2
      }
    ],
    [
      {
        code: 9,
        valueEn: 'Tab',
        valueShiftEn: 'Tab',
        valueCapsEn: 'Tab',
        valueRu: 'Tab',
        valueShiftRu: 'Tab',
        valueCapsRu: 'Tab',
        size: 2
      },
      {
        code: 81,
        valueEn: 'q',
        valueShiftEn: 'Q',
        valueCapsEn: 'Q',
        valueRu: 'й',
        valueShiftRu: 'Й',
        valueCapsRu: 'Й'
      },
      {
        code: 87,
        valueEn: 'w',
        valueShiftEn: 'W',
        valueCapsEn: 'W',
        valueRu: 'ц',
        valueShiftRu: 'Ц',
        valueCapsRu: 'Ц'
      },
      {
        code: 69,
        valueEn: 'e',
        valueShiftEn: 'E',
        valueCapsEn: 'E',
        valueRu: 'у',
        valueShiftRu: 'У',
        valueCapsRu: 'У'
      },
      {
        code: 82,
        valueEn: 'r',
        valueShiftEn: 'R',
        valueCapsEn: 'R',
        valueRu: 'к',
        valueShiftRu: 'К',
        valueCapsRu: 'К'
      },
      {
        code: 84,
        valueEn: 't',
        valueShiftEn: 'T',
        valueCapsEn: 'T',
        valueRu: 'е',
        valueShiftRu: 'Е',
        valueCapsRu: 'Е'
      },
      {
        code: 89,
        valueEn: 'y',
        valueShiftEn: 'Y',
        valueCapsEn: 'Y',
        valueRu: 'н',
        valueShiftRu: 'Н',
        valueCapsRu: 'Н'
      },
      {
        code: 85,
        valueEn: 'u',
        valueShiftEn: 'U',
        valueCapsEn: 'U',
        valueRu: 'г',
        valueShiftRu: 'Г',
        valueCapsRu: 'Г'
      },
      {
        code: 73,
        valueEn: 'i',
        valueShiftEn: 'I',
        valueCapsEn: 'I',
        valueRu: 'ш',
        valueShiftRu: 'Ш',
        valueCapsRu: 'Ш'
      },
      {
        code: 79,
        valueEn: 'o',
        valueShiftEn: 'O',
        valueCapsEn: 'O',
        valueRu: 'щ',
        valueShiftRu: 'Щ',
        valueCapsRu: 'Щ'
      },
      {
        code: 80,
        valueEn: 'p',
        valueShiftEn: 'P',
        valueCapsEn: 'P',
        valueRu: 'з',
        valueShiftRu: 'З',
        valueCapsRu: 'З'
      },
      {
        code: 219,
        valueEn: '[',
        valueShiftEn: '{',
        valueCapsEn: '[',
        valueRu: 'х',
        valueShiftRu: 'Х',
        valueCapsRu: 'Х'
      },
      {
        code: 221,
        valueEn: ']',
        valueShiftEn: '}',
        valueCapsEn: ']',
        valueRu: 'ъ',
        valueShiftRu: 'Ъ',
        valueCapsRu: 'Ъ'
      },
      {
        code: 46,
        valueEn: 'Del',
        valueShiftEn: 'Del',
        valueCapsEn: 'Del',
        valueRu: 'Del',
        valueShiftRu: 'Del',
        valueCapsRu: 'Del',
        size: 2
      }
    ],
    [
      {
        code: 20,
        valueEn: 'CapsLock',
        valueShiftEn: 'CapsLock',
        valueCapsEn: 'CapsLock',
        valueRu: 'CapsLock',
        valueShiftRu: 'CapsLock',
        valueCapsRu: 'CapsLock',
        size: 2
      },
      {
        code: 65,
        valueEn: 'a',
        valueShiftEn: 'A',
        valueCapsEn: 'A',
        valueRu: 'ф',
        valueShiftRu: 'Ф',
        valueCapsRu: 'Ф'
      },
      {
        code: 83,
        valueEn: 's',
        valueShiftEn: 'S',
        valueCapsEn: 'S',
        valueRu: 'ы',
        valueShiftRu: 'Ы',
        valueCapsRu: 'Ы'
      },
      {
        code: 68,
        valueEn: 'd',
        valueShiftEn: 'D',
        valueCapsEn: 'D',
        valueRu: 'в',
        valueShiftRu: 'В',
        valueCapsRu: 'В'
      },
      {
        code: 70,
        valueEn: 'f',
        valueShiftEn: 'F',
        valueCapsEn: 'F',
        valueRu: 'а',
        valueShiftRu: 'А',
        valueCapsRu: 'А'
      },
      {
        code: 71,
        valueEn: 'g',
        valueShiftEn: 'G',
        valueCapsEn: 'G',
        valueRu: 'п',
        valueShiftRu: 'П',
        valueCapsRu: 'П'
      },
      {
        code: 72,
        valueEn: 'h',
        valueShiftEn: 'H',
        valueCapsEn: 'H',
        valueRu: 'р',
        valueShiftRu: 'Р',
        valueCapsRu: 'Р'
      },
      {
        code: 74,
        valueEn: 'j',
        valueShiftEn: 'J',
        valueCapsEn: 'J',
        valueRu: 'о',
        valueShiftRu: 'О',
        valueCapsRu: 'О'
      },
      {
        code: 75,
        valueEn: 'k',
        valueShiftEn: 'K',
        valueCapsEn: 'K',
        valueRu: 'л',
        valueShiftRu: 'Л',
        valueCapsRu: 'Л'
      },
      {
        code: 76,
        valueEn: 'l',
        valueShiftEn: 'L',
        valueCapsEn: 'L',
        valueRu: 'д',
        valueShiftRu: 'Д',
        valueCapsRu: 'Д'
      },
      {
        code: 186,
        valueEn: ';',
        valueShiftEn: ':',
        valueCapsEn: ';',
        valueRu: 'ж',
        valueShiftRu: 'Ж',
        valueCapsRu: 'Ж'
      },
      {
        code: 222,
        valueEn: "'",
        valueShiftEn: '"',
        valueCapsEn: "'",
        valueRu: 'э',
        valueShiftRu: 'Э',
        valueCapsRu: 'Э'
      },
      {
        code: 13,
        valueEn: 'Enter',
        valueShiftEn: 'Enter',
        valueCapsEn: 'Enter',
        valueRu: 'Enter',
        valueShiftRu: 'Enter',
        valueCapsRu: 'Enter',
        size: 2
      }
    ],
    [
      {
        code: 16,
        valueEn: 'Shift',
        valueShiftEn: 'Shift',
        valueCapsEn: 'Shift',
        valueRu: 'Shift',
        valueShiftRu: 'Shift',
        valueCapsRu: 'Shift',
        size: 2
      },
      {
        code: 90,
        valueEn: 'z',
        valueShiftEn: 'Z',
        valueCapsEn: 'Z',
        valueRu: 'я',
        valueShiftRu: 'Я',
        valueCapsRu: 'Я'
      },
      {
        code: 88,
        valueEn: 'x',
        valueShiftEn: 'X',
        valueCapsEn: 'X',
        valueRu: 'ч',
        valueShiftRu: 'Ч',
        valueCapsRu: 'Ч'
      },
      {
        code: 67,
        valueEn: 'c',
        valueShiftEn: 'C',
        valueCapsEn: 'C',
        valueRu: 'с',
        valueShiftRu: 'С',
        valueCapsRu: 'С'
      },
      {
        code: 86,
        valueEn: 'v',
        valueShiftEn: 'V',
        valueCapsEn: 'V',
        valueRu: 'м',
        valueShiftRu: 'М',
        valueCapsRu: 'М'
      },
      {
        code: 66,
        valueEn: 'b',
        valueShiftEn: 'B',
        valueCapsEn: 'B',
        valueRu: 'и',
        valueShiftRu: 'И',
        valueCapsRu: 'И'
      },
      {
        code: 78,
        valueEn: 'n',
        valueShiftEn: 'N',
        valueCapsEn: 'N',
        valueRu: 'т',
        valueShiftRu: 'Т',
        valueCapsRu: 'Т'
      },
      {
        code: 77,
        valueEn: 'm',
        valueShiftEn: 'M',
        valueCapsEn: 'M',
        valueRu: 'ь',
        valueShiftRu: 'Ь',
        valueCapsRu: 'Ь'
      },
      {
        code: 188,
        valueEn: ',',
        valueShiftEn: '<',
        valueCapsEn: ',',
        valueRu: 'б',
        valueShiftRu: 'Б',
        valueCapsRu: 'Б'
      },
      {
        code: 190,
        valueEn: '.',
        valueShiftEn: '>',
        valueCapsEn: '.',
        valueRu: 'ю',
        valueShiftRu: 'Ю',
        valueCapsRu: 'Ю'
      },
      {
        code: 191,
        valueEn: '/',
        valueShiftEn: '?',
        valueCapsEn: '/',
        valueRu: '.',
        valueShiftRu: ',',
        valueCapsRu: '.'
      },
      {
        code: 38,
        valueEn: '&#8593',
        valueShiftEn: '&#8593',
        valueCapsEn: '&#8593',
        valueRu: '&#8593',
        valueShiftRu: '&#8593',
        valueCapsRu: '&#8593'
      },
      {
        code: 16,
        valueEn: 'Shift',
        valueShiftEn: 'Shift',
        valueCapsEn: 'Shift',
        valueRu: 'Shift',
        valueShiftRu: 'Shift',
        valueCapsRu: 'Shift',
        location: 2
      }
    ],
    [
      {
        code: 17,
        valueEn: 'Ctrl',
        valueShiftEn: 'Ctrl',
        valueCapsEn: 'Ctrl',
        valueRu: 'Ctrl',
        valueShiftRu: 'Ctrl',
        valueCapsRu: 'Ctrl'
      },
      {
        code: 91,
        valueEn: 'Win',
        valueShiftEn: 'Win',
        valueCapsEn: 'Win',
        valueRu: 'Win',
        valueShiftRu: 'Win',
        valueCapsRu: 'Win'
      },
      {
        code: 18,
        valueEn: 'Alt',
        valueShiftEn: 'Alt',
        valueCapsEn: 'Alt',
        valueRu: 'Alt',
        valueShiftRu: 'Alt',
        valueCapsRu: 'Alt'
      },
      {
        code: 32,
        valueEn: ' ',
        valueShiftEn: ' ',
        valueCapsEn: ' ',
        valueRu: ' ',
        valueShiftRu: ' ',
        valueCapsRu: ' ',
        size: 5
      },
      {
        code: 18,
        valueEn: 'Alt',
        valueShiftEn: 'Alt',
        valueCapsEn: 'Alt',
        valueRu: 'Alt',
        valueShiftRu: 'Alt',
        valueCapsRu: 'Alt',
        location: 2
      },
      {
        code: 17,
        valueEn: 'Ctrl',
        valueShiftEn: 'Ctrl',
        valueCapsEn: 'Ctrl',
        valueRu: 'Ctrl',
        valueShiftRu: 'Ctrl',
        valueCapsRu: 'Ctrl',
        location: 2
      },
      {
        code: 37,
        valueEn: '&#8592;',
        valueShiftEn: '&#8592',
        valueCapsEn: '&#8592',
        valueRu: '&#8592',
        valueShiftRu: '&#8592',
        valueCapsRu: '&#8592'
      },
      {
        code: 40,
        valueEn: '&#8595',
        valueShiftEn: '&#8595',
        valueCapsEn: '&#8595',
        valueRu: '&#8595',
        valueShiftRu: '&#8595',
        valueCapsRu: '&#8595'
      },
      {
        code: 39,
        valueEn: '&#8594',
        valueShiftEn: '&#8594',
        valueCapsEn: '&#8594',
        valueRu: '&#8594',
        valueShiftRu: '&#8594',
        valueCapsRu: '&#8594'
      }
    ]
  ];
  let field = 'value';
  if (lang == 0) field += 'En';
  if (lang == 1) field += 'Ru';
  for (i = 0; i < keys.length; i++) {
    let keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard-row');
    keyboard.insertAdjacentElement('beforeend', keyboardRow);
    for (let j = 0; j < keys[i].length; j++) {
      let key = document.createElement('div');
      key.classList.add('key');
      key.innerHTML = keys[i][j][field];
      if (keys[i][j].size == 2) key.classList.add('wide');
      if (keys[i][j].size == 5) key.classList.add('widest');
      keyboardRow.insertAdjacentElement('beforeend', key);
    }
  }
  let pressed = keyboard;
  keyboard.addEventListener('mousedown', event => {
    if (event.target.classList.contains('key')) {
      event.target.classList.add('pressed');
      pressed = event.target;
      let field = 'value';
      if (isShifted) field += 'Shift';
      if (isCaps && !isShifted) field += 'Caps';
      if (lang == 0) field += 'En';
      if (lang == 1) field += 'Ru';
      for (let i = 0; i < keys.length; i++) {
        for (let j = 0; j < keys[i].length; j++) {
          if (
            event.target.innerText == keys[i][j][field] ||
            (event.target.innerText.length == 0 && keys[i][j][field] == ' ') ||
            (event.target.innerText.length == 1 &&
              event.target.innerText.charCodeAt(0) ==
                keys[i][j][field].substring(2, 6))
          ) {
            print(keys[i][j]);
            return;
          }
        }
      }
    }
  });
  document.querySelector('body').addEventListener('mouseup', event => {
    pressed.classList.remove('pressed');
    if (event.target.innerText == 'Shift') {
      isShifted = false;
      display();
      return;
    }
    if (event.target.innerText == 'Alt') {
      isAlt = false;
      return;
    }
    if (event.target.innerText == 'Ctrl') {
      isCtrl = false;
      return;
    }
  });
  document.querySelector('body').addEventListener('keydown', event => {
    for (let i = 0; i < keys.length; i++) {
      for (let j = 0; j < keys[i].length; j++) {
        if (
          keys[i][j].code == event.keyCode &&
          (event.location < 2 ||
            (event.location == 2 && keys[i][j].location == 2))
        ) {
          let key = keyboard.childNodes[i].childNodes[j];
          key.classList.add('pressed');
          print(keys[i][j], event);
          return;
        }
      }
    }
  });
  document.querySelector('body').addEventListener('keyup', event => {
    for (let i = 0; i < keys.length; i++) {
      for (let j = 0; j < keys[i].length; j++) {
        if (
          keys[i][j].code == event.keyCode &&
          (event.location < 2 ||
            (event.location == 2 && keys[i][j].location == 2))
        ) {
          let key = keyboard.childNodes[i].childNodes[j];
          key.classList.remove('pressed');
          if (event.keyCode == 16) {
            isShifted = false;
            display();
          }
          if (event.keyCode == 17) isCtrl = false;
          if (event.keyCode == 18) isAlt = false;
          return;
        }
      }
    }
  });

  let print = (key, event) => {
    let text = textarea.value.split('\n');
    switch (key.code) {
      case 37: {
        if (carrierX > 0) {
          text[carrierY] =
            text[carrierY].substring(0, carrierX - 1) +
            '_' +
            text[carrierY][carrierX - 1] +
            text[carrierY].substring(carrierX + 1, text[carrierY].length);
          carrierX--;
        } else if (carrierY > 0) {
          text[carrierY] = text[carrierY].substring(1, text[carrierY].length);
          carrierY--;
          text[carrierY] = text[carrierY] + '_';
          carrierX = text[carrierY].length - 1;
        }
        textarea.value = text.join('\n');
        break;
      }
      case 38: {
        if (carrierY > 0) {
          text[carrierY] =
            text[carrierY].substring(0, carrierX) +
            text[carrierY].substring(carrierX + 1, text[carrierY].length);
          carrierY--;
          if (text[carrierY].length > carrierX) {
            text[carrierY] =
              text[carrierY].substring(0, carrierX) +
              '_' +
              text[carrierY].substring(carrierX, text[carrierY].length);
          } else {
            carrierX = text[carrierY].length;
            text[carrierY] += '_';
          }
        }
        textarea.value = text.join('\n');
        break;
      }
      case 39: {
        if (carrierX < text[carrierY].length - 1) {
          text[carrierY] =
            text[carrierY].substring(0, carrierX) +
            text[carrierY][carrierX + 1] +
            '_' +
            text[carrierY].substring(carrierX + 2, text[carrierY].length);
          carrierX++;
        } else if (carrierY < text.length - 1) {
          text[carrierY] = text[carrierY].substring(
            0,
            text[carrierY].length - 1
          );
          carrierY++;
          text[carrierY] = '_' + text[carrierY];
          carrierX = 0;
        }
        textarea.value = text.join('\n');
        break;
      }
      case 40: {
        if (carrierY < text.length - 1) {
          text[carrierY] =
            text[carrierY].substring(0, carrierX) +
            text[carrierY].substring(carrierX + 1, text[carrierY].length);
          carrierY++;
          if (text[carrierY].length > carrierX) {
            text[carrierY] =
              text[carrierY].substring(0, carrierX) +
              '_' +
              text[carrierY].substring(carrierX, text[carrierY].length);
          } else {
            text[carrierY] = text[carrierY] + '_';
          }
        }
        textarea.value = text.join('\n');
        break;
      }
      case 46: {
        if (carrierX < text[carrierY].length - 1) {
          text[carrierY] =
            text[carrierY].substring(0, carrierX + 1) +
            text[carrierY].substring(carrierX + 2, text[carrierY].length);
        } else if (carrierY < text.length - 1) {
          text[carrierY] += text[carrierY + 1];
          text.splice(carrierY + 1, 1);
        }
        textarea.value = text.join('\n');
        break;
      }
      case 13: {
        text[carrierY] =
          text[carrierY].substring(0, carrierX) +
          '\n' +
          text[carrierY].substring(carrierX, text[carrierY].length);
        textarea.value = text.join('\n');
        carrierY++;
        carrierX = 0;
        break;
      }
      case 8: {
        if (carrierX > 0) {
          text[carrierY] =
            text[carrierY].substring(0, carrierX - 1) +
            text[carrierY].substring(carrierX, text[carrierY].length);
          carrierX--;
        } else if (carrierY > 0) {
          carrierX = text[carrierY - 1].length;
          text[carrierY - 1] += text[carrierY];
          text.splice(carrierY, 1);
          carrierY--;
        }
        textarea.value = text.join('\n');
        break;
      }
      case 9: {
        event.preventDefault();
        text[carrierY] =
          text[carrierY].substring(0, carrierX) +
          '    ' +
          text[carrierY].substring(carrierX, text[carrierY].length);
        textarea.value = text.join('\n');
        carrierX += 4;
        break;
      }
      case 16: {
        isShifted = true;
        display();
        break;
      }
      case 20: {
        isCaps = !isCaps;
        display();
        break;
      }
      case 17: {
        isCtrl = true;
        if (isAlt) nextLang();
        break;
      }
      case 18: {
        isAlt = true;
        if (isCtrl) nextLang();
        break;
      }
      case 91: {
        break;
      }
      case 32: {
        event.preventDefault();
      }
      default: {
        let field = 'value';
        if (isShifted) field += 'Shift';
        if (isCaps && !isShifted) field += 'Caps';
        if (lang == 0) field += 'En';
        if (lang == 1) field += 'Ru';
        text[carrierY] =
          text[carrierY].substring(0, carrierX) +
          key[field] +
          text[carrierY].substring(carrierX, text[carrierY].length);
        textarea.value = text.join('\n');
        carrierX++;
      }
    }
  };
  let nextLang = () => {
    lang++;
    if (lang > 1) lang = 0;
    localStorage.setItem('lang', lang);
    display();
  };
  let display = () => {
    let field = 'value';
    if (isShifted) field += 'Shift';
    if (isCaps && !isShifted) field += 'Caps';
    if (lang == 0) field += 'En';
    if (lang == 1) field += 'Ru';
    for (let i = 0; i < keys.length; i++) {
      let row = keyboard.childNodes[i];
      for (let j = 0; j < keys[i].length; j++) {
        row.childNodes[j].innerHTML = keys[i][j][field];
      }
    }
  };
};
