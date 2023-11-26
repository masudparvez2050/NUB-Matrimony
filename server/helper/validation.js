const { check } = require("express-validator");

exports.forgetValidation = [
  check("email", "Please enter a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: false }),
];

exports.imageValidation = [
  check("image")
    .custom((value, { req }) => {
      if (
        req.file.mimetype == "image/jpeg" ||
        req.file.mimetype == "image/png"
      ) {
        return true;
      } else {
        return false;
      }
    })
    .withMessage("Please upload a valid image type PNG or JPG"),
];
