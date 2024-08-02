import React, { useEffect, useState } from 'react';
import StyledCatalog from './StyledCatalog.ts';
import SelectorBox from '../../components/SelectorBox/SelectorBox.tsx';
import { Product } from '../../types/types.ts';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import Paginator from '../../components/Paginator/Paginator.tsx';
import { useLocation, useParams } from 'react-router-dom';

const prod = [
  {
    "id": 1,
    "codeName": "apple-watch-series-3-38mm-space-gray",
    "category": "accessories",
    "name": "Apple Watch Series 3 38mm Space Gray",
    "capacityAvailable": ["38mm", "42mm"],
    "capacity": "38mm",
    "priceRegular": 199,
    "priceDiscount": 169,
    "colorsAvailable": ["space gray", "silver", "gold"],
    "color": "space gray",
    "images": [
      "img/accessories/apple-watch-series-3/space-gray/00.webp",
      "img/accessories/apple-watch-series-3/space-gray/01.webp",
      "img/accessories/apple-watch-series-3/space-gray/02.webp"
    ],
    "description": [
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Monitor your health",
        "text": [
          "The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stay connected on the go",
        "text": [
          "With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stream your favorite music",
        "text": [
          "With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations."
        ]
      }
    ],
    "screen": "1.3' OLED",
    "resolution": "272x340",
    "processor": "Apple S3",
    "ram": "768MB",
    "cell": ["Wi-Fi", "Bluetooth", "LTE"],
    "image": "img/accessories/apple-watch-series-3/space-gray/00.webp",
    "year": 2017
  },
  {
    "id": 1,
    "codeName": "apple-watch-series-3-38mm-space-gray",
    "category": "accessories",
    "name": "Apple Watch Series 3 38mm Space Gray",
    "capacityAvailable": ["38mm", "42mm"],
    "capacity": "38mm",
    "priceRegular": 199,
    "priceDiscount": 169,
    "colorsAvailable": ["space gray", "silver", "gold"],
    "color": "space gray",
    "images": [
      "img/accessories/apple-watch-series-3/space-gray/00.webp",
      "img/accessories/apple-watch-series-3/space-gray/01.webp",
      "img/accessories/apple-watch-series-3/space-gray/02.webp"
    ],
    "description": [
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Monitor your health",
        "text": [
          "The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stay connected on the go",
        "text": [
          "With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stream your favorite music",
        "text": [
          "With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations."
        ]
      }
    ],
    "screen": "1.3' OLED",
    "resolution": "272x340",
    "processor": "Apple S3",
    "ram": "768MB",
    "cell": ["Wi-Fi", "Bluetooth", "LTE"],
    "image": "img/accessories/apple-watch-series-3/space-gray/00.webp",
    "year": 2017
  },
  {
    "id": 1,
    "codeName": "apple-watch-series-3-38mm-space-gray",
    "category": "accessories",
    "name": "Apple Watch Series 3 38mm Space Gray",
    "capacityAvailable": ["38mm", "42mm"],
    "capacity": "38mm",
    "priceRegular": 199,
    "priceDiscount": 169,
    "colorsAvailable": ["space gray", "silver", "gold"],
    "color": "space gray",
    "images": [
      "img/accessories/apple-watch-series-3/space-gray/00.webp",
      "img/accessories/apple-watch-series-3/space-gray/01.webp",
      "img/accessories/apple-watch-series-3/space-gray/02.webp"
    ],
    "description": [
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Monitor your health",
        "text": [
          "The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stay connected on the go",
        "text": [
          "With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stream your favorite music",
        "text": [
          "With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations."
        ]
      }
    ],
    "screen": "1.3' OLED",
    "resolution": "272x340",
    "processor": "Apple S3",
    "ram": "768MB",
    "cell": ["Wi-Fi", "Bluetooth", "LTE"],
    "image": "img/accessories/apple-watch-series-3/space-gray/00.webp",
    "year": 2017
  },
  {
    "id": 1,
    "codeName": "apple-watch-series-3-38mm-space-gray",
    "category": "accessories",
    "name": "Apple Watch Series 3 38mm Space Gray",
    "capacityAvailable": ["38mm", "42mm"],
    "capacity": "38mm",
    "priceRegular": 199,
    "priceDiscount": 169,
    "colorsAvailable": ["space gray", "silver", "gold"],
    "color": "space gray",
    "images": [
      "img/accessories/apple-watch-series-3/space-gray/00.webp",
      "img/accessories/apple-watch-series-3/space-gray/01.webp",
      "img/accessories/apple-watch-series-3/space-gray/02.webp"
    ],
    "description": [
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Monitor your health",
        "text": [
          "The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stay connected on the go",
        "text": [
          "With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stream your favorite music",
        "text": [
          "With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations."
        ]
      }
    ],
    "screen": "1.3' OLED",
    "resolution": "272x340",
    "processor": "Apple S3",
    "ram": "768MB",
    "cell": ["Wi-Fi", "Bluetooth", "LTE"],
    "image": "img/accessories/apple-watch-series-3/space-gray/00.webp",
    "year": 2017
  },
  {
    "id": 1,
    "codeName": "apple-watch-series-3-38mm-space-gray",
    "category": "accessories",
    "name": "Apple Watch Series 3 38mm Space Gray",
    "capacityAvailable": ["38mm", "42mm"],
    "capacity": "38mm",
    "priceRegular": 199,
    "priceDiscount": 169,
    "colorsAvailable": ["space gray", "silver", "gold"],
    "color": "space gray",
    "images": [
      "img/accessories/apple-watch-series-3/space-gray/00.webp",
      "img/accessories/apple-watch-series-3/space-gray/01.webp",
      "img/accessories/apple-watch-series-3/space-gray/02.webp"
    ],
    "description": [
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Monitor your health",
        "text": [
          "The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stay connected on the go",
        "text": [
          "With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stream your favorite music",
        "text": [
          "With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations."
        ]
      }
    ],
    "screen": "1.3' OLED",
    "resolution": "272x340",
    "processor": "Apple S3",
    "ram": "768MB",
    "cell": ["Wi-Fi", "Bluetooth", "LTE"],
    "image": "img/accessories/apple-watch-series-3/space-gray/00.webp",
    "year": 2017
  },
  {
    "id": 1,
    "codeName": "apple-watch-series-3-38mm-space-gray",
    "category": "accessories",
    "name": "Apple Watch Series 3 38mm Space Gray",
    "capacityAvailable": ["38mm", "42mm"],
    "capacity": "38mm",
    "priceRegular": 199,
    "priceDiscount": 169,
    "colorsAvailable": ["space gray", "silver", "gold"],
    "color": "space gray",
    "images": [
      "img/accessories/apple-watch-series-3/space-gray/00.webp",
      "img/accessories/apple-watch-series-3/space-gray/01.webp",
      "img/accessories/apple-watch-series-3/space-gray/02.webp"
    ],
    "description": [
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Monitor your health",
        "text": [
          "The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stay connected on the go",
        "text": [
          "With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stream your favorite music",
        "text": [
          "With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations."
        ]
      }
    ],
    "screen": "1.3' OLED",
    "resolution": "272x340",
    "processor": "Apple S3",
    "ram": "768MB",
    "cell": ["Wi-Fi", "Bluetooth", "LTE"],
    "image": "img/accessories/apple-watch-series-3/space-gray/00.webp",
    "year": 2017
  },
  {
    "id": 1,
    "codeName": "apple-watch-series-3-38mm-space-gray",
    "category": "accessories",
    "name": "Apple Watch Series 3 38mm Space Gray",
    "capacityAvailable": ["38mm", "42mm"],
    "capacity": "38mm",
    "priceRegular": 199,
    "priceDiscount": 169,
    "colorsAvailable": ["space gray", "silver", "gold"],
    "color": "space gray",
    "images": [
      "img/accessories/apple-watch-series-3/space-gray/00.webp",
      "img/accessories/apple-watch-series-3/space-gray/01.webp",
      "img/accessories/apple-watch-series-3/space-gray/02.webp"
    ],
    "description": [
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Monitor your health",
        "text": [
          "The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stay connected on the go",
        "text": [
          "With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stream your favorite music",
        "text": [
          "With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations."
        ]
      }
    ],
    "screen": "1.3' OLED",
    "resolution": "272x340",
    "processor": "Apple S3",
    "ram": "768MB",
    "cell": ["Wi-Fi", "Bluetooth", "LTE"],
    "image": "img/accessories/apple-watch-series-3/space-gray/00.webp",
    "year": 2017
  },
  {
    "id": 1,
    "codeName": "apple-watch-series-3-38mm-space-gray",
    "category": "accessories",
    "name": "Apple Watch Series 3 38mm Space Gray",
    "capacityAvailable": ["38mm", "42mm"],
    "capacity": "38mm",
    "priceRegular": 199,
    "priceDiscount": 169,
    "colorsAvailable": ["space gray", "silver", "gold"],
    "color": "space gray",
    "images": [
      "img/accessories/apple-watch-series-3/space-gray/00.webp",
      "img/accessories/apple-watch-series-3/space-gray/01.webp",
      "img/accessories/apple-watch-series-3/space-gray/02.webp"
    ],
    "description": [
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Monitor your health",
        "text": [
          "The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stay connected on the go",
        "text": [
          "With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stream your favorite music",
        "text": [
          "With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations."
        ]
      }
    ],
    "screen": "1.3' OLED",
    "resolution": "272x340",
    "processor": "Apple S3",
    "ram": "768MB",
    "cell": ["Wi-Fi", "Bluetooth", "LTE"],
    "image": "img/accessories/apple-watch-series-3/space-gray/00.webp",
    "year": 2017
  },
  {
    "id": 1,
    "codeName": "apple-watch-series-3-38mm-space-gray",
    "category": "accessories",
    "name": "Apple Watch Series 3 38mm Space Gray",
    "capacityAvailable": ["38mm", "42mm"],
    "capacity": "38mm",
    "priceRegular": 199,
    "priceDiscount": 169,
    "colorsAvailable": ["space gray", "silver", "gold"],
    "color": "space gray",
    "images": [
      "img/accessories/apple-watch-series-3/space-gray/00.webp",
      "img/accessories/apple-watch-series-3/space-gray/01.webp",
      "img/accessories/apple-watch-series-3/space-gray/02.webp"
    ],
    "description": [
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Monitor your health",
        "text": [
          "The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stay connected on the go",
        "text": [
          "With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stream your favorite music",
        "text": [
          "With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations."
        ]
      }
    ],
    "screen": "1.3' OLED",
    "resolution": "272x340",
    "processor": "Apple S3",
    "ram": "768MB",
    "cell": ["Wi-Fi", "Bluetooth", "LTE"],
    "image": "img/accessories/apple-watch-series-3/space-gray/00.webp",
    "year": 2017
  },
  {
    "id": 1,
    "codeName": "apple-watch-series-3-38mm-space-gray",
    "category": "accessories",
    "name": "Apple Watch Series 3 38mm Space Gray",
    "capacityAvailable": ["38mm", "42mm"],
    "capacity": "38mm",
    "priceRegular": 199,
    "priceDiscount": 169,
    "colorsAvailable": ["space gray", "silver", "gold"],
    "color": "space gray",
    "images": [
      "img/accessories/apple-watch-series-3/space-gray/00.webp",
      "img/accessories/apple-watch-series-3/space-gray/01.webp",
      "img/accessories/apple-watch-series-3/space-gray/02.webp"
    ],
    "description": [
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Monitor your health",
        "text": [
          "The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stay connected on the go",
        "text": [
          "With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stream your favorite music",
        "text": [
          "With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations."
        ]
      }
    ],
    "screen": "1.3' OLED",
    "resolution": "272x340",
    "processor": "Apple S3",
    "ram": "768MB",
    "cell": ["Wi-Fi", "Bluetooth", "LTE"],
    "image": "img/accessories/apple-watch-series-3/space-gray/00.webp",
    "year": 2017
  },
  {
    "id": 1,
    "codeName": "apple-watch-series-3-38mm-space-gray",
    "category": "accessories",
    "name": "Apple Watch Series 3 38mm Space Gray",
    "capacityAvailable": ["38mm", "42mm"],
    "capacity": "38mm",
    "priceRegular": 199,
    "priceDiscount": 169,
    "colorsAvailable": ["space gray", "silver", "gold"],
    "color": "space gray",
    "images": [
      "img/accessories/apple-watch-series-3/space-gray/00.webp",
      "img/accessories/apple-watch-series-3/space-gray/01.webp",
      "img/accessories/apple-watch-series-3/space-gray/02.webp"
    ],
    "description": [
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Monitor your health",
        "text": [
          "The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stay connected on the go",
        "text": [
          "With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stream your favorite music",
        "text": [
          "With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations."
        ]
      }
    ],
    "screen": "1.3' OLED",
    "resolution": "272x340",
    "processor": "Apple S3",
    "ram": "768MB",
    "cell": ["Wi-Fi", "Bluetooth", "LTE"],
    "image": "img/accessories/apple-watch-series-3/space-gray/00.webp",
    "year": 2017
  },
  {
    "id": 1,
    "codeName": "apple-watch-series-3-38mm-space-gray",
    "category": "accessories",
    "name": "Apple Watch Series 3 38mm Space Gray",
    "capacityAvailable": ["38mm", "42mm"],
    "capacity": "38mm",
    "priceRegular": 199,
    "priceDiscount": 169,
    "colorsAvailable": ["space gray", "silver", "gold"],
    "color": "space gray",
    "images": [
      "img/accessories/apple-watch-series-3/space-gray/00.webp",
      "img/accessories/apple-watch-series-3/space-gray/01.webp",
      "img/accessories/apple-watch-series-3/space-gray/02.webp"
    ],
    "description": [
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Monitor your health",
        "text": [
          "The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stay connected on the go",
        "text": [
          "With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stream your favorite music",
        "text": [
          "With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations."
        ]
      }
    ],
    "screen": "1.3' OLED",
    "resolution": "272x340",
    "processor": "Apple S3",
    "ram": "768MB",
    "cell": ["Wi-Fi", "Bluetooth", "LTE"],
    "image": "img/accessories/apple-watch-series-3/space-gray/00.webp",
    "year": 2017
  },
  {
    "id": 1,
    "codeName": "apple-watch-series-3-38mm-space-gray",
    "category": "accessories",
    "name": "Apple Watch Series 3 38mm Space Gray",
    "capacityAvailable": ["38mm", "42mm"],
    "capacity": "38mm",
    "priceRegular": 199,
    "priceDiscount": 169,
    "colorsAvailable": ["space gray", "silver", "gold"],
    "color": "space gray",
    "images": [
      "img/accessories/apple-watch-series-3/space-gray/00.webp",
      "img/accessories/apple-watch-series-3/space-gray/01.webp",
      "img/accessories/apple-watch-series-3/space-gray/02.webp"
    ],
    "description": [
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Monitor your health",
        "text": [
          "The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stay connected on the go",
        "text": [
          "With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stream your favorite music",
        "text": [
          "With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations."
        ]
      }
    ],
    "screen": "1.3' OLED",
    "resolution": "272x340",
    "processor": "Apple S3",
    "ram": "768MB",
    "cell": ["Wi-Fi", "Bluetooth", "LTE"],
    "image": "img/accessories/apple-watch-series-3/space-gray/00.webp",
    "year": 2017
  },
  {
    "id": 1,
    "codeName": "apple-watch-series-3-38mm-space-gray",
    "category": "accessories",
    "name": "Apple Watch Series 3 38mm Space Gray",
    "capacityAvailable": ["38mm", "42mm"],
    "capacity": "38mm",
    "priceRegular": 199,
    "priceDiscount": 169,
    "colorsAvailable": ["space gray", "silver", "gold"],
    "color": "space gray",
    "images": [
      "img/accessories/apple-watch-series-3/space-gray/00.webp",
      "img/accessories/apple-watch-series-3/space-gray/01.webp",
      "img/accessories/apple-watch-series-3/space-gray/02.webp"
    ],
    "description": [
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Monitor your health",
        "text": [
          "The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stay connected on the go",
        "text": [
          "With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free."
        ]
      },
      {
        id: 3,
        productId: 1,
        language: 'en',
        "title": "Stream your favorite music",
        "text": [
          "With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations."
        ]
      }
    ],
    "screen": "1.3' OLED",
    "resolution": "272x340",
    "processor": "Apple S3",
    "ram": "768MB",
    "cell": ["Wi-Fi", "Bluetooth", "LTE"],
    "image": "img/accessories/apple-watch-series-3/space-gray/00.webp",
    "year": 2017
  },

]

function Catalog(): React.ReactNode {
  const { category }  = useParams();
  const location = useLocation();
  const params =  new URLSearchParams(location.search);
  const [products, setProducts] = useState<Product[] | undefined[]>(new Array(parseInt(params.get('itemsPerPage')!)).fill(undefined));

  useEffect(() => {
    const search = new URLSearchParams(location.search);
    setProducts(new Array(parseInt(search.get('itemsPerPage')!)).fill(undefined))
    setTimeout(() => {
      setProducts(prod.slice(0, parseInt(search.get('itemsPerPage')!)))
    }, 1500);
  }, [location])

  return (
    <StyledCatalog className='catalog'>
      <h1 className='catalog__title'>Mobile phones</h1>

      <div className='catalog__filters'>
        <SelectorBox type="sort-by" />
        <SelectorBox type="items-qtd" />
      </div>

      <div className='catalog__container'>
        {products.map((product) => {
          return  (<ProductCard product={product} />);
        })}
      </div>
      
      <Paginator limit={32}/>

    </StyledCatalog>
  );
}

export default Catalog;
