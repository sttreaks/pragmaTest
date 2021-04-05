import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('MyAPI')
    .setDescription('My awesome API')
    .setVersion('1.0')
    .addTag('Endpoints')
    .setContact('', '', 'your_contact@mail.com')
    .addBearerAuth()
    .addServer('http://')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
