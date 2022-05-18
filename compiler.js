const control = {
	linha_atual: 1,
	exit: true,
}
function sbn(a, b, para){
	control.vars[a] = control.vars[a] - control.vars[b] 
	if(para == 0){
		control.exit = false
		return;
	}
	if(control.vars[a] < 0) control.linha_atual = para
	else control.linha_atual += 1
}

function compile(vars, sbn_codigo){
	control.vars = vars
	control.linha_atual = 1
	control.exit = true

	while(control.exit){
		aux = sbn_codigo[control.linha_atual-1]
		if(aux[2] == 'exit'){ aux[2] = 0 }
		sbn(aux[0], aux[1], aux[2]*1)
	}

	console.log(vars)
	console.log(sbn_codigo)
	console.log(control)
	return vars
}