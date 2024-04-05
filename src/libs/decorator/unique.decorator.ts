import { BadRequestException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { registerDecorator, ValidationOptions } from 'class-validator';

import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

export type IsUniqueConstraintInput = {
  tableName: string;
};
export function Unique(
  options: IsUniqueConstraintInput,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'is-unique',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [options],
      validator: IsUniqueConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'IsUniqueConstraint', async: true })
export class IsUniqueConstraint implements ValidatorConstraintInterface {
  async validate(
    value: any,
    args?: ValidationArguments,
  ): Promise<boolean> {
    const { tableName }: IsUniqueConstraintInput = args.constraints[0];
    const column = args.property;
    const prisma = new PrismaClient();

    const data = await prisma[tableName].findFirst({
      where: {
      [column]:value
    }})

    return !data;
  }

  defaultMessage(args?: ValidationArguments): string {
    // throw new BadRequestException('already exists.');
    return `${args.property} ` + 'already exists.';
    throw new Error('fgkdfg')
  }
}
