




if (window.openDatabase)
	{
    	var meubd = openDatabase("bondgrana_db", "0.1", "Banco de Dados Local do BondGrana", 1024 * 1024);

    	meubd.transaction(function (t) {
        	t.executeSql("CREATE TABLE IF NOT EXISTS entrada (id INTEGER PRIMARY KEY ASC, nome TEXT, valor FLOAT, categoria TEXT, data DATE)");
    	});
	}
else
	{
    	alert("deu merda");
	}


















function mostraEntrada() {
    if (meubd) {
        meubd.transaction(function (t) {
            t.executeSql("SELECT * FROM entrada", [], atualizaListaEntrada);
        });
    } else {
        alert("deu merda");
    }
}




function atualizaListaEntrada(transaction, results) {
    var listitems = "";
    var listholder = document.getElementById("listaEntrada");

    listholder.innerHTML = "";

    var i;
    for (i = 0; i < results.rows.length; i++) {
        var row = results.rows.item(i);

        listholder.innerHTML += "<li>" + row.nome + " - " + row.valor + " - " + row.categoria + " - " + row.data;
    }

}





















function adicionaEntrada() {

    if (meubd) {
      
        var nome = document.getElementById("nome_entrada").value;
        var valor = document.getElementById("valor_entrada").value;
        var categoria = document.getElementById("categoria_entrada").value;
        var data = document.getElementById("data_entrada").value;


        if (nome !== "" && valor !== "" && categoria !== "" && data !== "") {
         
            meubd.transaction(function (t) {
                t.executeSql("INSERT INTO entrada (nome, valor, categoria, data) VALUES (?, ?, ?, ?)", [nome, valor, categoria, data]);
                mostraEntrada();
            });
        } else {
            alert("deu merda");
        }
    } else {
        alert("deu merda");
    }
}













//manda nudes
mostraEntrada();