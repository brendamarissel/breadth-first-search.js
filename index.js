function Node(value){

this.edges = [];
this.parent = '';
this.value = value;
this.searched = false;


}

Node.prototype.setValue = function(val){

	 this.value = val;
}


var newNode= new Node(5);