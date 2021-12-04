module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        user: DataTypes.STRING,
        password_hash: DataTypes.STRING,
    });

    return User;
};
