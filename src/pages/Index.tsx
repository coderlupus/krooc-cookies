// src/pages/Index.tsx

import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShoppingBag, Instagram, MessageCircle } from 'lucide-react';
import { Link } from "react-router-dom";
import { useCart } from '@/contexts/CartContext';

import KroocLogo from "@/assets/krooccokies.png";

const KroocCookiesApp = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const activeCategory = "cookies";

  const categoryButtonClasses = (category: string) =>
    cn(
      "px-3 py-1.5 rounded-full font-semibold border-2 transition-colors",
      activeCategory === category
        ? "bg-krooc-red text-krooc-white border-krooc-red"
        : "bg-transparent text-krooc-red border-krooc-red hover:bg-krooc-red-light"
    );

  return (
    <div className="flex w-full min-h-screen justify-center bg-background">
      {/* O contêiner principal agora é mais flexível */}
      <div className="w-full bg-krooc-white text-foreground">

        {/* Header Top Bar */}
        <header className="flex items-center justify-between px-6 pt-6 pb-2 z-10 sticky top-0 bg-krooc-white border-b border-border">
            <div className="flex items-center space-x-2">
                <img
                    src={KroocLogo}
                    alt="Krooc Cookies Logo"
                    className="h-8 w-auto object-contain"
                />
            </div>

            <Link to="/cart">
                <Button
                    variant="krooc-outline"
                    size="icon"
                    className="relative h-10 w-10 p-0"
                >
                    <ShoppingBag className="h-6 w-6 text-krooc-red" />
                    {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 bg-krooc-red text-krooc-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold cart-bounce">
                            {totalItems}
                        </span>
                    )}
                </Button>
            </Link>
        </header>


        <main className="container mx-auto px-4 py-8 z-10">
          <section id="categories-section" className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-krooc-gray text-left">
              CATEGORIAS
            </h2>

            <div className="flex space-x-2">
              <Button
                variant="ghost"
                className={categoryButtonClasses("cookies")}
              >
                COOKIES
              </Button>
              <Button
                variant="ghost"
                className={categoryButtonClasses("combos")}
              >
                COMBOS
              </Button>
              <Button
                variant="ghost"
                className={categoryButtonClasses("extras")}
              >
                EXTRAS
              </Button>
            </div>
          </section>

          {/* Seção de Produtos com grid responsivo */}
          <section id="products-list">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer
            className="sticky bottom-0 z-10 p-4 border-t-8 border-krooc-red"
            style={{ backgroundColor: 'hsl(var(--krooc-red))', borderTopColor: 'hsl(var(--krooc-red))' }}
        >
          <div className="container mx-auto flex justify-between items-center text-krooc-white">
             {/* Instagram e Texto */}
            <a
              href="https://www.instagram.com/okrooc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm"
            >
              <Instagram className="h-6 w-6" />
              <span className="font-semibold">@OKROOC</span>
            </a>

            {/* Apenas o contato WhatsApp */}
            <div className="flex items-center space-x-2 text-sm">
                <MessageCircle className="h-6 w-6" />
                <span className="font-semibold">+55 84 9 9880-4152</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default KroocCookiesApp;