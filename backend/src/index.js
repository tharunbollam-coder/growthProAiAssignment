// backend/index.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors({
  origin: "https://growth-pro-ai-assignment-xi.vercel.app", // Adjust this to your frontend URL
  methods: ["GET", "POST"],
}));
app.use(express.json());

// Headline templates with dynamic {name} and {location}
const headlineTemplates = [
  "Why {name} is {location}'s #1 Rated Business in 2025",
  "{name} is Redefining Excellence in {location}",
  "The Buzz Around {name} in {location} is Real",
  "{name} — A Trusted Name in {location} Since 2025",
  "Discover Why {name} is Everyone’s Favorite in {location}",
];

// Helper to generate random float with 1 decimal
function getRandomRating() {
  const num = Math.random() * 1.5 + 3.5;
  return Math.round(num * 10) / 10;
}

// Helper to generate random review count
function getRandomReviews() {
  return Math.floor(Math.random() * 451) + 50;
}

// Helper to generate a dynamic headline
function generateHeadline(name, location) {
  const template =
    headlineTemplates[Math.floor(Math.random() * headlineTemplates.length)];
  return template.replace("{name}", name).replace("{location}", location);
}

// POST /business-data
app.post("/business-data", (req, res) => {
  const { name, location } = req.body;
  const data = {
    rating: parseFloat(getRandomRating()),
    reviews: getRandomReviews(),
    headline: generateHeadline(name, location),
  };
  res.json(data);
});

// GET /regenerate-headline
app.get("/regenerate-headline", (req, res) => {
  const { name, location } = req.query;
  const headline = generateHeadline(name, location);
  res.json({ headline });
});

// Start server
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
