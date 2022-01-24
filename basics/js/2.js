function foo(){
    console.log('foo function...')
}

function print(fn){
    fn();
}

print(foo);