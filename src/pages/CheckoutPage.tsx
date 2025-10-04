// src/pages/CheckoutPage.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const TAXA_ENTREGA = 7.0; // Valor fixo da taxa de entrega

const CheckoutPage = () => {
  const { items, getTotalPrice } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState("retirada");
  const [paymentMethod, setPaymentMethod] = useState("dinheiro");
  const [bairro, setBairro] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [troco, setTroco] = useState("");

  const pedidoPrice = getTotalPrice();
  const totalPrice =
    deliveryMethod === "entrega" ? pedidoPrice + TAXA_ENTREGA : pedidoPrice;

  const handleFinalizeOrder = () => {
    // Monta a mensagem para o WhatsApp
    const orderItems = items
      .map(
        (item) =>
          `${item.quantity}x ${item.name} - R$ ${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");

    let deliveryInfo = "";
    if (deliveryMethod === "entrega") {
      deliveryInfo = `\n*Entrega em:*\nBairro: ${bairro}\nEndereço: ${logradouro}\nTaxa de Entrega: R$ ${TAXA_ENTREGA.toFixed(
        2
      )}`;
    } else {
      deliveryInfo = "\n*Retirada no local*";
    }

    let paymentInfo = `\n*Pagamento:* ${paymentMethod}`;
    if (paymentMethod === "dinheiro" && troco) {
      paymentInfo += `\n*Troco para:* R$ ${troco}`;
    }

    const message = `--- *RESUMO DO PEDIDO* ---\n\n*Itens:*\n${orderItems}\n\n*Pedido:* R$ ${pedidoPrice.toFixed(
      2
    )}${deliveryInfo}${paymentInfo}\n\n*TOTAL:* R$ ${totalPrice.toFixed(2)}`;

    // Substitua pelo seu número de telefone
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex w-full min-h-screen justify-center bg-background">
      <div className="w-full bg-amber-50 font-sans text-foreground">
        <header className="sticky top-0 z-10 flex items-center justify-between bg-amber-50/80 p-4 backdrop-blur-sm">
          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">RESUMO DO PEDIDO</h1>
          <div className="w-10"></div> {/* Espaço para alinhar o título */}
        </header>

        <main className="flex-1 overflow-y-auto p-4 space-y-8">
          {/* Seção de Entrega */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Como você prefere receber?</h2>
            <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
              <div className="space-y-4">
                <Label
                  htmlFor="entrega"
                  className="flex items-start gap-4 rounded-lg border p-4 cursor-pointer"
                >
                  <RadioGroupItem value="entrega" id="entrega" />
                  <div className="w-full">
                    <span className="font-bold">ENTREGA</span>
                    {deliveryMethod === "entrega" && (
                      <div className="mt-4 space-y-3">
                        {/* Campo de texto para o bairro */}
                        <Input
                          placeholder="BAIRRO"
                          value={bairro}
                          onChange={(e) => setBairro(e.target.value)}
                        />
                        <Input
                          placeholder="LOGRADOURO E NÚMERO"
                          value={logradouro}
                          onChange={(e) => setLogradouro(e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                </Label>
                <Label
                  htmlFor="retirada"
                  className="flex items-start gap-4 rounded-lg border p-4 cursor-pointer"
                >
                  <RadioGroupItem value="retirada" id="retirada" />
                  {/* CORREÇÃO AQUI: Envolver o conteúdo para centralizar o span.
                      O div pai da span precisa ser w-full e text-center. */}
                  <div className="w-full">
                    <span className="font-bold block text-center">RETIRADA NO LOCAL</span>
                    {deliveryMethod === "retirada" && (
                      // O Card já tem 'text-center' aplicado.
                      <Card className="mt-4 p-4 text-center">
                        <p className="font-semibold">
                          RUA COMANDANTE EZEQUIEL, Nº 1205 – BAIRRO PARAÍBA
                        </p>
                        <a
                          href="https://maps.app.goo.gl/DCoxkCrDyTbsEewb9"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="mt-2" variant="krooc">
                            ABRIR NO MAPS
                          </Button>
                        </a>
                      </Card>
                    )}
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Seção de Pagamento */}
          <div>
            {/* CORREÇÃO ANTERIOR MANTIDA: Centralizar título e botões de rádio */}
            <h2 className="text-lg font-semibold mb-4 text-center">Escolha a forma de pagamento</h2>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-6 justify-center"> 
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dinheiro" id="dinheiro" />
                  <Label htmlFor="dinheiro">Dinheiro</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cartao" id="cartao" />
                  <Label htmlFor="cartao">Cartão</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pix" id="pix" />
                  <Label htmlFor="pix">Pix</Label>
                </div>
              </div>
            </RadioGroup>
            {paymentMethod === "dinheiro" && (
              <div className="mt-4">
                <Label>Troco para:</Label>
                <Input
                  placeholder="EX: R$ 50,00"
                  className="mt-2"
                  value={troco}
                  onChange={(e) => setTroco(e.target.value)}
                />
              </div>
            )}
          </div>
        </main>

        {/* Footer Fixo */}
        <footer className="sticky bottom-0 border-t border-border bg-amber-50 p-4">
          <Card className="p-4 bg-white/50">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Pedido:</span>
              <span>R$ {pedidoPrice.toFixed(2).replace(".", ",")}</span>
            </div>
            {deliveryMethod === "entrega" && (
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Taxa de Entrega:</span>
                <span>R$ {TAXA_ENTREGA.toFixed(2).replace(".", ",")}</span>
              </div>
            )}
            <div className="flex items-center justify-between font-bold text-lg mt-2">
              <span>TOTAL:</span>
              <span className="text-xl">
                R$ {totalPrice.toFixed(2).replace(".", ",")}
              </span>
            </div>
          </Card>
          <Button
            onClick={handleFinalizeOrder}
            variant="krooc"
            size="lg"
            className="mt-4 w-full rounded-full text-lg font-bold"
            disabled={items.length === 0}
          >
            FINALIZAR
          </Button>
          <p className="text-center text-xs text-muted-foreground mt-2">
            VOCÊ SERÁ REDIRECIONADO PARA O WHATSAPP
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CheckoutPage;