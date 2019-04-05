---
inject: true
to: src/libs/config/config.ts
at_line: 2
skip_if: <%= h.changeCase.camelCase(title) %>
---
import {<%= h.changeCase.camelCase(title) %>} from '../../components/Pages/<%= h.changeCase.pascalCase(title) %>';