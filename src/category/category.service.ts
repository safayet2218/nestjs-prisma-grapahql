import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/libs/prisma/prisma.service";
import { CategoryModel } from "./category.model";
import { CreateCategoryInput } from "./create-category.dto";

export let PrismaClient: PrismaService;
 
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

    async updateCategory(id: number, data: CreateCategoryInput) {
        try {
            const updateCategory = await this.prisma.category.update({
                where: {
                    id:id
                },
                data: {
                    name:data.name
                }
            })
            return updateCategory;
        }catch (e) {
            console.log(e)
        }
    }
    
}