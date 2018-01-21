var Leaf = function(data, parent){
    this.data = data;
    this.$el = document.createElement('div');
    this.$leaves = [];
    this.isInit = false;
    this.parent = parent;
    this.isExpand = true;
    this.init();
};

Leaf.prototype = {
    init: function() {
        if(this.isInit) return;
        this.$title = document.createElement('div');
        this.$subLeaf = document.createElement('ul');
        this.$title.innerText = this.data.name;
        this.$el.setAttribute('data-order', this.data.order);
        this.$el.setAttribute('data-id', this.data.id);
        var leafLength = this.data.leaf && this.data.leaf.length;
        if(leafLength && leafLength > 0) {
            for(var i = 0; i < leafLength; i++ ) {
                var leafItem = this.data.leaf[i];
                var $leafContainer = document.createElement('li');
                var leafInstance = new Leaf(leafItem, this);
                leafInstance.render($leafContainer);
                this.$subLeaf.appendChild($leafContainer);
                this.$leaves.push(leafInstance);
            }
        }
        this.$el.appendChild(this.$title);
        this.$el.appendChild(this.$subLeaf);
        this.$el.leafData = this;
        this.supportExchange();
        this.supportToggleLeaves();
        return this;
    },
    render: function(container){
        container.appendChild(this.$el);
    },
    supportExchange: function(){
        var self = this;
        for(var i = 0; i < this.$leaves.length; i++) {
            var item = this.$leaves[i];
            (function(ins){
                ins.$el.addEventListener('mousedown', function(e){
                    e.stopPropagation();
                    this.setAttribute('draggable', 'true');
                });
                ins.$el.addEventListener('dragstart', function(e){
                    e.stopPropagation();
                    window.currentParentId = ins.parent.data.id;
                    e.dataTransfer.setData("id",ins.data.id);
                });
                ins.$el.addEventListener('dragover', function(e){
                    e.stopPropagation();
                    if(ins.parent.data.id === window.currentParentId){
                        e.preventDefault();
                    }
                });
                ins.$el.addEventListener('drop', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    var id = e.dataTransfer.getData("id");
                    var dragIns = self.$leaves.find(function(item){
                        return item.data.id + '' === id + '';
                    });
                    moveDiv(dragIns.$el.parentNode, this.parentNode);
                });
                ins.$el.addEventListener('mouseup', function(e){
                    e.stopPropagation();
                    this.removeAttribute('draggable');
                });
            })(item);
        }
    },
    supportToggleLeaves: function(){
        var self = this;
        this.$title.addEventListener('click', function(){
            if(self.isExpand) {
                self.isExpand = false;
                self.$subLeaf.style.display = 'none';
            }else {
                self.isExpand = true;
                self.$subLeaf.style.display = 'block';
            }
        });
    }
};

function moveDiv(node1, node2) {
    var insert = function(nodeInsert,nodeTo){
        nodeTo.parentNode.insertBefore(nodeInsert,nodeTo);
    };
    var obj= document.createElement("a");
    insert(obj,node2);
    insert(node2,node1);
    insert(node1,obj);
}

// find 方法polyfill
Array.prototype.find = Array.prototype.find || function(fn){
    var item;
    for(var i =0; i < this.length; i++) {
        if(fn.apply(this, [this[i], i])) {
            item = this[i];
            break;
        }
    }
    return item;
};

Array.prototype.findIndex = Array.prototype.findIndex || function(fn){
    var item = -1;
    for(var i =0; i < this.length; i++) {
        if(fn.apply(this, [this[i], i])) {
            item = i;
            break;
        }
    }
    return i;
};