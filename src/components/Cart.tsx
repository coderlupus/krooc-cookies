import { X, Plus, Minus, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    const orderText = items
      .map(item => `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`)
      .join('\n');
    
    const total = getTotalPrice().toFixed(2).replace('.', ',');
    const message = `Olá! Gostaria de fazer o seguinte pedido:\n\n${orderText}\n\nTotal: R$ ${total}`;
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:w-[400px] bg-krooc-white">
        <SheetHeader className="pb-6">
          <SheetTitle className="text-2xl font-bold text-krooc-red">
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-krooc-gray text-center">
                Seu carrinho está vazio.<br />
                Adicione alguns cookies deliciosos!
              </p>
            </div>
          ) : (
            <>
              <div className="flex-1 space-y-4 overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-4 bg-krooc-gray-light rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-krooc-red">{item.name}</h4>
                      <p className="text-krooc-gray text-sm">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 p-0 border-krooc-red text-krooc-red hover:bg-krooc-red-light"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      
                      <span className="font-semibold min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0 border-krooc-red text-krooc-red hover:bg-krooc-red-light"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromCart(item.id)}
                      className="text-krooc-red hover:bg-krooc-red-light"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="border-t border-krooc-gray-light pt-6 space-y-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-krooc-red">
                    R$ {getTotalPrice().toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <Button
                  onClick={handleWhatsAppOrder}
                  variant="krooc"
                  className="w-full font-semibold py-3 rounded-full flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Finalizar Pedido no WhatsApp</span>
                </Button>

                <Button
                  variant="krooc-outline"
                  onClick={clearCart}
                  className="w-full"
                >
                  Limpar Carrinho
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;