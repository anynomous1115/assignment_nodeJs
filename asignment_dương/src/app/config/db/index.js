const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://caosonhai1410:TXOkoeRwPtgJwKk0@cluster0.xoppbaz.mongodb.net/?retryWrites=true&w=majority');
        console.log("connect ok !!!");
    } catch (error) {
        console.log("connect failure !!!");
    }
}
module.exports = { connect };