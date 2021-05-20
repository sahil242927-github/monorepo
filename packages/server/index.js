const express = require('express');
const port = process.nextTick.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
	res.send('I am a backend server');
});

app.listen(port, (err) => {
	if (err) {
		console.log('Server error : ', err);
	} else {
		console.log('Listening on port :', port);
	}
});
