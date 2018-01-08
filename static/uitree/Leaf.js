var Leaf = function(data){
    this.data = data;
    this.$el = document.createElement('div');
    this.isInit = false;
    this.init();
};

Leaf.prototype = {
    init: function() {
        if(this.isInit) return;
        this.$title = document.createElement('div');
        this.$subLeaf = document.createElement('ul');
        this.$title.innerText = this.data.name;
        this.$title.setAttribute('data-order', this.data.order);
        var leafLength = this.data.leaf && this.data.leaf.length;
        if(leafLength && leafLength > 0) {
            for(var i = 0; i < leafLength; i++ ) {
                var leafItem = this.data.leaf[i];
                var $leafContainer = document.createElement('li');
                var leafInstance = new Leaf(leafItem);
                leafInstance.render($leafContainer);
                this.$subLeaf.appendChild($leafContainer);
            }
        }
        this.$el.appendChild(this.$title);
        this.$el.appendChild(this.$subLeaf);
        this.$el.leafData = this;
        return this;
    },
    render: function(container){
        container.appendChild(this.$el);
    },
    supportExchange: function(){

    }
};