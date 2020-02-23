var tasks = [
    { id: 0, title: 'Hacer lab 1', desc: 'Hacer laboratorio 1 antes de que venza el plazo', date: new Date(), pending: true },
    { id: 1, title: 'Estudiar tema 2', desc: 'Al acabar el tema tengo que hacer un examen', date: new Date(), pending: true },
    { id: 2, title: 'Estudiar tema 3', desc: 'Al acabar el tema tengo que hacer un examen', date: new Date(), pending: false },
    { id: 3, title: 'Estudiar tema 4', desc: 'Al acabar el tema tengo que hacer un examen', date: new Date(), pending: false }

    ];



    tasks.nextTaskId = 4;
export { tasks }