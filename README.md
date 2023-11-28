# M's Universe: Astronomy Picture of the Day

Welcome to M's Universe, your gateway to exploring the beauty of space through the Astronomy Picture of The Day (APoD). 🌌🔭🌠

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/MirelaManta/APoD.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your NASA API key:
   ```env
   API_KEY=your-api-key
   ```

4. Run the application:
   ```bash
   npm start
   ```

   The server will be running on [http://localhost:3000](http://localhost:3000).

## Features

- View the latest Astronomy Picture of the Day on the home page.
- Search for past APoD images by selecting a specific date.
- Error handling for invalid date requests.

## Technologies Used

- Node.js
- Express.js
- Axios
- EJS (Embedded JavaScript templates)
- Bootstrap 5

## Project Structure

- `index.js`: Server setup, API request functions, and route definitions.
- `views/apod.ejs`: HTML template for displaying the APoD image and details.
- `views/error.ejs`: HTML template for displaying error messages.
- `public/styles/main.css`: Custom styles for the application.

## Screenshots

- Home Page:
![home](https://github.com/MirelaManta/APoD/assets/114492014/6bde6722-d7f0-4a63-a522-5125faf0a105)

- Search by date:
![search-date](https://github.com/MirelaManta/APoD/assets/114492014/8af42c6d-e59d-4a77-8d75-e4821e69933b)

- Error Page:
  ![error](https://github.com/MirelaManta/APoD/assets/114492014/7a6f4b1f-2368-428f-a9d1-02c4491fa411)


## Contributing

If you'd like to contribute to M's Universe, feel free to open an issue or submit a pull request. Your input is highly appreciated!
