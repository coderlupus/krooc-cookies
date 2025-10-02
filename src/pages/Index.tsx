// src/pages/Index.tsx

import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/contexts/CartContext'; // Não precisamos mais do CartProvider aqui

// Import das imagens com a extensão correta
import cookieClassico from '@/assets/cookie-classico.png';
import cookieChocolate from '@/assets/cookie-chocolate.png';
import cookieNutella from '@/assets/cookie-nutella.png';
import cookieRedVelvet from '@/assets/cookie-red-velvet.png';

const products: Product[] = [
  {
    id: 1,
    name: 'Clássico',
    description: 'Cookie clássico finalizado com gotas de chocolate',
    price: 7.00,
    image: cookieClassico,
  },
  {
    id: 2,
    name: 'Chocolate',
    description: 'Feito totalmente de chocolate com gotas de chocolate',
    price: 7.00,
    image: cookieChocolate,
  },
  {
    id: 3,
    name: 'Clássico c/ Nutella',
    description: 'Cookie clássico com recheio de Nutella',
    price: 9.00,
    image: cookieNutella,
  },
  {
    id: 4,
    name: 'Red Velvet c/ Ninho',
    description: 'Cookie red velvet com recheio de Ninho',
    price: 9.00,
    image: cookieRedVelvet,
  },
];

const KroocCookiesApp = () => {
  return (
    // O CartProvider foi movido para o App.tsx
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Nossos Cookies Artesanais
          </h2>
          <p className="text-krooc-gray text-lg max-w-2xl mx-auto">
            Feitos com carinho e ingredientes selecionados, nossos cookies são irresistíveis!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default KroocCookiesApp;