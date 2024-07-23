To run env database:
  1: Build docker image files;
  2: ```npx prisma generate```
  3: ```npx prisma migrage dev```
  4: ```npx ts-node prisma\seeders\insertInitialProducts.ts```
  5: ```npx ts-node prisma\seeders\test_connection.ts```