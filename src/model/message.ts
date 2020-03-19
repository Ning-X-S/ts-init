
import { DataTypes, Model } from 'sequelize'
import { sequelize } from './config'

class Message extends Model {
  id!: number;
  account_id?: number;
  content?: string;
  created_at?: Date;
  updated_at?: Date;
}

Message.init({
  message_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  account_id: DataTypes.INTEGER,
  content: DataTypes.STRING,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE
}, {
  sequelize,
  tableName: 't_group_chat_message',
  timestamps: false
})

export default Message
