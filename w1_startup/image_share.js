if (Meteor.isClient) {
  var img_data = [
  {
    img_src:"parrot.jpg",
    img_alt:"a parrot"
  },
  {
    img_src:"foxes.jpg",
    img_alt:"a fox"
  },
  {
    img_src:"fox.jpg",
    img_alt:"some foxes"
  }
  ];
  Template.images.helpers({images: img_data});

  Template.images.events({
    'click .js-image':function(event){
      $(event.target).css("width", "50px");
    }
  });
}

if (Meteor.isServer) {
}
