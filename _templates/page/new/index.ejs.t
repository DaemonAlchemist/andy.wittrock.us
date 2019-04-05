---
to: src/components/Pages/<%= h.changeCase.pascalCase(title) %>/index.tsx
---
export { <%= h.changeCase.camelCase(title) %> } from "./<%= h.changeCase.pascalCase(title) %>.component";
