var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  
  setTimeout(function() {
	chatUpdateSetup();
    Api.sendRequest( '', null );
    //fakeMessage(null);
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
	m = m < 10 ? '0'+m : m;
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  //console.log("msg : ",msg);
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage(msg);
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

function fakeMessage(msg) {
  if ($('.message-input').val() != '') {
    return false;
  }
  
  var context;
  var latestResponse = Api.getResponsePayload();
  if (latestResponse) {
    context = latestResponse.context;
  }

  // Send the user message
  Api.sendRequest(msg, context);
  //var latestResponse = Api.getResponsePayload();
  //console.log("latestResponse : ",latestResponse);
  
  var Response = Api.getResponsePayload();
  //console.log("Response : ",Response);

}

function chatUpdateSetup() {
    var currentRequestPayloadSetter = Api.setRequestPayload;
    Api.setRequestPayload = function(newPayloadStr) {
      currentRequestPayloadSetter.call(Api, newPayloadStr);
      //displayMessage(JSON.parse(newPayloadStr), settings.authorTypes.user);
    };

    var currentResponsePayloadSetter = Api.setResponsePayload;
    Api.setResponsePayload = function(newPayloadStr) {
      currentResponsePayloadSetter.call(Api, newPayloadStr);
	  //console.log(JSON.parse(newPayloadStr));
	  displayMsg(JSON.parse(newPayloadStr));
      //displayMessage(JSON.parse(newPayloadStr), settings.authorTypes.watson);
    };
}

function displayMsg(msg) {
	
 $('<div class="message loading new"><figure class="avatar"><img src="img/chat.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  //setDate();
  for (i = 0; i < msg.output.text.length; i++) {
	
	updateScrollbar();
	//setDate();
	console.log("message" , msg.output.text[0]);
	setDelay(i,msg);
  }
  

	
}

function accountType (response){
//console.log(response);
var res=response;

	  var context;
      var latestResponse = Api.getResponsePayload();
      if (latestResponse) {
        context = latestResponse.context;
      }
	  insertButton(res);
      // Send the user message
      //Api.sendRequest(res, context);

}

function insertButton(msg) {
  //msg = $('.message-input').val();
  //console.log("msg : ",msg);
  if ($.trim(msg) == '') {
    return false;
  }
  //setDate();
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage(msg);
  }, 1000 + (Math.random() * 20) * 100);
}

function setDelay(i,msg) {
	
  setTimeout(function() {
	
    $('.message.loading').remove();
	console.log(msg.output.text);
	console.log(i);
    $('<div class="message new"><figure class="avatar"><img src="img/chat.jpg" /></figure>' + msg.output.text[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
	//setDate();
    //$('<div class="message new"><figure class="avatar"><img src="img/chat.jpg" /></figure>' + msg.output.text + '</div>').appendTo($('.mCSB_container')).addClass('new');
    //setDate();
    updateScrollbar();
	
  }, 4000 + 2000 * i);
  }
