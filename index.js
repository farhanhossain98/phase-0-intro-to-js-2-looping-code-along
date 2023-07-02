// Code your solutions in this file
    function writeCards(names, event) {
    const newarray = [];
    for (let i = 0; i < names.length; i++) {
        newarray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newarray; 
    }

   // function countDown(callCount) {
   //     const newarray = []
   //     let i=11; 
   //     while (i > 0) {
   //         console.log(i > 0)
   //     i--;
   //     }
   //     return newarray; 
   //
   // }
function countDown() {
   let countDown = 10;
   while (countDown >= 0) {
    console.log(countDown--);
   }
}

