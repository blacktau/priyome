import { themeChange } from 'theme-change'

export * from 'chessboard-element'

themeChange()

addEventListener('load', (e) => {
  document.body.addEventListener('htmx:beforeSwap', (evt) => {
    console.log('beforeSwap')
    if (evt.detail.xhr.status == 404) {
      evt.detail.shouldSwap = true
      evt.detail.isError = false
    }
  })
})
