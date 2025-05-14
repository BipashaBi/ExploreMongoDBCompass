// Find all products in the Electronics category
db.products.find({ category: "Electronics" });

// Find all products priced between $100 and $500
db.products.find({ price: { $gt: 100, $lt: 500 } });

// Find all in-stock products in a specific category
db.products.find({ category: "Clothing", inStock: true });

// Find products with specific tags
db.products.find({ tags: { $in: ["new", "sale"] } });
// Update a product price
db.products.updateOne(
    { _id: ObjectId("your-object-id") },
    { $set: { price: 199.99 } }
  );
  
  // Increment price by 10% for all Electronics
  db.products.updateMany(
    { category: "Electronics" },
    { $mul: { price: 1.1 } }
  );
  
  // Add a tag to all Books
  db.products.updateMany(
    { category: "Books" },
    { $push: { tags: "summer-sale" } }
  );
  db.products.aggregate([
    {
      $group: {
        _id: "$category",
        averagePrice: { $avg: "$price" },
        count: { $sum: 1 }
      }
    },
    {
      $sort: { averagePrice: -1 }
    }
  ]);
  db.users.aggregate([
    {
      $bucket: {
        groupBy: "$age",
        boundaries: [18, 25, 35, 45, 55, 65],
        default: "65+",
        output: {
          count: { $sum: 1 },
          users: { $push: "$username" }
        }
      }
    }
  ]);
      