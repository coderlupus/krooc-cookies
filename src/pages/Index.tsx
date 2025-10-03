// src/pages/Index.tsx

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button"; // Importe Button para os filtros
import { cn } from "@/lib/utils"; // Importe cn para os estilos dos botões de filtro

import CookieSticker from "@/assets/COOKIE.png"; 

// Importe as imagens dos assets que o footer usa
import KroocLogo from "@/assets/krooccokies.png";
import StickerCookies from "@/assets/STICKER COOKIES.png";

const KroocCookiesApp = () => {
  // Vamos simular a seleção de categoria aqui
  const activeCategory = "cookies"; 

  // Função para aplicar os estilos do botão de categoria
  const categoryButtonClasses = (category: string) => 
    cn(
      "px-3 py-1.5 rounded-full font-semibold border-2 transition-colors",
      activeCategory === category
        ? "bg-krooc-red text-krooc-white border-krooc-red"
        : "bg-transparent text-krooc-red border-krooc-red hover:bg-krooc-red-light"
    );

  return (
    // Contêiner externo para centralizar o layout "mobile" na tela cheia.
    <div className="flex w-full min-h-screen justify-center bg-background">
      
      {/* Contêiner principal com largura limitada (max-w-xl = 640px) 
          e estilos visuais de "frame" no desktop. */}
      <div className="w-full max-w-xl shadow-lg md:shadow-2xl md:border-x border-border bg-krooc-white text-foreground">
        
        {/* Alteração 1: Fundo com sticker (agora com background-position ajustado) */}
        <div 
          className="fixed bottom-0 left-1/2 -translate-x-1/2 h-40 w-40 z-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: `url(${CookieSticker})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        
        {/* Usamos o Header para o ícone do carrinho, mas customizamos o layout interno */}
        <Header /> 
        
        {/* Novo Header Customizado (Top Bar) para o Logo e Carrinho */}
        <div className="flex items-center justify-between px-6 pt-6 pb-2 z-10 sticky top-0 bg-krooc-white">
            {/* Logo Centralizado */}
            <div className="flex-1 text-center">
                <img 
                    src={KroocLogo} 
                    alt="Krooc Cookies Logo" 
                    className="h-8 mx-auto" 
                />
            </div>
            
            {/* Ícone do carrinho. O Header já cuida da navegação e do contador. */}
            <div className="w-12 flex justify-end">
                {/* Aqui você pode adicionar um trigger do carrinho se usar um Sheet/Dialog em vez da rota */}
            </div>
        </div>


        <main className="mx-auto px-4 py-4 z-10"> {/* Reduzido o padding vertical */}
          <section id="categories-section" className="mb-8">
            {/* Alteração 2: Seção de Categorias */}
            <h2 className="text-xl font-bold mb-4 px-2 text-krooc-gray">
              CATEGORIAS
            </h2>

            <div className="flex space-x-2 px-2">
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

          {/* Seção de Produtos */}
          <section id="products-list">
            <div className="grid grid-cols-2 gap-4"> {/* Grid de 2 colunas fixo */}
              {products.map((product) => (
                // Estilo do ProductCard para se parecer com a imagem
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </main>

        {/* Alteração 3: Footer Fixo e Customizado */}
        <footer className="sticky bottom-0 z-10 bg-krooc-red p-4 border-t-8 border-krooc-red">
          <div className="flex justify-between items-center text-krooc-white">
             {/* Sticker e Texto do Telefone */}
            <img 
              src={StickerCookies} 
              alt="Cookies Sticker" 
              className="h-10 w-auto object-contain cart-float" 
            />
            <div className="flex items-center space-x-2 text-sm">
                <span className="text-2xl">
                  {/* Ícone do WhatsApp ou Telefone aqui */}
                </span>
                <span className="font-semibold">+55 84 9 9880-4152</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default KroocCookiesApp;