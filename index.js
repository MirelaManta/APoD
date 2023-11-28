import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;
const API_URL = "https://api.nasa.gov/planetary/apod"

app.use(express.static("public"));

const myAPIKey = process.env.API_KEY;


// Function to fetch APoD data
async function fetchApodData(apiKey, date = null) {
  const params = { api_key: apiKey };
  if (date) {
    params.date = date;
  }
  
  try {
    const response = await axios.get(API_URL, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Route to fetch the APoD data (home page)
app.get("/", async (req, res) => {
  try {
    const apodData = await fetchApodData(myAPIKey);
    res.render("apod.ejs", { apodData });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching APoD data');
  }
});

// Route to search for APoD data by date
app.get("/search", async (req, res) => {
  const requestedDate = req.query.searchByDate;
  console.log(requestedDate);
  // Earliest available date
  const earliestDate = new Date("1995-01-01");
  const requested = new Date(requestedDate);
  const currentDate = new Date();

  // Check if the requested date is earlier than the earliest available date
  if (requested < earliestDate || requested > currentDate) {
    return res.status(400).render("error.ejs");
  }

  try {
    const apodData = await fetchApodData(myAPIKey, requestedDate);
    res.render("apod.ejs", { apodData });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching APoD data');
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

