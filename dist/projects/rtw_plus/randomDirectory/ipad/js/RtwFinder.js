
var RtwFinder = MacysFinder.extend({


    setup: function(){
    
    	this.defaultPage = this.getConfig().defaultPage;  
		
		/* GLOBAL EVENT HANDLERS GO HERE */
        /*pass it another template*/
		this.poolContainer = $("#pool_wrap #pool_itself", this.parentDiv);
		this.productPool = new ProductPool({
			container : this.poolContainer,
			itemsPerPage : 50//!this.itemsPerPage ? 12 : 8
		});
		
		var self = this;
		
		self.votedOnProducts = [];	
		self.cookie=unescape($.cookie('VOTED_ON_ITEMS_RTW'))
		self.votedOnProducts= $.map( self.cookie.split(','), function(value){
			return parseInt(value)
		});
		
		self.attachVotes = function(entryId){
			
	//		console.log('attachVotes fired!', self.votedOnProducts)
			
			if( $.inArray(entryId, self.votedOnProducts ) > -1 ){
				var oldVotes = $('.productListing[entryid='+entryId+'] .votingRow .lovethis .voteCount').text();
				if(oldVotes){
					if(isNaN(oldVotes) == true){
						oldVotes = parseInt(oldVotes);
					}
					if( (oldVotes+1) == 1 ){
						var string = ' LOVES THIS';
					}else{
						var string = ' LOVE THIS';
					}
				}else{
					oldVotes = 1;
					var string = ' LOVES THIS';
				}
				$('.productListing[entryid='+entryId+'] .votingRow .lovethis .voteCount').text( (oldVotes) + string); 
			}
		}
		
		$('a[tracker]').live({
			click:function(event){
				finder.skava.handleTracking(finder.getCurrentPage(),finder.getConfig().clicktracking[ $(this).attr('tracker') ]);
			}
		});
		if ($.browser.msie && parseInt($.browser.version) <= 7) {
			$('#nav ul li a').click(function(){
				setTimeout(function(){
					$(window).trigger('hashchange');
				}, 1)
			});
			$('#home ul.sections li a').live('click', 'a', function(){
				setTimeout(function(){
					$(window).trigger('hashchange');
				}, 1)
			});
			$('.finderPage').live('click', 'a.back_arrow', function(){
				setTimeout(function(){
					$(window).trigger('hashchange');
				}, 1)
			});
			$('.finderPage').live('click', 'a.next_arrow', function(){
				setTimeout(function(){
					$(window).trigger('hashchange');
				}, 1)
			});
			$('#footerContainer #pagination .paging').live('click', 'a.previous', function(){
				setTimeout(function(){
					$(window).trigger('hashchange');
				}, 1)
			});
			$('#footerContainer #pagination .paging').live('click', 'a.next', function(){
				setTimeout(function(){
					$(window).trigger('hashchange');
				}, 1)
			});
			$('#pool_wrap #fake_facets').live('click', 'li a', function(){
				setTimeout(function(){
					$(window).trigger('hashchange');
				}, 1)
			});
		}
		$('div.acc .section .shopnow').live('click', function(){
			finder.scrollPage('pool');
		});
		
		$('#finderContainer').bind('poolPageChanged',function(){
		//	finder.scrollPage('pool');
		});
		//
		//
		// CENTER POPOVERS ON SCROLL/RESIZE
		//
		//
		try {
			document.domain = window.location.host.indexOf("atfingertips.com") > -1 ? "atfingertips.com" : "macys.com";
		} catch(err) {
		}
		
		var handleWindow = function(){
			try {
				var headerHeight = 211;
				var quickviewHeight = 603;
				var giftPopHeight = 263;
				var scrollTop = $(parent.window.document).scrollTop();
				var finderHeight = $('#finderContainer').height();
				var baseY = scrollTop-headerHeight;
				var windowHeight = $(parent.window).height();
				var centerY = baseY+(windowHeight*.5);
				if (!navigator.userAgent.match(/MSIE\s(?!9.0)/)) {
					finder.getConfig().quickView.position[1] = windowHeight<quickviewHeight ? 40 : Math.round(Math.max(0,Math.min(finderHeight-(quickviewHeight+40),centerY-(quickviewHeight*.5))));
				}
				$('#platformPopupContainer,#platformPopupMask').css('top',finder.getConfig().quickView.position[1]);
			} catch(err) {
				console.error('handleWindow fail');
			}
		}
		try {
//			$(parent.window.document).scroll(handleWindow);
		} catch(err) {
			console.error('handleWindow trigger failed');
		}
		handleWindow();
		/* END GLOBAL EVENT HANDLERS */
		this.startFinder();
    },

	loadMyPool:function(dataKey){
		$('#facetsContainer',this.parentDiv).empty();
		if(finder.getConfig().pageData[dataKey]){
			var data = finder.getConfig().pageData[dataKey];
			this.productPool.reset();
			if(data.hasOwnProperty("shopby")){
				var facet2 = new GenericCheckboxFacet(data.shopby, "all", "shop by");
				this.productPool.addFacet(facet2);
	//			facet2.displayHandler.field.bind("click",function(){self.trackFacet(facet2)});
			} else {
				console.log('NO FACETS');
			}
			// load pool
			this.productPool.loadPool(data.pool);
		}else{
			console.error("can't find "+dataKey);
		}
	},

	pageChanged: function(page){
		this.highlightSelected(page);
	},

	highlightSelected: function(page){
		
	},
	
	getConfig: function() {
		return SiteConfig;
	},
	
	getLook:function(args){
//		finder.skava.handleTracking(finder.getCurrentPage(),finder.getConfig().tracking["shop_"+finder.getCurrentPage().navId]);
		finder.skava.quickView({productId:args.productId});
	},
	
	initArrows:function()
	{
		var parentDiv = finder.getCurrentPage().parentDiv;
		
		if($.support.opacity){
			$('#rightArrow, #leftArrow',parentDiv).css({opacity : .4});
		}
			
		$('#rightArrow, #leftArrow',parentDiv).mouseover(function(){
			if($.support.opacity)
			{
				$(this).stop().animate({opacity : 1});
			} else {
				$(this).stop().show();
			}
		}); 
		
		$('#rightArrow, #leftArrow').mouseout(function(){
			if($.support.opacity)
				$(this).stop().animate({opacity : .4});
		}); 
	},
	
	initPlusDots:function()
	{
		jQuery.fx.off = !$.support.opacity;
		var parentDiv = finder.getCurrentPage().parentDiv;
		
		$('DIV.plusDot DIV.dotContent',parentDiv).hide();
		$('DIV.plusDot',parentDiv).fadeOut(0).delay(1000).fadeIn();
		
		if(!finder.isTablet())
		{
			$('DIV.plusDot',parentDiv).hover(
			function(e){
				finder.skava.handleTracking(finder.getCurrentPage(),finder.getConfig().clicktracking[ $(this).children('.dotSign').attr('tracker') ]);
				$(this).children('DIV.dotContent').show();
				$(this).addClass('opened');
			},
			function(e){
				$(this).children('DIV.dotContent').hide();
				$(this).removeClass('opened');
			});
		}else{
			$('DIV.plusDot',parentDiv).click(function(e){
				if($(this).hasClass('opened')){
					$(this).children('DIV.dotContent').hide();
					$(this).removeClass('opened');
				} else {
					$(this).children('DIV.dotContent').show();
					$(this).addClass('opened');
				}
			});
		}
	}
})


var PoolHelper = Class.extend({
    
	parseEntry: function(entry) {
		
		
		if (entry.pfeed_specialsizes && !(entry.pfeed_specialsizes instanceof Array))
			entry.pfeed_specialsizes = entry.pfeed_specialsizes.split(",");
			
		if (entry.pfeed_shopcategory && !(entry.pfeed_shopcategory instanceof Array))
			entry.pfeed_shopcategory = entry.pfeed_shopcategory.split(",");
			
	}
	
});
