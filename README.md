# TextMetricsCalculator README

## Overview

`TextMetricsCalculator` es una clase de JavaScript diseñada para analizar y proporcionar métricas sobre el contenido de texto dentro de un elemento HTML especificado. Calcula varios aspectos como la altura de línea, número de líneas, palabras, espacios, saltos de línea y extrae todo el texto del elemento seleccionado. Esta herramienta es particularmente útil para desarrolladores web y creadores de contenido que necesitan entender el diseño y legibilidad de su contenido de texto.

## Características

- **Cálculo de Altura de Línea**: Determina la altura efectiva de la línea basándose en el estilo computado del elemento.
- **Número de Líneas**: Calcula cuántas líneas de texto caben dentro del elemento.
- **Conteo de Palabras**: Cuenta el número total de palabras en el contenido de texto del elemento.
- **Conteo de Espacios**: Cuenta el número total de espacios en el contenido de texto del elemento.
- **Conteo de Saltos de Línea**: Cuenta el número de saltos de línea explícitos en el contenido de texto del elemento.
- **Extracción de Texto**: Extrae todo el contenido de texto del elemento, excluyendo cualquier etiqueta HTML.

## Uso

Para usar `TextMetricsCalculator`, debes incluirlo en tu proyecto e instanciarlo con el selector CSS del elemento que deseas analizar. Aquí tienes un ejemplo sencillo:

const calculator = new TextMetricsCalculator('#tu-selector-de-elemento'); 

Reemplaza `#tu-selector-de-elemento` con el selector CSS real del elemento que deseas analizar.
