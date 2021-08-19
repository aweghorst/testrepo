const { AuthenticationError } = require("apollo-server-express");
const { User, Bike } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    bikes: async () => {
      return await Bike.find();
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
          .select("-__v -password")
          .populate("bikes");

        return user;
      }
      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addBike: async (parent, args, context) => {
      if (context.user) {
        const bike = await Bike.create(args);
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { bikes: bike._id } },
          { new: true }
        );
        return bike;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addComment: async (parent, { bikeId, commentBody }, context) => {
      if (context.user) {
        const updatedBike = await Bike.findOneAndUpdate(
          { _id: bikeId },
          {
            $push: {
              comments: {
                commentBody,
                username: context.user.username,
              },
            },
          },
          { new: true, runValidators: true }
        );

        return bike;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    updateBike: async (parent, { bikeId, description, image }, context) => {
      if (context.user) {
        const updatedBike = await Bike.findByIdAndUpdate(
          { _id: bikeId },
          { description: description, image: image },
          { new: true }
        );

        return updatedBike;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    deleteBike: async (parent, { bikeId }, context) => {
      if (context.user) {
        Bike.findOneAndDelete({ _id: bikeId });

        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { bikes: bikeId } },
          { new: true }
        ).populate("bikes");

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    updateStatus: async (parent, { bikeId, isLost, location }, context) => {
      if (context.user) {
        const updatedBike = await Bike.findByIdAndUpdate(
          { _id: bikeId },
          { status: { isLost: isLost, location: location } },
          { new: true }
        );

        return updatedBike;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      return updatedBike;
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
