module.exports = (sequelize, DataTypes) =>{

let Box = sequelize.define('Box', {
    boxNumber: {
        type: DataTypes.INTEGER,

    },
    boxSize: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coating: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Box.sync({force: true}).then(()=> {
    console.log('synced box table')
})

return Box
}