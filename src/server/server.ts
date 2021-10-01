
import { app } from "../app";

const HOST = process.env.API_HOST ?? 'http://localhost';
const PORT = process.env.API_PORT ?? 3000;

app.listen(PORT, () => console.log((HOST + ':' + PORT).yellow))