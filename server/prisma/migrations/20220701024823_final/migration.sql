-- DropForeignKey
ALTER TABLE "Dish" DROP CONSTRAINT "Dish_categoryId_fkey";

-- AddForeignKey
ALTER TABLE "Dish" ADD CONSTRAINT "Dish_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
