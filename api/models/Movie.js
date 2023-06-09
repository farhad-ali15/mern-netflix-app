import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgThumbnail: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    duration: { type: String },
    limit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Movie = mongoose.model("movie", MovieSchema);
