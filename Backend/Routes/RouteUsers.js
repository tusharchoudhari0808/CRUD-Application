const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userControllers.js");
const userSchema = require("../middilwere/validation.js");

//  Validation middleware
const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      success: false,
      message: "Validation Error",
      errors: error.details.map((err) => err.message), // show all validation errors
    });
  }
  next();
};

//  Routes
router.get("/page", UserController.paginateUsers);
router.post("/create", validate(userSchema), UserController.createUser);
router.get("/getAll", UserController.getAllUsers);
router.get("/get/:id", UserController.getUserById);
router.put("/update/:id", validate(userSchema), UserController.updateUser);
router.delete("/delete/:id", UserController.deleteUser);

module.exports = router;
