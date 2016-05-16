

var ShopPage = GgPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {
		var params = {
			title: "shop",
			url: "html/shop.html",
			navId: "shop",
			preLoad: []
		};
		
		var self = this;

		this._super(params);

		this.navId = params.navId;
		
		$("#finderContainer").on('click','#shop .voteButton',{},function(event){
			event.preventDefault();
			event.stopPropagation();
			var entryId = parseInt( $(this).parents('.product').attr('entryId'), 10 );
			var entry = _.findWhere( finder.currentPage.data, {entryId: entryId});
			console.log( entry, "ENTRY" );
			//var e = self.products.db({entryId:entryId}).get();
			
			try {
				addToVoteList(entryId, entry.inVoteList, entry.votes);
			} catch(err) {
				console.log('addToVoteList',entryId, entry.inVoteList, entry.votes);
			}
		});

		$("#finderContainer").on('change','#shop .filter',{},function(event){
			event.preventDefault();
			event.stopPropagation();
			var pfeed = $(this).val().split(",")[0];
			var value = $(this).val().split(",")[1];
			self.cb().filterPool( pfeed, value );
			//alert("change");
		});

		$("#finderContainer").on('change','#shop #sortby',{},function(event){
			var state = $(this).val();
			//sortPool( state );
			self.cb().sortPool( state );
			//alert("sortby");
		});
		
		// this.data is orginal data set
		this.data = [];
		// this.currentData is the sorted, filtered or changed data set
		this.currentData = [];
	},
	
	/* Setup your event handlers */
	setup: function() {

		this._super();
		// total number of items of current data
		var totalItems = 0;
		// start index for paging
		var pageIndex = 0;
		// number of items to load at a time
		var pageSize = 20;
		// only renders pages if the does not equal pageSize
		var prevItemsOnPage;
		// set dynamic page proeprty to the page value/
		// on scroll this will change
		var itemsOnPage = pageSize;
		// current data filtered and sorted if need be
		var currentSort;
		// the data for the page
		var pageData;

		var self = this;
		var $slider;
		
		// the pool DOM container
		var $container = $( ".products" );

		// html template by id
		var productTemplate = "#productListingNew";

		// **********************************************************
		// slider global  variables go here
		// **********************************************************
		// rebuild the whole slider is it already built
		var isSliderBuilt = false;
		// default current slide will be changed by processParams
		var currentIndex = 0;
		// store data objecrt for each slide here
		var currentArray = [];
		// total number of slides
		var totalSlides;
		// the image width, hopefully for each category they are the same .... looks like not
		var imageWidth;

	

		// reset pool
		// emptry container
		// unbind scrolling
		function resetPool() {
			itemsOnPage = pageSize;
			unbindEvents();
			$container.empty();
			$('.filterBar #sortby').val(0);
			//$(".filterBar #sortby").val("")
		}

		// load the pool
		function loadPool( url, poolName ) {
			var poolRequest = $.ajax({
				type: "GET",
				url: url,
				dataType: "jsonp",
				timeout: 30000,
				tryCount: 0,
				tryLimit: 2,
				async: true,
				success: function( data, textStatus, jqXHR ){
					console.log("pool data has been laoded successfully");
					finder.loadingDisplay.end("load_pool");
					var tempData = BBPool.processData( data );
					BBPoolCache.storePoolByName( tempData, poolName );
					startPool( tempData );
				},
				error: function( request, type, errorThrown ){
					//alert("ERROR");
					console.error( 'error loading', arguments );
					//self.loadNext();
					finder.loadingDisplay.end("load_pool");
				}
			});
		}

		// once the data is loaded do this
		function startPool( data ) {
			// self.data is orginal data set
			//console.log( data.entryStats, "ENTRY STATS");
		
			tempData = BBPool.setTopGiftedItem( data );
			self.data = tempData;
			//setTopGiftedItem
			// An example using a filter
			
			/*var filteredData = BBPool.filter( self.data, function( value ) {
				if( value.testIndex === 0 ) return value;
			} );*/
			
			self.currentData = self.data.slice( 0 );
			//self.currentData = filteredData;
			//BBPool.setTopProduct( self.currentData );
			bindEvents();
			sortPool();
			
			// sets the page data
		
		}

		// renders data for current page
		function setPage() {
			var pageData = self.currentData.slice( pageIndex * itemsOnPage, pageIndex * itemsOnPage + itemsOnPage );
			//console.log( pageData, ' pageData *********************');
			renderPage( pageData );
		}

		// increments page as user scrolls down
		function incrementPage() {
			prevItemsOnPage = itemsOnPage;
			// page size gets bigger and bigger until it equals the total items
			itemsOnPage =  ( itemsOnPage + pageSize > totalItems ) ? totalItems : itemsOnPage + pageSize;
			if (prevItemsOnPage !== itemsOnPage) {
				setPage();
			} else {
				unbindEvents();
			}
		}

		// DOM specific events can go here
		function bindEvents() {
			try {
				/*
				$( parent.window.document ).bind('scroll.endless', function(){
					console.log(" SCROLL ");
					var headerHeight = 212;
					var scrollTop = $( parent.window.document ).scrollTop();
					var contentHeight = $( parent.window.document ).height();
					var windowHeight = $( parent.window ).height();
					var p = scrollTop / ( contentHeight - windowHeight );
					// AUTO LOAD NEXT PAGE OF PRODUCTS
					if( p > 0.4 ){
						incrementPage();
					}
				});
				*/

				$(window).bind("scroll.endless", function( event ) {
					if($(window).scrollTop() + $(window).height() > $(document).height() - 900) {
						incrementPage();
					}
				});
			} catch( err ) {
				console.log( "Error", err);
			}


		}

		function unbindEvents() {
			$( parent.window.document ).unbind( "scroll.endless" );
		}

		// destroy and rebuild page
		function renderPage( data ) {
			$container.empty();
			$( productTemplate ).tmpl( data ).appendTo( $container );
		}

		function sortPool( state ) {
			currentSort = state;
			switch( state ) {
				case "PRICE_HIGH_TO_LOW":
					self.currentData = BBPool.sortDataPriceHighToLow( self.currentData );
					break;
				case "PRICE_LOW_TO_HIGH":
					self.currentData = BBPool.sortDataPriceLowToHigh( self.currentData );
					break;
				case "VOTES_HIGH_TO_LOW":
					self.currentData = BBPool.sortDataVotesHighToLow( self.currentData );
					//self.currentData = BBPool.sortDataPriceLowtoHigh( self.data.slice(0) );
					break;
				default:
					self.currentData = BBPool.sortDataByPoolOrder( self.currentData );
			}
			totalItems = self.currentData.length;
			renderPage( self.currentData );
			//setPage();
		}

		function filterPool( pfeed, value ) {
			if ( value === "DEFAULT" ) {
				self.currentData = self.data.slice(0);
			} else {
				self.currentData = BBPool.filter( self.data.slice(0), function( entry ) {
					if( entry[ pfeed ] === value ) return entry;
				} );
			}

			// fitler under 25 example
			//var dataUnder25 = BBPool.filterDataUnderValue( finder.currentPage.data, 25);
			// fitler under 50 example
			//var dataUnder50 = BBPool.filterDataUnderValue( finder.currentPage.data, 50);
			// fitler under 100 example
			//var dataUnder100 = BBPool.filterDataUnderValue( finder.currentPage.data, 100);

			// reset the itemsonpage to have pagination work right 
			itemsOnPage = pageSize;
			console.log( self.currentData, "currentData" );
			sortPool( currentSort );
			//totalItems = self.currentData.length;
			//setPage();
		}

		function buildHeader( o ) {
			var headerTemplate = "#shopHeaderTemplate";
			var $container = $(".marquee");

			$container.empty();
			$( headerTemplate ).tmpl( o ).appendTo( $container );
		}

		function buildFilters( o ) {

			//$container.empty();
			var template;
			var $container = $( ".filterBar", this.parentDiv );
			$container.empty();

			if (o.filters) {
				template = "#filterTemplate";
				
				$( template ).tmpl( o.filters ).appendTo( $container );
			}

			template = "#sortTemplate";
			var html = $( template ).tmpl();
			$container.append( html );
			
		}

		function resetSliderBuild() {
			isSliderBuilt = false;
			if( $slider ) $slider.unbind();
		}
		
		var cb = function() {
			return {
				// have to reset this for tablet
				resetSliderBuild: resetSliderBuild,

				resetPool: resetPool,
				loadPool: loadPool,
				sortPool: sortPool,
				filterPool: filterPool,
				startPool: startPool,

				buildHeader: buildHeader,
				buildFilters: buildFilters
			};
		};

		// set up the header object
		if( finder.isTablet() ) {
			self.slidingHeaderForTablet = finder.setSlidingHeaderForTablet();
		}

		self.cb = cb;
	},
	
	/* Handle Deeplinking */
	processParams: function() {
		this._super();

		var config;
		var parentConfig;


		// Get the right config onject
		if ( this.params ) {
			if ( this.params.argc ) {
				if ( this.params.argc.length > 0 ) {
					if ( finder.getConfig()[ this.navId ] ) {
						if ( finder.getConfig()[ this.navId ][ this.params.argc[0] ] ) {
							parentConfig = finder.getConfig()[ this.navId ][ this.params.argc[0] ];
							if ( finder.getConfig()[ this.navId ][ this.params.argc[0] ][ this.params.argc[1] ] ) {
								config = finder.getConfig()[ this.navId ][ this.params.argc[0] ][ this.params.argc[1] ];
							}
						}
					}
				}
			}
		}

		//var key = fthis.navId+'_'+this.params.argc[0]+'_'+this.params.argc[1];
		//config = finder.getConfig()[ key ];


		var setupInterface = this.cb();
		// pool url
	
		setupInterface.resetPool();
		if ( config ) {
			if( finder.isTablet() ) {
				if (this.prevArgc) {
					if ( this.prevArgc[ 0 ] != this.params.argc[ 0 ]) {
						//SlidingHeader.reset();
						this.slidingHeaderForTablet.reset();
						setupInterface.resetSliderBuild();
					}
				}
				this.slidingHeaderForTablet.init( parentConfig );
				//self.slidingHeaderForTablet.init( parentConfig );

				//setupInterface.buildHeaderTablet( parentConfig );

			} else {
				setupInterface.buildHeader( config );
			}
			
			setupInterface.buildFilters( config );

			var url = poolRoot + config.poolName;
			var poolName = config.poolName;
			var data = BBPoolCache.getPoolByName( poolName );

			if ( data === -1 ) {
				finder.loadingDisplay.start( "load_pool" );
				setupInterface.loadPool( url, poolName );
			} else {
				setupInterface.startPool( data );
			}
			
			//setTimeout( function() { setupInterface.loadPool( url ); }, 1000 );
		}

		this.prevArgc = this.params.argc;

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
		if ( this.slidingHeaderForTablet ) {
			this.slidingHeaderForTablet.reset();
		}
	},
	
	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}
});
