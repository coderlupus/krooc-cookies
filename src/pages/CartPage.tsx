// src/pages/CartPage.tsx

import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

import StickerIcon from "@/assets/STICKER-COOKIE.png";
import StickerClub from "@/assets/STICKER-CLUB.png";

const CartPage = () => {
  const { items, updateQuantity, getTotalPrice } = useCart();

  return (
    <div className="flex min-h-screen flex-col bg-amber-50 font-sans text-foreground">
      {/* Header da Página */}
      <header className="sticky top-0 z-10 flex items-center justify-between bg-amber-50/80 p-4 backdrop-blur-sm">
        <Link to="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold">SEU PEDIDO</h1>
        {/* AJUSTE 1: Adicionado 'object-contain' para não esticar a imagem */}
        <img src={StickerIcon} alt="Sticker Cookie" className="h-12 w-16 object-contain" />
      </header>

      {/* Conteúdo Principal (Itens do Carrinho) */}
      <main className="flex-1 overflow-y-auto p-4">
        {items.length > 0 ? (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <Checkbox defaultChecked id={`item-${item.id}`} className="h-6 w-6 rounded-md border-2 border-border data-[state=checked]:bg-krooc-red data-[state=checked]:border-krooc-red" />
                <Card className="flex-1 rounded-2xl border-border bg-card shadow-sm">
                  <CardContent className="flex items-center gap-4 p-3">
                    <div className="h-20 w-20 rounded-lg bg-muted flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">100G</p>
                      <p className="text-lg font-bold text-krooc-red">
                        R$ {item.price.toFixed(2).replace(".", ",")}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-muted p-1">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6 rounded-full"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-4 text-center font-bold">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6 rounded-full"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold">Seu carrinho está vazio.</h2>
            <p className="text-muted-foreground">Que tal adicionar alguns cookies deliciosos?</p>
            <Link to="/">
              <Button variant="krooc" className="mt-4">
                Ver o cardápio
              </Button>
            </Link>
          </div>
        )}
      </main>
      
      {/* AJUSTE 2: Ajustado o posicionamento e o tamanho do sticker */}
      <img 
        src={StickerClub} 
        alt="The Best Cookie Club" 
        className="fixed bottom-24 left-0 h-auto w-28 object-contain" 
      />

      {/* Footer Fixo */}
      <footer className="sticky bottom-0 border-t border-border bg-amber-50 p-4">
        <div className="flex items-center justify-between font-bold">
          <span className="text-lg">PEDIDO:</span>
          <span className="text-2xl">
            R$ {getTotalPrice().toFixed(2).replace(".", ",")}
          </span>
        </div>
        <Button
          variant="krooc"
          size="lg"
          className="mt-4 w-full rounded-full text-lg font-bold"
        >
          AVANÇAR
        </Button>
      </footer>
    </div>
  );
};

export default CartPage;