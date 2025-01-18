import express from 'express'; // Import express framework
// const roles = ["admin", "user", "guest"]; // Example roles array

const app = express(); // Create an Express application

// Root route - Sends a simple response
app.get('/', (req, res) => {
    res.send('Server is ready'); // Send a text response
});

// Jokes API - Returns a list of jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Programming',
            setup: 'Why do programmers prefer dark mode?',
            punchline: 'Because light attracts bugs!'
        },
        {
            id: 2,
            title: 'Puns',
            setup: 'Why don’t skeletons fight each other?',
            punchline: 'They don’t have the guts.'
        },
        {
            id: 3,
            title: 'General',
            setup: 'Why did the scarecrow win an award?',
            punchline: 'Because he was outstanding in his field!'
        }
    ];
    res.json(jokes); // Send JSON response
});

// Start the server on port 3000
const port = process.env.PORT || 5173;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`); // Log server URL
});
