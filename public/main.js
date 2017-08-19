//Function to toggle audioplayback
function aud_play_pause() {
	var myAudio = document.getElementById("myAudio");
	if (myAudio.paused) {
		myAudio.play();
	} else {
		myAudio.pause();
	}
}

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDwhlGYmRDt_-AG_dNSQfbJnBQ6EUD5nh4",
	authDomain: "bharatham-2k17.firebaseapp.com",
	databaseURL: "https://bharatham-2k17.firebaseio.com",
	projectId: "bharatham-2k17",
	storageBucket: "bharatham-2k17.appspot.com",
	messagingSenderId: "859947034253"
};
firebase.initializeApp(config);
var scoreRef = firebase.database().ref('Score/House');
var galleryRef = firebase.database().ref('gallery');
var eventsRef = firebase.database().ref('main/events')


//Initialize Vue Instance

var app = new Vue({
	el: '#app',
	data: {
		menu: [
			{ icon: 'mbri-touch',title:'Get in Touch',class:'.gtouch'},
			{ icon: 'mbri-login', title: 'Gallery',class:'.Gallery' } ],
		people: [
			{ name: "Bisto Baby" ,position:"Chairman",imgurl:"./assets/images/bisto.jpg",fbUrl:"https://www.facebook.com/bisto.sebastian"},
			{name: "George Zen Joe" ,position:"Arts Secretary",imgurl:"./assets/images/zen.jpg",fbUrl:"https://www.facebook.com/Georgezn510"},
			{name: "Delma Joseph" ,position:"Vice Chairperson",imgurl:"./assets/images/delma.jpg",fbUrl:"https://www.facebook.com/delz.joseph"},
			{name: "Arjun Sethunath" ,position:"General Convenor",imgurl:"./assets/images/arjun.jpg",fbUrl:"https://www.facebook.com/delz.joseph"},
			{name: "Razi Abdul Rahman" ,position:"General Secretary",imgurl:"./assets/images/razi.jpg",fbUrl:"https://www.facebook.com/razi.abdulrahman.1"},
			{name: "Gokul Krishna" ,position:"Finance Head",imgurl:"./assets/images/gokul.jpg",fbUrl:"https://www.facebook.com/gokulk10"},
			{name: "Kiran Anto" ,position:"Tech Support",imgurl:"./assets/images/kiran.jpg",fbUrl:"https://www.facebook.com/kiran.anto1"},
			{name: "Abhinav Thomas" ,position:"Tech Support",imgurl:"./assets/images/abhi.jpg",fbUrl:"https://www.facebook.com/abhinavthomas"}],
		title: 'BHARATHAM\
				2k17',
		groups: [
			{groupname: 'Aryans', Points:0},
			{groupname: 'Mughals', Points:0},
			{groupname: 'Rajputs', Points:0},
			{groupname: 'Vikings', Points:0},
			{groupname: 'Spartans', Points:0}],
		images: [],
		events: []
	}
})

// Code to update scores
scoreRef.on('value', function(snapshot) {
	app.groups[0].Points = snapshot.val().aryans
	app.groups[1].Points = snapshot.val().mughals
	app.groups[2].Points = snapshot.val().rajputs
	app.groups[3].Points = snapshot.val().vikings
	app.groups[4].Points = snapshot.val().spartans
});


//Code to fetch all the images
galleryRef.on('value', function(snapshot) {
	app.images=[]
	snapshot.forEach(function(child){
		app.images.push(child.val())
	})
});

// code to display detailed score
var o=[]
eventsRef.on('value',function(snapshot){
	app.events = []
	var event_obj = {first:"",first_name:"",second:"",second_name:"",third:"",third_name:"",name:""}
	event_obj.first = "null"
	event_obj.second = "null"
	event_obj.third = "null"
	snapshot.forEach(function(ch){
		event_obj.name = ch.key
		ch.forEach(function(child){
			child.forEach(function(c){
				if(c.val().position === "first" ){
					event_obj.first = c.val().house
					event_obj.first_name = c.val().name
				} else if(c.val().position === "second" ) {
					event_obj.second = c.val().house
					event_obj.second_name = c.val().name
				} else if(c.val().position === "third") {						
					event_obj.third = c.val().house
					event_obj.third_name = c.val().name
				}
				if((event_obj.first != "null")&&(event_obj.second != "null")&&(event_obj.third != "null")){	
					app.events.push({first:event_obj.first,first_name:event_obj.first_name,second:event_obj.second,second_name:event_obj.second_name,third:event_obj.third,third_name:event_obj.third_name,name:event_obj.name})
					event_obj.first = "null"
					event_obj.second = "null"
					event_obj.third = "null"
					event_obj.name = "null"
				}
			})			
		})
		
	})			
})


