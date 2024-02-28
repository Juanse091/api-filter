import { CardModel } from '../models/local-file-system/card.js'

export class CardsController {
  static async getAll (req, res) {
    const { type, minPrice, maxPrice, sale, sortOrder } = req.query
    const cards = await CardModel.getAll({ type, minPrice, maxPrice, sale, sortOrder })
    res.json(cards)
  }
}

// export class renderCard (req, res) {
//   const { id } = req.params
//   const card = await CardModel.get(id)
//   res.render("card", { card })
// } <-- Render de vista
