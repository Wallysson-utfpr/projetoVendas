const ItemPedido = require("../models/ItemPedido");

const itemPedidoController = {
  createItemPedido: async (req, res) => {
    try {
      const novoItemPedido = new ItemPedido(req.body);

      // Salve o novo item de pedido no banco de dados
      const itemPedidoSalvo = await novoItemPedido.save();

      res
        .status(201)
        .json({
          message: "Item de pedido criado com sucesso",
          itemPedido: itemPedidoSalvo,
        });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Ocorreu um erro ao criar o item de pedido" });
    }
  },

  updateItemPedido: async (req, res) => {
    try {
      const itemId = req.params.itemId;
      const updatedItemPedido = req.body;

      // Encontre o item de pedido pelo ID e atualize os campos desejados
      const itemPedido = await ItemPedido.findByIdAndUpdate(
        itemId,
        updatedItemPedido,
        { new: true }
      );

      if (!itemPedido) {
        return res
          .status(404)
          .json({ message: "Item de pedido não encontrado" });
      }

      res
        .status(200)
        .json({ message: "Item de pedido atualizado com sucesso", itemPedido });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Ocorreu um erro ao atualizar o item de pedido" });
    }
  },

  deleteItemPedido: async (req, res) => {
    try {
      const itemId = req.params.itemId;

      // Encontre o item de pedido pelo ID e exclua-o
      const itemPedido = await ItemPedido.findByIdAndDelete(itemId);

      if (!itemPedido) {
        return res
          .status(404)
          .json({ message: "Item de pedido não encontrado" });
      }

      res.status(200).json({ message: "Item de pedido excluído com sucesso" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Ocorreu um erro ao excluir o item de pedido" });
    }
  },
};

module.exports = itemPedidoController;
