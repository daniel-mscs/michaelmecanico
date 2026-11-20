# Michael Mecânico Particular — Landing page

Landing page mobile-first da oficina Michael Mecânico Particular (Santa Maria/RS).
Stack: React + Vite + Tailwind CSS v4.

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera /dist pra publicar
```

## Onde editar

| O quê | Arquivo |
|---|---|
| WhatsApp, endereço, horário, textos dos serviços | `src/config.js` |
| Logo | `public/logo.webp` (+ `favicon.png`, `apple-touch-icon.png`) |
| Fotos de antes e depois | `src/components/BeforeAfter.jsx` (preencher `before`/`after` com caminhos em `public/`) |
| Avaliações (hoje são exemplos) | `src/components/Reviews.jsx` |

O agendamento é só visual: ao confirmar, monta a mensagem e abre o WhatsApp com tudo preenchido.
