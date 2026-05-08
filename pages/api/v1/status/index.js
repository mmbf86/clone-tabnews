function status(request, response) {
  // response.status(200).send("Requisição cod 200 concluída com sucesso");
  response
    .status(200)
    .json({ chave: "Requisação cod 200 concluída com sucesso" });
}

export default status;
