const express = require("express");
const clienteController = require("../controllers/clienteController");
const pedidoController = require("../controllers/pedidoController");
const itemPedidoController = require("../controllers/itemPedidoController");
const produtoController = require("../controllers/produtoController");

const router = express.Router();

// Rotas relacionadas a Clientes
router.get("/clientes", clienteController.getClientes);
router.post("/clientes", clienteController.createCliente);
router.put("/clientes/:id", clienteController.updateCliente);
router.delete("/clientes/:id", clienteController.deleteCliente);

// Rotas relacionadas a Pedidos
router.get("/pedidos", pedidoController.getPedidos);
router.post("/pedidos", pedidoController.createPedido);
router.put("/pedidos/:id", pedidoController.updatePedido);
router.delete("/pedidos/:id", pedidoController.deletePedido);

// Rotas relacionadas a Itens de Pedido
router.post("/itens-pedido", itemPedidoController.createItemPedido);
router.put("/itens-pedido/:id", itemPedidoController.updateItemPedido);
router.delete("/itens-pedido/:id", itemPedidoController.deleteItemPedido);

// Rotas relacionadas a Produtos
router.get("/produtos", produtoController.getProdutos);
router.post("/produtos", produtoController.createProduto);
router.put("/produtos/:id", produtoController.updateProduto);
router.delete("/produtos/:id", produtoController.deleteProduto);

module.exports = router;
