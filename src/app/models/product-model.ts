export class Product {
    title: string;
    description: string;
    img: string;
    price: number;
    sold: number;
    stock: number;

    constructor(title: string, description: string, img: string, price: number, sold: number, stock: number) {
        this.title = title;
        this.description = description;
        this.img = img
        this.price = price;
        this.sold = sold;
        this.stock = stock;
    }
}