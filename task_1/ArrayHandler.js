console.log(createArr(5, 3));

var multiArray = [
    [
        [1, [1.1]], 2, 3
    ],
    [4, 5],
    [1, [1, 2],
        [
            [1, 2],
            [3, 4]
        ]
    ]
];

console.log(flatten(multiArray));

function createArr(index, length) {
    var array = new Array();

    for (i = 0; i < length; i++) {
        array[i] = index * index;
    };

    return array;
};

function flatten(multiArray) {
    var flatArray = new Array();

    return multiArray.reduce(function(flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
};