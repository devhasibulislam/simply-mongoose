// external imports
const mongoose = require("mongoose");

// Product schema
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Provide the product name."],
      unique: [true, "Name exists, provide a new."],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name must not be more than 100 characters."],
    },
    description: {
      type: String,
      required: true,
      minLength: [10, "Name must be at least 3 characters."],
      maxLength: [1000, "Name must not be more than 100 characters."],
    },
    price: {
      type: Number,
      required: true,
      min: [5, "Price won't be less than 5."],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs"],
        message: "Unit can't be {VALUE} rather than kg/litre/pcs.",
      },
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "QTY won't be negative."],
      // validate: [/[0-9]/g, "QTY must be an integer"]
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "QTY must be an integer.",
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["In Stock", "Out of Stock", "Discontinued"],
        message:
          "Status won't be {VALUE} rather than In Stock/Out of Stock/Discontinued",
      },
    },

    /* time stamp */
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // updatedAt: {
    //   type: Date,
    //   default: Date.now,
    // },

    /* inventory criteria */
    // supplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Supplier"
    // },
    // categories: [{
    //   name: {
    //     type: String,
    //     required: true
    //   },
    //   _id: mongoose.Schema.Types.ObjectId
    // }]
  },
  { timestamps: true }
);

/**
 * Mongoose consume two middleware for saving data
 * -----------------------------------------------
 * pre()
 * post()
 */

// pre() method
productSchema.pre("save", function (next) {
  // console.log("Pre middleware for saving data");

  if (this.quantity === 0) {
    this.status = "Out of Stock";
  }
  next();
});

// post() method
productSchema.post("save", function (doc, next) {
  // console.log("Post middleware for saving data");
  // console.log(doc); // whole insertion data

  console.log(`Saving data for •${this.name}• complete`);
  next();
});

// methods
productSchema.methods.logger = function () {
  console.log(this); // whole insertion data
};

/**
 * Mongoose query definition
 * -------------------------
 * SCHEMA => MODEL => QUERY
 */

const Product = mongoose.model("Product", productSchema);

module.exports = Product;