function aud_play_pause() {
	var myAudio = document.getElementById("myAudio");
	if (myAudio.paused) {
		myAudio.play();
	} else {
		myAudio.pause();
	}
}

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
		videos: [],
		images: []
	}
})

scoreRef.on('value', function(snapshot) {
	app.groups[0].Points = snapshot.val().aryans
	app.groups[1].Points = snapshot.val().mughals
	app.groups[2].Points = snapshot.val().rajputs
	app.groups[3].Points = snapshot.val().vikings
	app.groups[4].Points = snapshot.val().spartans
});

galleryRef.on('value', function(snapshot) {
	app.images = snapshot.val()
});

videoRef.on('value', function(snapshot) {
});


