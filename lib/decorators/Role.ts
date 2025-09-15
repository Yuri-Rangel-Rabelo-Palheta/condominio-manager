export function Role(requiredRole: "admin" | "sindico" | "morador") {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const context = args[0]; // assumimos que sempre passamos { user, ... } para o controller
      const user = context?.user;

      if (!user || user.role !== requiredRole) {
        throw new Error(`Acesso negado: apenas ${requiredRole} pode executar este método`);
      }

      return await originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
