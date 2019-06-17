const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  tipoU: {
    type: String,
    required: true
  },

  relatorio: [{
    parecer: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],

  feedback: {
    type: String
  },
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false//para informação não ir no array de users
  },
  passwordResetToken: {
    type: String,
    select: false,
  },
  passwordResetExpires: {
    type: Date,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  dataNasc: {
    type: Date,
    default: Date.now,
  },
  sexo: {
    type: String,
  },
  erros: {
    type: Number,
  },
  acertos: {
    type: Number,
  },
  bebe: {
    pais: {
      mae: {
        etniaM: {
          type: String,
        },
        corCabeloM: {
          type: String,
        },
        corOlhoM: {
          type: String,
        },
      },
      pai: {
        etniaP: {
          type: String,
        },
        corCabeloP: {
          type: String,
        },
        corOlhoP: {
          type: String,
        },
      }
    }
  },
  turma: {
    type: String,
  },
  turmaP: [],
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;