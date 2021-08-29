import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ApiModule } from './cost/cost-api.module';

function setupSwagger(app) {
  const config = new DocumentBuilder()
  .setTitle('Cost Calculation App')
  .setDescription('The Cost Calculation APP API')
  .setVersion('1.0')
  .addApiKey(
    { type: 'apiKey', name: 'Authorization', in: 'header', scheme: 'bearer', bearerFormat: 'Bearer'},
    'auth'
  )
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api-doc', app, document);

}



async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  await app.listen(3000);

  console.log('running', await app.getUrl());
}
bootstrap();
