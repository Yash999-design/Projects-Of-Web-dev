const express = require("express");
const app = express();

app.use(
  express.json()
); /* it's a middleware for Parsing the json object in the body of the request (app.post), because by default this feature is not enabled in express */

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not Found.");
  res.send(course);
});

app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query); //when you query using ? in api for getting specific kind of data.          ?sortBy=name
});

const port = process.env.PORT || 3000;
/* if port is set from terminal: 
  set PORT=5000
  //then port value will be 5000.
*/

app.listen(port, () => console.log(`listening on port ${port}...`));
