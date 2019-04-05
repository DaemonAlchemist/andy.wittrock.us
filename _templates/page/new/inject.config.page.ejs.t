---
inject: true
to: src/libs/config/config.ts
after: HYGEN_PAGE_INJECT
skip_if: <%= h.changeCase.camelCase(title) %>,
---
        <%= h.changeCase.camelCase(title) %>,