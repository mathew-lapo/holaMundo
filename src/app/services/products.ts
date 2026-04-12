import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
}

@Injectable({
  providedIn: 'root',
})

export class Products {
  private products: Product[] = [
    {
    id: 1,
    name: 'Attack Shark Keyboard',
    price: 89.99,
    description: 'Mechanical gaming keyboard with RGB lighting',
    imgUrl: '/img/AttackSharkKeyboard.png'
    },
    {
      id: 2,
      name: 'Attack Shark Mouse',
      price: 49.99,
      description: 'Lightweight gaming mouse with high precision sensor',
      imgUrl: '/img/AttackSharkMouse.png'
    },
    {
      id: 3,
      name: 'Razer Huntsman V3 Pro',
      price: 199.99,
      description: 'Optical mechanical keyboard for ultra-fast response',
      imgUrl: '/img/HuntsmanV3Pro.png'
    },
    {
      id: 4,
      name: 'HyperX Wireless Headset',
      price: 129.99,
      description: 'Wireless gaming headset with immersive sound',
      imgUrl: '/img/HyperXWireless.png'
    },
    {
      id: 5,
      name: 'Logitech Superlight',
      price: 149.99,
      description: 'Ultra-lightweight wireless gaming mouse',
      imgUrl: '/img/LogitechSuperlight.png'
    },
    {
      id: 6,
      name: 'Razer Viper V3 Pro',
      price: 159.99,
      description: 'Esports-grade wireless mouse with precision tracking',
      imgUrl: '/img/RazerViperV3Pro.png'
    },
    {
      id: 7,
      name: 'Wooting 60HE',
      price: 174.99,
      description: 'Analog mechanical keyboard with rapid trigger technology',
      imgUrl: '/img/Wooting60He.png'
    }
  ]

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
