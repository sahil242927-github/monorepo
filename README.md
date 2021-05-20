if you import/require any file from the server inside client, you will have to add that as dependencies inside the client/package.json file and also run the "yarn install"

Example:

server/index.js

`module.exports = () => console.log('I am from server');`

client/index.js

```
const serverFunc = require('server');
serverFunc();
```

now add server as dependencies inside client/package.json file

```
	"dependencies": {
		"server": "1.0.0"
	}
```

now run "yarn install" inside **client**

You can add a namespace to your custom package so you will know from which project the server package is coming in

@youprojectname/yourpackage

Example : @monorepo/server

now update the **client/package.json** file with the added namespace

```
"dependencies": {
		"@monorepo/server": "1.0.0"
	}
```
