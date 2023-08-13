const { model, Schema, Types } = require("mongoose");
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^.+@(?:[\w-]+\.)+\w+$/, "Must contain a valid email address!"],
    },
    thoughts: [{ type: Types.ObjectId, ref: "Thought" }],
    friends: [{ type: Types.ObjectId, ref: "User" }],
  },

  { toJSON: { virtuals: true } }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;
