// authorize.js
import rolesPermissions from "../utils/rolesPermissions";

const authorize = (role, resource, action) => {
  return (req, res, next) => {
    const rolePermissions = rolesPermissions[role];
    if (!rolePermissions) {
      return res.status(403).json({ message: "Role not found" });
    }

    const resourcePermissions = rolePermissions.resources[resource];
    if (!resourcePermissions || !resourcePermissions.includes(action)) {
      return res.status(403).json({ message: "Permission denied" });
    }

    next();
  };
};

export default authorize;
