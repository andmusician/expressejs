const Pergunta = require("../database/model/Pergunta");

// Classe com os métodos CRUD
class PerguntaRepository {
  // Método para criar uma nova instância
  async create(data) {
    try {
      const instance = await Pergunta.create(data);
      return instance;
    } catch (error) {
      throw new Error("Erro ao criar uma nova instância de Pergunta.");
    }
  }

  // Método para obter todas as instâncias
  async read() {
    try {
      const instances = await Pergunta.findAll();
      return instances;
    } catch (error) {
      throw new Error("Erro ao obter as instâncias de Pergunta.");
    }
  }

  // Método para atualizar uma instância
  async update(id, data) {
    try {
      const instance = await Pergunta.findByPk(id);
      if (instance) {
        await instance.update(data);
        return instance;
      }
      throw new Error(`Instância de Pergunta com id ${id} não encontrada.`);
    } catch (error) {
      throw new Error(
        `Erro ao atualizar a instância de Pergunta com id ${id}.`
      );
    }
  }

  // Método para deletar uma instância
  async delete(id) {
    try {
      const instance = await Pergunta.findByPk(id);
      if (instance) {
        await instance.destroy();
        return true;
      }
      throw new Error(`Instância de Pergunta com id ${id} não encontrada.`);
    } catch (error) {
      throw new Error(`Erro ao deletar a instância de Pergunta com id ${id}.`);
    }
  }
}

module.exports = new PerguntaRepository();
