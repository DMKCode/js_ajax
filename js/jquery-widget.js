$(document).ready(function() {
    var employeeUrl = 'data/employees.json';
    $.getJSON(employeeUrl, function(employees) {
        var statusHTML = '<ul class="bulleted">';
        employees.forEach(function(employee) {
            if(employee.inoffice === true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employee.name;
            statusHTML += '</li>';
        });
        statusHTML += '</ul>';
        $('#employeeList').html(statusHTML);
    });

    var roomsUrl = 'data/rooms.json';
    $.getJSON(roomsUrl, function(rooms) {
        var roomsHTML = '<ul class="rooms">';   
        console.log(rooms);
        rooms.forEach(function(room) {
            console.log(room);
            
            if(room.available) {
                roomsHTML += '<li class="empty">';
            } else {
                roomsHTML += '<li class="full">';
            }

            roomsHTML += room.room;
            roomsHTML += '</li>';    
        });
        roomsHTML += '</ul>';
        $('#roomList').html(roomsHTML); 
    });
});