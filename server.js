const express =require('express')
const htmlRoute=require('./route/htmlroute')
// const apiRoute=('./route/apiroute')




const app = express()

const PORT =process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(htmlRoute)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

