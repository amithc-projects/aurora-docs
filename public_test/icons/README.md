# Icons

Put SVGs in folders under `static/icons/<iconset>/`.

Example:
- `static/icons/iconset1/tick.svg`
- `static/icons/iconset1/cross.svg`

Hugo will generate:
- `/icons/iconset1/iconset.css`
- `/iconsets/iconset1/` docs page (matrix preview)

Conventions:
- File name becomes the modifier class: `.icon--tick`
- Use `<span class="icon icon--tick"></span>`
- Colour is inherited (currentColor) via mask technique.
