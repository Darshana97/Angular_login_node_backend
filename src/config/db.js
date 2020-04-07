import { connect } from 'mongoose';

const mongoUrl = "mongodb+srv://darshana:achi@cluster0-11zdp.azure.mongodb.net/test?retryWrites=true&w=majority";

const connectDb = async () => {
    try {

        await connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database Connected");

    } catch (error) {
        console.log(error.message);
    }
}

export default connectDb;