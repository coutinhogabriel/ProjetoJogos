// Seleciona todas as teclas do piano, a caixa de verificação, o interruptor e a seção de teclas
const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano__keys');

const audioMap = {}; // Objeto que armazena os áudios das notas musicais
const keyStatus = {}; // Objeto que rastreia o status das teclas (pressionadas ou não)

// Função para reproduzir o som da nota
const playNote = (note) => {
// Verifica se há um áudio associado à nota
    if (audioMap[note]) {
 // Clona o áudio para permitir a reprodução múltipla
        const audio = audioMap[note].cloneNode();
        audio.play();// Reproduz o som da nota
    }
}
// Manipulador para eventos de pressionar o mouse sobre uma tecla do piano
const handleMouseDown = (key) => {
    const note = key.getAttribute('data-note');// Obtém a nota associada à tecla

    
// Verifica se a tecla não está sendo pressionada para evitar repetições
    if (!keyStatus[note]) {
        playNote(note);// Reproduz o som da nota
// Adiciona classes de estilo às teclas pretas quando pressionadas
        if (key.className.includes('black')) {
            key.classList.add('black--pressed');
        } else {
            key.style.background = 'aliceblue';// Altera o estilo de fundo das teclas brancas quando pressionadas
        }

        // Marca a tecla como pressionada
        keyStatus[note] = true;
    }
}
// Manipulador para eventos de soltar o mouse de uma tecla do piano
const handleMouseUp = (key) => {
    const note = key.getAttribute('data-note');// Obtém a nota associada à tecla
// Remove classes de estilo das teclas pretas quando soltas
    if (key.className.includes('black')) {
        key.classList.remove('black--pressed');
    } else {
        key.style.background = 'white';// Restaura o estilo de fundo das teclas brancas quando soltas
    }

    // Marca a tecla como não pressionada
    keyStatus[note] = false;
}
// Itera sobre todas as teclas e adiciona ouvintes de eventos de clique do mouse
keys.forEach((key) => {
    const note = key.getAttribute('data-note');// Obtém a nota associada à tecla
    audioMap[note] = new Audio(`notes/${note}.wav`);// Cria e armazena o áudio para a nota
// Adiciona um ouvinte de evento de clique do mouse para detectar pressionamentos
    key.addEventListener('mousedown', () => {
        if (!keyStatus[note]) {
            handleMouseDown(key);
        }
    });
// Adiciona um ouvinte de evento de soltar o mouse para detectar quando a tecla é solta
    key.addEventListener('mouseup', () => handleMouseUp(key));
});
// Ouvinte de evento para a caixa de verificação que controla a ativação/desativação do piano
checkbox.addEventListener('change', (event) => {
    const keysWithLabels = document.querySelectorAll('.key span');
    
    if (event.target.checked) {
        switcher.classList.add('switcher--active');
        keysSection.classList.remove('disabled-keys');
        
        // Mostra os valores das teclas
        keysWithLabels.forEach((label) => {
            label.style.opacity = '0';
        });
    } else {
        switcher.classList.remove('switcher--active');
        keysSection.classList.add('disabled-keys');
        
        // Oculta os valores das teclas
        keysWithLabels.forEach((label) => {
            label.style.opacity = '1';
        });
    }
});


// Mapeamento de teclas do teclado para as teclas do piano
const keyDownMapper = {
    "Tab": () => handleMouseDown(keys[0]),
    "1": () => handleMouseDown(keys[1]),
    "q": () => handleMouseDown(keys[2]),
    "2": () => handleMouseDown(keys[3]),
    "w": () => handleMouseDown(keys[4]),
    "e": () => handleMouseDown(keys[5]),
    "4": () => handleMouseDown(keys[6]),
    "r": () => handleMouseDown(keys[7]),
    "5": () => handleMouseDown(keys[8]),
    "t": () => handleMouseDown(keys[9]),
    "6": () => handleMouseDown(keys[10]),
    "y": () => handleMouseDown(keys[11]),
    "u": () => handleMouseDown(keys[12]),
    "8": () => handleMouseDown(keys[13]),
    "i": () => handleMouseDown(keys[14]),
    "9": () => handleMouseDown(keys[15]),
    "o": () => handleMouseDown(keys[16]),
    "p": () => handleMouseDown(keys[17]),
    "-": () => handleMouseDown(keys[18]),
    "[": () => handleMouseDown(keys[19]),
    "=": () => handleMouseDown(keys[20]),
    "]": () => handleMouseDown(keys[21]),
    "Backspace": () => handleMouseDown(keys[22]),
    "\\": () => handleMouseDown(keys[23]),
}
// Mapeamento de teclas do teclado para eventos de soltar as teclas do piano
const keyUpMapper = {
    "Tab": () => handleMouseUp(keys[0]),
    "1": () => handleMouseUp(keys[1]),
    "q": () => handleMouseUp(keys[2]),
    "2": () => handleMouseUp(keys[3]),
    "w": () => handleMouseUp(keys[4]),
    "e": () => handleMouseUp(keys[5]),
    "4": () => handleMouseUp(keys[6]),
    "r": () => handleMouseUp(keys[7]),
    "5": () => handleMouseUp(keys[8]),
    "t": () => handleMouseUp(keys[9]),
    "6": () => handleMouseUp(keys[10]),
    "y": () => handleMouseUp(keys[11]),
    "u": () => handleMouseUp(keys[12]),
    "8": () => handleMouseUp(keys[13]),
    "i": () => handleMouseUp(keys[14]),
    "9": () => handleMouseUp(keys[15]),
    "o": () => handleMouseUp(keys[16]),
    "p": () => handleMouseUp(keys[17]),
    "-": () => handleMouseUp(keys[18]),
    "[": () => handleMouseUp(keys[19]),
    "=": () => handleMouseUp(keys[20]),
    "]": () => handleMouseUp(keys[21]),
    "Backspace": () => handleMouseUp(keys[22]),
    "\\": () => handleMouseUp(keys[23]),
}
// Ouvinte de evento para teclas do teclado pressionadas
document.addEventListener('keydown', (event) => {
    event.preventDefault();// Impede o comportamento padrão das teclas
    const key = event.key;// Obtém a tecla pressionada

     // Verifica se a tecla tem um mapeamento e não está sendo pressionada para evitar repetições
    if (keyDownMapper[key] && !keyStatus[key]) {
        keyDownMapper[key]();// Chama a função associada à tecla
    }
});
// Ouvinte de evento para teclas do teclado soltas
document.addEventListener('keyup', (event) => {
    const key = event.key; // Obtém a tecla solta

    // Verifica se a tecla tem um mapeamento
    if (keyUpMapper[key]) {
        keyUpMapper[key]();// Chama a função associada à tecla
    }
});

