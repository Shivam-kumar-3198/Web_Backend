import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Declare state for storing jokes
  const [jokes, setJokes] = useState([]);

  // Fetch jokes when the component mounts
  useEffect(() => {
    axios
      .get('http://localhost:5173/api/jokes') // Ensure the backend URL is correct
      .then((response) => {
        console.log(response.data); // Log the data from the server
        setJokes(response.data); // Update the jokes state
      })
      .catch((error) => {
        console.error('Error:', error.message); // Log error message
        if (error.response) {
          console.error('Response:', error.response.data); // Log response data if error occurs
        }
      });
  }, []); // Empty dependency array ensures this runs once after the initial render

  return (
    <>
      <h1>We are Ready for Backend</h1>
      <p>JOKES: {jokes.length}</p>

      {/* Render the jokes */}
      {jokes.length > 0 ? (
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.setup}</p> {/* Showing the setup of the joke */}
            <p><strong>Punchline:</strong> {joke.punchline}</p> {/* Display the punchline */}
          </div>
        ))
      ) : (
        <p>Loading jokes...</p> // Show a loading message if no jokes are fetched
      )}
    </>
  );
}

export default App;
