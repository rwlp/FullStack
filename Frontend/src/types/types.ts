interface Description {
  id: number;
  productId: number;
  language: string;
  title: string;
  text: string[];
}

export interface Product {
  id: number;
  codeName: string;
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
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera?: string;
  zoom?: string;
  cell: string[];
  year: number;
}
