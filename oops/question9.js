// Design a factory function.

function UserFactory(role, name) {
  if (role === "admin") {
    return {
      name,
      role,
      permissions: ["read", "write", "delete"],
      sayHi() {
        console.log(`Admin ${name} here!`);
      },
    };
  }

  if (role === "guest") {
    return {
      name,
      role,
      permissions: ["read"],
      sayHi() {
        console.log(`Guest ${name} here!`);
      },
    };
  }

  return {
    name,
    role: "unknown",
    permissions: [],
    sayHi() {
      console.log(`${name} has no defined role.`);
    },
  };
}

const admin = UserFactory("admin", "Anubhav");
const guest = UserFactory("guest", "Shaswat");

admin.sayHi();
guest.sayHi();
