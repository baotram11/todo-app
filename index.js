const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.use((req, res, next) => {
	res.send('Todo App');
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
