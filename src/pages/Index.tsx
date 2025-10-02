// src/pages/Index.tsx

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/contexts/CartContext";

// Import das imagens dos cookies
import cookieClassico from "@/assets/cookie-classico.png";
import cookieChocolate from "@/assets/cookie-chocolate.png";
import cookieNutella from "@/assets/cookie-nutella.png";
import cookieRedVelvet from "@/assets/cookie-red-velvet.png";
import cookieCastanha from "@/assets/cookie-castanha.png";
import cookieBananaNevada from "@/assets/cookie-banana-nevada.png";
import cookiePistache from "@/assets/cookie-pistache.png";

const products: Product[] = [
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

const KroocCookiesApp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Nossos Cookies Artesanais</h2>
          <p className="text-krooc-gray text-lg max-w-2xl mx-auto">
            Feitos com carinho e ingredientes selecionados, nossos cookies são irresistíveis!
          </p>
        </div>

        {/* Seção Cookie do Dia */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Cookie do Dia</h3>
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <ProductCard product={products[3]} />
            </div>
          </div>
        </div>

        {/* Seção Todos os Cookies */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">Todos os Sabores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-krooc-gray-light py-8 mt-16">
        <div className="container mx-auto text-center text-krooc-gray">
          <p>&copy; 2024 Krooc Cookies. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default KroocCookiesApp;