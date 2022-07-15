import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const settings = dotenv.parse(fs.readFileSync(filePath));
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
