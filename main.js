const textCode = {
	id: document.getElementById("input"),
	vars:{},
	code: [],
	execute: () => {
		let value = textCode.id.value
		value = value.replace(/\t/g, "")
		value = value.split(";")
		value = value.map( (f) => { return f.split(":")	} )

		textCode._initialize(value[0]).map((e)=>{
			textCode.vars[e[0]] = e[1] * 1
		})
		textCode.code = textCode._start(value[1])

		console.log(textCode.vars, textCode.code)
		compile(textCode.vars, textCode.code)
		console.log(value)
	},
	_initialize : (value) => {
		initialize = {
		name: value[0],
			text: value[1],
		}
		let removeIndex = []
		initialize.values = initialize.text.split(`\n`).map((e, index, arr)=>{
			if(e == ""){
				removeIndex.push(index)
			}else{
				return e.replace(/\s/g, "")
			}
		})
		let counter = 0
		removeIndex.map((e)=>{
			initialize.values.splice(e-counter, 1)
			counter+=1
		})
		initialize.values = initialize.values.map((e)=>{
		return e.split("=")
		})
		return initialize.values
	},
	_start : (value) => {
		start = {
			name: value[0],
			text: value[1],
		}
		let removeIndex = []
		start.values = start.text.split(`\n`).map((e, index, arr)=>{
			if(e == ""){
				removeIndex.push(index)
			}else{
				return e.replace(/\s|sbn/g, "")
			}
		})
		let counter = 0
			removeIndex.map((e)=>{
			start.values.splice(e-counter, 1)
				counter+=1
			})
			start.values = start.values.map((e)=>{
			return e.split(",")
		})
		return start.values
	}
}
function execute(){
	textCode.execute()
}