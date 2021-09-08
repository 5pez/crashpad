let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// property Model
let propertySchema = require("../models/Property");

// CREATE property
router.route("/create-property").post((req, res, next) => {
  propertySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ propertys
router.route("/").get((req, res) => {
  propertySchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single property
router.route("/edit-property/:id").get((req, res) => {
  propertySchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update property
router.route("/update-property/:id").put((req, res, next) => {
  propertySchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("property updated successfully !");
      }
    }
  );
});

// Delete property
router.route("/delete-property/:id").delete((req, res, next) => {
  propertySchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
