import database from "./src/database.js";
import server from "./src/server.js";
server.listen(process.env.PORT, () =>
	console.log(`Backend corriendo en http://localhost:${process.env.PORT}`)
);
