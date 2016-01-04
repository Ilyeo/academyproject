(function myBlog() {

	/*document.addEventListener("DOMContentLoaded", function(event) {
		var xmlhttp = new XMLHttpRequest(),
			debugger;
			url = "data/sections.json";

		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.status == 4 && xmlhttp.status ==200) {
				var myArr = JSON.parse(xmlhttp.responseText);
			};
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		}
	}*/

	var app = {
		myDOMapi: domApiFunc(),
		//addMenu: addMenuFunc,
		addSections: addSectionsFunc,
		//updateArticle: updateArticleFunc,
		mainContainer: null,
		init: init
	}

	app.init();


	function init () {
		this.addSections();
	}


	function addSectionsFunc(array, callback) {
		this.mainContainer = this.myDOMapi.getSectionsContainer('main-sections-container');
		var sections = [ //do request 
				'section 1',
				'section 2',
				'section 3',
				'section 4',
				'section 5' 
			];
		function addItemHTML(item) {
			this.mainContainer.innerHTML += item;
		}

		this.myDOMapi.addItems(sections, addItemHTML.bind(this));
	}

	function domApiFunc(){
		function getSectionsContainer (id) {
			return document.getElementById(id);
		}

		function getSections(id) {
			return document.getElementById(id);
		}

		function addItems (items, callback) {
			var section = null;
			for(var i = 0; i < items.length; i++) {
				section = "<section>"+
						  "<header><h2>"+items[i]+"</h2></header>"+
						  "<div class='full'><span class='icon-eye'></span></div>"+
						  "<article>"+
						  "<img src='http://pipsum.com/400x200.jpg' alt='Terrific new'>"+
						  "<p>"+items[i]+
						  "</p>"+
						  "</article>"+
						  "</section>";
				callback(section);
			};
		}
		var publicAPI = {
			getSectionsContainer: getSectionsContainer,
			getSections: getSections,
			addItems: addItems
		}
		return publicAPI;
	};

	/*function DataApi() {
		function getDAta(callback) { 

		}
	}*/

	/*function updateArticleFunc() {
		var sections = API.getSections('section');
		for (var i=0; i < sections.length; i++){ 
			var els = sections[i].children[2].getElementsByTagName('p');
			for(var x = 0; x < els.length; x++){
				els[x].textContent = "New Text For Article";
			};
		};
	}*/

	//updateArticleText();

	//console.log(API.getSections('section'));

})();