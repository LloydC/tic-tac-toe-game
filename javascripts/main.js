window.onload = function() {
    /* add code belos here */
    var firstName = 'Lloyd'
    var testArray = ['Amruta',75376,'Zdenka','Jeremy', firstName];
    var firstHeading = document.getElementsByTagName('h1');
    // ArrayList['Tic tac toe']
    var winner = document.getElementById('winner')
    var fr = document.getElementsByClassName('fr');
    console.log(fr)
    firstHeading[0].style.color = 'blue';
    
    var isSingle = false;
    var age = 29;
    
    for(var i = 0; i < testArray.length; i++){
        if(testArray[i] === 'Zdenka'){
            console.log('Yay')
        }
        else if(testArray[i]=== 'Jeremy'){
            console.log('awesome')
        }
        else{
            console.log(testArray[i])
        }
    }
    function callSomeoneFiveTimes(someone, character){ 
        for(var i = 0; i < 5;i++){
            console.log('Hi ' + someone + character)
        }
        
    }

    callSomeoneFiveTimes('Zdenka', '!' )
    callSomeoneFiveTimes('Derrick', '.')
}