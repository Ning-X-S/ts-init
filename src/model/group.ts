
import { DataTypes, Model } from 'sequelize'
import { sequelize } from './config'

class Group extends Model {
  group_id!: number;
  channel?: number;
  created_at?: Date;
  updated_at?: Date;
}

Group.init({
  group_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  channel: DataTypes.INTEGER,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE
}, {
  sequelize,
  tableName: 't_group_chat',
  timestamps: false
})

export default Group
