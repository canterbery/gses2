import { Sequelize } from 'sequelize-typescript';
import { Subscription } from './subscription/entities/subscription.entity';

export const databaseProvider = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5434,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
    });

    sequelize.addModels([Subscription]);

    await sequelize.sync();
    return sequelize;
  },
};
