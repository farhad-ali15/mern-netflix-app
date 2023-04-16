import { Movie } from "../models/Movie.js";

// create a movie

export const newMovie = async (req, res, next) => {
  try {
    const movie = await Movie.create(req.body);
    if (movie) {
      res.json({
        message: "new movie has been created",
      });
      console.log(movie);
    }
  } catch (err) {
    next(err);
  }
};
//get all movies
export const getAllMovies = async (req, res, next) => {
  const query = req.query.new;
  const allMovies = query
    ? await Movie.find().sort({ _id: -1 }).limit(6)
    : await Movie.find();
  res.json(allMovies);
};

// update a movie
export const updateMovie = async (req, res, next) => {
  const { id } = req.params;
  const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.send(updatedMovie);
};

//get movie by id

export const getMovieById = async (req, res, next) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);

  res.send(movie);
};
//get random movie

export const getRandomMovie = async (req, res, next) => {
  const type = req.query.type;
  let movie;
  try {
    if (type == "series") {
      try {
        movie = await Movie.aggregate([
          {
            $match: { isSeries: true },
          },
          {
            $sample: { size: 1 },
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    } else
      try {
        {
          movie = await Movie.aggregate([
            {
              $match: { isSeries: false },
            },
            {
              $sample: { size: 1 },
            },
          ]);
        }
      } catch (error) {
        console.log(error);
      }
    res.json(movie);
  } catch (error) {
    res.json(err);
  }
};

// delete a movie by id

export const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);

    res.send("Movie deleted");
  } catch (err) {
    next(err);
  }
};
