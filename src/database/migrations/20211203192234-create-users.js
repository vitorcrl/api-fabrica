"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            new Table("users", {
                id: {
                    type: Sequelize.INTEGER,
                    PrimaryKey: true,
                    //autoIncrement: true,
                    generationStrategy: Sequelize.UUID,
                    allowNull: false,
                },
                user: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                password: {
                    type: Sequelize.VARCHAR,
                    isUnique: true,
                    allowNull: false,
                },
                password_hash: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                },
                updated_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                },
            })
        );
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable("users");

        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
};
