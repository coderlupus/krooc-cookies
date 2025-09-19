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
      <div className="aspect-square overflow-hidden bg-krooc-gray-light">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-krooc-red">{product.name}</h3>
          <p className="text-krooc-gray text-sm leading-relaxed">{product.description}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-krooc-red">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          
          <Button
            onClick={handleAddToCart}
            variant="krooc"
            className="font-semibold px-6 py-2 rounded-full"
          >
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;