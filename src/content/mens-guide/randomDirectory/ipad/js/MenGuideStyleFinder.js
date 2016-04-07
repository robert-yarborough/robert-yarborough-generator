
var MenGuideStyleFinder = MacysFinder.extend({


    setup: function(){

    	this.defaultPage = this.getConfig().defaultPage;

		/* GLOBAL EVENT HANDLERS GO HERE */

       finder.autotracker = new AutoTracker();

        // handle vote tracking..
        jQuery("#finderContainer").bind("skavaVote", function(event) {
            finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().tracking.vote);
        })


		jQuery("DIV[href]").live("click", function() {
			window.location = jQuery(this).attr("href");
		})


        /////// open subnav after time done

        finder.skava.initializeWidgets("BODY");
		/* END GLOBAL EVENT HANDLERS */



		// browser detection flags
        finder.simpleAnime=false;

        if ( $.browser.msie ) {

            var fc = $('#finderContainer').addClass('msie');

            if ($.browser.version.indexOf('7')>=0) {
                fc.addClass('ie7');
                finder.simpleAnime=true;
            }

            else if ($.browser.version.indexOf('8')>=0) {
                fc.addClass('ie8');
                finder.simpleAnime=true;
            }

        }

        this.startFinder();
        IS_IPAD = navigator.userAgent.match(/iPad/i) !== null;
        IS_IPHONE = (navigator.userAgent.match(/iPhone/i) !== null) || (navigator.userAgent.match(/iPod/i) !== null);

        if (IS_IPAD || IS_IPHONE) {
            //alert("yo");
            $("#navBar ul li a").bind("click touchend" , function( event ) {
                event.preventDefault();
                console.log("CLICK");
                var $target = $(event.target);
                var href = $target.attr("href");
                window.location = href;
                //console.log( $target , " TARGET% **********************");
                //var href = $(event.target).attr("href");
                //alert( href );
            });
            /*
            $('a').on('click touchend', function() {
                var link = $(this).attr('href');
                window.open(link,'_blank'); // opens in new window as requested

                return false; // prevent anchor click
            });*/
        }

    },


    pageChanged: function(page){

        this.highlightSelected(page);

        if(page.navHighlight == "home"){
            $("#finderContainer #navContainer").show();
           // $("#BODY").css("height: 700px;")
        }else{
            $("#finderContainer #navContainer").show();
            //$("#BODY").css("height: 560px;")
        }
        if(page.navHighlight != "shirtTieMixer"){
            $("#id_stMixerPopup").hide();
        }


        ////hide/clear footer pool if page is not in how to wear it

        if( page.navHighlight == "htwhotspot" || page.navHighlight == "htwproducts"){
        }else{

            $('#footerContainer #products').html(' ');
        }

    },

    returnUrl: function() {
        var url = webRoot + "/#/" + finder.currentPage.navId;
        if (finder.currentPage.params.argc) {
            if (finder.currentPage.params.argc.length > 0) {
                 url += "/" + finder.currentPage.params.argc.join("/");
            }
        }
        return url;
    },

    highlightSelected: function(page){

        //  main nav hi lights
        jQuery(".highlighted", "#navContainer").removeClass("highlighted");
        jQuery("#"+page.navHighlight, "#navContainer ").addClass("highlighted");

        // subnav high lites

        var subnav = $('#navContainer').find('#subnav');
        subnav.find('li').removeClass('highlighted');
        subnav.find('.'+page.navHighlight).addClass('highlighted').parent().parent().addClass('highlighted');



        // set footer
        if (page.showFooterCTA){
            $('#footer').hide();
            $('#subfooter').show();
        }
        else {
            $('#footer').show()
            $('#subfooter').hide();
        }

    },

	getConfig: function() {
		return SiteConfig;
    },

    fitguideimagemaptracking: function( $obj ) {
        var extrastring = '.' + $obj.attr('addingtrack');
        var $page=finder.getCurrentPage();
        try {
            var tracking = $.extend(true, {}, finder.getConfig().tracking[$page.navId]);
            tracking.pageid+=extrastring;
            //console.log('################===>  ', tracking);
            finder.skava.handleTracking(this, tracking);
        } catch(e) {
            // we don't have tracking for this page...
        }
    }

});


var PoolHelper = Class.extend({

	parseEntry: function(entry) {

		/*
		if (entry.pfeed_specialsizes && !(entry.pfeed_specialsizes instanceof Array))
			entry.pfeed_specialsizes = entry.pfeed_specialsizes.split(",");

		if (entry.pfeed_color && !(entry.pfeed_color instanceof Array))
			entry.pfeed_color = entry.pfeed_color.split(",");
		*/

        if (entry.pfeed_classicstyle && !(entry.pfeed_classicstyle instanceof Array))
            entry.pfeed_classicstyle = entry.pfeed_classicstyle.split(",");


        if (entry.pfeed_modernstyle && !(entry.pfeed_modernstyle instanceof Array))
            entry.pfeed_modernstyle = entry.pfeed_modernstyle.split(",");

        if (entry.pfeed_contemporarystyle && !(entry.pfeed_contemporarystyle instanceof Array))
            entry.pfeed_contemporarystyle = entry.pfeed_contemporarystyle.split(",");
	}

});

