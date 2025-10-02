// src/pages/Index.tsx

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products"; // 1. Importe a lista de produtos

// 2. REMOVA a constante 'products' que estava aqui

const KroocCookiesApp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <section id="products-section">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Nossos Cookies Artesanais
            </h2>
            <p className="text-krooc-gray text-lg max-w-2xl mx-auto">
              Feitos com carinho e ingredientes selecionados. Escolha os seus favoritos!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-krooc-gray-light py-8 mt-16">
        <div className="container mx-auto text-center text-krooc-gray">
          <p>&copy; 2024 Krooc Cookies. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default KroocCookiesApp;