# Boilerplate Frontend react-frontend.

## Instalación

Descargar [NodeJS](https://nodejs.org/es/) se sugiere utilizar la versión LTS

### Instalar paquetes requeridos
Una vez instalado Node, desde la carpeta base de este proyecto ejecutar:
```bash
npm install
```
## Diseño

El proyecto utiliza bootstrap junto con react-bootstrap, puede visualizar los componentes que tiene a disposición, junto con el sistema de grilla en [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)

Tambien puede resultarle de utilidad la documentación oficial de [Bootstrap](https://getbootstrap.com/)

## Librerías Importantes

El proyecto utiliza varias, librerías, a continuación se mencionan algunas y enlaces a su documentación:

- [React](https://reactjs.org/docs/getting-started.html)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [SWR](https://swr.vercel.app/)
- [Axios](https://axios-http.com/docs/intro)

Se recomienda visiten esta documentación pues les resolverá muchas de sus dudas.

## Herramientas de Desarrollo

El proyecto además incluye configuraciones para Eslint y Prettier, las cuales ayudan a tener un código más estructurado y mantener la consistencia entre el equipo, se recomienda instalar los siguientes plugins (Se adjuntan los links para VSCode pero existen para otros editores de código)

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Configuración

Copiar el archivo .env.example a .env y configurarlo con la URL correcta para el Backend, por defecto este es el puerto 8080
## Ejecución

```bash
npm run start
```

Ejecuta la aplicación en modo desarrollo (probablemente como se ocupara todo el semestre), se puede acceder desde

[http://localhost:3000](http://localhost:3000)


```bash
npm run build
```

Crea una `build` que es una versión optimizada para uso en producción, pero requiere la configuración de un servidor HTTP para resolver las solicitudes, puede obtener más información en [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
