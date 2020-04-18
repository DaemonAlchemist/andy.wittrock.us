---
inject: true
to: src/libs/config/config.tsx
after: HYGEN_PAGE_INJECT
skip_if: <%= h.changeCase.camelCase(title) %>,
---
        <%= h.changeCase.camelCase(title) %>,