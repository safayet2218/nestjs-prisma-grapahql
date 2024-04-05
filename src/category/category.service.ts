import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/libs/prisma/prisma.service";
import { CategoryModel } from "./category.model";

export let PrismaClient: PrismaService;
interface CreateCategoryInput {
    name: string; // Add relevant properties based on your data structure
}
  
@Injectable()
export class CategoryService {
    constructor(private readonly prisma: PrismaService) { }
    
    async getCategoryies():Promise<CategoryModel[]> {
        try {
            const categoryList:CategoryModel[] = await this.prisma.category.findMany();

            return categoryList;
        } catch (e) {
            console.log(e)
        }
    }

    async createCatgory(data: CreateCategoryInput) {
        try {
            await this.prisma.category.create({
                data: {
                   name:data.name
               }
            }) 
            
            return 'done'
        }catch (e) {
            console.log(e)
        }
    }
    
}