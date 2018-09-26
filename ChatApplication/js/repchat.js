const Talk = require('talkjs');



const talkSession = new Talk.Session({
    appId: "tCv0Vp6l"
    me: me
});

const inbox = talkSession.createInbox



<div id="talkjs-container" style="width: 90%; margin: 30px; height: 500px"><i>Loading chat...</i></div>


Talk.ready.then(function() {
    var me = new Talk.User({
        id: "123456",
        name: "DeRon",
        photoUrl: "https://demo.talkjs.com/img/alice.jpg",
        welcomeMessage: "Hey there! How are you? :-)"
    });
    window.talkSession = new Talk.Session({
        appId: "tCv0Vp6l",
        me: me
    });
    var other = new Talk.User({
        id: "222",
        name: "Jacob",
        email: "Jacob@example.com",
        photoUrl: "https://demo.talkjs.com/img/9.jpg",
        welcomeMessage: "Hey, how can I help?"
    });

    var conversation = talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other))
    conversation.setParticipant(me);
    conversation.setParticipant(other);
    var inbox = talkSession.createInbox({selected: conversation});
    inbox.mount(document.getElementById("talkjs-container"));
});
