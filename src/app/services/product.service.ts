import { Injectable } from '@angular/core';
import { Product } from '../models/product-model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
    products: Product[] = [
        {
            title: 'Pin Klee Genshin Impact',
            description: 'Pin de bonne qualité en émail, il représente Klee de Genshin Impact.',
            img: "../assets/Klee.png",
            price: 10,
            sold: 0,
            stock: 15
        },
        {
            title: 'Pin Klee Genshin Impact 2',
            description: 'Pin de bonne qualité en émail, il représente Klee de Genshin Impact.',
            img: "../assets/Klee.png",
            price: 15,
            sold: 0,
            stock: 20
        },
        {
            title: 'Pin Klee Genshin Impact 3',
            description: 'Pin de bonne qualité en émail, il représente Klee de Genshin Impact.',
            img: "../assets/Klee.png",
            price: 5,
            sold: 0,
            stock: 30
        }
    ]
}