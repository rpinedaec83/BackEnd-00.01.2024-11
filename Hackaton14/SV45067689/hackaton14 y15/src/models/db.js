import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('mysql://root:Markdev34@localhost:3306/hackaton15', {
    dialect: 'mysql',
    logging: false
});

// MODELOS

const User = sequelize.define('User', {
    oAuthId: {
        type: DataTypes.STRING,
        unique: true
    },
    rol: {
        type: DataTypes.ENUM('admin', 'buyer', 'seller'),
        defaultValue: 'buyer',
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Package = sequelize.define('Package', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('pending', 'on the way', 'delivered'),
        defaultValue: 'pending',
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Location = sequelize.define('Location', {
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

// RELACIONES

User.hasMany(Package);
Package.belongsTo(User);    
Package.hasMany(Location);
Location.belongsTo(Package);

// si se require que la base de datos se limoie y se cree de nuevo, se puede descomentar la siguiente linea
// { force: true } entre las opciones del metood sync

sequelize.sync()
.then(() => { 
    console.log('Database and tables created!');
})
.catch(err => {
    console.log(err);
})

export { User, Package, Location, sequelize };