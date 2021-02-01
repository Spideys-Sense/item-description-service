# Bitey

> Pet supply services.

## Related Projects

  - https://github.com/Spideys-Sense/product-display-service
  - https://github.com/Spideys-Sense/item-description-service (this repo)
  - https://github.com/Spideys-Sense/customer-review-service
  - https://github.com/Spideys-Sense/proxy-server-fuhrman

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> This service allows users to:
> * View more detailed information about the item product (including some key benefits, an informational/instructional video (not included in this repo), and an overview of item data)
> * Click through tabs containing additional information about the item based on the item type ("Nutritional Info" and "Feeding Info" in this sample for pet food)
> * View additional products by the same brand as featured product in a carousel
> * Click through item carousel and view overall ratings, potential coupons, and even add to cart.
> Potential later features:
> * Add items from carousel to cart.

## Requirements

npm run build
 - to build webpack
npm start
 - to start server
npm run seed
 - to seed database

- Node 6.13.0

## Development

API routes for fetching data:

- GET /api/:id/information
```
response.data {
  "descriptionText": String,
  "keyBenefitsText": String,
  "videoUrl": String,
  "itemNumber": Number,
  "weight": Number,
  "brand": String,
  "lifestage": String,
  "foodForm": String,
  "specialDiet": String
}
```

- GET /api/scrollboxes (to be refactored using :id if time permits)
```
response.data {
  "photo": String,
  "name": String,
  "price": String,
  "starRating": Number,
  "onSale": String
}
```

### Installing Dependencies



From within the root directory:

```
npm install
```

