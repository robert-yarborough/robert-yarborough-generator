

var Fitknots4Page = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitknots4",
					url: "html/fitknots4.html",
					navId: "fitknots4",
                    navHighlight: 'fitknots',
					preLoad: [

							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();
        this.specialNavHighlight = 'fitknots';

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

