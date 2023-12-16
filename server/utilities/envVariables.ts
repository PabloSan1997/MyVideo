import 'dotenv/config';


export const variables = {
	port: process.env.PORT ?? 3000,
	urlDatabase: process.env.URL_DATABASE,
	key: process.env.KEY_PASS as string
};