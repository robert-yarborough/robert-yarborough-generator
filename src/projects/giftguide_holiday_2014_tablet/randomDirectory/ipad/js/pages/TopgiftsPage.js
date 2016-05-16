

var TopgiftsPage = GgPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "topgifts",
					url: "html/topgifts.html",
					navId: "topgifts",
					preLoad: [

							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();


	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();
        var deeplink = finder.getCurrentPage().params.argc[0];
        if(deeplink == undefined){
            console.log('Landing Page');
            var $chosen = $('#animewrapper').find('.animebucket.' + finder.getCurrentPage().title);
            $chosen.show().siblings().hide();
            this.buildTopGiftsLandingPage(deeplink);
        }else{
            this.buildTopGiftsSectionPage(deeplink);
            console.log('deeplink: ',deeplink);
            // SHOW AND HIDE THE CORRECT BUCKET

            // determine the $chosen anime bucket based on the hashtag and url
            var chosen = this.params.argc[0];

            // the topgifts landing uses the next arg so concat.  example 'topgifts' becomes 'topgifts-him'
            if (this.params.argc[0]) chosen+= '-'+this.params.argc[1];
            var $chosen = $('#animewrapper').find('.animebucket.' + chosen);
            $chosen.show().siblings().hide();

            var divToShow = '#animewrapper .'+this.params.argc[0]
            $(divToShow).show().siblings().hide();
        }



        //  ANIMATION

        // within $chosen, animate anything designated as left
        var leftStartDelay = 0;
        var leftArea = 0;
        $chosen.find('[anime="left"]').each(function(e){
            TweenMax.from($(this), .6, {css:{'opacity':0,'left':'-100', 'top':(leftArea)}, delay: leftStartDelay });
            leftStartDelay += .1;
            leftArea += 75;
        });

        // within $chosen, animate anything designated as top
        var topStartDelay = 0;
        $chosen.find('[anime="top"]').each(function(e){
            TweenMax.from($(this), .6, {css:{'opacity':0, 'top':-100}, delay: topStartDelay });
            topStartDelay += .1;
        });

        // within $chosen, animate anything designated as bottom
        var bottomStartDelay = 0.6;
        var bottomHeight = $('#pageContainer').height();
        $chosen.find('[anime="bottom"]').each(function(e){
            TweenMax.from($(this), .6, {css:{'opacity':0, 'top': bottomHeight+100}, delay: bottomStartDelay });
            bottomStartDelay += .1;
        });




    },


    buildTopGiftsSectionPage: function(section){
        console.log('buildTopGiftsSectionPage('+section+')');
        var topgifts = finder.getConfig().topgifts[section];
        var self = this;
        var one_day = 24*60*60*1000;

		// the pool DOM container
		var $container = $( ".products", this.parentDiv );
		// html template by id
		var productTemplate = "#productTopGifts";

		// load the pool
		function loadPool( url ) {
			var poolRequest = $.ajax({
				type: "GET",
				url: url,
				dataType: "jsonp",
				timeout: 30000,
				tryCount: 0,
				tryLimit: 2,
				async: true,
				success: function( data, textStatus, jqXHR ){
					console.log("pool data has been loaded successfully");
					finder.loadingDisplay.end("load_pool");
					startPool( data );
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
			var tempData = BBPool.getTopTenList( data );
			self.data = tempData;
			renderPage( tempData );
		}

		// destroy and rebuild page
		function renderPage( data ) {
            console.log("!!!!!data   ",data)
			$container.empty();
			$( productTemplate ).tmpl( data ).appendTo( $container );

            //traverse dom elements to dynamically add css positioning to 'special' elements, with custom rules applied
            var item0 = $('.products');
            var item1 = $('.product_image')[0];
            var item_index = $('.indexcount')[0];
            if(item1){
                console.log('this is the product_image class');
                //$('p').children().addClass('bigloveit');
            }if(item0){
                 console.log($(item0));
                //$(item0).attr('div').children(0).addClass('bigloveit');
                //$('.products').find(item1).css({'background-color':'#ff0000'});
            }if(item_index){
                $('.products').find(item_index).css({
                    'width': '37px',
                    'height':'37px',
                    'top':'-18px',
                    'left':'-17px',
                    'border-radius':'24px'


                })

            }
		}

		// call load pool
		var url = poolRoot + topgifts.pool;
		finder.loadingDisplay.start( "load_pool" );
		loadPool( url );


    },

    buildTopGiftsLandingPage: function(section){
        var topgifts = finder.getConfig().topgifts["landing"];
        console.log( topgifts, "TO GIFETS" );

        console.log('buildTopGiftsSectionPage('+section+')');

        var self = this;
        var one_day = 24*60*60*1000;

        // the pool DOM container
        //var $container = $( ".products", this.parentDiv );
        // html template by id
        var productTemplate = "#productTopGiftsLanding";

        // load the pool
        function loadPool( url ) {
            var poolRequest = $.ajax({
                type: "GET",
                url: url,
                dataType: "jsonp",
                timeout: 30000,
                tryCount: 0,
                tryLimit: 2,
                async: true,
                success: function( data, textStatus, jqXHR ){
                    console.log("pool data has been loaded successfully");
                    finder.loadingDisplay.end("load_pool");
                    startPool( data );
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
            var tempData = BBPool.getTopTenList( data );
            self.data = tempData;
            renderPage( tempData );
        }

        // destroy and rebuild page
        function renderPage( data ) {
            console.log("!!!!!data   ",data);
           console.log("renderPage");
            //add pool data to containers declared as dom element
            var $containers = $(".topgiftlandingcontainer");
            console.log($containers ,"$containers " );

            $containers.each( function( i ) {
              // $(this).append("yo");
               // alert( i );
                var containerData = data[ i ];
                $( productTemplate ).tmpl( containerData ).appendTo( $(this) );

            });
            /*
            $container.empty();
            $( productTemplate ).tmpl( data ).appendTo( $container );

            //traverse dom elements to dynamically add css positioning to 'special' elements, with custom rules applied
            var item0 = $('.products');
            var item1 = $('.product_image')[0];
            var item_index = $('.indexcount')[0];
            if(item1){
                console.log('this is true');
                $('.products').find(item1).css({
                    'left':'5px',
                    'top':'6px'
                });
            }if(item0){
                console.log('this is the parent');
                //$('.products').find(item1).css({'background-color':'#ff0000'});
            }if(item_index){
                $('.products').find(item_index).css({
                    'width': '37px',
                    'height':'37px',
                    'top':'-18px',
                    'left':'-17px',
                    'border-radius':'24px'


                })

            }*/


        }

        // call load pool
        var url = poolRoot + topgifts.pool;
        finder.loadingDisplay.start( "load_pool" );
        loadPool( url );
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
