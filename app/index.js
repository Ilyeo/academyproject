// (function myScope() {

// 	var myApp = function() {
// 		function login(user, psw) {
// 			console.log('logged in as: ' + user);
// 		}
// 		var myAPI = {
// 			login: login
// 		}
// 		return myAPI;
// 	}();
// 	myApp.login('roger', 'hola123');
// })();

(function myBlog() {

	var API = function() {
		function getSections (id) {
			return document.getElementsByTagName(id);
			//return document.querySelectorAll(id);
		}
		var publicAPI = {
			getSections: getSections
		}
		return publicAPI;
	}();

	var updateArticleText = function updateArticleText() {
		var sections = API.getSections('section');
		for (var i=0; i < sections.length; i++){
			var els = sections[i].children[2].getElementsByTagName('p');
			for(var x = 0; x < els.length; x++){
				els[x].textContent = "New Text For Article";
			};
		};
	}

	updateArticleText();

	//});

	//console.log(API.getSections('section'));

})();