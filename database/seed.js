const connectDB = require('./db.js');
const User = require('./models/User');
const Dish = require('./models/Dish');
const dummyDishes = require('./dummydata');

const seedDB = async () => {
  try {
    await connectDB();

    const dummyUser = await User.findOneAndUpdate(
      { googleId: "dummy_user_123" },
      {
        email: "tester@favbytes.com",
        name: "Beta Tester",
        picture: "https://via.placeholder.com/150"
      },
      { upsert: true, new: true }
    );

    console.log(`User created/found: ${dummyUser.email}`);

    await Dish.deleteMany({ userId: dummyUser._id });
    console.log("Cleared existing dummy dishes.");

    const dishesToInsert = dummyDishes.map(dish => ({
      ...dish,
      userId: dummyUser._id
    }));

    await Dish.insertMany(dishesToInsert);
    console.log(`Successfully seeded ${dishesToInsert.length} dishes!`);

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDB();
