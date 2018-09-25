$(document).ready(function() {
 $.ajax({
  url:'emails.json',
  dataType:'json',
  type: 'get',
  cache: false,
  success: function(data){
    $(data.messages).each(function(index, value){
        tr = $('<tr>');
        tr.append("<td>" + (value.sender) + "</td>");
        tr.append("<td>" + (value.subject) + "</td>");
        tr.append("<td>" + (value.tags) + "</td>");
        tr.append("<td>" + (value.date) + "</td>");
        $('#emailBody').append(tr);
    });
  }

 });



// $.getJSON("emails.json", function(data){
//   $.each(data, function(key, val){
//         tr = $('<tr>');
//         tr.append("<td>" + (value.sender) + "</td>");
//         tr.append("<td>" + (value.subject) + "</td>");
//         tr.append("<td>" + (value.tags) + "</td>");
//         tr.append("<td>" + (value.date) + "</td>");
//         $('#emailBody').append(tr);
//   });
// });

});


