import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './create-category.dto';
import { CategoryModel } from './category.model';

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}
  
  @Query(() => [CategoryModel])
  async getAllCategories(): Promise<CategoryModel[]> {
    return await this.categoryService.getCategoryies();
  }

  @Mutation(() => CategoryModel)
  async createCatgory(@Args('data') data: CreateCategoryInput): Promise<CategoryModel> {
    return await this.categoryService.createCatgory(data);
  }

  @Mutation(() => CategoryModel)
  async getCategoryDetails(@Args('id') id: number): Promise<CategoryModel> {
    return await this.categoryService.getCategoryDetails(id);
  }

  @Mutation(() => CategoryModel)
  async updateCategory(@Args('id') id: number, @Args('data') data: CreateCategoryInput)
  {
    return await this.categoryService.updateCategory(id, data);
  }
}
