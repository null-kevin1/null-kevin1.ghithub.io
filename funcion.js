(function(){
	var actualizar = function(){
		var fecha = new Date();
		var diaSemana = fecha.getDay(),
			hora = fecha.getHours(),
			minutos = fecha.getMinutes(),
			ampm,
			segundos = fecha.getSeconds(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			año = fecha.getFullYear();


		var phora = document.getElementById("horas"),
		pminutos = document.getElementById("minutos"),
		psegundos = document.getElementById("segundos"),
		pdiaSemana = document.getElementById("dia-semana"),
		pdia = document.getElementById("dia-mes"),
		pmes = document.getElementById("mes"),
		paño = document.getElementById("año"),
		pampm = document.getElementById("ampm");

		var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
		pdiaSemana.textContent = semana[diaSemana];

		pdia.textContent = dia;

		var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
		pmes.textContent = meses[mes];

		paño.textContent = año;

		phora.textContent = hora;
		psegundos.textContent = segundos;

		pminutos.textContent = minutos;

		if(hora >= 12){
			hora = hora - 12;
			ampm = "PM";
		} else{
			ampm = "AM";
		}

		if(hora == 0){
			hora = 12;
		}
		phora.textContent = hora;
		pampm.textContent = ampm;

		if(minutos < 10){
			minutos = "0" + minutos;
		}
		if(segundos < 10){
			segundos = "0" + segundos;
		}
	}

	

	actualizar();

	var intervalo = setInterval(actualizar, 1000);
}())