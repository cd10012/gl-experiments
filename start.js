const express = require('express');
express.static.mime.types['wasm'] = 'application/wasm'
const app = express();
app.use(express.static('docs')) app.listen(8000, () => console.log('Serving at http://localhost:8000!'))
