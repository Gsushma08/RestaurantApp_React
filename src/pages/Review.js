import React, { useState, useEffect } from "react";
import "../styles/Reviews.css";

const ReviewForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, rating, review });
    setName("");
    setRating(0);
    setReview("");
  };

  return (
    <form className="reviewForm" onSubmit={handleSubmit}>
      <h2 className="reviewFormH2">Leave a Review</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="reviewFormInput"
      />
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
        className="reviewFormInput"
      >
        <option value="">Rate the Restaurant</option>
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>
            {n} Star{n > 1 ? "s" : ""}
          </option>
        ))}
      </select>
      <textarea
        placeholder="Write your review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
        className="reviewFormInput"
      />
      <button type="submit" className="reviewFormButton">
        Submit
      </button>
    </form>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("reviews");
    return savedReviews ? JSON.parse(savedReviews) : [];
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="app">
      <h1 className="appHeader">Restaurant Reviews</h1>
      <ReviewForm onSubmit={addReview} />
      <div className="mapContainer">
        <h1 style={{ fontFamily: 'Times New Roman, serif', fontSize: '4rem', color: 'gold', marginTop: '4rem'}}>Our Location</h1>
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60561.24030310652!2d79.05520631890562!3d18.434789145959982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd910bcf48931%3A0x4889b0398ed69f07!2sKarimnagar%2C%20Telangana!5e0!3m2!1sen!2sin!4v1716099002886!5m2!1sen!2sin"
          width="40%"
          height="400px"
        ></iframe>
      </div>
    </div>
  );
};
export default Reviews;
