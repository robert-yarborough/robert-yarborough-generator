

var Accessories2Page = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {
		
		var params = {
				 	title: "accessories",
					url: "html/accessories2.html",
					navId: "accessories2",
					preLoad: [
						'images/accessories2/bg.jpg',
						'images/accessories2/pool_bg.png'		
							  ]
				 }
		
		this._super(params);
		
	},
	
	/* Setup your event handlers */
	setup: function() {
		this._super();
		$('ul.facetTabsContainer li input').each(function(){
			$(this).prop('checked', false);
		});
		$('ul.facetTabsContainer li[pfeed=bags] input').each(function(){
			$(this).prop('checked', true);
			$(this).parent().addClass('toggled');
		});
		
	},
	
	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();
		
		
			
	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();
		
	},
	
	/* Transition your page Out */
	transitionOut: function() {
		this._super();
		
	},
	
	/* Unload the page */
	unload: function() {
		
		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events
		
		this._super();
	},
	
	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}

	
})
