const container = document.querySelector('.container')

for (let i=1; i < 100; i++){
    let element;
    if(i % 5 == 0 && i % 3 == 0){
        console.log(`FizzBuzz`);
        element = `<div class="box box-fizzbuzz">FizzBuzz</div>`;
    }
    else if(i % 3 == 0){
        console.log(`Fizz`);
        element = `<div class="box box-fizz">Fizz</div>`;
    }
    else if(i % 5 == 0){
        console.log(`Buzz`);
        element = `<div class="box box-buzz">Buzz</div>`;
    }
    else{
        console.log(i);
        element = `<div class="box box-number">${i}</div>`;
    }
    container.innerHTML += element;
}
