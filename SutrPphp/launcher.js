function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId +
        ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    if ("HuddleNoProperties" === intentName) {
        huddleNoProperties(intent, session, callback);
    } else if ("HuddleForPeople" === intentName) {
        huddleForPeople(intent, session, callback);
    } else if ("HuddleForDuration" === intentName) {
        huddleForDuration(intent, session, callback);
    } else if ("HuddleForFloor" === intentName) {
        huddleForFloor(intent, session, callback);
    } else if ("HuddleForXtiethFloor" === intentName) {
        huddleForXtiethFloor(intent, session, callback);
    } else if ("HuddleForPeopleAndDuration" === intentName) {
        huddleForPeopleAndDuration(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}
