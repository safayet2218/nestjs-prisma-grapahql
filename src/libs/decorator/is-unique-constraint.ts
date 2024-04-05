import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({name:'IsUniqueConstraint', async:true})
export class IsUniqueConstraint implements ValidatorConstraintInterface{
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        return false;
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        throw new Error('sfsjkfskjfd')
    }
}