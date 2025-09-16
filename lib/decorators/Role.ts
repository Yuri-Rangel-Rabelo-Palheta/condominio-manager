export function Role(requiredRoles: Array<"admin" | "sindico" | "morador">) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const context = args[0]; // assumimos que sempre passamos { user, ... } para o controller
      const user = context?.user;

      if (!user || !requiredRoles.includes(user.role)) {
        throw new Error(
          `Acesso negado: apenas ${requiredRoles.join(", ")} podem executar este método`
        );
      }

      return await originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
