// src/lib/products.ts

import { Product } from "@/contexts/CartContext";

// Import das imagens dos cookies
import cookieClassico from "@/assets/cookie-classico.png";
import cookieChocolate from "@/assets/cookie-chocolate.png";
import cookieNutella from "@/assets/cookie-nutella.png";
import cookieRedVelvet from "@/assets/cookie-red-velvet.png";
import cookieCastanha from "@/assets/cookie-castanha.png";
import cookieBananaNevada from "@/assets/cookie-banana-nevada.png";
import cookiePistache from "@/assets/cookie-pistache.png";

export const products: Product[] = [
  {
    id: 1,
    name: "Clássico",
    description: "Cookie clássico finalizado com gotas de chocolate",
    price: 7.0,
    image: cookieClassico,
  },
  {
    id: 2,
    name: "Chocolate",
    description: "Feito totalmente de chocolate com gotas de chocolate",
    price: 7.0,
    image: cookieChocolate,
  },
  {
    id: 3,
    name: "Clássico c/ Nutella",
    description: "Cookie clássico com recheio de Nutella",
    price: 9.0,
    image: cookieNutella,
  },
  {
    id: 4,
    name: "Red Velvet c/ Ninho",
    description: "Cookie red velvet com recheio de Ninho",
    price: 9.0,
    image: cookieRedVelvet,
  },
  {
    id: 5,
    name: "Castanha",
    description: "Cookie com pedaços de castanha de caju",
    price: 7.0,
    image: cookieCastanha,
  },
  {
    id: 6,
    name: "Banana Nevada",
    description: "Cookie de banana com um toque de canela",
    price: 9.0,
    image: cookieBananaNevada,
  },
  {
    id: 7,
    name: "Pistache",
    description: "Cookie com pedaços de pistache",
    price: 10.0,
    image: cookiePistache,
  },
];