const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const { forgetValidation } = require("../helper/validation");

const multer = require("multer");
const path = require("path");
const fs = require("fs");

//api routes
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.delete(
  "/delete/:id",
  userController.authenticate,
  userController.deleteUser
);
router.put(
  "/update/:id",
  userController.authenticate,
  userController.updateUser
);
router.get("/", userController.authenticate, (req, res) => {
  return res.json({
    Status: "Success",
    name: req.body.username,
    token: req.cookies.token,
  });
});
router.get(
  "/auth/api",
  userController.authenticate,
  userController.fetchAuthStudent
);
router.get("/api", userController.fetchStudent);

router.post(
  "/forget-password",
  forgetValidation,
  userController.forgetPassword
);
router.get("/reset-password", userController.resetPasswordLoad);
router.post("/reset-password", userController.resetPassword);

// image upload middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/student");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const filefilter = (req, file, cb) => {
  file.mimetype == "image/jpeg" || file.mimetype == "image/png"
    ? cb(null, true)
    : cb(null, false);
};

const upload = multer({
  storage: storage,
  fileFilter: filefilter,
});

router.post("/upload", upload.single("image"), userController.uploadProfilePic);

module.exports = router;
