# CLI Boilerplate

## Introducción

Este proyecto sirve como un punto de partida para la creación de aplicaciones CLI (Interfaz de Línea de Comandos) utilizando Node.js, TypeScript y Jest. Está diseñado para ser fácilmente extensible, permitiendo a los desarrolladores agregar nuevos comandos y funcionalidades con mínima configuración inicial requerida.

## Estructura de Directorios

```
cli-boilerplate/
├── src/
│ ├── commands/ **# Comandos específicos del CLI**
│ ├── utils/ **# Utilidades y funciones de ayuda**
│ └── index.ts **# Punto de entrada del CLI**
├── ** tests **/ **# Pruebas**
│ ├── commands/
│ └── utils/
├── package.json
├── tsconfig.json
├── jest.config.js
├── .gitignore
└── README.md
```

## Características

- **Fácil de Extender:** La estructura y el sistema de comandos están diseñados para ser simples de extender.
- **TypeScript para Seguridad de Tipos:** Utiliza TypeScript para mejorar la calidad del código y la seguridad de tipos.
- **Testing con Jest:** Pre-configurado con Jest para permitir pruebas unitarias y de integración.
- **Commander para la Gestión de Comandos:** Utiliza la popular librería `commander` para el manejo de comandos CLI.

## Modo de Uso del Boilerplate

Para comenzar a utilizar este boilerplate, primero clónalo en tu máquina local. A continuación, navega al directorio del proyecto y elimina el directorio `.git` para empezar con un nuevo historial de versiones.

```bash
git clone https://tu-repositorio/cli-boilerplate.git tu-nuevo-proyecto
cd tu-nuevo-proyecto
rm -rf .git
git init
```

## Modo de Instalación y Arranque

Para instalar las dependencias, ejecuta:

```bash
npm install
```

Para compilar TypeScript a JavaScript y preparar tu CLI para ser ejecutado, utiliza:

```bash
npm run build
```

Para probar localmente tu CLI sin instalarlo globalmente, puedes utilizar npm link:

```bash
npm link
```

Ahora, tu CLI estará disponible globalmente en tu máquina para fines de desarrollo. Puedes empezar a ejecutar comandos utilizando el nombre definido en tu package.json bajo el campo bin.

## Modo de Uso

Una vez instalado, puedes ejecutar tu CLI directamente desde la terminal. Por ejemplo:

```bash
play-game
```

Para más información sobre los comandos disponibles y cómo utilizarlos, puedes ejecutar:

```bash
play-game --help
```

Esto mostrará una lista de todos los comandos disponibles y sus descripciones.

## Lista de juegos

### Pokedle

Es un Wordle adaptado al mundo pokemon. En el cual inicialmente se te da una única pista, que es el número de letras. El usuario tiene 6 intentos para resolver el juego. En cada intento, cada letra que coincida en posición será dibujada en verde, y cada letra que no coincida en posición pero si esté contenida en el pokemon a adivinar sera coloreada de amarillo.

Se tienen disponibles varias opciones, que se pueden consultar con el comando 'play-game pokedle --help':

```
Options:
--types Show the types of the Pokémon
--top-gen < number > Set the top generation limit (between 1 and 9)
--number Show the pokedex number
--first-letter Show the first letter of the Pokémon name as a clue
```

---
