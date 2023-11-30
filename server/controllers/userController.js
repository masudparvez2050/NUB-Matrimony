const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const db = require("../config/dbConnection");
app.set("view engine", "ejs");
const randomstring = require("randomstring");
const sendMail = require("../helper/sendMail");
const { validationResult } = require("express-validator");

const path = require("path");
const fs = require("fs");

/**
 * Handles user registration.
 *
 * @param {object} req - The request object containing user registration data.
 * @param {object} res - The response object used to send the server response.
 */
const register = (req, res) => {
  const { username, phone, email, password, gender, dob } = req.body;

  // Check if the username or email already exists in the database
  const sqlQuery = `SELECT * FROM users WHERE phone = ? OR email = ?`;
  db.query(sqlQuery, [phone, email], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: "Server error" });
    }

    if (rows.length > 0) {
      // A user with the same username or email already exists
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ error: "Server error" });
      }

      const user = {
        username,
        phone,
        email,
        password: hashedPassword,
        gender,
        dob,
      };

      // Insert user into the database
      const insertQuery = `INSERT INTO users SET ?`;
      db.query(insertQuery, user, (err, result) => {
        if (err) {
          return res.status(500).json({ error: "Registration failed" });
        }
        res.status(201).json({ message: "Registration successful" });
      });
    });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  // Query the database to find a user with a matching phone number or email
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, rows) => {
    if (err) {
      // If an error occurs during the database query, send a 500 error response
      return res.status(500).json({ error: "Server error" });
    }

    if (rows.length === 0) {
      // If no user is found, send a 401 error response
      return res.status(401).json({ error: "User not found" });
    }

    const user = rows[0];

    // Compare the provided password with the hashed password stored in the database using bcrypt
    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        // If an error occurs during the password comparison or the passwords do not match, send a 401 error response
        return res.status(401).json({ error: "Authentication failed" });
      }

      // Generate a JWT with the user's username and role
      const token = jwt.sign(
        { username: user.username, gender: user.gender },
        "jwtkey",
        { expiresIn: "1h" }
      );

      // Set the JWT as a cookie in the response
      res.cookie("token", token);
      res.cookie("gender", user.gender);
      res.cookie("userid", user.id);

      // Send a 200 success response with the JWT, username, and role
      res.status(200).json({
        message: "Login successful",
        userid: user.id,
        username: user.username,
        gender: user.gender,
        token,
      });
    });
  });
};

const logout = (req, res) => {
  // You can implement logout logic here, such as invalidating tokens.
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

/**
 * Middleware function to authenticate a user by verifying a JWT token.
 * If the token is valid, the function extracts the user's name from the decoded token and passes control to the next middleware function.
 * If the token is missing or invalid, an error response is sent.
 * @param {Object} req - The request object containing the cookies property.
 * @param {Object} res - The response object used to send the JSON or error response.
 * @param {Function} next - The next middleware function in the chain.
 */
const authenticate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ Error: "You are not authenticated" });
  }

  jwt.verify(token, "jwtkey", (err, decoded) => {
    if (err) {
      return res.json({ Error: "Token is not valid" });
    }

    req.name = decoded.name;
    next();
  });
};

// Delete User Account
const deleteUser = (req, res) => {
  const userId = req.params.id; // User ID to delete

  // First, retrieve the current profile image filename from the database
  const getProfileImageSql = "SELECT profile_pic FROM users WHERE id = ?";
  db.query(getProfileImageSql, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ Message: "Error" });
    }

    const currentImage = results[0] ? results[0].profile_pic : null;
    console.log(`currentImage ${currentImage}`);

    // Delete the previous image if it exists
    if (currentImage) {
      const previousImagePath = path.join(
        __dirname,
        "../public/",
        currentImage
      );

      console.log(`previousImagePath: ${previousImagePath}`);

      fs.unlink(previousImagePath, (deleteErr) => {
        if (deleteErr) {
          console.error("Error deleting previous image:", deleteErr);
        }
      });
    }
  });

  // Delete the user account from the database
  db.query("DELETE FROM users WHERE id = ?", userId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "User deletion failed" });
    }
    res.status(200).json({ message: "User account deleted successfully" });
  });
};

// user profile update controller
const updateUser = (req, res) => {
  const { id } = req.params; // Profile ID to update
  const { password, ...profile } = req.body;

  // Check if the password field is present in the request body
  if (password) {
    // Hash the password using bcrypt
    bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
      if (hashErr) {
        return res.status(500).json({ error: "Error hashing password" });
      }

      // Update the user profile in the database with the hashed password
      const updatedProfile = { ...profile, password: hashedPassword };

      db.query(
        "UPDATE users SET ? WHERE id = ?",
        [updatedProfile, id],
        (updateErr, result) => {
          if (updateErr) {
            return res.status(400).json({ error: "Profile update failed" });
          }
          res.status(200).json({ Status: "Success" });
        }
      );
    });
  } else {
    // If no password field, update the user profile without hashing the password
    db.query(
      "UPDATE users SET ? WHERE id = ?",
      [profile, id],
      (err, result) => {
        if (err) {
          return res.status(400).json({ error: "Profile update failed" });
        }
        res.status(200).json({ Status: "Success" });
      }
    );
  }
};

