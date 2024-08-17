import { IsInt, IsString, Length, Max, IsIn, validateSync } from "class-validator";
import AppError from "../../utils/AppError";
import { Prisma } from "@prisma/client";
import { ParsedQs } from "qs";

export type Category = 'phones' | 'tablets' | 'accessories';

export class GetCatalogQueryDTORequest {
  @IsString()
  @Length(1, 10)
  sort: string;

  @IsInt()
  @Max(8)
  itemsPerPage: number;

  @IsInt()
  page: number;

  @IsIn(["phones", "tablets", "accessories"], {
    message: "Wrong Categories!"
  })
  @IsString()
  @Length(1, 20)
  category: Category

  constructor(sort: string, itemsPerPage: string, page: string, category: string) {
    this.sort = sort;
    this.itemsPerPage = parseInt(itemsPerPage);
    this.page = parseInt(page);
    this.category = category as Category;

    const errors = validateSync(this);

    if (errors.length > 0) {
      console.log(errors);
      throw new AppError("Invalid data in Request, this will be reported", 500, errors);
    }
  }

  getOrderByForPrismaSearch(): Prisma.ProductOrderByWithRelationInput {
    if (this.sort === 'newest' ) {
      return {
        year: 'desc'
      };
    } else if (this.sort === 'cheapest') {
      return {
        priceRegular: 'asc'
      }
    } else {
      return {
        priceDiscount: 'asc'
      }
    }
  }
}