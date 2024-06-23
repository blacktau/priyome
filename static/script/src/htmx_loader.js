window.htmx = require('htmx.org')
window.htmx.config.responseHandling = [
  { code: "404", swap: true, error: false }
]
