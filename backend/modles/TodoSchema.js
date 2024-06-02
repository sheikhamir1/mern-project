const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    AddTodo: {
      type: String,
      required: true,
    },

    isCompleted: {
      type: Boolean,
      default: false,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
