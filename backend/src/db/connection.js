import { connect } from 'mongoose';

const connectToDB = async () => {
    try {
        await connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log(error);
        throw new Error("Cannot Connect To MongoDB")
    }
}

export default connectToDB;