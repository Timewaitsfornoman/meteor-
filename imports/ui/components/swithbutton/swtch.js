Template.switchbutton.events({
  "click  #slider": function(evt) {
    if ($("#slider").text() === "关") {
      $("#slider").css({
        "left": "0px",
        "background-color": "#5586DF"
      }).text("开");
      $("#swithcheckbox").attr("checked", true);
    } else {
      $("#slider").css({
        "left": "30px",
        "background-color": "#ddd"
      }).text("关");
      $("#swithcheckbox").attr("checked", false);
      Meteor.logout(function() {Router.go("/");});
    }
  }
});