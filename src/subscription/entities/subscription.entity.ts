import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface SubscriptionCreationAttributes {
  email: string;
}

@Table({ tableName: 'subscriptions' })
export class Subscription extends Model<
  Subscription,
  SubscriptionCreationAttributes
> {
  @ApiProperty({ example: '1', description: 'subscription id field' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'johndoe@gmail.com',
    description: 'subscription email field',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;
}
