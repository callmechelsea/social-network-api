const connection = require("../config/connection");
const { User } = require("../models");

const userNames = [
  "John Jackson",
  "Jane Doe",
  "John Doe",
  "Jane Jackson",
  "John Smith",
  "Jane Smith",
  "John Johnson",
  "Jane Johnson",
  "John Williams",
  "Jane Williams",
  "John Brown",
  "Jane Brown",
  "John Jones",
  "Jane Jones",
  "John Miller",
  "Jane Miller",
];

const emails = [
  "johnjackson@gmail.com",
  "janedoe@gmail.com",
  "johndoe@gmail.com",
  "janejackson@gmail.com",
  "johnsmith@gmail.com",
  "janesmith@gmail.com",
  "johnjohnson@gmail.com",
  "janejohnson@gmail.com",
  "johnwilliams@gmail.com",
  "janewilliams@gmail.com",
  "johnbrown@gmail.com",
  "janebrown@gmail.com",
  "johnjones@gmail.com",
  "janejones@gmail.com",
  "johnmiller@gmail.com",
  "janemiller@gmail.com",
];

connection.on("error", (err) => err);
connection.once("open", async () => {
  console.log("Connected to database!");
  await User.deleteMany({});

  const users = [];

  for (let i = 0; i < userNames.length; i++) {
    const username = userNames[i];
    const email = emails[i];

    users.push({ username, email });
  }

  await User.collection.insertMany(users);

  console.info("Users seeded!");
  process.exit(0);
});
