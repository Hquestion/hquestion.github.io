var UITree = function(treeData){
    this.data = treeData;
    this.init();
};

UITree.prototype = {
    init: function(){
        this.$root = new Leaf(this.data);
        return this;
    },
    render: function(container){
        container.appendChild(this.$root.$el);
    }
};