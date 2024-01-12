const IdGenerator = require('../infrasture/id-generator')();
const ProductFactory = require('./product')({ idGenerator: IdGenerator });

const ProductController = () => {
    return Object.freeze({
        create: (httpRequest) => {
            httpRequest = httpRequest;
            const { body } = httpRequest;
            const product = ProductFactory(body);
            const productJson = product.toJson();
            return new Promise((resolve, reject) => {
                resolve(productJson);
            })
        },
        list: () => new Promise((resolve,reject)=>{
            resolve([
                { id: IdGenerator.generateId(), name: 'Big Pen', description: 'This is a banana', price: 4.5, quantity: 200 },
                { id: IdGenerator.generateId(), name: 'Small Notebook', description: 'Compact notebook for quick notes', price: 2.0, quantity: 150 },
                { id: IdGenerator.generateId(), name: 'Laptop Stand', description: 'Adjustable stand for laptops', price: 25.99, quantity: 50 },
                { id: IdGenerator.generateId(), name: 'Wireless Mouse', description: 'High-precision ergonomic mouse', price: 14.99, quantity: 100 },
                { id: IdGenerator.generateId(), name: 'Headphones', description: 'Over-ear headphones with noise cancellation', price: 49.95, quantity: 75 },
                { id: IdGenerator.generateId(), name: 'Smartphone', description: 'Latest model with advanced features', price: 699.99, quantity: 30 },
                { id: IdGenerator.generateId(), name: 'Coffee Maker', description: 'Automatic drip coffee maker', price: 34.5, quantity: 40 },
                { id: IdGenerator.generateId(), name: 'Fitness Tracker', description: 'Tracks steps, heart rate, and sleep', price: 79.99, quantity: 60 },
                { id: IdGenerator.generateId(), name: 'Desk Lamp', description: 'Adjustable LED desk lamp', price: 18.75, quantity: 25 },
                { id: IdGenerator.generateId(), name: 'Backpack', description: 'Durable backpack with multiple compartments', price: 29.95, quantity: 50 },
                { id: IdGenerator.generateId(), name: 'Bluetooth Speaker', description: 'Portable speaker with wireless connectivity', price: 39.99, quantity: 90 },
                { id: IdGenerator.generateId(), name: 'External Hard Drive', description: '1TB USB 3.0 external hard drive', price: 59.95, quantity: 35 },
                { id: IdGenerator.generateId(), name: 'Gaming Mouse', description: 'RGB gaming mouse with customizable buttons', price: 45.0, quantity: 55 },
                { id: IdGenerator.generateId(), name: 'Plant Pot', description: 'Decorative ceramic plant pot', price: 12.99, quantity: 80 },
                { id: IdGenerator.generateId(), name: 'Smartwatch', description: 'Water-resistant smartwatch with health monitoring', price: 129.99, quantity: 20 },
                { id: IdGenerator.generateId(), name: 'HDMI Cable', description: 'High-speed HDMI cable for 4K resolution', price: 9.5, quantity: 120 },
                { id: IdGenerator.generateId(), name: 'USB-C Charger', description: 'Fast-charging USB-C wall charger', price: 19.99, quantity: 65 },
                { id: IdGenerator.generateId(), name: 'Sunglasses', description: 'Polarized sunglasses with UV protection', price: 29.95, quantity: 45 },
                { id: IdGenerator.generateId(), name: 'Gaming Keyboard', description: 'Mechanical gaming keyboard with customizable RGB lighting', price: 79.0, quantity: 30 },
                { id: IdGenerator.generateId(), name: 'Yoga Mat', description: 'Non-slip yoga mat for home workouts', price: 24.5, quantity: 70 },
                { id: IdGenerator.generateId(), name: 'Portable Charger', description: '10000mAh portable charger with dual USB ports', price: 29.99, quantity: 40 },
                { id: IdGenerator.generateId(), name: 'Wireless Earbuds', description: 'Bluetooth wireless earbuds with noise isolation', price: 54.95, quantity: 50 },
                { id: IdGenerator.generateId(), name: 'Travel Pillow', description: 'Memory foam travel pillow for neck support', price: 15.0, quantity: 30 },
                { id: IdGenerator.generateId(), name: 'Camping Lantern', description: 'LED camping lantern with adjustable brightness', price: 19.99, quantity: 25 },
                { id: IdGenerator.generateId(), name: 'Rain Jacket', description: 'Waterproof and breathable rain jacket', price: 39.95, quantity: 15 },
                { id: IdGenerator.generateId(), name: 'Wireless Charging Pad', description: 'Qi-compatible wireless charging pad', price: 24.99, quantity: 60 },
                { id: IdGenerator.generateId(), name: 'Resistance Bands', description: 'Set of 5 resistance bands for home workouts', price: 14.5, quantity: 70 },
                { id: IdGenerator.generateId(), name: 'External Webcam', description: 'HD external webcam with built-in microphone', price: 49.0, quantity: 20 },
                { id: IdGenerator.generateId(), name: 'Travel Backpack', description: 'Compact and lightweight travel backpack', price: 34.99, quantity: 40 },
                { id: IdGenerator.generateId(), name: 'Water Bottle', description: 'BPA-free reusable water bottle', price: 9.99, quantity: 100 },
                { id: IdGenerator.generateId(), name: 'Sleeping Bag', description: 'All-season sleeping bag for camping', price: 54.0, quantity: 25 },
                { id: IdGenerator.generateId(), name: 'Bluetooth Headset', description: 'Bluetooth headset with noise-canceling technology', price: 69.95, quantity: 30 },
                { id: IdGenerator.generateId(), name: 'Gaming Chair', description: 'Ergonomic gaming chair with adjustable armrests', price: 129.0, quantity: 15 },
                { id: IdGenerator.generateId(), name: 'USB Flash Drive', description: '64GB USB 3.0 flash drive for data storage', price: 18.0, quantity: 50 },
                { id: IdGenerator.generateId(), name: 'Sunscreen Lotion', description: 'SPF 50 sunscreen lotion for sun protection', price: 8.99, quantity: 80 },
                { id: IdGenerator.generateId(), name: 'Cordless Drill', description: '18V cordless drill with keyless chuck', price: 89.99, quantity: 10 },
                { id: IdGenerator.generateId(), name: 'Wall Clock', description: 'Modern wall clock with silent quartz movement', price: 24.95, quantity: 40 },
                { id: IdGenerator.generateId(), name: 'Travel Umbrella', description: 'Compact travel umbrella with automatic open/close', price: 15.5, quantity: 60 },
                { id: IdGenerator.generateId(), name: 'Indoor Plants', description: 'Assortment of indoor plants for home decor', price: 29.99, quantity: 30 },
            ])
        })
    });
}

module.exports = ProductController;