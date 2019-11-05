const tarefas = [
  { id: 1, descricao: 'npm init -y', pronto: true },
  { id: 2, descricao: 'npm install express body-parser', pronto: true },
  { id: 3, descricao: 'npm install -D nodemon', pronto: true },
  { id: 4, descricao: 'Entregar TCC', pronto: false }
];

exports.getTarefas = (req, res, next) => {
  res.json(tarefas);
};

exports.postTarefa = (req, res, next) => {
  const descricao = req.body.descricao;
  const pronto = req.body.pronto;
  const id = tarefas.reduce(
    (valorAnterior, tarefa) => Math.max(valorAnterior, tarefa.id + 1),
    0
  );
  const novaTarefa = { id, descricao, pronto };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
};

exports.getTarefa = (req, res, next) => {
  const idTarefa = req.params.idTarefa;
  const tarefa = tarefas.find(t => t.id == idTarefa);

  if (tarefa) res.json(tarefa);
  else res.status(404).json({});
};

exports.putTarefa = (req, res, next) => {
  const idTarefa = req.params.idTarefa;
  const update = tarefas.findIndex(t => t.id == idTarefa);
  console.log(update)
  tarefas[update] = req.body
  res.json(tarefas[update])
  console.log(tarefas);
};

exports.deleteTarefa = (req, res, next) => {
  const idTarefa = req.params.idTarefa;
  var indexOfTarefa = tarefas(t => t.id == idTarefa);
  tarefas.splice(indexOfTarefa, 1);
  console.log(tarefas);
};
