import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CategoryModel {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}
