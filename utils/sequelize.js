import {
    Sequelize
} from "sequelize"
const sequelize = new Sequelize({
    database: 'sequelize',
    host: 'localhost',
    username: 'postgres',
    password: '22',
    dialect: 'postgres',
    port: 5432
})
export default sequelize