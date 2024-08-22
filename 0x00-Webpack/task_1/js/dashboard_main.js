import $ from 'jquery';

$(() => {
    $('body').append('<p>Holberton Dashboard</p>');
    

    $('body').append('<p>Dashboard data for the students</p>');
    
  
    $('body').append('<button id="start-button">Click here to get started</button>');
    
  
    $('body').append('<p id="count"></p>');
    
   
    $('body').append('<p>Copyright - Holberton School</p>');


    let counter = 0;
    function updateCounter() {
        counter++;
        $('#count').text(`${counter} clicks on the button`);
    }

    const debouncedUpdateCounter = _.debounce(updateCounter, 300); // 300ms debounce
    $('#start-button').on('click', debouncedUpdateCounter);
});

