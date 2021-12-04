let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// property model
let propertySchema = require("../models/Property");

// CREATE property✅
router.route("/create-property").post((req, res, next) => {
  // Make sure all fields are filled, might be a better way to do this
  if (
    req.body.category &&
    req.body.description &&
    req.body.price &&
    req.body.address &&
    req.body.city &&
    req.body.state &&
    req.body.zip &&
    req.body.bedrooms &&
    req.body.bathrooms
  ) {
    propertySchema.create(req.body, (error, data) => {
      if (error) {
        console.log("error in /create-property");
        return next(error);
      } else {
        res.json(data);
        console.log("\nData from create:\n" + data);
      }
    });
  } else {
    res.json({
      message: "Please fill all the property fields (address, location, etc)",
    });
  }
});

// READ propertys✅
router.route("/").get((req, res) => {
  propertySchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single property✅
router.route("/:id").get((req, res) => {
  propertySchema.findById(req.params.id, (error, data) => {
    if (error) {
      return res.status(500).json({ error: error });
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
        console.log("error in /update-property");
        return next(error);
      } else {
        res.json(data);
        console.log("Property updated successfully !");
      }
    }
  );
});

// Delete property✅
router.route("/delete-property/:id").delete((req, res, next) => {
  propertySchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next("ERROR DELETING BY ID: " + error);
    } else {
      res.status(200).json({
        msg: data + " deleted successfully",
      });
    }
  });
});

module.exports = router;
