angular.module('starter.services', [])
.factory('Contacts', function ($window) {
    var self = this;

    var contacts = angular.fromJson($window.localStorage["contacts"]);
    if (contacts == undefined)
        contacts = [];
    /*
    contacts[contacts.length] = {
        id: 1,
        name: 'Chayapol',
        phone: '0898998989',
        email: 'mchayapol@gmail.com',
        avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAORAAAAJDgzMGViZjJiLWYxNjYtNDFlYy04YzRjLTk0ZTc5YzBjNmM2ZQ.jpg'
    };
    contacts[contacts.length] = {
        id: 2,
        name: 'Jason',
        phone: '0818118181',
        email: 'jason@gmail.com',
        avatar: ''
    };
    */

    self.all = function () {
        return contacts;
    }

    self.get = function (contactId) {
        for (var i in contacts) {
            var contact = contacts[i];
            if (contact.id == contactId) {
                return contact;
            }
        }
        return;
    }

    self.add = function (contactObj) {
        console.log(contacts);
        contactObj['id'] = contacts.length;
        contacts[contacts.length] = contactObj;
        $window.localStorage['contacts'] = angular.toJson(contacts);
    }

    self.remove = function (contact) {
        // find the index of the contact
        for (var i in contacts) {
            var contact = contacts[i];
            if (contact.id == contactId) {
                contacts.splice(i, 1);
                $window.localStorage['contacts'] = angular.toJson(contacts);
            }
        }
    }

    self.update = function (updatedContact) {
        for (var i in contacts) {
            var contact = contacts[i];
            if (contact.id == updatedContact.id) {
                contacts[i] = updatedContact;
                $window.localStorage['contacts'] = angular.toJson(contacts);
            }
        }
    }

    return self;
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
      id: 5,
      name: 'Chayapol Moemeng',
      lastText: 'Hope it is not too confusing.',
          face: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAORAAAAJDgzMGViZjJiLWYxNjYtNDFlYy04YzRjLTk0ZTc5YzBjNmM2ZQ.jpg'
  }];

  var obj = {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };

  return obj;
});
