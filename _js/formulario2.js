function json(){
    var obj_form = {
        nome: "",
        idade: "",
        telefone: "",
        endereco: "",
        planeta: 0,
        racas: 0,
        sabor: "",
        tamanho: "",
        trabalho: "",
    }
    var el_nome = document.getElementById("nome");
    obj_form.nome = el_nome.value;
    
    var el_idade = document.getElementById("age");
    obj_form.idade = el_idade.value;
    
    var el_telefone = document.getElementById("telef");
    obj_form.telefone = el_telefone.value;
    
    var el_endereco = document.getElementById("Endereco");
    obj_form.endereco = el_endereco.value;
    
    var el_planeta = document.getElementById("planeta");
    obj_form.planeta = el_planeta.value;
    
    var el_racas = document.getElementById("Racas");
    obj_form.racas = el_racas.value;
    
    var el_trabalho = document.getElementById("queue");
    obj_form.trabalho = el_trabalho.value;
    
    var el_sabor = document.getElementById("pergunta");
    obj_form.sabor = el_sabor.value;
    
    var el_tamanho = document.getElementById("tamanho");
    obj_form.tamanho = el_tamanho.value;
    
    var json = JSON.stringify(obj_form, null, "");
    document.write("<h1>Dados para Json</h1>");
    document.write(json);
}
