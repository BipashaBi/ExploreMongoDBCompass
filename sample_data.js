const products = [
    {
      name: "Smartphone XS",
      price: 899.99,
      category: "Electronics",
      description: "Latest smartphone with advanced features",
      inStock: true,
      tags: ["new", "featured", "tech"],
      createdAt: new Date()
    },
    {
      name: "Laptop Pro",
      price: 1299.99,
      category: "Electronics",
      description: "High-performance laptop for professionals",
      inStock: true,
      tags: ["premium", "tech"],
      createdAt: new Date()
    }
    // ... add the rest
  ];
  db.collection("products").insertMany(products);
  