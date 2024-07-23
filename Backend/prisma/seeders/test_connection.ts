import {PrismaClient} from '@prisma/client';

const client = new PrismaClient()

async function test() {
  try {
    const allTables = await client.product.findMany();

  console.log('Connection Success: ', allTables);
  } catch (error) {
    console.log('Error: ', error);
  } finally {
    client.$disconnect();
  }
}

test();