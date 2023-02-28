import { useForm } from "react-hook-form";
import { useUser } from "../../hooks/useAuth";

export const PostFormComponent = ({
  onSubmit,
  categories,
  isNewPost = false,
}) => {
  const { register, handleSubmit } = useForm();

  const { getUserFromLocalStorage } = useUser();
  const loggedInUser = getUserFromLocalStorage().user.id;

  const submitCallback = (data) => {
    onSubmit({
      title: data.title,
      description: data.description,
      price: data.price,
      state: data.state,
      image_url: data.image_url,
      contact: data.contact,
      location: data.location,
      category_id: data.category_id[0],
      user_id: loggedInUser,
    });
  };

  return (
    <div className="flex-container">
      <form className="form-group" onSubmit={handleSubmit(submitCallback)}>
        <label>Title</label>
        <input {...register("title")} type="text" required />

        <label>Description</label>
        <input {...register("description")} type="text" required />

        <label>Price</label>
        <input {...register("price")} type="number" required />

        <label>State</label>
        <input {...register("state")} type="text" required />

        <label>Image URL</label>
        <input {...register("image_url")} type="url" required />

        <label>Contact</label>
        <input {...register("contact")} type="text" required />

        <label>Location</label>
        <input {...register("location")} type="text" required />

        <select {...register("category_id")} required>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <button type="submit">{isNewPost ? "Create post" : "Edit post"}</button>
      </form>
    </div>
  );
};
