module.exports = (sequelize, DataTypes) =>{

let Box = sequelize.define('Box', {
    boxNumber: {
        type: DataTypes.INTEGER,
    },
    boxSize: {
        type: DataTypes.STRING
    },
    coating: {
        type: DataTypes.STRING
    }
})

Box.sync({force: true}).then(()=> {
    console.log('synced box table')
})

return Box
}