const hasManagerPrivilegeAccess = () => {
  const isManager = process.env.NEXT_PUBLIC_PERMISSION_LEVEL === "MANAGER";

  return isManager;
};

export default hasManagerPrivilegeAccess;
