$(document).ready(function(){

  var btnSend = $(".send");
  var input = $("#text");
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var container = $(".chat");


  btnSend.click(function(){

    var msg= input.val().trim();

    var newMsg = {
      type: "sent",
      text: msg,
      time: "20:55"
    }

    var html = template(newMsg);
    container.append(html);

    input.val("");

    setTimeout(x,3000);
    function x(){
      var newMsgRec = {
        type: "rec",
        text: "ok",
        time: "20:55"
      }

      var html = template(newMsgRec);
      container.append(html);
    }
  })
})
