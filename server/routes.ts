import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ 
          message: "Dados inválidos. Preencha todos os campos corretamente." 
        });
      }
      const contact = await storage.createContactMessage(parsed.data);
      return res.status(201).json(contact);
    } catch (error) {
      return res.status(500).json({ 
        message: "Erro interno. Tente novamente." 
      });
    }
  });

  return httpServer;
}
