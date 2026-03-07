import { React, useState } from "react";
import ImageUploadStars from "./ImageUploadStars";
import ImageUploadTags from "./ImageUploadTags";

export default function ImageUpload({ isActive = true, setIsActive, user }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [stars, setStars] = useState(1);

  console.log(
    !isActive ? "ImageUpload is active" : "ImageUpload is not active",
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  //   {
  //   userId,
  //   name,
  //   restaurantName,
  //   description,
  //   rating,
  //   imageUrl,
  //   price,
  //   location,
  //   tags,
  // },
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      userId: user?._id,
      name: title,
      restaurantName,
      description,
      imageUrl: preview, // Placeholder
      location: { address: location },
      price: Number(price),
      tags,
      rating: stars,
    };

    try {
      const res = await fetch("/api/favDish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([formData]),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Form submitted!", data);
        setIsActive(false);
      }
    } catch (err) {
      console.error("cannot save dish:", err);
    }
  };

  return (
    <form id="image-upload" className="image-upload" onSubmit={handleSubmit}>
      <div id="image-upload-show-here" className="image-upload-show-here">
        <button className="button-style" type="submit">
          Submit Image!
        </button>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />

        <div id="upload-img" className="upload-img">
          {preview && (
            <img
              src={preview}
              alt="Preview"
              style={{ width: "100%", marginTop: "10px" }}
            />
          )}
        </div>
      </div>

      <div id="image-upload-title" className="image-upload-title">
        <label>
          <input
            type="text"
            value={title}
            style={{ width: "100%" }}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Image Title Goes Here!"
            required
          />
        </label>
      </div>

      <div id="image-upload-description" className="image-upload-description">
        <label>
          <input
            value={description}
            style={{ width: "100%" }}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Image Description Goes Here!"
            required
          />
        </label>
      </div>

      <div id="image-upload-restaurant" className="image-upload-restaurant">
        <label>
          <input
            type="text"
            value={restaurantName}
            style={{ width: '100%' }}
            onChange={(e) => setRestaurantName(e.target.value)}
            placeholder="Restaurant Name Goes Here!"
            required
          />
        </label>
      </div>

      <div id="image-upload-location" className="image-upload-location">
        <label>
          <input
            type="text"
            value={location}
            style={{ width: '100%' }}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Image Location Goes Here!"
          />
        </label>
      </div>

      <div id="image-upload-price" className="image-upload-price">
        <label>
          <input
            type="number"
            value={price}
            style={{ width: '100%' }}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price Goes Here!"
          />
        </label>
      </div>
      <div id="image-upload-tags" className="image-upload-tags">
        <div
          id="image-upload-tag-container"
          className="image-upload-tag-container"
        >
          <ImageUploadTags tags={tags} setTags={setTags} />
          <ImageUploadStars stars={stars} setStars={setStars} />
        </div>
      </div>
    </form>
  );
}
