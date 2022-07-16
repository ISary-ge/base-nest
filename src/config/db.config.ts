import {registerAs} from "@nestjs/config";

export default registerAs('database', () => {
    return {
        type: "postgres",
        logging: true,
        // host: process.env.DB_MAIN_HOST,
		host: 'localhost',
        // port: parseInt(process.env.DB_MAIN_PORT),
		port: '5432',
        // username: process.env.DB_MAIN_USER,
		username: 'postgres',
        // password: process.env.DB_MAIN_PASSWORD,
		password: 'postgres',
        // database: process.env.DB_MAIN_DATABASE,
		database: 'core',
        autoLoadEntities: true,
        // synchronize: process.env.MODE === "dev",
		syncgronize: false,
        entities: ["src/**/*.entity.ts"],
        migrations: ['src/migrations/*{.ts,.js}'],
        cli: {
            migrationsDir: 'src/migrations'
        },
    }
})