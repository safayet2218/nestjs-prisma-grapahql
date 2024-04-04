import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CategoryModule } from './category/category.module';
import { PrismaService } from './libs/prisma/prisma.service';
// import { schemaDestination } from './graphql/schema.gql';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), '/graphql/schema.gql'),
      sortSchema: true,
      playground: true,
      }),
      CategoryModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
