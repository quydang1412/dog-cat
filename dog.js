function Dog(){
	this.stomach = [];
};

Dog.prototyp.eat = function(cat){
	this.stomach.push(cat);
};
function run(){
	console.log('the dog is running');
}
