import { List } from "../models/List.js";

// create a movie

export const newList = async (req, res, next) => {
  try {
    const list = await List.create(req.body);
    if (list) {
      res.json({
        message: "new list has been created",
      });
      console.log(list);
    }
  } catch (err) {
    next(err);
  }
};

// delete a list by id

export const deleteList = async (req, res, next) => {
  try {
    const { id } = req.params;
    await List.findByIdAndDelete(id);

    res.send("List deleted");
  } catch (err) {
    next(err);
  }
};

//get all lists
export const getAllLists = async (req, res, next) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await List.aggregate([
        {
          $sample: { size: 10 },
        },
      ]);
    }
    res.send(list);
  } catch (error) {
    next(error);
  }
};
