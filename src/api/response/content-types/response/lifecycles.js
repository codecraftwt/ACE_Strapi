//@ts-nocheck
module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;

    console.log("========== New Record ==========");
    console.log("Data to be saved:");
    console.log(data);
    console.log("================================");
  },

  async afterCreate(event) {
    console.log("Record created successfully!");

    console.log("Created Record:");
    console.log(event.result);
  },

  async beforeDelete(event) {
    const { where } = event.params;

    console.log("========== Record Deletion ==========");
    console.log("Record to be deleted:");
    console.log(where);
    console.log("======================================");
  },
};