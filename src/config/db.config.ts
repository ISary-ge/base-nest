import {registerAs} from "@nestjs/config";
import {SnakeNamingStrategy} from "typeorm-naming-strategies";

export default registerAs('dbConfiguration', () => {
    return {
        type: 'postgres',
        logging: false,
        // host: process.env.DB_MAIN_HOST,
		host: 'localhost',
        // port: parseInt(process.env.DB_MAIN_PORT),
		port: 5432,
        // username: process.env.DB_MAIN_USER,
		username: 'postgres',
        // password: process.env.DB_MAIN_PASSWORD,
		password: 'postgres',
        // database: process.env.DB_MAIN_DATABASE,
		database: 'core',
        // synchronize: process.env.MODE === "dev",
		synchronize: false,
        entities: ["dist/**/*.entity.js"],
        migrations: ['src/migrations/*{.ts,.js}'],
        cli: {
            migrationsDir: 'src/migrations'
        },
        namingStrategy: new SnakeNamingStrategy()
    }
})