import { useState } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';
import { CartProvider, Product } from '@/contexts/CartContext';

// Import das imagens
import cookieClassico from '@/assets/cookie-classico.jpg';
import cookieChocolate from '@/assets/cookie-chocolate.jpg';
import cookieNutella from '@/assets/cookie-nutella.jpg';
import cookieRedVelvet from '@/assets/cookie-red-velvet.jpg';

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
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
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

        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default KroocCookiesApp;