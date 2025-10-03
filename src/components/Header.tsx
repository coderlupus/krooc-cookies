// src/components/Header.tsx

import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    // Alteração 1: Este Header agora é mais simples e focado no carrinho,
    // pois o logo será gerenciado separadamente em Index.tsx.
    // Também ajustamos para a largura total do contêiner 'mobile' pai.
    <header className="absolute top-6 right-6 z-50">
      <Link to="/cart">
        <Button
          variant="krooc-outline"
          size="lg"
          className="relative cart-float"
        >
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-krooc-red text-krooc-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold cart-bounce">
              {totalItems}
            </span>
          )}
        </Button>
      </Link>
    </header>
  );
};

export default Header;