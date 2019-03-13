'use strict';
module.exports = (sequelize, DataTypes) => {
  const vote = sequelize.define('vote', {
    vote: DataTypes.BOOLEAN
  }, {});
  vote.associate = function(models) {
    // associations can be defined here
  };
  return vote;
};