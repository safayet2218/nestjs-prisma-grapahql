import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './create-category.dto';

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}
  @Query(() => String)
  async getAllCategories() {
    return this.categoryService.getCategoryies();
  }

  @Mutation(() => String)
  async createCatgory(@Args('data') data: CreateCategoryInput) {
    return await this.categoryService.createCatgory(data);
  }
}
