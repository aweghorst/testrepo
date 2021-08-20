const mongoose = require("mongoose");

const { Schema } = mongoose;
const Bike = require("./Bike");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    bikes: [Bike.schema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

<<<<<<< HEAD

userSchema.virtual("bikeCount").get(function() {
    return this.bikes.length
=======
userSchema.virtual("bikeCount").get(function() {
    return this.bikes.length;
>>>>>>> c31c68e9b34d6a998537b88c5c0c73269a24076c
});

const User = mongoose.model("User", userSchema);

module.exports = User;
