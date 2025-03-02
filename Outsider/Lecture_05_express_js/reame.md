Express.js Ki Kahani – Ek Web Server Ki Kahani
Ek din ek web developer ne socha, "Mujhe ek aisi website banani hai jo users ki request ko samjhe aur unhe response de sake."

Ab problem yeh thi ki JavaScript sirf browser ke andar chalti thi, aur agar usko backend ka kaam karna hota toh manually bohot saari cheezein likhni padti thi. Jaise ki:

Request kaise receive hogi?
Response kaise bhejna hai?
Routing kaise handle karni hai?
Error handling kaise hogi?
Yeh sab manually karna ek musibat tha! 😩

Aur phir aaya Express.js – Ek Hero!
Tabhi ek naye npm package ka janm hua—Express.js! 🚀

Express.js ek framework hai, matlab yeh ek ready-made system hai jo tumhare backend ke kaam ko easy bana deta hai. Express.js sab kuch automate kar deta hai—request lena, response dena, routing karna, errors handle karna—sab kuch!

Matlab Express.js ek server ka boss hai jo backend ke saare rules manage karta hai.

Ek Simple Express Server Ka Janm
Ek din ek developer ne socha, "Chalo, ek chhota sa web server banate hain jo 'Hello World' bole!"

Usne Express.js install kiya aur sirf kuch hi lines likhkar ek working server bana diya:

javascript
Copy
Edit
const express = require('express') // Express.js ko import kiya
const app = express() // Ek Express application banaya

// Jab bhi '/' route pe request aaye toh 'Hello World' bhej do
app.get('/', function (req, res) {
  res.send('Hello World')
})

// Server ko port 3000 pe chala do
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
Aur bas! 🎉 Server request sunne ke liye ready ho gaya.

Ab jab bhi koi browser me localhost:3000 pe jaata, toh server use "Hello World" ka message bhejta!

MERN Stack Aur Express.js Ka Role
Phir developer ne dekha ki MERN stack (MongoDB, Express.js, React, Node.js) ek powerful combination hai jisme Express.js backend ka main hero hota hai!

Express.js kya-kya handle karta hai?

✅ Routing – Kaunsi request kis page pe jaani chahiye.
✅ Middleware – Beech me filtering ya security check lagana.
✅ Request & Response Handling – Data bhejna ya lena.
✅ Error Handling – Koi gadbad ho toh usko sambhalna.

Is tarah, Express.js ek web server ka dimaag ban gaya jo backend development ko super easy bana deta hai!

Aur is tarah, Express.js backend developers ka ek favorite framework ban gaya jo aaj bhi duniya bhar me use hota hai! 🚀🔥

