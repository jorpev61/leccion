
/***************EJERCICIO DE PRODUCTOS ARREGLOS*******************/
function printList(list)
{
	var listHTML= '<ol>';
	for (var i=0; i < list.length; i += 1)
	{
		listHTML += '<p>'+ list[i] + '</p>';
	}
	listHTML += '</ol>';
	print(listHTML);
}

function print(html)
{
	document.write(html);
}
var busqueda;

var productos = [];
productos.push("Jorge","Masculino",31,100,"La Libertad","Italiano","Trabaja");
productos.push("Javier","Masculino",25,90,"Salinas","Inglés","No Trabaja");
productos.push("Antonio","Masculino",21,61,"Santa Elena","Inglés","Trabaja");
productos.push("Stefania","Femenino",26,90,"Guayaquil","Portugues","No Trabaja");
productos.push("Angela","Femenino",35,90,"Guayaquil","Francés","Trabaja");

while(true){
		var buscar = prompt("Ingrese nombre del estudiante");
		if(buscar=='q')
		{
			break;
		}
		else if (buscar=='l'){
			printList(productos);
		}else{
			var list = productos.indexOf(buscar);
			if (list >= 0)
			{
				alert("Si existe");
				document.write(buscar);
			}
			else
			{
				alert("No existe");
			}

		}

	}


