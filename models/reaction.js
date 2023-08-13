const { Schema, Types, SchemaTypes } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: SchemaTypes.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
    versionKey: false,
  }
);

module.exports = reactionSchema;
