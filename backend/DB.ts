import {createConnection} from "mysql2"

export default class DB {
    private connection;

    constructor() {
        this.connection = createConnection({
            host: "localhost",
            database: "projectcarsales",
            user: "root"
        }).promise()
    }
}