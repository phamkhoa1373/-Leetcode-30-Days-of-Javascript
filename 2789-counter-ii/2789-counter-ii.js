/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let input = init
    return {
        increment (){
            return input+=1;
        },
        decrement (){
            return input-=1;
        },
        reset (){
            return input = init;
        },
    }
};

const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
 