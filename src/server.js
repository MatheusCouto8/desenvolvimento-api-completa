import express from "express";
import eventoRoutes from "./routes/eventoRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/eventos", eventoRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
