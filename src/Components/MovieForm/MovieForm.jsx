import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, updateMovie } from "../../store/movieSlice";
import { closeAddMovieModel } from "../../store/uiSlice";
import { Input, Button, Textarea, GenrePicker } from "../index";

function MovieForm() {
  const dispatch = useDispatch();

  const editingMovieId = useSelector(
    (state) => state.ui.editingMovieId
  );
  const movies = useSelector((state) => state.movies.movies);

  const editingMovie =
    movies.find((movie) => movie.id === editingMovieId) || null;

  const currentYear = new Date().getFullYear();

  const emptyValues = {
    title: "",
    genres: [],
    year: "",
    Rating: "",
    posterUrl: "",
    description: "",
    watched: false,
    status: "Want to Watch",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: emptyValues,
    mode: "onTouched",
  });

  useEffect(() => {
    if (editingMovie) {
      reset({
        title: editingMovie.title || "",
        genres: editingMovie.genres || [],
        year: editingMovie.year || "",
        Rating: editingMovie.Rating ?? "",
        posterUrl: editingMovie.posterUrl || "",
        description: editingMovie.description || "",
        watched: editingMovie.watched ?? false,
        status: editingMovie.status || "Want to Watch",
      });
    } else {
      reset(emptyValues);
    }
  }, [editingMovie, reset]);

  const onSubmit = (data) => {
    const watched = editingMovie
      ? data.status === "Watched"
      : false;

    const movieData = {
      ...data,
      id: editingMovie?.id ?? Date.now(),
      year: Number(data.year),
      Rating: Number(data.Rating),
      watched,
      status: watched ? "Watched" : "Want to Watch",
      createdAt:
        editingMovie?.createdAt ?? new Date().toISOString(),
    };

    if (editingMovie) {
      dispatch(updateMovie(movieData));
    } else {
      dispatch(addMovie(movieData));
    }

    reset(emptyValues);
    dispatch(closeAddMovieModel());
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex max-h-[85dvh] min-h-0 flex-col"
    >
      {/* Scrollable fields */}
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain p-4">
        <Input
          label="Title"
          placeholder="Inception"
          error={errors.title?.message}
          {...register("title", {
            required: "Title is required",
            validate: (value) =>
              value.trim() !== "" || "Title can't be only spaces",
            maxLength: {
              value: 80,
              message: "Keep the title under 80 characters",
            },
          })}
        />

        <GenrePicker
          register={register}
          error={errors.genres?.message}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Input
            label="Year"
            type="number"
            placeholder="Enter the year"
            error={errors.year?.message}
            {...register("year", {
              required: "Year is required",
              valueAsNumber: true,
              min: {
                value: 1888,
                message: "Enter a valid year",
              },
              max: {
                value: currentYear + 5,
                message: `Year can't be after ${currentYear + 5}`,
              },
              validate: (value) =>
                Number.isInteger(value) || "Enter a whole year",
            })}
          />

          <Input
            label="Rating (0–10)"
            type="number"
            step="0.1"
            min="0"
            max="10"
            placeholder="Enter the rating"
            error={errors.Rating?.message}
            {...register("Rating", {
              required: "Rating is required",
              valueAsNumber: true,
              min: {
                value: 0,
                message: "Rating must be at least 0",
              },
              max: {
                value: 10,
                message: "Rating can't be over 10",
              },
            })}
          />
        </div>

        <Input
          label="Poster URL"
          placeholder="https://..."
          error={errors.posterUrl?.message}
          {...register("posterUrl", {
            required: "Poster URL is required",
            pattern: {
              value: /^https?:\/\/\S+$/i,
              message: "Use a link starting with http:// or https://",
            },
          })}
        />

        {editingMovie && (
          <div>
            <p className="mb-2 block text-sm font-medium text-slate-300">
              Status
            </p>

            <div className="flex flex-wrap items-center gap-6">
              {["Watched", "Want to Watch"].map((status) => (
                <label
                  key={status}
                  className="flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-300"
                >
                  <Input
                    type="radio"
                    value={status}
                    className="h-5 w-5 rounded-full"
                    {...register("status", {
                      required: "Please select a status",
                    })}
                  />
                  <span>{status}</span>
                </label>
              ))}
            </div>

            {errors.status && (
              <p className="mt-1 text-sm text-red-500">
                {errors.status.message}
              </p>
            )}
          </div>
        )}

        <Textarea
          label="Description"
          placeholder="Short synopsis..."
          error={errors.description?.message}
          {...register("description", {
            maxLength: {
              value: 500,
              message: "Keep it under 500 characters",
            },
          })}
        />
      </div>

      {/* Always-visible buttons */}
      <div className="flex shrink-0 justify-end gap-2 border-t border-white/10 bg-slate-900 p-4">
        {editingMovie && (
          <Button
            type="button"
            variant="ghost"
            onClick={() => dispatch(closeAddMovieModel())}
          >
            Cancel
          </Button>
        )}

        <Button type="submit">
          {editingMovie ? "Save Changes" : "Add Movie"}
        </Button>
      </div>
    </form>
  );
}

export default MovieForm;