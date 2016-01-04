(function myBlog() {

	var app = {
		myDOMapi: domApiFunc(),
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
				'<section>section 1</section',
				'<section>section 2</section',
				'<section>section 3</section',
				'<section>section 4</section',
				'<section>section 5</section' 
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

		function addItems (items, callback) {
			for(var i = 0; i < items.length; i++) {
				callback(items[i]);
			};
		}
		var publicAPI = {
			getSectionsContainer: getSectionsContainer,
			addItems: addItems
		}
		return publicAPI;
	};

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