// user Authentication Profile API
const fetchAuthStudent = (req, res) => {
  db.query("SELECT * FROM users", (err, profiles) => {
    if (err) {
      return res.status(500).json({ error: "Server error" });
    }
    res.status(200).json(profiles);
  });
};

const fetchStudent = (req, res) => {
  const user =
    "SELECT id, username, gender, profile_pic, phone, email, dob FROM users";
  // "SELECT id, custom_id, firstname, lastname, profile_pic, role, division, district, post_office, village, gender, course FROM student";
  db.query(user, (err, profiles) => {
    if (err) {
      return res.status(500).json({ error: "Server error" });
    }
    res.status(200).json(profiles);
  });
};

//Get student Profile

// reset password controllers start here
const forgetPassword = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const email = req.body.email;
  const sqlqurey = "SELECT * FROM users where email=? limit 1";
  db.query(sqlqurey, email, (error, result, fields) => {
    if (error) {
      return res.status(400).json({ message: error });
    }
    if (result.length > 0) {
      const mailsubject = "Forget Password";
      const randomString = randomstring.generate();
      const content = `<p>Hi, ${result[0].username.toUpperCase()} Please <a href="http://127.0.0.1:8000/user/reset-password?token=${randomString}">Click Here</a> to Reset your Password</p>`;

      sendMail(email, mailsubject, content);

      db.query(
        `DELETE FROM password_resets where email=${db.escape(result[0].email)}`
      );

      db.query(
        `INSERT INTO password_resets (email, token)VALUES(${db.escape(
          result[0].email
        )}, '${randomString}')`
      );

      return res.status(200).send({
        message: "Mail sent successfully for reset password",
      });
    }

    return res.status(401).send({
      message: "Email does not exist",
    });
  });
};

const resetPasswordLoad = (req, res) => {
  try {
    const token = req.query.token;
    if (token === undefined) {
      res.render("404");
    }
    db.query(
      `SELECT * FROM password_resets where token=? limit 1`,
      token,
      (error, result, fields) => {
        if (error) {
          console.log(error);
        }
        if (result !== undefined && result.length > 0) {
          db.query(
            "SELECT * FROM users where email=? limit 1",
            result[0].email,
            (error, result, fields) => {
              if (error) {
                console.log(error);
              }
              res.render("reset-password", { user: result[0] });
            }
          );
        } else {
          res.render("404");
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

const resetPassword = (req, res) => {
  // if (req.body.password !== req.body.confirm_password) {
  //   res.render("message", {
  //     message: "Password not Matching",
  //     user: { id: req.body.user_id, email: req.body.email },
  //   });
  // }
  bcrypt.hash(req.body.confirm_password, 10, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(`DELETE FROM password_resets where email = '${req.body.email}'`);

    db.query(
      `UPDATE users SET password = '${hash}' where id = '${req.body.user_id}'`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.render("message", { message: "Password Reset Successfully" });
      }
    );
  });
};

// image upload controller start from here

const uploadProfilePic = (req, res) => {
  const id = req.cookies.userid;
  console.log(id);
  console.log(req.file);

  if (!id) {
    return res.status(400).json({ Message: "User ID is required" });
  }

  if (!req.file) {
    return res.status(400).json({ Message: "Image file is required" });
  }

  // First, retrieve the current profile image filename from the database
  const getProfileImageSql = "SELECT profile_pic FROM users WHERE id = ?";
  db.query(getProfileImageSql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ Message: "Error" });
    }

    const currentImage = results[0] ? results[0].profile_pic : null;
    console.log(`currentImage ${currentImage}`);

    // Delete the previous image if it exists
    if (currentImage) {
      const previousImagePath = path.join(
        __dirname,
        "../public/",
        currentImage
      );

      console.log(`previousImagePath: ${previousImagePath}`);

      fs.unlink(previousImagePath, (deleteErr) => {
        if (deleteErr) {
          console.error("Error deleting previous image:", deleteErr);
        }
      });
    }
    // Find user name for new image name

    const getUserNameSql = "SELECT username FROM users where id = ?";
    db.query(getUserNameSql, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ Message: "Error" });
      }
      console.log(result);
      const newImageFilename = `${id}_${result[0].username}${path.extname(
        req.file.originalname
      )}`;
      const newImage = `images/users/${newImageFilename}`;
      console.log(`newImageFilename : ${newImageFilename}`);
      console.log(`newImage: ${newImage}`);

      // Save the image to the "public/images" folder

      const imagePath = path.join(__dirname, "../public", newImage);
      console.log(`imagePath : ${imagePath}`);

      fs.rename(req.file.path, imagePath, (moveErr) => {
        if (moveErr) {
          return res
            .status(500)
            .json({ Message: "Error moving the image file" });
        }

        // Update the database with the new image
        const updateImageSql = "UPDATE users SET profile_pic = ? WHERE id = ?";
        db.query(updateImageSql, [newImage, id], (updateErr, updateResult) => {
          if (updateErr) {
            return res.status(500).json({ Message: "Error" });
          }
          res.json({ Status: "Success" });
          console.log(updateResult);
        });
      });
    });

    ///////////////////
  });
};

module.exports = {
  register,
  login,
  logout,
  authenticate,
  deleteUser,
  fetchAuthStudent,
  fetchStudent,
  uploadProfilePic,
  updateUser,
  forgetPassword,
  resetPasswordLoad,
  resetPassword,
};
