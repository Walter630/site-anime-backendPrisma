import { Request, Response } from "express";
import { AdminServices } from "../services/TipoUsuarioServices";

export class TiposUsuarioController {
  constructor(private readonly service: AdminServices) {}

  /** GET /tipos-usuario */
  async getTiposUsuario(_: Request, res: Response): Promise<Response> {
    try {
      const tipos = await this.service.listarTipos();
      return res.status(200).json(tipos);
    } catch (e) {
      return res.status(500).json({ error: String(e) });
    }
  }

  /** POST /tipos-usuario */
  async criarTipoUsuario(req: Request, res: Response): Promise<Response> {
    const { nome, descricao } = req.body;
    if (!nome) return res.status(400).json({ error: "nome é obrigatório" });

    try {
      const tipo = await this.service.criarTipoUsuario({ nome, descricao });
      return res.status(201).json(tipo);
    } catch (e) {
      return res.status(500).json({ error: String(e) });
    }
  }

  /** PUT /tipos-usuario/:id */
  async atualizarTipoUsuario(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    try {
      const tipo = await this.service.atualizarTipoUsuario({
        id,
        nome,
        descricao,
      });
      if (!tipo) return res.status(404).json({ error: "Tipo não encontrado" });
      return res.status(200).json(tipo);
    } catch (e) {
      return res.status(500).json({ error: String(e) });
    }
  }
}
