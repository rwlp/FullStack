import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

interface DescriptionSeed {
  title: string;
  text: string[];
  language: String;
}

interface ProductSeed {
  category: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  image: string;
  description: DescriptionSeed[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera?: string;
  zoom?: string;
  cell: string[];
  year: number;
}

const client = new PrismaClient();

async function seeding() {
  try {
    const products = JSON.parse(
      fs.readFileSync(path.join(__dirname, "initial_products.json"), "utf-8"),
    );

    for (const product of products) {
      const { description, ...productData } = product;

      const createdProduct = await client.product.create({
        data: {
          ...productData,
          description: {
            createMany: {
              data: description.map((desc: DescriptionSeed) => ({
                title: desc.title,
                text: { set: desc.text },
                language: "english"
              })),
            },
          },
        },
      });

      console.log(`Product Inserted: ${createdProduct.name}`);
    }

    console.log("Insert Finished!");
  } catch (error) {
    console.error("Error: ", error);
  } finally {
    await client.$disconnect();
  }
}

seeding();