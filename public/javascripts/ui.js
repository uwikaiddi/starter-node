// Track the currently selected demo
var currentDemo = 'message';

// Change the currently selected demo
function changeTab(newTab) {
    if (newTab === 'message') {
        currentDemo = 'message';
        $('#messaging').addClass('current');
        $('#call').removeClass('current');
        $('#hello').removeClass('current');
        $('form button').html('Send me a message');
    } else if (newTab === 'call') {
        currentDemo = 'call';
        $('#call').addClass('current');
        $('#messaging').removeClass('current');
        $('#hello').removeClass('current');
        $('form button').html('Call my phone');
    } else {
      currentDemo = 'hello';
        $('#hello').addClass('current');
        $('#call').removeClass('current');
        $('#messaging').removeClass('current');
        $('form button').html('Say hello');
    }
}

// Set up handlers for tabs
$('#messaging').on('click', function(e) { 
    e.preventDefault();
    changeTab('message');
});
$('#call').on('click', function(e) { 
    e.preventDefault();
    changeTab('call');
});
$('#hello').on('click', function(e) { 
  e.preventDefault();
  changeTab('hello');
});

// Set up handler for "flash" message
$('#flash a').on('click', function(e) {
    e.preventDefault();
    $('#flash').hide();
});
