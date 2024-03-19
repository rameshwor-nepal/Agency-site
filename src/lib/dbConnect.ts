import mongoose from "mongoose"

interface Connection {
    isConnected: boolean;
}
const connection: Connection = { isConnected: false };

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            return;
        }

        const db = await mongoose.connect(process.env.MONGO as string);
        if (db.connections[0].readyState === mongoose.ConnectionStates.connected) {
            connection.isConnected = true;
        }
    }
    catch (err: any) {
        throw new Error(err)
    }
    // try {
    //     await mongoose.connect(process.env.MONGO as string)
    //     console.log("connected")
    // } catch (err: any) {
    //     throw new Error(err)
    // }
};