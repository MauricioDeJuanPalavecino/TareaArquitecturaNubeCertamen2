Project code for tutorial on integrating MongoDB into Node.js application using Mongoose: https://www.digitalocean.com/community/tutorials/how-to-integrate-mongodb-with-your-node-application

# Como realizar la ejecución correcta del levantamiento del trabajo
1. Se debe crear un archivo .env con los siguientes datos:
- MONGO_USERNAME=sammy
- MONGO_PASSWORD=your_password
- MONGO_PORT=27017
- MONGO_DB=sharkinfo
2. Se debe crear un archivo .dockerignore con lo siguiente:
- node_modules
- npm-debug.log
- Dockerfile
- .dockerignore
- .git
- README.md
- .gitignore
- .env
3. el archivo wait-for.sh debe borrarse y volverse a pegar creando otro archivo con el mismo nombre en la misma carpeta donde esta
4. Una vez hecho esto, se debe usar el comando "chmod +x wait-for.sh"
5. Luego nos vamos a la carpeta en donde esta node_project y ejecutamos el comando "docker-compose up -d"
6. Ponemos nuestra ip de esta forma http://{nuestra_ip}  (Recordar que {nuestra_ip} es reemplazada por la que nosotros tenemos de forma local)
7. Deberiamos ver el trabajo correctamente creado.
