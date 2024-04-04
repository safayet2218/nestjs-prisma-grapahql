import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/libs/prisma/prisma.service";

export let PrismaClient: PrismaService;
interface CreateCategoryInput {
    name: string; // Add relevant properties based on your data structure
}
  
@Injectable()
export class CategoryService {
    constructor(private readonly prisma: PrismaService) { }
    
    async getCategoryies() {
        try {
            const categoryList =await this.prisma.category.findFirst();

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