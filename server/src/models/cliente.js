const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        documento: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.models.Cliente || mongoose.model('Cliente', clienteSchema);