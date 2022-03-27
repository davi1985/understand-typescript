export type Construct = { new (...args: any[]): {} };

const userLogged = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: true,
};

@adminProfile
class ChangeAdministrator {
  critic() {
    console.log('Algo crítico foi alterado!');
  }
}

function adminProfile<T extends Construct>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      if (!userLogged || !userLogged.admin) {
        throw new Error('Sem permissão');
      }
    }
  };
}

new ChangeAdministrator().critic();
