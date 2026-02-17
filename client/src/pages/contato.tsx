import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { Mail, MessageSquare, Send } from "lucide-react";
import SEO from "@/components/SEO";

const contactFormSchema = insertContactSchema.extend({
  email: z.string().email("Informe um e-mail válido"),
  name: z.string().min(2, "Informe seu nome"),
  context: z.string().min(10, "Descreva um pouco mais sua necessidade"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contato() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      context: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada",
        description: "Recebemos sua mensagem. Vamos responder em breve.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <main>
      <SEO
        title="Contato"
        description="Entre em contato com a Modo 3D. Conte o que você precisa resolver — respondemos de forma direta e pessoal."
        path="/contato"
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1
                className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight"
                data-testid="text-contato-headline"
              >
                Vamos conversar.
              </h1>
              <p className="mt-6 text-base leading-7 text-muted-foreground max-w-md">
                Conte o que você precisa resolver. Pode ser uma dúvida sobre um produto,
                uma ideia de uso ou algo que você gostaria que existisse.
                A gente responde de forma direta e pessoal.
              </p>

              <div className="mt-10 flex flex-col gap-6">
                <div className="flex items-start gap-4" data-testid="contact-info-email">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">E-mail</p>
                    <p className="text-sm text-muted-foreground">contato@modo3d.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="contact-info-response">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Tempo de resposta</p>
                    <p className="text-sm text-muted-foreground">Até 24 horas úteis</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Seu nome"
                                {...field}
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="seu@email.com"
                                {...field}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="context"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Como podemos ajudar?</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Descreva sua necessidade, dúvida ou ideia..."
                                className="resize-none min-h-[120px]"
                                {...field}
                                data-testid="input-context"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        size="lg"
                        disabled={mutation.isPending}
                        data-testid="button-submit-contact"
                        className="gap-2"
                      >
                        {mutation.isPending ? "Enviando..." : "Enviar mensagem"}
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
