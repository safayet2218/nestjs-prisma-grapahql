import { Field, InputType, Int } from "@nestjs/graphql";
import { PrismaClient } from "@prisma/client";
import { Unique } from "src/libs/decorator/unique.decorator";

@InputType()
export class CreateCategoryInput{
    
    @Unique({tableName:'category'})
    @Field(() => String)
    name: string
}

async function validateEmailExists(name: string) {
    // Use your Prisma service to check if email exists in the database
    const prisma = new PrismaClient();
    const user = await prisma.category.findFirst({ where: { name:name } });
    return !user; // Return true if email doesn't exist, false otherwise
  }