const Product = ({ idGenerator }) => {
    return ({ id, name, description, price, quantity }) => {
        if (!id)
            id = idGenerator.generateId();
        Object.freeze({
            create: () => { },
            delete: () => { },
            getById: () => { },
            getPrice: () => price,
            updatePrice: (newPrice) => {
                price = newPrice;
            },
            getCurrentQuantity: () => quantity,
            addt: () => { },
            fufilOrder: (quantity) => { },
            toJson: () => {
                return { id, name, description, price, quantity }
            },
        });
    }
}

module.exports = Product;