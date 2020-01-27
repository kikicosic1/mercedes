	let input_1,
		input_2,
		input_3;

		let ime = document.getElementById('input-1');
		let mejl = document.getElementById('input-2');
		let poruka = document.getElementById('input-3');

	function posalji() {
		input_1 = document.getElementById('input-1').value;
		input_2 = document.getElementById('input-2').value;
		input_3 = document.getElementById('input-3').value;
		if (input_1 == '') {
			ime.style.border = '1px solid red';	
			alert('Unesite Vase Ime');
		}
		if (input_2 == '') {
			mejl.style.border = '1px solid red';
			alert('Unesite Vase Mejl');	
		}
		if (input_3 == '') {
			poruka.style.border = '1px solid red';	
			alert('Unesite Vasu Poruku');
		
		}	
		if (input_1 != '' && input_2 != '' && input_3 != '') {
			alert('Vasa Poruka je poslata');
		}	
	}