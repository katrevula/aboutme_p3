var arr = ['Hi', 'Hello', 'Helloooo']
    i = 0;

$(document).on('click', '#btnClickme', function() {
    
    if(i === arr.length){
     i=0;   
    }
    
    $('#lbltext').text(arr[i]);
    i++;
    return false;
});