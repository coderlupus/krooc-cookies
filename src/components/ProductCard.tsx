// src/components/ProductCard.tsx

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Product, useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast'; 

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart(); 
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho`,
      duration: 2000,
    });
  };

  return (
    <Card className="overflow-hidden card-hover bg-krooc-white border-krooc-gray-light">
      {/* Área da Imagem: 
        1. Removido 'aspect-square' para simplificar o layout.
        2. 'h-32' (altura fixa) com 'flex items-center justify-center' (centralização).
      */}
      <div className="w-full h-32 bg-krooc-gray-light flex items-center justify-center overflow-hidden"> 
        <img
          src={product.image}
          alt={product.name}
          // CORREÇÃO FINAL: Usamos max-w/h-full e object-contain.
          // Isso garante que a imagem nunca exceda o contêiner e seja centralizada 
          // pelo Flexbox do elemento pai.
          className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105" 
        />
      </div>
      
      {/* Área de Conteúdo */}
      <div className="p-3 space-y-2">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-krooc-red leading-tight">{product.name}</h3>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-krooc-red">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          
          <Button
            onClick={handleAddToCart}
            variant="krooc"
            className="font-semibold h-8 w-8 p-0 rounded-full text-lg" 
          >
            +
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;