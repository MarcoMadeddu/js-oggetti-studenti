$(document).ready(function(){

  var btnSend = $(".send");
  var input = $("#text");
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var container = $(".chat");

  var messagges = [
    {
      type: "sent",
      text: "ciao come stai?",
      time: "12:54"
    },

    {
      type: "rec",
      text: "Tutto bene tu?",
      time: "12:56"
    },

    {
      type: "sent",
      text: "Anche io",
      time: "12:55"
    },

    {
      type: "rec",
      text: ":)",
      time: "12:57"
    }
  ]

  for(var i = 0; i < messagges.length; i++){
    var actual = messagges[i];

    var predMes ={
      type : actual.type,
      text : actual.text,
      time : actual.time
    }

    var set = template(predMes);
    container.append(set);
  }


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
