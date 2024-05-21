function fizzBuzz(n) {
    let string
    for(let i = 1; i <= n;i++){
        if(i % 3 == 0 && i % 5 == 0){
            string = "FizzBuzz"
        }else if(i % 3 == 0){
            string = "Fizz"
        }else if(i % 5 == 0){
            string = "Buzz"
        }else{
            string = i
        }
        console.log(string) 
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    fizzBuzz(n);
}