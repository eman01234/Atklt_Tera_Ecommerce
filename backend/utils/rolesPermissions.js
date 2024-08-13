// rolesPermissions.js
const rolesPermissions = {
  Admin: {
    resources: {
      products: ["READ", "WRITE", "DELETE"],
      merchants: ["READ", "WRITE", "DELETE"],
      deliveryPersons: ["READ", "WRITE", "DELETE"],
    },
  },
  Manager: {
    resources: {
      products: ["READ"],
      merchants: ["READ", "WRITE"],
      deliveryPersons: ["READ", "WRITE"],
    },
  },
  Merchant: {
    resources: {
      products: ["READ", "WRITE", "DELETE"],
    },
  },
  DeliveryPerson: {
    resources: {
      products: ["READ"],
    },
  },
  Customer: {
    resources: {
      products: ["READ"],
    },
  },
};

export default rolesPermissions;
