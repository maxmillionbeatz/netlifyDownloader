// const https = require('https');
// const fs = require('fs');
import fs from 'fs';
import https from 'https';
const url = 'https://api.lofty.ai/prod/properties/v2/get?hidden=true&invalid=true';
const file = fs.createWriteStream('static/loftyPropsss.json');

export function HTTPDL() {
	https.get(url, (response) => {
		response.pipe(file);
	})
}
