module.exports = (sequelize, DataTypes) => {
  const Assessment = sequelize.define("assessment", {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    questions: { type: DataTypes.JSON },
    submittedBy: { type: DataTypes.JSON }
  });
  return Assessment;
};
