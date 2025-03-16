/* eslint-disable @typescript-eslint/no-var-requires */
const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

// Paths
const jsonPath = './public/locales/en/translation.json';
const translationsFile = fs.readFileSync(jsonPath);
const translations = JSON.parse(translationsFile);

const translationsFilePath = 'src/constants/translations.ts';

// Make sure the directory exists
const dir = path.dirname(translationsFilePath);
if (!fs.existsSync(dir)) {
  shell.mkdir('-p', dir);
}

// Convert dotted keys to UPPER_CASE format
const toUpperCase = (line) => line.toUpperCase().replace(/\./g, '_').replace(/-/g, '_');

// Generate a line in the enum for each translation key
const generateEnumLine = (key) => {
  shell.ShellString(` ${toUpperCase(key)} = "${key}",\n`).toEnd(translationsFilePath);
};

// Generate the translations enum file
const generateTranslationsEnum = () => {
  shell.ShellString('/* AUTO GENERATED FILE. DO NOT MODIFY !!! */\n\n').to(translationsFilePath);

  const keys = Object.keys(translations);

  shell.ShellString('export enum Translations {\n').toEnd(translationsFilePath);

  keys.forEach(generateEnumLine);

  shell.ShellString('}\n\n').toEnd(translationsFilePath);
  shell.ShellString('/* AUTO GENERATED FILE. DO NOT MODIFY !!! */').toEnd(translationsFilePath);
};

generateTranslationsEnum();

// Format the file with prettier
shell.exec(`npx prettier --write ${translationsFilePath}`);

console.log(`✓ Generated translations enum at ${translationsFilePath}`);
