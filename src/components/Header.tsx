// src/components/Header.tsx

import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom'; // Importe o Link
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

// Remova a interface HeaderProps, não precisaremos mais de onCartClick

const Header: React.FC = () => { // Remova a prop onCartClick daqui
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-3xl font-bold gradient-text">
            Krooc Cookies
          </h1>
        </Link>

        <Link to="/cart"> {/* Envolva o botão com o Link */}
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
      </div>
    </header>
  );
};

export default Header;