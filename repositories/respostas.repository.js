const Resposta = require("../database/model/Resposta");

// Classe com os métodos CRUD
class RespostaRepository {
  // Método para criar uma nova instância
  async create(data) {
    try {
      const instance = await Resposta.create(data);
      return instance;
    } catch (error) {
      throw new Error("Erro ao criar uma nova instância de Resposta.");
    }
  }

  // Método para obter todas as instâncias
  async read() {
    try {
      const instances = await Resposta.findAll({
        raw: true,
        order: [["id", "DESC"]],
      });
      return instances;
    } catch (error) {
      throw new Error("Erro ao obter as instâncias de Resposta.");
    }
  }

  async findById(id) {
    try {
      const instance = await Resposta.findByPk(id);
      if (instance) {
        return instance;
      }
      throw new Error(`Instância de Resposta com id ${id} não encontrada.`);
    } catch (error) {
      throw new Error(`Não existe Resposta com o id ${id}`);
    }
  }

  // Método para atualizar uma instância
  async update(id, data) {
    try {
      const instance = await Resposta.findByPk(id);
      if (instance) {
        await instance.update(data);
        return instance;
      }
      throw new Error(`Instância de Resposta com id ${id} não encontrada.`);
    } catch (error) {
      throw new Error(
        `Erro ao atualizar a instância de Resposta com id ${id}.`
      );
    }
  }

  // Método para deletar uma instância
  async delete(id) {
    try {
      const instance = await Resposta.findByPk(id);
      if (instance) {
        await instance.destroy();
        return true;
      }
      throw new Error(`Instância de Resposta com id ${id} não encontrada.`);
    } catch (error) {
      throw new Error(`Erro ao deletar a instância de Resposta com id ${id}.`);
    }
  }
}

module.exports = new RespostaRepository();
