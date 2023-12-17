function calculaDiarias(){
	const precodiaria = 50.00;
	var quartos = parseInt(document.getElementById('quartos').value);
	var diarias = parseInt(document.getElementById('diarias').value);
	
	var taxaServico = (diarias < 15) ? 4.00 :((diarias===15)? 3.60 : 3.00);
	var valorConta = (precodiaria + taxaServico) * diarias;
	
	var totalQuartos = quartos * valorConta;
	
	document.getElementById('resultado').innerHTML = `<hr>
		<p><strong>Quantidade de Quartos: ${quartos}<br>
		<p>Quantidade de Diárias: ${diarias}<br>
		<p>Valor da Conta: R$ ${valorConta.toFixed(2)}<br>
		<p>Total de Lucro: R$ ${totalQuartos.toFixed(2)}</strong><br><hr>
		`;
}