import * as React from "react";
import { useForm } from "react-hook-form";

export default function SearchBar({ terms, setTerms, onSubmit }) {
  const { register, handleSubmit } = useForm();

  const submitCallback = (data, event) => {
    event.preventDefault();
    onSubmit({
      title: data.title,
      description: data.description,
      price_from: data.price_from,
      price_to: data.price_to,
      state: data.state,
      location: data.location,
      category: data.category,
    });
  };
  return (
    <form className="search-form-group" onSubmit={handleSubmit(submitCallback)}>
      <input {...register("title")} placeholder="Title" type="text" />
      <input
        {...register("description")}
        placeholder="Description"
        type="text"
      />
      <input
        {...register("price_from")}
        placeholder="Price from"
        type="number"
      />
      <input {...register("price_to")} placeholder="Price to" type="number" />
      <input {...register("state")} placeholder="State" type="text" />
      <input {...register("location")} placeholder="Location" type="text" />
      <button type="submit">Search</button>
    </form>
  );
}
