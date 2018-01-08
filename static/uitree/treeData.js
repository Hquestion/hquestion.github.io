var treeData = {
    name: '根级节点',
    level: 0,
    isLast: false,
    leaf: [{
        name: '第一级节点1',
        level: 1,
        isLast: false,
        leaf: [{
            name: '第二级节点1',
            level: 2,
            isLast: true,
            order: 1
        }, {
            name: '第二级节点2',
            level:2,
            isLast: true,
            order: 2
        },{
            name: '第二级节点3',
            level: 2,
            isLast: true,
            order: 3
        },{
            name: '第二级节点4',
            level: 2,
            isLast: true,
            order: 4
        },{
            name: '第二级节点5',
            level: 2,
            isLast: true,
            order: 5
        }]
    }, {
        name: '第二级节点1',
        level: 2,
        isLast: true,
        leaf: []
    }]
};