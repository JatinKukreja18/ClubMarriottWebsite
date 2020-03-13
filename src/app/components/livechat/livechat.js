
var element
$(document).ready(function(){

  element = $(".floating-chat.marriott-lchat");
  var myStorage = localStorage;
  var tooltip = $('.tooltip-onload');

  setTimeout(function() {
    element.addClass("enter");
  }, 1000);
  element.click(openElement);

  // Adding click events to toggle screens in chatbot
  $('#leaveMessageLink').click(function(){
    $(".chat .chat-wrapper").addClass("hidden");
    $(".chat .chat-wrapper.leaveMessage").removeClass("hidden");
    $(".header .title").empty().append('<img class="hidden" onclick="backToLeave()" src="../../../assets/back.svg">');
  });
  setTimeout(function() {
    element.addClass('enter');
  }, 1000);

  setTimeout(function() {
      tooltip.addClass('enter');
  }, 2000);

  setTimeout(function() {
      tooltip.removeClass('enter');
  }, 7000);
})



function openElement() {
  var messages = element.find('.messages');
  var textInput = element.find('.text-box');
  element.find('>i').hide();
  element.addClass('expand');
  element.find('.chat').addClass('enter');
  var strLength = textInput.val().length * 2;
  textInput.keydown(onMetaAndEnter).prop("disabled", false).focus();
  element.off('click', openElement);
  element.find('.header a').click(closeElement);
  element.find('#sendMessage').click(sendNewMessage);
  messages.scrollTop(messages.prop("scrollHeight"));
  textInput.focus(function() {
  if ($(this).text() === "Type here..."){
      $(this).text("").focus();
  }
  });
  textInput.blur(function() {
      if ($(this).text() === ""){
          $(this).text("Type here...");
      }
  });
  textInput.blur();
}

function closeElement() {
  element.find('.chat').removeClass('enter').hide();
  element.find('>i').show();
  element.removeClass('expand');
  element.find('.chat .header a').off('click', closeElement);
  element.find('#sendMessage').off('click', sendNewMessage);
  element.find('.text-box').off('keydown', onMetaAndEnter).prop("disabled", true).blur();
  setTimeout(function() {
      element.find('.chat').removeClass('enter').show()
      element.click(openElement);
  }, 500);
}

function sendNewMessage() {
  var userInput = $(".text-box");
  var newMessage = userInput
    .html()
    .replace(/\<div\>|\<br.*?\>/gi, "\n")
    .replace(/\<\/div\>/g, "")
    .trim()
    .replace(/\n/g, "<br>");

  if (!newMessage) return;

  var messagesContainer = $(".messages");

  messagesContainer.append(['<li class="self">', newMessage, "</li>"].join(""));

  // clean out old message
  userInput.html("");
  // focus on input
  userInput.focus();

  messagesContainer.finish().animate(
    {
      scrollTop: messagesContainer.prop("scrollHeight")
    },
    250
  );
}

function onMetaAndEnter(event) {
  if ((event.metaKey || event.ctrlKey) && event.keyCode == 13) {
    sendNewMessage();
  }
}
function backToLeave() {
  $(".chat .chat-wrapper").addClass("hidden");
  $(".chat .chat-wrapper.leaveContMess").removeClass("hidden");
  $(".header .title").empty().append('Live Assistance');
}
$('#tooltip-cross').click(function() {
  $('.tooltip-onload').removeClass('enter');
})
