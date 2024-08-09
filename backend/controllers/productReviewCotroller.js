import ProductReview from "../models/productReview.js"; // Adjust the path as necessary

// Create a new review
export const createReview = async (req, res) => {
  try {
    const { product, customer, rating, comment } = req.body;

    const review = new ProductReview({
      product,
      customer,
      rating,
      comment,
    });

    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await ProductReview.find()
      .populate("product")
      .populate("customer");
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a review by ID
export const getReviewById = async (req, res) => {
  try {
    const review = await ProductReview.findById(req.params.id)
      .populate("product")
      .populate("customer");
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a review
export const updateReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const updatedReview = await ProductReview.findByIdAndUpdate(
      req.params.id,
      { rating, comment },
      { new: true, runValidators: true }
    )
      .populate("product")
      .populate("customer");

    if (!updatedReview)
      return res.status(404).json({ message: "Review not found" });

    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a review
export const deleteReview = async (req, res) => {
  try {
    const review = await ProductReview.findByIdAndDelete(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
