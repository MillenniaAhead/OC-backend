const { Review: ReviewModal } = require("../../models/SanClient/ReviewModal");

const ReviewController = {
  create: async (req, res) => {
    try {
      const Review = {
        review: req.body.review
       
      };

      const response = await ReviewModal.create(Review);
      res.status(200).json({ response, msg: "created successfully" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const Reviews = await ReviewModal.find();
      res.json(Reviews);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const Reviews = await ReviewModal.findById(req.params.id);
      if (!Reviews)
        return res.status(404).json({ msg: "Review not found" });
      res.json(Reviews);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const Reviews = await ReviewModal.findByIdAndDelete(req.params.id);
      if (!Reviews)
        return res.status(404).json({ msg: "Review not found" });
      res.status(200).json({ Reviews, msg: "Review deleted with success!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const Review = {
        review: req.body.review
        
      };
      const updatedReview = await ReviewModal.findByIdAndUpdate(
        req.params.id,
        Review
      );
      if (!updatedReview)
        return res.status(404).json({ msg: "Review not found" });
      res.status(200).json({ Review, msg: "Review updated successfully!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = ReviewController;
