$(document).ready(function() {
	
function generateEmails() {
 $.ajax({
  url:'emails.json',
  dataType:'json',
  type: 'get',
  cache: false,
  success: function(data){
    // $(data.messages).each(function(index, value){
    //     tr = $('<tr>');
    //     tr.append("<td>" + (value.sender) + "</td>");
    //     tr.append("<td>" + (value.subject) + "</td>");
    //     tr.append("<td>" + (value.tags) + "</td>");
    //     tr.append("<td>" + (value.date) + "</td>");
    //     $('#emailBody').append(tr);
    // });

    //Making sure ajax was successful
    console.log(data);
  }

 });
}
//create collection of emails
let arr1 = generateEmails();

  if (arr1) {
    // clone that collection into a second array
    let arr2 = [...arr1];
    // For each member of the email arr2 collection, create a table row.
    $.each(arr2, function(index, element) {
      // createEmailRow() creates the DOM email row.
      let myRow = createEmailRow(index, element);
      // Stick that row we just created into the email table.
      $('#emailBody').append(myRow);
      // Add that student into the actual school info.
      populateEmailInfo(index, element);
    });
  }

  $('#myModal').on('show.bs.modal', function(e) {
    var idx = $(e.relatedTarget).closest('tr').index();
    $('#schoolModalBody tr').hide().filter('[emailIndex=' + idx + ']').show();
  });

});

function createEmailRow(index, obj) {
  // console.log(obj);
  tr = $('<tr class="email-row">');
  tr.append("<td>" + (obj.sender || "") + "</td>");
  tr.append("<td>" + (obj.subject || "") + "</td>");
  tr.append("<td>" + (obj.tags || "") + "</td>");
  tr.append("<td>" + (obj.date || "") + "</td>");

  return tr;
}

function populateEmailInfo(index, obj) {
  var tr;
  $.each(obj, function(i, value) {
    tr = $('<tr>', {
      emailIndex: index
    });
      tr.append("<td>" + "<button id='modalBtn" + index + "' type='button' class='btn btn-info' data-toggle='modal' data-target='#myModal'>Info</button>"
    + "</td>");
    tr.append("<td>" + (value.body || "") + "</td>");
    $('#schoolModalBody').append(tr);

  });
}

