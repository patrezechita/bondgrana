




if (window.openDatabase)
	{
    	var meubd = openDatabase("bondgrana_db", "0.1", "Banco de Dados Local do BondGrana", 1024 * 1024);

    	meubd.transaction(function (t) {
        	t.executeSql("CREATE TABLE IF NOT EXISTS entrada (id INTEGER PRIMARY KEY ASC, nome TEXT, valor FLOAT, categoria TEXT, data TEXT)");
    	});
	}
else
	{
    	alert("deu merda");
	}



var nomeMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var nomeMesBD = ["%-01-%", "%-02-%", "%-03-%", "%-04-%", "%-05-%", "%-06-%", "%-07-%", "%-08-%", "%-09-%", "%-10-%", "%-11-%", "%-12-%"];
// va
var dataAtual = new Date();
var mesAtual = dataAtual.getMonth();
var nomeMesAtual = nomeMes[mesAtual];
var anoAtual = dataAtual.getFullYear();




//document.getElementById("demo").innerHTML = mesAtual;
function mostraMes() {





    var visualizaMes = document.getElementById("visualizaMes");
    visualizaMes.innerHTML = nomeMesAtual + " - " + anoAtual;
}

function inicializaFuncoes() {
    mostraEntrada();
    mostraMes();
}

function adiantaMes() {
    mesAtual = (mesAtual + 1) % 12;
    if(mesAtual == 0) {
        anoAtual ++;
    }
    nomeMesAtual = nomeMes[mesAtual];
    var visualizaMes = document.getElementById("visualizaMes");
    visualizaMes.innerHTML = nomeMesAtual + " - " + anoAtual;
    mostraEntrada();
}

function atrasaMes() {
    mesAtual = (mesAtual - 1);
    if(mesAtual < 0){
        mesAtual = 11;
    }
    if(mesAtual == 0) {
        anoAtual --;
    }
    nomeMesAtual = nomeMes[mesAtual];
    var visualizaMes = document.getElementById("visualizaMes");
    visualizaMes.innerHTML = nomeMesAtual + " - " + anoAtual;
    mostraEntrada();
}


function mostraEntrada() {
    if (meubd) {
        var mostraMesEntrada = nomeMesBD[mesAtual];
            var mostraAnoEntrada = anoAtual.toString();
    mostraAnoEntrada = mostraAnoEntrada.concat("%");
        meubd.transaction(function (t) {
            t.executeSql("SELECT * FROM entrada WHERE data LIKE ? AND data LIKE ?", [mostraMesEntrada, mostraAnoEntrada], atualizaListaEntrada);
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

        if(row.valor < 0){
        listholder.innerHTML += "<tr><td>" + row.nome + "</td><td>" + "<span class='badge progress-bar-danger'>"+ row.categoria +"</span>" + "</td><td>" 
        + row.valor + "</td><td>" + row.data + "</td><td>"
        + 


    " <span class='glyphicon glyphicon-remove-circle' aria-hidden='true' style='color:red' onclick='deletaEntrada(" + row.id + ");'></span>" + "</td></tr>";
        }
else {

        listholder.innerHTML += "<tr><td>" + row.nome + "</td><td>" + "<span class='badge progress-bar-success'>"+ row.categoria +"</span>" + "</td><td>" 
        + row.valor + "</td><td>" + row.data + "</td><td>"
        + 


    " <span class='glyphicon glyphicon-remove-circle' aria-hidden='true' style='color:red' onclick='deletaEntrada(" + row.id + ");'></span>" + "</td></tr>";
    
}
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
            alert("coloca os valor seu pau no cu");
        }
    } else {
        alert("deu merda");
    }
}




//function to remove a car from the database, passed the row id as it's only parameter

function deletaEntrada(id) {
    //check to ensure the mydb object has been created
    if (meubd) {
        //Get all the cars from the database with a select statement, set outputCarList as the callback function for the executeSql command
        meubd.transaction(function (t) {
            t.executeSql("DELETE FROM entrada WHERE id=?", [id], mostraEntrada);
        });
    } else {
        alert("deu merda");
    }
}








//manda nudes
mostraEntrada();