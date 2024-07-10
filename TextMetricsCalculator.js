// Clase TextMetricsCalculator
class TextMetricsCalculator {
    // Constructor: Inicializa la instancia con un selector CSS para buscar el elemento
    constructor(selector) {
        this.element = document.querySelector(selector);
        if (!this.element) {
            throw new Error(`No element was found with the selector "${selector}"`);
        }
    }

    // Método getLineHeight(): Calcula la altura de línea del elemento seleccionado
    getLineHeight() {
        const style = window.getComputedStyle(this.element);
        let lineHeight = style.lineHeight;

        if (lineHeight === 'normal' || isNaN(parseFloat(lineHeight))) {
            const fontSize = parseFloat(style.fontSize);
            lineHeight = fontSize * 1.2;
        } else if (lineHeight.endsWith('%')) {
            const percentage = parseFloat(lineHeight) / 100;
            const fontSize = parseFloat(style.fontSize);
            lineHeight = fontSize * percentage;
        } else {
            lineHeight = parseFloat(lineHeight);
        }

        return lineHeight;
    }

    // Método calculateLines(): Calcula el número de líneas dentro del contenido de texto del elemento
    calculateLines() {
        const lineHeight = this.getLineHeight();
        const elementHeight = this.element.clientHeight;
        return Math.ceil(elementHeight / lineHeight);
    }

    // Método countWords(): Cuenta el número de palabras dentro del contenido de texto del elemento
    countWords() {
        const text = this.element.innerText || this.element.textContent;
        const words = text.trim().split(/\s+/);
        return words.length;
    }

    // Método countSpaces(): Cuenta el número de espacios dentro del contenido de texto del elemento
    countSpaces() {
        const text = this.element.innerText || this.element.textContent;
        const spaces = text.match(/ /g);
        return spaces ? spaces.length : 0;
    }

    // Método countLineBreaks(): Cuenta el número de saltos de línea dentro del contenido de texto del elemento
    countLineBreaks() {
        const lines = this.element.textContent.split('\n');
        return lines.length - 1;
    }

    // Método extractText(): Extrae todo el texto contenido dentro del elemento seleccionado
    extractText() {
        return this.element.textContent;
    }
}

function updateParagraphStyle() {
    const calculator = new TextMetricsCalculator('#page-content-area p');
    console.log('Cantidad de líneas:', calculator.calculateLines());
    console.log('Cantidad de palabras:', calculator.countWords());
    console.log('Cantidad de espacios en blanco:', calculator.countSpaces());
    console.log('Saltos de línea:', calculator.countLineBreaks());
    console.log('Texto sin HTML:', calculator.extractText());
}

window.onload = function() {
    updateParagraphStyle();
};

window.onresize = function() {
    updateParagraphStyle();
};
