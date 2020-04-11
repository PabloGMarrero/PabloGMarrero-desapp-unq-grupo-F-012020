package unq.tpi.desapp

class Client {
	var name:String
		get()= field
		set(value){field = value}
	var dni:Long
	
	constructor(name:String, dni:Long){
		this.name = name
		this.dni = dni
	}

}