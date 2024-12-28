import express from 'express';

const app = express();

app.get('/', (req,res) =>{
    res.send('Server is ready');
});

app.get('jokes', (rq,res) => {
    [
        {
          "id": 1,
          "title": "Programming",
          "setup": "Why do programmers prefer dark mode?",
          "punchline": "Because light attracts bugs!"
        },
        {
          "id": 2,
          "title": "Puns",
          "setup": "Why don’t skeletons fight each other?",
          "punchline": "They don’t have the guts."
        },
        {
          "id": 3,
          "title": "General",
          "setup": "Why did the scarecrow win an award?",
          "punchline": "Because he was outstanding in his field!"
        }
      ]

});

const port = process.env.PORT || 3000;

app.listen(port,() =>{
    console.log(`Server at http:localhost:${port}`);
});