import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const options = new DocumentBuilder()
  //   .setTitle('Iwaiter api v1')
  //   .setDescription('')
  //   .setVersion('1.0')
  //   .addTag('')
  //   .build();
  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('api', app, document);
  app.enableCors()
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
