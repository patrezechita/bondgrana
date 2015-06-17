




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
mostraCategoria();
desenhaGrafico();
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
                    mostraCategoria();
                desenhaGrafico();
}

function atrasaMes() {
    if(mesAtual == 0){
        mesAtual = 11;
        anoAtual --;
    }
    else{
        mesAtual --;
    }

    nomeMesAtual = nomeMes[mesAtual];
    var visualizaMes = document.getElementById("visualizaMes");
    visualizaMes.innerHTML = nomeMesAtual + " - " + anoAtual;
    mostraEntrada();
                    mostraCategoria();
                desenhaGrafico();
}


function mostraEntrada() {
    if (meubd) {
        var mostraMesEntrada = nomeMesBD[mesAtual];
            var mostraAnoEntrada = anoAtual.toString();
    mostraAnoEntrada = mostraAnoEntrada.concat("%");
        meubd.transaction(function (t) {
            t.executeSql("SELECT * FROM entrada WHERE data LIKE ? AND data LIKE ? ORDER BY data DESC", [mostraMesEntrada, mostraAnoEntrada], atualizaListaEntrada);
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




















function atualizaListaCategoria(transaction, results) {

    var listitems = "";



    var i;

    for (i = 0; i < results.rows.length; i++) {

        var row = results.rows.item(i);

     


        row.total = Math.abs(row.total);
        var chart = $('#container').highcharts();
        chart.series[0].addPoint([row.categoria, row.total]);


    }

}



function mostraCategoria() {
    var mostraMesEntrada = nomeMesBD[mesAtual];
                var mostraAnoEntrada = anoAtual.toString();
    mostraAnoEntrada = mostraAnoEntrada.concat("%");


    if (meubd) {
       
        meubd.transaction(function (t) {
            t.executeSql("SELECT categoria, SUM(valor) as total FROM entrada WHERE valor < 0 AND data LIKE ? AND data LIKE ? GROUP BY categoria", [mostraMesEntrada, mostraAnoEntrada], atualizaListaCategoria);
        });
    } else {
        alert("deu uma merda violente");
    }
}








function desenhaGrafico() {



$(function () {
        // Build the chart
        $('#container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Gastos por Categorias'
            },
             credits: {
    enabled: false
  },
  exporting: {
         enabled: false
},

            tooltip: {
                pointFormat: '{series.name}: <b>{point.y:.1f}</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Valor',
                data: []
            }]
        });



});



}






function adicionaEntrada(opcao) {


    

    if (meubd) {
      
        var nome = document.getElementById("nome_entrada").value;
        var valor = document.getElementById("valor_entrada").value;
        var categoria = document.getElementById("categoria_entrada").value;
        var data = document.getElementById("data_entrada").value;

        if(opcao == 0 && valor >= 0)
                valor = valor * -1;

        if(opcao == 1 && valor < 0)
                alert("Não é possível adicionar um valor negativo a uma receita!")
            else{


        if (nome !== "" && valor !== "" && categoria !== "" && data !== "") {
         
            meubd.transaction(function (t) {
                t.executeSql("INSERT INTO entrada (nome, valor, categoria, data) VALUES (?, ?, ?, ?)", [nome, valor, categoria, data]);
                mostraEntrada();
                mostraCategoria();
                desenhaGrafico();
            });
        } else {
            alert("Insira todos os valores antes de adicionar uma entrada.");
        }
    }
    } else {
        alert("Seu navegador não suporta WEB SQL. Utilize o Google Chrome!");
    }
}








function deletaEntrada(id) {

    if (meubd) {

        meubd.transaction(function (t) {
            t.executeSql("DELETE FROM entrada WHERE id=?", [id], mostraEntrada);
                        mostraEntrada();
            mostraCategoria();
            desenhaGrafico();
        });
    } else {
        alert("deu merda");
    }
}


function limpaBancoDeDados(id) {

    if (meubd) {

        meubd.transaction(function (t) {
            t.executeSql("DELETE FROM entrada", [], mostraEntrada);
            mostraEntrada();
            mostraCategoria();
            desenhaGrafico();
        });
    } else {
        alert("deu merda");
    }
}





//manda nudes
mostraEntrada();