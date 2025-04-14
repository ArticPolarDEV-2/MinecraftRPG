import { defineConfig } from "eslint/config"; // Importa a função para definir a configuração do ESLint
import js from "@eslint/js"; // Importa o plugin para suporte a JavaScript
import globals from "globals"; // Importa definições de variáveis globais
import tseslint from "typescript-eslint"; // Importa o plugin para suporte a TypeScript

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"], // Aplica esta configuração a arquivos com as extensões especificadas
    plugins: { js }, // Usa o plugin para JavaScript
    extends: ["js/recommended"], // Extende as regras recomendadas para JavaScript
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"], // Aplica esta configuração aos mesmos arquivos
    languageOptions: { globals: globals.browser }, // Define variáveis globais do ambiente de navegador
  },
  tseslint.configs.recommended, // Adiciona as configurações recomendadas do TypeScript ESLint

  // ⛔ Ignora a pasta de build
  {
    ignores: ["dist/**"], // Exclui a pasta "dist" do linting
  },
]);
