// Output numbers from keyboard
function getNumber(value){
    var display;
    var checkbox = document.getElementById('mix-box');
    var hidden_display = document.getElementById('hidden-display');
    if (checkbox.checked){
        for (var i = 0; i < 10; i++){
            display = document.getElementById('pin-display');
            if (display.value.length < 12 & i == value){
                 if (value == 0){
                    display.value += 9;
                    hidden_display.value += value;
                } else {  
                    hidden_display.value += value;
                    display.value += value -1;
                };  
            };   
        };
    } else {
        for (var i = 0; i < 10; i++){
            display = document.getElementById('pin-display');
            if (display.value.length < 12 & i == value){
                display.value += value;
            };
        };
    }; 
};
        
// Clear last symbol on display   
function setCancel(){
    var display = document.getElementById('pin-display');
    var hidden_display = document.getElementById('hidden-display');
    
    display.value = display.value.substring(0, display.value.length - 1);
    hidden_display.value = hidden_display.value.substring(0, hidden_display.value.length - 1);
};

// Clear all
function setClear(){
    var display = document.getElementById('pin-display');
    var hidden_display = document.getElementById('hidden-display');
    
    display.value = '';
    hidden_display.value = '';
    display.setAttribute('type', 'text');
};

// Get the output by alert()
function setEnter(){
    var display = document.getElementById('pin-display');
    var checkbox = document.getElementById('mix-box');
    var hidden_display = document.getElementById('hidden-display');

    if (display.value.length >= 1){
        if (checkbox.checked){
            alert("Ви ввели: " + hidden_display.value);
        } else {
            alert("Ви ввели: " + display.value);
        };
    };
};

// Hide and open pin
function hidePin(){
    var display = document.getElementById('pin-display');
    
    if (display.type == 'text'){
        display.setAttribute('type', 'password');
    } else {
        display.setAttribute('type', 'text');
    };
};

// Mix symbols in pin
function mixPin(){
    var checkbox = document.getElementById('mix-box');

    if (checkbox.checked == true){
        checkbox.checked = false;
    } else {
        checkbox.checked = true;
    };
};



  