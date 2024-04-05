import { Field, HideField, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ResponseModel {
  @Field({ description: 'success' })
  success: boolean;

  @Field({ description: 'message', nullable: true })
  message?: string;

  @HideField()
  messages?: string[];

  @HideField()
  data?: object;

  @Field({ description: 'custom code' })
  code?: number;
}