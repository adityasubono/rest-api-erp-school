import mongoose from "mongoose";
import config from "config";
import log from "../logger";

function connect() {
    // const dbUri = config.get("dbUri") as string;

    const dbUri = config.get("dbUri") as string;
    return mongoose
        .connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            log.info("Database Berhasil Terkoneksi");
        })
        .catch((error) => {
            log.error("Database Gagal Terkoneksi", error);
            process.exit(1);
        });
}

export default connect;
