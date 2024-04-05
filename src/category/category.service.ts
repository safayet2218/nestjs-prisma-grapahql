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

    async createCatgory(data: CreateCategoryInput): Promise<CategoryModel> {
        try {
            const category = await this.prisma.category.create({
                data: {
                   name:data.name
               }
            }) 
            
            return category
        }catch (e) {
            console.log(e)
        }
    }

    async getCategoryDetails(id: number): Promise<CategoryModel> {
        try {
            const categoryDetails = await this.prisma.category.findFirst({
                where: {
                    id:id
                }
            })
            return categoryDetails;
        }catch (e) {
            console.log(e)
        }
    }

    async updateCategory(id: number, name: string) {
        try {
            const updateCategory = await this.prisma.category.update({
                where: {
                    id:id
                },
                data: {
                    name:name
                }
            })
            return updateCategory;
        }catch (e) {
            console.log(e)
        }
    }
    
}