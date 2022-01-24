// I Scoping : outer: [x:undef, inner:undef], inner: [x: undef]

// II Exection : outer: [x:2, inner:fn], inner: [x: undef]

function outer(){
    console.log('outer function..');
    var x = 2;
    var inner = function(){
       console.log('inner function..');
       console.log(x + 2); 
       var x = 0;
       
    };
    return inner;
}

// var result = outer();
// result();

outer()();