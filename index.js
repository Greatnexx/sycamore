// Assignment 1


function createCounter(){
    let count = 0;
    return{
        increment:function increment(){
           return count ++;
        },
        Decrement : function decrement(){
          return  count --;
        }

    }

  }

  const getCount =createCounter();
  console.log(getCount.increment());
  console.log(getCount.Decrement());
  
// Assignrment 2
  const numbers = [1,2,3,4,5]
  const mappedArray = numbers.map(num => num * 3)
  console.log(mappedArray);

//   Assignment three
  
const number = [10,15,20,25,30];
  const filteredArray = number.filter(num => num >= 20)
  console.log(filteredArray);
  

//   Assignment four

  const runTwice=(func)=>{
   func();
   func();
    

  }
runTwice();
 