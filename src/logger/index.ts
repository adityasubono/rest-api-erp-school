import logger from "pino";
import dayjs from "dayjs";

const log = logger({
    prettyPrint: true,
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format('dddd, MMMM D, YYYY h:mm A')}"`,
});

export default log;
