import User from "../models/User";

export async function loginUser(req, res) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ userName: username });
    if (!user) {
      const error = new Error("Unauthorized");
      return res.status(401).json({ msg: error.message });
    };

    if (await user.checkPassword(password)) {
      res.json({
        username: user.userName,
      });
    } else {
      const error = new Error("Unauthorized");
      return res.status(401).json({ msg: error.message });
    }
  } catch (error) {
    console.error("Error accessing the database:", error);
    return res.status(500).send("Error accessing the database");
  }
}
