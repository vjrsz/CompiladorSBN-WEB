let count_lines = 0
		let count_vars = 0

		function addLines(){
			count_lines += 1

			var line = document.createElement("div")
			var span1 = document.createElement("span")
			var span2 = document.createElement("span")
			var span3 = document.createElement("span")
			var ipt1 = document.createElement("input")
			var ipt2 = document.createElement("input")
			var ipt3 = document.createElement("input")

			line.id = "line-" + count_lines
			ipt1.name = 'var1'
			ipt2.name = 'var2'
			ipt3.name = 'var3'

			span1.innerHTML = count_lines + ": "
			span2.innerHTML = "sbn("
			span3.innerHTML = ")"

			line.append(span1)
			line.append(span2)
			line.append(ipt1)
			line.append(ipt2)
			line.append(ipt3)
			line.append(span3)

			let lines = document.getElementById("lines")
			let last = lines.children.length-1

			lines.insertBefore(line, lines.children[last])
			document.getElementById("id-exit").innerHTML = count_lines + 1
		}
		function removeLines(){
			if(count_lines <= 0) return

			var line = document.getElementById("line-"+count_lines)
			document.getElementById('lines').removeChild(line)
			count_lines -= 1

			document.getElementById("id-exit").innerHTML = count_lines + 1
		}
		function addVars(){
			count_vars += 1

			var line = document.createElement("div")
			var span1 = document.createElement("span")
			var span2 = document.createElement("span")
			var ipt1 = document.createElement("input")
			var ipt2 = document.createElement("input")

			line.id = "var-" + count_vars
			ipt1.name = 'name'
			ipt2.name = 'value'

			span1.innerHTML = "name: "
			span2.innerHTML = "value: "

			line.append(span1)
			line.append(ipt1)
			line.append(span2)
			line.append(ipt2)
			document.getElementById("vars").append(line)
		}
		function removeVars(){
			if(count_vars <= 0) return
				
			var line = document.getElementById("var-"+count_vars)
			document.getElementById('vars').removeChild(line)
			count_vars -= 1
		}
		function execute(){
			let vars = {}
			let sbn_codigo = []

 			vars = getValuesVars()
			sbn_codigo = getValuesLines()

			vars = compile(vars, sbn_codigo)

			print(vars)
		}
		function getValuesVars(){
			let vars = {}
			for (var i = 1; i <= count_vars; i++) {
				var line = document.getElementById("var-"+i)
				var name = line.children[1].value
				var value = line.children[3].value*1

				vars[name] = value
			}
			return vars
		}
		function getValuesLines(){
			var sbn_codigo = []
			for (var i = 1; i <= count_lines; i++) {
				var line = document.getElementById("line-"+i)
				var v1 = line.children[2].value
				var v2 = line.children[3].value
				var v3 = line.children[4].value*1

				sbn_codigo.push([v1, v2, v3])
			}
			sbn_codigo.push([0, 0, 0])
			return sbn_codigo
		}
		function print(vars){
			printDiv = document.getElementById("print")
			printDiv.innerHTML = ""
			keys = Object.keys(vars)
			for (var i = 0; i < keys.length; i++) {
				var tr = document.createElement("tr")
				var td1 = document.createElement("td")
				var td2 = document.createElement("td")

				td1.innerHTML =  keys[i] 
				td2.innerHTML = vars[keys[i]]
				tr.append(td1)
				tr.append(td2)
				printDiv.append(tr)
			}
		}