const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { IPLS, ESPORTS, GoogleS, StoryS } = require("../Non_Tech_models/Non_Tech");

// List of all non-tech event models
const nonTechSchemas = [IPLS, ESPORTS, GoogleS, StoryS];

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "davidshalomswe@gmail.com",
    pass: "qvmcuzfpdwyxrbuu", 
  },
});

// Function to send an email
const sendMail = async (recipient, subject, message) => {
  const mailOptions = {
    from: "davidshalomswe@gmail.com",
    to: recipient,
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${recipient}`);
  } catch (error) {
    console.error(`❌ Failed to send email: ${error.message}`);
  }
};

// Function to check if user is already registered for two events or the same event
const isUserAlreadyRegistered = async (email, Model) => {
  const registrations = await Promise.all(
    nonTechSchemas.map((schema) => schema.find({ Email: email }))
  );
  const totalRegistrations = registrations.flat().length;
  const isAlreadyRegisteredForSameEvent = await Model.findOne({ Email: email });

  return { totalRegistrations, isAlreadyRegisteredForSameEvent };
};

// Function to handle registration
const registerForEvent = async (Model, req, res, subject, message) => {
  try {
    const { Email, Accommodation } = req.body;

    // Check if user is already registered in any non-tech event
    const { totalRegistrations, isAlreadyRegisteredForSameEvent } = await isUserAlreadyRegistered(Email, Model);

    if (totalRegistrations >= 2) {
      return res.status(400).json({ message: "You can only register for up to two non-technical events." });
    }

    if (isAlreadyRegisteredForSameEvent) {
      return res.status(400).json({ message: "You are already registered for this event." });
    }

    // Register user for the selected event
    const newData = new Model({ ...req.body, Accommodation });
    await newData.save();

    // Send confirmation email
    await sendMail(Email, subject, message);

    res.status(200).json({ message: "🎉 Registration successful! Confirmation email sent." });
  } catch (error) {
    console.error(`❌ Error during registration: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Non-tech event routes
router.post("/ipl", (req, res) => registerForEvent(IPLS, req, res, "IPL Registration", "Thank you for registering for IPL Auction!"));
router.post("/esports", (req, res) => registerForEvent(ESPORTS, req, res, "E-Sports Registration", "Thank you for registering for E-Sports!"));
router.post("/story", (req, res) => registerForEvent(StoryS, req, res, "Story Registration", "Thank you for registering for Story Event!"));
router.post("/google", (req, res) => registerForEvent(GoogleS, req, res, "Geo-Hunters Registration", "Thank you for registering for Geo-Hunters Event!"));

module.exports = router;
