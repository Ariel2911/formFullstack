import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'formFullstack-server',
      version: '1.0.0',
    },
  },
  apis: ['./src/app.ts'],
};

const swaggerSpecification = swaggerJSDoc(options);

export default swaggerSpecification;
