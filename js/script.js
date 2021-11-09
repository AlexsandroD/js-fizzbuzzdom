const col = document.querySelector('div.col')

for (let i = 1; i <= 100; i++) {
  
    
    if(i % 3 == 0 && i % 5 == 0){
        let box =`<div class='box fizz-buzz'>FizzBuzz</li>`;
        col.innerHTML += box;
    }
    
    else if(i % 3 == 0){
        let box =`<div class='box fizz'>Fizz</li>`;
        col.innerHTML += box;
    }
    
    else if(i % 5 ==0){
        let box =`<div class='box buzz'>Buzz</li>`;
        col.innerHTML += box;

    }

    else{
        let box =`<div class='box'>${i}</li>`;
        col.innerHTML += box;
    }
    
}


