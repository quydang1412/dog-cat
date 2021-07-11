function Dog(){
	this.stomach = [];
};

Dog.prototyp.eat = function(cat){
	this.stomach.push(cat);
};
