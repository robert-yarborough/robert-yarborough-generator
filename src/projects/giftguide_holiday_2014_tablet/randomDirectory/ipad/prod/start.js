/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/config/_config.js */

//var isProduction = false;

//FILES_ROOT = VERSION_DIR;
//VERSION_DIR = "http://d3pnveezgteiph.cloudfront.net/impulse/v201106081412/";


var DOC_ROOT = "";

try {
	FILES_ROOT;
	DOC_ROOT = FILES_ROOT;
} catch (e) {
	DOC_ROOT = VERSION_DIR;
}


var assetsDirectory = DOC_ROOT + 'ipad/';
var webRoot = DEEPLINK_DIR;
var popupPosition = [256, 150, 126, 80];
var quickViewPosition = [null, 10, 658, 603];
var shouldCache = false;
var shouldProxy = false;





var SiteConfig = {
	
	defaultPage: 'home',
	'assetsDirectory': assetsDirectory,
	webRoot: DEEPLINK_DIR,
	
	aliases: {},
	
	quickView: {
		catId: "this is the cat id",
		position: [null, 10, 658, 603],
		bgColor: "#000000"
	},
	
	comment: {
		position: [150, 70]
	}
	
	

};


/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/config/aliases.js */


SiteConfig.aliases = {
	
	/*
	'index': {
		page: "genderSelect",
		query: ""
	}
	*/
	
	
};

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/config/ralphlauren.js */
SiteConfig.ralphlauren = {
		
	products: {
		"1353235": {
			newname: "MCOM-Ho14-RLGiftGuide_MENS_01C.jpg",
			sequenceIndex: 1
		},
		"1499671": {
			newname: "MCOM-Ho14-RLGiftGuide_MENS_01D.jpg",
			sequenceIndex: 2
		},
		"1397271": {
			newname: "MCOM-Ho14-RLGiftGuide_MENS_01E.jpg",
			sequenceIndex: 3
		},
		"1477259": {
			newname: "MCOM-Ho14-RLGiftGuide_MENS_02C.jpg",
			sequenceIndex: 4
		},
		"1482642": {
			newname: "MCOM-Ho14-RLGiftGuide_MENS_02D.jpg",
			sequenceIndex: 5
		},
		"398774": {
			newname: "MCOM-Ho14-RLGiftGuide_MENS_02E.jpg",
			sequenceIndex: 6
		},
		"398772": {
			newname: "MCOM-Ho14-RLGiftGuide_MENS_03A.jpg",
			sequenceIndex: 7
		},
		"1213829": {
			newname: "MCOM-Ho14-RLGiftGuide_MENS_03B.jpg",
			sequenceIndex: 8
		}

	}
	
};

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/config/sharing.js */


SiteConfig.sharing = {
		
	site: {
		mailerIds: {
			staging: 388,
			production: 388
		},
		url: webRoot,
        icon: assetsDirectory + "images/fb_share_icon.jpg",
        facebook: {
            title: "title at macys.com",
            description: "description at macys.com"
        },
        twitter: "twitter at macys.com",
		pinterest: {
			image: assetsDirectory + "images/fb_share_icon.jpg",
			desc: "this is the pinterest Description"
		}
	}
	
	
};

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/config/shop.js */


SiteConfig.shop = {

	her: {
		sweaters: {
			headerImage: assetsDirectory + "images/forCMS/shop_her_sweaters.jpg",
			poolName: "forher_missy",
			filters: {
				options: [
					{
						text: "Shop by:",
						value: "DEFAULT"
					},
					{
						text: "All",
						value: "DEFAULT"
					},
					{
						text: "Michael Kors",
						pfeed: "pfeed_brand",
						value: "Michael Kors"
					},
					{
						text: "Lauren Ralph Lauren",
						pfeed: "pfeed_brand",
						value: "Lauren Ralph Lauren"
					},
					{
						text: "Charter Club",
						pfeed: "pfeed_brand",
						value: "Charter Club"
					},
					{
						text: "Style&co.",
						pfeed: "pfeed_brand",
						value: "Style&co."
					},
					{
						text: "Vince Camuto",
						pfeed: "pfeed_brand",
						value: "Vince Camuto"
					},
					{
						text: "INC International Concepts",
						pfeed: "pfeed_brand",
						value: "INC International Concepts"
					},
					{
						text: "Alfani",
						pfeed: "pfeed_brand",
						value: "Alfani"
					},
					{
						text: "Tommy Hilfiger",
						pfeed: "pfeed_brand",
						value: "Tommy Hilfiger"
					}
				]
			}
		},
		accessories: {
            headerImage: assetsDirectory + "images/forCMS/shop_her_accessories.jpg",
            poolName: "forher_handbags"
        },
		jewelrywatches: {
			headerImage: assetsDirectory + "images/forCMS/shop_her_jewelrywatches.jpg",
			poolName: "forher_jewelry"
		},
		/*beauty: {
			headerImage: assetsDirectory + "images/forCMS/shop_her_jewelry.jpg",
			poolName: "forher_beauty"
		},*/
		pajamas: {
			headerImage: assetsDirectory + "images/forCMS/shop_her_pajamas.jpg",
			poolName: "forher_robes"
		},
		shoes: {
			headerImage: assetsDirectory + "images/forCMS/shop_her_shoes.jpg",
			poolName: "forher_watches"
		},
		hatsglovesscarves: {
			headerImage: assetsDirectory + "images/forCMS/shop_her_hatsglovesscarves.jpg",
			poolName: "forher_clothing"
		},
		giftsets: {
			headerImage: assetsDirectory + "images/forCMS/shop_her_giftsets.jpg",
			poolName: "forher_missy"
		},
		giftsunder: {
			headerImage: assetsDirectory + "images/forCMS/shop_her_giftsunder.jpg",
			poolName: "forher_gifts100"
		}
	},
	him: {
		sweaters: {
			headerImage: assetsDirectory + "images/forCMS/shop_him_sweaters.jpg",
			poolName: "forhim_clothing",
				filters: {
				options: [
					{
						text: "Shop by:",
						value: "DEFAULT"
					},
					{
						text: "All",
						value: "DEFAULT"
					},
					{
						text: "Calvin Klein",
						pfeed: "pfeed_brand",
						value: "Calvin Klein"
					},
					{
						text: "Lauren Ralph Lauren",
						pfeed: "pfeed_brand",
						value: "Lauren Ralph Lauren"
					},
					{
						text: "Hugo Boss",
						pfeed: "pfeed_brand",
						value: "Hugo Boss"
					},
					{
						text: "Tommy Hilfiger",
						pfeed: "pfeed_brand",
						value: "Tommy Hilfiger"
					},
					{
						text: "Levi's",
						pfeed: "pfeed_brand",
						value: "Levi's"
					},
					{
						text: "Alfani",
						pfeed: "pfeed_brand",
						value: "Alfani"
					},
					{
						text: "Sperry Top-Sider",
						pfeed: "pfeed_brand",
						value: "Sperry Top-Sider"
					},
					{
						text: "Geoffrey Beene",
						pfeed: "pfeed_brand",
						value: "Geoffrey Beene"
					},
					{
						text: "Michael Kors",
						pfeed: "pfeed_brand",
						value: "Michael Kors"
					},
					{
						text: "Speedo",
						pfeed: "pfeed_brand",
						value: "Speedo"
					},
					{
						text: "Dockers",
						pfeed: "pfeed_brand",
						value: "Dockers"
					}
				]
			}

			//["Calvin Klein", "Polo Ralph Lauren", "Hugo Boss", "Tommy Hilfiger", "Levi's", "Alfani", "Sperry Top-Sider", "Geoffrey Beene", "Michael Kors", "Speedo", "Dockers", "Perry Ellis", "Jockey", "Club Room", "Kenneth Cole Reaction", "Cole Haan", "Lacoste", "Nautica", "Timberland", "Nike", "adidas", "Armani Jeans", "Lauren Ralph Lauren", "Sean John", "Stacy Adams", "Denim & Supply Ralph Lauren", "Tommy Bahama"]
		},
		shirts: {
			headerImage: assetsDirectory + "images/forCMS/shop_him_shirts.jpg",
			poolName: "forhim_cologne"
		},
		accessories: {
			headerImage: assetsDirectory + "images/forCMS/shop_him_accessories.jpg",
			poolName: "forhim_activewear"
		},
		watches: {
			headerImage: assetsDirectory + "images/forCMS/shop_him_watches.jpg",
			poolName: "forhim_bags"
		},
		pajamas: {
			headerImage: assetsDirectory + "images/forCMS/shop_him_pjs.jpg",
			poolName: "forhim_gadgets"
		},
		shoes: {
			headerImage: assetsDirectory + "images/forCMS/shop_him_shoes.jpg",
			poolName: "forhim_gifts25"
		},
		outerwear: {
			headerImage: assetsDirectory + "images/forCMS/shop_him_coldweather.jpg",
			poolName: "forhim_gifts50"
		},
		giftsunder: {
			headerImage: assetsDirectory + "images/forCMS/shop_him_under.jpg",
			poolName: "forhim_gifts100"
		}
	},
	kids: {
		baby: {
			headerImage: assetsDirectory + "images/forCMS/shop_kids_baby.jpg",
			poolName: "forhim_clothing"
		},
		girls: {
			headerImage: assetsDirectory + "images/forCMS/shop_kids_girls.jpg",
			poolName: "forhim_cologne"
		},
		boys: {
			headerImage: assetsDirectory + "images/forCMS/shop_kids_boys.jpg",
			poolName: "forhim_activewear"
		},
		shoes: {
			headerImage: assetsDirectory + "images/forCMS/shop_kids_shoes.jpg",
			poolName: "forhim_watches"
		},
		toys: {
			headerImage: assetsDirectory + "images/forCMS/shop_kids_toys.jpg",
			poolName: "forhim_bags"
		},
		stocking: {
			headerImage: assetsDirectory + "images/forCMS/shop_kids_stockings.jpg",
			poolName: "forhim_gadgets"
		},
		giftsunder: {
			headerImage: assetsDirectory + "images/forCMS/shop_kids_under.jpg",
			poolName: "forhim_gifts100"
		}
	},
	teens: {
		girlsclothing: {
			headerImage: assetsDirectory + "images/forCMS/shop_teens_girlsclothing.jpg",
			poolName: "forhim_clothing"
		},
		girlsaccessories: {
			headerImage: assetsDirectory + "images/forCMS/shop_teens_girlsaccessories.jpg",
			poolName: "forhim_cologne"
		},
		guysclothing: {
			headerImage: assetsDirectory + "images/forCMS/shop_teens_guysclothing.jpg",
			poolName: "forhim_activewear"
		},
		guysaccessories: {
			headerImage: assetsDirectory + "images/forCMS/shop_teens_guysaccessories.jpg",
			poolName: "forhim_watches"
		},
		guysactive: {
			headerImage: assetsDirectory + "images/forCMS/shop_teens_guysactive.jpg",
			poolName: "forhim_bags"
		},
		gadgets: {
			headerImage: assetsDirectory + "images/forCMS/shop_teens_gadgets.jpg",
			poolName: "forhim_gadgets"
		},
		girlsbeauty: {
			headerImage: assetsDirectory + "images/forCMS/shop_teens_girlsbeauty.jpg",
			poolName: "forhim_gifts100"
		},
		giftsunder: {
			headerImage: assetsDirectory + "images/forCMS/shop_teens_under.jpg",
			poolName: "forhim_gifts100"
		}
	},
	homedecor: {
		kitchen: {
			headerImage: assetsDirectory + "images/forCMS/shop_homedecor_kitchen.jpg",
			poolName: "forhim_clothing"
		},
		coffee: {
			headerImage: assetsDirectory + "images/forCMS/shop_homedecor_coffee.jpg",
			poolName: "forhim_cologne"
		},
		holiday: {
			headerImage: assetsDirectory + "images/forCMS/shop_homedecor_holiday.jpg",
			poolName: "forhim_activewear"
		},
		homedecor: {
			headerImage: assetsDirectory + "images/forCMS/shop_homedecor_homedecor.jpg",
			poolName: "forhim_watches"
		},
		barware: {
			headerImage: assetsDirectory + "images/forCMS/shop_homedecor_barware.jpg",
			poolName: "forhim_bags"
		},
		gourmet: {
			headerImage: assetsDirectory + "images/forCMS/shop_homedecor_gourmet.jpg",
			poolName: "forhim_gadgets"
		},
		giftsthatgivehope: {
			headerImage: assetsDirectory + "images/forCMS/shop_homedecor_giftsthatgivehope.jpg",
			poolName: "forhim_gifts100"
		},
		giftsunder: {
			headerImage: assetsDirectory + "images/forCMS/shop_homedecor_giftsunder.jpg",
			poolName: "forhim_gifts100"
		}
	},
	beauty: {
		perfume: {
			headerImage: assetsDirectory + "images/forCMS/shop_beauty_perfume.jpg",
			poolName: "beauty_fragrance"
		},
		fragrancegifts: {
			headerImage: assetsDirectory + "images/forCMS/shop_beauty_fragrancegifts.jpg",
			poolName: "beauty_cologne"
		},
		makeupgifts: {
			headerImage: assetsDirectory + "images/forCMS/shop_beauty_makeupgifts.jpg",
			poolName: "beauty_makeup"
		},
		cologne: {
			headerImage: assetsDirectory + "images/forCMS/shop_beauty_cologne.jpg",
			poolName: "beauty_gifts25"
		},
		skincaregifts: {
			headerImage: assetsDirectory + "images/forCMS/shop_beauty_skincaregifts.jpg",
			poolName: "beauty_gifts50"
		},
		stockingstuffers: {
			headerImage: assetsDirectory + "images/forCMS/shop_beauty_stockingstuffers.jpg",
			poolName: "beauty_gifts100"
		},
		giftsunder: {
			headerImage: assetsDirectory + "images/forCMS/shop_beauty_giftsunder.jpg",
			poolName: "beauty_gifts25"
		}
	},
	stargifts: {
		her: {
			headerImage: assetsDirectory + "images/forCMS/shop_stargifts_her.jpg",
			poolName: "forhim_clothing"
		},
		him: {
			headerImage: assetsDirectory + "images/forCMS/shop_stargifts_him.jpg",
			poolName: "forhim_cologne"
		},
		kids: {
			headerImage: assetsDirectory + "images/forCMS/shop_stargifts_kids.jpg",
			poolName: "forhim_activewear"
		},
		teens: {
			headerImage: assetsDirectory + "images/forCMS/shop_stargifts_teens.jpg",
			poolName: "forhim_watches"
		},
		homedecor: {
			headerImage: assetsDirectory + "images/forCMS/shop_stargifts_homedecor.jpg",
			poolName: "forhim_bags"
		},
		beauty: {
			headerImage: assetsDirectory + "images/forCMS/shop_stargifts_beauty.jpg",
			poolName: "forhim_gadgets"
		},
        marthastewart: {
            headerImage: assetsDirectory + "images/forCMS/shop_marthastewart.png",
            poolName: "forhim_gadgets"
        }
	},

    recipient: {
        trendsetter:{
            headerImage: assetsDirectory + "images/forCMS/shop_trendsetter.png",
            poolName: "forhim_gadgets"
        },
        fitness:{
            headerImage: assetsDirectory + "images/forCMS/shop_fitness.png",
            poolName: "forhim_gadgets"
        },
        jetsetter: {
            headerImage: assetsDirectory + "images/forCMS/shop_traveler.png",
            poolName: "forhim_gadgets"
        },
        sportsfan: {
            headerImage: assetsDirectory + "images/forCMS/shop_sportsfan.png",
            poolName: "forhim_gadgets"
        },
        partyhost: {
            headerImage: assetsDirectory + "images/forCMS/shop_partyhost.png",
            poolName: "forhim_gadgets"
        },
        coworker: {
            headerImage: assetsDirectory + "images/forCMS/shop_coworker.png",
            poolName: "forhim_gadgets"
        }
    },
    tommyhilfiger: {
        her: {
            headerImage: assetsDirectory + "images/forCMS/TABLET_POOL_TH_Her.png",
            poolName: "forhim_clothing"
        },
        him: {
            headerImage: assetsDirectory + "images/forCMS/TABLET_POOL_TH_Him.png",
            poolName: "forhim_cologne"
        },
        kids: {
            headerImage: assetsDirectory + "images/forCMS/TABLET_POOL_TH_Kids.png",
            poolName: "forhim_activewear"
        },
        home: {
            headerImage: assetsDirectory + "images/forCMS/TABLET_POOL_TH_Home.png",
            poolName: "forhim_watches"
        }
    },
    calvinklein: {
        her: {
            headerImage: assetsDirectory + "images/forCMS/TABLET_POOL_CK_Her.png",
            poolName: "forhim_clothing"
        },
        him: {
            headerImage: assetsDirectory + "images/forCMS/TABLET_POOL_CK_Him.png",
            poolName: "forhim_cologne"
        },
        kids: {
            headerImage: assetsDirectory + "images/forCMS/TABLET_POOL_CK_Kids.png",
            poolName: "forhim_activewear"
        },
        fragrance: {
            headerImage: assetsDirectory + "images/forCMS/TABLET_POOL_CK_Frag.png",
            poolName: "forhim_watches"
        }
    },
    michaelkors: {
        her: {
            headerImage: assetsDirectory + "images/forCMS/TABLET_POOL_MK_Her.png",
            poolName: "forhim_clothing"
        },
        beauty: {
            headerImage: assetsDirectory + "images/forCMS/TABLET_POOL_MK_Beauty.png",
            poolName: "forhim_cologne"
        }
    },
    inc: {
        her: {
            headerImage: assetsDirectory + "images/forCMS/TABLET_POOL_INC_Her.png",
            poolName: "forhim_clothing"
        },
        home: {
            headerImage: assetsDirectory + "images/forCMS/TABLET_POOL_INC_Home.png",
            poolName: "forhim_cologne"
        }
    }


};


/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/config/shoprl.js */


SiteConfig.shoprl = {

	her: {
		headerImage: assetsDirectory + "images/forCMS/ralphlauren_headerImage_her.jpg",
		poolName: "forher_missy",
        navId: "",
		filters: {
			options: [
				{
					text: "Shop by:",
					value: "DEFAULT"
				},
				{
					text: "All",
					value: "DEFAULT"
				},
				{
					text: "Michael Kors",
					pfeed: "pfeed_brand",
					value: "Michael Kors"
				},
				{
					text: "Lauren Ralph Lauren",
					pfeed: "pfeed_brand",
					value: "Lauren Ralph Lauren"
				},
				{
					text: "Charter Club",
					pfeed: "pfeed_brand",
					value: "Charter Club"
				},
				{
					text: "Style&co.",
					pfeed: "pfeed_brand",
					value: "Style&co."
				},
				{
					text: "Vince Camuto",
					pfeed: "pfeed_brand",
					value: "Vince Camuto"
				},
				{
					text: "INC International Concepts",
					pfeed: "pfeed_brand",
					value: "INC International Concepts"
				},
				{
					text: "Alfani",
					pfeed: "pfeed_brand",
					value: "Alfani"
				},
				{
					text: "Tommy Hilfiger",
					pfeed: "pfeed_brand",
					value: "Tommy Hilfiger"
				}
			]
		},
		videoData: {
			grid : [[1,1,0,0,0],
					[1,1,0,0,0],
					[0,0,0,0,0],
					[0,0,0,1,1],
					[0,0,0,1,1],
					[0,0,0,0,0],
					[1,1,0,0,0],
					[1,1,0,0,0]],
			videos: [
				/*{
					type: "video",
					gridPosition:[0,0],
					size:[2,2],
					videoPathWebm: assetsDirectory + "videos/RL_WOMENS_DnS_v5.webm",
					videoPath: assetsDirectory + "videos/RL_WOMENS_DnS_v5.mp4",
					gifPath: assetsDirectory + "videos/kids2.gif",
					defaultImage: assetsDirectory + "videos/default_image.jpg"
				},*/
				{
					type: "image",
					gridPosition:[0,0],
					size:[2,2],
					imagePath: assetsDirectory + "videos/default_image.jpg"
				},
				{
					type: "video",
					gridPosition:[3,3],
					size:[2,2],
					videoPathWebm: assetsDirectory + "videos/RL_WOMENS_LAUREN_v6.webm",
					videoPath: assetsDirectory + "videos/RL_WOMENS_LAUREN_v6.mp4",
					gifPath: assetsDirectory + "videos/kids2.gif",
					defaultImage: assetsDirectory + "videos/default_image.jpg"
				},
				{
					type: "video",
					gridPosition:[0,6],
					size:[2,2],
					videoPathWebm: assetsDirectory + "videos/RL_WOMENS_Polo_v5.webm",
					videoPath: assetsDirectory + "videos/RL_WOMENS_Polo_v5.mp4",
					gifPath: assetsDirectory + "videos/kids2.gif",
					defaultImage: assetsDirectory + "videos/default_image.jpg"
				}
			]
		}
	},
    him: {
        headerImage: assetsDirectory + "images/forCMS/TABLET_POOL_RALPH_MEN.png",
        poolName: "forhim_clothing",
        videoData: {
			grid : [[1,1,0,0,0],
					[1,1,0,0,0],
					[0,0,0,0,0],
					[0,0,0,1,1],
					[0,0,0,1,1]],
			videos: [
				{
					type: "video",
					gridPosition:[0,0],
					size:[2,2],
					videoPathWebm: assetsDirectory + "videos/RL_MENS_Polo_Men_v6.webm",
					videoPath: assetsDirectory + "videos/RL_MENS_Polo_Men_v6.mp4",
					gifPath: assetsDirectory + "videos/kids2.gif",
					defaultImage: assetsDirectory + "videos/default_image_mens2.jpg"
				},
				{
					type: "video",
					gridPosition:[3,3],
					size:[2,2],
					videoPathWebm: assetsDirectory + "videos/RL_MENS_DnS_v5.webm",
					videoPath: assetsDirectory + "videos/RL_MENS_DnS_v5.mp4",
					gifPath: assetsDirectory + "videos/kids2.gif",
					defaultImage: assetsDirectory + "videos/default_image_mens2.jpg"
				}
			]
		}
    },
    girls: {
        headerImage: assetsDirectory + "images/forCMS/TABLET_POOL_RALPH_GIRLS.png",
        poolName: "forher_clothing",
        videoData: {
			grid : [[1,1,0,0,0],
					[1,1,0,0,0],
					[0,0,0,0,0],
					[0,0,0,1,1],
					[0,0,0,1,1]],
			videos: [
				{
					type: "video",
					gridPosition:[0,0],
					size:[2,2],
					videoPathWebm: assetsDirectory + "videos/RL_KIDS_Little_Girl_v6.webm",
					videoPath: assetsDirectory + "videos/RL_KIDS_Little_Girl_v6.mp4",
					gifPath: assetsDirectory + "videos/kids2.gif",
					defaultImage: assetsDirectory + "videos/default_image_kids1.jpg"
				},
				{
					type: "video",
					gridPosition:[3,3],
					size:[2,2],
					videoPathWebm: assetsDirectory + "videos/RL_KIDS_Big_Girl_v4.webm",
					videoPath: assetsDirectory + "videos/RL_KIDS_Big_Girl_v4.mp4",
					gifPath: assetsDirectory + "videos/kids2.gif",
					defaultImage: assetsDirectory + "videos/default_image_kids1.jpg"
				}
			]
		}
    },
    boys: {
        headerImage: assetsDirectory + "images/forCMS/TABLET_POOL_RALPH_BOYS.png",
        poolName: "forhim_clothing",
        videoData: {
			grid : [[1,1,0,0,0],
					[1,1,0,0,0],
					[0,0,0,0,0],
					[0,0,0,1,1],
					[0,0,0,1,1]],
			videos: [
				{
					type: "video",
					gridPosition:[0,0],
					size:[2,2],
					videoPathWebm: assetsDirectory + "videos/RL_KIDS_Little_Boy_v5.webm",
					videoPath: assetsDirectory + "videos/RL_KIDS_Little_Boy_v5.mp4",
					gifPath: assetsDirectory + "videos/kids2.gif",
					defaultImage: assetsDirectory + "videos/default_image_boy1.jpg"
				},
				{
					type: "video",
					gridPosition:[3,3],
					size:[2,2],
					videoPathWebm: assetsDirectory + "videos/RL_KIDS_Big_Boy_v4.webm",
					videoPath: assetsDirectory + "videos/RL_KIDS_Big_Boy_v4.mp4",
					gifPath: assetsDirectory + "videos/kids2.gif",
					defaultImage: assetsDirectory + "videos/default_image_boy1.jpg"
				}
			]
		}
    },
    baby: {
        headerImage: assetsDirectory + "images/forCMS/TABLET_POOL_RALPH_BABY.png",
        poolName: "forher_missy",
        videoData: {
			grid : [[1,1,0,0,0],
					[1,1,0,0,0],
					[0,0,0,0,0],
					[0,0,0,1,1],
					[0,0,0,1,1]],
			videos: [
				{
					type: "video",
					gridPosition:[0,0],
					size:[2,2],
					videoPathWebm: assetsDirectory + "videos/RL_BABY_Loop_v4.webm",
					videoPath: assetsDirectory + "videos/RL_BABY_Loop_v4.mp4",
					gifPath: assetsDirectory + "videos/kids2.gif",
					defaultImage: assetsDirectory + "videos/default_image_baby.jpg"
				},
				{
					type: "image",
					gridPosition:[3,3],
					size:[2,2],
					imagePath: assetsDirectory + "videos/baby_image1.jpg"
				},
			]
		}
    }
};


/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/config/topgifts.js */
SiteConfig.topgifts = {
    landing: {
        name: "For Her",
        pool: "forher_missy"
    },
    her:{
        name: "For Her",
        pool: "forher_missy"
    },
    him:{
        name: "For Him",
        pool: "topten_forhim"
    },
    homedecor:{
        name: "For the Home",
        pool: "topten_forhome"
    },
    kids:{
        name: "For Kids",
        pool: "topten_forkids"
    },
    girls:{
        name: "Teen Girls",
        pool: "topten_forgirls"
    },
    guys:{
        name: "Teen Guys",
        pool: "topten_forboys"
    },
    beauty:{
        name: "Beauty",
        pool: "topten_beauty"
    },
    cologne:{
        name: "Cologne",
        pool: "topten_colonge"
    }


}

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/config/tracking.js */


SiteConfig.tracking = {
	
	
	'home': {
		pageid: "",
		catid: ""
	}
	
	
};


/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/lib/Class.js */
/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;

  // The base Class implementation (does nothing)
  this.Class = function(){};
 
  // Create a new Class that inherits from this class
  Class.extend = function(prop) {
    var _super = this.prototype;
   
    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;
   
    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
           
            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];
           
            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);       
            this._super = tmp;
           
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
   
    // The dummy class constructor
    function Class() {
      // All construction is actually done in the init method
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }
   
    // Populate our constructed prototype object
    Class.prototype = prototype;
   
    // Enforce the constructor to be what we expect
    Class.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;
   
    return Class;
  };
})();


/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/lib/TAFFY.js */
var TAFFY;(function(){if(!TAFFY){var i="2.3.7",m=1,a="000000",n=1000,c={};var k=function(p){if(TAFFY.isArray(p)||TAFFY.isObject(p)){return p}else{return JSON.parse(p)}};var l=function(s,q,t){if(s.length==1){q(s[0],0)}else{for(var w,v,p=0,s=(f.isArray(s))?s:[s],z=s.length;p<z;p++){var v=s[p];if(!f.isUndefined(v)||(t||false)){w=q(v,p);if(w===f.EXIT){break}}}}};var b=function(u,q){var p=0,t;for(var s in u){if(u.hasOwnProperty(s)){t=q(u[s],s,p++)}if(t===f.EXIT){break}}};c.extend=function(p,q){c[p]=function(){return q.apply(this,arguments)}};var h=function(q){if(f.isString(q)&&/[t][0-9]*[r][0-9]*/i.test(q)){return true}if(f.isObject(q)&&q.___id&&q.___s){return true}if(f.isArray(q)){var p=true;l(q,function(s){if(!h(s)){p=false;return TAFFY.EXIT}});return p}return false};var e=function(q){var p=[];if(f.isString(q)&&/[t][0-9]*[r][0-9]*/i.test(q)){q={___id:q}}if(f.isArray(q)){l(q,function(s){p.push(e(s))});var q=function(){var s=this;var r=false;l(p,function(t){if(g(s,t)){r=true}});return r};return q}if(f.isObject(q)){if(f.isObject(q)&&q.___id&&q.___s){q={___id:q.___id}}b(q,function(r,s){if(!f.isObject(r)){r={is:r}}b(r,function(t,u){var w=[];var v=(u==="hasAll")?function(x,y){y(x)}:l;v(t,function(y){var x=true,z=false;var A=function(){var C=this[s];if((u.indexOf("!")===0)){x=false;u=u.substring(1,u.length)}var B=((u==="regex")?(y.test(C)):(u==="lt")?(C<y):(u==="gt")?(C>y):(u==="lte")?(C<=y):(u==="gte")?(C>=y):(u==="left")?(C.indexOf(y)===0):(u==="leftnocase")?(C.toLowerCase().indexOf(y.toLowerCase())===0):(u==="right")?(C.substring((C.length-y.length))===y):(u==="rightnocase")?(C.toLowerCase().substring((C.length-y.length))===y.toLowerCase()):(u==="like")?(C.indexOf(y)>=0):(u==="likenocase")?(C.toLowerCase().indexOf(y.toLowerCase())>=0):(u==="is")?(C===y):(u==="isnocase")?(C.toLowerCase()===y.toLowerCase()):(u==="has")?(f.has(C,y)):(u==="hasall")?(f.hasAll(C,y)):(u.indexOf("is")===-1&&!TAFFY.isNull(C)&&!TAFFY.isUndefined(C)&&!TAFFY.isObject(y)&&!TAFFY.isArray(y))?(y===C[u]):(f[u]&&f.isFunction(f[u])&&u.indexOf("is")===0)?f[u](C)===y:(f[u]&&f.isFunction(f[u]))?f[u](C,y):(x===z));B=(B&&!x)?false:(!B&&!x)?true:B;return B};w.push(A)});if(w.length===1){p.push(w[0])}else{p.push(function(){var y=this;var x=false;l(w,function(z){if(z.apply(y)){x=true}});return x})}})});var q=function(){var s=this;var r=true;r=(p.length==1&&!p[0].apply(s))?false:(p.length==2&&(!p[0].apply(s)||!p[1].apply(s)))?false:(p.length==3&&(!p[0].apply(s)||!p[1].apply(s)||!p[2].apply(s)))?false:(p.length==4&&(!p[0].apply(s)||!p[1].apply(s)||!p[2].apply(s)||!p[3].apply(s)))?false:true;if(p.length>4){l(p,function(t){if(!g(s,t)){r=false}})}return r};return q}if(f.isFunction(q)){return q}};var j=function(p,q){var r=function(t,s){var u=0;f.each(q,function(x){var z=x.split(" ");var w=z[0];var v=(z.length===1)?"logical":z[1];if(v==="logical"){var A=o(t[w]),y=o(s[w]);f.each((A.length<=y.length)?A:y,function(B,C){if(A[C]<y[C]){u=-1;return TAFFY.EXIT}else{if(A[C]>y[C]){u=1;return TAFFY.EXIT}}})}else{if(v==="logicaldesc"){var A=o(t[w]),y=o(s[w]);f.each((A.length<=y.length)?A:y,function(B,C){if(A[C]>y[C]){u=-1;return TAFFY.EXIT}else{if(A[C]<y[C]){u=1;return TAFFY.EXIT}}})}else{if(v==="asec"&&t[w]<s[w]){u=-1;return f.EXIT}else{if(v==="asec"&&t[w]>s[w]){u=1;return f.EXIT}else{if(v==="desc"&&t[w]>s[w]){u=-1;return f.EXIT}else{if(v==="desc"&&t[w]<s[w]){u=1;return f.EXIT}}}}}}if(u===0&&v==="logical"&&A.length<y.length){u=-1}else{if(u===0&&v==="logical"&&A.length>y.length){u=1}else{if(u===0&&v==="logicaldesc"&&A.length>y.length){u=-1}else{if(u===0&&v==="logicaldesc"&&A.length<y.length){u=1}}}}if(u!=0){return f.EXIT}});return u};return p.sort(r)};var o=null;(function(){var p={};var q=0;o=function(r){if(q>n){p={};q=0}return p["_"+r]||(function(){var v=String(r),u=[],z="_",t="";for(var s=0,w=v.length;s<w;s++){var y=v.charCodeAt(s);if((y>=48&&y<=57)||y===46||y===45){if(t!="n"){t="n";u.push(z.toLowerCase());z=""}z=z+v.charAt(s)}else{if(t!="s"){t="s";u.push(parseFloat(z));z=""}z=z+v.charAt(s)}}u.push((t==="n")?parseFloat(z):z.toLowerCase());u.shift();p["_"+r]=u;q++;return u})()}})();var d=function(){this.context({results:this.getDBI().query(this.context())})};c.extend("filter",function(){var q=TAFFY.mergeObj(this.context(),{run:null});var p=[];l(q.q,function(r){p.push(r)});q.q=p;l(arguments,function(r){q.q.push(e(r));q.filterRaw.push(r)});return this.getroot(q)});c.extend("order",function(q){var q=q.split(",");var p=[];l(q,function(s){p.push(s.replace(/^\s*/,"").replace(/\s*$/,""))});var r=TAFFY.mergeObj(this.context(),{sort:null});r.order=p;return this.getroot(r)});c.extend("limit",function(r){var q=TAFFY.mergeObj(this.context(),{});q.limit=r;if(q.run&&q.sort){var p=[];l(q.results,function(t,s){if((s+1)>r){return TAFFY.EXIT}p.push(t)});q.results=p}return this.getroot(q)});c.extend("start",function(r){var q=TAFFY.mergeObj(this.context(),{});q.start=r;if(q.run&&q.sort&&!q.limit){var p=[];l(q.results,function(t,s){if((s+1)>r){p.push(t)}});q.results=p}else{q=TAFFY.mergeObj(this.context(),{run:null,start:r})}return this.getroot(q)});c.extend("update",function(r,p){var q=this;d.call(this);l(this.context().results,function(s){var t=r;if(f.isFunction(t)){t=t(TAFFY.mergeObj(s,{}))}q.getDBI().update(s.___id,t,p)});if(this.context().results.length){this.context({run:null})}return this});c.extend("remove",function(p){var q=this;var r=0;d.call(this);l(this.context().results,function(s){q.getDBI().remove(s.___id);r++});if(this.context().results.length){this.context({run:null});q.getDBI().removeCommit(p)}return r});c.extend("count",function(){d.call(this);return this.context().results.length});c.extend("callback",function(r,p){if(r){var q=this;setTimeout(function(){d.call(q);r.call(q.getroot(q.context()))},(p)?p:0)}return null});c.extend("get",function(){d.call(this);return this.context().results});c.extend("stringify",function(){return JSON.stringify(this.get())});c.extend("first",function(){d.call(this);return this.context().results[0]||false});c.extend("last",function(){d.call(this);return this.context().results[this.context().results.length-1]||false});c.extend("sum",function(){var q=0;d.call(this);var p=this;l(arguments,function(r){l(p.context().results,function(s){q=q+s[r]})});return q});c.extend("min",function(q){var p=null;d.call(this);l(this.context().results,function(s){if(p===null||s[q]<p){p=s[q]}});return p});c.extend("max",function(q){var p=null;d.call(this);l(this.context().results,function(s){if(p===null||s[q]>p){p=s[q]}});return p});c.extend("select",function(){var q=[];var p=arguments;d.call(this);if(arguments.length===1){l(this.context().results,function(s){q.push(s[p[0]])})}else{l(this.context().results,function(s){var t=[];l(p,function(r){t.push(s[r])});q.push(t)})}return q});c.extend("distinct",function(){var q=[];var p=arguments;d.call(this);if(arguments.length===1){l(this.context().results,function(t){var s=t[p[0]];var u=false;l(q,function(r){if(s===r){u=true;return TAFFY.EXIT}});if(!u){q.push(s)}})}else{l(this.context().results,function(s){var u=[];l(p,function(r){u.push(s[r])});var t=false;l(q,function(v){var r=true;l(p,function(x,w){if(u[w]!=v[w]){r=false;return TAFFY.EXIT}});if(r){t=true;return TAFFY.EXIT}});if(!t){q.push(u)}})}return q});c.extend("supplant",function(q,p){var r=[];d.call(this);l(this.context().results,function(s){r.push(q.replace(/{([^{}]*)}/g,function(u,t){var w=s[t];return typeof w==="string"||typeof w==="number"?w:u}))});return(!p)?r.join(""):r});c.extend("each",function(p){d.call(this);l(this.context().results,p);return this});c.extend("map",function(p){var q=[];d.call(this);l(this.context().results,function(s){q.push(p(s))});return q});var g=function(s,q){var p=true;l(q,function(r){switch(f.typeOf(r)){case"function":if(!r.apply(s)){p=false;return TAFFY.EXIT}break;case"array":p=(r.length==1)?(g(s,r[0])):(r.length==2)?(g(s,r[0])||g(s,r[1])):(r.length==3)?(g(s,r[0])||g(s,r[1])||g(s,r[2])):(r.length==4)?(g(s,r[0])||g(s,r[1])||g(s,r[2])||g(s,r[3])):false;if(r.length>4){l(r,function(t){if(g(s,t)){p=true}})}break}});return p};var f=function(x){var u=[],y={},v=1,r={template:false,onInsert:false,onUpdate:false,onRemove:false,onDBChange:false,storageName:false,forcePropertyCase:null,cacheSize:100},t=new Date(),s=0,q=0,A={};var p=function(D){if(D.length==0){return u}var C=[];var B=false;l(D,function(E){if(f.isString(E)&&/[t][0-9]*[r][0-9]*/i.test(E)&&u[y[E]]){C.push(u[y[E]]);B=true}if(f.isObject(E)&&E.___id&&E.___s&&u[y[E.___id]]){C.push(u[y[E.___id]]);B=true}if(f.isArray(E)){l(E,function(F){l(p(F),function(G){C.push(G)})})}});if(B&&C.length>1){C=[]}return C};var w={dm:function(B){if(B){t=B;A={};s=0;q=0}if(r.onDBChange){setTimeout(function(){r.onDBChange.call(u)},0)}if(r.storageName){setTimeout(function(){localStorage.setItem("taffy_"+r.storageName,JSON.stringify(u))})}return t},insert:function(D,E){var C=[];var B=[];l(k(D),function(G,H){if(f.isArray(G)&&H===0){l(G,function(J){C.push((r.forcePropertyCase==="lower")?J.toLowerCase():(r.forcePropertyCase==="upper")?J.toUpperCase():J)});return true}else{if(f.isArray(G)){var F={};l(G,function(K,J){F[C[J]]=K});G=F}else{if(f.isObject(G)&&r.forcePropertyCase){var I={};b(G,function(K,J){I[(r.forcePropertyCase==="lower")?J.toLowerCase():(r.forcePropertyCase==="upper")?J.toUpperCase():J]=G[J]});G=I}}}m++;v++;G.___id="T"+String(a+m).slice(-6)+"R"+String(a+v).slice(-6);G.___s=true;B.push(G.___id);if(r.template){G=f.mergeObj(r.template,G)}u.push(G);y[G.___id]=u.length-1;if(r.onInsert&&(E||TAFFY.isUndefined(E))){r.onInsert.call(G)}w.dm(new Date())});return z(B)},sort:function(B){u=j(u,B.split(","));y={};l(u,function(D,C){y[D.___id]=C});w.dm(new Date());return true},update:function(H,D,C){var G={};if(r.forcePropertyCase){b(D,function(I,J){G[(r.forcePropertyCase==="lower")?J.toLowerCase():(r.forcePropertyCase==="upper")?J.toUpperCase():J]=I});D=G}var F=u[y[H]];var E=f.mergeObj(F,D);var B={};b(E,function(I,J){if(TAFFY.isUndefined(F[J])||F[J]!=I){B[J]=I}});if(r.onUpdate&&(C||TAFFY.isUndefined(C))){r.onUpdate.call(E,u[y[H]],B)}u[y[H]]=E;w.dm(new Date())},remove:function(B){u[y[B]].___s=false},removeCommit:function(C){for(var B=u.length-1;B>-1;B--){if(!u[B].___s){if(r.onRemove&&(C||TAFFY.isUndefined(C))){r.onRemove.call(u[B])}y[u[B].___id]=undefined;u.splice(B,1)}}y={};l(u,function(E,D){y[E.___id]=D});w.dm(new Date())},query:function(C){var F;if(r.cacheSize){var G="";l(C.filterRaw,function(H){if(f.isFunction(H)){G="nocache";return TAFFY.EXIT}});if(G==""){G=JSON.stringify(f.mergeObj(C,{q:false,run:false,sort:false}))}}if(!C.results||!C.run||(C.run&&w.dm()>C.run)){var B=[];if(r.cacheSize&&A[G]){A[G].i=s++;return A[G].results}else{if(C.q.length==0&&C.index.length==0){l(u,function(H){B.push(H)});F=B}else{var E=p(C.index);l(E,function(H){if(C.q.length==0||g(H,C.q)){B.push(H)}});F=B}}}else{F=C.results}if(C.order.length>0&&(!C.run||!C.sort)){F=j(F,C.order)}if(F.length&&((C.limit&&C.limit<F.length)||C.start)){var D=[];l(F,function(J,I){if(!C.start||(C.start&&(I+1)>=C.start)){if(C.limit){var H=(C.start)?(I+1)-C.start:I;if(H<C.limit){D.push(J)}else{if(H>C.limit){return TAFFY.EXIT}}}else{D.push(J)}}});F=D}if(r.cacheSize&&G!="nocache"){q++;setTimeout(function(){if(q>=r.cacheSize*2){q=0;var H=s-r.cacheSize;var I={};b(function(K,J){if(K.i>=H){I[J]=K}});A=I}},0);A[G]={i:s++,results:F}}return F}};var z=function(){var C=TAFFY.mergeObj(TAFFY.mergeObj(c,{insert:undefined}),{getDBI:function(){return w},getroot:function(D){return z.call(D)},context:function(D){if(D){B=TAFFY.mergeObj(B,("results" in D)?TAFFY.mergeObj(D,{run:new Date(),sort:new Date()}):D)}return B},extend:undefined});var B=(this&&this.q)?this:{limit:false,start:false,q:[],filterRaw:[],index:[],order:[],results:false,run:null,sort:null};l(arguments,function(D){if(h(D)){B.index.push(D)}else{B.q.push(e(D))}B.filterRaw.push(D)});return C};if(x){w.insert(x)}z.insert=w.insert;z.TAFFY=true;z.sort=w.sort;z.settings=function(B){if(B){r=TAFFY.mergeObj(r,B);if(B.template){z().update(B.template)}}return r};z.store=function(D){var C=false;if(localStorage){if(D){var B=localStorage.getItem("taffy_"+D);if(B&&B.length>0){z.insert(B);C=true}if(u.length>0){setTimeout(function(){localStorage.setItem("taffy_"+r.storageName,JSON.stringify(u))})}}z.settings({storageName:D})}return C};return z};TAFFY=f;f.each=l;f.eachin=b;f.extend=c.extend;TAFFY.EXIT="TAFFYEXIT";TAFFY.mergeObj=function(r,p){var q={};b(r,function(s,t){q[t]=r[t]});b(p,function(s,t){q[t]=p[t]});return q};TAFFY.has=function(r,q){var p=true;if((r.TAFFY)){p=r(q);if(p.length>0){return true}else{return false}}else{switch(f.typeOf(r)){case"object":if(f.isObject(q)){b(q,function(t,u){if(p===true&&!f.isUndefined(r[u])&&r.hasOwnProperty(u)){p=f.has(r[u],q[u])}else{p=false;return TAFFY.EXIT}})}else{if(f.isArray(q)){l(q,function(t,u){p=f.has(r,q[u]);if(p){return TAFFY.EXIT}})}else{if(f.isString(q)){if(!TAFFY.isUndefined(r[q])){return true}else{return false}}}}return p;break;case"array":if(f.isObject(q)){l(r,function(t,u){p=f.has(r[u],q);if(p===true){return TAFFY.EXIT}})}else{if(f.isArray(q)){l(q,function(u,t){l(r,function(w,v){p=f.has(r[v],q[t]);if(p===true){return TAFFY.EXIT}});if(p===true){return TAFFY.EXIT}})}else{if(f.isString(q)||f.isNumber(q)){for(var s=0;s<r.length;s++){p=f.has(r[s],q);if(p){return true}}}}}return p;break;case"string":if(f.isString(q)&&q===r){return true}break;default:if(f.typeOf(r)===f.typeOf(q)&&r===q){return true}break}}return false};TAFFY.hasAll=function(s,r){var q=TAFFY;if(q.isArray(r)){var p=true;l(r,function(t){p=q.has(s,t);if(p===false){return TAFFY.EXIT}});return p}else{return q.has(s,r)}};TAFFY.typeOf=function(p){var q=typeof p;if(q==="object"){if(p){if(typeof p.length==="number"&&!(p.propertyIsEnumerable("length"))){q="array"}}else{q="null"}}return q};TAFFY.getObjectKeys=function(p){var q=[];b(p,function(r){q.push(r)});q.sort();return q};TAFFY.isSameArray=function(q,p){return(TAFFY.isArray(q)&&TAFFY.isArray(p)&&q.join(",")===p.join(","))?true:false};TAFFY.isSameObject=function(s,q){var p=TAFFY,r=true;if(p.isObject(s)&&p.isObject(q)){if(p.isSameArray(p.getObjectKeys(s),p.getObjectKeys(q))){b(s,function(t,u){if((p.isObject(s[u])&&p.isObject(q[u])&&p.isSameObject(s[u],q[u]))||(p.isArray(s[u])&&p.isArray(q[u])&&p.isSameArray(s[u],q[u]))||(s[u]===q[u])){}else{r=false;return TAFFY.EXIT}})}else{r=false}}else{r=false}return r};(function(p){for(var q=0;q<p.length;q++){(function(r){TAFFY["is"+r]=function(s){return TAFFY.typeOf(s)===r.toLowerCase()?true:false}}(p[q]))}}(["String","Number","Object","Array","Boolean","Null","Function","Undefined"]))}})();if(typeof(exports)==="object"){exports.taffy=TAFFY}var JSON;if(!JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/lib/TweenMax.min.js */
/*!
 * VERSION: beta 1.9.2
 * DATE: 2013-03-25
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, easing.EasePack, plugins.CSSPlugin, plugins.RoundPropsPlugin, plugins.BezierPlugin
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0},e=function(a){return a.jquery||"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style},f=function(a){var b=[];return a.each(function(){b.push(this)}),b},g=d.prototype=c.to({},.1,{}),h=[];d.version="1.9.2",g.constructor=d,g.kill()._gc=!1,d.killTweensOf=d.killDelayedCallsTo=c.killTweensOf,d.getTweensOf=c.getTweensOf,d.ticker=c.ticker,g.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),c.prototype.invalidate.call(this)},g.updateTo=function(a,b){var e,d=this.ratio;b&&this.timeline&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(e in a)this.vars[e]=a[e];if(this._initted)if(b)this._initted=!1;else if(this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var f=this._time;this.render(0,!0,!1),this._initted=!1,this.render(f,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var i,g=1/(1-d),h=this._firstPT;h;)i=h.s+h.c,h.c*=g,h.s=i-h.c,h=h._next}return this},g.render=function(a,b,c){var i,j,k,l,m,n,o,d=this._dirty?this.totalDuration():this._totalDuration,e=this._time,f=this._totalTime,g=this._cycle;if(a>=d?(this._totalTime=d,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(i=!0,j="onComplete"),0===this._duration&&((0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0),this._rawPrevTime=a)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==f||0===this._duration&&this._rawPrevTime>0)&&(j="onReverseComplete",i=this._reversed),0>a?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(c=!0),this._rawPrevTime=a)):this._initted||(c=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(l=this._duration+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=this._duration-this._time),this._time>this._duration?this._time=this._duration:0>this._time&&(this._time=0)),this._easeType?(m=this._time/this._duration,n=this._easeType,o=this._easePower,(1===n||3===n&&m>=.5)&&(m=1-m),3===n&&(m*=2),1===o?m*=m:2===o?m*=m*m:3===o?m*=m*m*m:4===o&&(m*=m*m*m*m),this.ratio=1===n?1-m:2===n?m:.5>this._time/this._duration?m/2:1-m/2):this.ratio=this._ease.getRatio(this._time/this._duration)),e===this._time&&!c)return f!==this._totalTime&&this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||h)),void 0;if(!this._initted){if(this._init(),!this._initted)return;this._time&&!i?this.ratio=this._ease.getRatio(this._time/this._duration):i&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||this._paused||(this._active=!0),0===f&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):j||(j="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===this._duration)&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||h))),k=this._firstPT;k;)k.f?k.t[k.p](k.c*this.ratio+k.s):k.t[k.p]=k.c*this.ratio+k.s,k=k._next;this._onUpdate&&(0>a&&this._startAt&&this._startAt.render(a,b,c),b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||h)),this._cycle!==g&&(b||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||h)),j&&(this._gc||(0>a&&this._startAt&&!this._onUpdate&&this._startAt.render(a,b,c),i&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this.vars[j].apply(this.vars[j+"Scope"]||this,this.vars[j+"Params"]||h)))},d.to=function(a,b,c){return new d(a,b,c)},d.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new d(a,b,c)},d.fromTo=function(a,b,c,e){return e.startAt=c,e.immediateRender=0!=e.immediateRender&&0!=c.immediateRender,new d(a,b,e)},d.staggerTo=d.allTo=function(a,b,g,i,j,k,l){i=i||0;var p,q,r,s,m=g.delay||0,n=[],o=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,g.onCompleteParams||h),j.apply(l||this,k||h)};for(a instanceof Array||("string"==typeof a&&(a=c.selector(a)||a),e(a)&&(a=f(a))),p=a.length,r=0;p>r;r++){q={};for(s in g)q[s]=g[s];q.delay=m,r===p-1&&j&&(q.onComplete=o),n[r]=new d(a[r],b,q),m+=i}return n},d.staggerFrom=d.allFrom=function(a,b,c,e,f,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,d.staggerTo(a,b,c,e,f,g,h)},d.staggerFromTo=d.allFromTo=function(a,b,c,e,f,g,h,i){return e.startAt=c,e.immediateRender=0!=e.immediateRender&&0!=c.immediateRender,d.staggerTo(a,b,e,f,g,h,i)},d.delayedCall=function(a,b,c,e,f){return new d(b,0,{delay:a,onComplete:b,onCompleteParams:c,onCompleteScope:e,onReverseComplete:b,onReverseCompleteParams:c,onReverseCompleteScope:e,immediateRender:!1,useFrames:f,overwrite:0})},d.set=function(a,b){return new d(a,0,b)},d.isTweening=function(a){for(var e,b=c.getTweensOf(a),d=b.length;--d>-1;)if(e=b[d],e._active||e._startTime===e._timeline._time&&e._timeline._active)return!0;return!1};var i=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(i(f,b)),e=d.length),f=f._next;return d},j=d.getAllTweens=function(b){return i(a._rootTimeline,b).concat(i(a._rootFramesTimeline,b))};d.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var i,k,l,f=j(0!=e),g=f.length,h=c&&d&&e;for(l=0;g>l;l++)k=f[l],(h||k instanceof b||(i=k.target===k.vars.onComplete)&&d||c&&!i)&&(a?k.totalTime(k.totalDuration()):k._enabled(!1,!1))},d.killChildTweensOf=function(a,b){if(null!=a){var h,i,j,k,l,g=c._tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),e(a)&&(a=f(a)),a instanceof Array)for(k=a.length;--k>-1;)d.killChildTweensOf(a[k],b);else{h=[];for(j in g)for(i=g[j].target.parentNode;i;)i===a&&(h=h.concat(g[j].tweens)),i=i.parentNode;for(l=h.length,k=0;l>k;k++)b&&h[k].totalTime(h[k].totalDuration()),h[k]._enabled(!1,!1)}}};var k=function(a,c,d,e){void 0===c&&(c=!0),void 0===d&&(d=!0);for(var i,k,f=j(e),g=c&&d&&e,h=f.length;--h>-1;)k=f[h],(g||k instanceof b||(i=k.target===k.vars.onComplete)&&d||c&&!i)&&k.paused(a)};return d.pauseAll=function(a,b,c){k(!0,a,b,c)},d.resumeAll=function(a,b,c){k(!1,a,b,c)},g.progress=function(a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},g.totalProgress=function(a){return arguments.length?this.totalTime(this.totalDuration()*a,!1):this._totalTime/this.totalDuration()},g.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},g.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},g.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},g.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},g.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},g.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},d},!0),window._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;for(var f,g,c=this.vars,d=e.length;--d>-1;)if(g=c[e[d]])for(f=g.length;--f>-1;)"{self}"===g[f]&&(g=c[e[d]]=g.concat(),g[f]=this);c.tweens instanceof Array&&this.add(c.tweens,0,c.align,c.stagger)},e=["onStartParams","onUpdateParams","onCompleteParams","onReverseCompleteParams","onRepeatParams"],f=[],g=function(a){var c,b={};for(c in a)b[c]=a[c];return b},h=d.prototype=new b;return d.version="1.9.2",h.constructor=d,h.kill()._gc=!1,h.to=function(a,b,d,e){return this.add(new c(a,b,d),e)},h.from=function(a,b,d,e){return this.add(c.from(a,b,d),e)},h.fromTo=function(a,b,d,e,f){return this.add(c.fromTo(a,b,d,e),f)},h.staggerTo=function(a,b,e,f,h,i,j,k){var m,n,l=new d({onComplete:i,onCompleteParams:j,onCompleteScope:k});for("string"==typeof a&&(a=c.selector(a)||a),!(a instanceof Array)&&"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style&&(n=[],a.each(function(){n.push(this)}),a=n),f=f||0,m=0;a.length>m;m++)e.startAt&&(e.startAt=g(e.startAt)),l.add(new c(a[m],b,g(e)),m*f);return this.add(l,h)},h.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},h.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},h.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},h.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var g,h,e=new d(a),f=e._timeline;for(null==b&&(b=!0),f._remove(e,!0),e._startTime=0,e._rawPrevTime=e._time=e._totalTime=f._time,g=f._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||e.add(g,g._startTime-g._delay),g=h;return f.add(e,0),e},h.add=function(e,f,g,h){var i,j,k,l,m;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array){for(g=g||"normal",h=h||0,i=f,j=e.length,k=0;j>k;k++)(l=e[k])instanceof Array&&(l=new d({tweens:l})),this.add(l,i),"string"!=typeof l&&"function"!=typeof l&&("sequence"===g?i=l._startTime+l.totalDuration()/l._timeScale:"start"===g&&(l._startTime-=l.delay())),i+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline: it is neither a tween, timeline, function, nor a string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),this._gc&&!this._paused&&this._time===this._duration&&this._time<this.duration())for(m=this;m._gc&&m._timeline;)m._timeline.smoothChildTiming?m.totalTime(m._totalTime,!0):m._enabled(!0,!1),m=m._timeline;return this},h.remove=function(b){if(b instanceof a)return this._remove(b,!1);if(b instanceof Array){for(var c=b.length;--c>-1;)this.remove(b[c]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},h.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},h.insert=h.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},h.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},h.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},h.removeLabel=function(a){return delete this._labels[a],this},h.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},h._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e instanceof Array)for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},h.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},h.stop=function(){return this.paused(!0)},h.gotoAndPlay=function(a,b){return this.play(a,b)},h.gotoAndStop=function(a,b){return this.pause(a,b)},h.render=function(a,b,c){this._gc&&this._enabled(!0,!1),this._active=!this._paused;var j,k,l,m,n,d=this._dirty?this.totalDuration():this._totalDuration,e=this._time,g=this._startTime,h=this._timeScale,i=this._paused;if(a>=d?(this._totalTime=this._time=d,this._reversed||this._hasPausedChild()||(k=!0,m="onComplete",0===this._duration&&(0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(n=!0)),this._rawPrevTime=a,a=d+1e-6):1e-7>a?(this._totalTime=this._time=0,(0!==e||0===this._duration&&this._rawPrevTime>0)&&(m="onReverseComplete",k=this._reversed),0>a?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&(n=!0)):this._initted||(n=!0),this._rawPrevTime=a):this._totalTime=this._time=this._rawPrevTime=a,this._time!==e||c||n){if(this._initted||(this._initted=!0),0===e&&this.vars.onStart&&0!==this._time&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||f)),this._time>=e)for(j=this._first;j&&(l=j._next,!this._paused||i);)(j._active||j._startTime<=this._time&&!j._paused&&!j._gc)&&(j._reversed?j.render((j._dirty?j.totalDuration():j._totalDuration)-(a-j._startTime)*j._timeScale,b,c):j.render((a-j._startTime)*j._timeScale,b,c)),j=l;else for(j=this._last;j&&(l=j._prev,!this._paused||i);)(j._active||e>=j._startTime&&!j._paused&&!j._gc)&&(j._reversed?j.render((j._dirty?j.totalDuration():j._totalDuration)-(a-j._startTime)*j._timeScale,b,c):j.render((a-j._startTime)*j._timeScale,b,c)),j=l;this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||f)),m&&(this._gc||(g===this._startTime||h!==this._timeScale)&&(0===this._time||d>=this.totalDuration())&&(k&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[m]&&this.vars[m].apply(this.vars[m+"Scope"]||this,this.vars[m+"Params"]||f)))}},h._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},h.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)e>g._startTime||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},h.getTweensOf=function(a,b){for(var d=c.getTweensOf(a),e=d.length,f=[],g=0;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(f[g++]=d[e]);return f},h._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},h.shiftChildren=function(a,b,c){c=c||0;for(var f,d=this._first,e=this._labels;d;)d._startTime>=c&&(d._startTime+=a),d=d._next;if(b)for(f in e)e[f]>=c&&(e[f]+=a);return this._uncache(!0)},h._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},h.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},h.invalidate=function(){for(var a=this._first;a;)a.invalidate(),a=a._next;return this},h._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},h.progress=function(a){return arguments.length?this.totalTime(this.duration()*a,!1):this._time/this.duration()},h.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},h.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var e,f,b=0,c=this._last,d=999999999999;c;)e=c._prev,c._dirty&&c.totalDuration(),c._startTime>d&&this._sortChildren&&!c._paused?this.add(c,c._startTime-c._delay):d=c._startTime,0>c._startTime&&!c._paused&&(b-=c._startTime,this._timeline.smoothChildTiming&&(this._startTime+=c._startTime/this._timeScale),this.shiftChildren(-c._startTime,!1,-9999999999),d=0),f=c._startTime+c._totalDuration/c._timeScale,f>b&&(b=f),c=e;this._duration=this._totalDuration=b,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==a&&this.timeScale(this._totalDuration/a),this},h.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},h.rawTime=function(){return this._paused||0!==this._totalTime&&this._totalTime!==this._totalDuration?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},d},!0),window._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=[],f=new c(null,null,1,0),g=function(a){for(;a;){if(a._paused)return!0;a=a._timeline}return!1},h=d.prototype=new a;return h.constructor=d,h.kill()._gc=!1,d.version="1.9.2",h.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},h.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},h.removeCallback=function(a,b){if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},h.tweenTo=function(a,c){c=c||{};var g,h,d={ease:f,overwrite:2,useFrames:this.usesFrames(),immediateRender:!1};for(g in c)d[g]=c[g];return d.time=this._parseTimeOrLabel(a),h=new b(this,Math.abs(Number(d.time)-this._time)/this._timeScale||.001,d),d.onStart=function(){h.target.paused(!0),h.vars.time!==h.target.time()&&h.duration(Math.abs(h.vars.time-h.target.time())/h.target._timeScale),c.onStart&&c.onStart.apply(c.onStartScope||h,c.onStartParams||e)},h},h.tweenFromTo=function(a,b,c){c=c||{},c.startAt={time:this._parseTimeOrLabel(a)};var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-d.vars.startAt.time)/this._timeScale||.001)},h.render=function(a,b,c){this._gc&&this._enabled(!0,!1),this._active=!this._paused;var n,o,p,q,r,s,d=this._dirty?this.totalDuration():this._totalDuration,f=this._duration,g=this._time,h=this._totalTime,i=this._startTime,j=this._timeScale,k=this._rawPrevTime,l=this._paused,m=this._cycle;if(a>=d?(this._locked||(this._totalTime=d,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(o=!0,q="onComplete",0===f&&(0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(r=!0)),this._rawPrevTime=a,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=f,a=f+1e-6)):1e-7>a?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==g||0===f&&this._rawPrevTime>0&&!this._locked)&&(q="onReverseComplete",o=this._reversed),0>a?(this._active=!1,0===f&&this._rawPrevTime>=0&&(r=!0)):this._initted||(r=!0),this._rawPrevTime=a,a=0):(this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(s=f+this._repeatDelay,this._cycle=this._totalTime/s>>0,0!==this._cycle&&this._cycle===this._totalTime/s&&this._cycle--,this._time=this._totalTime-this._cycle*s,this._yoyo&&0!==(1&this._cycle)&&(this._time=f-this._time),this._time>f?(this._time=f,a=f+1e-6):0>this._time?this._time=a=0:a=this._time))),this._cycle!==m&&!this._locked){var t=this._yoyo&&0!==(1&m),u=t===(this._yoyo&&0!==(1&this._cycle)),v=this._totalTime,w=this._cycle,x=this._rawPrevTime,y=this._time;this._totalTime=m*f,m>this._cycle?t=!t:this._totalTime+=f,this._time=g,this._rawPrevTime=0===f?k-1e-5:k,this._cycle=m,this._locked=!0,g=t?0:f,this.render(g,b,0===f),b||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||e),u&&(g=t?f+1e-6:-1e-6,this.render(g,!0,!1)),this._time=y,this._totalTime=v,this._cycle=w,this._rawPrevTime=x,this._locked=!1}if(this._time===g&&!c&&!r)return h!==this._totalTime&&this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||e)),void 0;if(this._initted||(this._initted=!0),0===h&&this.vars.onStart&&0!==this._totalTime&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||e)),this._time>=g)for(n=this._first;n&&(p=n._next,!this._paused||l);)(n._active||n._startTime<=this._time&&!n._paused&&!n._gc)&&(n._reversed?n.render((n._dirty?n.totalDuration():n._totalDuration)-(a-n._startTime)*n._timeScale,b,c):n.render((a-n._startTime)*n._timeScale,b,c)),n=p;else for(n=this._last;n&&(p=n._prev,!this._paused||l);)(n._active||g>=n._startTime&&!n._paused&&!n._gc)&&(n._reversed?n.render((n._dirty?n.totalDuration():n._totalDuration)-(a-n._startTime)*n._timeScale,b,c):n.render((a-n._startTime)*n._timeScale,b,c)),n=p;this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||e)),q&&(this._locked||this._gc||(i===this._startTime||j!==this._timeScale)&&(0===this._time||d>=this.totalDuration())&&(o&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[q]&&this.vars[q].apply(this.vars[q+"Scope"]||this,this.vars[q+"Params"]||e)))},h.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var i,j,d=[],e=this.getChildren(a,b,c),f=0,h=e.length;for(i=0;h>i;i++)j=e[i],j._paused||j._timeline._time>=j._startTime&&j._timeline._time<j._startTime+j._totalDuration/j._timeScale&&(g(j._timeline)||(d[f++]=j));return d},h.getLabelAfter=function(a){a||0!==a&&(a=this._time);var d,b=this.getLabelsArray(),c=b.length;for(d=0;c>d;d++)if(b[d].time>a)return b[d].name;return null},h.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(a>b[c].time)return b[c].name;return null},h.getLabelsArray=function(){var c,a=[],b=0;for(c in this._labels)a[b++]={time:this._labels[c],name:c};return a.sort(function(a,b){return a.time-b.time}),a},h.progress=function(a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},h.totalProgress=function(a){return arguments.length?this.totalTime(this.totalDuration()*a,!1):this._totalTime/this.totalDuration()},h.totalDuration=function(b){return arguments.length?-1===this._repeat?this:this.duration((b-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},h.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},h.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},h.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},h.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=Math.PI/180,c=[],d=[],e=[],f={},g=function(a,b,c,d){this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,b,f,g,h){var m,n,o,p,q,r,s,t,u,v,w,x,y,j=a.length-1,k=0,l=a[0].a;for(m=0;j>m;m++)q=a[k],n=q.a,o=q.d,p=a[k+1].d,h?(w=c[m],x=d[m],y=.25*(x+w)*b/(g?.5:e[m]||.5),r=o-(o-n)*(g?.5*b:y/w),s=o+(p-o)*(g?.5*b:y/x),t=o-(r+(s-r)*(3*w/(w+x)+.5)/4)):(r=o-.5*(o-n)*b,s=o+.5*(p-o)*b,t=o-(r+s)/2),r+=t,s+=t,q.c=u=r,q.b=0!==m?l:l=q.a+.6*(q.c-q.a),q.da=o-n,q.ca=u-n,q.ba=l-n,f?(v=i(n,l,u,o),a.splice(k,1,v[0],v[1],v[2],v[3]),k+=4):k++,l=s;q=a[k],q.b=l,q.c=l+.4*(q.d-l),q.da=q.d-q.a,q.ca=q.c-q.a,q.ba=l-q.a,f&&(v=i(q.a,l,q.c,q.d),a.splice(k,1,v[0],v[1],v[2],v[3]))},k=function(a,b,e,f){var i,j,k,l,m,n,h=[];if(f)for(a=[f].concat(a),j=a.length;--j>-1;)"string"==typeof(n=a[j][b])&&"="===n.charAt(1)&&(a[j][b]=f[b]+Number(n.charAt(0)+n.substr(2)));if(i=a.length-2,0>i)return h[0]=new g(a[0][b],0,0,a[-1>i?0:1][b]),h;for(j=0;i>j;j++)k=a[j][b],l=a[j+1][b],h[j]=new g(k,0,0,l),e&&(m=a[j+2][b],c[j]=(c[j]||0)+(l-k)*(l-k),d[j]=(d[j]||0)+(m-l)*(m-l));return h[j]=new g(a[j][b],0,0,a[j+1][b]),h},l=function(a,b,g,i,l,m){var q,r,s,t,u,v,w,x,n={},o=[],p=m||a[0];l="string"==typeof l?","+l+",":h,null==b&&(b=1);for(r in a[0])o.push(r);if(a.length>1){for(x=a[a.length-1],w=!0,q=o.length;--q>-1;)if(r=o[q],Math.abs(p[r]-x[r])>.05){w=!1;break}w&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(c.length=d.length=e.length=0,q=o.length;--q>-1;)r=o[q],f[r]=-1!==l.indexOf(","+r+","),n[r]=k(a,r,f[r],m);for(q=c.length;--q>-1;)c[q]=Math.sqrt(c[q]),d[q]=Math.sqrt(d[q]);if(!i){for(q=o.length;--q>-1;)if(f[r])for(s=n[o[q]],v=s.length-1,t=0;v>t;t++)u=s[t+1].da/d[t]+s[t].da/c[t],e[t]=(e[t]||0)+u*u;for(q=e.length;--q>-1;)e[q]=Math.sqrt(e[q])}for(q=o.length,t=g?4:1;--q>-1;)r=o[q],s=n[r],j(s,b,g,i,f[r]),w&&(s.splice(0,t),s.splice(s.length-t,t));return n},m=function(a,b,c){b=b||"soft";var i,j,k,l,m,n,o,p,q,r,s,d={},e="cubic"===b?3:2,f="soft"===b,h=[];if(f&&c&&(a=[c].concat(a)),null==a||e+1>a.length)throw"invalid Bezier data";for(q in a[0])h.push(q);for(n=h.length;--n>-1;){for(q=h[n],d[q]=m=[],r=0,p=a.length,o=0;p>o;o++)i=null==c?a[o][q]:"string"==typeof(s=a[o][q])&&"="===s.charAt(1)?c[q]+Number(s.charAt(0)+s.substr(2)):Number(s),f&&o>1&&p-1>o&&(m[r++]=(i+m[r-2])/2),m[r++]=i;for(p=r-e+1,r=0,o=0;p>o;o+=e)i=m[o],j=m[o+1],k=m[o+2],l=2===e?0:m[o+3],m[r++]=s=3===e?new g(i,j,k,l):new g(i,(2*j+i)/3,(2*j+k)/3,k);m.length=r}return d},n=function(a,b,c){for(var f,g,h,i,j,k,l,m,n,o,p,d=1/c,e=a.length;--e>-1;)for(o=a[e],h=o.a,i=o.d-h,j=o.c-h,k=o.b-h,f=g=0,m=1;c>=m;m++)l=d*m,n=1-l,f=g-(g=(l*l*i+3*n*(l*j+n*k))*l),p=e*c+m-1,b[p]=(b[p]||0)+f*f},o=function(a,b){b=b>>0||6;var j,k,l,m,c=[],d=[],e=0,f=0,g=b-1,h=[],i=[];for(j in a)n(a[j],c,b);for(l=c.length,k=0;l>k;k++)e+=Math.sqrt(c[k]),m=k%b,i[m]=e,m===g&&(f+=e,m=k/b>>0,h[m]=i,d[m]=f,e=0,i=[]);return{length:f,lengths:d,segments:h}},p=window._gsDefine.plugin({propName:"bezier",priority:-1,API:2,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._round={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var h,i,j,k,n,d=b.values||[],e={},f=d[0],g=b.autoRotate||c.vars.orientToBezier;this._autoRotate=g?g instanceof Array?g:[["x","y","rotation",g===!0?0:Number(g)||0]]:null;for(h in f)this._props.push(h);for(j=this._props.length;--j>-1;)h=this._props[j],this._overwriteProps.push(h),i=this._func[h]="function"==typeof a[h],e[h]=i?a[h.indexOf("set")||"function"!=typeof a["get"+h.substr(3)]?h:"get"+h.substr(3)]():parseFloat(a[h]),n||e[h]!==d[0][h]&&(n=e);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(d,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,n):m(d,b.type,e),this._segCount=this._beziers[h].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(g=this._autoRotate)for(g[0]instanceof Array||(this._autoRotate=g=[g]),j=g.length;--j>-1;)for(k=0;3>k;k++)h=g[j][k],this._func[h]="function"==typeof a[h]?a[h.indexOf("set")||"function"!=typeof a["get"+h.substr(3)]?h:"get"+h.substr(3)]:!1;return!0},set:function(b){var f,g,h,i,j,k,l,m,n,o,c=this._segCount,d=this._func,e=this._target;if(this._timeRes){if(n=this._lengths,o=this._curSeg,b*=this._length,h=this._li,b>this._l2&&c-1>h){for(m=c-1;m>h&&b>=(this._l2=n[++h]););this._l1=n[h-1],this._li=h,this._curSeg=o=this._segments[h],this._s2=o[this._s1=this._si=0]}else if(this._l1>b&&h>0){for(;h>0&&(this._l1=n[--h])>=b;);0===h&&this._l1>b?this._l1=0:h++,this._l2=n[h],this._li=h,this._curSeg=o=this._segments[h],this._s1=o[(this._si=o.length-1)-1]||0,this._s2=o[this._si]}if(f=h,b-=this._l1,h=this._si,b>this._s2&&o.length-1>h){for(m=o.length-1;m>h&&b>=(this._s2=o[++h]););this._s1=o[h-1],this._si=h}else if(this._s1>b&&h>0){for(;h>0&&(this._s1=o[--h])>=b;);0===h&&this._s1>b?this._s1=0:h++,this._s2=o[h],this._si=h}k=(h+(b-this._s1)/(this._s2-this._s1))*this._prec}else f=0>b?0:b>=1?c-1:c*b>>0,k=(b-f*(1/c))*c;for(g=1-k,h=this._props.length;--h>-1;)i=this._props[h],j=this._beziers[i][f],l=(k*k*j.da+3*g*(k*j.ca+g*j.ba))*k+j.a,this._round[i]&&(l=l+(l>0?.5:-.5)>>0),d[i]?e[i](l):e[i]=l;if(this._autoRotate){var q,r,s,t,u,v,w,p=this._autoRotate;for(h=p.length;--h>-1;)i=p[h][2],v=p[h][3]||0,w=p[h][4]===!0?1:a,j=this._beziers[p[h][0]][f],q=this._beziers[p[h][1]][f],r=j.a+(j.b-j.a)*k,t=j.b+(j.c-j.b)*k,r+=(t-r)*k,t+=(j.c+(j.d-j.c)*k-t)*k,s=q.a+(q.b-q.a)*k,u=q.b+(q.c-q.b)*k,s+=(u-s)*k,u+=(q.c+(q.d-q.c)*k-u)*k,l=Math.atan2(u-s,t-r)*w+v,d[i]?e[i](l):e[i]=l}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=window._gsDefine.globals.CSSPlugin;if(a){var c=a._internals,d=c._parseToProxy,e=c._setPluginRatio,f=c.CSSPropTween;c._registerComplexSpecialProp("bezier",{parser:function(a,c,g,h,i,j){c instanceof Array&&(c={values:c}),j=new p;var o,q,r,k=c.values,l=k.length-1,m=[],n={};if(0>l)return i;for(o=0;l>=o;o++)r=d(a,k[o],h,i,j,l!==o),m[o]=r.end;for(q in c)n[q]=c[q];return n.values=m,i=new f(a,"bezier",0,0,r.pt,2),i.data=r,i.plugin=j,i.setRatio=e,0===n.autoRotate&&(n.autoRotate=!0),!n.autoRotate||n.autoRotate instanceof Array||(o=n.autoRotate===!0?0:Number(n.autoRotate)*b,n.autoRotate=null!=r.end.left?[["left","top","rotation",o,!0]]:null!=r.end.x?[["x","y","rotation",o,!0]]:!1),n.autoRotate&&(h._transform||h._enableTransforms(!1),r.autoRotate=h._target._gsTransform),j._onInitTween(r.proxy,n,h._tween),i}})}},q._roundProps=function(a,b){for(var c=this._overwriteProps,d=c.length;--d>-1;)(a[c[d]]||a.bezier||a.bezierThrough)&&(this._round[c[d]]=b)},q._kill=function(a){var c,d,b=this._props;for(c in this._beziers)if(c in a)for(delete this._beziers[c],delete this._func[c],d=b.length;--d>-1;)b[d]===c&&b.splice(d,1);return this._super._kill.call(this,a)}}(),window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var d,e,f,g,c=function(){a.call(this,"css"),this._overwriteProps.length=0},h={},i=c.prototype=new a("css");i.constructor=c,c.version="1.9.2",c.API=2,c.defaultTransformPerspective=0,i="px",c.suffixMap={top:i,right:i,bottom:i,left:i,width:i,height:i,fontSize:i,padding:i,margin:i,perspective:i};var H,I,J,K,L,M,j=/(?:\d|\-\d|\.\d|\-\.\d)+/g,k=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,l=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,m=/[^\d\-\.]/g,n=/(?:\d|\-|\+|=|#|\.)*/g,o=/opacity *= *([^)]*)/,p=/opacity:([^;]*)/,q=/alpha\(opacity *=.+?\)/i,r=/([A-Z])/g,s=/-([a-z])/gi,t=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,u=function(a,b){return b.toUpperCase()
},v=/(?:Left|Right|Width)/i,w=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,x=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,y=/,(?=[^\)]*(?:\(|$))/gi,z=Math.PI/180,A=180/Math.PI,B={},C=document,D=C.createElement("div"),E=C.createElement("img"),F=c._internals={_specialProps:h},G=navigator.userAgent,N=function(){var c,a=G.indexOf("Android"),b=C.createElement("div");return J=-1!==G.indexOf("Safari")&&-1===G.indexOf("Chrome")&&(-1===a||Number(G.substr(a+8,1))>3),L=J&&6>Number(G.substr(G.indexOf("Version/")+8,1)),K=-1!==G.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(G),M=parseFloat(RegExp.$1),b.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",c=b.getElementsByTagName("a")[0],c?/^0.55/.test(c.style.opacity):!1}(),O=function(a){return o.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},P=function(a){window.console&&console.log(a)},Q="",R="",S=function(a,b){b=b||D;var d,e,c=b.style;if(void 0!==c[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),d=["O","Moz","ms","Ms","Webkit"],e=5;--e>-1&&void 0===c[d[e]+a];);return e>=0?(R=3===e?"ms":d[e],Q="-"+R.toLowerCase()+"-",R+a):null},T=C.defaultView?C.defaultView.getComputedStyle:function(){},U=c.getStyle=function(a,b,c,d,e){var f;return N||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||T(a,null))?(a=c.getPropertyValue(b.replace(r,"-$1").toLowerCase()),f=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,f=c[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):O(a)},V=function(a,b,c){var f,g,d={},e=a._gsOverwrittenClassNamePT;if(e&&!c){for(;e;)e.setRatio(0),e=e._next;a._gsOverwrittenClassNamePT=null}if(b=b||T(a,null))if(f=b.length)for(;--f>-1;)d[b[f].replace(s,u)]=b.getPropertyValue(b[f]);else for(f in b)d[f]=b[f];else if(b=a.currentStyle||a.style)for(f in b)d[f.replace(s,u)]=b[f];return N||(d.opacity=O(a)),g=xb(a,b,!1),d.rotation=g.rotation*A,d.skewX=g.skewX*A,d.scaleX=g.scaleX,d.scaleY=g.scaleY,d.x=g.x,d.y=g.y,wb&&(d.z=g.z,d.rotationX=g.rotationX*A,d.rotationY=g.rotationY*A,d.scaleZ=g.scaleZ),d.filters&&delete d.filters,d},W=function(a,b,c,d){var g,h,i,e={},f=a.style;for(h in c)"cssText"!==h&&"length"!==h&&isNaN(h)&&b[h]!==(g=c[h])&&-1===h.indexOf("Origin")&&("number"==typeof g||"string"==typeof g)&&(e[h]=""!==g&&"auto"!==g&&"none"!==g||"string"!=typeof b[h]||""===b[h].replace(m,"")?g:0,void 0!==f[h]&&(i=new kb(f,h,f[h],i)));if(d)for(h in d)"className"!==h&&(e[h]=d[h]);return{difs:e,firstMPT:i}},X={width:["Left","Right"],height:["Top","Bottom"]},Y=["marginLeft","marginRight","marginTop","marginBottom"],Z=function(a,b,c){var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=X[b],f=e.length;for(c=c||T(a,null);--f>-1;)d-=parseFloat(U(a,"padding"+e[f],c,!0))||0,d-=parseFloat(U(a,"border"+e[f]+"Width",c,!0))||0;return d},$=function(a,b,c,d,e){if("px"===d||!d)return c;if("auto"===d||!c)return 0;var j,f=v.test(b),g=a,h=D.style,i=0>c;return i&&(c=-c),"%"===d&&-1!==b.indexOf("border")?j=c/100*(f?a.clientWidth:a.clientHeight):(h.cssText="border-style:solid; border-width:0; position:absolute; line-height:0;","%"!==d&&g.appendChild?h[f?"borderLeftWidth":"borderTopWidth"]=c+d:(g=a.parentNode||C.body,h[f?"width":"height"]=c+d),g.appendChild(D),j=parseFloat(D[f?"offsetWidth":"offsetHeight"]),g.removeChild(D),0!==j||e||(j=$(a,b,c,d,!0))),i?-j:j},_=function(a,b){(null==a||""===a||"auto"===a||"auto auto"===a)&&(a="0 0");var c=a.split(" "),d=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":c[0],e=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":c[1];return null==e?e="0":"center"===e&&(e="50%"),("center"===d||isNaN(parseFloat(d)))&&(d="50%"),b&&(b.oxp=-1!==d.indexOf("%"),b.oyp=-1!==e.indexOf("%"),b.oxr="="===d.charAt(1),b.oyr="="===e.charAt(1),b.ox=parseFloat(d.replace(m,"")),b.oy=parseFloat(e.replace(m,""))),d+" "+e+(c.length>2?" "+c[2]:"")},ab=function(a,b){return"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)},bb=function(a,b){return null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*Number(a.substr(2))+b:parseFloat(a)},cb=function(a,b,c,d){var f,g,h,i,j,e=1e-6;return null==a?j=b:"number"==typeof a?j=a*z:(f=2*Math.PI,g=a.split("_"),h=Number(g[0].replace(m,""))*(-1===a.indexOf("rad")?z:1)-("="===a.charAt(1)?0:b),i=g[1],i&&d&&(d[c]=b+h),"short"===i?(h%=f,h!==h%(f/2)&&(h=0>h?h+f:h-f)):"cw"===i&&0>h?h=(h+9999999999*f)%f-(0|h/f)*f:"ccw"===i&&h>0&&(h=(h-9999999999*f)%f-(0|h/f)*f),j=b+h),e>j&&j>-e&&(j=0),j},db={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},eb=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,0|255*(1>6*a?b+6*(c-b)*a:.5>a?c:2>3*a?b+6*(c-b)*(2/3-a):b)+.5},fb=function(a){var b,c,d,e,f,g;return a&&""!==a?"number"==typeof a?[a>>16,255&a>>8,255&a]:(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),db[a]?db[a]:"#"===a.charAt(0)?(4===a.length&&(b=a.charAt(1),c=a.charAt(2),d=a.charAt(3),a="#"+b+b+c+c+d+d),a=parseInt(a.substr(1),16),[a>>16,255&a>>8,255&a]):"hsl"===a.substr(0,3)?(a=a.match(j),e=Number(a[0])%360/360,f=Number(a[1])/100,g=Number(a[2])/100,c=.5>=g?g*(f+1):g+f-g*f,b=2*g-c,a.length>3&&(a[3]=Number(a[3])),a[0]=eb(e+1/3,b,c),a[1]=eb(e,b,c),a[2]=eb(e-1/3,b,c),a):(a=a.match(j)||db.transparent,a[0]=Number(a[0]),a[1]=Number(a[1]),a[2]=Number(a[2]),a.length>3&&(a[3]=Number(a[3])),a)):db.black},gb="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(i in db)gb+="|"+i+"\\b";gb=RegExp(gb+")","gi");var hb=function(a,b,c,d){if(null==a)return function(a){return a};var n,e=b?(a.match(gb)||[""])[0]:"",f=a.split(e).join("").match(l)||[],g=a.substr(0,a.indexOf(f[0])),h=")"===a.charAt(a.length-1)?")":"",i=-1!==a.indexOf(" ")?" ":",",k=f.length,m=k>0?f[0].replace(j,""):"";return k?n=b?function(a){var b,j,o,p;if("number"==typeof a)a+=m;else if(d&&y.test(a)){for(p=a.replace(y,"|").split("|"),o=0;p.length>o;o++)p[o]=n(p[o]);return p.join(",")}if(b=(a.match(gb)||[e])[0],j=a.split(b).join("").match(l)||[],o=j.length,k>o--)for(;k>++o;)j[o]=c?j[(o-1)/2>>0]:f[o];return g+j.join(i)+i+b+h+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,e,j;if("number"==typeof a)a+=m;else if(d&&y.test(a)){for(e=a.replace(y,"|").split("|"),j=0;e.length>j;j++)e[j]=n(e[j]);return e.join(",")}if(b=a.match(l)||[],j=b.length,k>j--)for(;k>++j;)b[j]=c?b[(j-1)/2>>0]:f[j];return g+b.join(i)+h}:function(a){return a}},ib=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var j,i=(c+"").split(" ");for(h={},j=0;4>j;j++)h[a[j]]=i[j]=i[j]||i[(j-1)/2>>0];return e.parse(b,h,f,g)}},kb=(F._setPluginRatio=function(a){this.plugin.setRatio(a);for(var f,g,h,i,b=this.data,c=b.proxy,d=b.firstMPT,e=1e-6;d;)f=c[d.v],d.r?f=f>0?f+.5>>0:f-.5>>0:e>f&&f>-e&&(f=0),d.t[d.p]=f,d=d._next;if(b.autoRotate&&(b.autoRotate.rotation=c.rotation),1===a)for(d=b.firstMPT;d;){if(g=d.t,g.type){if(1===g.type){for(i=g.xs0+g.s+g.xs1,h=1;g.l>h;h++)i+=g["xn"+h]+g["xs"+(h+1)];g.e=i}}else g.e=g.s+g.xs0;d=d._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),mb=(F._parseToProxy=function(a,b,c,d,e,f){var l,m,n,o,p,g=d,h={},i={},j=c._transform,k=B;for(c._transform=null,B=b,d=p=c.parse(a,b,d,e),B=k,f&&(c._transform=j,g&&(g._prev=null,g._prev&&(g._prev._next=null)));d&&d!==g;){if(1>=d.type&&(m=d.p,i[m]=d.s+d.c,h[m]=d.s,f||(o=new kb(d,"s",m,o,d.r),d.c=0),1===d.type))for(l=d.l;--l>0;)n="xn"+l,m=d.p+"_"+n,i[m]=d.data[n],h[m]=d[n],f||(o=new kb(d,n,m,o,d.rxp[n]));d=d._next}return{proxy:h,end:i,firstMPT:o,pt:p}},F.CSSPropTween=function(a,b,c,e,f,h,i,j,k,l,m){this.t=a,this.p=b,this.s=c,this.c=e,this.n=i||"css_"+b,a instanceof mb||g.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,d=!0),this.b=void 0===l?c:l,this.e=void 0===m?c+e:m,f&&(this._next=f,f._prev=this)}),nb=c.parseComplex=function(a,b,c,d,e,f,g,h,i,l){g=new mb(a,b,0,0,g,l?2:1,null,!1,h,c,d),d+="";var q,r,s,t,u,v,w,x,z,A,B,C,m=c.split(", ").join(",").split(" "),n=d.split(", ").join(",").split(" "),o=m.length,p=H!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(m=m.join(" ").replace(y,", ").split(" "),n=n.join(" ").replace(y,", ").split(" "),o=m.length),o!==n.length&&(m=(f||"").split(" "),o=m.length),g.plugin=i,g.setRatio=l,q=0;o>q;q++)if(t=m[q],u=n[q],x=parseFloat(t),x||0===x)g.appendXtra("",x,ab(u,x),u.replace(k,""),p&&-1!==u.indexOf("px"),!0);else if(e&&("#"===t.charAt(0)||0===t.indexOf("rgb")||db[t]||0===t.indexOf("hsl")))C=","===u.charAt(u.length-1)?"),":")",t=fb(t),u=fb(u),z=t.length+u.length>6,z&&!N&&0===u[3]?(g["xs"+g.l]+=g.l?" transparent":"transparent",g.e=g.e.split(n[q]).join("transparent")):(N||(z=!1),g.appendXtra(z?"rgba(":"rgb(",t[0],u[0]-t[0],",",!0,!0).appendXtra("",t[1],u[1]-t[1],",",!0).appendXtra("",t[2],u[2]-t[2],z?",":C,!0),z&&(t=4>t.length?1:t[3],g.appendXtra("",t,(4>u.length?1:u[3])-t,C,!1)));else if(v=t.match(j)){if(w=u.match(k),!w||w.length!==v.length)return g;for(s=0,r=0;v.length>r;r++)B=v[r],A=t.indexOf(B,s),g.appendXtra(t.substr(s,A-s),Number(B),ab(w[r],B),"",p&&"px"===t.substr(A+B.length,2),0===r),s=A+B.length;g["xs"+g.l]+=t.substr(s)}else g["xs"+g.l]+=g.l?" "+t:t;if(-1!==d.indexOf("=")&&g.data){for(C=g.xs0+g.data.s,q=1;g.l>q;q++)C+=g["xs"+q]+g.data["xn"+q];g.e=C+g["xs"+q]}return g.l||(g.type=-1,g.xs0=g.e),g.xfirst||g},ob=9;for(i=mb.prototype,i.l=i.pr=0;--ob>0;)i["xn"+ob]=0,i["xs"+ob]="";i.xs0="",i._next=i._prev=i.xfirst=i.data=i.plugin=i.setRatio=i.rxp=null,i.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&h?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new mb(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var pb=function(a,b){b=b||{},this.p=b.prefix?S(a)||a:a,h[a]=h[this.p]=this,this.format=b.formatter||hb(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},qb=F._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var f,g,d=a.split(","),e=b.defaultValue;for(c=c||[e],f=0;d.length>f;f++)b.prefix=0===f&&b.prefix,b.defaultValue=c[f]||e,g=new pb(d[f],b)},rb=function(a){if(!h[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";qb(a,{parser:function(a,c,d,e,f,g,i){var j=(window.GreenSockGlobals||window).com.greensock.plugins[b];return j?(j._cssRegister(),h[d].parse(a,c,d,e,f,g,i)):(P("Error: "+b+" js file not loaded."),f)}})}};i=pb.prototype,i.parseComplex=function(a,b,c,d,e,f){var h,i,j,k,l,m,g=this.keyword;if(this.multi&&(y.test(c)||y.test(b)?(i=b.replace(y,"|").split("|"),j=c.replace(y,"|").split("|")):g&&(i=[b],j=[c])),j){for(k=j.length>i.length?j.length:i.length,h=0;k>h;h++)b=i[h]=i[h]||this.dflt,c=j[h]=j[h]||this.dflt,g&&(l=b.indexOf(g),m=c.indexOf(g),l!==m&&(c=-1===m?j:i,c[h]+=" "+g));b=i.join(", "),c=j.join(", ")}return nb(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},i.parse=function(a,b,c,d,e,g){return this.parseComplex(a.style,this.format(U(a,this.p,f,!1,this.dflt)),this.format(b),e,g)},c.registerSpecialProp=function(a,b,c){qb(a,{parser:function(a,d,e,f,g,h){var j=new mb(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})};var sb="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),tb=S("transform"),ub=Q+"transform",vb=S("transformOrigin"),wb=null!==S("perspective"),xb=function(a,b,d){var l,m,n,o,p,q,r,s,t,u,v,x,y,e=d?a._gsTransform||{skewY:0}:{skewY:0},f=0>e.scaleX,g=2e-5,h=1e5,i=-Math.PI+1e-4,j=Math.PI-1e-4,k=wb?parseFloat(U(a,vb,b,!1,"0 0 0").split(" ")[2])||e.zOrigin||0:0;for(tb?l=U(a,ub,b,!0):a.currentStyle&&(l=a.currentStyle.filter.match(w),l=l&&4===l.length?l[0].substr(4)+","+Number(l[2].substr(4))+","+Number(l[1].substr(4))+","+l[3].substr(4)+","+(e?e.x:0)+","+(e?e.y:0):null),m=(l||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],n=m.length;--n>-1;)o=Number(m[n]),m[n]=(p=o-(o|=0))?(0|p*h+(0>p?-.5:.5))/h+o:o;if(16===m.length){var z=m[8],A=m[9],B=m[10],C=m[12],D=m[13],E=m[14];if(e.zOrigin&&(E=-e.zOrigin,C=z*E-m[12],D=A*E-m[13],E=B*E+e.zOrigin-m[14]),!d||C!==e.x||D!==e.y||E!==e.z){var Q,R,S,T,V,W,X,Y,F=m[0],G=m[1],H=m[2],I=m[3],J=m[4],K=m[5],L=m[6],M=m[7],N=m[11],O=e.rotationX=Math.atan2(L,B),P=i>O||O>j;O&&(V=Math.cos(-O),W=Math.sin(-O),Q=J*V+z*W,R=K*V+A*W,S=L*V+B*W,T=M*V+N*W,z=J*-W+z*V,A=K*-W+A*V,B=L*-W+B*V,N=M*-W+N*V,J=Q,K=R,L=S),O=e.rotationY=Math.atan2(z,F),O&&(X=i>O||O>j,V=Math.cos(-O),W=Math.sin(-O),Q=F*V-z*W,R=G*V-A*W,S=H*V-B*W,T=I*V-N*W,A=G*W+A*V,B=H*W+B*V,N=I*W+N*V,F=Q,G=R,H=S),O=e.rotation=Math.atan2(G,K),O&&(Y=i>O||O>j,V=Math.cos(-O),W=Math.sin(-O),F=F*V+J*W,R=G*V+K*W,K=G*-W+K*V,L=H*-W+L*V,G=R),Y&&P?e.rotation=e.rotationX=0:Y&&X?e.rotation=e.rotationY=0:X&&P&&(e.rotationY=e.rotationX=0),e.scaleX=(Math.sqrt(F*F+G*G)*h+.5>>0)/h,e.scaleY=(Math.sqrt(K*K+A*A)*h+.5>>0)/h,e.scaleZ=(Math.sqrt(L*L+B*B)*h+.5>>0)/h,e.skewX=0,e.perspective=N?1/(0>N?-N:N):0,e.x=C,e.y=D,e.z=E}}else if(!wb||0===m.length||e.x!==m[4]||e.y!==m[5]||!e.rotationX&&!e.rotationY){var Z=m.length>=6,$=Z?m[0]:1,_=m[1]||0,ab=m[2]||0,bb=Z?m[3]:1;e.x=m[4]||0,e.y=m[5]||0,q=Math.sqrt($*$+_*_),r=Math.sqrt(bb*bb+ab*ab),s=$||_?Math.atan2(_,$):e.rotation||0,t=ab||bb?Math.atan2(ab,bb)+s:e.skewX||0,u=q-Math.abs(e.scaleX||0),v=r-Math.abs(e.scaleY||0),Math.abs(t)>Math.PI/2&&Math.abs(t)<1.5*Math.PI&&(f?(q*=-1,t+=0>=s?Math.PI:-Math.PI,s+=0>=s?Math.PI:-Math.PI):(r*=-1,t+=0>=t?Math.PI:-Math.PI)),x=(s-e.rotation)%Math.PI,y=(t-e.skewX)%Math.PI,(void 0===e.skewX||u>g||-g>u||v>g||-g>v||x>i&&j>x&&0!==x*h>>0||y>i&&j>y&&0!==y*h>>0)&&(e.scaleX=q,e.scaleY=r,e.rotation=s,e.skewX=t),wb&&(e.rotationX=e.rotationY=e.z=0,e.perspective=parseFloat(c.defaultTransformPerspective)||0,e.scaleZ=1)}e.zOrigin=k;for(n in e)g>e[n]&&e[n]>-g&&(e[n]=0);return d&&(a._gsTransform=e),e},yb=function(a){var l,m,b=this.data,c=-b.rotation,d=c+b.skewX,e=1e5,f=(Math.cos(c)*b.scaleX*e>>0)/e,g=(Math.sin(c)*b.scaleX*e>>0)/e,h=(Math.sin(d)*-b.scaleY*e>>0)/e,i=(Math.cos(d)*b.scaleY*e>>0)/e,j=this.t.style,k=this.t.currentStyle;if(k){m=g,g=-h,h=-m,l=k.filter,j.filter="";var v,w,p=this.t.offsetWidth,q=this.t.offsetHeight,r="absolute"!==k.position,s="progid:DXImageTransform.Microsoft.Matrix(M11="+f+", M12="+g+", M21="+h+", M22="+i,t=b.x,u=b.y;if(null!=b.ox&&(v=(b.oxp?.01*p*b.ox:b.ox)-p/2,w=(b.oyp?.01*q*b.oy:b.oy)-q/2,t+=v-(v*f+w*g),u+=w-(v*h+w*i)),r)v=p/2,w=q/2,s+=", Dx="+(v-(v*f+w*g)+t)+", Dy="+(w-(v*h+w*i)+u)+")";else{var z,A,B,y=8>M?1:-1;for(v=b.ieOffsetX||0,w=b.ieOffsetY||0,b.ieOffsetX=Math.round((p-((0>f?-f:f)*p+(0>g?-g:g)*q))/2+t),b.ieOffsetY=Math.round((q-((0>i?-i:i)*q+(0>h?-h:h)*p))/2+u),ob=0;4>ob;ob++)A=Y[ob],z=k[A],m=-1!==z.indexOf("px")?parseFloat(z):$(this.t,A,parseFloat(z),z.replace(n,""))||0,B=m!==b[A]?2>ob?-b.ieOffsetX:-b.ieOffsetY:2>ob?v-b.ieOffsetX:w-b.ieOffsetY,j[A]=(b[A]=Math.round(m-B*(0===ob||2===ob?1:y)))+"px";s+=", sizingMethod='auto expand')"}j.filter=-1!==l.indexOf("DXImageTransform.Microsoft.Matrix(")?l.replace(x,s):s+" "+l,(0===a||1===a)&&1===f&&0===g&&0===h&&1===i&&(r&&-1===s.indexOf("Dx=0, Dy=0")||o.test(l)&&100!==parseFloat(RegExp.$1)||-1===l.indexOf("gradient(")&&j.removeAttribute("filter"))}},zb=function(){var x,y,z,A,B,C,D,E,F,b=this.data,c=this.t.style,d=b.perspective,e=b.scaleX,f=0,g=0,h=0,i=0,j=b.scaleY,k=0,l=0,m=0,n=0,o=b.scaleZ,p=0,q=0,r=0,s=d?-1/d:0,t=b.rotation,u=b.zOrigin,v=",",w=1e5;K&&(D=c.top?"top":c.bottom?"bottom":parseFloat(U(this.t,"top",null,!1))?"bottom":"top",z=U(this.t,D,null,!1),E=parseFloat(z)||0,F=z.substr((E+"").length)||"px",b._ffFix=!b._ffFix,c[D]=(b._ffFix?E+.05:E-.05)+F),(t||b.skewX)&&(z=e*Math.cos(t),A=j*Math.sin(t),t-=b.skewX,f=e*-Math.sin(t),j*=Math.cos(t),e=z,i=A),t=b.rotationY,t&&(x=Math.cos(t),y=Math.sin(t),z=e*x,A=i*x,B=o*-y,C=s*-y,g=e*y,k=i*y,o*=x,s*=x,e=z,i=A,m=B,q=C),t=b.rotationX,t&&(x=Math.cos(t),y=Math.sin(t),z=f*x+g*y,A=j*x+k*y,B=n*x+o*y,C=r*x+s*y,g=f*-y+g*x,k=j*-y+k*x,o=n*-y+o*x,s=r*-y+s*x,f=z,j=A,n=B,r=C),u&&(p-=u,h=g*p,l=k*p,p=o*p+u),h=(z=(h+=b.x)-(h|=0))?(0|z*w+(0>z?-.5:.5))/w+h:h,l=(z=(l+=b.y)-(l|=0))?(0|z*w+(0>z?-.5:.5))/w+l:l,p=(z=(p+=b.z)-(p|=0))?(0|z*w+(0>z?-.5:.5))/w+p:p,c[tb]="matrix3d("+(e*w>>0)/w+v+(i*w>>0)/w+v+(m*w>>0)/w+v+(q*w>>0)/w+v+(f*w>>0)/w+v+(j*w>>0)/w+v+(n*w>>0)/w+v+(r*w>>0)/w+v+(g*w>>0)/w+v+(k*w>>0)/w+v+(o*w>>0)/w+v+(s*w>>0)/w+v+h+v+l+v+p+v+(d?1+-p/d:1)+")"},Ab=function(){var e,f,g,h,i,j,k,l,m,b=this.data,c=this.t,d=c.style;K&&(e=d.top?"top":d.bottom?"bottom":parseFloat(U(c,"top",null,!1))?"bottom":"top",f=U(c,e,null,!1),g=parseFloat(f)||0,h=f.substr((g+"").length)||"px",b._ffFix=!b._ffFix,d[e]=(b._ffFix?g+.05:g-.05)+h),b.rotation||b.skewX?(i=b.rotation,j=i-b.skewX,k=1e5,l=b.scaleX*k,m=b.scaleY*k,d[tb]="matrix("+(Math.cos(i)*l>>0)/k+","+(Math.sin(i)*l>>0)/k+","+(Math.sin(j)*-m>>0)/k+","+(Math.cos(j)*m>>0)/k+","+b.x+","+b.y+")"):d[tb]="matrix("+b.scaleX+",0,0,"+b.scaleY+","+b.x+","+b.y+")"};qb("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation",{parser:function(a,b,c,d,e,g,h){if(d._transform)return e;var o,p,q,r,s,t,u,i=d._transform=xb(a,f,!0),j=a.style,k=1e-6,l=sb.length,m=h,n={};if("string"==typeof m.transform&&tb)q=j.cssText,j[tb]=m.transform,j.display="block",o=xb(a,null,!1),j.cssText=q;else if("object"==typeof m){if(o={scaleX:bb(null!=m.scaleX?m.scaleX:m.scale,i.scaleX),scaleY:bb(null!=m.scaleY?m.scaleY:m.scale,i.scaleY),scaleZ:bb(null!=m.scaleZ?m.scaleZ:m.scale,i.scaleZ),x:bb(m.x,i.x),y:bb(m.y,i.y),z:bb(m.z,i.z),perspective:bb(m.transformPerspective,i.perspective)},u=m.directionalRotation,null!=u)if("object"==typeof u)for(q in u)m[q]=u[q];else m.rotation=u;o.rotation=cb("rotation"in m?m.rotation:"shortRotation"in m?m.shortRotation+"_short":"rotationZ"in m?m.rotationZ:i.rotation*A,i.rotation,"rotation",n),wb&&(o.rotationX=cb("rotationX"in m?m.rotationX:"shortRotationX"in m?m.shortRotationX+"_short":i.rotationX*A||0,i.rotationX,"rotationX",n),o.rotationY=cb("rotationY"in m?m.rotationY:"shortRotationY"in m?m.shortRotationY+"_short":i.rotationY*A||0,i.rotationY,"rotationY",n)),o.skewX=null==m.skewX?i.skewX:cb(m.skewX,i.skewX),o.skewY=null==m.skewY?i.skewY:cb(m.skewY,i.skewY),(p=o.skewY-i.skewY)&&(o.skewX+=p,o.rotation+=p)}for(s=i.z||i.rotationX||i.rotationY||o.z||o.rotationX||o.rotationY||o.perspective,s||null==m.scale||(o.scaleZ=1);--l>-1;)c=sb[l],r=o[c]-i[c],(r>k||-k>r||null!=B[c])&&(t=!0,e=new mb(i,c,i[c],r,e),c in n&&(e.e=n[c]),e.xs0=0,e.plugin=g,d._overwriteProps.push(e.n));return r=m.transformOrigin,(r||wb&&s&&i.zOrigin)&&(tb?(t=!0,r=(r||U(a,c,f,!1,"50% 50%"))+"",c=vb,e=new mb(j,c,0,0,e,-1,"css_transformOrigin"),e.b=j[c],e.plugin=g,wb?(q=i.zOrigin,r=r.split(" "),i.zOrigin=(r.length>2?parseFloat(r[2]):q)||0,e.xs0=e.e=j[c]=r[0]+" "+(r[1]||"50%")+" 0px",e=new mb(i,"zOrigin",0,0,e,-1,e.n),e.b=q,e.xs0=e.e=i.zOrigin):e.xs0=e.e=j[c]=r):_(r+"",i)),t&&(d._transformType=s||3===this._transformType?3:2),e},prefix:!0}),qb("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),qb("borderRadius",{defaultValue:"0px",parser:function(a,b,c,d,g){b=this.format(b);var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,i=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],j=a.style;for(s=parseFloat(a.offsetWidth),t=parseFloat(a.offsetHeight),k=b.split(" "),l=0;i.length>l;l++)this.p.indexOf("border")&&(i[l]=S(i[l])),o=n=U(a,i[l],f,!1,"0px"),-1!==o.indexOf(" ")&&(n=o.split(" "),o=n[0],n=n[1]),p=m=k[l],q=parseFloat(o),v=o.substr((q+"").length),w="="===p.charAt(1),w?(r=parseInt(p.charAt(0)+"1",10),p=p.substr(2),r*=parseFloat(p),u=p.substr((r+"").length-(0>r?1:0))||""):(r=parseFloat(p),u=p.substr((r+"").length)),""===u&&(u=e[c]||v),u!==v&&(x=$(a,"borderLeft",q,v),y=$(a,"borderTop",q,v),"%"===u?(o=100*(x/s)+"%",n=100*(y/t)+"%"):"em"===u?(z=$(a,"borderLeft",1,"em"),o=x/z+"em",n=y/z+"em"):(o=x+"px",n=y+"px"),w&&(p=parseFloat(o)+r+u,m=parseFloat(n)+r+u)),g=nb(j,i[l],o+" "+n,p+" "+m,!1,"0px",g);return g},prefix:!0,formatter:hb("0px 0px 0px 0px",!1,!0)}),qb("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,e,g){var l,m,n,o,p,q,h="background-position",i=f||T(a,null),j=this.format((i?M?i.getPropertyValue(h+"-x")+" "+i.getPropertyValue(h+"-y"):i.getPropertyValue(h):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),k=this.format(b);if(-1!==j.indexOf("%")!=(-1!==k.indexOf("%"))&&(q=U(a,"backgroundImage").replace(t,""),q&&"none"!==q)){for(l=j.split(" "),m=k.split(" "),E.setAttribute("src",q),n=2;--n>-1;)j=l[n],o=-1!==j.indexOf("%"),o!==(-1!==m[n].indexOf("%"))&&(p=0===n?a.offsetWidth-E.width:a.offsetHeight-E.height,l[n]=o?parseFloat(j)/100*p+"px":100*(parseFloat(j)/p)+"%");j=l.join(" ")}return this.parseComplex(a.style,j,k,e,g)},formatter:_}),qb("backgroundSize",{defaultValue:"0 0",formatter:_}),qb("perspective",{defaultValue:"0px",prefix:!0}),qb("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),qb("transformStyle",{prefix:!0}),qb("backfaceVisibility",{prefix:!0}),qb("margin",{parser:ib("marginTop,marginRight,marginBottom,marginLeft")}),qb("padding",{parser:ib("paddingTop,paddingRight,paddingBottom,paddingLeft")}),qb("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,e,g){var h,i,j;return 9>M?(i=a.currentStyle,j=8>M?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(U(a,this.p,f,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,e,g)}}),qb("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),qb("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),qb("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,e,g){return this.parseComplex(a.style,this.format(U(a,"borderTopWidth",f,!1,"0px")+" "+U(a,"borderTopStyle",f,!1,"solid")+" "+U(a,"borderTopColor",f,!1,"#000")),this.format(b),e,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(gb)||["#000"])[0]}}),qb("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new mb(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Bb=function(a){var e,b=this.t,c=b.filter,d=this.s+this.c*a>>0;100===d&&(-1===c.indexOf("atrix(")&&-1===c.indexOf("radient(")?(b.removeAttribute("filter"),e=!U(this.data,"filter")):(b.filter=c.replace(q,""),e=!0)),e||(this.xn1&&(b.filter=c=c||"alpha(opacity=100)"),-1===c.indexOf("opacity")?b.filter+=" alpha(opacity="+d+")":b.filter=c.replace(o,"opacity="+d))};qb("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,e,g){var j,h=parseFloat(U(a,"opacity",f,!1,"1")),i=a.style;return b=parseFloat(b),"autoAlpha"===c&&(j=U(a,"visibility",f),1===h&&"hidden"===j&&0!==b&&(h=0),e=new mb(i,"visibility",0,0,e,-1,null,!1,0,0!==h?"visible":"hidden",0===b?"hidden":"visible"),e.xs0="visible",d._overwriteProps.push(e.n)),N?e=new mb(i,"opacity",h,b-h,e):(e=new mb(i,"opacity",100*h,100*(b-h),e),e.xn1="autoAlpha"===c?1:0,i.zoom=1,e.type=2,e.b="alpha(opacity="+e.s+")",e.e="alpha(opacity="+(e.s+e.c)+")",e.data=a,e.plugin=g,e.setRatio=Bb),e}});var Cb=function(a){if(1===a||0===a){this.t.className=1===a?this.e:this.b;for(var b=this.data,c=this.t.style,d=c.removeProperty?"removeProperty":"removeAttribute";b;)b.v?c[b.p]=b.v:c[d](b.p.replace(r,"-$1").toLowerCase()),b=b._next}else this.t.className!==this.b&&(this.t.className=this.b)};qb("className",{parser:function(a,b,c,e,g,h,i){var l,m,j=a.className,k=a.style.cssText;return g=e._classNamePT=new mb(a,c,0,0,g,2),g.setRatio=Cb,g.pr=-11,d=!0,g.b=j,g.e="="!==b.charAt(1)?b:"+"===b.charAt(0)?j+" "+b.substr(2):j.split(b.substr(2)).join(""),e._tween._duration&&(m=V(a,f,!0),a.className=g.e,l=W(a,m,V(a),i),a.className=j,g.data=l.firstMPT,a.style.cssText=k,g=g.xfirst=e.parse(a,l.difs,g,h)),g}});var Db=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration)for(var i,b="all"===this.e,c=this.t.style,d=b?c.cssText.split(";"):this.e.split(","),e=c.removeProperty?"removeProperty":"removeAttribute",f=d.length,g=h.transform.parse;--f>-1;)i=d[f],b&&(i=i.substr(0,i.indexOf(":")).split(" ").join("")),h[i]&&(i=h[i].parse===g?tb:h[i].p),i&&c[e](i.replace(r,"-$1").toLowerCase())};for(qb("clearProps",{parser:function(a,b,c,e,f){return f=new mb(a,c,0,0,f,2),f.setRatio=Db,f.e=b,f.pr=-10,f.data=e._tween,d=!0,f}}),i="bezier,throwProps,physicsProps,physics2D".split(","),ob=i.length;ob--;)rb(i[ob]);i=c.prototype,i._firstPT=null,i._onInitTween=function(a,b,h){if(!a.nodeType)return!1;this._target=a,this._tween=h,this._vars=b,H=b.autoRound,d=!1,e=b.suffixMap||c.suffixMap,f=T(a,""),g=this._overwriteProps;var j,k,l,m,n,o,q,r,s,i=a.style;if(I&&""===i.zIndex&&(j=U(a,"zIndex",f),("auto"===j||""===j)&&(i.zIndex=0)),"string"==typeof b&&(m=i.cssText,j=V(a,f),i.cssText=m+";"+b,j=W(a,j,V(a)).difs,!N&&p.test(b)&&(j.opacity=parseFloat(RegExp.$1)),b=j,i.cssText=m),this._firstPT=k=this.parse(a,b,null),this._transformType){for(s=3===this._transformType,tb?J&&(I=!0,""===i.zIndex&&(q=U(a,"zIndex",f),("auto"===q||""===q)&&(i.zIndex=0)),L&&(i.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(s?"visible":"hidden"))):i.zoom=1,l=k;l&&l._next;)l=l._next;r=new mb(a,"transform",0,0,null,2),this._linkCSSP(r,null,l),r.setRatio=s&&wb?zb:tb?Ab:yb,r.data=this._transform||xb(a,f,!0),g.pop()}if(d){for(;k;){for(o=k._next,l=m;l&&l.pr>k.pr;)l=l._next;(k._prev=l?l._prev:n)?k._prev._next=k:m=k,(k._next=l)?l._prev=k:n=k,k=o}this._firstPT=m}return!0},i.parse=function(a,b,c,d){var i,j,k,l,m,o,p,q,r,s,g=a.style;for(i in b)o=b[i],j=h[i],j?c=j.parse(a,o,i,this,c,d,b):(m=U(a,i,f)+"",r="string"==typeof o,"color"===i||"fill"===i||"stroke"===i||-1!==i.indexOf("Color")||r&&!o.indexOf("rgb")?(r||(o=fb(o),o=(o.length>3?"rgba(":"rgb(")+o.join(",")+")"),c=nb(g,i,m,o,!0,"transparent",c,0,d)):!r||-1===o.indexOf(" ")&&-1===o.indexOf(",")?(k=parseFloat(m),p=k||0===k?m.substr((k+"").length):"",(""===m||"auto"===m)&&("width"===i||"height"===i?(k=Z(a,i,f),p="px"):(k="opacity"!==i?0:1,p="")),s=r&&"="===o.charAt(1),s?(l=parseInt(o.charAt(0)+"1",10),o=o.substr(2),l*=parseFloat(o),q=o.replace(n,"")):(l=parseFloat(o),q=r?o.substr((l+"").length)||"":""),""===q&&(q=e[i]||p),o=l||0===l?(s?l+k:l)+q:b[i],p!==q&&""!==q&&(l||0===l)&&(k||0===k)&&(k=$(a,i,k,p),"%"===q?(k/=$(a,i,100,"%")/100,k>100&&(k=100),b.strictUnits!==!0&&(m=k+"%")):"em"===q?k/=$(a,i,1,"em"):(l=$(a,i,l,q),q="px"),s&&(l||0===l)&&(o=l+k+q)),s&&(l+=k),!k&&0!==k||!l&&0!==l?o||"NaN"!=o+""&&null!=o?(c=new mb(g,i,l||k||0,0,c,-1,"css_"+i,!1,0,m,o),c.xs0="display"===i&&"none"===o?m:o):P("invalid "+i+" tween value: "+b[i]):(c=new mb(g,i,k,l-k,c,0,"css_"+i,H!==!1&&("px"===q||"zIndex"===i),0,m,o),c.xs0=q)):c=nb(g,i,m,o,!0,null,c,0,d)),d&&c&&!c.plugin&&(c.plugin=d);return c},i.setRatio=function(a){var d,e,f,b=this._firstPT,c=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;b;){if(d=b.c*a+b.s,b.r?d=d>0?d+.5>>0:d-.5>>0:c>d&&d>-c&&(d=0),b.type)if(1===b.type)if(f=b.l,2===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2;else if(3===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3;else if(4===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3+b.xn3+b.xs4;else if(5===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3+b.xn3+b.xs4+b.xn4+b.xs5;else{for(e=b.xs0+d+b.xs1,f=1;b.l>f;f++)e+=b["xn"+f]+b["xs"+(f+1)];b.t[b.p]=e}else-1===b.type?b.t[b.p]=b.xs0:b.setRatio&&b.setRatio(a);else b.t[b.p]=d+b.xs0;b=b._next}else for(;b;)2!==b.type?b.t[b.p]=b.b:b.setRatio(a),b=b._next;else for(;b;)2!==b.type?b.t[b.p]=b.e:b.setRatio(a),b=b._next},i._enableTransforms=function(a){this._transformType=a||3===this._transformType?3:2},i._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next),a._next=b,a._prev=c),a},i._kill=function(b){var e,f,g,c=b,d=!1;if(b.css_autoAlpha||b.css_alpha){c={};for(f in b)c[f]=b[f];c.css_opacity=1,c.css_autoAlpha&&(c.css_visibility=1)}return b.css_className&&(e=this._classNamePT)&&(g=e.xfirst,g&&g._prev?this._linkCSSP(g._prev,e._next,g._prev._prev):g===this._firstPT&&(this._firstPT=null),e._next&&this._linkCSSP(e._next,e._next._next,g._prev),this._target._gsOverwrittenClassNamePT=this._linkCSSP(e,this._target._gsOverwrittenClassNamePT),this._classNamePT=null,d=!0),a.prototype._kill.call(this,c)||d};var Eb=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Eb(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(V(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Eb(f,b,c)};return c.cascadeTo=function(a,c,d){var k,l,m,e=b.to(a,c,d),f=[e],g=[],h=[],i=[],j=b._internals.reservedProps;for(a=e._targets||e.target,Eb(a,g,i),e.render(c,!0),Eb(a,h),e.render(0,!0),e._enabled(!0),k=i.length;--k>-1;)if(l=W(i[k],g[k],h[k]),l.firstMPT){l=l.difs;for(m in d)j[m]&&(l[m]=d[m]);f.push(b.to(i[k],c,l))}return f},a.activate([c]),c},!0),function(){var a=window._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=a.prototype;b._onInitAllProps=function(){for(var f,g,h,a=this._tween,b=a.vars.roundProps instanceof Array?a.vars.roundProps:a.vars.roundProps.split(","),c=b.length,d={},e=a._propLookup.roundProps;--c>-1;)d[b[c]]=1;for(c=b.length;--c>-1;)for(f=b[c],g=a._firstPT;g;)h=g._next,g.pg?g.t._roundProps(d,!0):g.n===f&&(this._add(g.t,f,g.s,g.c),h&&(h._prev=g._prev),g._prev?g._prev._next=h:a._firstPT===g&&(a._firstPT=h),g._next=g._prev=null,a._propLookup[f]=e),g=h;return!1},b._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,!0),this._overwriteProps.push(b)}}(),window._gsDefine.plugin({propName:"attr",API:2,init:function(a,b){var d;if("function"!=typeof a.setAttribute)return!1;this._target=a,this._proxy={};for(d in b)this._addTween(this._proxy,d,parseFloat(a.getAttribute(d)),b[d],d),this._overwriteProps.push(d);return!0},set:function(a){this._super.setRatio.call(this,a);for(var d,b=this._overwriteProps,c=b.length;--c>-1;)d=b[c],this._target.setAttribute(d,this._proxy[d]+"")}}),window._gsDefine.plugin({propName:"directionalRotation",API:2,init:function(a,b){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k,d=b.useRadians===!0?2*Math.PI:360;for(e in b)"useRadians"!==e&&(j=(b[e]+"").split("_"),f=j[0],k=j[1],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,"short"===k?(i%=d,i!==i%(d/2)&&(i=0>i?i+d:i-d)):"cw"===k&&0>i?i=(i+9999999999*d)%d-(0|i/d)*d:"ccw"===k&&i>0&&(i=(i-9999999999*d)%d-(0|i/d)*d),this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,window._gsDefine("easing.Back",["easing.Ease"],function(a){var n,o,b=window.GreenSockGlobals||window,c=b.com.greensock,d=2*Math.PI,e=Math.PI/2,f=c._class,g=function(b,c){var d=f("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},h=a.register||function(){},i=function(a,b,c,d){var g=f("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return h(g,a),g},j=function(b,c){var d=f("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},k=i("Back",j("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1
}),j("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),j("BackInOut",function(a){return 1>(a*=2)?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),l=f("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),m=l.prototype=new a;return m.constructor=l,m.getRatio=function(a){var b=a+(.5-a)*this._p;return this._p1>a?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},l.ease=new l(.7,.7),m.config=l.config=function(a,b,c){return new l(a,b,c)},n=f("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),m=n.prototype=new a,m.constructor=n,m.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},m.config=n.config=function(a){return new n(a)},i("Bounce",g("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),g("BounceIn",function(a){return 1/2.75>(a=1-a)?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),g("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),i("Circ",g("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),g("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),g("CircInOut",function(a){return 1>(a*=2)?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),o=function(b,c,e){var g=f("easing."+b,function(a,b){this._p1=a||1,this._p2=b||e,this._p3=this._p2/d*(Math.asin(1/this._p1)||0)},!0),h=g.prototype=new a;return h.constructor=g,h.getRatio=c,h.config=function(a,b){return new g(a,b)},g},i("Elastic",o("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*d/this._p2)+1},.3),o("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*d/this._p2))},.3),o("ElasticInOut",function(a){return 1>(a*=2)?-.5*this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*d/this._p2):.5*this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*d/this._p2)+1},.45)),i("Expo",g("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),g("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),g("ExpoInOut",function(a){return 1>(a*=2)?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),i("Sine",g("SineOut",function(a){return Math.sin(a*e)}),g("SineIn",function(a){return-Math.cos(a*e)+1}),g("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),f("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),h(b.SlowMo,"SlowMo","ease,"),h(n,"SteppedEase","ease,"),k},!0)}),function(a){"use strict";var f,g,h,i,j,b=a.GreenSockGlobals||a,c=function(a){var e,c=a.split("."),d=b;for(e=0;c.length>e;e++)d[c[e]]=d=d[c[e]]||{};return d},d=c("com.greensock"),e=function(){},k={},l=function(d,e,f,g){this.sc=k[d]?k[d].sc:[],k[d]=this,this.gsClass=null,this.func=f;var h=[];this.check=function(i){for(var n,o,p,q,j=e.length,m=j;--j>-1;)(n=k[e[j]]||new l(e[j],[])).gsClass?(h[j]=n.gsClass,m--):i&&n.sc.push(this);if(0===m&&f)for(o=("com.greensock."+d).split("."),p=o.pop(),q=c(o.join("."))[p]=this.gsClass=f.apply(f,h),g&&(b[p]=q,"function"==typeof define&&define.amd?define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").join("/"),[],function(){return q}):"undefined"!=typeof module&&module.exports&&(module.exports=q)),j=0;this.sc.length>j;j++)this.sc[j].check()},this.check(!0)},m=a._gsDefine=function(a,b,c,d){return new l(a,b,c,d)},n=d._class=function(a,b,c){return b=b||function(){},m(a,[],function(){return b},c),b};m.globals=b;var o=[0,0,1,1],p=[],q=n("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?o.concat(b):o},!0),r=q.map={},s=q.register=function(a,b,c,e){for(var i,j,k,l,f=b.split(","),g=f.length,h=(c||"easeIn,easeOut,easeInOut").split(",");--g>-1;)for(j=f[g],i=e?n("easing."+j,null,!0):d.easing[j]||{},k=h.length;--k>-1;)l=h[k],r[j+"."+l]=r[l+j]=i[l]=a.getRatio?a:a[l]||new a};for(h=q.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,s(new q(null,null,1,g),h,"easeOut",!0),s(new q(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),s(new q(null,null,3,g),h,"easeInOut");r.linear=d.easing.Linear.easeIn,r.swing=d.easing.Quad.easeInOut;var t=n("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=t.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var h,k,f=this._listeners[a],g=0;for(null==f&&(this._listeners[a]=f=[]),k=f.length;--k>-1;)h=f[k],h.c===b&&h.s===c?f.splice(k,1):0===g&&e>h.pr&&(g=k+1);f.splice(g,0,{c:b,s:c,up:d,pr:e}),this!==i||j||i.wake()},h.removeEventListener=function(a,b){var d,c=this._listeners[a];if(c)for(d=c.length;--d>-1;)if(c[d].c===b)return c.splice(d,1),void 0},h.dispatchEvent=function(a){var c,d,e,b=this._listeners[a];if(b)for(c=b.length,d=this._eventTarget;--c>-1;)e=b[c],e.up?e.c.call(e.s||d,{type:a,target:d}):e.c.call(e.s||d)};var u=a.requestAnimationFrame,v=a.cancelAnimationFrame,w=Date.now||function(){return(new Date).getTime()};for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!u;)u=a[f[g]+"RequestAnimationFrame"],v=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];n("Ticker",function(a,b){var g,h,k,l,m,c=this,d=w(),f=b!==!1&&u,n=function(a){c.time=(w()-d)/1e3,(!g||c.time>=m||a===!0)&&(c.frame++,m=c.time+l,c.dispatchEvent("tick")),a!==!0&&(k=h(n))};t.call(c),this.time=this.frame=0,this.tick=function(){n(!0)},this.sleep=function(){null!=k&&(f&&v?v(k):clearTimeout(k),h=e,k=null,c===i&&(j=!1))},this.wake=function(){k&&c.sleep(),h=0===g?e:f&&u?u:function(a){return setTimeout(a,1e3*l)},c===i&&(j=!0),n()},this.fps=function(a){return arguments.length?(g=a,l=1/(g||60),m=this.time+l,c.wake(),void 0):g},this.useRAF=function(a){return arguments.length?(f=a,c.fps(g),void 0):f},c.fps(a),setTimeout(function(){f&&!k&&c.useRAF(!1)},1e3)}),h=d.Ticker.prototype=new d.events.EventDispatcher,h.constructor=d.Ticker;var x=n("core.Animation",function(a,b){if(this.vars=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(this.vars.delay)||0,this._timeScale=1,this._active=this.vars.immediateRender===!0,this.data=this.vars.data,this._reversed=this.vars.reversed===!0,K){j||i.wake();var c=this.vars.useFrames?J:K;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=x.ticker=new d.Ticker,h=x.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1,h.play=function(a,b){return arguments.length&&this.seek(a,b),this.reversed(!1),this.paused(!1)},h.pause=function(a,b){return arguments.length&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return arguments.length&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1),this.paused(!1),this.totalTime(a?-this._delay:0,b!==!1)},h.reverse=function(a,b){return arguments.length&&this.seek(a||this.totalDuration(),b),this.reversed(!0),this.paused(!1)},h.render=function(){},h.invalidate=function(){return this},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=a&&!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration,b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h.eventCallback=function(a,b,c,d){if(null==a)return null;if("on"===a.substr(0,2)){var f,e=this.vars;if(1===arguments.length)return e[a];if(null==b)delete e[a];else if(e[a]=b,e[a+"Params"]=c,e[a+"Scope"]=d,c)for(f=c.length;--f>-1;)"{self}"===c[f]&&(c=e[a+"Params"]=c.concat(),c[f]=this);"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this.totalTime(a,b)):this._time},h.totalTime=function(a,b){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var c=this._totalDuration,d=this._timeline;if(a>c&&(a=c),this._startTime=(this._paused?this._pauseTime:d._time)-(this._reversed?c-a:a)/this._timeScale,d._dirty||this._uncache(!1),!d._active)for(;d._timeline;)d.totalTime(d._totalTime,!0),d=d._timeline}this._gc&&this._enabled(!0,!1),this._totalTime!==a&&this.render(a,b,!1)}return this},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||1e-6,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;if(a!=this._paused&&this._timeline){j||a||i.wake();var b=this._timeline.rawTime(),c=b-this._pauseTime;!a&&this._timeline.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=!a&&this._totalTime>0&&this._totalTime<this._totalDuration,a||0===c||this.render(this._time,!0,!0)}return this._gc&&!a&&this._enabled(!0,!1),this};var y=n("core.SimpleTimeline",function(a){x.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=y.prototype=new x,h.constructor=y,h.kill()._gc=!1,h._first=h._last=null,h._sortChildren=!1,h.add=function(a,b){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._timeline&&this._uncache(!0),this},h.insert=h.add,h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a.timeline=null,a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var e,d=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;d;)e=d._next,(d._active||a>=d._startTime&&!d._paused)&&(d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=e},h.rawTime=function(){return j||i.wake(),this._totalTime};var z=n("TweenLite",function(a,b,c){if(x.call(this,b,c),null==a)throw"Cannot tween a null target.";this.target=a="string"!=typeof a?a:z.selector(a)||a;var f,g,h,d=a.jquery||"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style,e=this.vars.overwrite;if(this._overwrite=e=null==e?I[z.defaultOverwrite]:"number"==typeof e?e>>0:I[e],(d||a instanceof Array)&&"number"!=typeof a[0])for(this._targets=h=d&&!a.slice?B(a):a.slice(0),this._propLookup=[],this._siblings=[],f=0;h.length>f;f++)g=h[f],g?"string"!=typeof g?"function"==typeof g.each&&g[0]&&g[0].nodeType&&g[0].style?(h.splice(f--,1),this._targets=h=h.concat(B(g))):(this._siblings[f]=L(g,this,!1),1===e&&this._siblings[f].length>1&&M(g,this,null,1,this._siblings[f])):(g=h[f--]=z.selector(g),"string"==typeof g&&h.splice(f+1,1)):h.splice(f--,1);else this._propLookup={},this._siblings=L(a,this,!1),1===e&&this._siblings.length>1&&M(a,this,null,1,this._siblings);(this.vars.immediateRender||0===b&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),A=function(a){return"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style},B=function(a){var b=[];return a.each(function(){b.push(this)}),b},C=function(a,b){var d,c={};for(d in a)H[d]||d in b&&"x"!==d&&"y"!==d&&"width"!==d&&"height"!==d&&"className"!==d||!(!E[d]||E[d]&&E[d]._autoCSS)||(c[d]=a[d],delete a[d]);a.css=c};h=z.prototype=new x,h.constructor=z,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=!1,z.version="1.9.2",z.defaultEase=h._ease=new q(null,null,1,1),z.defaultOverwrite="auto",z.ticker=i,z.autoSleep=!0,z.selector=a.$||a.jQuery||function(b){return a.$?(z.selector=a.$,a.$(b)):a.document?a.document.getElementById("#"===b.charAt(0)?b.substr(1):b):b};var D=z._internals={},E=z._plugins={},F=z._tweenLookup={},G=0,H=D.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,orientToBezier:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},I={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},J=x._rootFramesTimeline=new y,K=x._rootTimeline=new y;K._startTime=i.time,J._startTime=i.frame,K._active=J._active=!0,x._updateRoot=function(){if(K.render((i.time-K._startTime)*K._timeScale,!1,!1),J.render((i.frame-J._startTime)*J._timeScale,!1,!1),!(i.frame%120)){var a,b,c;for(c in F){for(b=F[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete F[c]}if(c=K._first,(!c||c._paused)&&z.autoSleep&&!J._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",x._updateRoot);var L=function(a,b,c){var e,f,d=a._gsTweenID;if(F[d||(a._gsTweenID=d="t"+G++)]||(F[d]={target:a,tweens:[]}),b&&(e=F[d].tweens,e[f=e.length]=b,c))for(;--f>-1;)e[f]===b&&e.splice(f,1);return F[d].tweens},M=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._enabled(!1,!1)&&(g=!0);else if(5===d)break;return g}var n,j=b._startTime+1e-10,k=[],l=0,m=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(n=n||N(b,0,m),0===N(h,n,m)&&(k[l++]=h)):j>=h._startTime&&h._startTime+h.totalDuration()/h._timeScale+1e-10>j&&((m||!h._initted)&&2e-10>=j-h._startTime||(k[l++]=h)));for(f=l;--f>-1;)h=k[f],2===d&&h._kill(c,a)&&(g=!0),(2!==d||!h._firstPT&&h._initted)&&h._enabled(!1,!1)&&(g=!0);return g},N=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2e-10>f-b?1e-10:(f+=a.totalDuration()/a._timeScale/e)>b?0:f-b-1e-10};h._init=function(){var e,f,g,a=this.vars,b=this._overwrittenProps,c=this._duration,d=a.ease;if(a.startAt){if(a.startAt.overwrite=0,a.startAt.immediateRender=!0,this._startAt=z.to(this.target,0,a.startAt),a.immediateRender&&(this._startAt=null,0===this._time&&0!==c))return}else if(a.runBackwards&&a.immediateRender&&0!==c)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else if(0===this._time)return a.overwrite=a.delay=0,a.runBackwards=!1,this._startAt=z.to(this.target,0,a),a.overwrite=this._overwrite,a.runBackwards=!0,a.delay=this._delay,void 0;if(this._ease=d?d instanceof q?a.easeParams instanceof Array?d.config.apply(d,a.easeParams):d:"function"==typeof d?new q(d,a.easeParams):r[d]||z.defaultEase:z.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(e=this._targets.length;--e>-1;)this._initProps(this._targets[e],this._propLookup[e]={},this._siblings[e],b?b[e]:null)&&(f=!0);else f=this._initProps(this.target,this._propLookup,this._siblings,b);if(f&&z._onPluginEvent("_onInitAllProps",this),b&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),a.runBackwards)for(g=this._firstPT;g;)g.s+=g.c,g.c=-g.c,g=g._next;this._onUpdate=a.onUpdate,this._initted=!0},h._initProps=function(a,b,c,d){var e,f,g,h,i,j,k;if(null==a)return!1;this.vars.css||a.style&&a.nodeType&&E.css&&this.vars.autoCSS!==!1&&C(this.vars,a);for(e in this.vars){if(H[e]){if(("onStartParams"===e||"onUpdateParams"===e||"onCompleteParams"===e||"onReverseCompleteParams"===e||"onRepeatParams"===e)&&(i=this.vars[e]))for(f=i.length;--f>-1;)"{self}"===i[f]&&(i=this.vars[e]=i.concat(),i[f]=this)}else if(E[e]&&(h=new E[e])._onInitTween(a,this.vars[e],this)){for(this._firstPT=j={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:e,pg:!0,pr:h._priority},f=h._overwriteProps.length;--f>-1;)b[h._overwriteProps[f]]=this._firstPT;(h._priority||h._onInitAllProps)&&(g=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=b[e]=j={_next:this._firstPT,t:a,p:e,f:"function"==typeof a[e],n:e,pg:!1,pr:0},j.s=j.f?a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]():parseFloat(a[e]),k=this.vars[e],j.c="string"==typeof k&&"="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*Number(k.substr(2)):Number(k)-j.s||0;j&&j._next&&(j._next._prev=j)}return d&&this._kill(d,a)?this._initProps(a,b,c,d):this._overwrite>1&&this._firstPT&&c.length>1&&M(a,this,b,this._overwrite,c)?(this._kill(b,a),this._initProps(a,b,c,d)):g},h.render=function(a,b,c){var e,f,g,d=this._time;if(a>=this._duration)this._totalTime=this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(e=!0,f="onComplete"),0===this._duration&&((0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0),this._rawPrevTime=a);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==d||0===this._duration&&this._rawPrevTime>0)&&(f="onReverseComplete",e=this._reversed),0>a?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(c=!0),this._rawPrevTime=a)):this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var h=a/this._duration,i=this._easeType,j=this._easePower;(1===i||3===i&&h>=.5)&&(h=1-h),3===i&&(h*=2),1===j?h*=h:2===j?h*=h*h:3===j?h*=h*h*h:4===j&&(h*=h*h*h*h),this.ratio=1===i?1-h:2===i?h:.5>a/this._duration?h/2:1-h/2}else this.ratio=this._ease.getRatio(a/this._duration);if(this._time!==d||c){if(!this._initted){if(this._init(),!this._initted)return;this._time&&!e?this.ratio=this._ease.getRatio(this._time/this._duration):e&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||this._paused||(this._active=!0),0===d&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):f||(f="_dummyGS")),this.vars.onStart&&(0!==this._time||0===this._duration)&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||p))),g=this._firstPT;g;)g.f?g.t[g.p](g.c*this.ratio+g.s):g.t[g.p]=g.c*this.ratio+g.s,g=g._next;this._onUpdate&&(0>a&&this._startAt&&this._startAt.render(a,b,c),b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||p)),f&&(this._gc||(0>a&&this._startAt&&!this._onUpdate&&this._startAt.render(a,b,c),e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[f]&&this.vars[f].apply(this.vars[f+"Scope"]||this,this.vars[f+"Params"]||p)))}},h._kill=function(a,b){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:z.selector(b)||b;var c,d,e,f,g,h,i,j;if((b instanceof Array||A(b))&&"number"!=typeof b[0])for(c=b.length;--c>-1;)this._kill(a,b[c])&&(h=!0);else{if(this._targets){for(c=this._targets.length;--c>-1;)if(b===this._targets[c]){g=this._propLookup[c]||{},this._overwrittenProps=this._overwrittenProps||[],d=this._overwrittenProps[c]=a?this._overwrittenProps[c]||{}:"all";break}}else{if(b!==this.target)return!1;g=this._propLookup,d=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(g){i=a||g,j=a!==d&&"all"!==d&&a!==g&&(null==a||a._tempKill!==!0);for(e in i)(f=g[e])&&(f.pg&&f.t._kill(i)&&(h=!0),f.pg&&0!==f.t._overwriteProps.length||(f._prev?f._prev._next=f._next:f===this._firstPT&&(this._firstPT=f._next),f._next&&(f._next._prev=f._prev),f._next=f._prev=null),delete g[e]),j&&(d[e]=1);this._firstPT||this._enabled(!1,!1)}}return h},h.invalidate=function(){return this._notifyPluginsOfEnabled&&z._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var d,c=this._targets;if(c)for(d=c.length;--d>-1;)this._siblings[d]=L(c[d],this,!0);else this._siblings=L(this.target,this,!0)}return x.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?z._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},z.to=function(a,b,c){return new z(a,b,c)},z.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new z(a,b,c)},z.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new z(a,b,d)},z.delayedCall=function(a,b,c,d,e){return new z(b,0,{delay:a,onComplete:b,onCompleteParams:c,onCompleteScope:d,onReverseComplete:b,onReverseCompleteParams:c,onReverseCompleteScope:d,immediateRender:!1,useFrames:e,overwrite:0})},z.set=function(a,b){return new z(a,0,b)},z.killTweensOf=z.killDelayedCallsTo=function(a,b){for(var c=z.getTweensOf(a),d=c.length;--d>-1;)c[d]._kill(b,a)},z.getTweensOf=function(a){if(null!=a){a="string"!=typeof a?a:z.selector(a)||a;var b,c,d,e;if((a instanceof Array||A(a))&&"number"!=typeof a[0]){for(b=a.length,c=[];--b>-1;)c=c.concat(z.getTweensOf(a[b]));for(b=c.length;--b>-1;)for(e=c[b],d=b;--d>-1;)e===c[d]&&c.splice(b,1)}else for(c=L(a).concat(),b=c.length;--b>-1;)c[b]._gc&&c.splice(b,1);return c}};var O=n("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=O.prototype},!0);if(h=O.prototype,O.version="1.9.1",O.API=2,h._firstPT=null,h._addTween=function(a,b,c,d,e,f){var g,h;null!=d&&(g="number"==typeof d||"="!==d.charAt(1)?Number(d)-c:parseInt(d.charAt(0)+"1",10)*Number(d.substr(2)))&&(this._firstPT=h={_next:this._firstPT,t:a,p:b,s:c,c:g,f:"function"==typeof a[b],n:e||b,r:f},h._next&&(h._next._prev=h))},h.setRatio=function(a){for(var d,b=this._firstPT,c=1e-6;b;)d=b.c*a+b.s,b.r?d=d+(d>0?.5:-.5)>>0:c>d&&d>-c&&(d=0),b.f?b.t[b.p](d):b.t[b.p]=d,b=b._next},h._kill=function(a){var d,b=this._overwriteProps,c=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(d=b.length;--d>-1;)null!=a[b[d]]&&b.splice(d,1);for(;c;)null!=a[c.n]&&(c._next&&(c._next._prev=c._prev),c._prev?(c._prev._next=c._next,c._prev=null):this._firstPT===c&&(this._firstPT=c._next)),c=c._next;return!1},h._roundProps=function(a,b){for(var c=this._firstPT;c;)(a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")])&&(c.r=b),c=c._next},z._onPluginEvent=function(a,b){var d,e,f,g,h,c=b._firstPT;if("_onInitAllProps"===a){for(;c;){for(h=c._next,e=f;e&&e.pr>c.pr;)e=e._next;(c._prev=e?e._prev:g)?c._prev._next=c:f=c,(c._next=e)?e._prev=c:g=c,c=h}c=b._firstPT=f}for(;c;)c.pg&&"function"==typeof c.t[a]&&c.t[a]()&&(d=!0),c=c._next;return d},O.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===O.API&&(E[(new a[b])._propName]=a[b]);return!0},m.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var h,b=a.propName,c=a.priority||0,d=a.overwriteProps,e={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},f=n("plugins."+b.charAt(0).toUpperCase()+b.substr(1)+"Plugin",function(){O.call(this,b,c),this._overwriteProps=d||[]},a.global===!0),g=f.prototype=new O(b);g.constructor=f,f.API=a.API;for(h in e)"function"==typeof a[h]&&(g[e[h]]=a[h]);return f.version=a.version,O.activate([f]),f},f=a._gsQueue){for(g=0;f.length>g;g++)f[g]();for(h in k)k[h].func||a.console.log("GSAP encountered missing dependency: com.greensock."+h)}j=!1}(window);

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/lib/jQuery.templates.js */
/*!
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function( jQuery, undefined ){
	var oldManip = jQuery.fn.domManip, tmplItmAtt = "_tmplitem", htmlExpr = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
		newTmplItems = {}, wrappedItems = {}, appendToTmplItems, topTmplItem = { key: 0, data: {} }, itemKey = 0, cloneIndex = 0, stack = [];

	function newTmplItem( options, parentItem, fn, data ) {
		// Returns a template item data structure for a new rendered instance of a template (a 'template item').
		// The content field is a hierarchical array of strings and nested items (to be
		// removed and replaced by nodes field of dom elements, once inserted in DOM).
		var newItem = {
			data: data || (parentItem ? parentItem.data : {}),
			_wrap: parentItem ? parentItem._wrap : null,
			tmpl: null,
			parent: parentItem || null,
			nodes: [],
			calls: tiCalls,
			nest: tiNest,
			wrap: tiWrap,
			html: tiHtml,
			update: tiUpdate
		};
		if ( options ) {
			jQuery.extend( newItem, options, { nodes: [], parent: parentItem });
		}
		if ( fn ) {
			// Build the hierarchical content to be used during insertion into DOM
			newItem.tmpl = fn;
			newItem._ctnt = newItem._ctnt || newItem.tmpl( jQuery, newItem );
			newItem.key = ++itemKey;
			// Keep track of new template item, until it is stored as jQuery Data on DOM element
			(stack.length ? wrappedItems : newTmplItems)[itemKey] = newItem;
		}
		return newItem;
	}

	// Override appendTo etc., in order to provide support for targeting multiple elements. (This code would disappear if integrated in jquery core).
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var ret = [], insert = jQuery( selector ), elems, i, l, tmplItems,
				parent = this.length === 1 && this[0].parentNode;

			appendToTmplItems = newTmplItems || {};
			if ( parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1 ) {
				insert[ original ]( this[0] );
				ret = this;
			} else {
				for ( i = 0, l = insert.length; i < l; i++ ) {
					cloneIndex = i;
					elems = (i > 0 ? this.clone(true) : this).get();
					jQuery( insert[i] )[ original ]( elems );
					ret = ret.concat( elems );
				}
				cloneIndex = 0;
				ret = this.pushStack( ret, name, insert.selector );
			}
			tmplItems = appendToTmplItems;
			appendToTmplItems = null;
			jQuery.tmpl.complete( tmplItems );
			return ret;
		};
	});

	jQuery.fn.extend({
		// Use first wrapped element as template markup.
		// Return wrapped set of template items, obtained by rendering template against data.
		tmpl: function( data, options, parentItem ) {
			return jQuery.tmpl( this[0], data, options, parentItem );
		},

		// Find which rendered template item the first wrapped DOM element belongs to
		tmplItem: function() {
			return jQuery.tmplItem( this[0] );
		},

		// Consider the first wrapped element as a template declaration, and get the compiled template or store it as a named template.
		template: function( name ) {
			return jQuery.template( name, this[0] );
		},

		domManip: function( args, table, callback, options ) {
			if ( args[0] && jQuery.isArray( args[0] )) {
				var dmArgs = jQuery.makeArray( arguments ), elems = args[0], elemsLength = elems.length, i = 0, tmplItem;
				while ( i < elemsLength && !(tmplItem = jQuery.data( elems[i++], "tmplItem" ))) {}
				if ( tmplItem && cloneIndex ) {
					dmArgs[2] = function( fragClone ) {
						// Handler called by oldManip when rendered template has been inserted into DOM.
						jQuery.tmpl.afterManip( this, fragClone, callback );
					};
				}
				oldManip.apply( this, dmArgs );
			} else {
				oldManip.apply( this, arguments );
			}
			cloneIndex = 0;
			if ( !appendToTmplItems ) {
				jQuery.tmpl.complete( newTmplItems );
			}
			return this;
		}
	});

	jQuery.extend({
		// Return wrapped set of template items, obtained by rendering template against data.
		tmpl: function( tmpl, data, options, parentItem ) {
			var ret, topLevel = !parentItem;
			if ( topLevel ) {
				// This is a top-level tmpl call (not from a nested template using {{tmpl}})
				parentItem = topTmplItem;
				tmpl = jQuery.template[tmpl] || jQuery.template( null, tmpl );
				wrappedItems = {}; // Any wrapped items will be rebuilt, since this is top level
			} else if ( !tmpl ) {
				// The template item is already associated with DOM - this is a refresh.
				// Re-evaluate rendered template for the parentItem
				tmpl = parentItem.tmpl;
				newTmplItems[parentItem.key] = parentItem;
				parentItem.nodes = [];
				if ( parentItem.wrapped ) {
					updateWrapped( parentItem, parentItem.wrapped );
				}
				// Rebuild, without creating a new template item
				return jQuery( build( parentItem, null, parentItem.tmpl( jQuery, parentItem ) ));
			}
			if ( !tmpl ) {
				return []; // Could throw...
			}
			if ( typeof data === "function" ) {
				data = data.call( parentItem || {} );
			}
			if ( options && options.wrapped ) {
				updateWrapped( options, options.wrapped );
			}
			ret = jQuery.isArray( data ) ? 
				jQuery.map( data, function( dataItem ) {
					return dataItem ? newTmplItem( options, parentItem, tmpl, dataItem ) : null;
				}) :
				[ newTmplItem( options, parentItem, tmpl, data ) ];
			return topLevel ? jQuery( build( parentItem, null, ret ) ) : ret;
		},

		// Return rendered template item for an element.
		tmplItem: function( elem ) {
			var tmplItem;
			if ( elem instanceof jQuery ) {
				elem = elem[0];
			}
			while ( elem && elem.nodeType === 1 && !(tmplItem = jQuery.data( elem, "tmplItem" )) && (elem = elem.parentNode) ) {}
			return tmplItem || topTmplItem;
		},

		// Set:
		// Use $.template( name, tmpl ) to cache a named template,
		// where tmpl is a template string, a script element or a jQuery instance wrapping a script element, etc.
		// Use $( "selector" ).template( name ) to provide access by name to a script block template declaration.

		// Get:
		// Use $.template( name ) to access a cached template.
		// Also $( selectorToScriptBlock ).template(), or $.template( null, templateString )
		// will return the compiled template, without adding a name reference.
		// If templateString includes at least one HTML tag, $.template( templateString ) is equivalent
		// to $.template( null, templateString )
		template: function( name, tmpl ) {
			if (tmpl) {
				// Compile template and associate with name
				if ( typeof tmpl === "string" ) {
					// This is an HTML string being passed directly in.
					tmpl = buildTmplFn( tmpl )
				} else if ( tmpl instanceof jQuery ) {
					tmpl = tmpl[0] || {};
				}
				if ( tmpl.nodeType ) {
					// If this is a template block, use cached copy, or generate tmpl function and cache.
					tmpl = jQuery.data( tmpl, "tmpl" ) || jQuery.data( tmpl, "tmpl", buildTmplFn( tmpl.innerHTML )); 
					// Issue: In IE, if the container element is not a script block, the innerHTML will remove quotes from attribute values whenever the value does not include white space. 
					// This means that foo="${x}" will not work if the value of x includes white space: foo="${x}" -> foo=value of x. 
					// To correct this, include space in tag: foo="${ x }" -> foo="value of x"
				}
				return typeof name === "string" ? (jQuery.template[name] = tmpl) : tmpl;
			}
			// Return named compiled template
			return name ? (typeof name !== "string" ? jQuery.template( null, name ): 
				(jQuery.template[name] || 
					// If not in map, treat as a selector. (If integrated with core, use quickExpr.exec) 
					jQuery.template( null, htmlExpr.test( name ) ? name : jQuery( name )))) : null; 
		},

		encode: function( text ) {
			// Do HTML encoding replacing < > & and ' and " by corresponding entities.
			return ("" + text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;");
		}
	});

	jQuery.extend( jQuery.tmpl, {
		tag: {
			"tmpl": {
				_default: { $2: "null" },
				open: "if($notnull_1){_=_.concat($item.nest($1,$2));}"
				// tmpl target parameter can be of type function, so use $1, not $1a (so not auto detection of functions)
				// This means that {{tmpl foo}} treats foo as a template (which IS a function). 
				// Explicit parens can be used if foo is a function that returns a template: {{tmpl foo()}}.
			},
			"wrap": {
				_default: { $2: "null" },
				open: "$item.calls(_,$1,$2);_=[];",
				close: "call=$item.calls();_=call._.concat($item.wrap(call,_));"
			},
			"each": {
				_default: { $2: "$index, $value" },
				open: "if($notnull_1){$.each($1a,function($2){with(this){",
				close: "}});}"
			},
			"if": {
				open: "if(($notnull_1) && $1a){",
				close: "}"
			},
			"else": {
				_default: { $1: "true" },
				open: "}else if(($notnull_1) && $1a){"
			},
			"html": {
				// Unecoded expression evaluation. 
				open: "if($notnull_1){_.push($1a);}"
			},
			"=": {
				// Encoded expression evaluation. Abbreviated form is ${}.
				_default: { $1: "$data" },
				open: "if($notnull_1){_.push($.encode($1a));}"
			},
			"!": {
				// Comment tag. Skipped by parser
				open: ""
			}
		},

		// This stub can be overridden, e.g. in jquery.tmplPlus for providing rendered events
		complete: function( items ) {
			newTmplItems = {};
		},

		// Call this from code which overrides domManip, or equivalent
		// Manage cloning/storing template items etc.
		afterManip: function afterManip( elem, fragClone, callback ) {
			// Provides cloned fragment ready for fixup prior to and after insertion into DOM
			var content = fragClone.nodeType === 11 ?
				jQuery.makeArray(fragClone.childNodes) :
				fragClone.nodeType === 1 ? [fragClone] : [];

			// Return fragment to original caller (e.g. append) for DOM insertion
			callback.call( elem, fragClone );

			// Fragment has been inserted:- Add inserted nodes to tmplItem data structure. Replace inserted element annotations by jQuery.data.
			storeTmplItems( content );
			cloneIndex++;
		}
	});

	//========================== Private helper functions, used by code above ==========================

	function build( tmplItem, nested, content ) {
		// Convert hierarchical content into flat string array 
		// and finally return array of fragments ready for DOM insertion
		var frag, ret = content ? jQuery.map( content, function( item ) {
			return (typeof item === "string") ? 
				// Insert template item annotations, to be converted to jQuery.data( "tmplItem" ) when elems are inserted into DOM.
				(tmplItem.key ? item.replace( /(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + tmplItmAtt + "=\"" + tmplItem.key + "\" $2" ) : item) :
				// This is a child template item. Build nested template.
				build( item, tmplItem, item._ctnt );
		}) : 
		// If content is not defined, insert tmplItem directly. Not a template item. May be a string, or a string array, e.g. from {{html $item.html()}}. 
		tmplItem;
		if ( nested ) {
			return ret;
		}

		// top-level template
		ret = ret.join("");

		// Support templates which have initial or final text nodes, or consist only of text
		// Also support HTML entities within the HTML markup.
		ret.replace( /^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function( all, before, middle, after) {
			frag = jQuery( middle ).get();

			storeTmplItems( frag );
			if ( before ) {
				frag = unencode( before ).concat(frag);
			}
			if ( after ) {
				frag = frag.concat(unencode( after ));
			}
		});
		return frag ? frag : unencode( ret );
	}

	function unencode( text ) {
		// Use createElement, since createTextNode will not render HTML entities correctly
		var el = document.createElement( "div" );
		el.innerHTML = text;
		return jQuery.makeArray(el.childNodes);
	}

	// Generate a reusable function that will serve to render a template against data
	function buildTmplFn( markup ) {
		return new Function("jQuery","$item",
			"var $=jQuery,call,_=[],$data=$item.data;" +

			// Introduce the data as local variables using with(){}
			"with($data){_.push('" +

			// Convert the template into pure JavaScript
			jQuery.trim(markup)
				.replace( /([\\'])/g, "\\$1" )
				.replace( /[\r\t\n]/g, " " )
				.replace( /\$\{([^\}]*)\}/g, "{{= $1}}" )
				.replace( /\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
				function( all, slash, type, fnargs, target, parens, args ) {
					var tag = jQuery.tmpl.tag[ type ], def, expr, exprAutoFnDetect;
					if ( !tag ) {
						throw "Template command not found: " + type;
					}
					def = tag._default || [];
					if ( parens && !/\w$/.test(target)) {
						target += parens;
						parens = "";
					}
					if ( target ) {
						target = unescape( target ); 
						args = args ? ("," + unescape( args ) + ")") : (parens ? ")" : "");
						// Support for target being things like a.toLowerCase();
						// In that case don't call with template item as 'this' pointer. Just evaluate...
						expr = parens ? (target.indexOf(".") > -1 ? target + unescape( parens ) : ("(" + target + ").call($item" + args)) : target;
						exprAutoFnDetect = parens ? expr : "(typeof(" + target + ")==='function'?(" + target + ").call($item):(" + target + "))";
					} else {
						exprAutoFnDetect = expr = def.$1 || "null";
					}
					fnargs = unescape( fnargs );
					return "');" + 
						tag[ slash ? "close" : "open" ]
							.split( "$notnull_1" ).join( target ? "typeof(" + target + ")!=='undefined' && (" + target + ")!=null" : "true" )
							.split( "$1a" ).join( exprAutoFnDetect )
							.split( "$1" ).join( expr )
							.split( "$2" ).join( fnargs || def.$2 || "" ) +
						"_.push('";
				}) +
			"');}return _;"
		);
	}
	function updateWrapped( options, wrapped ) {
		// Build the wrapped content. 
		options._wrap = build( options, true, 
			// Suport imperative scenario in which options.wrapped can be set to a selector or an HTML string.
			jQuery.isArray( wrapped ) ? wrapped : [htmlExpr.test( wrapped ) ? wrapped : jQuery( wrapped ).html()]
		).join("");
	}

	function unescape( args ) {
		return args ? args.replace( /\\'/g, "'").replace(/\\\\/g, "\\" ) : null;
	}
	function outerHtml( elem ) {
		var div = document.createElement("div");
		div.appendChild( elem.cloneNode(true) );
		return div.innerHTML;
	}

	// Store template items in jQuery.data(), ensuring a unique tmplItem data data structure for each rendered template instance.
	function storeTmplItems( content ) {
		var keySuffix = "_" + cloneIndex, elem, elems, newClonedItems = {}, i, l, m;
		for ( i = 0, l = content.length; i < l; i++ ) {
			if ( (elem = content[i]).nodeType !== 1 ) {
				continue;
			}
			elems = elem.getElementsByTagName("*");
			for ( m = elems.length - 1; m >= 0; m-- ) {
				processItemKey( elems[m] );
			}
			processItemKey( elem );
		}
		function processItemKey( el ) {
			var pntKey, pntNode = el, pntItem, tmplItem, key;
			// Ensure that each rendered template inserted into the DOM has its own template item,
			if ( (key = el.getAttribute( tmplItmAtt ))) {
				while ( pntNode.parentNode && (pntNode = pntNode.parentNode).nodeType === 1 && !(pntKey = pntNode.getAttribute( tmplItmAtt ))) { }
				if ( pntKey !== key ) {
					// The next ancestor with a _tmplitem expando is on a different key than this one.
					// So this is a top-level element within this template item
					// Set pntNode to the key of the parentNode, or to 0 if pntNode.parentNode is null, or pntNode is a fragment.
					pntNode = pntNode.parentNode ? (pntNode.nodeType === 11 ? 0 : (pntNode.getAttribute( tmplItmAtt ) || 0)) : 0;
					if ( !(tmplItem = newTmplItems[key]) ) {
						// The item is for wrapped content, and was copied from the temporary parent wrappedItem.
						tmplItem = wrappedItems[key];
						tmplItem = newTmplItem( tmplItem, newTmplItems[pntNode]||wrappedItems[pntNode] );
						tmplItem.key = ++itemKey;
						newTmplItems[itemKey] = tmplItem;
					}
					if ( cloneIndex ) {
						cloneTmplItem( key );
					}
				}
				el.removeAttribute( tmplItmAtt );
			} else if ( cloneIndex && (tmplItem = jQuery.data( el, "tmplItem" )) ) {
				// This was a rendered element, cloned during append or appendTo etc.
				// TmplItem stored in jQuery data has already been cloned in cloneCopyEvent. We must replace it with a fresh cloned tmplItem.
				cloneTmplItem( tmplItem.key );
				newTmplItems[tmplItem.key] = tmplItem;
				pntNode = jQuery.data( el.parentNode, "tmplItem" );
				pntNode = pntNode ? pntNode.key : 0;
			}
			if ( tmplItem ) {
				pntItem = tmplItem;
				// Find the template item of the parent element. 
				// (Using !=, not !==, since pntItem.key is number, and pntNode may be a string)
				while ( pntItem && pntItem.key != pntNode ) { 
					// Add this element as a top-level node for this rendered template item, as well as for any
					// ancestor items between this item and the item of its parent element
					pntItem.nodes.push( el );
					pntItem = pntItem.parent;
				}
				// Delete content built during rendering - reduce API surface area and memory use, and avoid exposing of stale data after rendering...
				delete tmplItem._ctnt;
				delete tmplItem._wrap;
				// Store template item as jQuery data on the element
				jQuery.data( el, "tmplItem", tmplItem );
			}
			function cloneTmplItem( key ) {
				key = key + keySuffix;
				tmplItem = newClonedItems[key] = 
					(newClonedItems[key] || newTmplItem( tmplItem, newTmplItems[tmplItem.parent.key + keySuffix] || tmplItem.parent ));
			}
		}
	}

	//---- Helper functions for template item ----

	function tiCalls( content, tmpl, data, options ) {
		if ( !content ) {
			return stack.pop();
		}
		stack.push({ _: content, tmpl: tmpl, item:this, data: data, options: options });
	}

	function tiNest( tmpl, data, options ) {
		// nested template, using {{tmpl}} tag
		return jQuery.tmpl( jQuery.template( tmpl ), data, options, this );
	}

	function tiWrap( call, wrapped ) {
		// nested template, using {{wrap}} tag
		var options = call.options || {};
		options.wrapped = wrapped;
		// Apply the template, which may incorporate wrapped content, 
		return jQuery.tmpl( jQuery.template( call.tmpl ), call.data, options, call.item );
	}

	function tiHtml( filter, textOnly ) {
		var wrapped = this._wrap;
		return jQuery.map(
			jQuery( jQuery.isArray( wrapped ) ? wrapped.join("") : wrapped ).filter( filter || "*" ),
			function(e) {
				return textOnly ?
					e.innerText || e.textContent :
					e.outerHTML || outerHtml(e);
			});
	}

	function tiUpdate() {
		var coll = this.nodes;
		jQuery.tmpl( null, null, null, this).insertBefore( coll[0] );
		jQuery( coll ).remove();
	}
})( jQuery );


/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/lib/jquery.ba-hashchange.min.js */
/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}$.browser.msie&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/lib/jquery.easing.js */

jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	linear: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

jQuery.extend( jQuery.easing,
{
	easeIn: function (x, t, b, c, d) {
		return jQuery.easing.easeInQuad(x, t, b, c, d);
	},
	"ease-in": function (x, t, b, c, d) {
		return jQuery.easing.easeInQuad(x, t, b, c, d);
	},
	easeOut: function (x, t, b, c, d) {
		return jQuery.easing.easeOutQuad(x, t, b, c, d);
	},
	"ease-out": function (x, t, b, c, d) {
		return jQuery.easing.easeOutQuad(x, t, b, c, d);
	},
	easeInOut: function (x, t, b, c, d) {
		return jQuery.easing.easeInOutQuad(x, t, b, c, d);
	},
	"ease-in-out": function (x, t, b, c, d) {
		return jQuery.easing.easeInOutQuad(x, t, b, c, d);
	},
	expoin: function(x, t, b, c, d) {
		return jQuery.easing.easeInExpo(x, t, b, c, d);
	},
	expoout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutExpo(x, t, b, c, d);
	},
	expoinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutExpo(x, t, b, c, d);
	},
	bouncein: function(x, t, b, c, d) {
		return jQuery.easing.easeInBounce(x, t, b, c, d);
	},
	bounceout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutBounce(x, t, b, c, d);
	},
	bounceinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutBounce(x, t, b, c, d);
	},
	elasin: function(x, t, b, c, d) {
		return jQuery.easing.easeInElastic(x, t, b, c, d);
	},
	elasout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutElastic(x, t, b, c, d);
	},
	elasinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutElastic(x, t, b, c, d);
	},
	backin: function(x, t, b, c, d) {
		return jQuery.easing.easeInBack(x, t, b, c, d);
	},
	backout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutBack(x, t, b, c, d);
	},
	backinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutBack(x, t, b, c, d);
	}
});

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/lib/jquery.history.min.js */
/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery hashchange event
//
// *Version: 1.3, Last updated: 7/21/2010*
// 
// Project Home - http://benalman.com/projects/jquery-hashchange-plugin/
// GitHub       - http://github.com/cowboy/jquery-hashchange/
// Source       - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.js
// (Minified)   - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.min.js (0.8kb gzipped)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// hashchange event - http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/
// document.domain - http://benalman.com/code/projects/jquery-hashchange/examples/document_domain/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.2.6, 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-4, Chrome 5-6, Safari 3.2-5,
//                   Opera 9.6-10.60, iPhone 3.1, Android 1.6-2.2, BlackBerry 4.6-5.
// Unit Tests      - http://benalman.com/code/projects/jquery-hashchange/unit/
// 
// About: Known issues
// 
// While this jQuery hashchange event implementation is quite stable and
// robust, there are a few unfortunate browser bugs surrounding expected
// hashchange event-based behaviors, independent of any JavaScript
// window.onhashchange abstraction. See the following examples for more
// information:
// 
// Chrome: Back Button - http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/
// Firefox: Remote XMLHttpRequest - http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/
// WebKit: Back Button in an Iframe - http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/
// Safari: Back Button from a different domain - http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/
// 
// Also note that should a browser natively support the window.onhashchange 
// event, but not report that it does, the fallback polling loop will be used.
// 
// About: Release History
// 
// 1.3   - (7/21/2010) Reorganized IE6/7 Iframe code to make it more
//         "removable" for mobile-only development. Added IE6/7 document.title
//         support. Attempted to make Iframe as hidden as possible by using
//         techniques from http://www.paciellogroup.com/blog/?p=604. Added 
//         support for the "shortcut" format $(window).hashchange( fn ) and
//         $(window).hashchange() like jQuery provides for built-in events.
//         Renamed jQuery.hashchangeDelay to <jQuery.fn.hashchange.delay> and
//         lowered its default value to 50. Added <jQuery.fn.hashchange.domain>
//         and <jQuery.fn.hashchange.src> properties plus document-domain.html
//         file to address access denied issues when setting document.domain in
//         IE6/7.
// 1.2   - (2/11/2010) Fixed a bug where coming back to a page using this plugin
//         from a page on another domain would cause an error in Safari 4. Also,
//         IE6/7 Iframe is now inserted after the body (this actually works),
//         which prevents the page from scrolling when the event is first bound.
//         Event can also now be bound before DOM ready, but it won't be usable
//         before then in IE6/7.
// 1.1   - (1/21/2010) Incorporated document.documentMode test to fix IE8 bug
//         where browser version is incorrectly reported as 8.0, despite
//         inclusion of the X-UA-Compatible IE=EmulateIE7 meta tag.
// 1.0   - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special
//         window.onhashchange functionality into a separate plugin for users
//         who want just the basic event & back button support, without all the
//         extra awesomeness that BBQ provides. This plugin will be included as
//         part of jQuery BBQ, but also be available separately.

(function($,window,undefined){
  '$:nomunge'; // Used by YUI compressor.
  
  // Reused string.
  var str_hashchange = 'hashchange',
    
    // Method / object references.
    doc = document,
    fake_onhashchange,
    special = $.event.special,
    
    // Does the browser support window.onhashchange? Note that IE8 running in
    // IE7 compatibility mode reports true for 'onhashchange' in window, even
    // though the event isn't supported, so also test document.documentMode.
    doc_mode = doc.documentMode,
    supports_onhashchange = 'on' + str_hashchange in window && ( doc_mode === undefined || doc_mode > 7 );
  
  // Get location.hash (or what you'd expect location.hash to be) sans any
  // leading #. Thanks for making this necessary, Firefox!
  function get_fragment( url ) {
    url = url || location.href;
    return '#' + url.replace( /^[^#]*#?(.*)$/, '$1' );
  };
  
  // Method: jQuery.fn.hashchange
  // 
  // Bind a handler to the window.onhashchange event or trigger all bound
  // window.onhashchange event handlers. This behavior is consistent with
  // jQuery's built-in event handlers.
  // 
  // Usage:
  // 
  // > jQuery(window).hashchange( [ handler ] );
  // 
  // Arguments:
  // 
  //  handler - (Function) Optional handler to be bound to the hashchange
  //    event. This is a "shortcut" for the more verbose form:
  //    jQuery(window).bind( 'hashchange', handler ). If handler is omitted,
  //    all bound window.onhashchange event handlers will be triggered. This
  //    is a shortcut for the more verbose
  //    jQuery(window).trigger( 'hashchange' ). These forms are described in
  //    the <hashchange event> section.
  // 
  // Returns:
  // 
  //  (jQuery) The initial jQuery collection of elements.
  
  // Allow the "shortcut" format $(elem).hashchange( fn ) for binding and
  // $(elem).hashchange() for triggering, like jQuery does for built-in events.
  $.fn[ str_hashchange ] = function( fn ) {
    return fn ? this.bind( str_hashchange, fn ) : this.trigger( str_hashchange );
  };
  
  // Property: jQuery.fn.hashchange.delay
  // 
  // The numeric interval (in milliseconds) at which the <hashchange event>
  // polling loop executes. Defaults to 50.
  
  // Property: jQuery.fn.hashchange.domain
  // 
  // If you're setting document.domain in your JavaScript, and you want hash
  // history to work in IE6/7, not only must this property be set, but you must
  // also set document.domain BEFORE jQuery is loaded into the page. This
  // property is only applicable if you are supporting IE6/7 (or IE8 operating
  // in "IE7 compatibility" mode).
  // 
  // In addition, the <jQuery.fn.hashchange.src> property must be set to the
  // path of the included "document-domain.html" file, which can be renamed or
  // modified if necessary (note that the document.domain specified must be the
  // same in both your main JavaScript as well as in this file).
  // 
  // Usage:
  // 
  // jQuery.fn.hashchange.domain = document.domain;
  
  // Property: jQuery.fn.hashchange.src
  // 
  // If, for some reason, you need to specify an Iframe src file (for example,
  // when setting document.domain as in <jQuery.fn.hashchange.domain>), you can
  // do so using this property. Note that when using this property, history
  // won't be recorded in IE6/7 until the Iframe src file loads. This property
  // is only applicable if you are supporting IE6/7 (or IE8 operating in "IE7
  // compatibility" mode).
  // 
  // Usage:
  // 
  // jQuery.fn.hashchange.src = 'path/to/file.html';
  
  $.fn[ str_hashchange ].delay = 50;
  /*
  $.fn[ str_hashchange ].domain = null;
  $.fn[ str_hashchange ].src = null;
  */
  
  // Event: hashchange event
  // 
  // Fired when location.hash changes. In browsers that support it, the native
  // HTML5 window.onhashchange event is used, otherwise a polling loop is
  // initialized, running every <jQuery.fn.hashchange.delay> milliseconds to
  // see if the hash has changed. In IE6/7 (and IE8 operating in "IE7
  // compatibility" mode), a hidden Iframe is created to allow the back button
  // and hash-based history to work.
  // 
  // Usage as described in <jQuery.fn.hashchange>:
  // 
  // > // Bind an event handler.
  // > jQuery(window).hashchange( function(e) {
  // >   var hash = location.hash;
  // >   ...
  // > });
  // > 
  // > // Manually trigger the event handler.
  // > jQuery(window).hashchange();
  // 
  // A more verbose usage that allows for event namespacing:
  // 
  // > // Bind an event handler.
  // > jQuery(window).bind( 'hashchange', function(e) {
  // >   var hash = location.hash;
  // >   ...
  // > });
  // > 
  // > // Manually trigger the event handler.
  // > jQuery(window).trigger( 'hashchange' );
  // 
  // Additional Notes:
  // 
  // * The polling loop and Iframe are not created until at least one handler
  //   is actually bound to the 'hashchange' event.
  // * If you need the bound handler(s) to execute immediately, in cases where
  //   a location.hash exists on page load, via bookmark or page refresh for
  //   example, use jQuery(window).hashchange() or the more verbose 
  //   jQuery(window).trigger( 'hashchange' ).
  // * The event can be bound before DOM ready, but since it won't be usable
  //   before then in IE6/7 (due to the necessary Iframe), recommended usage is
  //   to bind it inside a DOM ready handler.
  
  // Override existing $.event.special.hashchange methods (allowing this plugin
  // to be defined after jQuery BBQ in BBQ's source code).
  special[ str_hashchange ] = $.extend( special[ str_hashchange ], {
    
    // Called only when the first 'hashchange' event is bound to window.
    setup: function() {
      // If window.onhashchange is supported natively, there's nothing to do..
      if ( supports_onhashchange ) { return false; }
      
      // Otherwise, we need to create our own. And we don't want to call this
      // until the user binds to the event, just in case they never do, since it
      // will create a polling loop and possibly even a hidden Iframe.
      $( fake_onhashchange.start );
    },
    
    // Called only when the last 'hashchange' event is unbound from window.
    teardown: function() {
      // If window.onhashchange is supported natively, there's nothing to do..
      if ( supports_onhashchange ) { return false; }
      
      // Otherwise, we need to stop ours (if possible).
      $( fake_onhashchange.stop );
    }
    
  });
  
  // fake_onhashchange does all the work of triggering the window.onhashchange
  // event for browsers that don't natively support it, including creating a
  // polling loop to watch for hash changes and in IE 6/7 creating a hidden
  // Iframe to enable back and forward.
  fake_onhashchange = (function(){
    var self = {},
      timeout_id,
      
      // Remember the initial hash so it doesn't get triggered immediately.
      last_hash = get_fragment(),
      
      fn_retval = function(val){ return val; },
      history_set = fn_retval,
      history_get = fn_retval;
    
    // Start the polling loop.
    self.start = function() {
      timeout_id || poll();
    };
    
    // Stop the polling loop.
    self.stop = function() {
      timeout_id && clearTimeout( timeout_id );
      timeout_id = undefined;
    };
    
    // This polling loop checks every $.fn.hashchange.delay milliseconds to see
    // if location.hash has changed, and triggers the 'hashchange' event on
    // window when necessary.
    function poll() {
      var hash = get_fragment(),
        history_hash = history_get( last_hash );
      
      if ( hash !== last_hash ) {
        history_set( last_hash = hash, history_hash );
        
        $(window).trigger( str_hashchange );
        
      } else if ( history_hash !== last_hash ) {
        location.href = location.href.replace( /#.*/, '' ) + history_hash;
      }
      
      timeout_id = setTimeout( poll, $.fn[ str_hashchange ].delay );
    };
    
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    // vvvvvvvvvvvvvvvvvvv REMOVE IF NOT SUPPORTING IE6/7/8 vvvvvvvvvvvvvvvvvvv
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    $.browser.msie && !supports_onhashchange && (function(){
      // Not only do IE6/7 need the "magical" Iframe treatment, but so does IE8
      // when running in "IE7 compatibility" mode.
      
      var iframe,
        iframe_src;
      
      // When the event is bound and polling starts in IE 6/7, create a hidden
      // Iframe for history handling.
      self.start = function(){
        if ( !iframe ) {
          iframe_src = $.fn[ str_hashchange ].src;
          iframe_src = iframe_src && iframe_src + get_fragment();
          
          // Create hidden Iframe. Attempt to make Iframe as hidden as possible
          // by using techniques from http://www.paciellogroup.com/blog/?p=604.
          iframe = $('<iframe tabindex="-1" title="empty"/>').hide()
            
            // When Iframe has completely loaded, initialize the history and
            // start polling.
            .one( 'load', function(){
              iframe_src || history_set( get_fragment() );
              poll();
            })
            
            // Load Iframe src if specified, otherwise nothing.
            .attr( 'src', iframe_src || 'javascript:0' )
            
            // Append Iframe after the end of the body to prevent unnecessary
            // initial page scrolling (yes, this works).
            .insertAfter( 'body' )[0].contentWindow;
          
          // Whenever `document.title` changes, update the Iframe's title to
          // prettify the back/next history menu entries. Since IE sometimes
          // errors with "Unspecified error" the very first time this is set
          // (yes, very useful) wrap this with a try/catch block.
          doc.onpropertychange = function(){
            try {
              if ( event.propertyName === 'title' ) {
                iframe.document.title = doc.title;
              }
            } catch(e) {}
          };
          
        }
      };
      
      // Override the "stop" method since an IE6/7 Iframe was created. Even
      // if there are no longer any bound event handlers, the polling loop
      // is still necessary for back/next to work at all!
      self.stop = fn_retval;
      
      // Get history by looking at the hidden Iframe's location.hash.
      history_get = function() {
        return get_fragment( iframe.location.href );
      };
      
      // Set a new history item by opening and then closing the Iframe
      // document, *then* setting its location.hash. If document.domain has
      // been set, update that as well.
      history_set = function( hash, history_hash ) {
        var iframe_doc = iframe.document,
          domain = $.fn[ str_hashchange ].domain;
        
        if ( hash !== history_hash ) {
          // Update Iframe with any initial `document.title` that might be set.
          iframe_doc.title = doc.title;
          
          // Opening the Iframe's document after it has been closed is what
          // actually adds a history entry.
          iframe_doc.open();
          
          // Set document.domain for the Iframe document as well, if necessary.
          domain && iframe_doc.write( '<script>document.domain="' + domain + '"</script>' );
          
          iframe_doc.close();
          
          // Update the Iframe's hash, for great justice.
          iframe.location.hash = hash;
        }
      };
      
    })();
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // ^^^^^^^^^^^^^^^^^^^ REMOVE IF NOT SUPPORTING IE6/7/8 ^^^^^^^^^^^^^^^^^^^
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    
    return self;
  })();
  
})(jQuery,this);

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/lib/jquery.mousewheel.min.js */
/* Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 *
 * Requires: 1.2.2+
 */
(function(c){var a=["DOMMouseScroll","mousewheel"];c.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var d=a.length;d;){this.addEventListener(a[--d],b,false)}}else{this.onmousewheel=b}},teardown:function(){if(this.removeEventListener){for(var d=a.length;d;){this.removeEventListener(a[--d],b,false)}}else{this.onmousewheel=null}}};c.fn.extend({mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")},unmousewheel:function(d){return this.unbind("mousewheel",d)}});function b(i){var g=i||window.event,f=[].slice.call(arguments,1),j=0,h=true,e=0,d=0;i=c.event.fix(g);i.type="mousewheel";if(i.wheelDelta){j=i.wheelDelta/120}if(i.detail){j=-i.detail/3}d=j;if(g.axis!==undefined&&g.axis===g.HORIZONTAL_AXIS){d=0;e=-1*j}if(g.wheelDeltaY!==undefined){d=g.wheelDeltaY/120}if(g.wheelDeltaX!==undefined){e=-1*g.wheelDeltaX/120}f.unshift(i,j,e,d);return c.event.handle.apply(this,f)}})(jQuery);

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/lib/jquery.tools.min.js */
/*
 * jQuery Tools 1.2.5 - The missing UI library for the Web
 * 
 * [tooltip, tooltip.slide]
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 * File generated: Mon Feb 07 12:42:06 GMT 2011
 */
(function(f){function p(a,b,c){var h=c.relative?a.position().top:a.offset().top,d=c.relative?a.position().left:a.offset().left,i=c.position[0];h-=b.outerHeight()-c.offset[0];d+=a.outerWidth()+c.offset[1];if(/iPad/i.test(navigator.userAgent))h-=f(window).scrollTop();var j=b.outerHeight()+a.outerHeight();if(i=="center")h+=j/2;if(i=="bottom")h+=j;i=c.position[1];a=b.outerWidth()+a.outerWidth();if(i=="center")d-=a/2;if(i=="left")d-=a;return{top:h,left:d}}function u(a,b){var c=this,h=a.add(c),d,i=0,j=
0,m=a.attr("title"),q=a.attr("data-tooltip"),r=o[b.effect],l,s=a.is(":input"),v=s&&a.is(":checkbox, :radio, select, :button, :submit"),t=a.attr("type"),k=b.events[t]||b.events[s?v?"widget":"input":"def"];if(!r)throw'Nonexistent effect "'+b.effect+'"';k=k.split(/,\s*/);if(k.length!=2)throw"Tooltip: bad events configuration for "+t;a.bind(k[0],function(e){clearTimeout(i);if(b.predelay)j=setTimeout(function(){c.show(e)},b.predelay);else c.show(e)}).bind(k[1],function(e){clearTimeout(j);if(b.delay)i=
setTimeout(function(){c.hide(e)},b.delay);else c.hide(e)});if(m&&b.cancelDefault){a.removeAttr("title");a.data("title",m)}f.extend(c,{show:function(e){if(!d){if(q)d=f(q);else if(b.tip)d=f(b.tip).eq(0);else if(m)d=f(b.layout).addClass(b.tipClass).appendTo(document.body).hide().append(m);else{d=a.next();d.length||(d=a.parent().next())}if(!d.length)throw"Cannot find tooltip for "+a;}if(c.isShown())return c;d.stop(true,true);var g=p(a,d,b);b.tip&&d.html(a.data("title"));e=e||f.Event();e.type="onBeforeShow";
h.trigger(e,[g]);if(e.isDefaultPrevented())return c;g=p(a,d,b);d.css({position:"absolute",top:g.top,left:g.left});l=true;r[0].call(c,function(){e.type="onShow";l="full";h.trigger(e)});g=b.events.tooltip.split(/,\s*/);if(!d.data("__set")){d.bind(g[0],function(){clearTimeout(i);clearTimeout(j)});g[1]&&!a.is("input:not(:checkbox, :radio), textarea")&&d.bind(g[1],function(n){n.relatedTarget!=a[0]&&a.trigger(k[1].split(" ")[0])});d.data("__set",true)}return c},hide:function(e){if(!d||!c.isShown())return c;
e=e||f.Event();e.type="onBeforeHide";h.trigger(e);if(!e.isDefaultPrevented()){l=false;o[b.effect][1].call(c,function(){e.type="onHide";h.trigger(e)});return c}},isShown:function(e){return e?l=="full":l},getConf:function(){return b},getTip:function(){return d},getTrigger:function(){return a}});f.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(e,g){f.isFunction(b[g])&&f(c).bind(g,b[g]);c[g]=function(n){n&&f(c).bind(g,n);return c}})}f.tools=f.tools||{version:"1.2.5"};f.tools.tooltip=
{conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:["top","center"],offset:[0,0],relative:false,cancelDefault:true,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,b,c){o[a]=[b,c]}};var o={toggle:[function(a){var b=this.getConf(),c=this.getTip();b=b.opacity;b<1&&c.css({opacity:b});c.show();a.call()},function(a){this.getTip().hide();
a.call()}],fade:[function(a){var b=this.getConf();this.getTip().fadeTo(b.fadeInSpeed,b.opacity,a)},function(a){this.getTip().fadeOut(this.getConf().fadeOutSpeed,a)}]};f.fn.tooltip=function(a){var b=this.data("tooltip");if(b)return b;a=f.extend(true,{},f.tools.tooltip.conf,a);if(typeof a.position=="string")a.position=a.position.split(/,?\s/);this.each(function(){b=new u(f(this),a);f(this).data("tooltip",b)});return a.api?b:this}})(jQuery);
(function(d){var i=d.tools.tooltip;d.extend(i.conf,{direction:"up",bounce:false,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!d.browser.msie});var e={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};i.addEffect("slide",function(g){var a=this.getConf(),f=this.getTip(),b=a.slideFade?{opacity:a.opacity}:{},c=e[a.direction]||e.up;b[c[1]]=c[0]+"="+a.slideOffset;a.slideFade&&f.css({opacity:0});f.show().animate(b,a.slideInSpeed,g)},function(g){var a=this.getConf(),f=a.slideOffset,
b=a.slideFade?{opacity:0}:{},c=e[a.direction]||e.up,h=""+c[0];if(a.bounce)h=h=="+"?"-":"+";b[c[1]]=h+"="+f;this.getTip().animate(b,a.slideOutSpeed,function(){d(this).hide();g.call()})})})(jQuery);


/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/lib/jquery.touchswipe.js */
/*
 * touchSwipe - jQuery Plugin
 * http://plugins.jquery.com/project/touchSwipe
 * http://labs.skinkers.com/touchSwipe/
 *
 * Copyright (c) 2010 Matt Bryson (www.skinkers.com)
 * Licensed under the GNU GPL license
 *
 * $version: 1.2.2
 *
 * Changelog
 * $Date: 2010-12-12 (Wed, 12 Dec 2010) $
 * $version: 1.0.0 
 * $version: 1.0.1 - removed multibyte comments
 *
 * $Date: 2011-21-02 (Mon, 21 Feb 2011) $
 * $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
 *					- changed handler signatures so one handler can be used for multiple events
 * $Date: 2011-23-02 (Wed, 23 Feb 2011) $
 * $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
 *					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
 * $version: 1.2.1 	- removed console log!
 *
 * $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods. 
 *
 * A jQuery plugin to capture left, right, up and down swipes on touch devices.
 * You can capture 2 finger or 1 finger swipes, set the threshold and define either a catch all handler, or individual direction handlers.
 * Options:
 * 		swipe 		Function 	A catch all handler that is triggered for all swipe directions. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 * 		swipeLeft	Function 	A handler that is triggered for "left" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 * 		swipeRight	Function 	A handler that is triggered for "right" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 * 		swipeUp		Function 	A handler that is triggered for "up" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 * 		swipeDown	Function 	A handler that is triggered for "down" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 *		swipeStatus Function 	A handler triggered for every phase of the swipe. Handler is passed 4 arguments: event : The original event object, phase:The current swipe face, either "start�, "move�, "end� or "cancel�. direction : The swipe direction, either "up�, "down�, "left " or "right�.distance : The distance of the swipe.
 *		click		Function	A handler triggered when a user just clicks on the item, rather than swipes it. If they do not move, click is triggered, if they do move, it is not.
 *
 * 		fingers 	int 		Default 1. 	The number of fingers to trigger the swipe, 1 or 2.
 * 		threshold 	int  		Default 75.	The number of pixels that the user must move their finger by before it is considered a swipe.
 *		triggerOnTouchEnd Boolean Default true If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
 *		allowPageScroll String Default "auto". How the browser handles page scrolls when the user is swiping on a touchSwipe object. 
 *										"auto" : all undefined swipes will cause the page to scroll in that direction.
 *										"none" : the page will not scroll when user swipes.
 *										"horizontal" : will force page to scroll on horizontal swipes.
 *										"vertical" : will force page to scroll on vertical swipes.
 *
 * This jQuery plugin will only run on devices running Mobile Webkit based browsers (iOS 2.0+, android 2.2+)
 */
(function($) 
{
	$.fn.swipe = function(options) 
	{
		if (!this) return false;
		
		// Default thresholds & swipe functions
		var defaults = {
					
			fingers 		: 1,								// int - The number of fingers to trigger the swipe, 1 or 2. Default is 1.
			threshold 		: 75,								// int - The number of pixels that the user must move their finger by before it is considered a swipe. Default is 75.
			
			swipe 			: null,		// Function - A catch all handler that is triggered for all swipe directions. Accepts 2 arguments, the original event object and the direction of the swipe : "left", "right", "up", "down".
			swipeLeft		: null,		// Function - A handler that is triggered for "left" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeRight		: null,		// Function - A handler that is triggered for "right" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeUp			: null,		// Function - A handler that is triggered for "up" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeDown		: null,		// Function - A handler that is triggered for "down" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeStatus		: null,		// Function - A handler triggered for every phase of the swipe. Handler is passed 4 arguments: event : The original event object, phase:The current swipe face, either "start�, "move�, "end� or "cancel�. direction : The swipe direction, either "up�, "down�, "left " or "right�.distance : The distance of the swipe.
			click			: null,		// Function	- A handler triggered when a user just clicks on the item, rather than swipes it. If they do not move, click is triggered, if they do move, it is not.
			
			triggerOnTouchEnd : true,	// Boolean, if true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
			allowPageScroll : "auto" 	/* How the browser handles page scrolls when the user is swiping on a touchSwipe object. 
											"auto" : all undefined swipes will cause the page to scroll in that direction.
 											"none" : the page will not scroll when user swipes.
 											"horizontal" : will force page to scroll on horizontal swipes.
 											"vertical" : will force page to scroll on vertical swipes.
										*/
		};
		
		
		//Constants
		var LEFT = "left";
		var RIGHT = "right";
		var UP = "up";
		var DOWN = "down";
		var NONE = "none";
		var HORIZONTAL = "horizontal";
		var VERTICAL = "vertical";
		var AUTO = "auto";
		
		var PHASE_START="start";
		var PHASE_MOVE="move";
		var PHASE_END="end";
		var PHASE_CANCEL="cancel";
		
		
		
		var phase="start";
		
		if (options.allowPageScroll==undefined && (options.swipe!=undefined || options.swipeStatus!=undefined))
			options.allowPageScroll=NONE;
		
		if (options)
			$.extend(defaults, options);
		
		
		/**
		 * Setup each object to detect swipe gestures
		 */
		return this.each(function() 
		{
			var $this = $(this);
			
			var triggerElementID = null; 	// this variable is used to identity the triggering element
			var fingerCount = 0;			// the current number of fingers being used.	
			
			//track mouse points / delta
			var start={x:0, y:0};
			var end={x:0, y:0};
			var delta={x:0, y:0};
			
			
			/**
			* Event handler for a touch start event. 
			* Stops the default click event from triggering and stores where we touched
			*/
			function touchStart(event) 
			{
				phase = PHASE_START;
		
				// get the total number of fingers touching the screen
				fingerCount = event.touches.length;
				
				//clear vars..
				distance=0;
				direction=null;
				
				// check the number of fingers is what we are looking for
				if ( fingerCount == defaults.fingers ) 
				{
					// get the coordinates of the touch
					start.x = end.x = event.touches[0].pageX;
					start.y = end.y = event.touches[0].pageY;
					
					if (defaults.swipeStatus)
						triggerHandler(event, phase);
				} 
				else 
				{
					//touch with more/less than the fingers we are looking for
					touchCancel(event);
				}
			}

			/**
			* Event handler for a touch move event. 
			* If we change fingers during move, then cancel the event
			*/
			function touchMove(event) 
			{
				if (phase == PHASE_END || phase == PHASE_CANCEL)
					return;
				
				end.x = event.touches[0].pageX;
				end.y = event.touches[0].pageY;
					
				direction = caluculateDirection();
				fingerCount = event.touches.length;
				
				phase = PHASE_MOVE
				
				//Check if we need to prevent default evnet (page scroll) or not
				validateDefaultEvent(event, direction);
		
				if ( fingerCount == defaults.fingers ) 
				{
					distance = caluculateDistance();
					
					if (defaults.swipeStatus)
						triggerHandler(event, phase, direction, distance);
					
					//If we trigger whilst dragging, not on touch end, then calculate now...
					if (!defaults.triggerOnTouchEnd)
					{
						// if the user swiped more than the minimum length, perform the appropriate action
						if ( distance >= defaults.threshold ) 
						{
							phase = PHASE_END;
							triggerHandler(event, phase);
							touchCancel(event); // reset the variables
						}
					}
				} 
				else 
				{
					phase = PHASE_CANCEL;
					triggerHandler(event, phase); 
					touchCancel(event);
				}
			}
			
			/**
			* Event handler for a touch end event. 
			* Calculate the direction and trigger events
			*/
			function touchEnd(event) 
			{
				event.preventDefault();
				
				distance = caluculateDistance();
				direction = caluculateDirection();
						
				if (defaults.triggerOnTouchEnd)
				{
					phase = PHASE_END;
					// check to see if more than one finger was used and that there is an ending coordinate
					if ( fingerCount == defaults.fingers && end.x != 0 ) 
					{
						// if the user swiped more than the minimum length, perform the appropriate action
						if ( distance >= defaults.threshold ) 
						{
							triggerHandler(event, phase);
							touchCancel(event); // reset the variables
						} 
						else 
						{
							phase = PHASE_CANCEL;
							triggerHandler(event, phase); 
							touchCancel(event);
						}	
					} 
					else 
					{
						phase = PHASE_CANCEL;
						triggerHandler(event, phase); 
						touchCancel(event);
					}
				}
				else if (phase == PHASE_MOVE)
				{
					phase = PHASE_CANCEL;
					triggerHandler(event, phase); 
					touchCancel(event);
				}
			}
			
			/**
			* Event handler for a touch cancel event. 
			* Clears current vars
			*/
			function touchCancel(event) 
			{
				// reset the variables back to default values
				fingerCount = 0;
				
				start.x = 0;
				start.y = 0;
				end.x = 0;
				end.y = 0;
				delta.x = 0;
				delta.y = 0;
			}
			
			
			/**
			* Trigger the relevant event handler
			* The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
			*/
			function triggerHandler(event, phase) 
			{
				//update status
				if (defaults.swipeStatus)
					defaults.swipeStatus.call($this,event, phase, direction || null, distance || 0);
				
				
				if (phase == PHASE_CANCEL)
				{
					if (defaults.click && fingerCount==1 && (isNaN(distance) || distance==0))
						defaults.click.call($this,event, event.target);
				}
				
				if (phase == PHASE_END)
				{
					//trigger catch all event handler
					if (defaults.swipe)
				{
						
						defaults.swipe.call($this,event, direction, distance);
						
				}
					//trigger direction specific event handlers	
					switch(direction)
					{
						case LEFT :
							if (defaults.swipeLeft)
								defaults.swipeLeft.call($this,event, direction, distance);
							break;
						
						case RIGHT :
							if (defaults.swipeRight)
								defaults.swipeRight.call($this,event, direction, distance);
							break;

						case UP :
							if (defaults.swipeUp)
								defaults.swipeUp.call($this,event, direction, distance);
							break;
						
						case DOWN :	
							if (defaults.swipeDown)
								defaults.swipeDown.call($this,event, direction, distance);
							break;
					}
				}
			}
			
			
			/**
			 * Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
			 * This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
			 */
			function validateDefaultEvent(event, direction)
			{
				if( defaults.allowPageScroll==NONE )
				{
					event.preventDefault();
				}
				else 
				{
					var auto=defaults.allowPageScroll==AUTO;
					
					switch(direction)
					{
						case LEFT :
							if ( (defaults.swipeLeft && auto) || (!auto && defaults.allowPageScroll!=HORIZONTAL))
								event.preventDefault();
							break;
						
						case RIGHT :
							if ( (defaults.swipeRight && auto) || (!auto && defaults.allowPageScroll!=HORIZONTAL))
								event.preventDefault();
							break;

						case UP :
							if ( (defaults.swipeUp && auto) || (!auto && defaults.allowPageScroll!=VERTICAL))
								event.preventDefault();
							break;
						
						case DOWN :	
							if ( (defaults.swipeDown && auto) || (!auto && defaults.allowPageScroll!=VERTICAL))
								event.preventDefault();
							break;
					}
				}
				
			}
			
			
			
			/**
			* Calcualte the length / distance of the swipe
			*/
			function caluculateDistance()
			{
				return Math.round(Math.sqrt(Math.pow(end.x - start.x,2) + Math.pow(end.y - start.y,2)));
			}
			
			/**
			* Calcualte the angle of the swipe
			*/
			function caluculateAngle() 
			{
				var X = start.x-end.x;
				var Y = end.y-start.y;
				var r = Math.atan2(Y,X); //radians
				var angle = Math.round(r*180/Math.PI); //degrees
				
				//ensure value is positive
				if (angle < 0) 
					angle = 360 - Math.abs(angle);
					
				return angle;
			}
			
			/**
			* Calcualte the direction of the swipe
			* This will also call caluculateAngle to get the latest angle of swipe
			*/
			function caluculateDirection() 
			{
				var angle = caluculateAngle();
				
				if ( (angle <= 45) && (angle >= 0) ) 
					return LEFT;
				
				else if ( (angle <= 360) && (angle >= 315) )
					return LEFT;
				
				else if ( (angle >= 135) && (angle <= 225) )
					return RIGHT;
				
				else if ( (angle > 45) && (angle < 135) )
					return DOWN;
				
				else
					return UP;
			}
			
			

			
			
			
			
			// Add gestures to all swipable areas
			this.addEventListener("touchstart", touchStart, false);
			this.addEventListener("touchmove", touchMove, false);
			this.addEventListener("touchend", touchEnd, false);
			this.addEventListener("touchcancel", touchCancel, false);

				
		});
	};
	
	
	
	
})(jQuery);

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/lib/jscrollpane.js */
/*!
 * jScrollPane - v2.0.0beta11 - 2011-07-04
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */

// Script: jScrollPane - cross browser customisable scrollbars
//
// *Version: 2.0.0beta11, Last updated: 2011-07-04*
//
// Project Home - http://jscrollpane.kelvinluck.com/
// GitHub       - http://github.com/vitch/jScrollPane
// Source       - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.js
// (Minified)   - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.min.js
//
// About: License
//
// Copyright (c) 2011 Kelvin Luck
// Dual licensed under the MIT or GPL Version 2 licenses.
// http://jscrollpane.kelvinluck.com/MIT-LICENSE.txt
// http://jscrollpane.kelvinluck.com/GPL-LICENSE.txt
//
// About: Examples
//
// All examples and demos are available through the jScrollPane example site at:
// http://jscrollpane.kelvinluck.com/
//
// About: Support and Testing
//
// This plugin is tested on the browsers below and has been found to work reliably on them. If you run
// into a problem on one of the supported browsers then please visit the support section on the jScrollPane
// website (http://jscrollpane.kelvinluck.com/) for more information on getting support. You are also
// welcome to fork the project on GitHub if you can contribute a fix for a given issue. 
//
// jQuery Versions - tested in 1.4.2+ - reported to work in 1.3.x
// Browsers Tested - Firefox 3.6.8, Safari 5, Opera 10.6, Chrome 5.0, IE 6, 7, 8
//
// About: Release History
//
// 2.0.0beta11 - (in progress) 
// 2.0.0beta10 - (2011-04-17) cleaner required size calculation, improved keyboard support, stickToBottom/Left, other small fixes
// 2.0.0beta9 - (2011-01-31) new API methods, bug fixes and correct keyboard support for FF/OSX
// 2.0.0beta8 - (2011-01-29) touchscreen support, improved keyboard support
// 2.0.0beta7 - (2011-01-23) scroll speed consistent (thanks Aivo Paas)
// 2.0.0beta6 - (2010-12-07) scrollToElement horizontal support
// 2.0.0beta5 - (2010-10-18) jQuery 1.4.3 support, various bug fixes
// 2.0.0beta4 - (2010-09-17) clickOnTrack support, bug fixes
// 2.0.0beta3 - (2010-08-27) Horizontal mousewheel, mwheelIntent, keyboard support, bug fixes
// 2.0.0beta2 - (2010-08-21) Bug fixes
// 2.0.0beta1 - (2010-08-17) Rewrite to follow modern best practices and enable horizontal scrolling, initially hidden
//							 elements and dynamically sized elements.
// 1.x - (2006-12-31 - 2010-07-31) Initial version, hosted at googlecode, deprecated

(function($,window,undefined){

	$.fn.jScrollPane = function(settings)
	{
		// JScrollPane "class" - public methods are available through $('selector').data('jsp')
		function JScrollPane(elem, s)
		{
			var settings, jsp = this, pane, paneWidth, paneHeight, container, contentWidth, contentHeight,
				percentInViewH, percentInViewV, isScrollableV, isScrollableH, verticalDrag, dragMaxY,
				verticalDragPosition, horizontalDrag, dragMaxX, horizontalDragPosition,
				verticalBar, verticalTrack, scrollbarWidth, verticalTrackHeight, verticalDragHeight, arrowUp, arrowDown,
				horizontalBar, horizontalTrack, horizontalTrackWidth, horizontalDragWidth, arrowLeft, arrowRight,
				reinitialiseInterval, originalPadding, originalPaddingTotalWidth, previousContentWidth,
				wasAtTop = true, wasAtLeft = true, wasAtBottom = false, wasAtRight = false,
				originalElement = elem.clone(false, false).empty(),
				mwEvent = $.fn.mwheelIntent ? 'mwheelIntent.jsp' : 'mousewheel.jsp';

			originalPadding = elem.css('paddingTop') + ' ' +
								elem.css('paddingRight') + ' ' +
								elem.css('paddingBottom') + ' ' +
								elem.css('paddingLeft');
			originalPaddingTotalWidth = (parseInt(elem.css('paddingLeft'), 10) || 0) +
										(parseInt(elem.css('paddingRight'), 10) || 0);

			function initialise(s)
			{

				var /*firstChild, lastChild, */isMaintainingPositon, lastContentX, lastContentY,
						hasContainingSpaceChanged, originalScrollTop, originalScrollLeft,
						maintainAtBottom = false, maintainAtRight = false;

				settings = s;

				if (pane === undefined) {
					originalScrollTop = elem.scrollTop();
					originalScrollLeft = elem.scrollLeft();

					elem.css(
						{
							overflow: 'hidden',
							padding: 0
						}
					);
					// TODO: Deal with where width/ height is 0 as it probably means the element is hidden and we should
					// come back to it later and check once it is unhidden...
					paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
					paneHeight = elem.innerHeight();

					elem.width(paneWidth);
					
					pane = $('<div class="jspPane" />').css('padding', originalPadding).append(elem.children());
					container = $('<div class="jspContainer" />')
						.css({
							'width': paneWidth + 'px',
							'height': paneHeight + 'px'
						}
					).append(pane).appendTo(elem);

					/*
					// Move any margins from the first and last children up to the container so they can still
					// collapse with neighbouring elements as they would before jScrollPane 
					firstChild = pane.find(':first-child');
					lastChild = pane.find(':last-child');
					elem.css(
						{
							'margin-top': firstChild.css('margin-top'),
							'margin-bottom': lastChild.css('margin-bottom')
						}
					);
					firstChild.css('margin-top', 0);
					lastChild.css('margin-bottom', 0);
					*/
				} else {
					elem.css('width', '');

					maintainAtBottom = settings.stickToBottom && isCloseToBottom();
					maintainAtRight  = settings.stickToRight  && isCloseToRight();

					hasContainingSpaceChanged = elem.innerWidth() + originalPaddingTotalWidth != paneWidth || elem.outerHeight() != paneHeight;

					if (hasContainingSpaceChanged) {
						paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
						paneHeight = elem.innerHeight();
						container.css({
							width: paneWidth + 'px',
							height: paneHeight + 'px'
						});
					}

					// If nothing changed since last check...
					if (!hasContainingSpaceChanged && previousContentWidth == contentWidth && pane.outerHeight() == contentHeight) {
						elem.width(paneWidth);
						return;
					}
					previousContentWidth = contentWidth;
					
					pane.css('width', '');
					elem.width(paneWidth);

					container.find('>.jspVerticalBar,>.jspHorizontalBar').remove().end();
				}

				pane.css('overflow', 'auto');
				if (s.contentWidth) {
					contentWidth = s.contentWidth;
				} else {
					contentWidth = pane[0].scrollWidth;
				}
				contentHeight = pane[0].scrollHeight;
				pane.css('overflow', '');

				percentInViewH = contentWidth / paneWidth;
				percentInViewV = contentHeight / paneHeight;
				isScrollableV = percentInViewV > 1;

				isScrollableH = percentInViewH > 1;

				//console.log(paneWidth, paneHeight, contentWidth, contentHeight, percentInViewH, percentInViewV, isScrollableH, isScrollableV);

				if (!(isScrollableH || isScrollableV)) {
					elem.removeClass('jspScrollable');
					pane.css({
						top: 0,
						width: container.width() - originalPaddingTotalWidth
					});
					removeMousewheel();
					removeFocusHandler();
					removeKeyboardNav();
					removeClickOnTrack();
					unhijackInternalLinks();
				} else {
					elem.addClass('jspScrollable');

					isMaintainingPositon = settings.maintainPosition && (verticalDragPosition || horizontalDragPosition);
					if (isMaintainingPositon) {
						lastContentX = contentPositionX();
						lastContentY = contentPositionY();
					}

					initialiseVerticalScroll();
					initialiseHorizontalScroll();
					resizeScrollbars();

					if (isMaintainingPositon) {
						scrollToX(maintainAtRight  ? (contentWidth  - paneWidth ) : lastContentX, false);
						scrollToY(maintainAtBottom ? (contentHeight - paneHeight) : lastContentY, false);
					}

					initFocusHandler();
					initMousewheel();
					initTouch();
					
					if (settings.enableKeyboardNavigation) {
						initKeyboardNav();
					}
					if (settings.clickOnTrack) {
						initClickOnTrack();
					}
					
					observeHash();
					if (settings.hijackInternalLinks) {
						hijackInternalLinks();
					}
				}

				if (settings.autoReinitialise && !reinitialiseInterval) {
					reinitialiseInterval = setInterval(
						function()
						{
							initialise(settings);
						},
						settings.autoReinitialiseDelay
					);
				} else if (!settings.autoReinitialise && reinitialiseInterval) {
					clearInterval(reinitialiseInterval);
				}

				originalScrollTop && elem.scrollTop(0) && scrollToY(originalScrollTop, false);
				originalScrollLeft && elem.scrollLeft(0) && scrollToX(originalScrollLeft, false);

				elem.trigger('jsp-initialised', [isScrollableH || isScrollableV]);
			}

			function initialiseVerticalScroll()
			{
				if (isScrollableV) {

					container.append(
						$('<div class="jspVerticalBar" />').append(
							$('<div class="jspCap jspCapTop" />'),
							$('<div class="jspTrack" />').append(
								$('<div class="jspDrag" />').append(
									$('<div class="jspDragTop" />'),
									$('<div class="jspDragBottom" />')
								)
							),
							$('<div class="jspCap jspCapBottom" />')
						)
					);

					verticalBar = container.find('>.jspVerticalBar');
					verticalTrack = verticalBar.find('>.jspTrack');
					verticalDrag = verticalTrack.find('>.jspDrag');

					if (settings.showArrows) {
						arrowUp = $('<a class="jspArrow jspArrowUp" />').bind(
							'mousedown.jsp', getArrowScroll(0, -1)
						).bind('click.jsp', nil);
						arrowDown = $('<a class="jspArrow jspArrowDown" />').bind(
							'mousedown.jsp', getArrowScroll(0, 1)
						).bind('click.jsp', nil);
						if (settings.arrowScrollOnHover) {
							arrowUp.bind('mouseover.jsp', getArrowScroll(0, -1, arrowUp));
							arrowDown.bind('mouseover.jsp', getArrowScroll(0, 1, arrowDown));
						}

						appendArrows(verticalTrack, settings.verticalArrowPositions, arrowUp, arrowDown);
					}

					verticalTrackHeight = paneHeight;
					container.find('>.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow').each(
						function()
						{
							verticalTrackHeight -= $(this).outerHeight();
						}
					);


					verticalDrag.hover(
						function()
						{
							verticalDrag.addClass('jspHover');
						},
						function()
						{
							verticalDrag.removeClass('jspHover');
						}
					).bind(
						'mousedown.jsp',
						function(e)
						{
							// Stop IE from allowing text selection
							$('html').bind('dragstart.jsp selectstart.jsp', nil);

							verticalDrag.addClass('jspActive');

							var startY = e.pageY - verticalDrag.position().top;

							$('html').bind(
								'mousemove.jsp',
								function(e)
								{
									positionDragY(e.pageY - startY, false);
								}
							).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
							return false;
						}
					);
					sizeVerticalScrollbar();
				}
			}

			function sizeVerticalScrollbar()
			{
				verticalTrack.height(verticalTrackHeight + 'px');
				verticalDragPosition = 0;
				scrollbarWidth = settings.verticalGutter + verticalTrack.outerWidth();

				// Make the pane thinner to allow for the vertical scrollbar
				pane.width(paneWidth - scrollbarWidth - originalPaddingTotalWidth);

				// Add margin to the left of the pane if scrollbars are on that side (to position
				// the scrollbar on the left or right set it's left or right property in CSS)
				try {
					if (verticalBar.position().left === 0) {
						pane.css('margin-left', scrollbarWidth + 'px');
					}
				} catch (err) {
				}
			}

			function initialiseHorizontalScroll()
			{
				if (isScrollableH) {

					container.append(
						$('<div class="jspHorizontalBar" />').append(
							$('<div class="jspCap jspCapLeft" />'),
							$('<div class="jspTrack" />').append(
								$('<div class="jspDrag" />').append(
									$('<div class="jspDragLeft" />'),
									$('<div class="jspDragRight" />')
								)
							),
							$('<div class="jspCap jspCapRight" />')
						)
					);

					horizontalBar = container.find('>.jspHorizontalBar');
					horizontalTrack = horizontalBar.find('>.jspTrack');
					horizontalDrag = horizontalTrack.find('>.jspDrag');

					if (settings.showArrows) {
						arrowLeft = $('<a class="jspArrow jspArrowLeft" />').bind(
							'mousedown.jsp', getArrowScroll(-1, 0)
						).bind('click.jsp', nil);
						arrowRight = $('<a class="jspArrow jspArrowRight" />').bind(
							'mousedown.jsp', getArrowScroll(1, 0)
						).bind('click.jsp', nil);
						if (settings.arrowScrollOnHover) {
							arrowLeft.bind('mouseover.jsp', getArrowScroll(-1, 0, arrowLeft));
							arrowRight.bind('mouseover.jsp', getArrowScroll(1, 0, arrowRight));
						}
						appendArrows(horizontalTrack, settings.horizontalArrowPositions, arrowLeft, arrowRight);
					}

					horizontalDrag.hover(
						function()
						{
							horizontalDrag.addClass('jspHover');
						},
						function()
						{
							horizontalDrag.removeClass('jspHover');
						}
					).bind(
						'mousedown.jsp',
						function(e)
						{
							// Stop IE from allowing text selection
							$('html').bind('dragstart.jsp selectstart.jsp', nil);

							horizontalDrag.addClass('jspActive');

							var startX = e.pageX - horizontalDrag.position().left;

							$('html').bind(
								'mousemove.jsp',
								function(e)
								{
									positionDragX(e.pageX - startX, false);
								}
							).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
							return false;
						}
					);
					horizontalTrackWidth = container.innerWidth();
					sizeHorizontalScrollbar();
				}
			}

			function sizeHorizontalScrollbar()
			{
				container.find('>.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow').each(
					function()
					{
						horizontalTrackWidth -= $(this).outerWidth();
					}
				);

				horizontalTrack.width(horizontalTrackWidth + 'px');
				horizontalDragPosition = 0;
			}

			function resizeScrollbars()
			{
				if (isScrollableH && isScrollableV) {
					var horizontalTrackHeight = horizontalTrack.outerHeight(),
						verticalTrackWidth = verticalTrack.outerWidth();
					verticalTrackHeight -= horizontalTrackHeight;
					$(horizontalBar).find('>.jspCap:visible,>.jspArrow').each(
						function()
						{
							horizontalTrackWidth += $(this).outerWidth();
						}
					);
					horizontalTrackWidth -= verticalTrackWidth;
					paneHeight -= verticalTrackWidth;
					paneWidth -= horizontalTrackHeight;
					horizontalTrack.parent().append(
						$('<div class="jspCorner" />').css('width', horizontalTrackHeight + 'px')
					);
					sizeVerticalScrollbar();
					sizeHorizontalScrollbar();
				}
				// reflow content
				if (isScrollableH) {
					pane.width((container.outerWidth() - originalPaddingTotalWidth) + 'px');
				}
				contentHeight = pane.outerHeight();
				percentInViewV = contentHeight / paneHeight;

				if (isScrollableH) {
					horizontalDragWidth = Math.ceil(1 / percentInViewH * horizontalTrackWidth);
					if (horizontalDragWidth > settings.horizontalDragMaxWidth) {
						horizontalDragWidth = settings.horizontalDragMaxWidth;
					} else if (horizontalDragWidth < settings.horizontalDragMinWidth) {
						horizontalDragWidth = settings.horizontalDragMinWidth;
					}
					horizontalDrag.width(horizontalDragWidth + 'px');
					dragMaxX = horizontalTrackWidth - horizontalDragWidth;
					_positionDragX(horizontalDragPosition); // To update the state for the arrow buttons
				}
				if (isScrollableV) {
					verticalDragHeight = Math.ceil(1 / percentInViewV * verticalTrackHeight);
					if (verticalDragHeight > settings.verticalDragMaxHeight) {
						verticalDragHeight = settings.verticalDragMaxHeight;
					} else if (verticalDragHeight < settings.verticalDragMinHeight) {
						verticalDragHeight = settings.verticalDragMinHeight;
					}
					verticalDragHeight = 44;
					verticalDrag.height(verticalDragHeight + 'px');
					dragMaxY = verticalTrackHeight - verticalDragHeight;
					_positionDragY(verticalDragPosition); // To update the state for the arrow buttons
				}
			}

			function appendArrows(ele, p, a1, a2)
			{
				var p1 = "before", p2 = "after", aTemp;
				
				// Sniff for mac... Is there a better way to determine whether the arrows would naturally appear
				// at the top or the bottom of the bar?
				if (p == "os") {
					p = /Mac/.test(navigator.platform) ? "after" : "split";
				}
				if (p == p1) {
					p2 = p;
				} else if (p == p2) {
					p1 = p;
					aTemp = a1;
					a1 = a2;
					a2 = aTemp;
				}

				ele[p1](a1)[p2](a2);
			}

			function getArrowScroll(dirX, dirY, ele)
			{
				return function()
				{
					arrowScroll(dirX, dirY, this, ele);
					this.blur();
					return false;
				};
			}

			function arrowScroll(dirX, dirY, arrow, ele)
			{
				arrow = $(arrow).addClass('jspActive');

				var eve,
					scrollTimeout,
					isFirst = true,
					doScroll = function()
					{
						if (dirX !== 0) {
							jsp.scrollByX(dirX * settings.arrowButtonSpeed);
						}
						if (dirY !== 0) {
							jsp.scrollByY(dirY * settings.arrowButtonSpeed);
						}
						scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.arrowRepeatFreq);
						isFirst = false;
					};

				doScroll();

				eve = ele ? 'mouseout.jsp' : 'mouseup.jsp';
				ele = ele || $('html');
				ele.bind(
					eve,
					function()
					{
						arrow.removeClass('jspActive');
						scrollTimeout && clearTimeout(scrollTimeout);
						scrollTimeout = null;
						ele.unbind(eve);
					}
				);
			}

			function initClickOnTrack()
			{
				removeClickOnTrack();
				if (isScrollableV) {
					verticalTrack.bind(
						'mousedown.jsp',
						function(e)
						{
							if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
								var clickedTrack = $(this),
									offset = clickedTrack.offset(),
									direction = e.pageY - offset.top - verticalDragPosition,
									scrollTimeout,
									isFirst = true,
									doScroll = function()
									{
										var offset = clickedTrack.offset(),
											pos = e.pageY - offset.top - verticalDragHeight / 2,
											contentDragY = paneHeight * settings.scrollPagePercent,
											dragY = dragMaxY * contentDragY / (contentHeight - paneHeight);
										if (direction < 0) {
											if (verticalDragPosition - dragY > pos) {
												jsp.scrollByY(-contentDragY);
											} else {
												positionDragY(pos);
											}
										} else if (direction > 0) {
											if (verticalDragPosition + dragY < pos) {
												jsp.scrollByY(contentDragY);
											} else {
												positionDragY(pos);
											}
										} else {
											cancelClick();
											return;
										}
										scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
										isFirst = false;
									},
									cancelClick = function()
									{
										scrollTimeout && clearTimeout(scrollTimeout);
										scrollTimeout = null;
										$(document).unbind('mouseup.jsp', cancelClick);
									};
								doScroll();
								$(document).bind('mouseup.jsp', cancelClick);
								return false;
							}
						}
					);
				}
				
				if (isScrollableH) {
					horizontalTrack.bind(
						'mousedown.jsp',
						function(e)
						{
							if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
								var clickedTrack = $(this),
									offset = clickedTrack.offset(),
									direction = e.pageX - offset.left - horizontalDragPosition,
									scrollTimeout,
									isFirst = true,
									doScroll = function()
									{
										var offset = clickedTrack.offset(),
											pos = e.pageX - offset.left - horizontalDragWidth / 2,
											contentDragX = paneWidth * settings.scrollPagePercent,
											dragX = dragMaxX * contentDragX / (contentWidth - paneWidth);
										if (direction < 0) {
											if (horizontalDragPosition - dragX > pos) {
												jsp.scrollByX(-contentDragX);
											} else {
												positionDragX(pos);
											}
										} else if (direction > 0) {
											if (horizontalDragPosition + dragX < pos) {
												jsp.scrollByX(contentDragX);
											} else {
												positionDragX(pos);
											}
										} else {
											cancelClick();
											return;
										}
										scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
										isFirst = false;
									},
									cancelClick = function()
									{
										scrollTimeout && clearTimeout(scrollTimeout);
										scrollTimeout = null;
										$(document).unbind('mouseup.jsp', cancelClick);
									};
								doScroll();
								$(document).bind('mouseup.jsp', cancelClick);
								return false;
							}
						}
					);
				}
			}

			function removeClickOnTrack()
			{
				if (horizontalTrack) {
					horizontalTrack.unbind('mousedown.jsp');
				}
				if (verticalTrack) {
					verticalTrack.unbind('mousedown.jsp');
				}
			}

			function cancelDrag()
			{
				$('html').unbind('dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp');

				if (verticalDrag) {
					verticalDrag.removeClass('jspActive');
				}
				if (horizontalDrag) {
					horizontalDrag.removeClass('jspActive');
				}
			}

			function positionDragY(destY, animate)
			{
				if (!isScrollableV) {
					return;
				}
				if (destY < 0) {
					destY = 0;
				} else if (destY > dragMaxY) {
					destY = dragMaxY;
				}

				// can't just check if(animate) because false is a valid value that could be passed in...
				if (animate === undefined) {
					animate = settings.animateScroll;
				}
				if (animate) {
					jsp.animate(verticalDrag, 'top', destY,	_positionDragY);
				} else {
					verticalDrag.css('top', destY);
					_positionDragY(destY);
				}

			}

			function _positionDragY(destY)
			{
				if (destY === undefined) {
					destY = verticalDrag.position().top;
				}

				container.scrollTop(0);
				verticalDragPosition = destY;

				var isAtTop = verticalDragPosition === 0,
					isAtBottom = verticalDragPosition == dragMaxY,
					percentScrolled = destY/ dragMaxY,
					destTop = -percentScrolled * (contentHeight - paneHeight);

				if (wasAtTop != isAtTop || wasAtBottom != isAtBottom) {
					wasAtTop = isAtTop;
					wasAtBottom = isAtBottom;
					elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
				}
				
				updateVerticalArrows(isAtTop, isAtBottom);
				pane.css('top', destTop);
				elem.trigger('jsp-scroll-y', [-destTop, isAtTop, isAtBottom]).trigger('scroll');
			}

			function positionDragX(destX, animate)
			{
				if (!isScrollableH) {
					return;
				}
				if (destX < 0) {
					destX = 0;
				} else if (destX > dragMaxX) {
					destX = dragMaxX;
				}

				if (animate === undefined) {
					animate = settings.animateScroll;
				}
				if (animate) {
					jsp.animate(horizontalDrag, 'left', destX,	_positionDragX);
				} else {
					horizontalDrag.css('left', destX);
					_positionDragX(destX);
				}
			}

			function _positionDragX(destX)
			{
				if (destX === undefined) {
					destX = horizontalDrag.position().left;
				}

				container.scrollTop(0);
				horizontalDragPosition = destX;

				var isAtLeft = horizontalDragPosition === 0,
					isAtRight = horizontalDragPosition == dragMaxX,
					percentScrolled = destX / dragMaxX,
					destLeft = -percentScrolled * (contentWidth - paneWidth);

				if (wasAtLeft != isAtLeft || wasAtRight != isAtRight) {
					wasAtLeft = isAtLeft;
					wasAtRight = isAtRight;
					elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
				}
				
				updateHorizontalArrows(isAtLeft, isAtRight);
				pane.css('left', destLeft);
				elem.trigger('jsp-scroll-x', [-destLeft, isAtLeft, isAtRight]).trigger('scroll');
			}

			function updateVerticalArrows(isAtTop, isAtBottom)
			{
				if (settings.showArrows) {
					arrowUp[isAtTop ? 'addClass' : 'removeClass']('jspDisabled');
					arrowDown[isAtBottom ? 'addClass' : 'removeClass']('jspDisabled');
				}
			}

			function updateHorizontalArrows(isAtLeft, isAtRight)
			{
				if (settings.showArrows) {
					arrowLeft[isAtLeft ? 'addClass' : 'removeClass']('jspDisabled');
					arrowRight[isAtRight ? 'addClass' : 'removeClass']('jspDisabled');
				}
			}

			function scrollToY(destY, animate)
			{
				var percentScrolled = destY / (contentHeight - paneHeight);
				positionDragY(percentScrolled * dragMaxY, animate);
			}

			function scrollToX(destX, animate)
			{
				var percentScrolled = destX / (contentWidth - paneWidth);
				positionDragX(percentScrolled * dragMaxX, animate);
			}

			function scrollToElement(ele, stickToTop, animate)
			{
				var e, eleHeight, eleWidth, eleTop = 0, eleLeft = 0, viewportTop, viewportLeft, maxVisibleEleTop, maxVisibleEleLeft, destY, destX;

				// Legal hash values aren't necessarily legal jQuery selectors so we need to catch any
				// errors from the lookup...
				try {
					e = $(ele);
				} catch (err) {
					return;
				}
				eleHeight = e.outerHeight();
				eleWidth= e.outerWidth();

				container.scrollTop(0);
				container.scrollLeft(0);
				
				// loop through parents adding the offset top of any elements that are relatively positioned between
				// the focused element and the jspPane so we can get the true distance from the top
				// of the focused element to the top of the scrollpane...
				while (!e.is('.jspPane')) {
					eleTop += e.position().top;
					eleLeft += e.position().left;
					e = e.offsetParent();
					if (/^body|html$/i.test(e[0].nodeName)) {
						// we ended up too high in the document structure. Quit!
						return;
					}
				}

				viewportTop = contentPositionY();
				maxVisibleEleTop = viewportTop + paneHeight;
				if (eleTop < viewportTop || stickToTop) { // element is above viewport
					destY = eleTop - settings.verticalGutter;
				} else if (eleTop + eleHeight > maxVisibleEleTop) { // element is below viewport
					destY = eleTop - paneHeight + eleHeight + settings.verticalGutter;
				}
				if (destY) {
					scrollToY(destY, animate);
				}
				
				viewportLeft = contentPositionX();
	            maxVisibleEleLeft = viewportLeft + paneWidth;
	            if (eleLeft < viewportLeft || stickToTop) { // element is to the left of viewport
	                destX = eleLeft - settings.horizontalGutter;
	            } else if (eleLeft + eleWidth > maxVisibleEleLeft) { // element is to the right viewport
	                destX = eleLeft - paneWidth + eleWidth + settings.horizontalGutter;
	            }
	            if (destX) {
	                scrollToX(destX, animate);
	            }

			}

			function contentPositionX()
			{
				return -pane.position().left;
			}

			function contentPositionY()
			{
				return -pane.position().top;
			}

			function isCloseToBottom()
			{
				var scrollableHeight = contentHeight - paneHeight;
				return (scrollableHeight > 20) && (scrollableHeight - contentPositionY() < 10);
			}

			function isCloseToRight()
			{
				var scrollableWidth = contentWidth - paneWidth;
				return (scrollableWidth > 20) && (scrollableWidth - contentPositionX() < 10);
			}

			function initMousewheel()
			{
				container.unbind(mwEvent).bind(
					mwEvent,
					function (event, delta, deltaX, deltaY) {
						var dX = horizontalDragPosition, dY = verticalDragPosition;
						jsp.scrollBy(deltaX * settings.mouseWheelSpeed, -deltaY * settings.mouseWheelSpeed, false);
						// return true if there was no movement so rest of screen can scroll
						return dX == horizontalDragPosition && dY == verticalDragPosition;
					}
				);
			}

			function removeMousewheel()
			{
				container.unbind(mwEvent);
			}

			function nil()
			{
				return false;
			}

			function initFocusHandler()
			{
				pane.find(':input,a').unbind('focus.jsp').bind(
					'focus.jsp',
					function(e)
					{
						scrollToElement(e.target, false);
					}
				);
			}

			function removeFocusHandler()
			{
				pane.find(':input,a').unbind('focus.jsp');
			}
			
			function initKeyboardNav()
			{
				var keyDown, elementHasScrolled, validParents = [];
				isScrollableH && validParents.push(horizontalBar[0]);
				isScrollableV && validParents.push(verticalBar[0]);
				
				// IE also focuses elements that don't have tabindex set.
				pane.focus(
					function()
					{
						elem.focus();
					}
				);
				
				elem.attr('tabindex', 0)
					.unbind('keydown.jsp keypress.jsp')
					.bind(
						'keydown.jsp',
						function(e)
						{
							if (e.target !== this && !(validParents.length && $(e.target).closest(validParents).length)){
								return;
							}
							var dX = horizontalDragPosition, dY = verticalDragPosition;
							switch(e.keyCode) {
								case 40: // down
								case 38: // up
								case 34: // page down
								case 32: // space
								case 33: // page up
								case 39: // right
								case 37: // left
									keyDown = e.keyCode;
									keyDownHandler();
									break;
								case 35: // end
									scrollToY(contentHeight - paneHeight);
									keyDown = null;
									break;
								case 36: // home
									scrollToY(0);
									keyDown = null;
									break;
							}

							elementHasScrolled = e.keyCode == keyDown && dX != horizontalDragPosition || dY != verticalDragPosition;
							return !elementHasScrolled;
						}
					).bind(
						'keypress.jsp', // For FF/ OSX so that we can cancel the repeat key presses if the JSP scrolls...
						function(e)
						{
							if (e.keyCode == keyDown) {
								keyDownHandler();
							}
							return !elementHasScrolled;
						}
					);
				
				if (settings.hideFocus) {
					elem.css('outline', 'none');
					if ('hideFocus' in container[0]){
						elem.attr('hideFocus', true);
					}
				} else {
					elem.css('outline', '');
					if ('hideFocus' in container[0]){
						elem.attr('hideFocus', false);
					}
				}
				
				function keyDownHandler()
				{
					var dX = horizontalDragPosition, dY = verticalDragPosition;
					switch(keyDown) {
						case 40: // down
							jsp.scrollByY(settings.keyboardSpeed, false);
							break;
						case 38: // up
							jsp.scrollByY(-settings.keyboardSpeed, false);
							break;
						case 34: // page down
						case 32: // space
							jsp.scrollByY(paneHeight * settings.scrollPagePercent, false);
							break;
						case 33: // page up
							jsp.scrollByY(-paneHeight * settings.scrollPagePercent, false);
							break;
						case 39: // right
							jsp.scrollByX(settings.keyboardSpeed, false);
							break;
						case 37: // left
							jsp.scrollByX(-settings.keyboardSpeed, false);
							break;
					}

					elementHasScrolled = dX != horizontalDragPosition || dY != verticalDragPosition;
					return elementHasScrolled;
				}
			}
			
			function removeKeyboardNav()
			{
				elem.attr('tabindex', '-1')
					.removeAttr('tabindex')
					.unbind('keydown.jsp keypress.jsp');
			}

			function observeHash()
			{
				if (location.hash && location.hash.length > 1) {
					var e,
						retryInt,
						hash = escape(location.hash) // hash must be escaped to prevent XSS
						;
					try {
						e = $(hash);
					} catch (err) {
						return;
					}

					if (e.length && pane.find(hash)) {
						// nasty workaround but it appears to take a little while before the hash has done its thing
						// to the rendered page so we just wait until the container's scrollTop has been messed up.
						if (container.scrollTop() === 0) {
							retryInt = setInterval(
								function()
								{
									if (container.scrollTop() > 0) {
										scrollToElement(hash, true);
										$(document).scrollTop(container.position().top);
										clearInterval(retryInt);
									}
								},
								50
							);
						} else {
							scrollToElement(hash, true);
							$(document).scrollTop(container.position().top);
						}
					}
				}
			}

			function unhijackInternalLinks()
			{
				$('a.jspHijack').unbind('click.jsp-hijack').removeClass('jspHijack');
			}

			function hijackInternalLinks()
			{
				unhijackInternalLinks();
				$('a[href^=#]').addClass('jspHijack').bind(
					'click.jsp-hijack',
					function()
					{
						var uriParts = this.href.split('#'), hash;
						if (uriParts.length > 1) {
							hash = uriParts[1];
							if (hash.length > 0 && pane.find('#' + hash).length > 0) {
								scrollToElement('#' + hash, true);
								// Need to return false otherwise things mess up... Would be nice to maybe also scroll
								// the window to the top of the scrollpane?
								return false;
							}
						}
					}
				);
			}
			
			// Init touch on iPad, iPhone, iPod, Android
			function initTouch()
			{
				var startX,
					startY,
					touchStartX,
					touchStartY,
					moved,
					moving = false;
  
				container.unbind('touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick').bind(
					'touchstart.jsp',
					function(e)
					{
						var touch = e.originalEvent.touches[0];
						startX = contentPositionX();
						startY = contentPositionY();
						touchStartX = touch.pageX;
						touchStartY = touch.pageY;
						moved = false;
						moving = true;
					}
				).bind(
					'touchmove.jsp',
					function(ev)
					{
						if(!moving) {
							return;
						}
						
						var touchPos = ev.originalEvent.touches[0],
							dX = horizontalDragPosition, dY = verticalDragPosition;
						
						jsp.scrollTo(startX + touchStartX - touchPos.pageX, startY + touchStartY - touchPos.pageY);
						
						moved = moved || Math.abs(touchStartX - touchPos.pageX) > 5 || Math.abs(touchStartY - touchPos.pageY) > 5;
						
						// return true if there was no movement so rest of screen can scroll
						return dX == horizontalDragPosition && dY == verticalDragPosition;
					}
				).bind(
					'touchend.jsp',
					function(e)
					{
						moving = false;
						/*if(moved) {
							return false;
						}*/
					}
				).bind(
					'click.jsp-touchclick',
					function(e)
					{
						if(moved) {
							moved = false;
							return false;
						}
					}
				);
			}
			
			function destroy(){
				var currentY = contentPositionY(),
					currentX = contentPositionX();
				elem.removeClass('jspScrollable').unbind('.jsp');
				elem.replaceWith(originalElement.append(pane.children()));
				originalElement.scrollTop(currentY);
				originalElement.scrollLeft(currentX);
			}

			// Public API
			$.extend(
				jsp,
				{
					// Reinitialises the scroll pane (if it's internal dimensions have changed since the last time it
					// was initialised). The settings object which is passed in will override any settings from the
					// previous time it was initialised - if you don't pass any settings then the ones from the previous
					// initialisation will be used.
					reinitialise: function(s)
					{
						s = $.extend({}, settings, s);
						initialise(s);
					},
					// Scrolls the specified element (a jQuery object, DOM node or jQuery selector string) into view so
					// that it can be seen within the viewport. If stickToTop is true then the element will appear at
					// the top of the viewport, if it is false then the viewport will scroll as little as possible to
					// show the element. You can also specify if you want animation to occur. If you don't provide this
					// argument then the animateScroll value from the settings object is used instead.
					scrollToElement: function(ele, stickToTop, animate)
					{
						scrollToElement(ele, stickToTop, animate);
					},
					// Scrolls the pane so that the specified co-ordinates within the content are at the top left
					// of the viewport. animate is optional and if not passed then the value of animateScroll from
					// the settings object this jScrollPane was initialised with is used.
					scrollTo: function(destX, destY, animate)
					{
						scrollToX(destX, animate);
						scrollToY(destY, animate);
					},
					// Scrolls the pane so that the specified co-ordinate within the content is at the left of the
					// viewport. animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					scrollToX: function(destX, animate)
					{
						scrollToX(destX, animate);
					},
					// Scrolls the pane so that the specified co-ordinate within the content is at the top of the
					// viewport. animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					scrollToY: function(destY, animate)
					{
						scrollToY(destY, animate);
					},
					// Scrolls the pane to the specified percentage of its maximum horizontal scroll position. animate
					// is optional and if not passed then the value of animateScroll from the settings object this
					// jScrollPane was initialised with is used.
					scrollToPercentX: function(destPercentX, animate)
					{
						scrollToX(destPercentX * (contentWidth - paneWidth), animate);
					},
					// Scrolls the pane to the specified percentage of its maximum vertical scroll position. animate
					// is optional and if not passed then the value of animateScroll from the settings object this
					// jScrollPane was initialised with is used.
					scrollToPercentY: function(destPercentY, animate)
					{
						scrollToY(destPercentY * (contentHeight - paneHeight), animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollBy: function(deltaX, deltaY, animate)
					{
						jsp.scrollByX(deltaX, animate);
						jsp.scrollByY(deltaY, animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollByX: function(deltaX, animate)
					{
						var destX = contentPositionX() + Math[deltaX<0 ? 'floor' : 'ceil'](deltaX),
							percentScrolled = destX / (contentWidth - paneWidth);
						positionDragX(percentScrolled * dragMaxX, animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollByY: function(deltaY, animate)
					{
						var destY = contentPositionY() + Math[deltaY<0 ? 'floor' : 'ceil'](deltaY),
							percentScrolled = destY / (contentHeight - paneHeight);
						positionDragY(percentScrolled * dragMaxY, animate);
					},
					// Positions the horizontal drag at the specified x position (and updates the viewport to reflect
					// this). animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					positionDragX: function(x, animate)
					{
						positionDragX(x, animate);
					},
					// Positions the vertical drag at the specified y position (and updates the viewport to reflect
					// this). animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					positionDragY: function(y, animate)
					{
						positionDragY(y, animate);
					},
					// This method is called when jScrollPane is trying to animate to a new position. You can override
					// it if you want to provide advanced animation functionality. It is passed the following arguments:
					//  * ele          - the element whose position is being animated
					//  * prop         - the property that is being animated
					//  * value        - the value it's being animated to
					//  * stepCallback - a function that you must execute each time you update the value of the property
					// You can use the default implementation (below) as a starting point for your own implementation.
					animate: function(ele, prop, value, stepCallback)
					{
						var params = {};
						params[prop] = value;
						ele.animate(
							params,
							{
								'duration'	: settings.animateDuration,
								'easing'	: settings.animateEase,
								'queue'		: false,
								'step'		: stepCallback
							}
						);
					},
					// Returns the current x position of the viewport with regards to the content pane.
					getContentPositionX: function()
					{
						return contentPositionX();
					},
					// Returns the current y position of the viewport with regards to the content pane.
					getContentPositionY: function()
					{
						return contentPositionY();
					},
					// Returns the width of the content within the scroll pane.
					getContentWidth: function()
					{
						return contentWidth;
					},
					// Returns the height of the content within the scroll pane.
					getContentHeight: function()
					{
						return contentHeight;
					},
					// Returns the horizontal position of the viewport within the pane content.
					getPercentScrolledX: function()
					{
						return contentPositionX() / (contentWidth - paneWidth);
					},
					// Returns the vertical position of the viewport within the pane content.
					getPercentScrolledY: function()
					{
						return contentPositionY() / (contentHeight - paneHeight);
					},
					// Returns whether or not this scrollpane has a horizontal scrollbar.
					getIsScrollableH: function()
					{
						return isScrollableH;
					},
					// Returns whether or not this scrollpane has a vertical scrollbar.
					getIsScrollableV: function()
					{
						return isScrollableV;
					},
					// Gets a reference to the content pane. It is important that you use this method if you want to
					// edit the content of your jScrollPane as if you access the element directly then you may have some
					// problems (as your original element has had additional elements for the scrollbars etc added into
					// it).
					getContentPane: function()
					{
						return pane;
					},
					// Scrolls this jScrollPane down as far as it can currently scroll. If animate isn't passed then the
					// animateScroll value from settings is used instead.
					scrollToBottom: function(animate)
					{
						positionDragY(dragMaxY, animate);
					},
					// Hijacks the links on the page which link to content inside the scrollpane. If you have changed
					// the content of your page (e.g. via AJAX) and want to make sure any new anchor links to the
					// contents of your scroll pane will work then call this function.
					hijackInternalLinks: function()
					{
						hijackInternalLinks();
					},
					// Removes the jScrollPane and returns the page to the state it was in before jScrollPane was
					// initialised.
					destroy: function()
					{
							destroy();
					}
				}
			);
			
			initialise(s);
		}

		// Pluginifying code...
		settings = $.extend({}, $.fn.jScrollPane.defaults, settings);
		
		// Apply default speed
		$.each(['mouseWheelSpeed', 'arrowButtonSpeed', 'trackClickSpeed', 'keyboardSpeed'], function() {
			settings[this] = settings[this] || settings.speed;
		});

		return this.each(
			function()
			{
				var elem = $(this), jspApi = elem.data('jsp');
				if (jspApi) {
					jspApi.reinitialise(settings);
				} else {
					jspApi = new JScrollPane(elem, settings);
					elem.data('jsp', jspApi);
				}
			}
		);
	};

	$.fn.jScrollPane.defaults = {
		showArrows					: false,
		maintainPosition			: true,
		stickToBottom				: false,
		stickToRight				: false,
		clickOnTrack				: true,
		autoReinitialise			: false,
		autoReinitialiseDelay		: 500,
		verticalDragMinHeight		: 0,
		verticalDragMaxHeight		: 99999,
		horizontalDragMinWidth		: 0,
		horizontalDragMaxWidth		: 99999,
		contentWidth				: undefined,
		animateScroll				: false,
		animateDuration				: 300,
		animateEase					: 'linear',
		hijackInternalLinks			: false,
		verticalGutter				: 4,
		horizontalGutter			: 4,
		mouseWheelSpeed				: 0,
		arrowButtonSpeed			: 0,
		arrowRepeatFreq				: 50,
		arrowScrollOnHover			: false,
		trackClickSpeed				: 0,
		trackClickRepeatFreq		: 70,
		verticalArrowPositions		: 'split',
		horizontalArrowPositions	: 'split',
		enableKeyboardNavigation	: true,
		hideFocus					: false,
		keyboardSpeed				: 0,
		initialDelay                : 300,        // Delay before starting repeating
		speed						: 30,		// Default speed when others falsey
		scrollPagePercent			: .8		// Percent of visible area scrolled when pageUp/Down or track area pressed
	};

})(jQuery,this);


/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/lib/modrenizer.js */
// Modernizr v1.7  www.modernizr.com
window.Modernizr=function(a,b,c){function G(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=!!(a[b]in l);return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return!!E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c&&(!b||b(a[d],j)))return!0}function D(a,b){return(""+a).indexOf(b)!==-1}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="1.7",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v,w=function(a){var c=b.createElement("style"),d=b.createElement("div"),e;c.textContent=a+"{#modernizr{height:3px}}",h.appendChild(c),d.id="modernizr",g.appendChild(d),e=d.offsetHeight===3,c.parentNode.removeChild(c),d.parentNode.removeChild(d);return!!e},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div");var f=(d="on"+d)in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y=({}).hasOwnProperty,z;C(y,c)||C(y.call,c)?z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)}:z=function(a,b){return y.call(a,b)},r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return a.getContext&&a.getContext("2d")},r.canvastext=function(){return e.canvas&&C(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return"ontouchstart"in a||w("@media ("+o.join("touch-enabled),(")+"modernizr)")},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;){var d=p[b].toLowerCase();if(a[d+"_indexedDB"]||a[d+"IndexedDB"])return!0}return!1},r.hashchange=function(){return x("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return !!(a.history&&history.pushState)},r.draganddrop=function(){return x("dragstart")&&x("drop")},r.websockets=function(){return"WebSocket"in a},r.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")},r.hsla=function(){A("background-color:hsla(120,40%,100%,.5)");return D(k.backgroundColor,"rgba")||D(k.backgroundColor,"hsla")},r.multiplebgs=function(){A("background:url(//:),url(//:),red url(//:)");return(new RegExp("(url\\s*\\(.*?){3}")).test(k.background)},r.backgroundsize=function(){return F("backgroundSize")},r.borderimage=function(){return F("borderImage")},r.borderradius=function(){return F("borderRadius","",function(a){return D(a,"orderRadius")})},r.boxshadow=function(){return F("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){B("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return F("animationName")},r.csscolumns=function(){return F("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";A((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return D(k.backgroundImage,"gradient")},r.cssreflections=function(){return F("boxReflect")},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=w("@media ("+o.join("transform-3d),(")+"modernizr)"));return a},r.csstransitions=function(){return F("transitionProperty")},r.fontface=function(){var a,c,d=h||g,e=b.createElement("style"),f=b.implementation||{hasFeature:function(){return!1}};e.type="text/css",d.insertBefore(e,d.firstChild),a=e.sheet||e.styleSheet;var i=f.hasFeature("CSS2","")?function(b){if(!a||!b)return!1;var c=!1;try{a.insertRule(b,0),c=/src/i.test(a.cssRules[0].cssText),a.deleteRule(a.cssRules.length-1)}catch(d){}return c}:function(b){if(!a||!b)return!1;a.cssText=b;return a.cssText.length!==0&&/src/i.test(a.cssText)&&a.cssText.replace(/\r+|\n+/g,"").indexOf(b.split(" ")[0])===0};c=i('@font-face { font-family: "font"; src: url(data:,); }'),d.removeChild(e);return c},r.video=function(){var a=b.createElement("video"),c=!!a.canPlayType;if(c){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}return c},r.audio=function(){var a=b.createElement("audio"),c=!!a.canPlayType;c&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;"));return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webWorkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var H in r)z(r,H)&&(v=H.toLowerCase(),e[v]=r[H](),u.push((e[v]?"":"no-")+v));e.input||G(),e.crosswindowmessaging=e.postmessage,e.historymanagement=e.history,e.addTest=function(a,b){a=a.toLowerCase();if(!e[a]){b=!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b;return e}},A(""),j=l=null,f&&a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function p(a,b){var c=-1,d=a.length,e,f=[];while(++c<d)e=a[c],(b=e.media||b)!="screen"&&f.push(p(e.imports,b),e.cssText);return f.join("")}function o(a){var b=-1;while(++b<e)a.createElement(d[b])}var c="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",d=c.split("|"),e=d.length,f=new RegExp("(^|\\s)("+c+")","gi"),g=new RegExp("<(/*)("+c+")","gi"),h=new RegExp("(^|[^\\n]*?\\s)("+c+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),i=b.createDocumentFragment(),j=b.documentElement,k=j.firstChild,l=b.createElement("body"),m=b.createElement("style"),n;o(b),o(i),k.insertBefore(m,k.firstChild),m.media="print",a.attachEvent("onbeforeprint",function(){var a=-1,c=p(b.styleSheets,"all"),k=[],o;n=n||b.body;while((o=h.exec(c))!=null)k.push((o[1]+o[2]+o[3]).replace(f,"$1.iepp_$2")+o[4]);m.styleSheet.cssText=k.join("\n");while(++a<e){var q=b.getElementsByTagName(d[a]),r=q.length,s=-1;while(++s<r)q[s].className.indexOf("iepp_")<0&&(q[s].className+=" iepp_"+d[a])}i.appendChild(n),j.appendChild(l),l.className=n.className,l.innerHTML=n.innerHTML.replace(g,"<$1font")}),a.attachEvent("onafterprint",function(){l.innerHTML="",j.removeChild(l),j.appendChild(n),m.styleSheet.cssText=""})}(a,b),e._enableHTML5=f,e._version=d,g.className=g.className.replace(/\bno-js\b/,"")+" js "+u.join(" ");return e}(this,this.document)

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/lib/touchscroll.min.js */
/**
	@license

	Copyright (c) 2010 uxebu Consulting Ltd. & Co. KG
	Copyright (c) 2010 David Aurelio
	All rights reserved.

	Redistribution and use in source and binary forms, with or without
	modification, are permitted provided that the following conditions are met:

	1. Redistributions of source code must retain the above copyright
	   notice, this list of conditions and the following disclaimer.
	2. Redistributions in binary form must reproduce the above copyright
	   notice, this list of conditions and the following disclaimer in the
	   documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
	LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
	SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
	INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
	CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
	ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
	POSSIBILITY OF SUCH DAMAGE.
*/
var TouchScroll = (function(){
	
	//
	//	SCROLLER CONFIGURATION
	//
	var config = {
		// the minimum move distance to trigger scrolling (in pixels)
		threshold: 5,

		// minimum scroll handle size
		scrollHandleMinSize: 25,

		// flicking detection and configuration
		flicking: {
			// longest duration between last touchmove and the touchend event to trigger flicking
			triggerThreshold: 150,

			// the friction factor (per milisecond).
			// This factor is used to precalculate the flick length. Lower numbers
			// make flicks decelerate earlier.
			friction: 0.998,

			// minimum speed needed before the animation stop (px/ms)
			// This value is used to precalculate the flick length. Larger numbers
			// lead to shorter flicking lengths and durations
			minSpeed: 0.15,

			// the timing function for flicking animinations (control points for a cubic bezier curve)
			timingFunc: [0, 0.3, 0.6, 1]
		},

		// bouncing configuration
		elasticity: {
			// factor for the bounce length while dragging
			factorDrag: 0.5,

			// factor for the bounce length while flicking
			factorFlick: 0.2,

			// maximum bounce (in px) when flicking
			max: 100
		},

		// snap back configuration
		snapBack: {
			// the timing function for snap back animations (control points for a cubic bezier curve)
			// when bouncing out before, the first control point is overwritten to achieve a smooth
			// transition between bounce and snapback.
			timingFunc: [0.4, 0, 1, 1],

			// default snap back time
			defaultTime: 400,

			// whether the snap back effect always uses the default time or
			// uses the bounce out time.
			alwaysDefaultTime: true
		}
	};

	//
	//	FEATURE DETECTION
	//
	/* Determine touch events support */
	var hasTouchSupport = (function(){
		if("createTouch" in document){ // True on the iPhone
			return true;
		}
		try{
			var event = document.createEvent("TouchEvent"); // Should throw an error if not supported
			return !!event.initTouchEvent; // Check for existance of initialization method
		}catch(error){
			return false;
		}
	}());

	/*
		In some older versions of Android, WebKitCSSMatrix is broken and does
		not parse a "matrix" directive properly.
	*/
	var parsesMatrixCorrectly = (function(){
		try {
			var m = new WebKitCSSMatrix("matrix(1, 0, 0, 1, -20, -30)");
			return m.e == -20 && m.f == -30;
		} catch(e) {
			return false;
		}
	}());

	//
	// FEATURE BASED CODE BRANCHING
	//

	/* Define event names */
	var events;
	if(hasTouchSupport){
		events = {
			start: "touchstart",
			move: "touchmove",
			end: "touchend",
			cancel: "touchcancel"
		};
	}else{
		events = {
			start: "mousedown",
			move: "mousemove",
			end: "mouseup",
			cancel: "touchcancel" // unnecessary here
		};
	}

	var getMatrixFromNode;
	parsesMatrixCorrectly = false;
	if(parsesMatrixCorrectly){
		getMatrixFromNode = function(/*HTMLElement*/node){ /*WebKitCSSMatrix*/
			var doc = node.ownerDocument,
				transform = window.getComputedStyle(node).webkitTransform;

			return new WebKitCSSMatrix(transform);
		}
	}else{
		var reMatrix = /matrix\(\s*-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?\s*\,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/;
		getMatrixFromNode = function(/*HTMLElement*/node){ /*WebKitCSSMatrix*/
			var doc = node.ownerDocument,
				transform = window.getComputedStyle(node).webkitTransform,
				matrix = new WebKitCSSMatrix(),
				match = reMatrix.exec(transform);

			if(match){
				matrix.e = match[1];
				matrix.f = match[2];
			}

			return matrix;
		}
	}

	//
	// UTILITY FUNCTIONS
	//
	function setTransitionProperty(/*HTMLElement*/node){
		node.style.webkitTransformStyle = "preserve-3d";
		node.style.webkitTransitionProperty = "-webkit-transform";
	};

	function applyMatrixToNode(/*HTMLElement*/node,
	                           /*WebKitCSSMatrix*/matrix,
	                           /*String?*/duration,
	                           /*String?*/timingFunc){
		var s = node.style;
		if(duration != null){
			s.webkitTransitionDuration = duration + "";
		}
		if(timingFunc != null){
			s.webkitTransitionTimingFunction = timingFunc + "";
		}

		// This is twice as fast as than directly assigning the matrix
		// to the style property (maybe because no function call is involved?).
		node.style.webkitTransform = "translate(" + matrix.e + "px, " + matrix.f + "px)";
	}

	function getMatrixFromEvent(event){ /*WebKitCSSMatrix*/
		if(event.touches && event.touches.length){
			event = event.touches[0];
		}

		var matrix = new WebKitCSSMatrix;
		matrix.e = event.pageX;
		matrix.f = event.pageY;

		return matrix;
	};

	function roundMatrix(/*WebKitCSSMatrix*/matrix){ /*WebKitCSSMatrix*/
		matrix.e = Math.round(matrix.e);
		matrix.f = Math.round(matrix.f);
		return matrix;
	}

	// A DOM node to clone for scrollbars
	var scrollbarsTemplate = document.createElement("div");
	scrollbarsTemplate.innerHTML = [
		'<div class="touchScrollTrack touchScrollTrackX">',
			'<div class="touchScrollHandle"></div>',
		'</div>',
		'<div class="touchScrollTrack touchScrollTrackY">',
			'<div class="touchScrollHandle"></div>',
		'</div>'
	].join("");

/*
	=== TOUCH CONTROLLER ======================================================
	Does the actual work.

	The event handling is divided into two parts:
	The scroller constructor tracks "move", "end", and "cancel" events and
	delegates them to the currently active scroller, if any.

	Every single scroller only listens for the "start" event on its outer node,
	and sets itself as the currently active scroller.
*/

/*
	Every object with a "handleEvent" method can be registered as DOM Level 2
	event listener. On event, the method is called on the registered object.
*/
TouchScroll.handleEvent = function handleEvent(event){
	var currentScroller = TouchScroll.prototype.currentScroller;
	if(currentScroller){
		currentScroller.handleEvent(event);
	}else if(event.type === events.move){ // always cancel move events at this point
		//event.preventDefault();
	}
};

/*
	Listening to end, move, and cancel event.
	Event listening takesplace during bubbling, so other scripts can cancel
	scrolling by simply stopping event propagation.
*/
try {
	document.addEventListener(events.move, TouchScroll.handleEvent, false);
	document.addEventListener(events.end, TouchScroll.handleEvent, false);
	document.addEventListener(events.cancel, TouchScroll.handleEvent, false);
} catch (e) {
	// adding events not supported...
}

/**
	Constructor for scrollers.

	@constructor
	@param {HTMLElement} scrollElement The node to make scrollable
	@param {Object} [options] Options for the scroller- Known options are
		elastic {Boolean} whether the scroller bounces
*/
function TouchScroll(/*HTMLElement*/scrollElement, /*Object*/options){
	options = options || {};
	this.elastic = !!options.elastic,
	this.snapToGrid = !!options.snapToGrid;

	this.containerSize = null;
	this.maxSegments = {e: 1, f: 1};
	this.currentSegment = {e: 0, f: 0};

	// references to scroll div elements
	this.scrollers = {
		container: scrollElement,
		outer: /*HTMLElement*/null,
		inner: /*HTMLElement*/null,
		e: /*HTMLElement*/null,
		f: /*HTMLElement*/null
	};

	// Whether the scroller scrolls
	this._scrolls = {e: false, f: false};

	// The minimal scroll values (fully scrolled to the bottom/right)
	// Object with attributes "e" and "f"
	this._scrollMin = {e: false, f: false};

	// References DOM nodes for scrollbar tracks and handles.
	// Gets set up by "_initDom"
	//	{
	//		container: HTMLElement,
	//		handles:{e: HTMLElement, f: HTMLElement},
	//		maxOffsets: {e: Number, f: Number}, -> maximum offsets for the handles
	//		offsetRatios: {e: Number, f: Number}, -> Ratio of scroller offset to handle offset
	//		sizes: {e: Number, f: Number}, -> handle sizes
	//		tracks: {e: HTMLElement, f: HTMLElement},
	//	}
	this._scrollbars = null,


	/* ---- SCROLLER STATE ---- */

	this._isScrolling = false;

	this._startEvent = null;

	// the current scroller offset
	this._currentOffset = new WebKitCSSMatrix();

	// Events tracked during a move action
	// [ {timeStamp: Number, matrix: WebKitCSSMatrix} ]
	// The last two events get tracked.
	this._trackedEvents = /*Array*/null;

	// Keeps track whether flicking is active
	this._flicking = {e: false, f: false};

	// Queued bounces
	this._bounces = {e: null, f: null};

	// Animation timeouts
	// This implementation uses timeouts for combined animations,
	// because the webkitTransitionEnd event fires late on iPhone 3G
	this._animationTimeouts = {e: [], f: []};

	this._initDom();
	this.setupScroller();
}

TouchScroll.prototype = {
	// references the currently active scroller
	// static property!
	currentScroller: null,

	// Maps event types to method names.
	handlerNames: {
		resize: "setupScroller",
		orientationchange: "setupScroller",
		webkitTransitionEnd: "onTransitionEnd",
		DOMSubtreeModified: "setupScroller",

		touchstart: "onTouchStart",
		mousedown: "onTouchStart",
		touchmove: "onTouchMove",
		mousemove: "onTouchMove",
		touchend: "onTouchEnd",
		mouseup: "onTouchEnd",
		touchcancel: "onTouchEnd"
	},

	// Does DOM initialization needed for the scroller
	_initDom: function initDom(){
		// wrap the scroller contents with two additional <div> elements
		var innerScroller = document.createElement("div"),
			outerScroller = innerScroller.cloneNode(false),
			parentNode = this.scrollers.container;

		var topFade = document.createElement("div");
		var bottomFade = document.createElement("div");
		topFade.className = "touchScrollTopFade";
		bottomFade.className = "touchScrollBottomFade";
		topFade.style.display = "none";
		bottomFade.style.display = "none";
		this.topFade = topFade;
		this.bottomFade = bottomFade;

		innerScroller.className = "touchScrollInner";
		parentNode.className += " touchScroll";

		for(var i = 0, iMax = parentNode.childNodes.length; i < iMax; i++){
			innerScroller.appendChild(parentNode.firstChild);
		}

		outerScroller.appendChild(innerScroller);
		parentNode.appendChild(outerScroller);
		parentNode.appendChild(topFade);
		parentNode.appendChild(bottomFade);

		this.scrollers.outer = this.scrollers.f = outerScroller;
		this.scrollers.inner = this.scrollers.e = innerScroller;

		// init scroll layers for transitions
		setTransitionProperty(outerScroller);
		setTransitionProperty(innerScroller);

		innerScroller.style.display = "inline-block";
		innerScroller.style.minWidth = "100%";
		innerScroller.style.webkitBoxSizing = "border-box";

		// add scrollbars
		var scrollbarsNode = scrollbarsTemplate.cloneNode(true),
			trackE = scrollbarsNode.querySelector(".touchScrollTrackX"),
			trackF = scrollbarsNode.querySelector(".touchScrollTrackY"),
			handleE = trackE.firstElementChild,
			handleF = trackF.firstElementChild;


		var style = scrollbarsNode.style;
		style.pointerEvents = "none"; // make clicks/touches on scrollbars "fall through"
		style.webkitTransitionProperty = "opacity";
		style.webkitTransitionDuration = "250ms";
		style.opacity = "0";

		var scrollbars = this._scrollbars = {
			container: scrollbarsNode,
			tracks: {
				e: trackE,
				f: trackF
			},
			handles: {
				e: handleE,
				f: handleF
			},
			sizes : {e: 0, f: 0}
		}

		setTransitionProperty(handleE);
		setTransitionProperty(handleF);

		parentNode.insertBefore(scrollbarsNode, outerScroller);

		/*
			Apply relative positioning to the scrolling container.
			This is needed to enable scrollbar positioning.
		*/
		if(window.getComputedStyle(parentNode).position == "static"){
			parentNode.style.position = "relative";
		}

		this.setupScroller();

		// initialize event listeners
		parentNode.addEventListener(events.start, this, false);
		outerScroller.addEventListener("webkitTransitionEnd", this, false);
		outerScroller.addEventListener("DOMSubtreeModified", this, true);
		window.addEventListener("orientationchange", this, false);
		window.addEventListener("resize", this, false);
	},

	setupScroller: function setupScroller(debug){
		
		console.log(debug);
		
		var scrollContainer = this.scrollers.outer.parentNode,
			containerSize = {
				e: scrollContainer.offsetWidth,
				f: scrollContainer.offsetHeight
			},
			innerScroller = this.scrollers.inner,
			scrollerSize = {
				e: innerScroller.offsetWidth,
				f: innerScroller.offsetHeight
			},
			scrollbars = this._scrollbars,
			scrollMin = {
				e: Math.min(containerSize.e - scrollerSize.e, 0),
				f: Math.min(containerSize.f - scrollerSize.f, 0)
			};

		this.containerSize = containerSize;
		this.maxSegments = {
			e: Math.ceil(-scrollMin.e / containerSize.e),
			f: Math.ceil(-scrollMin.f / containerSize.f)
		};

		scrollbars.container.style.height = containerSize.f + "px";

		// Minimum scroll offsets
		this._scrollMin = scrollMin;
		var scrolls = this._scrolls = {
			e: scrollMin.e < 0,
			f: scrollMin.f < 0
		};

		this._doScroll = scrolls.e || scrolls.f;

		// scrollbar container class name changes if both scrollbars are visible
		scrollbars.container.className = "touchScrollBars";
		if(scrolls.e && scrolls.f){
			scrollbars.container.className += " touchScrollBarsBoth";
		}

		// hide/show scrollbars
		scrollbars.tracks.e.style.display = scrolls.e ? "" : "none";
		scrollbars.tracks.f.style.display = scrolls.f ? "" : "none";

		var scrollbarTrackSizes = {
				e: scrollbars.tracks.e.offsetWidth,
				f: scrollbars.tracks.f.offsetHeight
			};

		// calculate and apply scroll bar handle sizes
		scrollbars.sizes = {
			e: Math.round(Math.max(
				scrollbarTrackSizes.e * containerSize.e / scrollerSize.e,
				config.scrollHandleMinSize
			)),
			f: Math.round(Math.max(
				scrollbarTrackSizes.f * containerSize.f / scrollerSize.f,
				config.scrollHandleMinSize
			))
		};
		scrollbars.handles.e.style.width = scrollbars.sizes.e + "px";
		scrollbars.handles.f.style.height = scrollbars.sizes.f + "px";

		// maximum scrollbar offsets
		scrollbars.maxOffsets = {
			e: scrollbarTrackSizes.e - scrollbars.handles.e.offsetWidth,
			f: scrollbarTrackSizes.f - scrollbars.handles.f.offsetHeight
		};

		// calculate offset ratios
		// (scroller.offset * offsetratio = scrollhandle.offset)
		scrollbars.offsetRatios = {
			e: scrolls.e ? (scrollbarTrackSizes.e - scrollbars.handles.e.offsetWidth) / scrollMin.e : 0,
			f: scrolls.f ? (scrollbarTrackSizes.f - scrollbars.handles.f.offsetHeight) / scrollMin.f : 0
		};
		
		this.hideScrollbars();
		this.checkFades();
	},

	// Standard DOM Level 2 event handler
	handleEvent: function handleEvent(event){
		var handlerName = this.handlerNames[event.type];
		if(handlerName){
			this[handlerName](event);
		}
	},

	// Handles touch start events on the scroller
	onTouchStart: function onTouchStart(event){
		if(!this._doScroll){
			return;
		}
		this.__proto__.currentScroller = this;
		this._isScrolling = false;
		this._trackedEvents = [];
		this._determineOffset();
		this._trackEvent(event);
		this._startEventTarget = event.target; // We track this to work around a bug in android, see below
		var wasAnimating = this._stopAnimations();
		this._snapBack(null, 0);
		this._startEvent = event;

		event.stopPropagation();

		/*
			If the scroller was animating, prevent the default action of the event.
			This prevents clickable elements to be activated accidentally.

			Also, we need to cancel the touchstart event to prevent android from
			queuing up move events and fire them only when the touch ends.
		*/
		//if(wasAnimating){
			event.preventDefault();
		//}

	},

	// Handles touch move events on the scroller
	onTouchMove: function onTouchMove(event){
		if(!this._doScroll){
			return;
		}

		// must be present, because touchstart fired before
		var lastEventOffset = this._trackedEvents[1].matrix,
			scrollOffset = getMatrixFromEvent(event).translate(
				-lastEventOffset.e,
				-lastEventOffset.f,
				0
			),
			isScrolling = this._isScrolling,
			doScroll = isScrolling;

		event.stopPropagation();
		event.preventDefault();

		if(!doScroll){
			var threshold = config.threshold,
			doScroll = scrollOffset.e <= -threshold || scrollOffset.e >= threshold ||
			           scrollOffset.f <= -threshold || scrollOffset.f >= threshold;
		}

		if(doScroll){
			if(!isScrolling){
				this._isScrolling = true;
				this.showScrollbars();
			}

			this._scrollBy(scrollOffset);
			this._trackEvent(event);
		}

		this.checkFades();
	},

	onTouchEnd: function onTouchEnd(event){
		var startTarget = this._startEventTarget;

		if(!this._isScrolling && startTarget == event.target){
		/*
			If no scroll has been made, the touchend event should trigger
			a focus and a click (if occurring on the same node as the
			touchstart event).
			Unfortunately, we've canceled the touchstart event to work around
			a bug in android -- so we need to dispatch our own focus and
			click events.
		*/


			var node = event.target;
			while(node.nodeType != 1){
				node = node.parentNode;
			}
			var focusEvent = document.createEvent("HTMLEvents");
			focusEvent.initEvent("focus", false, false);
			node.dispatchEvent(focusEvent);
			//node.focus();

			var clickEvent = document.createEvent("MouseEvent");
			clickEvent.initMouseEvent(
				"click", //type
				true, //canBubble
				true, //cancelable
				event.view,
				1, //detail (number of clicks for mouse events)
				event.screenX,
				event.screenY,
				event.clientX,
				event.clientY,
				event.ctrlKey,
				event.altKey,
				event.shiftKey,
				event.metaKey,
				event.button,
				null// relatedTarget
			);
			node.dispatchEvent(clickEvent);
			this.hideScrollbars();
		}else if(this._isScrolling){
			var moveSpec = this._getLastMove();
			if(moveSpec.duration <= config.flicking.triggerThreshold && moveSpec.length){
			/*
				If the time between the touchend event and the last tracked
				event is below threshold, we are triggering a flick.
			*/
				var flickDuration = this._getFlickingDuration(moveSpec.speed),
					flickLength = this._getFlickingLength(moveSpec.speed, flickDuration),
					flickVector = moveSpec.matrix,
					factor = flickLength / moveSpec.length;

				flickVector.e *= factor;
				flickVector.f *= factor;

				this.startFlick(flickVector, flickDuration);
			}
		}

		if(!(this.isAnimating())){
			if(this.snapToGrid){
				this._snapBackToGrid();
			}else{
				var snappingBack = this._snapBack();
				if(!snappingBack){
					this.hideScrollbars();
				}
			}
		}
		delete this._startEventTarget;
		this._isScrolling = false;
		this.__proto__.currentScroller = null;
	},

	onTransitionEnd: function onTransitionEnd(event){
		["e", "f"].forEach(function(axis){
			if(event.target === this.scrollers[axis]){
				this._flicking[axis] = false;
			}
		}, this);

		if(!this.isAnimating()){
			this.hideScrollbars();
		}
	},

	isAnimating: function isAnimating(){
		var timeouts = this._animationTimeouts;
		var hasTimeouts = timeouts.e.length > 0 || timeouts.f.length > 0;
		var isFlicking = this._flicking.e || this._flicking.f;
		return hasTimeouts || isFlicking;
	},

	scrollBy: function scrollBy(/*Number*/x, /*Number*/y){
		this._stopAnimations();

		var matrix = new WebKitCSSMatrix();
		matrix.e = -x;
		matrix.f = -y;
		return this._scrollBy(matrix);
	},

	scrollTo: function scrollTo(x, y){
		this._stopAnimations();

		var scrollMin = this._scrollMin;
		var m = new WebKitCSSMatrix();
		m.e = Math.min(0, Math.max(scrollMin.e, -x));
		m.f = Math.min(0, Math.max(scrollMin.f, -y));

		var currentOffset = this._currentOffset;
		m.e -= currentOffset.e;
		m.f -= currentOffset.f;

		var ret = this._scrollBy(m);
		this.checkFades();
		return ret;
	},

	center: function center(){
		var x = -Math.round(this._scrollMin.e/2);
		var y = -Math.round(this._scrollMin.f/2);
		return this.scrollTo(x, y);
	},

	// Scrolls the layer by applying a transform matrix to it.
	//
	// As this method is called for every touchmove event, the code is rolled
	// out for both axes (leading to redundancies) to get maximum performance.
	_scrollBy: function _scrollBy(/*WebKitCSSMatrix*/matrix){
		var scrolls = this._scrolls;
		if(!scrolls.e){
			matrix.e = 0;
		}
		if(!scrolls.f){
			matrix.f = 0;
		}

		var scrollMin = this._scrollMin,
			currentOffset = this._currentOffset,
			newOffset = currentOffset.multiply(matrix),
			isOutOfBounds = {e: false, f: false}, // whether the new position is out of the scroller bounds
			scrollbarSizeSubstract = {e: 0, f: 0};

		if(this.elastic){
			var factor = config.elasticity.factorDrag,
				wasOutOfBounds = { // whether the scroller was already beyond scroll bounds
					e: currentOffset.e < scrollMin.e || currentOffset.e > 0,
					f: currentOffset.f < scrollMin.f || currentOffset.f > 0
				};

			if(wasOutOfBounds.e){
				// if out of scroll bounds, apply the elasticity factor
				newOffset.e -= matrix.e * (1 - factor);
			}
			if(wasOutOfBounds.f){
				newOffset.f -= matrix.f * (1 - factor);
			}

			if(newOffset.e < scrollMin.e || newOffset.e > 0){
				isOutOfBounds.e = true;
				scrollbarSizeSubstract.e = newOffset.e >= 0 ?
				                           newOffset.e : scrollMin.e - newOffset.e;
			}
			if(newOffset.f < scrollMin.f || newOffset.f > 0){
				isOutOfBounds.f = true;
				scrollbarSizeSubstract.f = newOffset.f >= 0 ?
				                           newOffset.f : scrollMin.f - newOffset.f;
			}

			var crossingBounds = { // whether the drag/scroll action went across scroller bounds
					e: (!wasOutOfBounds.e || !isOutOfBounds.e) && (isOutOfBounds.e || isOutOfBounds.e),
					f: (!wasOutOfBounds.f || !isOutOfBounds.f) && (isOutOfBounds.f || isOutOfBounds.f)
				};


			if(crossingBounds.e){
				/*
					If the drag went across scroll bounds, we need to apply a
					"mixed strategy": The part of the drag outside the bounds
					is mutliplicated by the elasticity factor.
				*/
				if(currentOffset.e > 0){
					newOffset.e /= factor;
				}else if(newOffset.e > 0){
					newOffset.e *= factor;
				}else if(currentOffset.e < scrollMin.e){
					newOffset.e += (scrollMin.e - currentOffset.e) / factor;
				}else if(newOffset.e < scrollMin.e){
					newOffset.e -= (scrollMin.e - newOffset.e) * factor;
				}
			}

			if(crossingBounds.f){
				if(currentOffset.f > 0){
					newOffset.f /= factor;
				}else if(newOffset.f > 0){
					newOffset.f *= factor;
				}else if(currentOffset.f < scrollMin.f){
					newOffset.f += (scrollMin.f - currentOffset.f) / factor;
				}else if(newOffset.f < scrollMin.f){
					newOffset.f -= (scrollMin.f - newOffset.f) * factor;
				}
			}
		}else{
			// Constrain scrolling to scroller bounds
			if(newOffset.e < scrollMin.e){
				newOffset.e = scrollMin.e;
			}else if(newOffset.e > 0){
				newOffset.e = 0;
			}

			if(newOffset.f < scrollMin.f){
				newOffset.f = scrollMin.f;
			}else if(newOffset.f > 0){
				newOffset.f = 0;
			}
		}

		this._currentOffset = newOffset;
		this._pageOffset = newOffset;
		

		var offsetX = newOffset.translate(0, 0, 0),
			offsetY = newOffset.translate(0, 0, 0);

		offsetX.f = offsetY.e = 0;

		applyMatrixToNode(this.scrollers.e, offsetX);
		applyMatrixToNode(this.scrollers.f, offsetY);

		// scrollbar position
		var ratios = this._scrollbars.offsetRatios;
		offsetX.e *= ratios.e;
		offsetY.f *= ratios.f;

		if(isOutOfBounds.e){
			this._squeezeScrollbar("e", scrollbarSizeSubstract.e, newOffset.e < 0);
		}else{
			applyMatrixToNode(this._scrollbars.handles.e, offsetX);
		}
		if(isOutOfBounds.f){
			this._squeezeScrollbar("f", scrollbarSizeSubstract.f, newOffset.f < 0);
		}else{
			applyMatrixToNode(this._scrollbars.handles.f, offsetY);
		}
		
	},

	// Tracks all properties needed for scrolling
	// We're tracking only the last two events for the moment
	_trackEvent: function _trackEvent(event){
		var trackedEvents = this._trackedEvents;
		trackedEvents[0] = trackedEvents[1];
		trackedEvents[1] = {
			matrix: getMatrixFromEvent(event),
			timeStamp: event.timeStamp
		};
	},

	showScrollbars: function showScrollbars(){
		if(this.snapToGrid){
			return;
		}
		var style = this._scrollbars.container.style;
		style.webkitTransitionDuration = "";
		style.opacity = "1";
	},

	hideScrollbars: function hideScrollbars(){
		var style = this._scrollbars.container.style;
		style.webkitTransitionDuration = "250ms";
		style.opacity = ".15";
		
		this.checkFades();
	},
	
	checkFades: function() {
		var myoffset = getMatrixFromNode(this.scrollers.f);
		if (myoffset.f <= this._scrollMin.f) {
			//at bottom..
			this.bottomFade.style.display = 'none';
		} else {
			this.bottomFade.style.display = '';
		}
		if (myoffset.f >= 0) {
			//at top..
			this.topFade.style.display = 'none';
		} else {
			this.topFade.style.display = '';
		}
	},

	_squeezeScrollbar: function _squeezeScrollbar(axis, substract, squeezeAtEnd, duration, timingFunc){
		var scrollbars = this._scrollbars;
		var handleStyle = scrollbars.handles[axis].style;

		var defaultSize = scrollbars.sizes[axis];
		var size = Math.max(defaultSize - substract, 1);

		var matrix = new WebKitCSSMatrix();
		matrix[axis] = squeezeAtEnd ? scrollbars.maxOffsets[axis] : 0;
		matrix[axis == "f" ? "d" : "a"] = size / defaultSize;

		handleStyle.webkitTransformOrigin = squeezeAtEnd ? "100% 100%" : "0 0";
		handleStyle.webkitTransitionProperty = "-webkit-transform";
		handleStyle.webkitTransform = matrix;

		if(duration){
			handleStyle.webkitTransitionDuration = duration + "ms";
			handleStyle.webkitTransitionTimingFunction = timingFunc;
			this._animationTimeouts[axis].push(setTimeout(function(){
				handleStyle.webkitTransitionDuration = "";
			}, duration));
		}else{
			handleStyle.webkitTransitionDuration = "";
		}
	},

	_determineOffset: function _determineOffset(round){
		var offsetX = getMatrixFromNode(this.scrollers.e),
			offsetY = getMatrixFromNode(this.scrollers.f),
			currentOffset = offsetX.multiply(offsetY);

		if(round){
			roundMatrix(currentOffset);
		}

		this._currentOffset = currentOffset;
	},

	_stopAnimations: function _stopAnimations(){ /*Boolean*/
		var isAnimating = false;
		var scrollbars = this._scrollbars;
		["e", "f"].forEach(function(axis){
			this.scrollers[axis].style.webkitTransitionDuration = "";
			var handle = scrollbars.handles[axis];
			handle.style.webkitTransitionDuration = "";
			setTransitionProperty(handle);
			scrollbars.tracks[axis].style.webkitBoxPack = "";


			var timeouts = this._animationTimeouts[axis];
			isAnimating = isAnimating || timeouts.length;
			timeouts.forEach(function(timeoutId){
				clearTimeout(timeoutId);
			});
			timeouts.length = 0;
		}, this);

		// if animating, we stop animations by determining the current
		// offset (rounding its values) and then setting those values
		// to the scroller by calling "scrollBy"
		this._determineOffset(true);
		this._scrollBy(new WebKitCSSMatrix());

		// deleting queued bounces
		this._bounces.e = this._bounces.f = null;

		// resetting state
		var isFlicking = this._flicking;
		isFlicking.e = isFlicking.f = false;

		return isAnimating;
	},

	_getLastMove: function _getLastMove(){
		var trackedEvents = this._trackedEvents,
			event0 = trackedEvents[0],
			event1 = trackedEvents[1];

		if(!event0){
			return {duration: 0, matrix: new WebKitCSSMatrix(), length: 0, speed: 0};
		}

		var duration = event1.timeStamp - event0.timeStamp,
			matrix = event1.matrix.multiply(event0.matrix.inverse());

		var scrolls = this._scrolls;
		if (!scrolls.e) {
			matrix.e = 0;
		}
		if (!scrolls.f) {
			matrix.f = 0;
		}
		var length = Math.sqrt(matrix.e * matrix.e + matrix.f * matrix.f);

		return {
			duration: duration, // move duration in miliseconds
			matrix: matrix, // matrix of the move
			length: length, // length of the move in pixels
			speed: length / duration // speed of the move in miliseconds
		}
	},

	// returns flicking duration in miliseconds for a given speed
	_getFlickingDuration: function _getFlickingDuration(pixelsPerMilisecond){
		/*
			The duration is computed as follows:

			variables:
				m = minimum speed before stopping = config.flicking.minSpeed
				d = duration
				s = speed = pixelsPerMilisecond
				f = friction per milisecond = config.flicking.friction

			The minimum speed is computed as follows:
					m = s * f ^ d

				// as the minimum speed is given and we need the duration we
				// can solve the equation for d:
			<=> 	d = log(m/s) / log(f)
		*/
		var duration =	Math.log(
							config.flicking.minSpeed /
							pixelsPerMilisecond
						) /
						Math.log(config.flicking.friction);

		return duration > 0 ? Math.round(duration) : 0;
	},

	_getFlickingLength: function _getFlickingLength(initialSpeed, flickDuration){
		/*
			The amount of pixels to flick is the sum of the distance covered every
			milisecond of the flicking duration.

			Because the distance is decelerated by the friction factor, the speed
			at a given time t is:

				pixelsPerMilisecond * friction^t

			and the distance covered is:

				d = distance
				s = initial speed = pixelsPerMilisecond
				t = time = duration
				f = friction per milisecond = config.flicking.friction

				d = sum of s * f^n for n between 0 and t
			<=>	d = s * (sum of f^n for n between 0 and t)

			which is a geometric series and thus can be simplified to:
				d = s *  (1 - f^(d+1)) / (1 - f)
		*/
		var factor = (1 - Math.pow(config.flicking.friction, flickDuration + 1)) / (1 - config.flicking.friction);
		return initialSpeed * factor;
	},

	startFlick: function startFlick(matrix, duration){
		if(!(duration || this.snapToGrid)){
			this._snapBack();
			return;
		}
		duration = duration || config.snapBack.defaultTime;

		var epsilon = 1 / duration, // precision for bezier computations
			points = config.flicking.timingFunc, // control points for the animation function
			timingFunc = new CubicBezier(points[0], points[1], points[2], points[3]),
			min = this._scrollMin,
			currentOffset = this._currentOffset,
			scrollbars = this._scrollbars;

		roundMatrix(matrix);
		var scrollTarget = this._currentOffset.multiply(matrix);
		var scrolls = this._scrolls;

		if(this.snapToGrid){
			var maxSegments = this.maxSegments;
			var currentSegments = this.currentSegment;
		}

		var animating = {e: true, f: true};
		["e", "f"].forEach(function(axis){
			if(!scrolls[axis]){
				animating[axis] = false;
				return;
			}
			var distance = matrix[axis],
				target = scrollTarget[axis],
				segmentFraction = 1; // the fraction of the flick distance until crossing scroller bounds

			// compute distance fraction where flicking crosses scroller bounds
			var minOffset = min[axis];
			var maxOffset = 0;
			if(this.snapToGrid){
				var containerLength = this.containerSize[axis];
				var increment = distance > 0 ? -1 : 1;
				var maxSegment = maxSegments[axis];
				var currentSegment = currentSegments[axis];
				var flickToSegment = currentSegment + increment;
				if(flickToSegment < 0){
					flickToSegment = 0;
				}else if(maxSegment < flickToSegment){
					flickToSegment = maxSegment;
				}
				this.currentSegment[axis] = flickToSegment;

				if(flickToSegment == currentSegment || !distance){
					return this._snapBack(axis, null, -currentSegment * containerLength);
				}

				maxOffset = minOffset = -flickToSegment * containerLength;
			}

			var segmentFraction, flick, bounce;
			if(this.snapToGrid){
				flick = (distance < 0 ? minOffset : maxOffset) - currentOffset[axis];
				bounce = 0;
				segmentFraction = flick / distance;
			}else{
				if(target < minOffset){
					segmentFraction = 1 - Math.max(Math.min((target - minOffset) / matrix[axis], 1), 0);
				}else if(target > maxOffset){
					segmentFraction = 1 - Math.max(Math.min((target - maxOffset) / matrix[axis], 1), 0);
				}

				flick = segmentFraction * distance;
				bounce = distance - flick;
			}

			if(!(flick || bounce)){
				animating[axis] = this._snapBack(axis);
				return;
			}

			var t = timingFunc.getTforY(segmentFraction, epsilon);
			if (t > 1) { t = 1; } else if (t < 0) { t = 0 }

			var timeFraction = timingFunc.getPointForT(t).x,
				bezierCurves = timingFunc.divideAtT(t);

			var flickTransform =  new WebKitCSSMatrix();
			flickTransform[axis] = currentOffset[axis];

			var flickDuration = timeFraction * duration;

			if(flick && timeFraction){
				this._flicking[axis] = true;

				// animate scroller
				flickTransform[axis] += flick;
				applyMatrixToNode(this.scrollers[axis], flickTransform,
				                  flickDuration + "ms", bezierCurves[0]);

				// animate scrollbars
				var scrollbarTransform = flickTransform.translate(0, 0, 0);
				scrollbarTransform[axis] *= scrollbars.offsetRatios[axis];
				applyMatrixToNode(scrollbars.handles[axis], scrollbarTransform,
				                  flickDuration + "ms", bezierCurves[0]);

			}

			if(this.elastic && bounce){
				var bounceTransform = flickTransform.translate(0, 0, 0),
					bounceTiming = bezierCurves[1];

				// Creating a smooth transition from bounce out to snap back
				bounceTiming._p2 = {
					x: 1 - config.snapBack.timingFunc[0],
					y: 1 - config.snapBack.timingFunc[1]
				};

				// limit the bounce to the configured maximum
				var bounceFactor = Math.min(
					config.elasticity.factorFlick,
					config.elasticity.max / Math.abs(bounce)
				);

				bounceTransform[axis] += bounce * bounceFactor;
				var bounceDuration = (1 - timeFraction) * duration * bounceFactor;
				this._bounces[axis] = {
					timingFunc: bounceTiming,
					duration: bounceDuration + "ms",
					matrix: bounceTransform,
					bounceLength: Math.abs(bounce * bounceFactor)
				};

				// play queued animations with timeouts, because
				// the webkitTransitionEnd event fires late on iPhone 3G
				var that = this;
				var timeouts = this._animationTimeouts[axis];
				var handle = this._sc

				timeouts.push(setTimeout(function(){
					that._playQueuedBounce(axis);
				}, flickDuration));

				timeouts.push(setTimeout(function(){
					var duration = config.snapBack.alwaysDefaultTime ? null : bounceDuration;
					that._snapBack(axis, duration);
					timeouts.length = 0; // clear timeouts
				}, flickDuration + bounceDuration));
			}
		}, this);

		if(!(animating.e || animating.f)){
			this.hideScrollbars();
		}
	},

	_playQueuedBounce: function _playQueuedBounce(axis){
		var bounce = this._bounces[axis];

		if(bounce){
			var scroller = this.scrollers[axis],
				that = this,
				matrix = bounce.matrix,
				duration = bounce.duration,
				timingFunc = bounce.timingFunc;

			applyMatrixToNode(scroller, matrix, duration, timingFunc);

			// bounce scrollbar handle
			this._squeezeScrollbar(axis, bounce.bounceLength, matrix[axis] < 0, duration, timingFunc);

			this._bounces[axis] = null;
			return true;
		}

		return false;
	},

	_snapBack: function _snapBack(/*String?*/axis, /*Number?*/duration, /*Number?*/target){ /*Boolean*/
		duration = duration != null ? duration : config.snapBack.defaultTime;
		if(axis == null){
			var snapBackE = this._snapBack("e", duration);
			var snapBackF = this._snapBack("f", duration);
			var snappingBack = snapBackE || snapBackF;
			if(!snappingBack){
				this.hideScrollbars();
			}else{
				var scroller = this;
				this._animationTimeouts.f.push(setTimeout(function(){
					scroller.hideScrollbars();
				}, duration));
			}
			return snappingBack;
		}

		var scroller = this.scrollers[axis],
			offset = getMatrixFromNode(scroller),
			cp = config.snapBack.timingFunc, // control points
			timingFunc = new CubicBezier(cp[0], cp[1], cp[2], cp[3]);

		if(target != null || offset[axis] < this._scrollMin[axis] || offset[axis] > 0){
			offset[axis] = target != null ? target : Math.max(Math.min(offset[axis], 0), this._scrollMin[axis]);
			this._squeezeScrollbar(axis, 0, offset[axis] < 0, duration, timingFunc);
			applyMatrixToNode(scroller, offset, duration + "ms", timingFunc);

			return Boolean(duration);
		}

		return false;
	},

	_snapBackToGrid: function snapBackToGrid(){
		var currentOffset = this._currentOffset;
		var containerSize = this.containerSize;
		["e", "f"].forEach(function(axis){
			var axisOffset = currentOffset[axis];
			var containerLength = containerSize[axis];
			var currentSegment = -Math.floor((axisOffset + 0.5 * containerLength )/containerLength);
			var maxSegment = this.maxSegments[axis];
			if(currentSegment < 0){
				currentSegment = 0;
			}else if(maxSegment < currentSegment){
				currentSegment = maxSegment;
			}
			this.currentSegment[axis] = currentSegment;
			return this._snapBack(axis, null, -currentSegment * containerLength);
		}, this);
	}
};

return TouchScroll;
}());

/**
 * @license
 *
 * Copyright (C) 2008 Apple Inc. All Rights Reserved.
 * Copyright (C) 2010 David Aurelio. All Rights Reserved.
 * Copyright (C) 2010 uxebu Consulting Ltd. & Co. KG. All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC., DAVID AURELIO, AND UXEBU
 * CONSULTING LTD. & CO. KG ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL APPLE INC. OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Represents a two-dimensional cubic bezier curve with the starting
 * point (0, 0) and the end point (1, 1). The two control points p1 and p2
 * have x and y coordinates between 0 and 1.
 *
 * This type of bezier curves can be used as CSS transform timing functions.
 */
function CubicBezier(p1x, p1y, p2x, p2y){
    if (!(p1x >= 0 && p1x <= 1)) {
        throw new RangeError("'p1x' must be a number between 0 and 1. "
                               + "Got " + p1x + "instead.");
    }
    if (!(p1y >= 0 && p1y <= 1)) {
        throw new RangeError("'p1y' must be a number between 0 and 1. "
                               + "Got " + p1y + "instead.");
    }
    if (!(p2x >= 0 && p2x <= 1)) {
        throw new RangeError("'p2x' must be a number between 0 and 1. "
                               + "Got " + p2x + "instead.");
    }
    if (!(p2y >= 0 && p2y <= 1)) {
        throw new RangeError("'p2y' must be a number between 0 and 1. "
                               + "Got " + p2y + "instead.");
    }

    // Control points
    this._p1 = { x: p1x, y: p1y };
    this._p2 = { x: p2x, y: p2y };
}

CubicBezier.prototype._getCoordinateForT = function(t, p1, p2){
    var c = 3 * p1,
        b = 3 * (p2 - p1) - c,
        a = 1 - c - b;

    return ((a * t + b) * t + c) * t;
};

CubicBezier.prototype._getCoordinateDerivateForT = function(t, p1, p2){
    var c = 3 * p1,
        b = 3 * (p2 - p1) - c,
        a = 1 - c - b;

    return (3 * a * t + 2 * b) * t + c;
};

CubicBezier.prototype._getTForCoordinate = function(c, p1, p2, epsilon){
    if (!isFinite(epsilon) || epsilon <= 0) {
        throw new RangeError("'epsilon' must be a number greater than 0.");
    }

    // First try a few iterations of Newton's method -- normally very fast.
    for (var t2 = c, i = 0, c2, d2; i < 8; i++) {
        c2 = this._getCoordinateForT(t2, p1, p2) - c;
        if (Math.abs(c2) < epsilon){
            return t2;
        }
        d2 = this._getCoordinateDerivateForT(t2, p1, p2);
        if (Math.abs(d2) < 1e-6){
            break;
        }
        t2 = t2 - c2 / d2;
    }

    // Fall back to the bisection method for reliability.
    t2 = c;
    var t0 = 0,
        t1 = 1,
        c2;

    if (t2 < t0){
        return t0;
    }
    if (t2 > t1){
        return t1;
    }

    while (t0 < t1) {
        c2 = this._getCoordinateForT(t2, p1, p2);
        if (Math.abs(c2 - c) < epsilon){
            return t2;
        }
        if (c > c2){
            t0 = t2;
        }
        else{
            t1 = t2;
        }
        t2 = (t1 - t0) * .5 + t0;
    }

    // Failure.
    return t2;
};

/**
 * Computes the point for a given t value.
 *
 * @param {number} t
 * @returns {Object} Returns an object with x and y properties
 */
CubicBezier.prototype.getPointForT = function(t) {
    // Special cases: starting and ending points
    if (t == 0 || t == 1) {
        return { x: t, y: t };
    }
    // check for correct t value (must be between 0 and 1)
    else if (!(t > 0) || !(t < 1)) {
        throw new RangeError("'t' must be a number between 0 and 1"
                             + "Got " + t + " instead.");
    }

    return {
        x: this._getCoordinateForT(t, this._p1.x, this._p2.x),
        y: this._getCoordinateForT(t, this._p1.y, this._p2.y)
    }
};

CubicBezier.prototype.getTforX = function(x, epsilon){
    return this._getTForCoordinate(x, this._p1.x, this._p2.x, epsilon);
};

CubicBezier.prototype.getTforY = function(y, epsilon){
    return this._getTForCoordinate(y, this._p1.y, this._p2.y, epsilon);
};

/**
 * Computes auxiliary points using De Casteljau's algorithm.
 *
 * @param {number} t must be greater than 0 and lower than 1.
 * @returns {Object} with members i0, i1, i2 (first iteration),
 *     j1, j2 (second iteration) and k (the exact point for t)
 */
CubicBezier.prototype._getAuxPoints = function(t){
    if (!(t > 0) || !(t < 1)) {
        throw new RangeError("'t' must be greater than 0 and lower than 1");
    }

    // First series of auxiliary points
    var i0 = { // first control point of the left curve
            x: t * this._p1.x,
            y: t * this._p1.y
        },
        i1 = {
            x: this._p1.x + t*(this._p2.x - this._p1.x),
            y: this._p1.y + t*(this._p2.y - this._p1.y)
        },
        i2  = { // second control point of the right curve
            x: this._p2.x + t*(1 - this._p2.x),
            y: this._p2.y + t*(1 - this._p2.y)
        };

    // Second series of auxiliary points
    var j0 = { // second control point of the left curve
            x: i0.x + t*(i1.x - i0.x),
            y: i0.y + t*(i1.y - i0.y)
        },
        j1 = { // first control point of the right curve
            x: i1.x + t*(i2.x - i1.x),
            y: i1.y + t*(i2.y - i1.y)
        };

    // The division point (ending point of left curve, starting point of right curve)
    var k = {
            x: j0.x + t*(j1.x - j0.x),
            y: j0.y + t*(j1.y - j0.y)
        };

    return {
        i0: i0,
        i1: i1,
        i2: i2,
        j0: j0,
        j1: j1,
        k: k
    }
};

/**
 * Divides the bezier curve into two bezier functions.
 *
 * De Casteljau's algorithm is used to compute the new starting, ending, and
 * control points.
 *
 * @param {number} t must be greater than 0 and lower than 1.
 *     t == 1 or t == 0 are the starting/ending points of the curve, so no
 *     division is needed.
 *
 * @returns {CubicBezier[]} Returns an array containing two bezier curves
 *     to the left and the right of t.
 */
CubicBezier.prototype.divideAtT = function(t){
    if (t < 0 || t > 1) {
        throw new RangeError("'t' must be a number between 0 and 1. "
                             + "Got " + t + " instead.");
    }

    // Special cases t = 0, t = 1: Curve can be cloned for one side, the other
    // side is a linear curve (with duration 0)
    if (t === 0 || t === 1){
        var curves = [];
        curves[t] = CubicBezier.linear();
        curves[1-t] = this.clone();
        return curves;
    }

    var left = {},
        right = {},
        points = this._getAuxPoints(t);

    var i0 = points.i0,
        i1 = points.i1,
        i2 = points.i2,
        j0 = points.j0,
        j1 = points.j1,
        k = points.k;

    // Normalize derived points, so that the new curves starting/ending point
    // coordinates are (0, 0) respectively (1, 1)
    var factorX = k.x,
        factorY = k.y;

    left.p1 = {
        x: i0.x / factorX,
        y: i0.y / factorY
    };
    left.p2 = {
        x: j0.x / factorX,
        y: j0.y / factorY
    };

    right.p1 = {
        x: (j1.x - factorX) / (1 - factorX),
        y: (j1.y - factorY) / (1 - factorY)
    };

    right.p2 = {
        x: (i2.x - factorX) / (1 - factorX),
        y: (i2.y - factorY) / (1 - factorY)
    };

    return [
        new CubicBezier(left.p1.x, left.p1.y, left.p2.x, left.p2.y),
        new CubicBezier(right.p1.x, right.p1.y, right.p2.x, right.p2.y)
    ];
};

CubicBezier.prototype.divideAtX = function(x, epsilon) {
    if (x < 0 || x > 1) {
        throw new RangeError("'x' must be a number between 0 and 1. "
                             + "Got " + x + " instead.");
    }

    var t = this.getTforX(x, epsilon);
    return this.divideAtT(t);
};

CubicBezier.prototype.divideAtY = function(y, epsilon) {
    if (y < 0 || y > 1) {
        throw new RangeError("'y' must be a number between 0 and 1. "
                             + "Got " + y + " instead.");
    }

    var t = this.getTforY(y, epsilon);
    return this.divideAtT(t);
};

CubicBezier.prototype.clone = function() {
    return new CubicBezier(this._p1.x, this._p1.y, this._p2.x, this._p2.y);
};

CubicBezier.prototype.toString = function(){
    return "cubic-bezier(" + [
        this._p1.x,
        this._p1.y,
        this._p2.x,
        this._p2.y
    ].join(", ") + ")";
};

CubicBezier.linear = function(){
    return new CubicBezier
};

CubicBezier.ease = function(){
    return new CubicBezier(0.25, 0.1, 0.25, 1.0);
};
CubicBezier.linear = function(){
    return new CubicBezier(0.0, 0.0, 1.0, 1.0);
};
CubicBezier.easeIn = function(){
    return new CubicBezier(0.42, 0, 1.0, 1.0);
};
CubicBezier.easeOut = function(){
    return new CubicBezier(0, 0, 0.58, 1.0);
};
CubicBezier.easeInOut = function(){
    return new CubicBezier(0.42, 0, 0.58, 1.0);
};

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/lib/underscore-min.js */
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var g=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=g(t,r);var e,u=n.length;if(u===+u)for(e=0;u>e;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;i>o;o++)e=u?u[o]:o,a[o]=t(n[e],e,n);return a};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[o++]:o++]}for(;a>o;o++)u=i?i[o]:o,r=t(r,n[u],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[--a]:--a]}for(;a--;)u=i?i[a]:a,r=t(r,n[u],u,n);return r},h.find=h.detect=function(n,t,r){var e;return t=h.iteratee(t,r),h.some(n,function(n,r,u){return t(n,r,u)?(e=n,!0):void 0}),e},h.filter=h.select=function(n,t,r){var e=[];return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e)},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)},h.invoke=function(n,t){var r=a.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],e>i&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)});return i},h.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],i>e&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,t,r){return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var m=function(n){return function(t,r,e){var u={};return r=h.iteratee(r,e),h.each(t,function(e,i){var a=r(e,i,t);n(u,e,a)}),u}};h.groupBy=m(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=m(function(n,t,r){n[r]=t}),h.countBy=m(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){r=h.iteratee(r,e,1);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},h.toArray=function(n){return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,t,r){t=h.iteratee(t,r);var e=[],u=[];return h.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},h.first=h.head=h.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var y=function(n,t,r,e){if(t&&h.every(n,h.isArray))return o.apply(e,n);for(var u=0,a=n.length;a>u;u++){var l=n[u];h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)}return e};h.flatten=function(n,t){return y(n,t,!1,[])},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],a=0,o=n.length;o>a;a++){var l=n[a];if(t)a&&i===l||u.push(l),i=l;else if(r){var c=r(l,a,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(y(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!h.contains(t,i)){for(var a=1;r>a&&h.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},h.difference=function(n){var t=y(a.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;t>e;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));--e>=0;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var d=function(){};h.bind=function(n,t){var r,e;if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));d.prototype=n.prototype;var u=new d;d.prototype=null;var i=n.apply(u,r.concat(a.call(arguments)));return h.isObject(i)?i:u}},h.partial=function(n){var t=a.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===h&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=h.bind(n[r],n);return n},h.memoize=function(n,t){var r=function(e){var u=r.cache,i=t?t.apply(this,arguments):e;return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))},h.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var l=function(){o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)};return function(){var c=h.now();o||r.leading!==!1||(o=c);var f=t-(c-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i}},h.debounce=function(n,t,r){var e,u,i,a,o,l=function(){var c=h.now()-a;t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,a=h.now();var c=r&&!e;return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},h.before=function(n,t){var r;return function(){return--n>0?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(s)return s(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;u>e;e++){t=arguments[e];for(r in t)c.call(t,r)&&(n[r]=t[r])}return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t)){t=g(t,r);for(e in n){var i=n[e];t(i,e,n)&&(u[e]=i)}}else{var l=o.apply([],a.call(arguments,1));n=new Object(n);for(var c=0,f=l.length;f>c;c++)e=l[c],e in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(o.apply([],a.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;r>t;t++){var e=arguments[t];for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var a=n.constructor,o=t.constructor;if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c,f;if("[object Array]"===u){if(c=n.length,f=c===t.length)for(;c--&&(f=b(n[c],t[c],r,e)););}else{var s,p=h.keys(n);if(c=p.length,f=h.keys(t).length===c)for(;c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e)););}return r.pop(),e.pop(),f};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return n===void 0},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(t){return t[n]}},h.matches=function(n){var t=h.pairs(n),r=t.length;return function(n){if(null==n)return!r;n=new Object(n);for(var e=0;r>e;e++){var u=t[e],i=u[0];if(u[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=g(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(_),j=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=j(_),h.unescape=j(w),h.result=function(n,t){if(null==n)return void 0;var r=n[t];return h.isFunction(r)?n[t]():r};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(o){throw o.source=i,o}var l=function(n){return a.call(this,n,h)},c=t.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),E.call(this,r.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);
//# sourceMappingURL=underscore-min.map

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/AnimationQueue.js */
// JavaScript Document

var AnimationQueue = Class.extend({
  init: function() {
	
		this.queuedItems = [];
		this.dequeue = jQuery.proxy(this.realDequeue, this);
	}
}); 

AnimationQueue.prototype.queue = function(fn) {
	this.queuedItems.push(fn);
}

AnimationQueue.prototype.realDequeue = function() {
	var fn = this.queuedItems.shift();
	
	if (!fn)
		return;
		
	fn.call();

}


/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/BBPool.js */
var BBPool = ( function() {

	function processData( data ) {
		var poolData = [];

		var votes = 0;
		if (data.entryStats) {
			votes = $.grep( data.entryStats, function( ee, ii ){
				return ee && ee.entryId && ee.entryId ? ee.entryId==ee.entryId : false;
			});
		}

		if ( !data.entries ) data.entries = [];

		if( data.entries.length ) {
			for( var i=0; i<data.entries.length; i++){
				var entry = {};
				entry.pfeed_priceforfilters = parseFloat(data.entries[i].properties.pfeed_priceforfilters);
				//entry.imageWidth = imageWidth;
				// LETS FIX THIS SOMEWHERE PLEASE
				entry.image_fullImage = data.entries[i].fileUrl;
				entry.pfeed_url = data.entries[i].properties.pfeed_url;
				entry.entryId = data.entries[i].entryId;
				entry.pfeed_brand = data.entries[i].properties.pfeed_brand;

				if(data.entries[i].properties.pfeed_id) {
					entry.pfeed_id = data.entries[i].properties.pfeed_id;
				}

				entry.mostVoted = false;
				
				entry.pfeed_productgroup = data.entries[i].properties.pfeed_productgroup;
				entry.pfeed_price1 = data.entries[i].properties.pfeed_price1;
				entry.pfeed_price2 = data.entries[i].properties.pfeed_price2;
				entry.pfeed_price3 = data.entries[i].properties.pfeed_price3;
				entry.pfeed_name = data.entries[i].properties.pfeed_name;
				entry.label = data.entries[i].properties.pfeed_name;
				entry.pfeed_name = data.entries[i].properties.pfeed_name;
				//entry.votes = Math.floor(Math.random()*255);
				entry.pfeed_priceforfilters = parseFloat( data.entries[i].properties.pfeed_priceforfilters );
				entry.inVoteList = false;
				entry.votedOn = false;
				entry.votes = votes.length>0 ? votes[0].numLikes : 0;
				entry.votes = Math.floor( Math.random() * 255 );

				entry.insertIndex = data.entries.length - i;
				entry.testIndex = entry.insertIndex % 2;
				poolData.push( entry );
			}
		}

		return poolData;
	}

	function processDataRalphLauren( data ) {
		var poolData = [];

		var votes = 0;
		if (data.entryStats) {
			votes = $.grep( data.entryStats, function( ee, ii ){
				return ee && ee.entryId && ee.entryId ? ee.entryId==ee.entryId : false;
			});
		}

		if( data.entries.length ) {
			for( var i=0; i<data.entries.length; i++){
				var entry = {};
				entry.pfeed_priceforfilters = parseFloat(data.entries[i].properties.pfeed_priceforfilters);
				//entry.imageWidth = imageWidth;
				// LETS FIX THIS SOMEWHERE PLEASE
				
				entry.pfeed_url = data.entries[i].properties.pfeed_url;
				entry.entryId = data.entries[i].entryId;
				entry.pfeed_brand = data.entries[i].properties.pfeed_brand;
				entry.ralphlauren = true;

				if(data.entries[i].properties.pfeed_id) {
					entry.pfeed_id = data.entries[i].properties.pfeed_id;
				}

				if (entry.pfeed_id) {
					if ( finder.getConfig().ralphlauren.products[ entry.pfeed_id ] ) {
						entry.image_fullImage = assetsDirectory + "images/ralphlauren/" + finder.getConfig().ralphlauren.products[ entry.pfeed_id ].newname;
						entry.insertIndex = finder.getConfig().ralphlauren.products[ entry.pfeed_id ].sequenceIndex;
					} else {
						entry.image_fullImage = data.entries[i].fileUrl;
						entry.insertIndex = data.entries.length - i;
					}
				}
				
				entry.pfeed_productgroup = data.entries[i].properties.pfeed_productgroup;
				entry.pfeed_price1 = data.entries[i].properties.pfeed_price1;
				entry.pfeed_price2 = data.entries[i].properties.pfeed_price2;
				entry.pfeed_price3 = data.entries[i].properties.pfeed_price3;
				entry.pfeed_name = data.entries[i].properties.pfeed_name;
				entry.label = data.entries[i].properties.pfeed_name;
				entry.pfeed_name = data.entries[i].properties.pfeed_name;
				//entry.votes = Math.floor(Math.random()*255);
				entry.pfeed_priceforfilters = parseFloat( data.entries[i].properties.pfeed_priceforfilters );
				entry.inVoteList = false;
				entry.votedOn = false;
				entry.votes = votes.length>0 ? votes[0].numLikes : 0;
				entry.votes = Math.floor( Math.random() * 255 );
				
				entry.testIndex = entry.insertIndex % 2;
				poolData.push( entry );
			}
		}

		return poolData;
	}

	// get the top gifted product
	// grab the object with the most votes
	function setTopGiftedItem( data ) {
		var mostVotes = _.max( data, function( o ){ return o.votes; } );
		mostVotes.insertIndex = -1;
		mostVotes.mostVoted = true;
		return data;
	}

	// basic logical sort using underscore
	// similar to js native sorting abilites
	function sort( array, f ) {
		var sortedData = _.sortBy( array, f );
		return sortedData;
	}

	// filter
	function filter( array, f) {
		var matches = _.filter( array, f );
		return matches;
	}

	// special sorts by reverse insertIndex 
	// this is how marketing wants the pool to show up on the page

	function getTopTenList( data ) {
		var tempData = processData( data );
		tempData = sortDataByPoolOrder( tempData );
		tempData = tempData.slice(0,10);
		return tempData;
	}

	function filterDataUnderValue( data, value ) {
		var tempData = BBPool.filter( data, function( entry ) {
			if( entry[ "pfeed_priceforfilters" ] <= value ) return entry;
		} );
		return tempData;
	}

	function sortDataByPoolOrder( data ) {
		var currentSort = function( o ) { return o.insertIndex; };
		var sortedData = sort( data, currentSort );
		return sortedData;
	}

	function sortDataPriceHighToLow( data ) {
		var currentSort = function( o ) { return -o.pfeed_priceforfilters; };
		var sortedData = sort( data, currentSort );
		return sortedData;
	}

	function sortDataPriceLowToHigh( data ) {
		var currentSort = function( o ) { return o.pfeed_priceforfilters; };
		var sortedData = sort( data, currentSort );
		return sortedData;
	}

	function sortDataVotesHighToLow( data ) {
		var currentSort = function( o ) { return -o.votes; };
		var sortedData = sort( data, currentSort );
		return sortedData;
	}

	// table of contents
	return {
		processData: processData,
		processDataRalphLauren: processDataRalphLauren,
		sort: sort,
		filter: filter,

		// specific pool functions
		filterDataUnderValue: filterDataUnderValue,
		getTopTenList: getTopTenList,
		sortDataByPoolOrder: sortDataByPoolOrder,
		setTopGiftedItem: setTopGiftedItem,
		sortDataPriceHighToLow: sortDataPriceHighToLow,
		sortDataPriceLowToHigh: sortDataPriceLowToHigh,
		sortDataVotesHighToLow: sortDataVotesHighToLow
	};

} )();

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/BBPoolCache.js */
var BBPoolCache = ( function() {
	// flip to true if you want pools to be cached
	var wantCaching = true;
	var cache = {};

	function storePoolByName( poolArray, name ) {
		if (wantCaching === true) {
			if ( !cache[ name ]  ) {
				cache[ name ] = poolArray;
			}
		}
	}

	function getPoolByName( name ) {
		var poolArray = -1;
		if ( cache[ name ]  ) {
			poolArray = cache[ name ];
		}
		return poolArray;
	}

    function getAllPoolNames(){
        return _.keys(cache)
    }

	// table of contents
	return {
		storePoolByName: storePoolByName,   // Keith
		getPoolByName: getPoolByName,       // Keith
        getAllPoolNames : getAllPoolNames   // JDavis
	};



} )();

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/FinderPage.js */
// JavaScript Document
/*
	Finder Page
	*/

var FinderPage = Class.extend({
  init: function(params) {
	
		this.doTransition = true;
		this.params = {};
	
		this.title = params.title;
		this.url = params.url;
		this.navId = params.navId;
		
		if (params.transitionIn)
			this.transitionIn = params.transitionIn;
			
		if (params.transitionOut)
			this.transitionOut = params.transitionOut;
		
		this.pageLoaded = false;
		this.imagesLoaded = false;
		
		this.preLoad = params.preLoad;
		
		if (!params.navHighlight)
			this.navHighlight = params.navId;
		else
			this.navHighlight = params.navHighlight; 
		
		if (!this.preLoad)
			this.preLoad = [];

		this.preloadHandler = new PreloadHandler(jQuery.proxy(this.allImagesLoaded, this), this.preLoad);
		
		this.transitionOutDelay = 500;
		
	},
	load: function(vars){

		this.params = this.parseQueryString(vars);
		if (this.params.argc) {
			this.params.argc = this.params.argc.split("/");
		} else {
			this.params.argc = [];
		}
		
		if (!this.pageLoaded) {
			// get the contents...
			finder.loadingDisplay.start("page load");
			this.processPageLoad(finder.getPageTemplate(this.navId));
			
		}
		else {
			this.allImagesLoaded();
		}
		
	},
	
	doTransitions: function(bool) {
		this.doTransition = bool;
	},
	
	processParams: function() {
		// override me..
		
		this.parentDiv.trigger({type: "pageUrlChanged", page:this});
	},
	
	bringToFront: function(){
		console.log(".finderPage#" + this.navId);
		console.log(jQuery(".finderPage#" + this.navId, "#pageContainer").show().css({'visibility': 'visible', 'z-index': 150}));

		this.parentDiv.trigger("pageLoaded");	
		this.parentDiv.trigger("dataChanged");

	},
	
	sendToBack: function() {
	
		jQuery(".finderPage#" + this.navId, "#pageContainer").css({'visibility': 'hidden', 'z-index': 1}).hide();
	
	},
	
	transitionIn: function() {
		this.bringToFront();
	},
	
	transitionOut: function() {
		var self = this;
		setTimeout(function() {
			self.prepareForNextLoad();
			self.sendToBack();
			}, self.transitionOutDelay);
	},
	
	prepareForNextLoad: function() {
		
	}, 
	
	setup: function() {
		
	},
	
	unload: function(){
		var self = this;
		this.transitionOut();
		
		setTimeout(jQuery.proxy(this.removePage, this), self.transitionOutDelay);
		try {
			this.parentDiv.trigger({
				type: "pageUnLoaded",
				page: this
			});
		} catch(e) {
			
		}
	}
}); 



FinderPage.prototype.setParent = function (parent)
{
	this.parent = parent;
}

FinderPage.prototype.allImagesLoaded = function() {
	
	this.processParams();
	
	if (this.doTransition) {
		this.transitionIn();
	} else {
		this.bringToFront();
	}
}

FinderPage.prototype.processPageLoad = function(data, status, xhr) {
	data = data.replace(/randomDirectory\//g, finder.getConfig().assetsDirectory);
	this.pageLoaded = true;
	jQuery("#pageContainer").append(data);
	this.setup();
	this.preloadHandler.start();
	finder.loadingDisplay.end("page load");
}


FinderPage.prototype.removePage = function() {

	this.pageLoaded = false;
	jQuery("#" + this.navId + ".finderPage", "#pageContainer").remove();

}

FinderPage.prototype.parseQueryString = function (q) {
	
	var urlParams = {};
	
    var e,
        a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&=]+)=?([^&]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); }

    while (e = r.exec(q))
       urlParams[d(e[1])] = d(e[2]);
	   
	return urlParams;
}







/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/LoadingDisplay.js */
var LoadingDisplay = Class.extend({
	
	init: function() {
		this.div = jQuery("#bodyContainer>DIV.loading");
		this.loaders = [];
	},
	
	getDiv:function() {
		return jQuery("#bodyContainer>DIV.loading");
	},
	
	start:function(desc) {
		if($.inArray(desc,this.loaders)==-1){
			this.loaders.push(desc);
			this.getDiv().stop().show().fadeOut(0).fadeIn();
			//console.log("LoadingDisplay.start(" + desc + ")");
		}
	},
	
	end:function (desc) {
		var i = $.inArray(desc,this.loaders);
		if(i>-1){
			this.loaders.splice(i,1);
			//console.log("LoadingDisplay.end(" + desc + ")");
		}
		if(this.loaders.length==0){
			this.getDiv().hide();
		}
	},
	
	reset:function() {
		this.loaders = [];
		this.end();
	}

});

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/MacysFinder.js */

var MacysFinder = Class.extend({
  init: function() {
		this.pages = {};
		this.currentPage = false;
		
		this.loadingDisplay = new LoadingDisplay();
		this.poolCache = new PoolCache();
		
		this.setupURLHandling();
		
		jQuery.ajaxSetup( {
			cache: false		
		});
		
		this.templates = {};
		
		this.skava = new SkavaInterop();
	},
	
	setTemplates: function(templates) {
		this.templates = templates;
	},
	
	getPageTemplate: function(id) {
		return this.templates.pages[id];
	},
	
	getTemplate: function(id) {
		return this.templates[id];
	},
	
	isTablet: function() {
		return Modernizr.touch || navigator.userAgent.match(/iPad/i) != null;
		//return true;
	},
	
	shouldResizeAndScroll: function() {
		
		return Modernizr.hashchange;
		
	},
	
	resizePage: function() {

		if (!this.shouldResizeAndScroll())
			return;

		var height = jQuery("#finderContainer").height();
		
		try {
			//var currentDomain = document.domain; 
			
			if (window.location.host.indexOf("atfingertips.com") > -1)
				document.domain = "atfingertips.com";
			else 
				document.domain = "macys.com";
			
			$(parent.document.getElementById("social")).css({'height': height + "px"});
			console.log("resized to", height);
			//document.domain = currentDomain;
		} catch (e) {
			console.error("Could not resize page", e);
		}
	},
	
	scrollPage: function(whereTo) {

		if (!this.shouldResizeAndScroll())
			return;

		var top = 131; //macys header..
		
		switch (whereTo) {
			case "top":
				top += 0;
				break;
				
			case "pool":
				var adder = jQuery(".poolHeaderRow", finder.getCurrentPage().parentDiv).offset().top;
				top += adder;
				break;
		}
		
		try {
			if (window.location.host.indexOf("atfingertips.com") > -1) 
				document.domain = "atfingertips.com";
			else 
				document.domain = "macys.com";
			
			//parent.window.scroll(0, top);
			jQuery("HTML,BODY", jQuery(parent.window.document)).animate({scrollTop: top});
			console.log("page scrolled to", top, whereTo, parent, parent.window);
		} catch(e) {
			console.log("Could not scroll page");
		}
		
	},
	
	loadPage: function(pageId, query) {
	
		// see if this is the current page...
		if (this.currentPage && pageId == this.currentPage.navId){
			this.currentPage.load(query);
			finder.pageChanged(this.currentPage);
			return;
		}
		
		var self = this;

		if (this.currentPage){
			this.currentPage.unload();
		}
	
		this.loadingDisplay.reset();
			
		if (!query){
			query = "";
		}
		
		if (!this.currentPage) {
			this.currentPage = {}
		}
		
		if (!this.currentPage.transitionOutDelay) {
			this.currentPage.transitionOutDelay = 500;
		}
			
		jQuery("A.selected").removeClass("selected");
		
		// is this an alias?
		var currentAlias = false;
		if (finder.getConfig().aliases[pageId]) {
			currentAlias = pageId;
			var alias = pageId = finder.getConfig().aliases[pageId];
			pageId = alias.page;
			query = "argc=" + alias.query;
			
		}
		
		if(!this.pages[pageId]){
			page = this.pages[finder.getConfig().defaultPage];
		} else {
			page = this.pages[pageId];
		}
		page.currentAlias = currentAlias;
		
		setTimeout(function(){
            page.load(query);
            finder.pageChanged(page);
        }, this.currentPage.transitionOutDelay + 100);
	
		//jQuery("A[finderPage=" + page.navHighlight+"]").addClass("selected");
	
		this.currentPage = page;
	}
}); 

MacysFinder.prototype.getPoolCache = function() {
	return this.poolCache;
}

MacysFinder.prototype.setupURLHandling = function(){

	var self = this;
	$(window).hashchange( function() {
		self.manageState(location.hash.substring(1));
	})
}

MacysFinder.prototype.manageState = function(state) {
	// parse state...

	console.log(state);

	//console.log(state);

	try {
		closeSharePopup(null, 0);
	} catch(e) { }
	
	try {
		closePopup();
	} catch(e) { }
	
	
	

	if (state == "")
		state = "/" + this.defaultPage;

	var saveState = state;

	if (state.substring(0,1) == "/")
		state = state.substring(1);
		
	if (state.indexOf("?") > 0)
	{
		state = state.split("?");
		this.loadPage(state[0], state[1]);
	} else {
		
		if (state.lastIndexOf("/") > 0)
		{
			state = state.split("/");
			var page = state.shift();;
			var params = "argc=" + state.join("/");
			this.loadPage(page, params);
			return;
		}
		
		this.loadPage(state);
	}
}


MacysFinder.prototype.startFinder = function()
{
	// parse the url..
	
	
	if (window.location.hash == "")
	{
		finder.loadPage(this.defaultPage);
	} else {
		finder.manageState(location.hash.substring(1));
	}
	
}

MacysFinder.prototype.pageChanged = function() {
	
}

MacysFinder.prototype.getCurrentPage = function() {
	return this.currentPage;
}

MacysFinder.prototype.addPage = function (page) {
	page.setParent(this);
	this.pages[page.navId] = (page);
}



// JavaScript Document
// PreloadHandler

var PreloadImage = Class.extend({
  init: function(parent, imgsrc) {
	
		this.handler = parent;
		this.loaded = false;
		this.imgsrc = imgsrc;
		
		if (this.imgsrc.substring(0,7) != "http://")
			this.imgsrc = finder.getConfig().assetsDirectory + this.imgsrc;
		
		var pImage = this;

		this.img = new Image();
		

		jQuery(this.img).bind('load', function(){
			pImage.itemLoaded();
		});
		
		console.log("preloadimage: " + this.imgsrc);
		
		this.img.src = this.imgsrc;
	}
}); 


PreloadImage.prototype.itemLoaded = function() {
	this.loaded = true;
	this.handler.itemLoaded();
}

var PreloadHandler = Class.extend({
  init: function(callback, images) {
	
		this.callback = callback;
		this.images = images;
		this.preloadItems = [];
		this.isDone = false;
	}
}); 

PreloadHandler.prototype.start = function()
{
	if (!this.images || this.images.length == 0)
	{
		this.callback();
		return;
	}
	finder.loadingDisplay.start("image preload");
	var myself = this;
	for (var i = 0; i < this.images.length; i++)
	{
		this.preloadItems.push(new PreloadImage(this, this.images[i]));
	}
	
	this.images = null;
}

PreloadHandler.prototype.itemLoaded = function() {	
	if (!this.isDone && this.checkForFullLoad())
	{
		//try {
			finder.loadingDisplay.end("image preload");
			this.isDone = true;
			this.callback();
		//} catch(e) { alert("itemLoaded: " + e.message);}
	} else {

	}
		
}

PreloadHandler.prototype.checkForFullLoad = function() {
	for (var i = 0; i < this.preloadItems.length; i++)
	{
		if (!this.preloadItems[i].loaded)
			return false;
	}
	return true;
}



/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/PinchZoomable.js */
function PinchZoomable(n1){
    var n = jQuery(n1);
    
    n.each(function(){
		
		var n3 = jQuery(this);
		
        if (!n3.attr("rotation") || n3.attr("rotation") == "") 
            n3.attr("rotation", "0");
        
        if (!n3.attr("scale") || n3.attr("scale") == "") 
            n3.attr("scale", "1");
        
        if (!n3.attr("translate") || n3.attr("translate") == "") 
            n3.attr("translate", " ");
        
        if (!n3.attr("deltaX") || n3.attr("deltaX") == "") 
            n3.attr("deltaX", 0);
        
        if (!n3.attr("deltaY") || n3.attr("deltaY") == "") 
            n3.attr("deltaY", 0);
        
        n3.addClass("pinchZoomable");
    })
    
    
    
    n.bind("touchstart", function(e){
        e.preventDefault();
        
        if (e.originalEvent.touches.length != 1) 
            return;
        
        var node = jQuery(this);
        
        var nodePosition = node.offset();
        
        var touch = e.originalEvent.touches[0];
        
        var xChange = touch.pageX - 1 * node.attr("deltaX");
        var yChange = touch.pageY - 1 * node.attr("deltaY");
        
        node.attr("offX", xChange);
        node.attr("offY", yChange);
		
		node.css({
			"-webkit-transform-origin": "50% 50%"
		});
        
        node.trigger("interactionStart");
    });
    
    
    n.bind("touchend", function(e){
        var node = jQuery(this);
        node.trigger("interactionEnd");
    });
    
    n.bind("touchmove", function(e){
    
        if (e.originalEvent.touches.length != 1) 
            return;
        
        e.preventDefault();
        
        var node = jQuery(this);
        
        var touch = e.originalEvent.touches[0];
        
        var newX = touch.pageX - node.attr("offX");
        var newY = touch.pageY - node.attr("offY");
        
        
        
        node.attr("deltaX", newX).attr("deltaY", newY);
        
        newX += "px";
        newY += "px";
        
        var rotation = parseInt(node.attr("rotation"));
        var scale = node.attr("scale");
        var translate = "translate3d(" + newX + ", " + newY + ", 0px)";
        node.attr("translate", translate);
        
        //console.log(translate + " rotation(" + rotation + "deg) scale(" + scale + ")");
        node.css({
            "-webkit-transform": translate + " rotate(" + rotation + "deg) scale(" + scale + ")"
        })
    });
    
    n.bind("gesturestart", function(){
    
        var node = jQuery(this);
        
        if (!node.attr("rotation") || node.attr("rotation") == "") 
            node.attr("rotation", "0");
        
        if (!node.attr("scale") || node.attr("scale") == "") 
            node.attr("scale", "1");
        
        
        node.trigger("interactionStart");
    });
    
    n.bind("gestureend", function(){
    
        var node = jQuery(this);
        node.trigger("interactionEnd");
        node.removeClass("interaction");
        node.attr("rotation", node.attr("xrotation"));
        node.attr("scale", node.attr("xscale"));
        console.log("end");
        
        
    });
    
    n.bind("gesturechange", function(f){
        f.preventDefault();
        e = f.originalEvent;
        try {
            var node = jQuery(this);
            
            var currentRotation = parseInt(node.attr("rotation"));
            var currentScale = 1 * node.attr("scale");
            
            
            var newRotation = (currentRotation + e.rotation) % 360;
            var newScale = currentScale * e.scale;
            newScale = newScale.toFixed(2);
            
            var translate = node.attr("translate");
            
            // scale and rotation are relative values,
            // so we wait to change our variables until the gesture ends
            //node.style.width = (width * e.scale) + "px";
            //node.style.height = (height * e.scale) + "px";
            node.css("-webkit-transform", translate + " rotate(" + ((newRotation) % 360) + "deg) scale(" + newScale + ")");
            
            node.attr("xrotation", newRotation);
            node.attr("xscale", newScale);
        } 
        catch (e) {
        
        }
    });
    
    n.bind("interactionStart", function(e){
        jQuery(this).addClass("interaction");
        
        var maxZindex = 1;
        var children = jQuery(this).parent().children('.pinchZoomable');
        children.each(function(){
            maxZindex = Math.max(maxZindex, 1 * jQuery(this).css("z-index"));
        });
        
        jQuery(this).css("z-index", ++maxZindex);
    });
    
    n.bind("interactionEnd", function(e){
        jQuery(this).removeClass("interaction");
    });
}


/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/PoolBoy.js */

/// JavaScript Document

var PoolBoy = Class.extend({
  init: function(parent) {
	
		if (!parent)
			parent = false;
			
		
		this.proxy = false;
		this.parent = parent;
		this.lastPool = "";
		this.loaded = false;	
		this.lastDocument = "";
		
		this.limit = 1000;
		this.offset = 0;
		this.numItems = 0;
		this.skavaFilter = false;
	}
}); 

PoolBoy.prototype.loadPool = function(pool, callback, type) {
	
	if (!type)
		type = "simple";
	
	this.callback = callback;
	

	
	/*
	if (this.lastPool == pool && this.loaded)
	{
		if (this.parent) {
			this.parent.poolContainer.trigger("poolDataLoaded");
		}
		this.callback();
		return;
	}
	*/
	
	// see if its in the cache..
	var cachePool = finder.getPoolCache().getPool(pool);

	if (cachePool) {
		if (cachePool != "") {
			// in load from cache..

			this.processPoolResults(jQuery.parseXML(cachePool));
			return;
		}
	}
	
	this.lastPool = pool;
	this.loaded = false;


	
	var url = pool.replace(/limit=(.*?)&/, "limit=" + this.limit + "&");
	url = url.replace(/offset=(.*?)&/, "offset=" + this.offset + "&");
	
	if (this.skavaFilter) {
		url = url + "&filter=" + escape(JSON.stringify(this.skavaFilter));
	}
	
	//url = "pool.xml";
	
	this.proxy = false;
	if (this.proxy)
		url = "proxy.php?url=" + escape(url);
	
	try {
		var poolBoyObj = this;
		skavaPoolLoadCallback = function(entries)
		{
			poolBoyObj.processPoolResultsJSON(entries);
		}
		url = url + "&callback=skavaPoolLoadCallback";
		getDataFromServer('id_blackfriday_pool', url) ;
	
	} 
	catch (e) {
		console.log("getDataFromServer Error", "using jQuery ajax instead")
	
		jQuery.ajax({
			type: "GET",
			url: url,
			dataType: "jsonp",
			//jsonpCallback: "skavaPoolLoadCallback",
			success: jQuery.proxy(this.processPoolResultsJSON, this)
		}); 

	}

	
}

PoolBoy.prototype.processPoolResults = function(document, status, xhr) {
	this.loaded = true;
	this.lastDocument = document;
	this.db = new TAFFY([]);
	this.parseDocument(document);
	
	// save this pool into the cache..
	try {
		xhr.responseText;
		finder.getPoolCache().updateCache(this.lastPool, xhr.responseText);
	} catch (e) { }
	
	try {
		this.callback();
	} catch(e) {  };
}

PoolBoy.prototype.processPoolResultsJSON = function(document, status, xhr) {
	this.loaded = true;
	this.lastDocument = document;
	this.db = new TAFFY([]);
	
	this.parseDocumentJSON(document);
	
	// save this pool into the cache..
	try {
		xhr.responseText;
		finder.getPoolCache().updateCache(this.lastPool, xhr.responseText);
	} catch (e) { }
	
	try {
		if (this.parent) {
			this.parent.poolContainer.trigger("poolDataLoaded");
		}
	} catch (e) {
		
	}
	
	try {
		this.callback();
	} catch(e) {  };
}

PoolBoy.prototype.parseDocumentJSON = function (document) {
	var db = this.db;
	var counter = 0;
	
	console.log("document from skava", document);
	this.numItems = document.totalEntries[0];

	
	if (!document.entries) {
		document.entries = [];
		document.entryStat = [];
	}
	
	var helper = new PoolHelper();
	
	for (var i =0; i < document.entries.length; i++) {
		
		me = document.entries[i];

		var entry=me.properties;
		
		entry.entryid = me.entryId;
		entry.label = me.title;
		entry.description = me.comment;
		entry.image_fullImage = me.fileUrl;
		entry.itemUrl = me.itemUrlyeah;
		//entry.voteCount = me.find("votecount").text();
		//entry.ranking = me.find("rankingd").text();
		
		// get the votes..
		try {
			entry.votes = 0;
			entry.votes = document.entryStats[i].numLikes;
		} catch (e) {
			// do nothing...
		}
		
		entry.pfeed_priceforfilters = 1 * entry.pfeed_priceforfilters;
		
		
		entry.swatches = [];
		try {
			var colors = jQuery.parseJSON(entry.pfeed_colorimage);
			for (j in colors) {
				if (colors[j][0] != "") {
					var swatch = {};
					swatch.title = j;
					swatch.swatchImage = colors[j][0];
					if (colors[j][1])
						swatch.productImage = colors[j][1].replace(/wid=(.*?)&/gi, "wid=%width%&").replace(/hei=(.*?)&/gi, "&");
					else 
						swatch.productImage = "";
					entry.swatches.push(swatch);
				}
			}
			
		} catch(e) {
			
		}
		
		entry.promotions = [];
		try {
			entry.promotions = jQuery.parseJSON(entry.pfeed_promotions);
			entry.promotionsText = entry.promotions.join(", ");
			entry.hasPromotions = entry.promotions.length > 0;
		} catch(e) {
			
		}
		
		if (entry.pfeed_shopcategory && !(entry.pfeed_shopcategory instanceof Array))
			entry.pfeed_shopcategory = entry.pfeed_shopcategory.split(",");
			
		if (entry.pfeed_productgroup && !(entry.pfeed_productgroup instanceof Array))
			entry.pfeed_productgroup = entry.pfeed_productgroup.split(",");
		
		helper.parseEntry(entry);
		
		
		
		entry.pool_insert_id = counter;
		db.insert(entry);
		
		counter++;
				
	}
}

PoolBoy.prototype.setLimit = function(limit) {
	this.limit = limit
}

PoolBoy.prototype.setOffset = function(offset) {
	this.offset = offset
}

PoolBoy.prototype.setSkavaFilter = function(filter) {
	this.skavaFilter = filter
}


PoolBoy.prototype.parseDocument = function (document) {
	var db = this.db;
	var counter = 0;
	jQuery(document).find("entry").each(function() {
		var entry = {};
		me = jQuery(this);
		
		entry.entryid = me.find("entryid").text();
		entry.label = me.find("label").text();
		entry.description = me.find("description").text();
		entry.image_fullImage = me.find("imageurl").text();
		entry.itemUrl = me.find("itemUrl").text();
		entry.voteCount = me.find("votecount").text();
		entry.ranking = me.find("rankingd").text();
		
		me.find("prop").each (function() {
			var name = jQuery(this).attr("name");
			var value = jQuery(this).text();
			switch (name) {
				case "pfeed_availability":
				case "pfeed_brand":
				case "pfeed_bvavgrating":
				case "pfeed_bvnumreviews":
				case "pfeed_bvtoprated":
				case "pfeed_id":
				case "pfeed_imageurl":
				case "pfeed_longdescription":
				case "pfeed_name":
				case "pfeed_price1":
				case "pfeed_price2":
				case "pfeed_price3":
				case "pfeed_priceforfilters":
				case "pfeed_saleprice":
				case "pfeed_retailprice":
				case "pfeed_shortdescription":
				case "pfeed_bvavgrating":
				case "pfeed_newarrival":
				case "promogroup":
				case "pfeed_look":
				case "pfeed_customtitle":
				case "pfeed_customdescription1":
				case "pfeed_display":
					entry[name] = value;
					break;
					
				case "pfeed_bvcomments":
				case "pfeed_bvcommentstitle":
					entry[name] = value.split("%,%").reverse();
					try {
						if (entry[name][0].trim == "")
							array_shift(entry[name]);
					} catch(e) { }
					break;
					
				default:
					entry[name] = value.split(",");
					break;
			}
		})
		
		entry.pfeed_priceforfilters = 1 * entry.pfeed_priceforfilters;
		
		entry.pool_insert_id = counter;
		db.insert(entry);

		counter++;
				
	});
}

PoolBoy.prototype.showFilteredResults = function (divToUpdate, templateName, filter)
{
	var items = false;
	

		for (i = 0; i < filter.length; i++) {
			
			if (!items) {
				if (filter[i].length == 0)
					items = this.db();
				else 
					items = this.db(filter[i]);
				
			}
			else {
				if (filter[i].length > 0)
					items = items.filter(filter[i]);
			}
		}
		
		if (filter.length > 0)
			items = items.get();
		else 
			items = this.db().get();
			

	try {
		jQuery(templateName).tmpl(items).appendTo(divToUpdate);
		jQuery(divToUpdate).append("<div style='clear: both;'></div>");
		
		
		jQuery("#finderContainer").trigger("poolLoaded");	
		jQuery(finder.getCurrentPage().parentDiv).trigger("poolLoaded");
		jQuery("#finderContainer").trigger("dataChanged");		
	} 
	catch (e) {
		
	}
	return items;
}

PoolBoy.prototype.getFilteredResults = function (filter)
{
	var items = false;
	

		for (i = 0; i < filter.length; i++) {
			
			if (!items) {
				if (filter[i].length == 0)
					items = this.db();
				else 
					items = this.db(filter[i]);
				
			}
			else {
				if (filter[i].length > 0)
					items = items.filter(filter[i]);
			}
		}
		
		if (filter.length > 0)
			items = items;
		else 
			items = this.db();
			

	return items;
}

PoolBoy.prototype.sort = function (filter) {

	this.db.sort(filter);
}



var PoolCache = Class.extend({
  init: function() {
	
		this.available = true;
		if (!shouldCache || !window['localStorage']) {
			this.available = false;
			return;
		}
		
		this.storage = window['localStorage'];
		
		this.cacheLength = 10; //minutes;
	
	},
	
	updateCache: function(name, pool) {
		if (!this.available)
			return false;
			
		
		this.storage.setItem("TIMESTAMP_" + name, new Date().getTime());

		
		this.storage.setItem("POOL_" + name, pool);
	},
	
	getPool: function(name) {
		
		
		if (!this.available)
			return false;
		
		var timestamp = this.storage.getItem("TIMESTAMP_" + name);

		
		
		if (!timestamp)
			return false;
			
			
			
		timestamp = timestamp * 1;
			

			
		if (timestamp < (new Date().getTime()) - this.cacheLength * 60 * 60 * 1000) {
			// too old..
			// try to remove this pool from the cache..
			this.storage.removeItem("POOL_" + pool);
			this.storage.removeItem("TIMESTAMP_" + pool);
			return false;
		}
		
		
		
		var pool = this.storage.getItem("POOL_" + name);
		if (pool != null) {
			console.log("pool found");
			return pool;
		} else { 
			console.log("pool was null");
			return false;
		}
	}
});




/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/SkavaInterop.js */

function sharePopupCloseCallback() {
	jQuery("#finderContainer").trigger("popupsClosed");
}

var SkavaInterop = Class.extend({



    init: function(){
    
		var self = this;
	
		this.votedItems = [];
    	this.wishList = new SkavaInteropWishList();
		this.internationalPricing = new SkavaInteropInternationalPricing();
		

		this.initializeWidgets("BODY");
		
		
		// setup event listeners...
		jQuery('[role="skavaInteropShare"]').live({
			click: function(event) {
				event.preventDefault();
				self.share(finder.getConfig().sharing[jQuery(this).attr("config")]);
			}
		});
		
		jQuery('[role="skavaInteropComment"]').live({
			click: function(event) {
				event.preventDefault();
				self.comment({});
			}
		});
		
		jQuery('[role="skavaInteropQuickView"]').live({
			click: function(event) {
				event.preventDefault();
				self.quickView({
					productId: jQuery(this).attr("productId")
				});
				
			}
		});
		
		jQuery("#finderContainer").bind("deeplinkChanged", function() {
			
			// on change...
			// look to track...
			
			
		});
		
		// check voted items...
		jQuery("#finderContainer").bind("poolPageChanged", function() {
			for (var i = 0; i < self.votedItems.length; i++) {
				
				jQuery('.productListing[entryId="' + self.votedItems[i] + '"]').addClass("voted");
			}
			
		});
		
		jQuery('[role="skavaInteropShareFacebook"]').live({
			click: function(event) {
				event.preventDefault();
				self.shareFacebook(finder.getConfig().sharing[jQuery(this).attr("config")]);
			}
		});
		
		jQuery('[role="skavaInteropSharePinterest"]').live({
			click: function(event) {
				event.preventDefault();
				self.sharePinterest(finder.getConfig().sharing[jQuery(this).attr("config")]);
			}
		});
		
		jQuery('[role="skavaInteropShareTwitter"]').live({
			click: function(event) {
				event.preventDefault();
				self.shareTwitter(finder.getConfig().sharing[jQuery(this).attr("config")]);
			}
		});
		
		jQuery('[role="skavaInteropShareEmail"]').live({
			click: function(event) {
				event.preventDefault();
				self.shareEmail(finder.getConfig().sharing[jQuery(this).attr("config")]);
			}
		});
		
		jQuery('[role="skavaInteropSendToMyPhone"]').live({
			click: function(event) {
				event.preventDefault();
				self.sendToMyPhone(finder.getConfig().sharing[jQuery(this).attr("config")]);
			}
		});	
		
		jQuery('[role="skavaInteropPageTracking"]').live({
			click: function(event) {
				var tracking = jQuery(this).attr("tracking");
				tracking = tracking.split(",");
				var obj = {
					pageid: tracking[0],
					catid: tracking[1]
				}
		
				self.handleTracking(finder.getCurrentPage(), obj);
			}
		})
		
		
		
		jQuery('[role="skavaInteropVote"]').live({
			click: function(event) {
				event.preventDefault();
				event.stopPropagation();
				var item = jQuery(this).parents("[entryId]");
				
				var productPool = item.parents(".poolContainer").data("productPool");
				console.log("PRODUCT POOL", productPool);
				
				if (item.hasClass("voted") || finder.skava.beenVotedOn(item.attr("entryId")))
					return;
				else
					item.addClass("voted"); 
				
                var params = {
                
                    entryId: item.attr("entryId"),
                    onSuccess: function(retval1, retval2, code, message){
                        console.log("voting success", retval1, retval2, code, message)
						
						var newMessage;
						
						var numVotes = 1 * retval1;
						
						if (numVotes == 1) {
							newMessage = "1 LOVES THIS &middot;";
						} else {
							newMessage = numVotes + " LOVE THIS &middot;";
						}
						
						try {
							var db = productPool.poolWorker.db({entryid: 1 * item.attr("entryId")});
							console.log("vote update", db, retval1, item.attr("entryId"));
							db.update({
								'votes': 1 * retval1,
								'voteCount': 1 * retval1
							});
							console.log("vote updated", db, retval1,  1 * item.attr("entryId"));
						} catch(e) {
							console.log("Couldn't update vote count in DB");
						}
						
						jQuery(".voteCount", item).html(newMessage);
						item.addClass("voted");
						
						productPool.poolContainer.trigger({type: "skavaVote", votes: numVotes, entryId: item.attr("entryId"), productId: item.attr("productId")});
                    },
                    onCancel: function(){
                    },
					onFailure: function(){
                    }
                
                }
				
				self.vote(params);
				
			}
		})


		
		this.nullObject = {
	        onOpCancelled: function() { },
	        onOpCompleted: function() { },
	        onSuccess: function() { },
	        onFailure: function() { },
	        PercentLoaded : function() {return 100;}
	    }
		
    
    },
	
	beenVotedOn: function(entryId) {
		return jQuery.inArray(entryId, this.votedItems) > -1;
	},
	
	initializeWidgets: function(container) {
	
		var self = this;
		jQuery('[role="skavaInteropLike"]', container).each(function() {
			self.showFBLikeFrame( {
				containerId: jQuery(this).attr("id"),
				url: finder.getConfig().webRoot + jQuery(this).attr("url")
			});
		});
		
		jQuery('[role="skavaInteropWallWidget"]', container).each(function() {
			
			self.showFBWallWidget( {
				containerId: jQuery(this).attr("id"),
				url: jQuery(this).attr("url")
			});
		});
		
		jQuery('[role="skavaInteropWallFeed"]', container).each(function() {
			showWallFeed('wallfeed', 0, 0, 0, 0, 10, jQuery(this)[0])
		});
		
		jQuery('[role="skavaInteropFBTopRatedHorizontal"]', container).each(function() {
			try {
				showFbTopList(jQuery(this).attr("id"));
			} catch(e) {
				
			}
		});
		
		jQuery('[role="skavaInteropFBTopRatedVertical"]', container).each(function() {
			try {
				showFbTopList(jQuery(this).attr("id"), true);
			} catch(e) {
				
			}
		});  
	},
	
	handleTracking: function(page, vars) {
		
		try {
			(function() {
				
				var pageid = vars.pageid;
				var catid = vars.catid;
				
				if (finder.isTablet()) {
					if(vars.pageid.indexOf('-ipad')==-1) pageid = vars.pageid.replace("ca-so", "ca-so-ipad");
					if(vars.catid.indexOf('-ipad')==-1) catid = vars.catid.replace("ca-so", "ca-so-ipad");
				}
				
				console.warn("Tracking: ", pageid, catid);
				registerPageViewEx(pageid, catid);
				
			})();
		} catch(e) {
			console.log(e.message);
		}
		
	},
	
	handleTrackingElement: function(page, vars) {
		
		try {
			(function() {
				console.warn("Element Tracking: ", vars.elementid);
				registerPageViewEx(vars.pageid, vars.catid);
				
			})();
		} catch(e) {
			console.log(e.message);
		}
		
	},
    
    
    share: function(params){
    
        var defaultParams = {
            mailerIds: {
                staging: 123,
                production: 123
            },
            url: "http://www.macys.com",
            icon: "http://www.macys.com/logo.jpg",
            facebook: {
                title: "This is the facebook Title",
                description: "This is the facebook description"
            },
            twitter: "this is the tweet",
			pinterest: {
				image: assetsDirectory + "images/fb_share_icon.JPG",
				desc: "this is the pinterest Description"
			},
			position: finder.getConfig().sharing.popupPosition
        };
        
        jQuery.extend(true, defaultParams, params);
        
        console.log(defaultParams);
        var mailerId = defaultParams.mailerIds.staging;
        if (isProduction) 
            mailerId = defaultParams.mailerIds.production;   
        
        try {
            showSharePopup(null, defaultParams.facebook.title, defaultParams.facebook.description, defaultParams.icon, defaultParams.url, mailerId, null, null, 180, null, defaultParams.twitter, defaultParams.position)
			jQuery("#finderContainer").trigger("popupsOpened");
        } 
        catch (e) {
            console.log("Site share not available", defaultParams);
			
        }
		
		jQuery("#finderContainer").trigger("popupsOpened");
		
        
    },
    
    comment: function(params){
    
        var defaultParams = {
            num: 5,
			commentId: 0
        }
        
        jQuery.extend(true, defaultParams, params);
        
        try {
            //showFBComment(true, defaultParams.num, finder.getConfig().comment.position[0], finder.getConfig().comment.position[1])
			fgs.showFBCommentFrameEx('fbcomments', 0, defaultParams.num, finder.getConfig().comment.position[0], finder.getConfig().comment.position[1], 800, null, 800);
			jQuery("#finderContainer").trigger("popupsOpened");
        } 
        catch (e) {
            console.log("Couldn't show the comment box", e);
        }
		
		jQuery("#finderContainer").trigger("popupsOpened");
        
    },
	
    sendToMyPhone: function(params){
        var defaultParams = {
			phone: {
				title: "SMS Title",
				message: "SMS MESSAGE",
				mailerIds: {
					staging: 407,
					production: 378
				}
			}
        };
        
        jQuery.extend(true, defaultParams, params);
		
		var mailerId = defaultParams.phone.mailerIds.staging;
        if (isProduction) 
            mailerId = defaultParams.phone.mailerIds.production;  
        
        try {
            sendMessage(this.nullObject, defaultParams.phone.title, defaultParams.phone.message, defaultParams.icon, defaultParams.url, 0, true)
			jQuery("#finderContainer").trigger("popupsOpened");
        } 
        catch (e) {
            console.log("phone share not available", defaultParams);
        }
		
		jQuery("#finderContainer").trigger("popupsOpened");
    },
	
	shareFacebook: function(params){
        var defaultParams = {
			facebook: {
                title: "facebook title",
                description: "facebook description"
            }
        };
        
        jQuery.extend(true, defaultParams, params);
        
        try {
            shareFb(this.nullObject, defaultParams.facebook.title, defaultParams.facebook.description, defaultParams.icon, defaultParams.url)
			jQuery("#finderContainer").trigger("popupsOpened");
        } 
        catch (e) {
            console.log("facebook share not available", defaultParams);
        }
		
		jQuery("#finderContainer").trigger("popupsOpened");
    },
	
	sharePinterest: function(params){
        var defaultParams = {
			pinterest: {
				image: "",
				desc: ""
			}
        };
        
        jQuery.extend(true, defaultParams, params);
        
        try {
            sharePinIt(defaultParams.url, defaultParams.pinterest.image, defaultParams.pinterest.desc)
			jQuery("#finderContainer").trigger("popupsOpened");
        } 
        catch (e) {
            console.log("pinterest share not available", defaultParams);
        }
		
		jQuery("#finderContainer").trigger("popupsOpened");
    },
	
	shareTwitter: function(params){
        var defaultParams = {
			twitter: "twitter message",
			url: "http://www.macys.com"
        };
        
        jQuery.extend(true, defaultParams, params);
        
        try {
            shareTwitterV2(this.nullObject, defaultParams.twitter, "", defaultParams.icon, defaultParams.url)
			jQuery("#finderContainer").trigger("popupsOpened");
        } 
        catch (e) {
            console.log("twitter share not available", defaultParams);
        }
		
		jQuery("#finderContainer").trigger("popupsOpened");
    },
	
	shareEmail: function(params) {
        var defaultParams = {
			mailerIds: {
				staging: 388,
				production: 388
			}
        };
        
        defaultParams = jQuery.extend({}, defaultParams, params);
        
		var mailerId = defaultParams.mailerIds.staging;
        if (isProduction) 
            mailerId = defaultParams.mailerIds.production;  
		
        try {
            showEmailPopup(this.nullObject, "", "", defaultParams.icon, defaultParams.url, mailerId);
			jQuery("#finderContainer").trigger("popupsOpened");
        } 
        catch (e) {
            console.log("email share not available", defaultParams);
        }
		
		jQuery("#finderContainer").trigger("popupsOpened");
    },
    quickView: function(params){
    
        var defaultParams = {
            productId: ""
        }
        
        jQuery.extend(true, defaultParams, params);
		
		console.log("quickview called", defaultParams);
        
        showAddToBag(null, 6, null, 0, defaultParams.productId, finder.getConfig().quickView.bgColor, finder.getConfig().quickView.catId, false, finder.getConfig().quickView.position, null, null, null)
		jQuery("#finderContainer").trigger("popupsOpened");
    },
    
    showFBLikeFrame: function(params){
    
        var defaultParams = {
            containerId: "",
            url: "http://www.macys.com"
        }
        
        jQuery.extend(true, defaultParams, params);
        
        try {
            fgs.showFBLikeFrame("blankFrmeId", false, defaultParams.url, 0, 0, "top", "left", null, defaultParams.containerId, {
                position: "relative"
            });
        } 
        catch (e) {
            console.log("Could not show FB Like Frame", e);
        }
    },
    
    showFBWallWidget: function(params){
    
        var defaultParams = {
            containerId: "",
            url: "http://www.macys.com"
        }
        
        jQuery.extend(true, defaultParams, params);
        
        try {
        	console.log(defaultParams.url);
        	fgs.showFBLikeBox("blankFrmeId", false, defaultParams.url, 255, 566, 255, 566, true, true, false, 7, 11, 'left', 'top', 400, defaultParams.containerId)

            /*fgs.showFBLikeFrame("blankFrmeId", true, defaultParams.url, 0, 0, "top", "left", null, defaultParams.containerId, {
                position: "relative"
            });
            */
        } 
        catch (e) {
            console.log("Could not show FB Like Frame", e);
        }
    },
    
    //fgs.showFBLikeBox(idFrame, useXFBMLLike, urlToLike, lbcWidth, lbcHeight, lbWidth, lbHeight, show_faces, stream, header, xoffset, yoffset, xanchor, yanchor, zPos, containerEl)
	
	closePopups: function() {
		try {
			closePopup();
			jQuery("#finderContainer").trigger("popupsClosed");
		} catch (e) {
			console.log("Could not call closePopup");
		}
	},
	
	vote: function(params) {
		
		var defaultParams = {
			
			entryId: "",
			onSuccess: function(retval1, retval2, code, message) {console.warn("callback not specified from voting")},
			onCancel: function() {}
			
		}
		
		jQuery.extend(true, defaultParams, params);
		
		
		if (finder.skava.beenVotedOn(1 * defaultParams.entryId))
			return;
		finder.skava.votedItems.push(1 * defaultParams.entryId);
		
		var voteCallback = function(respcode, respmsg, opcode, retval1, retval2) {
			console.log("in callback", respcode, respmsg, opcode, retval1, retval2);
			if (respmsg == "Success") {
				defaultParams.onSuccess(retval1, retval2, respcode, respmsg);
			} else {
				defaultParams.onFailure(respcode, respmsg, opcode);
			}
			
			try {
				jQuery("OBJECT", finder.getCurrentPage().parentDiv).each(function() {
					
					console.warn(retval1, retval2, respcode, respmsg);
					this.sendVotingData([{label: "",entryid:defaultParams.entryId, votes:retval1}]);
					});
			} catch (e) {
				console.log("Tried forwarding the vote callback into flash...", e);
			}
		}

		var swfVoteFor =
		{
		    onOpCancelled: defaultParams.onCancel,
		    onOpCompleted: voteCallback,
		    PercentLoaded : function() {return 100;}
		};
		
		try {
			voteForEx(swfVoteFor, defaultParams.entryId, "Macy's");
		} catch(e) {
			console.log("Couldn't call the voting function", e, defaultParams, swfVoteFor);
		}
		
		
	}

});



var SkavaInteropInternationalPricing = Class.extend({
	
	
	
	init: function() {
		
		var self = this;
		this.isInternational = false;
		
		var obj = {
			onInitializeInternational: function(available, response) {
				console.log("international pricing is available", available);
				if (available) {
					self.isInternational = true;
				} else {
					self.isInternational = false;
				}
			},
			onUpdateInternational: function(response) { 
				console.log(response, "response from international");
				
				for (i in response.internationaldetail) {
					var item = jQuery(".productListing[productId='" + i + "']");
					if (response.internationaldetail[i].shippingavailability == "N") {
						jQuery(".price1", item).html("Not available for shipping");
						jQuery(".price2", item).html("");
						jQuery(".price3", item).html("");
					}
					else {
						jQuery(".price1", item).html(response.internationaldetail[i].pfeed_price1);
						jQuery(".price2", item).html(response.internationaldetail[i].pfeed_price2);
						jQuery(".price3", item).html(response.internationaldetail[i].pfeed_price3);
					}
				}
						
			}
		}
		
		
        setTimeout(function(){
            try {
                initializeInternational(obj);
            } 
            catch (e) {
                console.log("Could not initialize the international pricing...", e);
            }
        }, 2000);
		
		
		
		jQuery("#finderContainer").bind("poolPageChanged", function() {
			
			// don't process this if we are not international...
			if (!self.isInternational) {
				return;
			}
			
			var productIds = [];
			
			jQuery(".productListing[productId]:visible").each(function() {
				productIds.push(jQuery(this).attr("productId"));
			});
			
			if (productIds.length == 0)
				return;
			
			try {
				getInternationalDetails(productIds.join(","));
			} catch (e) {
				console.log("Couldn't get international procing details", e);
			}
			
		});
		
		
		
	}
});


var SkavaInteropWishList = Class.extend({
	
	init: function() {},
	
	initialize: function(callback) {
		
		var self = this;
		
		self.items = [];
		
		var myCallback;
		if (!callback)
			myCallback = function(name, num, items, fbImage) {}
		else 
			myCallback = callback;

		var callbackObj = {
			onOpCompleted: function(code, msg, opcode, retval1, retval2) {},
			onUpdateWishList: function(name, num, items, fbImage) {

				console.log("in wishlist callback", name, num, items, fbImage);
				self.items = items;
				self.name = name;
				self.fbImage = fbImage;
				
				jQuery("[role='skavaInteropWishListCount']").html(num);
				
				self.checkProducts();
				
				myCallback(name, num, items, fbImage);
			}
		}
		
		jQuery("#finderContainer").bind('poolPageChanged', function() {
			self.checkProducts();
		});
		
		try {
			(function() { initializeWishList(callbackObj, 211, 200, null, true); })();
		} catch (e) {
			console.log("Wish list - initialization error", e);
		}
		console.log("Wish list initialized");
		
		// attach event handlers...
		
		jQuery('[role="skavaInteropWishListSignIn"]').click(function(event) {
			console.log("in login");
			self.showLogin();
			
			event.preventDefault();
			event.stopPropagation();
		});
		
		jQuery('[role="skavaInteropWishListSignOut"]').live ("click", function(event) {
			console.log("in logout");
			self.doLogout();
			
			event.preventDefault();
			event.stopPropagation();
		});
		
		jQuery('[role="skavaInteropWishListLauncher"]').live("click", function(event) {
			console.log("in open wishlist");
			self.show();
			
			event.preventDefault();
			event.stopPropagation();
		});
		
		jQuery('[role="skavaInteropWishListAdder"]').live("click", function(event) {

			console.log("in add to wishlist");
			
			var product = jQuery(this).parents(".productListing");
			self.add(product.attr("productId"));
			
			event.preventDefault();
			event.stopPropagation();
		});
		
		
	},
	
	checkProducts: function() {
		jQuery(".productListing").removeClass("inWishlist");
		for (i = 0; i < this.items.length; i++)
		{
			jQuery(".productListing[productId='" + this.items[i] + "']").addClass("inWishlist");
		}
	},
	
	add: function(productId) {
		try {
			addToWishList(productId);
		} catch (e) {
			console.log("Wish List - Could not add to wish list", productId, e);
		}
	},
	
	inWishlist: function(productId) {
		return jQuery.inArray(productId, this.items) > -1;
	},
	
	show: function() {
		try {
			showWishList(49, 27);
		} catch (e) {
			console.log("Wish List - Could not show wish list", e);
		}
	},
	
	getCount: function() {
		try {
			getWishListCount();
		} catch (e) {
			console.log("Wish List - Could not get wish list count", e);
		}
	},
	
	showLogin: function() {
		try {
			showLogin();
		} catch (e) {
			console.log("Wish List - Could not show login", e);
		}
	},
	
	doLogout: function() {
		try {
			doLogout();
		} catch (e) {
			console.log("Wish List - Could not show logout", e);
		}
	},
	
	showInfo: function() {
		try {
			showWishlistInfoOverlay(1);
		} catch(e) {
			console.log("Tried to call the wishlist info overlay");
		}
	}
		
	
	
});




/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/SkavaInteropBridal.js */

var SkavaInteropBridal = Class.extend({
	
	init: function() {
		
		this.products = false;
		this.user = false;
		
		var self = this;
		
		jQuery('[role="skavaInteropBridalSignIn"]').click(function(event) {
			console.log("in login");
			self.showLogin();
			
			event.preventDefault();
			event.stopPropagation();
		});
		
		jQuery('[role="skavaInteropBridalSignOut"]').live ("click", function(event) {
			console.log("in logout");
			self.doLogout();
			
			event.preventDefault();
			event.stopPropagation();
		});
		
		jQuery('[role="skavaInteropBridalLauncher"]').live("click", function(event) {
			console.log("in open bridal");
			self.show();
			
			event.preventDefault();
			event.stopPropagation();
		});
		
		jQuery('[role="skavaInteropBridalAdder"]').live("click", function(event) {

			console.log("in add to wishlist");
			
			var product = jQuery(this).parents(".productListing");
			self.add(product.attr("productId"));
			
			event.preventDefault();
			event.stopPropagation();
		});
		
		
		this.callbacks = {
			
			onOpCompleted: function(code, msg, opcode, retval1, retval2) {}, 
			afterProcess: function(actionName, response) {
				
				console.log("in brial response", actionName, response);
				finder.skava.bridal.lastResponse = response;
				response = JSON.parse(response);
				if (actionName == "signin" || actionName == "getsignedinuser") {
					finder.skava.bridal.user = response.user;
					jQuery("#finderContainer").trigger("bridalSignInStateChanged");
				}
				
				if (actionName == "addtomylist") {
					finder.skava.bridal.products = [];
					finder.skava.bridal.user.numitems = response.entries.size;
					jQuery("#finderContainer").trigger("bridalProductsUpdated");
				}
				
				
			}
		}
		
		this.isSignedIn();
		
	},
	
	isSignedIn: function() {
		
		try {
			WEDDINGSHOP.isSignedIn(this.callbacks)
		} catch(e) {
			console.log("Couldn't check signin");
		}
		
	},
	
	checkProducts: function() {
		jQuery(".productListing").removeClass("inWishlist");
		for (i = 0; i < this.items.length; i++)
		{
			jQuery(".productListing[productId='" + this.items[i] + "']").addClass("inWishlist");
		}
	},
	
	add: function(productId) {
		try {
			WEDDINGSHOP.addItemsToList(this.callbacks, productId)
		} catch (e) {
			console.log("bridal - Could not add to bridal", productId, e);
		}
	},
	
	inWishlist: function(productId) {
		return jQuery.inArray(productId, this.items) > -1;
	},
	
	show: function() {
		try {
			
			var obj = {
				onOpCompleted: function() {},
				onOpCanceled: function() {}
			}
			
			wedshopShowBridalPartyOverlay(obj, 0, 0)
		} catch (e) {
			console.log("Bridal Party - Could not show Bridal Party", e);
		}
	},
	
	getCount: function() {
			
		if (this.user) {
			return this.user.numitems;
		}
		
		return 0;
	},
	
	showLogin: function() {
		try {
			WEDDINGSHOP.showSignIn(null, null, null, this.callbacks)
		} catch (e) {
			console.log("Bridal - Could not show login", e);
		}
	},
	
	doLogout: function() {
		try {
			wedshopSignout();
			this.user = false;
			jQuery("#finderContainer").trigger("bridalSignInStateChanged");
		} catch (e) {
			console.log("Bridal - Could not show logout", e);
		}
	}
	

		
	
	
});


/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/TrendBrowser.js */

var TrendBrowser = Class.extend({



    init: function(container, config){
    
		this.container = container;	
		this.config = config.config;	
		this.videoUrl = config.videoUrl;
    	
		this.container.addClass("TrendBrowser");
		
		var self = this;
		
		// create elements...
		this.bigImageContainer = jQuery("<div class='trendImageContainer'></div>").appendTo(this.container);
		this.thumbContainer = jQuery("<div class='trendThumbContainer'></div>").appendTo(this.container);
		this.copyContainer = jQuery("<div class='trendCopyContainer'></div>").attr("role", "skavaInteropQuickView").appendTo(this.container);
		
		this.videoContainer = jQuery("<div class='trendVideoContainer'></div>").appendTo(this.container);

		jQuery("<img src='" + config.videoImage + "' border='0'>").appendTo(this.videoContainer);
		jQuery("<img src='" + finder.getConfig().assetsDirectory + "images/playvideo.png' class='playVideoButton' border='0'>").appendTo(this.videoContainer);
		
		this.videoContainer.hover (function() {
			jQuery(this).addClass('hover');
		}, function() {
			jQuery(this).removeClass('hover');
		}).click(function() {
			finder.getCurrentPage().showVideo(self.videoUrl);
		})
		
		this.copyContainer.hover(function() {
			jQuery(this).addClass("hover");
		}, function() {
			jQuery(this).removeClass("hover");
		}).click(function() {
			// do tracking..
			finder.getCurrentPage().trackBuyNow();
		})
		
		
		// do the image preloading...
		// preload all the thumbs... and the first look image...
		var images = [];
		for (i in this.config)
		{
			images.push(this.config[i].thumbUrl);
		}
		for (i in this.config)
		{
			images.push(this.config[i].imageUrl);
			break;
		}
	
		this.preloader = new PreloadHandler(function() {
			self.fillThumbs();
		}, images);	
		this.preloader.start();
	
    },
	
	fillThumbs: function() {
		
		for (i in this.config) {
			var look = this.config[i];
			var img = new Image();
			jQuery(img).attr("look_id", i).css("opacity", "0").appendTo(this.thumbContainer);
			img.src = look.thumbUrl;
		}
		
		var pageBuild = new AnimationEngine();
		
		var before = {
			opacity: 0,
			x: 50
		}
		
		var after = {
			opacity: 1,
			x: 00
		}
		
		pageBuild.animate(jQuery("IMG", this.thumbContainer), before, after, {easing: 'easeOutQuint', duration: 1000});
		
		var self = this;
		jQuery("IMG", this.thumbContainer).click(function() {
			if (jQuery(this).hasClass("selected"))
				return;
			self.showLook(jQuery(this).attr("look_id"));
		})
		
		setTimeout(function() {
		jQuery(jQuery("IMG", self.thumbContainer)[0]).trigger("click");
		}, 2000);
		
	},
	
	showLook: function(look) {
		jQuery("IMG", this.thumbContainer).removeClass("selected");
		jQuery("IMG[look_id='" + look + "']", this.thumbContainer).addClass("selected");
		
		var thisLook = look;
		var self = this;
		
		// start preloading the image...
		var img = new Image();
		img.onload = function() {
			self.lookImageLoaded(look, this);
		}
		img.src = this.config[look].imageUrl;
	},
	
	lookImageLoaded: function (look_id, img) {
		
		this.manageImage(look_id, img);
		this.manageCopy(look_id);
		
	},
	
	manageCopy: function(look_id) {
		
		var config = this.config[look_id];
		
		var products = []
		var productIds = [];
		for (i in config.products) {
			
			productIds.push(config.products[i].productId);
			
			if (!config.products[i].display)
				continue;
			
			if (!config.products[i].description)
				config.products[i].description = [];
			
			config.products[i].formattedPrice = "$" + config.products[i].price.toFixed(2);
			config.products[i].formattedDescription = config.products[i].description.join("<BR>");
			
			products.push(config.products[i]);			
		}
		
		console.log(products, config);
		
		var productsHtml = jQuery("#trendBrowserTemplate").tmpl(products);
		
		var styleAlert = jQuery("<div class='product styleAlert'></div>");
		jQuery("<div class='alertTitle'>Style Alert:</div>").appendTo(styleAlert);
		jQuery("<div class='alert'>" + config.styleAlert + "</div>").appendTo(styleAlert);
		
		var button = jQuery("<div class='product buyButton'><img src='" + finder.getConfig().assetsDirectory + "images/trends/buyNowYellow.png'></div>");
		
		jQuery("DIV.product", productsHtml).css("opacity", "0");
		
		
		
		// get the existing items in this container..
		var existingHtml = jQuery("DIV.product", this.copyContainer);
		
		
		var pageBuild = new AnimationEngine();
		
		var scrollOutBefore = {
			opacity: 1,
			y: 0
		}
		
		var scrollOutAfter = {
			opacity: 0,
			y: -100
		}
		
		var scrollInBefore = {
			opacity: 0,
			y: 100
		}
		
		var scrollInAfter = {
			opacity: 1,
			y: 0
		}
		
		pageBuild.animate(existingHtml, scrollOutBefore, scrollOutAfter, {easing: "easeOutQuint", duration: 750});
		
		var self = this;
		setTimeout(function() {
			self.copyContainer.attr("productId", productIds.join(","));
			jQuery("DIV.product", self.copyContainer).remove();
			productsHtml.appendTo(self.copyContainer);
			
			styleAlert.appendTo(self.copyContainer);
			button.appendTo(self.copyContainer);
			pageBuild.animate(jQuery("DIV.product", self.copyContainer), scrollInBefore, scrollInAfter, {easing: "easeOutQuint", duration: 1500});
		}, 750);
		
		
	},
	
	manageImage: function(look_id, img) {
		var image = jQuery(img);
		image.attr("look_id", look_id);
		image.css ( {
			"-webkit-transform-origin": "0% 0%",
			"-webkit-transform": "rotate3d(0,1,0, 90deg)"
		})
		
		// get any existing images in this container..
		var existingImages = jQuery("IMG", this.bigImageContainer);
		
		this.bigImageContainer.append(image);
		
		var pageBuild = new AnimationEngine();
		
		// rotate the existing ones out...
		// and the new on in...
		
		var rotateOutBefore = {
			rotateY: 00
		}
		
		var rotateOutAfter = {
			rotateY: -90
		}
		
		var rotateInBefore = {
			rotateY: 90,
			opacity: 0
		}
		
		var rotateInAfter = {
			rotateY: 0,
			opacity: 1
		}
		
		existingImages.css("z-index", 100);
		image.css("z-index", 190);
		
		pageBuild.animate(existingImages, rotateOutBefore, rotateOutAfter, {easing: "easeOutQuint", duration: 2000});
		pageBuild.animate(image, rotateInBefore, rotateInAfter, {easing: "easeOutQuint", duration: 2000});
		
		var self = this;
		
		setTimeout(function() {
			// remove all images that are not the currently selected ones...
			// get selected image..
			var look_id = jQuery("IMG.selected", self.thumbContainer).attr("look_id");
			jQuery("IMG[look_id!='" + look_id + "']", self.bigImageContainer).remove(); 
		}, 2000);
		
		
	}


	
	
});
	

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/animation.js */
var cssTimingFunctions = {

	easeInQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
	easeOutQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
	easeInOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
	easeInCubic: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
	easeOutCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
	easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
	easeInQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
	easeOutQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
	easeInOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
	easeInQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
	easeOutQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
	easeInOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
	easeInSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
	easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
	easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
	easeInExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
	easeOutExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
	easeInOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
	easeInCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
	easeOutCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
	easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)"
	 
}


var AnimationEngine = Class.extend ( {
	
	
	init: function() {
		
	},
	
	removeAnimations: function(elem) {
		elem.css({
			"-webkit-transition": "none",
			"-moz-transition": "none",
			"-o-transition": "none",
			"-ms-transition": "none"
		});
		
		elem.css({
			"-webkit-transition-duration": "0s",
			"-webkit-transition-delay": "0s",
			"-moz-transition-duration": "0s",
			"-moz-transition-delay": "0s",
			"-o-transition-duration": "0s",
			"-o-transition-delay": "0s",
			"-ms-transition-duration": "0s",
			"-ms-transition-delay": "0s"
		});
	},
	
	animate: function(item, from, to, params) {
		
		var self = this;
		
		item = jQuery(item);
		
		var defaultParams = {
			easing: "ease-in",
			delay: 0,
			delayEach: 100,
			duration: 500,
			forceJQuery: false
		};
		
		params = jQuery.extend({}, defaultParams, params);
		
		var useJQuery = true;
		if (Modernizr.csstransitions && !params.forceJQuery)
		{
			useJQuery = false;
		}
		
		if (!useJQuery) {
			switch (params.easing) {
				case "ease-in":
				case "easein":
				case "ease-out":
				case "easeout":
				case "linear":
				case "ease-in-out":
				case "easeinout":
					// do nothing..
					break;
					
				default:
					if (params.easing.indexOf("cubic-bezier") == -1) {
						if (!cssTimingFunctions[params.easing]) 
							params.forceJQuery = true;
						else 
							params.easing = cssTimingFunctions[params.easing];
					}
			}
		}
		
		// idea behind animations is to clone the object..
		// position it above the original object...
		// hide the original...
		// then animate the clone..
		// after animation.. hide the clone.. and make the orignial visible..
		// this should be the jQuery method.  For CSS transitions...
		// no cloning.. just transform the original..
		
		
		
		var normalizedExpressions = this.prepare(item, from, to, useJQuery);
		
		if (useJQuery)
		{
			// wrap all elements into a div...
			this.addWrappers(item);
			(function() {
				item.each(function(i) {
					console.log("jQuery");
					jQuery(this).stop()
								.css(normalizedExpressions.from)
								.delay(params.delay + (params.delayEach * i))
								.animate(normalizedExpressions.to, params.duration, params.easing);
					
				});
			})();
		} else {
			(function() {
				
				item.each(function(i) {
					self.cssTransform(	this, 
										normalizedExpressions.from, 
										normalizedExpressions.to, 
										params.duration, 
										params.delay + (params.delayEach * i), 
										params.easing
									);
				});
				
			})();
		}
		
		
		
	},
	
	cssTransform: function(elem, before, after, timing, delay, easing) {
		
		var elem = jQuery(elem);
		
		if (!easing)
			easing = "ease-in-out";
			
		if (!timing)
			timing = ".5s"
			
		if (!delay)
			delay = "0s"
			
		// reset all animation attributes..
		elem.css({
			"-webkit-transition-duration": "0s",
			"-webkit-transition-delay": "0s",
			"-moz-transition-duration": "0s",
			"-moz-transition-delay": "0s",
			"-o-transition-duration": "0s",
			"-o-transition-delay": "0s",
			"-ms-transition-duration": "0s",
			"-ms-transition-delay": "0s"
		});
		
		// apply before items...
		elem.css(before);
		
		setTimeout(function() {
			elem.css({
				"-webkit-transition-duration": timing+"ms",
				"-webkit-transition-delay": delay+"ms",
				"-webkit-transition-timing-function": easing,
				
				"-moz-transition-duration": timing+"ms",
				"-moz-transition-delay": delay+"ms",
				"-moz-transition-timing-function": easing,
				
				"-o-transition-duration": timing+"ms",
				"-o-transition-delay": delay+"ms",
				"-o-transition-timing-function": easing,
				
				"-ms-transition-duration": timing+"ms",
				"-ms-transition-delay": delay+"ms",
				"-ms-transition-timing-function": easing
			});
			elem.css(after);
		}, 10);
		
	},
	
	prepareItems: function(items) {
		this.addWrappers(items)	
	},
	
	addWrappers: function(item) {
		
		var data = [];

		item.each(function() {
				var thisItem = jQuery(this);
				
				if (thisItem.hasClass("hasWrapper"))
					return;

				var size = thisItem.size();
				var position = thisItem.position();
				
				data.push({'size': size, 'position': position});
			});
			
		item.each(function() {
			var thisItem = jQuery(this);
			if (thisItem.hasClass("hasWrapper"))
				return;
				
			var dataPiece = data.shift();
			
			
			thisItem.css({
				position: 'relative',
				top: '0px',
				left: '0px',
				bottom: '0px',
				right: '0px'				
			})
			.wrap("<div class='animationWrapper' style='position: absolute; top:" + dataPiece.position.top + "px; left: " + dataPiece.position.left + "px;'>")
			.addClass("hasWrapper");
		})
	},
	
	prepare: function (item, from, to, useJQuery) {
		
		var defaultFrom = {
			x: 0,
			y: 0,
			z: 0,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
			scale: 1
		}
		
		from = jQuery.extend({}, defaultFrom, from);
		to = jQuery.extend({}, from, to);
		
		// what type of animation are we going to do...
		if (!useJQuery)
		{
			// this will be a css transition..
			var fromTranslate = "";
			var toTranslate = "";
			var fromRotate = "";
			var toRotate = "";
			
			
			// do we have 3d transforms?
			if (Modernizr.csstransforms3d)
			{
				// translates
				fromTranslate += "translate3d(" + from.x + "px, " + from.y + "px, " + from.z + "px)";
				toTranslate += "translate3d(" + to.x + "px, " + to.y + "px, " + to.z + "px)";
				fromTranslate += " rotateX(" + from.rotateX + "deg) rotateY(" + from.rotateY + "deg) rotate(" + from.rotateZ + "deg)";
				toTranslate += " rotateX(" + to.rotateX + "deg) rotateY(" + to.rotateY + "deg) rotate(" + to.rotateZ + "deg)";
			
			} else {
				fromTranslate += "translateX(" + from.x + "px) translateY(" + from.y + "px)";
				toTranslate += "translateX(" + to.x + "px) translateY(" + to.y + "px)";
				fromTranslate += " rotate(" + from.rotateZ + "deg)";
				toTranslate += " rotate(" + to.rotateZ + "deg)";
			}	
			
			// add in scales...
			fromTranslate += " scale(" + from.scale + ")";
			toTranslate += " scale(" + to.scale + ")";
			
			
			from['-webkit-transform'] = fromTranslate;
			from['-moz-transform'] = fromTranslate;
			from['-o-transform'] = fromTranslate;
			from['-ms-transform'] = fromTranslate;
			
			to['-webkit-transform'] = toTranslate;
			to['-moz-transform'] = toTranslate;
			to['-o-transform'] = toTranslate;
			to['-ms-transform'] = toTranslate;
						
		} else {
			// this will be a jQuery transition...
			
			from['left'] = from.x + "px";
			from['top'] = from.y + "px";
			
			to['left'] = to.x + "px";
			to['top'] = to.y + "px";
			
		}
		
		from = this.removeUnwantedExpressions(from);
		to = this.removeUnwantedExpressions(to);
		
		return {"from": from, "to": to};		
	},
	
	removeUnwantedExpressions: function (expression) {
		var returner = {};
		for (i in expression)
		{
			switch (i.toLowerCase())
			{
				case "x":
				case "y":
				case "z":
				case "rotatex":
				case "rotatey":
				case "rotatez":
				case "scale":
					// do nothing..
					break;
					
				default:
					returner[i] = expression[i];
					break;
			}
		}
		return returner;
	}
	
	
	
	
	
	
	
	
});

var Animation = Class.extend({
	init: function() {
		this.queue = "";
		
		// create a div to hold our clones...
		if (jQuery("#cloneHolder").length == 0) {
			jQuery("<div id='cloneHolder'></div>").css({width:"1px", height: "1px", display: 'none'}).appendTo(document.body);
		}
	},
	
	getClone: function (elem) {
		var clone = jQuery("#" + elem.attr("id"), "#cloneHolder");
		if (clone.length == 0) {
			clone = elem.clone();
		} else {
			clone.remove();
		}
		return clone;
	},
	
	animateIn: function (items, initialState, timing, delay, forceJQuery)
	{
		if (!timing)
			timing = 500;
			
		if (!delay)
			delay = 100;
			
		if (!forceJQuery)
			forceJQuery = false;
		
		var self = this;
		jQuery(items).each (function(i) {
			elem = this;
			var elem = jQuery(elem);
			elem.attr("oldVisibility", elem.css("visibility"));
			var position = elem.position();
			
			// clone the original object... and then hide it..
			var clone = self.getClone(elem);
			elem.css({visibility: "hidden"});
			clone.css({visibility: 'visible'});
			
			elem.addClass("being_animated");
			
			// prepare the clone for animation...
			var defaults = {}
			for (var j in initialState)
			{
				switch (j) {
					case "top": 
						defaults['top'] = position.top;
						if (!initialState['left'])
							defaults['left'] = position.left;
						break;
						
					case "left":
						defaults['left'] = position.left;
						if (!initialState['top'])
							defaults['top'] = position.top;
						break;
						
					default:
						defaults[j] = elem.css(j);
						break;
				}	
			}
			defaults.position = "absolute";
			defaults.opacity = elem.css("opacity");
			
			var callback = function(){
				elem.css({
					visibility: "inherit"
				});
				elem.removeClass("being_animated");
				jQuery(this).remove();
				if (!Modernizr.csstransitions)
					jQuery(this).appendTo("#cloneHolder");
			}
			
			if (Modernizr.csstransitions && !forceJQuery)
			{
				self.animateWithCss(elem, clone, initialState, defaults, timing * 1.5, (delay * (i + 1)) * 1.5, callback);
				self.addNavBlock((timing * 1.5) + ((delay * (i + 1)) * 1.5));
			} else {
				self.animateWithJQuery(elem, clone, initialState, defaults, 1000, delay, callback);
				self.addNavBlock(1000 + delay);
			}
		});

	},
	
	addNavBlock: function(delay) {
		finder.addNavBlock(delay)
	},
	
	animateOut: function(items, finalState, timing, delay, forceJQuery) {
		if (!timing)
			timing = 500;
			
		if (!delay)
			delay = 100;
			
		if (!forceJQuery)
			forceJQuery = false;
		
		var self = this;
		jQuery(items).each (function(i) {

			var elem = jQuery(this);
			var position = elem.position();
			
			// clone the original object... and then hide it..
			var clone = self.getClone(elem);
			elem.css({visibility: "hidden"});
			
			elem.addClass("being_animated");
			
			// prepare the clone for animation...
			var startState = {};
			for (var i in finalState)
			{
				switch (i) {
					case "top": 
						startState['top'] = position.top;
						if (!finalState['left'])
							startState['left'] = position.left;
						break;
						
					case "left":
						startState['left'] = position.left;
						if (!finalState['top'])
							startState['top'] = position.top;
						break;
						
					default:
						startState[i] = elem.css(i);
						break;
				}	
			}
			startState.position = "absolute";
			startState.opacity = elem.css("opacity");
			
			var callback = function() {
				jQuery(this).remove();
				elem.removeClass("being_animated");
			}	
			
			if (Modernizr.csstransitions && !forceJQuery)
			{
				self.animateWithCss(elem, clone, startState, finalState, timing, delay * (i + 1), callback);
				self.addNavBlock(timing + (delay * (i + 1)));
			} else {
				self.animateWithJQuery(elem, clone, startState, finalState, timing, delay, callback);
				self.addNavBlock(1000 + delay);
			}
		});
	},
	
	cleanInitialState: function(initialState, elem, pos)
	{
		// check of += and -= type things..
		var initial = jQuery.extend({}, initialState);
		if (initial.top)
			initial.top = this.processIncrementalCssItem(initial.top, pos.top);
			
		if (initial.left)
			initial.left = this.processIncrementalCssItem(initial.left, pos.left);
		return initial;
	},
	
	processIncrementalCssItem: function(change, original)
	{
		change = "" + change;
		change.replace("px", "");

		if (change.substring(1,2) == "=")
		{

			var operator = change.substring(0, 1);
			change = change.substring(2);

			switch (operator)
			{
				case "+":
					change = (1 * change) + original;
					break;
					
				case "-":
					change = original - (1 * change);
					break;
			}
		}

		return change;
	},
	
	animateWithCss: function(elem, clone, initialState, defaults, timing, delay, callback)
	{
		var self = this;
		var position = jQuery(elem).position();
		defaults = self.cleanInitialState(defaults, elem, position);
		var initials = self.cleanInitialState(initialState, elem, position);
		initialState = jQuery.extend({}, defaults, initials);
		
		// use translate instead of top and left..
		if (!initialState.top && !initialState.left) {
		
		}
		else {			


			if (isNaN(defaults.top))
				defaults.top = initialState.top;
				
			if (isNaN(defaults.left))
				defaults.left = initialState.left;
				
				
			var topDiff = defaults.top - initialState.top;
			var leftDiff = defaults.left - initialState.left;
			
			initialState.top += "px";
			initialState.left += "px";
			
			defaults.top = initialState.top;
			defaults.left = initialState.left;
			defaults["-webkit-transform"] = "translate3d(" + leftDiff + "px, " + topDiff + "px, 0px)";
			
		}
		clone.css(initialState);
		clone.css ({
			"-webkit-transition": "all " + timing + "ms ease-in-out"
		});
		
		clone.appendTo(elem.parent());
			
		clone[0].addEventListener("webkitTransitionEnd", callback, true);
		
		setTimeout(function() {clone.css(defaults);}, delay);

		
	},
	
	animateWithJQuery: function (elem, clone, initialState, defaults, timing, delay, callback)
	{
		var position = jQuery(elem).position();
		var initials = this.cleanInitialState(initialState, elem, position);
		initialState = jQuery.extend({}, defaults, initials);
		initialState.top += "px";
		initialState.left += "px";
		
		defaults.top += "px";
		defaults.left += "px";		

		
		var uniques = this.parseUniques(initialState, defaults);

		clone.appendTo(elem.parent());
		clone.css(uniques.initialState)

	
		
		setTimeout(function(){
			clone.animate(uniques.defaults, timing, "swing", callback);
		}, delay);
		
		
	},
	
	parseUniques: function (initial, def) {
		var i = {};
		var d = {};
		for (j in def)
		{
			try {
				if (initial[j] != def[j] && initial[j] + "px" != def[j] && initial[j] != def[j] + "px")
				{
					i[j] = initial[j];
					d[j] = def[j];
				}
			} catch(e) { }
		}
		return {initialState: i, defaults: d};
	} 
	
});




/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/carousel.js */
var Carousel = function(div, itemClass) {
	
	this.itemClass = "." + itemClass;
	this.content = jQuery(div);
	this.wrapper = jQuery(div.parent());
	this.wrapperWidth = this.wrapper.width();
	this.contentWidth = this.content.width();
	
	this.contentWrapper = jQuery("<div></div>").css({width: this.contentWidth + "px", height: this.wrapper.height() + "px", position: "absolute", top: "0px", "left": "30px"});
	
	this.content.css("-webkit-transition",  "all 400ms ease-in");
	
	this.leftArrow = jQuery("<div class='carouselLeftArrow' style='position: absolute; top: 0px; left: 0px; width: 20px; height: " + this.wrapper.height() + "px'></div>");
	this.rightArrow = jQuery("<div class='carouselRightArrow' style='position: absolute; top: 0px; right: 0px; width: 20px; height: " + this.wrapper.height() + "px'></div>");
	
	this.contentWrapper.appendTo(this.wrapper);
	this.leftArrow.appendTo(this.wrapper);
	this.rightArrow.appendTo(this.wrapper);
	
	this.content.remove();
	this.contentWrapper.html(this.content);
	
	this.content.css({
		position: "absolute",
		top: "0px",
		left: "0px"
	});
	this.wrapper.css({overflow: "hidden"});
	
	this.currentPanel = 0;
	this.numPanels = jQuery(this.itemClass, this.content).length;
	
	var self = this;
	
	this.checkIfMaxPanelReached = function() {
		return self.currentX + self.wrapperWidth - 40 >= this.contentWidth;
	}
	
	this.leftArrow.click(function() {
		self.currentPanel = Math.max(0, --self.currentPanel);
		self.showPanel(self.currentPanel);
	});
	
	this.rightArrow.click(function() {
		self.currentPanel = Math.min(self.numPanels - 1, ++self.currentPanel);
		self.showPanel(self.currentPanel);
	});
	
	this.showPanel = function(panel) {

		var pos = jQuery(this.content.children()[panel]).position();
		
		if (Modernizr.csstransitions) {
			self.content.css("-webkit-transform", "translate3d(-" + (pos.left + 1) + "px, 0px, 0px)");
		}
		else {
			self.content.animate({
				"left": "-" + (pos.left + 1) + "px"
			});
		}
	}
}


/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/poolDebug.js */
var PoolDebug = Class.extend({

	init: function() {
		
		this.container = jQuery("#poolDebug");
		if (this.container.length == 0) {
			return;
		}
		
		this.container.css({
			font: "10px Arial"
		})
		
		var self = this;
		jQuery("#finderContainer").bind("poolLoaded", function(event) {
			try {
				self.handlePoolLoad(event.productPool);
			} catch(e) {
				alert(e);
			}
		})
		
		
		
	},
	
	handlePoolLoad: function(productPool) {
		
		this.productPool = productPool;
		
		this.container.html("");
		
		this.createFilters();
		
		this.appendMessage("Items per page", this.productPool.itemsPerPage);
		this.appendMessage("Template", this.productPool.template);
		this.appendMessage("Pool Loaded", this.productPool.poolWorker.lastPool);
		this.appendMessage("Num Products", this.productPool.poolWorker.db().count());
		
		
	},
	
	appendMessage: function(title, message) {
		this.container.append("<HR><B>" + title + "</B>: <span>" + message + "</span>");
	},
	
	createFilters: function() {
		
		this.pfeedSelect = jQuery("<select></select>");
		var item = this.productPool.poolWorker.db().first();
		
		var itemHtml = "<option value='-1'>Properties</option>";
		for (i in item) {
			itemHtml += "<option value='" + i + "'>" + i + "</option>";
		}
		this.pfeedSelect.html(itemHtml);
		
		this.pfeedSelectResults = jQuery("<div></div>");
		
		this.container.append("<hr>");
		this.container.append(this.pfeedSelect);
		this.container.append(this.pfeedSelectResults);
		
		var self = this;
		this.pfeedSelect.change(function() {
			
			var items = self.productPool.poolWorker.db().distinct(jQuery(this).val());
			
			var myItems = {};
			var currentFieldIsArray = false;
			for (i = 0; i < items.length; i++) {
				if (items[i] instanceof Array) {
					for (j = 0; j < items[i].length; j++) {
						currentFieldIsArray = true;
						myItems[items[i][j]] = 1;
					}
				}
				else {
					myItems[items[i]] = 1;
				}
			}
			
			self.pfeedSelectResults.html("");
			for (i in myItems) {
				self.pfeedSelectResults.append("<div><input type=checkbox value=\"" + i + "\"> " + i+"</div>");
			}
			
			jQuery("input", self.pfeedSelectResults).click(function() {
				//checkbox is clicked... lets create a filter...
				
				// get selected checkboxes...
				var checkboxes = [];
				jQuery("input:checked", self.pfeedSelectResults).each(function() {
					checkboxes.push(jQuery(this).val())
				})
				
				var filters = [];
				var compareType = "is";
				if (currentFieldIsArray) {
					compareType = "has";
				}
				for (i = 0; i < checkboxes.length; i++) {
					var filter = {};
					filter[self.pfeedSelect.val()] = {} 
					filter[self.pfeedSelect.val()][compareType] = checkboxes[i];
					filters.push(filter);
				}
				
				self.productPool.itemsFiltered(filters);
				
			})
			
		})
		
		
		
	}



});















/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/poolModel.js */
var poolModel = ( function() {
	var alpha = 'aaa';
	var beta = 'bbb';
	var poolData = [];
	var currentData = [];
	var totalItems = 0;
	var pageIndex = 0;
	var PAGE_SIZE = 6;
	var prevPageSize;
	var pageSize = PAGE_SIZE;
	var currentSort;
	var defaultSort = function(o) { return -o.insertIndex; };

	function testFunction() {
		alert("TEST TEST TEST");
	}

	function init( obj ) {
		//alert("Wheeeee");
		if ( obj[ "PAGE_SIZE" ] ) {
			PAGE_SIZE = obj[ "PAGE_SIZE" ];
			pageSize = PAGE_SIZE;
		}
		for ( var prop in obj ) {
			if( obj.hasOwnProperty( prop ) ){
				
			}
		}
	}

	function loadPool( url ) {
		$( poolModel ).trigger( "loading" );
		var poolRequest = $.ajax({
			type: "GET",
			url: url,
			dataType: "jsonp",
			timeout: 30000,
			tryCount: 0,
			tryLimit: 2,
			async: true,
			success: function( data, textStatus, jqXHR ){
				//alert("SUCCESS");
				$( poolModel ).trigger( "loaded" );
				console.log( data, " DATA");
				processData( data );
				
				//insertTheData( theData );
				//if(hijack) data = hijack(data);
				//self.insert(data);
				//self.loadNext();
				//console.log('loaded',arguments);
			},
			error: function( request, type, errorThrown ){
				//alert("ERROR");
				console.error( 'error loading', arguments );
				//self.loadNext();
			}
		});
	}

	function processData( data ) {
		if( data.entries.length ) {
			for( var i=0; i<data.entries.length; i++){
				var entry = {};
				entry.pfeed_priceforfilters = parseFloat(data.entries[i].properties.pfeed_priceforfilters);
				//entry.imageWidth = imageWidth;
				// LETS FIX THIS SOMEWHERE PLEASE
				entry.image_fullImage = data.entries[i].fileUrl;
				entry.pfeed_url = data.entries[i].properties.pfeed_url;
				entry.entryid = data.entries[i].entryId;
				entry.pfeed_brand = data.entries[i].properties.pfeed_brand;
				entry.pfeed_id = data.entries[i].properties.pfeed_id;
				entry.pfeed_productgroup = data.entries[i].properties.pfeed_productgroup;
				entry.pfeed_price1 = data.entries[i].properties.pfeed_price1;
				entry.pfeed_price2 = data.entries[i].properties.pfeed_price2;
				entry.pfeed_price3 = data.entries[i].properties.pfeed_price3;
				entry.pfeed_name = data.entries[i].properties.pfeed_name;
				entry.label = data.entries[i].properties.pfeed_name;
				entry.pfeed_name = data.entries[i].properties.pfeed_name;
				entry.votes = 0;
				entry.insertIndex = i;
				poolData.push( entry );
			}
		}
		totalItems = poolData.length;
		if (!currentSort) currentSort = defaultSort;
		setCurrentData();

		$( poolModel ).trigger( "processed" );
	}

	function setCurrentData() {
		// reverses data
		var sortedData = sort( poolData, currentSort );
		currentData = poolData.slice( pageIndex * pageSize, pageIndex * pageSize + pageSize );
		$( poolModel ).trigger( "changed" );
	}

	function sort( array, f ) {
		var sortedData = _.sortBy( array, f );
		return sortedData;
	}

	function incrementPage() {
		prevPageSize = pageSize;

		pageSize =  (pageSize + PAGE_SIZE > totalItems ) ? totalItems : pageSize + PAGE_SIZE;
		console.log( pageSize );
		if (prevPageSize !== pageSize) {
			setCurrentData();
		}
	}

	function returnPoolData() {
		return poolData;
	}

	function returnCurrentData() {
		return currentData;
	}

	// table of contents
	return {
		test: testFunction,
		init: init,
		loadPool: loadPool,
		incrementPage: incrementPage,
		returnPoolData: returnPoolData,
		returnCurrentData: returnCurrentData,
	};

} )();

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/productPool.js */

var ProductPool = Class.extend({

	init: function(params) {

		this.poolScrollable = true;
		this.itemsPerPage = 20;
		this.loaded = false;
		this.showMoreOnHover = false;
		this.serverSideFiltering = false;

		if (params) {
			this.poolScrollable = params.scrollable;

			if (params.itemsPerPage)
				this.itemsPerPage = params.itemsPerPage;

			if (params.container)
				this.setupPool(params.container);

			if (params.template)
				this.template = params.template;
			else
				this.template = "productListing";

			if (params.showMoreOnHover)
				this.showMoreOnHover = params.showMoreOnHover;

			if (params.serverSideFiltering)
				this.serverSideFiltering = params.serverSideFiltering;
		}

		this.facets = {};
		this.poolWorker = new PoolBoy(this);
		this.setLiveEvents();



	},

	setLiveEvents: function() {
		if (this.poolContainer.is("[liveEventsSet]"))
			return;

		var self = this;

		this.poolContainer.attr("liveEventsSet", "yes");


		this.poolContainer.bind("poolPageChanged", function() {
			jQuery(".stars_off", self.poolContainer).each(function() {
				var self = jQuery(this);
				var num = self.html();
				if (num == "")
				{
					self.parent().remove();
					return;
				}
				num = num * 1;
				var width = num * 13;
				self.html("<div class='stars_on' style='width: " + width + "px'><div>");
				jQuery("<div class='ratingLabel'>" + num.toFixed(1) + " out of 5</div>").insertAfter(self);

			});
		});

		this.poolContainer.delegate(".productListing .quickview A", "mousedown", function(){
			jQuery(this).addClass("clicked");
		});

		this.poolContainer.delegate(".productListing .quickview A", "mouseup", function(){
            jQuery(this).removeClass("clicked");
        })

		this.poolContainer.delegate(".touch .productListing .bonusOffers", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			jQuery(this).toggleClass("active");
		});

		this.poolContainer.delegate(".productListing .quickview", "mouseenter", function(){
			jQuery(this).addClass("hover");
		});

		this.poolContainer.delegate(".productListing .quickview", "mouseleave", function(){
            jQuery(this).removeClass("hover");
        })

		this.poolContainer.delegate(".productListing", "mouseenter", function(){
			jQuery(this).addClass("hover");
		});

		this.poolContainer.delegate(".productListing", "mouseleave", function(){
            jQuery(this).removeClass("hover");
        })

		if (!finder.isTablet() && this.showMoreOnHover) {
			this.poolContainer.delegate(".productListing", "mouseenter", function(event){
				self.productListingOver(event);
			});

			this.poolContainer.delegate(".productListing", "mouseleave", function(event){
				self.productListingOut(event);
			})
		}

		var swatchEvent = "mouseenter";
		if (finder.isTablet()) {
			swatchEvent = "click";
		}
		this.poolContainer.delegate(".productListing .swatch", swatchEvent, function() {
			var item = jQuery(this);
			if (item.attr("productImage") == "")
				return;

			jQuery(".productImage", item.parents(".productListing")).attr("src", item.attr("productImage"));
		});

		this.poolContainer.delegate(".compareBox", "click", function(event) {
				var product = jQuery(this).parents(".productListing");
				var entryId = product.attr("entryId");

				if (this.checked) {

					// allow 3 max..
					if (self.compareItems.length >= 3) {
						jQuery("<div class='compareError'>Sorry, you can only compare three items at a time.</div>").appendTo(product).delay(3000).slideUp("slow", function() { jQuery(this).remove()});
						event.preventDefault();
						return false;
					}

					self.compareItems.push(entryId);
				} else {
					// we need to remove this item;
					var newArray = [];
					for (var i = 0; i < self.compareItems.length; i++) {
						console.log(self.compareItems[i],entryId);
						if (1 * self.compareItems[i] != 1 * entryId) {
							newArray.push(self.compareItems[i]);
						}
					}
					self.compareItems = newArray;
				}
		});

		this.poolContainer.bind("poolPageChanged", function() {
			for (var i = 0; i < self.compareItems.length; i++) {
				jQuery(".productListing[productId='" + self.compareItems[i] + "'] .compareBox").attr("checked", 1);
			}
		})

		this.poolContainer.delegate(".doCompareNow", "click", function() {

			if (self.compareItems.length < 2) {
				jQuery(".nothingSelected", this.poolContainer).slideDown().delay(3000).slideUp();
				return;
			}

			try {
				showCompare(self.compareItems[0], self.compareItems[1], self.compareItems[2], 'Check out these amazing sofas!', 'I just found great seating using Macy\'s Sofa Finder and need your opinion! So, what do you think?', finder.getConfig().webRoot + "/home/" + self.compareItems.join(","));
			} catch(e) {
				console.log("Error calling showCompare", e);
			}
			console.log(self.compareItems);
		});

		this.poolContainer.delegate(".doCompareClear", "click", function() {
			self.compareItems = [];
			jQuery(".compareBox:checked").removeAttr("checked");
		});











	},

	setResultsDisplay: function() {

	},

	getResultsDisplay: function() {

	},

	addFacet: function(facet) {

		facet.setParent(this);
		this.facets[facet.name] = facet;


		var container = jQuery("<DIV></DIV>").attr("forFacet", facet.name).addClass("facet").addClass(facet.name).append(facet.display());

		this.facetsContainer.append(container);
	},

	getFacet: function(name) {
		return this.facets[name];
	},

	setupPool: function(container) {


		var self = this;
		this.poolContainer = jQuery(container);
		this.poolContainer.addClass("poolContainer");
		this.poolContainer.data("productPool", this);

		this.poolHeader = jQuery("<div id='poolHeader'></div>").appendTo(this.poolContainer);

		this.facetsContainer = jQuery("<div id='facetsContainer'></div>").appendTo(this.poolContainer);
		jQuery("<div id='poolPaginationTop' class='poolPagination'></div>").appendTo(this.poolHeader);

		this.poolResults = jQuery("<div id='poolResults'></div>").appendTo(this.poolContainer);


		this.poolPagination = jQuery(".poolPagination", this.poolContainer);

		jQuery("<div class='itemsFound'></div>").appendTo(this.poolPagination);
		jQuery("<div class='pageNumbers'></div>").appendTo(this.poolPagination);

		this.itemsFound = jQuery(".itemsFound", this.poolContainer);
		this.pageNumbers = jQuery(".pageNumbers", this.poolContainer);

		this.poolPagination.append("<div style='clear:both;'></div>");


		this.noResults = jQuery("<div id='noResults'></div>");
		this.noResults.html("We're sorry, at this time we do not have any items in our collection that match your preferences. We often add new styles to our site, so check back soon; or, make new preference selections now.");

		this.compareItems =[];
		this.compareDiv = jQuery("<div id='compareControls'></div>");
		this.compareDiv.html("choose 3 items &nbsp; <a href='javascript:void(0)' class='doCompareNow'>compare now</a> &nbsp;&nbsp; <a href='javascript:void(0)' class='doCompareClear'>clear</a><div class='nothingSelected'>Please select at least two items to compare.</div>").appendTo(this.poolHeader);

		this.poolContainer.bind("poolDataLoaded", function() {
			self.poolDataLoaded();
		});

		this.poolContainer.bind("filterFacetChanged", function() {
			self.runFilters();
		});

		this.poolContainer.bind("sortFacetChanged", function() {
			self.sortChanged();
		});

		this.poolContainer.bind("resetFacets", function() {
			self.resetFacets();
		});

		this.pageNumbers.delegate("A[pageNum]", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			self.showPage(jQuery(this).attr("pageNum"));
		})

		this.pageNumbers.delegate("A.prevPage", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			var currentPage = jQuery("A[pageNum].selected", self.pageNumbers).attr("pageNum") * 1;
			self.showPage(currentPage - 1);
		})

		this.pageNumbers.delegate("A.nextPage", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			var currentPage = jQuery("A[pageNum].selected", self.pageNumbers).attr("pageNum") * 1;
			self.showPage(currentPage + 1);
		})
	},

	reset: function() {
		this.poolContainer.html("");
		this.facets = {};
		this.scroller = false;
		this.loaded = false;
		this.setupPool(this.poolContainer);
	},

	poolDataLoaded: function() {
		// get all the items...
		var items = this.poolWorker.db().get();

		// let the facets reorder themselves using this data...
		for (i in this.facets) {
			this.facets[i].handlePoolData(items);
		}
	},

	setupCategoryFilter: function(filters) {
		this.staticFilter = filters;
	},

	loadPool: function(pool, filter) {

		if (filter) {
			this.staticFilter = filter;
		} else {
			this.staticFilter = [{}]
		}

		this.loaded = false;

		this.comparePool = [];

		// load the right pool...


		if (this.serverSideFiltering) {
			this.poolWorker.offset = 0;
			this.poolWorker.limit = this.itemsPerPage;
			this.pool = pool;
			this.runFilters();
		} else {
			finder.loadingDisplay.start("pool load");
			var self = this;
			setTimeout(function(){
				self.poolWorker.loadPool(pool, jQuery.proxy(self.poolLoaded, self));
			}, 10);
		}

	},

	poolLoaded: function() {

		this.runFilters();

		this.loaded = true;
		finder.loadingDisplay.end("pool load");

		//jQuery("#finderContainer").trigger("poolLoaded");
		//jQuery(finder.getCurrentPage().parentDiv).trigger("poolLoaded");
		this.poolContainer.trigger({
			type: "poolLoaded",
			productPool: this
		});

	},

	setPoolScrollable: function(bool) {
		this.poolScrollable = bool;
	},

	setItemsPerPage: function(num) {
		this.itemsPerPage = num;
	},

	filter: function(categoryFilter) {
		this.categoryFilter = categoryFilter;
		this.runFilters();
	},

	itemsFiltered: function(myfilter) {

		if (!myfilter)
			myfilter = [];

		try {
			myfilter = jQuery.merge(myfilter, [this.staticFilter]);
		} catch(e) { }

		console.log("filter", myfilter);
		console.log("filter", this.staticFilter);

		if (myfilter.length == 0)
			myfilter = {};



		// my filter is an object of filters.....





		var contentPane = this.poolResults;
		if (this.poolScrollable && this.scroller && !finder.isTablet()) {
			contentPane = jQuery(this.scroller.getContentPane());
		}
		contentPane.html("");


		// if this is not server side filtering..
		// get the items array ready...
		if (!this.serverSideFiltering) {
			this.items = this.poolWorker.getFilteredResults(myfilter);
			var items = this.items;
			console.log("items length", items.count());
			items.length = items.count();

			if (this.poolWorker.numItems == 0) {
				contentPane.append(this.noResults.clone());
				return;
			}

			this.showPage(0);
		}

		if (this.serverSideFiltering) {
			// generate skava filter..
			this.skavaFilter = this.convertFiltersForSkava(myfilter);

			if (this.skavaFilter.operations.length > 0)
				this.poolWorker.setSkavaFilter(this.skavaFilter);
			else
				this.poolWorker.setSkavaFilter(false);

			console.log("these are my filters", myfilter, this.skavaFilter);
			this.showFilteredPage(0);


		}





	},

	convertFiltersForSkava: function(myFilters) {

		var skavaFilters = {operations:[]};
		// my filters are an array of facets..
		for (var i = 0; i < myFilters.length; i++) {
			var thisFacet = myFilters[i];

			console.log("i", i, thisFacet);



			for (var k = 0; k < thisFacet.length; k++) {
				var newFacet = [];
				for (var j in thisFacet[k]) {
					console.log("j", k, j, thisFacet[k][j]);

					if (thisFacet[k][j].has) {
						newFacet.push({
							property: j,
							value: thisFacet[k][j].has,
							operator: "CONTAINS"
						})
					}
					if (thisFacet[k][j].is) {
						newFacet.push({
							property: j,
							value: thisFacet[k][j].is,
							operator: "EQUALS"
						})
					}
					if (thisFacet[k][j].gt) {
						newFacet.push({
							property: j,
							value: thisFacet[k][j].gt,
							operator: "GREATERTHAN"
						})
					}
					if (thisFacet[k][j].lt) {
						newFacet.push({
							property: j,
							value: thisFacet[k][j].lt,
							operator: "LESSTHAN"
						})
					}
				}

				if (newFacet.length > 0)
				skavaFilters.operations.push(newFacet);
			}


		}

		console.log("skavaFilters", skavaFilters);
		return skavaFilters;


	},

	updatePagination: function(current) {

		var numItems = this.poolWorker.numItems;
		if (!this.serverSideFiltering) {
			numItems = this.items.length;
		}

		// build pagination results...
		var pluralItems = (numItems == 1) ? "item" : "items";
		this.itemsFound.html(numItems + " " + pluralItems + " found");

		var numPages = Math.ceil(numItems / this.itemsPerPage);

		this.pageNumbers.attr("numPages", numPages);

		if (numPages > 1) {
			this.pageNumbers.show();
		} else {
			this.pageNumbers.hide();
		}

		current = current * 1;

		if (isNaN(current) || current > numPages)
			current = numPages;

		var numPagesToShow = 2;

		this.pageNumbers.html("<a href='javascript:void(0)' class='prevPage'><img src='" + assetsDirectory + "images/leftarrow.gif' border='0'> Prev</a>");

		var startPage = 1;
		var endPage = numPages;

		if (numPages <= numPagesToShow) {
			endPage = numPages;
		} else {
			startPage = current - Math.floor(numPagesToShow / 2);
			if (startPage < 1)
				startPage = 1;

			endPage = startPage + numPagesToShow;
			if (endPage > numPages) {
				endPage = numPages;
				startPage = endPage - numPagesToShow;
			}

		}

		for (i = startPage; i <= endPage; i++) {
			this.pageNumbers.append("<a href='javascript:void(0);' pageNum='" + (i - 1) + "'>" + (i) + "</a> ");
		}
		this.pageNumbers.append("<a href='javascript:void(0)' class='nextPage'>Next <img src='" + assetsDirectory + "images/rightarrow.gif' border='0'></a>");

		var pageNum = current;

		if (pageNum <= 0)
			jQuery("A.prevPage", this.pageNumbers).css("visibility", "hidden");
		else
			jQuery("A.prevPage", this.pageNumbers).css("visibility", "visible");

		if (pageNum >= numPages - 1)
			jQuery("A.nextPage", this.pageNumbers).css("visibility", "hidden");
		else
			jQuery("A.nextPage", this.pageNumbers).css("visibility", "visible");

		this.pageNumbers.attr("currentPage", pageNum);


		jQuery("A", this.pageNumbers).removeClass("selected");
		jQuery("A[pageNum=" + pageNum+ "]", this.pageNumbers).addClass("selected");
	},

	showPage: function(pageNum) {

		if (this.serverSideFiltering) {
			this.showFilteredPage(pageNum);
			return;
		}


		pageNum = pageNum * 1;

		var numPages = this.pageNumbers.attr("numPages") * 1;
		this.updatePagination(pageNum);

		var contentPane = this.poolResults;
		if (this.poolScrollable && this.scroller && !finder.isTablet()) {
			contentPane = jQuery(this.scroller.getContentPane());
		}
		//jQuery(".productListing:visible", this.poolResults).hide();
		//jQuery(".productListing", this.poolResults).slice(pageNum * this.itemsPerPage, pageNum * this.itemsPerPage + this.itemsPerPage).fadeIn();

		contentPane.html("");
		jQuery("#" + this.template).tmpl(this.items.get().slice(pageNum * this.itemsPerPage, pageNum * this.itemsPerPage + this.itemsPerPage)).appendTo(contentPane);

		this.showPagePostProcess();
	},

	showFilteredPage: function(pageNum) {

		finder.loadingDisplay.start("pool load");

		pageNum = pageNum * 1;
		var numPages = this.pageNumbers.attr("numPages") * 1;


		var contentPane = this.poolResults;
		if (this.poolScrollable && this.scroller && !finder.isTablet()) {
			contentPane = jQuery(this.scroller.getContentPane());
		}

		this.poolWorker.setOffset(pageNum * this.itemsPerPage);

		var self = this;
		setTimeout(function(){
			self.poolWorker.loadPool(self.pool, function() {

				try {
					// show results...
					contentPane.html("");
					jQuery("#" + self.template).tmpl(self.poolWorker.db().get()).appendTo(contentPane);

					if (!self.loaded) {
						self.poolContainer.trigger({
							type: "poolLoaded",
							productPool: self
						});
					}

					// pool loaded...
					self.loaded = true;

					console.log(self.poolWorker.offset, self.itemsPerPage, pageNum, self.poolWorker.offset, self.itemsPerPage);

					self.updatePagination((self.poolWorker.offset / self.itemsPerPage));

					if (self.poolWorker.numItems == 0) {
						contentPane.append(self.noResults.clone());
					}

					self.showPagePostProcess();



					finder.loadingDisplay.end("pool load");

				} catch(e) { }
			});
		}, 10);


	},

	showPagePostProcess: function() {

		var contentPane = this.poolResults;
		if (this.poolScrollable && this.scroller && !finder.isTablet()) {
			contentPane = jQuery(this.scroller.getContentPane());
		}
		jQuery(contentPane).append("<div style='clear: both; margin-bottom: 100px;'></div>");

		if (this.poolScrollable) {
			try {
				this.scroller.reinitialise();
				this.scroller.scrollTo(0,0);
			} catch(e) {
				this.scroller = new Scroller(contentPane);
			}

				this.scrollerInited = true;


		}

		this.poolContainer.trigger("dataChanged");
		this.poolContainer.trigger({
			type: "poolPageChanged",
			productPool: this
		});
	},


	runFilters: function() {

        try {
            var filter = [];

            for (i in this.facets) {

                    //filter = jQuery.merge(filter, this.facets[i].getSelectedFilter());
                if (this.facets[i].getType() == "FILTER") {
                    filter.push(this.facets[i].getSelectedFilter());
                }
            }
            this.itemsFiltered(filter);
        }
        catch (err) {}

	},

	sortChanged: function() {
		var filter = [];

		for (i in this.facets) {
			if (this.facets[i].getType() == "SORT") {
				filter = this.facets[i].getSelectedFilter();
			} else {

			}
		}

		if (!filter[0]) {
			filter = ["pool_insert_id asc"];
		}



		this.poolWorker.sort(filter[0]);
		this.runFilters();

	},

	resetFacets: function() {

		for (i in this.facets) {
			this.facets[i].reset();
		}

		this.sortChanged();

	},


	productListingOver: function(event) {

		var item = jQuery(event.currentTarget);

		var container = item.parent();



		if (!item.hasClass("productListing") || item.hasClass("isClone") || item.attr("productId") == jQuery(".productListingHover", container).attr("productId"))
			return;



		// see if there is already a hovered item...
		// and remove it..
		jQuery(".productListingHover", container).remove();

		// create a clone and add it to the container..
		var clone = item.clone().addClass("isClone").wrap("<div class='productListingHover'></div>");
		clone = clone.parent();


		var itemPosition = item.position();

		clone.css({
			top: itemPosition.top +3  + "px",
			left: itemPosition.left + 3 + "px"
		}).mouseout(function() {
			if (jQuery(event.currentTarget).hasClass(".productListingHover"))
				jQuery(this).remove();
		})

		container.append(clone);

		jQuery(".moreInfo", clone).slideDown("fast");

	},

	productListingOut: function(event) {

	}

})






/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/productPoolAbstractFacets.js */
var ProductPoolFacet = Class.extend({

	init: function(name, type, filters) {
		this.name = name;
		this.type = type; // either "FILTER" or "SORT"
		this.filters = filters;
		this.parent = parent;
		
		this.displayHandler = this.setupDisplay();
	},
	
	setupDisplay: function() {
		return new SelectFieldDisplayHandler("Shop By", this);
	},
	
	display: function() {
		return this.displayHandler.display();
	},
	
	getSelectedFilter: function() {
		var values = this.displayHandler.getSelectedValues();
		
		var filter = [];
		for (i = 0; i < values.length; i++) {
			filter = jQuery.merge(filter, this.filters[values[i]].filter);
		}
		
		return filter;
	},
	
	getFilters: function() {
		return this.filters;
	},
	
	getSelected: function() {
		var values = this.displayHandler.getSelectedValues();
		
		var filter = [];
		for (i = 0; i < values.length; i++) {
			filter.push(this.filters[values[i]]);
		}

		
		return filter;
	},
	
	setSelected: function(val) {
		for (var i in this.filters) {
			if (i == val) {
				this.filters[i].selected = true;
			} else {
				this.filters[i].selected = false;
			}
		}
		this.displayHandler.display();
		this.facetChanged();
	},
	
	facetChanged: function() {
		this.parent.poolContainer.trigger({
			type: "filterFacetChanged",
			changedFacet: this
		});
	},
	
	setParent: function(parent) {
		this.parent = parent;
	},
	
	handlePoolData: function(items) {
		
	},
	
	getType: function() {
		return this.type;
	},
	
	reset: function() {
		this.displayHandler.reset();
	}
});

var ProductPoolFacetDisplayHandler = Class.extend({
	
	init: function(defaultText, par) {
		this.defaultText = defaultText;
		this.parent = par;
		
		this.setup();
	},
	
	setup: function() {
		
	},
	
	display: function() {
		
	},
	
	displayChanged: function() {
		this.parent.facetChanged();
	},
	
	getSelectedValues: function() {
		return [];
	},
	
	reset: function() {
		
	},
	
	getCSSClass: function() {
		return "";
	}
	
})



var SelectFieldDisplayHandler = ProductPoolFacetDisplayHandler.extend({
	
	setup: function() {
		this._super();
		this.field = jQuery("<select>");
		
		var self = this;
		this.field.change(function() {
			self.displayChanged();
		})
	},
	
	display: function() {
		this._super();
		var values = "";
	
		
		var filters = this.parent.getFilters();
		for (i in filters) {
			values += "<option value=\"" + i + "\">" + filters[i].label + "</option>";
		}
		
		this.field.html(values);	
		return this.field;	
	},
	
	getSelectedValues: function() {
		
		return [this.field.val()];
	},
	
	reset: function() {
		this._super();
		
		var filters = this.parent.getFilters();
		var first = "";
		for (i in filters) {
			first = i;
			break;
		}
		
		this.field.val(first);
	},
	
	getCSSClass: function() {
		return "selectField";
	}

});

var ToggleTabsDisplayHandler = ProductPoolFacetDisplayHandler.extend({
	
	setup: function() {
		this._super();
		this.field = jQuery("<div><span class='facetTitle'>" + this.defaultText + "</span><ul class='facetTabsContainer'></ul></div>");
		
		var self = this;
		jQuery("UL", this.field).delegate("LI", "click", function() {
			
			var item = jQuery(this);
			
			var filter = self.parent.getFilters()[item.attr("pfeed")];
			
			if (item.hasClass("toggled")) {
				if (!self.isToggle()) {
					// see how many items are checked... if only one.. don't remove the class..
					if (item.siblings(".toggled").length > 0) {
						item.removeClass("toggled");
					}
				} else {
					item.removeClass("toggled");
				}
				
			} else {
				// if this is a single select... or the item we clicked on is a single select...
				// clear other checked items...
				if (!self.isToggle() || item.attr("selectType") == "single") {
					item.siblings("LI").removeClass("toggled").children("INPUT").removeAttr("checked");
				} else {
					// otherwise.. clear out any other items that were single selects...
					item.siblings("LI[selectType='single']").removeClass("toggled").children("INPUT").removeAttr("checked");
				}

				item.addClass("toggled");
			}
			
			if (item.hasClass("toggled")) {
				jQuery("INPUT", item).attr("checked", "1");
			} else {
				jQuery("INPUT", item).removeAttr("checked");
			}
			
			// check if anything is selected in this filter group... if not..
			// we need to select the "selectAll" items...
			if (!item.hasClass("toggled") && item.siblings("LI.toggled").length == 0) {
				item.parent().children("LI[selectAll='all']").addClass("toggled").children("INPUT").attr("checked", "1");
			}
			
			self.displayChanged();
		})
		
		
	},
	
	isToggle: function() {
		return true;
	},
	
	display: function() {
		this._super();
		
		var values = "";
		var filters = this.parent.getFilters();
		for (i in filters) {
			var checked = filters[i].selected ? "checked" : "";
			var toggled = filters[i].selected ? "toggled" : "";
			var single = filters[i].single || filters[i].selectAll ? "single" : "multiple";
			var selectall = filters[i].selectAll ? "all" : "";
			values += "<li pfeed=\"" + i + "\" " + toggled + " class=\"" + i.replace("'", "") + " " + toggled + "\" selectType=\"" + single + "\" selectAll=\"" + selectall + "\"><input type='checkbox' " + checked + "> " + filters[i].label + "</li>";
		}
		
		jQuery("UL", this.field).html(values).css({padding: "0px", margin: "0px", 'list-style': "none", "-webkit-padding-start": "0px"});
		
		jQuery("LI", this.field).css({'list-style': "none", "cursor": "pointer"})
		
		return this.field;	
	},
	
	getSelectedValues: function() {
		var items = [];
		jQuery("LI.toggled", this.field).each(function() {
			items.push(jQuery(this).attr("pfeed"));
		})

		
		return items;
	},
	
	reset: function() {
		this._super();
		jQuery(".toggled", this.field).removeClass("toggled");
		jQuery("[checked]", this.field).removeAttr("checked");
	},
	
	getCSSClass: function() {
		return "checkboxField";
	}
	
});

var TabsDisplayHandler = ToggleTabsDisplayHandler.extend({

	isToggle: function() {
		return false;
	}
	
});



var ToggleButtonDisplayHandler = ProductPoolFacetDisplayHandler.extend({
	
	setup: function() {
		this._super();
		this.field = jQuery("<input type='button' value='" + this.defaultText + "'>");
		
		var self = this;
		this.field.click(function() {
			self.field.toggleClass("toggled");
			self.displayChanged();
		})
	},
	
	display: function() {
		this._super();
		return this.field;	
	},
	
	getSelectedValues: function() {
		if (this.field.hasClass("toggled")) {
			// return the first filter..
			var filters = this.parent.getFilters();
			for (i in filters) {
				return [i];
				break;
			}
		}
		else {
			return [];
		}
	},
	
	reset: function() {
		this._super();
		this.field.removeClass("toggled");
	}

});

var ButtonDisplayHandler = ProductPoolFacetDisplayHandler.extend({
	
	setup: function() {
		this._super();
		this.field = jQuery("<input type='button' value='" + this.defaultText + "'>");
		
		var self = this;
		this.field.click(function() {
			self.displayChanged();
		})
	},
	
	display: function() {
		this._super();
		return this.field;	
	}

});


var CategoryFilterFacet = ProductPoolFacet.extend({

	handlePoolData: function(items, initialFilters) {

		if (!initialFilters)
			initialFilters = {};

		// use these items to build my filters list...
		var category = {};
		for (var i = 0; i < items.length; i++)
		{
			
			if (items[i][this.category] instanceof Array) {
				for (j = 0; j < items[i][this.category].length; j++) {
					if (category[items[i][this.category][j]])
						category[items[i][this.category][j]]++;
					else 
						category[items[i][this.category][j]] = 1;
				}
			} else {
				if (category[items[i][this.category]])
					category[items[i][this.category]]++;
				else 
					category[items[i][this.category]] = 1;
			}
			
			
			
			
		}
		var bArray = [];
		for (var i in category)
		{
			if(i==""){
				continue;
			}
			bArray.push(i);
		}
		bArray = bArray.sort();
		
		this.filters = initialFilters;
		
		for (var i = 0; i < bArray.length; i++)
		{
			var myfilter = {
				label: bArray[i],
				filter: []
			}
			var filter2 = {}
			filter2[this.category] = {
				has: [bArray[i]]
			};
			myfilter.filter.push(filter2);
			this.filters[bArray[i]] = myfilter;
			
		}
		
		
		
		
		// console.log(this.filters, "CATEGORY FILTER");
		
		this.display();
	}
	
})


/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/productPoolDisplay.js */

var ProductPoolDisplay = Class.extend({

	



});


var GridPoolDisplay = ProductPoolDisplay.extend({

	display: function(items) {
		
	}
	
})



/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/productPoolFacets.js */
/*
 * Available Facet Abstract Types:
 * 1.	CategoryFilterFacet - specify a pfeed_xxx property.. and it builds the item automatically...
 * 2.	ProductPoolFacet - specify your filters manually....
 * 
 * Available Display Handlers:
 * 1.	ButtonDisplayHandler
 * 2.	ToggleButtonDisplayHandler
 * 3.	SelectFieldDisplayHandler
 * 4.	ToggleTabsDisplayHandler
 * 5.	TabsDisplayHandler
 * 
 */


var GenericDropDownFacet = ProductPoolFacet.extend( {
	init: function(filters, id, title) {
		this.facetId = id;
		this.facetTitle = title;
		this._super(id, "FILTER", filters);
	},
	setupDisplay: function() {
		// The dropdown title is here. 
		return new SelectFieldDisplayHandler(this.facetTitle, this);
		          	
	}
})



var GenericCheckboxFacet = ProductPoolFacet.extend( {
	init: function(filters, id, title) {
		this.facetId = id;
		this.facetTitle = title;
		this._super(id, "FILTER", filters);
	},
	setupDisplay: function() {
		// The dropdown title is here. 
		return new TabsDisplayHandler(this.facetTitle, this);
		          	
	}
})


var LinksFilterFacet = ProductPoolFacet.extend({
	
	facetChanged: function() {
		var values = this.displayHandler.getSelectedValues();

		if (values.length > 0) {
			var myValue = values.pop();
			
			var url = this.getFilters()[myValue].url;
			window.location = url;
		}
	}
	
})


var ColorFacet = ProductPoolFacet.extend({
	
	init: function() {
		var filter = {
			"all": {
				selected: true,
				label: "show all",
				filter: [],
				selectAll: true
			},
			"graysilver": {
				label: "gray/silver",
				filter: [{pfeed_color: {has:"Grey"}},{pfeed_color: {has:"Silver"}}]
			},
			"pink": {
				label: "pink",
				filter: [{pfeed_color: {has:"Pink"}}]
			},
			"white": {
				label: "white",
				filter: [{pfeed_color: {has:"White"}}]
			},
			"green": {
				label: "green",
				filter: [{pfeed_color: {has:"Green"}}]
			},
			"yelloworange": {
				label: "yellow/orange",
				filter: [{pfeed_color: {has:"Yellow"}},{pfeed_color: {has:"Orange"}}]
			},
			"brownbeige": {
				label: "brown/beige",
				filter: [{pfeed_color: {has:"Brown"}},{pfeed_color: {has:"Beige"}}]
			},
			"red": {
				label: "red",
				filter: [{pfeed_color: {has:"Red"}}]
			},
			"blue": {
				label: "blue",
				filter: [{pfeed_color: {has:"Blue"}}]
			},
			"black": {
				label: "black",
				filter: [{pfeed_color: {has:"Black"}}]
			},
			"purple": {
				label: "purple",
				filter: [{pfeed_color: {has:"Purple"}}]
			},
			"multiprint": {
				label: "multiprint",
				filter: [{pfeed_color: {has:"Multiprint"}}]
			}
		};
		this._super("color", "FILTER", filter);
	},
	
	setupDisplay: function() {
		return new TabsDisplayHandler("Shop By Color", this);
	}
})

var BrandSelectFacet = CategoryFilterFacet.extend({
	
	init: function() {
		this.category = "pfeed_brand";
		this._super("brandSelect", "FILTER", {});
	},
	
	handlePoolData: function(items) {
		
		var initialFilters = {
			'showall': {
				label: "show all",
				selectAll: true,
				single: true,
				selected: true
			}
		}
		
		this._super(items, initialFilters);
		
	},
	
	setupDisplay: function() {
		return new SelectFieldDisplayHandler("Shop By Brand", this);
	}
})

var SortingFacet = ProductPoolFacet.extend({
	
	init: function() {
		
		var filters = {
			"pricehightolow": {
				label: "price: high to low",
				filter: ["pfeed_priceforfilters logicaldesc"]
			},
			"pricelowtohigh": {
				label: "price: low to high",
				filter: ["pfeed_priceforfilters logical"]
			},
			"toploved": {
				label: "top loved",
				filter: ["votes logicaldesc"]
			}
		}		

		
		this._super("sortSelect", "SORT", filters);
	},
	
	setupDisplay: function() {
		return new SelectFieldDisplayHandler("Sort By", this);
	},
	
	facetChanged: function() {
		this.parent.poolContainer.trigger({
			type: "sortFacetChanged",
			changedFacet: this
		});
	}
})

var ResetFacet = ProductPoolFacet.extend({
	
	init: function(){
		this._super("resetFacet", "FILTER", {});
	},
	
	setupDisplay: function() {
		return new ButtonDisplayHandler("Reset", this);
	},
	
	facetChanged: function() {
		this.parent.poolContainer.trigger("resetFacets");
	}
})











/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/scroller.js */
	
	var Scroller = function(elem) {
		
		elem = jQuery(elem);
	
		if (finder.isTablet()) {
            return new TouchScroll(elem[0], {
                elastic: true
            });
        } else {
			
			elem.jScrollPane({autoReinitialise: true, autoReinitialiseDelay: 1000});
			return elem.data('jsp');
		}
	
		
		this.scrollbarWidth = 13;
		this.dragGive = 100;
		this.scrollbarPadding = 10;

		elem = jQuery(elem);
		elem.append("<div style='clear:both; padding-top: 20px;'></div>");
		
		var newWidth = elem.width() - this.scrollbarWidth - 10;
		
		elem.wrapInner("<div class='innerWrapper'></div>");
		
		
		elem = jQuery(".innerWrapper", elem)
		
		
		
		// take the content and put it inside of a container...
		this.contentContainer = elem.parent();
		this.contentContainer.css("overflow", "hidden");
		this.content = elem;
		
		this.content.addClass("scrollingContent");
		this.content.attr("alt", 0);
		

		// make the content div narrower for the scrollbar...
		this.content.css("width", this.contentContainer.width()-this.scrollbarWidth - this.scrollbarPadding + "px");

		this.content.css("-webkit-transform", "translate3d(0px, 0px, 0px)");
		
		// create a container to hold the scrollbar...
		this.scrollbar = jQuery("<div class='scrollerScrollbar' style='position: absolute; top: 0px; right: 0px;'></div>");		
		this.scrollbarContainer = jQuery("<div class='scrollerBarContainer'></div>");
		this.scrollbarContainer.append(this.scrollbar);
		this.scrollbarContainer.css({position: "absolute", width: this.scrollbarWidth + "px", height: this.contentContainer.height()+"px", top: "0px", right: "0px"});
		this.contentContainer.append(this.scrollbarContainer);
		
		// create faders...
		this.topFade = jQuery("<div class='scrollerTopFade' style='width: "+this.content.width()+"px;'></div>");
		this.bottomFade = jQuery("<div class='scrollerBottomFade' style='width: "+this.content.width()+"px;'></div>");
		this.contentContainer.append(this.topFade);
		this.contentContainer.append(this.bottomFade);
		
		this.containerHeight = this.contentContainer.height();
		this.scrollbarHeight = this.scrollbar.height();
		this.contentHeight = this.content.height();
		var self = this;
		
		this.updateHeights = function() {

			this.contentHeight = this.content.height();
			
			
			if (this.contentHeight < this.containerHeight)
			{
				this.scrollbarContainer.hide();
			} else {
				this.scrollbarContainer.show();
			}
		}
		

		
		
		this.positionChanged = function() {
			var percent = self.scrollbar.css("top").replace("px", "") / (self.containerHeight - self.scrollbarHeight);
			var offset = Math.floor((this.contentHeight - this.containerHeight) * percent);
			//this.content.css("margin-top", "-"+offset+"px");
			self.moveContent("-" + offset);
			this.checkFade();
		}
		
		this.checkFade = function() {
			offset = Math.abs(this.content.attr("alt"));
			var ch = this.contentHeight - this.containerHeight;
			
			
			if (offset <= 0)
				this.topFade.hide();
			else 
				this.topFade.show();
				
			if (offset >= ch)
				this.bottomFade.hide();
			else 
				this.bottomFade.show();
		}
		
		this.checkDragPosition = function() {
			var offset = this.content.attr("alt");
			var scrollHeight = this.contentHeight - this.containerHeight;
			
			if (offset > 0)
			{
				this.content.addClass("scrollerTransition");
				//this.content.css("margin-top", "0px");
				this.moveContent(0);
			}
			
			if (Math.abs(offset) > scrollHeight)
			{
				this.content.addClass("scrollerTransition");
				this.moveContent("-" + scrollHeight);
				//this.content.css("margin-top", "-" + scrollHeight + "px");
			}

		},
		
		this.scrollTo = function(top, left) {
			this.moveContent(top);
		}
		
		this.moveContent = function(newtop) {
			this.content.attr("alt", newtop);
			console.log(newtop);
			if (Modernizr.csstransitions) {
				this.content.css({
						"-webkit-transform": "translate3d(0px, " + newtop + "px, 0px)",
						"-moz-transform": "translateY(" + newtop + "px)",
						"-o-transform": "translateY(" + newtop + "px)",
						"-ms-transform": "translateY(" + newtop + "px)"						
						});
			} else {		
				this.content.css("margin-top", newtop + "px");				
			}
		}
		
		this.content.bind("contentChanged", function() {

			self.updateHeights();
			self.scrollbar.css("top", "0px");
			self.positionChanged();
		});
		
		this.normalizeNewtop = function(newtop) {
			var give = this.dragGive;
			
			var dragMin = (this.contentHeight - this.containerHeight) * -1 - give;
			
			var dragMax = give;
			
			if (newtop < dragMin)
				newtop = dragMin;
				
			if (newtop > dragMax)
				newtop = dragMax;
				
			return newtop;
			
		}
		
		this.contentContainer.mousewheel(function(event, delta) {
			
			event.preventDefault(); 
			
			self.updateHeights();
			
			var minMove=20;
			var totalMove = minMove*delta;
			var newtop = self.content.attr("alt") * 1 + totalMove;
			
			newtop = self.normalizeNewtop(newtop)
			
			self.content.addClass("scrollerTransition");
			self.moveContent(newtop);
			self.positionScrollbar();
			
			if (Modernizr.csstransitions) {
				clearTimeout(self.checkTimeout);
				self.checkTimeout = setTimeout(function(){
					self.checkDragPosition();
				}, 100);
			} else {
				self.checkDragPosition();
			}
			
			
		});
		
		this.checkFlick = function(pixels, time) {
			console.log(pixels + " " + time);
			return false;
		}
		
		this.content.bind("touchstart", function(event) {

			event.preventDefault();
			
			self.updateHeights();
			
			self.contentTouchY = event.originalEvent.touches[0].pageY;
			self.contentTouchMarginY = self.content.attr("alt");
			self.movementNoticed = false;
			
			
			if (isNaN(self.contentTouchMarginY))
			{
				self.content.attr("alt", "0");
				self.contentTouchMarginY = 0
			}
		
			
			jQuery(document).bind("touchend", function () {
				jQuery(document).unbind("touchmove");
				jQuery(document).unbind("touchend");
				
				
				/*
				console.log(event.originalEvent.touches[0].pageY + " - " + self.moveTouchY);
				
				var flick = self.checkFlick(event.originalEvent.touches[0].pageY - self.moveTouchY, event.timestamp - self.moveTouchTime);
				
				if (!flick) {
					try {
						self.checkDragPosition();
					} 
					catch (e) {
					
					}
				}
				*/
				
				// see if this is a click...
				if (!self.movementNoticed) {
					// issue a click event..
					console.log("click");
					var clickEvent = document.createEvent("MouseEvent");
					clickEvent.initMouseEvent(
						"click", //type
						true, //canBubble
						true, //cancelable
						event.originalEvent.view,
						1, //detail (number of clicks for mouse events)
						event.originalEvent.screenX,
						event.originalEvent.screenY,
						event.originalEvent.clientX,
						event.originalEvent.clientY,
						event.originalEvent.ctrlKey,
						event.originalEvent.altKey,
						event.originalEvent.shiftKey,
						event.originalEvent.metaKey,
						event.originalEvent.button,
						null// relatedTarget
					);
					event.target.dispatchEvent(clickEvent);
				}
				
				self.checkDragPosition();
			});
			
			jQuery(document).bind('touchmove', function(event) {
				event.preventDefault();
				
				self.moveTouchY = event.originalEvent.touches[0].pageY;
				self.moveTouchTime = event.timestamp;
				
				// check for movement...
				if (Math.abs (self.contentTouchY - event.originalEvent.touches[0].pageY) > 5) {
					self.movementNoticed = true;
				}
				
				var newtop = self.contentTouchMarginY - (self.contentTouchY - event.originalEvent.touches[0].pageY);
				newtop = Math.min(0 + self.dragGive, newtop);
				
				newtop = Math.max(newtop, (self.contentHeight - self.containerHeight + self.dragGive) * -1);
					
				self.moveContent(newtop);	
				//self.content.css("margin-top", newtop + "px");				
				
				self.checkFade();
				
				
				self.positionScrollbar();
				
				
				
			});
			
		});
		
		this.positionScrollbar = function() {
			// position scrollbar...
			var percent = (self.content.attr("alt") * -1) / (self.contentHeight - self.containerHeight);
			var offset = Math.floor((self.containerHeight - self.scrollbarHeight) * percent);
			
			offset = Math.max(offset, 0);
			offset = Math.min(offset, self.containerHeight - self.scrollbarHeight);
			
			self.scrollbar.css("top", offset + "px");
		}
		
		
		this.scrollbar.bind("mousedown touchstart", function(event) {
			event.preventDefault();
			
			self.updateHeights();

			try {
				event.originalEvent.touches[0].pageY;
				event.pageY = event.originalEvent.touches[0].pageY;
			} catch(e) { };
			self.dragStartY = event.pageY;
			self.scrollbarTop = self.scrollbar.css("top").replace("px", "") * 1;
		
			// bind mouseup and mousemove events...
			var elem = jQuery(this);
			jQuery(document).bind("mouseup touchend", function() {
				jQuery(document).unbind("mousemove");
				jQuery(document).unbind("touchmove");
				jQuery(document).unbind("touchend");
				jQuery(document).unbind("mouseup");
			});
			
			jQuery(document).bind("mousemove touchmove", function(event) {
				event.preventDefault();
				try {
					event.originalEvent.touches[0].pageY;
					event.pageY = event.originalEvent.touches[0].pageY;
				} catch(e) { };
				try {
					var newtop = self.scrollbarTop + (event.pageY - self.dragStartY);
					newtop = Math.max(newtop, 0);
					newtop = Math.min(newtop, self.containerHeight - self.scrollbarHeight);
					self.scrollbar.css("top", newtop + "px");
					self.positionChanged();
				} catch(e) {  }
			});
			
		});
		
		try {
			this.content[0].addEventListener("webkitTransitionEnd", function() {
				jQuery(this).removeClass("scrollerTransition");
				self.checkFade();
			}, true);
		} catch(e) {
			// do nothing..
		}
		try {
			this.content[0].addEventListener("transitionend", function() {
				jQuery(this).removeClass("scrollerTransition");
				self.checkFade();
			}, true);
		} catch(e) {
			// do nothing..
		}
		try {
			this.content[0].addEventListener("OTransitionEnd", function() {
				jQuery(this).removeClass("scrollerTransition");
				self.checkFade();
			}, true);
		} catch(e) {
			// do nothing..
		}

		this.updateHeights();
		
	}

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/skavaInteropAutoTracking.js */

var SkavaInteropAutoTracking = Class.extend({
	
	init: function() {
		
		var self = this;
		jQuery("#finderContainer").bind("arcPageUrlChanged", function(event) {
			
			var key = event.page.navId + "/" + event.params.argc.join("/");
			self.handleTracking(key);
			
		});
		
	},
	
	handleTracking: function(key) {
		
		// try to lookup the key in our tracking object...
		
		if (finder.getConfig().tracking[key]) {
			// key exists... track it..
			finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().tracking[key]);
		}
		
	}
	
	
	
});
	

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/slider.js */
var Slider = function(wrapper) {
		this.wrapper = jQuery(wrapper);
		this.wrapperWidth = this.wrapper.width();
		this.wrapperHeight = this.wrapper.height();
		
		var self = this;
		
		//setup the slides..
		this.slides = jQuery(".mcom_slide", this.wrapper).each(function(i) {
			jQuery(this).css({
					width: self.wrapperWidth+"px", 
					height: self.wrapperHeight+"px", 
					//'-webkit-transform': "translate3d(0px, 0px, 0px)",
					'position': 'absolute',
					top: "0px",
					left: i * self.wrapperWidth + "px"
			}).attr("slideNum", i);
		});	
		
		this.slideContainer = jQuery(".mcom_slideContainer", this.wrapper).css ({
			position: "absolute",
			width: self.slides.length * self.wrapperWidth,
			top: "0px",
			left: "0px",
			//'-webkit-transform': "translate3d(0px, 0px, 0px)",
			'-webkit-transition-property': '-webkit-transform',
			'-webkit-transition-duration': '.5s',
			'-webkit-transition-timing-function': 'ease-in'
		});
		
		this.currentSlide=0;
		this.maxSlides = this.slides.length;
		this.speed=500;
		
		this.swipeStatus = function(event, phase, direction, distance)
			{
				//If we are moving before swipe, and we are going Lor R in X mode, or U or D in Y mode then drag.
				if( phase=="move" && (direction=="left" || direction=="right") )
				{
					var duration=0;
					
					if (direction == "left")
						self.scrollSlides((self.wrapperWidth * self.currentSlide) + distance, duration);
					
					else if (direction == "right")
						self.scrollSlides((self.wrapperWidth * self.currentSlide) - distance, duration);
					
				}
				
				else if ( phase == "cancel")
				{
					self.scrollSlides(self.wrapperWidth * self.currentSlide, self.speed);
				}
				
				else if ( phase =="end" )
				{
					if (direction == "right")
						self.previousSlide()
					else if (direction == "left")			
						self.nextSlide();
				}
			}
		
		this.previousSlide = function()
		{
			this.currentSlide = Math.max(this.currentSlide-1, 0);
			self.scrollSlides( this.wrapperWidth * this.currentSlide, self.speed);
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}
	
		this.nextSlide = function()
		{
			this.currentSlide = Math.min(this.currentSlide+1, this.maxSlides-1);
			self.scrollSlides( this.wrapperWidth * this.currentSlide, self.speed);
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}
		
		this.showSlide = function(num) {
			if (isNaN(num))
			{
				// try to find this slide..
				var items = jQuery(num, this.slideContainer);
				if (items.length == 0)
					return;
				num = items.attr("slideNum");				
			} 
			
			
			var slidesApart = Math.abs(num - this.currentSlide);
			this.currentSlide = num;
			
			self.scrollSlides( self.wrapperWidth * this.currentSlide, this.speed + (Math.max(slidesApart-2, 0) * 300));
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}
			
		/**
		* Manuallt update the position of the imgs on drag
		*/
		this.scrollSlides = function(distance, duration)
		{
			this.slideContainer.css("-webkit-transition-duration", (duration/1000).toFixed(1) + "s");
			
			//inverse the number we set in the css
			var value = (distance<0 ? "" : "-") + Math.abs(distance).toString();
			
			if (finder.isTablet()) {
				this.slideContainer.css("-webkit-transform", "translate3d(" + value + "px,0px,0px)");
			} else {
				this.slideContainer.animate({
					"left": value + "px"
				}, 1000, "easeOutQuint");
			}
		}
		
		var swipeOptions = {
			triggerOnTouchEnd : true,	
			swipeStatus : self.swipeStatus,
			threshold:200,
			allowPageScroll:"auto"
		}
		
		//if (Modernizr.touch)
			//this.slideContainer.swipe(swipeOptions);
	}

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/slider2.js */
var Slider2 = function(wrapper) {
		this.wrapper = jQuery(wrapper);
		this.wrapperWidth = this.wrapper.width();
		this.wrapperHeight = this.wrapper.height();
		
		var self = this;
		
		//setup the slides..
		this.slides = jQuery(".mcom_slide", this.wrapper).each(function(i) {
			jQuery(this).css({
					width: self.wrapperWidth+"px", 
					height: self.wrapperHeight+"px", 
					//'-webkit-transform': "translate3d(0px, 0px, 0px)",
					'position': 'absolute',
					top: "0px",
					left: "0px",
					border: "1px solid black",
					opacity: .5
			}).attr("slideNum", i);
		});	
		
		this.currentSlide=0;
		this.maxSlides = this.slides.length;
		this.speed=500;
		
		this.eachAngle = 360 / this.maxSlides;
		
		this.slides.each(function(i) {
			jQuery(this).css({
				"-webkit-transform": "translate3d(0px, 0px, " + 400 + "px) rotateY(" + (self.eachAngle * i) + "deg)"
			})
		});
		
		this.slideContainer = jQuery(".mcom_slideContainer", this.wrapper).css ({
			position: "absolute",
			width: self.slides.length * self.wrapperWidth,
			top: "0px",
			left: "0px",
			//'-webkit-transform': "translate3d(0px, 0px, 0px)",
			'-webkit-transition-property': '-webkit-transform',
			'-webkit-transition-duration': '.5s',
			'-webkit-transition-timing-function': 'ease-in',
			'-webkit-prespective': "1000px"
		});
		
		
		
		this.swipeStatus = function(event, phase, direction, distance)
			{
				//If we are moving before swipe, and we are going Lor R in X mode, or U or D in Y mode then drag.
				if( phase=="move" && (direction=="left" || direction=="right") )
				{
					var duration=0;
					
					if (direction == "left")
						self.scrollSlides((self.wrapperWidth * self.currentSlide) + distance, duration);
					
					else if (direction == "right")
						self.scrollSlides((self.wrapperWidth * self.currentSlide) - distance, duration);
					
				}
				
				else if ( phase == "cancel")
				{
					self.scrollSlides(self.wrapperWidth * self.currentSlide, self.speed);
				}
				
				else if ( phase =="end" )
				{
					if (direction == "right")
						self.previousSlide()
					else if (direction == "left")			
						self.nextSlide();
				}
			}
		
		this.previousSlide = function()
		{
			this.currentSlide = Math.max(this.currentSlide-1, 0);
			self.scrollSlides( this.wrapperWidth * this.currentSlide, self.speed);
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}
	
		this.nextSlide = function()
		{
			this.currentSlide = Math.min(this.currentSlide+1, this.maxSlides-1);
			self.scrollSlides( this.wrapperWidth * this.currentSlide, self.speed);
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}
		
		this.showSlide = function(num) {
			if (isNaN(num))
			{
				// try to find this slide..
				var items = jQuery(num, this.slideContainer);
				if (items.length == 0)
					return;
				num = items.attr("slideNum");				
			} 
			
			
			var slidesApart = Math.abs(num - this.currentSlide);
			this.currentSlide = num;
			
			self.scrollSlides( self.wrapperWidth * this.currentSlide, this.speed + (Math.max(slidesApart-2, 0) * 300));
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}
			
		/**
		* Manuallt update the position of the imgs on drag
		*/
		this.scrollSlides = function(distance, duration)
		{
			this.slideContainer.css("-webkit-transition-duration", (duration/1000).toFixed(1) + "s");
			
			//inverse the number we set in the css
			var value = (distance<0 ? "" : "-") + Math.abs(distance).toString();
			
			this.slideContainer.css("-webkit-transform", "rotateY(" + value + "deg)" /*"translate3d("+value +"px,0px,0px)"*/);
		}
		
		var swipeOptions = {
			triggerOnTouchEnd : true,	
			swipeStatus : self.swipeStatus,
			threshold:200,
			allowPageScroll:"auto"
		}
		
		if (Modernizr.touch)
			this.slideContainer.swipe(swipeOptions);
	}

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/base/widgets.js */

var Widgets = Class.extend({



    init: function(){
    
		  
    
    },
	
	
	initializeWidgets: function(parent) {
		
		var self = this;
		
		// find all spotlight callouts..
		jQuery("[role='spotlightCallout']", parent).each(function() {
			var item = jQuery(this);
			
			self.initializeSpotlightCallout(item);
			item.attr("originalWidth", item.width());

		}).append("<div style='clear:both'></div>").hover( function() {
			var item = jQuery(this);
			item.addClass("hover");
			
			if (Modernizr.csstransitions)
				return;
			
			var background = jQuery(".background IMG", item);
			background.stop().animate({width: (1*item.attr("originalWidth") + 10) + "px"});
			
			
		}, function() {
			var item = jQuery(this);
			
			item.removeClass("hover");
			
			if (Modernizr.csstransitions)
				return;
			
			var background = jQuery(".background IMG", item);
			background.stop().animate({width: (1*item.attr("originalWidth")) + "px"});
			
		});
		
		
		// initialize the carousel...
		jQuery("[role='carousel']", parent).each(function() {
			
			self.initiateCarousel(jQuery(this));
			
			
			
			
		}).hover(function() {
			var item = jQuery(this);
			item.addClass("hover");
		}, function() {
			var item = jQuery(this);
			item.removeClass("hover");
		})
		
		jQuery("DIV[href]").click(function() {
			var link = jQuery(this).attr("href");
			
			if (link.toLowerCase().substring(0,4) == "http")
				platformOpenNewWindow(link, "_blank", false);
			else 
				window.location = link;
		})
		
			
	},
	
	initializeSpotlightCallout: function(container) {
		
		var id = container.attr("id");
		
		var templateHTML = jQuery(".template#spotlightCallout").html();
		templateHTML = templateHTML.replace(/\$\{id\}/g, id);
		templateHTML = templateHTML.replace(/\$\{assetsDirectory\}\//g, finder.getConfig().assetsDirectory);
		var callout = jQuery(templateHTML).appendTo(container);
		
		var img = jQuery("<img src='" + finder.getConfig().assetsDirectory + "images/spotlights/" + id + "/background.jpg'>");
		
		img.bind("load", function() {
			var self = jQuery(this);
			
			self.parent().css({
				width: self.width() + "px",
				height: self.height() + "px"
			})
		})
		
		jQuery(img).appendTo(jQuery(".background", callout));
			
			
		
	},
	
	initiateCarousel: function(container) {
	
		// update the html...
		
		var carouselId = container.attr("id");
		var href = container.attr("link");
		
		container.wrapInner("<div class='rotatingAds'></div>");
		
		container.addClass("carouselWidget");
		
		
		
		var rotatingAds = jQuery(".rotatingAds", container);
		
		rotatingAds.wrap("<div class='rotatingWrapper'></div>");
		
		rotatingAds.css("height", (container.height() - 34) + "px");
		
		
		var myHeight = rotatingAds.height();
		var eachWidth = container.width();

		// there are divs inside here... grab them and work on them...
		var items = rotatingAds.children();
		
		rotatingAds.css("width", container.width() * (items.length + 1));
		
		// do some tricky.. take hte first item.. clone it.. and add it in at the end..
		jQuery(items[0]).clone().appendTo(rotatingAds);
		
		items = rotatingAds.children();
		
		items.each(function() {
			var item = jQuery(this);
			var id = item.attr("id");
			item.html("<img class='button' src='" + finder.getConfig().assetsDirectory + "images/spotlights/rotatingAds/" + id + "/buttonimage.png'>");
			item.css("background", "url('" + finder.getConfig().assetsDirectory + "images/spotlights/rotatingAds/" + id + "/background_image.jpg')");
			//item.css("height", myHeight + "px");
			item.css("width", eachWidth + "px");
		})
		
		jQuery("<div class='heading'></div>").insertBefore(rotatingAds.parent());
		var header = jQuery(".heading", container);
		
		jQuery("<img src='" + finder.getConfig().assetsDirectory + "images/spotlights/rotatingAds/" + carouselId + "_header.png'>").click(function(event) {
			event.preventDefault();
			event.stopPropagation();
			window.location = href;
		}).appendTo(header);
		
		jQuery("<div class='dotContainer'></div>").css("width", "50%").appendTo(header);
		var dotContainer = jQuery(".dotContainer", header);
		
		for (i = 0; i < items.length - 1; i++)
		{
			jQuery("<div class='dot'></div>").appendTo(dotContainer);
		}
		
		jQuery(dotContainer.children()[0]).addClass("on");

		rotatingAds.attr("selected", "0");
		rotatingAds.attr("paused", "");
		
		
		
		
		
		var intervalFunc = function() {
			
			// get selected..
			var selected = 1 * rotatingAds.attr("selected");
			var children = rotatingAds.children();
			
			selected = (selected + 1) % children.length;
			rotatingAds.attr("selected", selected);
			
			
			if (!finder.isTablet()) {
				rotatingAds.animate({
					"margin-left": (-1 * eachWidth * selected) + "px"
				}, 2000, "easeInOutQuint", function(){
					var me = jQuery(this);
					var meSelected = 1 * me.attr("selected");
					
					
					
					if (meSelected == 0) 
						me.css("margin-left", "0px");
					
				});
			} else {
				rotatingAds.css("-webkit-transition", "all 2000ms ease-in-out");
				rotatingAds.css({
					"-webkit-transform": "translate3d(" + (-1 * eachWidth * selected) + "px, 0, 0)"
				});
				var meSelected = 1 * rotatingAds.attr("selected");
				if (meSelected == 0) 
					rotatingAds.css("-webkit-transform", "translate3d(0px, 0px, 0px)");
			}
			
			if (selected == children.length - 1)
			{
				//last one..
				selected = 0;
			}
			
			rotatingAds.attr("selected", selected);
			
			setTimeout(function() {
				jQuery(".dot", dotContainer).removeClass("on")
				jQuery(".dot:nth-child(" + (selected + 1) + ")", dotContainer).addClass("on")
			}, 1000);
			
		}

		var interval = setInterval(intervalFunc, 5000);

		rotatingAds.hover(function() {
			clearInterval(interval);
		}, function() {
			if (rotatingAds.attr("paused") == "")
				interval = setInterval(intervalFunc, 5000);
		})
		
		jQuery(".dot", dotContainer).click(function() {
			var dot = jQuery(this);
			rotatingAds.attr("paused", "true");
			
			var dotNumber = dot.index();
			
			clearInterval(interval);
			
			rotatingAds.attr("selected", dotNumber - 1);
			intervalFunc.call();
			
			
		})


	}
	
	
	
	
});

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/GgFinder.js */

var GgFinder = MacysFinder.extend({


    setup: function(){
    	this.defaultPage = this.getConfig().defaultPage;


        /* GLOBAL EVENT HANDLERS GO HERE */
        finder.autotracker = new AutoTracker();

        /* END GLOBAL EVENT HANDLERS */


        this.navView();   // all code for running the nav should be associeted with a navView



        this.startFinder();
    },







    navView : function(){




        // as per bb view, first we set $el
        var $el = $('#navContainer');
        // now set listeners for each button and apply click logic
        $el.find('.navitem').on('click', function(){
            // first get the desc attribute off the element which may exist or be null
            var desc = $(this).attr('desc');
            if (!desc) desc = '';
            //console.log('desc = ', desc);
            // check to see if we are clicking on something that does NOT have a dropdown
            if (   !$(this).hasClass('hasdropdown') ) {
                // if no dropdown then kill all dropdowns
                $el.find('.dropdownimage').removeClass('active');
            } else {
                // toggle the dropdowns active class and kill active on all siblings
                $el.find('.dropdownimage.'+desc).toggleClass('active').siblings().removeClass('active');
            }
        });

        //$('#navContainer').on()



    },

    setSlidingHeaderForTablet: function() {
		// flip to true if you want pools to be cached
		// table of contents
		// build the slider for the tablet
		var headerTemplate;
		var $container;

		// add up the width of all images
		var totalWidth;

		var $image;

		var $buttonContainer;
		// timrout to set url independent of animation
		var setUrlTimeout;

		var isSliderBuilt = false;
		// default current slide will be changed by processParams
		var currentIndex = 0;
		// store data objecrt for each slide here
		var currentArray = [];
		// total number of slides
		var totalSlides;
		// the image width, hopefully for each category they are the same .... looks like not
		var imageWidth;

		var $slider;

		var $buttons;

		function init( o ) {
			// if slider is not builkt in DOM, build it else just set the correct position
			if ( isSliderBuilt === false ) {
				buildSlider( o );
			} else {
				setCurrentSlide();
			}
		}

		function buildSlider( o ) {

			headerTemplate = "#shopHeaderTabletTemplate";
			$container = $(".marquee");

			currentArray = [];
			$container.empty();
			$container.addClass("tablet");
			// temporary button contianer to get it working
			$container.append("<div class='buttonContainer'></div><div class='slider'></div>");

			$slider = $container.find(".slider");
			$buttonContainer = $container.find(".buttonContainer");

			console.log(o, "THE OBJECT ******************");

			// bind swipe event to slider
			$slider.swipe( {
				swipeLeft:function(event, direction, distance, duration, fingerCount) {
					nextIndex();
				},
				swipeRight:function(event, direction, distance, duration, fingerCount) {
					prevIndex();
				},
				threshold: 30
			});

			// when transition eneds fire this event
			$slider.on( 'webkitTransitionEnd', function( event ) {
				setUrlTimeout = setTimeout( function(){
					var hash = currentArray[ currentIndex ].hash;
							//alert( hash );
						setUrl( hash );
					}, 700
				);
			});

			for ( var prop in o ) {
				if( o.hasOwnProperty( prop ) ){
					var clonedObject = jQuery.extend(true, {},  o[ prop ] );
					clonedObject.hash = prop;
					currentArray.push( clonedObject );
					console.log( $( headerTemplate ).tmpl( o[ prop ] ) );
					$( headerTemplate ).tmpl( o[ prop ] ).appendTo( $slider  );
				}
			}

			totalWidth = 0;
			var i = 0;
			totalSlides = currentArray.length;
			$images = $slider.find("img");

			console.log( $images.length, "IMAGES");
			$images.on("load", function() {
				//alert("loaded");
				imageWidth = $(this).width();
				totalWidth += imageWidth;
				i ++;
				if( i === $images.length ) {
					setMarquee();
				}
			});

			isSliderBuilt = true;

		}



		function setMarquee() {
			// make the width the entire width of all images
			$slider.width( totalWidth );
			// append temp buttons to get it working
			$images.each(function() {
				$buttonContainer.append("<div class='button'></div>");
			});

			$buttons = $buttonContainer.find(".button");

			$buttons.on("click", function( event ) {
				var index = $buttons.index( $(this) );
				setIndex( index );
			});

			setCurrentSlide();
		}

		function nextIndex() {

			var index = currentIndex;
			if ( index + 1 < totalSlides ) {
				index += 1;
				if ( setUrlTimeout ) clearTimeout( setUrlTimeout );

			}/* else {
				index = 0;
			}*/
			setIndex( index );
		}

		function prevIndex() {
			var index = currentIndex;
			if ( index - 1 >= 0 ) {
				index -= 1 ;
				if ( setUrlTimeout ) clearTimeout( setUrlTimeout );
			}/* else {
				index = totalSlides - 1;
			}*/
			setIndex( index );
		}

		function setIndex( index ) {
			currentIndex = index;
			var xNew = (index * imageWidth) * -1;
			$slider.css( "left", xNew );
		}

		function setCurrentSlide() {
			// check hash and get corresponding data for slide
			$slider = $container.find( ".slider" );

			var i = 0;
			while( i < currentArray.length ) {
				var o = currentArray[ i ];
				var hash = finder.currentPage.params.argc[ 1 ];
				if ( hash === o.hash) {
					currentIndex = i;
					break;
				}
				i++;
			}

			setIndex( currentIndex );
		}

		function reset() {
			isSliderBuilt = false;
			if ( $images ) $images.off();
			if ( $buttons ) $buttons.off();
			if ( $slider ) $slider.off();
		}

		function setUrl( hash ) {
			window.location = "#/" + finder.currentPage.navId + "/" + finder.currentPage.params.argc[ 0 ] + "/" + hash;
		}

		return {
			init: init,
			reset: reset
		};
    },
    
    pageChanged: function(page){
        this.highlightSelected(page);

        // close all drop downs on any page load
        $('#navContainer').find('.dropdownimage').removeClass('active');

    },
    
    highlightSelected: function(page){
        
    },
	
	getConfig: function() {
		return SiteConfig;
	}
    
});


var PoolHelper = Class.extend({
    
	parseEntry: function(entry) {
		
		/*
		if (entry.pfeed_specialsizes && !(entry.pfeed_specialsizes instanceof Array))
			entry.pfeed_specialsizes = entry.pfeed_specialsizes.split(",");
			
		if (entry.pfeed_color && !(entry.pfeed_color instanceof Array))
			entry.pfeed_color = entry.pfeed_color.split(",");
			
			
		// parse teh color size etc...
		entry.colorSize = {};
		if (entry.pfeed_colorsizeex) {
			
			var upcs = [];
			if (entry.pfeed_colorsizeexupc) {
				upcs = jQuery.parseJSON(entry.pfeed_colorsizeexupc);
			}
			
			var skus = [];
			if (entry.pfeed_colorsizeexskuid) {
				skus = jQuery.parseJSON(entry.pfeed_colorsizeexskuid);
			}
			
			var colorSizes = entry.pfeed_colorsizeex.replace(/\],\[/gi, "]|[").split("|");
			for (var i = 0; i < colorSizes.length; i++) {
				var item = colorSizes[i].replace("[", "").replace("]", "").split(",");
				entry.colorSize[item[0]+"_"+item[1]] = {
					color: item[0],
					size: item[1],
					id: upcs[i] ? upcs[i] : "",
					skuid: skus[i] ? skus[i] : ""
				}
			}
			
			if (entry.pfeed_upcs) {
				upcs = jQuery.parseJSON(entry.pfeed_upcs);
				for (var i = 0; i < upcs.length; i++) {
					var thisItem = upcs[i];
					if (entry.colorSize[thisItem.color + "_" + thisItem.size]) {
						jQuery.extend(entry.colorSize[thisItem.color + "_" + thisItem.size], thisItem);
					} else {
						entry.colorSize[thisItem.color + "_" + thisItem.size] = thisItem;
					}
					
				}
			}

		}
		*/	
	}
	
});



/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/GgHTMLPages.js */
var GgHTMLPages = {"imageMaps":"\n\n\n<map name=\"mapnav_forher\" id=\"mapnav_forher\">\n    <area shape=\"rect\" coords=\"5,53,104,186\" href=\"#\/landing\/her\" \/>\n    <area shape=\"rect\" coords=\"106,53,208,187\" href=\"#\/shop\/her\/sweaters\" \/>\n    <area shape=\"rect\" coords=\"210,53,308,187\" href=\"#\/shop\/her\/accessories\" \/>\n    <area shape=\"rect\" coords=\"309,52,405,187\" href=\"#\/shop\/her\/jewelrywatches\" \/>\n    <area shape=\"rect\" coords=\"405,52,499,188\" href=\"#\/landing\/beauty\" \/>\n    <area shape=\"rect\" coords=\"498,52,597,186\" href=\"#\/shop\/her\/pajamas\" \/>\n    <area shape=\"rect\" coords=\"597,52,696,184\" href=\"#\/shop\/her\/shoes\" \/>\n    <area shape=\"rect\" coords=\"696,52,789,187\" href=\"#\/shop\/her\/hatsglovesscarves\" \/>\n    <area shape=\"rect\" coords=\"790,50,888,187\" href=\"#\/shop\/her\/giftsets\" \/>\n    <area shape=\"rect\" coords=\"891,59,1016,116\" href=\"#\/shop\/her\/giftsunder\" \/>\n    <area shape=\"rect\" coords=\"893,118,1015,176\" href=\"#\/topgifts\/her\" \/>\n<\/map>\n\n<map name=\"mapnav_forhim\" id=\"mapnav_forhim\">\n    <area shape=\"rect\" coords=\"6,46,112,189\" href=\"#\/landing\/him\" \/>\n    <area shape=\"rect\" coords=\"113,46,208,189\" href=\"#\/shop\/him\/sweaters\" \/>\n    <area shape=\"rect\" coords=\"209,46,299,188\" href=\"#\/shop\/him\/shirts\" \/>\n    <area shape=\"rect\" coords=\"299,47,400,188\" href=\"#\/shop\/him\/accessories\" \/>\n    <area shape=\"rect\" coords=\"401,48,490,188\" href=\"#\/shop\/beauty\/cologne\" \/>\n    <area shape=\"rect\" coords=\"491,49,591,188\" href=\"#\/shop\/him\/watches\" \/>\n    <area shape=\"rect\" coords=\"592,49,690,189\" href=\"#\/shop\/him\/pajamas\" \/>\n    <area shape=\"rect\" coords=\"690,50,786,188\" href=\"#\/shop\/him\/shoes\" \/>\n    <area shape=\"rect\" coords=\"787,50,887,188\" href=\"#\/shop\/him\/outerwear\" \/>\n    <area shape=\"rect\" coords=\"891,64,1017,118\" href=\"#\/shop\/him\/giftsunder\" \/>\n    <area shape=\"rect\" coords=\"891,121,1016,170\" href=\"#\/topgifts\/him\" \/>\n<\/map>\n\n\n<map name=\"mapnav_forkids\" id=\"mapnav_forkids\">\n    <area shape=\"rect\" coords=\"3,46,122,185\" href=\"#\/landing\/kids\" \/>\n    <area shape=\"rect\" coords=\"123,47,252,185\" href=\"#\/shop\/kids\/baby\" \/>\n    <area shape=\"rect\" coords=\"252,48,375,186\" href=\"#\/shop\/kids\/girls\" \/>\n    <area shape=\"rect\" coords=\"375,49,502,185\" href=\"#\/shop\/kids\/boys\" \/>\n    <area shape=\"rect\" coords=\"501,49,631,183\" href=\"#\/shop\/kids\/shoes\" \/>\n    <area shape=\"rect\" coords=\"631,50,758,182\" href=\"#\/shop\/kids\/toys\" \/>\n    <area shape=\"rect\" coords=\"759,49,880,181\" href=\"#\/shop\/kids\/stocking\" \/>\n    <area shape=\"rect\" coords=\"894,63,1014,118\" href=\"#\/shop\/kids\/giftsunder\" \/>\n    <area shape=\"rect\" coords=\"895,120,1015,173\" href=\"#\/landing\/topgifts\/kids\" \/>\n<\/map>\n\n\n<map name=\"mapnav_forteens\" id=\"mapnav_forteens\">\n    <area shape=\"rect\" coords=\"3,45,116,185\" href=\"#\/landing\/teens\" \/>\n    <area shape=\"rect\" coords=\"118,46,238,187\" href=\"#\/shop\/teens\/girlsclothing\" \/>\n    <area shape=\"rect\" coords=\"239,47,347,187\" href=\"#\/shop\/teens\/girlsaccessories\" \/>\n    <area shape=\"rect\" coords=\"347,48,451,187\" href=\"#\/shop\/teens\/guysclothing\" \/>\n    <area shape=\"rect\" coords=\"451,48,557,186\" href=\"#\/shop\/teens\/guysaccessories\" \/>\n    <area shape=\"rect\" coords=\"558,47,663,186\" href=\"#\/shop\/teens\/guysactive\" \/>\n    <area shape=\"rect\" coords=\"664,46,766,188\" href=\"#\/shop\/teens\/gadgets\" \/>\n    <area shape=\"rect\" coords=\"767,46,881,187\" href=\"#\/shop\/teens\/girlsbeauty\" \/>\n    <area shape=\"rect\" coords=\"893,48,1014,93\" href=\"#\/shop\/teens\/giftsunder\" \/>\n    <area shape=\"rect\" coords=\"893,97,1014,139\" href=\"#\/landing\/topgifts\/girls\" \/>\n    <area shape=\"rect\" coords=\"891,141,1014,186\" href=\"#\/landing\/topgifts\/guys\" \/>\n<\/map>\n\n<map name=\"mapnav_forhome\" id=\"mapnav_forhome\">\n    <area shape=\"rect\" coords=\"3,44,120,186\" href=\"#\/landing\/homedecor\" \/>\n    <area shape=\"rect\" coords=\"120,45,237,186\" href=\"#\/shop\/homedecor\/kitchen\" \/>\n    <area shape=\"rect\" coords=\"238,45,344,188\" href=\"#\/shop\/homedecor\/coffee\" \/>\n    <area shape=\"rect\" coords=\"344,46,449,188\" href=\"#\/shop\/homedecor\/holiday\" \/>\n    <area shape=\"rect\" coords=\"450,47,556,186\" href=\"#\/shop\/homedecor\/homedecor\" \/>\n    <area shape=\"rect\" coords=\"556,47,664,187\" href=\"#\/shop\/homedecor\/barware\" \/>\n    <area shape=\"rect\" coords=\"665,48,768,186\" href=\"#\/shop\/homedecor\/gourmet\" \/>\n    <area shape=\"rect\" coords=\"767,50,884,186\" href=\"#\/shop\/homedecor\/giftsthatgivehope\" \/>\n    <area shape=\"rect\" coords=\"896,66,1017,114\" href=\"#\/shop\/homedecor\/giftsunder\" \/>\n    <area shape=\"rect\" coords=\"897,122,1013,170\" href=\"#\/landing\/topgifts\/homedecor\" \/>\n<\/map>\n\n<map name=\"mapnav_beauty\" id=\"mapnav_beauty\">\n    <area shape=\"rect\" coords=\"4,47,121,185\" href=\"#\/landing\/beauty\" \/>\n    <area shape=\"rect\" coords=\"121,47,247,185\" href=\"#\/shop\/beauty\/perfume\" \/>\n    <area shape=\"rect\" coords=\"248,47,373,186\" href=\"#\/shop\/beauty\/fragrancegifts\" \/>\n    <area shape=\"rect\" coords=\"374,47,503,189\" href=\"#\/shop\/beauty\/makeupgifts\" \/>\n    <area shape=\"rect\" coords=\"504,46,630,190\" href=\"#\/shop\/beauty\/cologne\" \/>\n    <area shape=\"rect\" coords=\"630,47,756,190\" href=\"#\/shop\/beauty\/skincaregifts\" \/>\n    <area shape=\"rect\" coords=\"756,47,871,190\" href=\"#\/shop\/beauty\/stockingstuffers\" \/>\n    <area shape=\"rect\" coords=\"892,48,1014,91\" href=\"#\/shop\/beauty\/giftsunder\" \/>\n    <area shape=\"rect\" coords=\"893,93,1014,138\" href=\"#\/landing\/topgifts\/beauty\" \/>\n    <area shape=\"rect\" coords=\"892,141,1014,186\" href=\"#\/landing\/topgifts\/cologne\" \/>\n<\/map>\n\n<map name=\"mapnav_top10\" id=\"mapnav_top10\">\n    <area shape=\"rect\" coords=\"12,50,132,98\" href=\"#\/topgifts\/her\" \/>\n    <area shape=\"rect\" coords=\"134,50,260,99\" href=\"#\/topgifts\/him\" \/>\n    <area shape=\"rect\" coords=\"260,51,386,99\" href=\"#\/topgifts\/kids\" \/>\n    <area shape=\"rect\" coords=\"387,51,510,100\" href=\"#\/topgifts\/girls\" \/>\n    <area shape=\"rect\" coords=\"512,51,640,100\" href=\"#\/topgifts\/guys\" \/>\n    <area shape=\"rect\" coords=\"642,52,758,99\" href=\"#\/topgifts\/homedecor\" \/>\n    <area shape=\"rect\" coords=\"764,51,885,98\" href=\"#\/topgifts\/beauty\" \/>\n    <area shape=\"rect\" coords=\"887,50,1018,98\" href=\"#\/topgifts\/cologne\" \/>\n<\/map>\n\n<map name=\"mapnav_stargifts\" id=\"mapnav_stargifts\">\n    <area shape=\"rect\" coords=\"3,42,112,186\" href=\"#\/landing\/stargifts\" \/>\n    <area shape=\"rect\" coords=\"113,43,214,187\" href=\"#\/stargifts\/ralphlauren\" \/>\n    <area shape=\"rect\" coords=\"214,44,320,187\" href=\"#\/stargifts\/tommyhilfiger\" \/>\n    <area shape=\"rect\" coords=\"320,45,428,187\" href=\"#\/stargifts\/calvinklein\" \/>\n    <area shape=\"rect\" coords=\"428,45,538,186\" href=\"#\/stargifts\/michaelkors\" \/>\n    <area shape=\"rect\" coords=\"537,46,644,186\" href=\"#\/stargifts\/inc\" \/>\n    <area shape=\"rect\" coords=\"644,44,752,187\" href=\"#\/shop\/stargifts\/marthastewart\" \/>\n    <area shape=\"rect\" coords=\"779,57,887,94\" href=\"#\/shop\/stargifts\/her\" \/>\n    <area shape=\"rect\" coords=\"779,97,888,135\" href=\"#\/shop\/stargifts\/him\" \/>\n    <area shape=\"rect\" coords=\"777,137,888,178\" href=\"#\/shop\/stargifts\/kids\" \/>\n    <area shape=\"rect\" coords=\"893,56,1008,95\" href=\"#\/shop\/stargifts\/teens\" \/>\n    <area shape=\"rect\" coords=\"894,98,1008,136\" href=\"#\/shop\/stargifts\/homedecor\" \/>\n    <area shape=\"rect\" coords=\"895,137,1011,177\" href=\"#\/shop\/stargifts\/beauty\" \/>\n<\/map>\n\n<map name=\"mapnav_giftsunder\" id=\"mapnav_giftsunder\">\n    <area shape=\"rect\" coords=\"42,51,165,100\" href=\"#\/shop\/her\/giftsunder\" \/>\n    <area shape=\"rect\" coords=\"202,49,334,98\" href=\"#\/shop\/him\/giftsunder\" \/>\n    <area shape=\"rect\" coords=\"364,49,493,100\" href=\"#\/shop\/kids\/giftsunder\" \/>\n    <area shape=\"rect\" coords=\"525,52,655,101\" href=\"#\/shop\/teens\/giftsunder\" \/>\n    <area shape=\"rect\" coords=\"684,50,816,98\" href=\"#\/shop\/homedecor\/giftsunder\" \/>\n    <area shape=\"rect\" coords=\"846,50,981,103\" href=\"#\/shop\/beauty\/giftsunder\" \/>\n<\/map>\n\n<map name=\"mapnav_recipient\" id=\"mapnav_recipient\">\n    <area shape=\"rect\" coords=\"7,52,119,170\" href=\"#\/landing\/recipient\" \/>\n    <area shape=\"rect\" coords=\"126,56,247,188\" href=\"#\/shop\/recipient\/trendsetter\" \/>\n    <area shape=\"rect\" coords=\"267,55,406,191\" href=\"#\/shop\/recipient\/fitness\" \/>\n    <area shape=\"rect\" coords=\"423,54,554,189\" href=\"#\/shop\/recipient\/jetsetter\" \/>\n    <area shape=\"rect\" coords=\"567,50,704,189\" href=\"#\/shop\/recipient\/sportsfan\" \/>\n    <area shape=\"rect\" coords=\"725,49,848,193\" href=\"#\/shop\/recipient\/partyhost\" \/>\n    <area shape=\"rect\" coords=\"871,46,1010,189\" href=\"#\/shop\/recipient\/coworker\" \/>\n<\/map>","structure":"\t<div id=\"navContainer\">\n\t\t<img class=\"mainimage\" src=\"randomDirectory\/images\/forCMS\/topnav.png\">\n        <img class=\"dropdownimage her\" src=\"randomDirectory\/images\/forCMS\/topnav_forher.png\" usemap=\"#mapnav_forher\">\n        <img class=\"dropdownimage him\" src=\"randomDirectory\/images\/forCMS\/topnav_forhim.png\" usemap=\"#mapnav_forhim\">\n        <img class=\"dropdownimage kids\" src=\"randomDirectory\/images\/forCMS\/topnav_forkids.png\" usemap=\"#mapnav_forkids\">\n        <img class=\"dropdownimage teens\" src=\"randomDirectory\/images\/forCMS\/topnav_forteens.png\" usemap=\"#mapnav_forteens\">\n        <img class=\"dropdownimage homedecor\" src=\"randomDirectory\/images\/forCMS\/topnav_forhome.png\" usemap=\"#mapnav_forhome\">\n        <img class=\"dropdownimage beauty\" src=\"randomDirectory\/images\/forCMS\/topnav_beauty.png\" usemap=\"#mapnav_beauty\">\n        <img class=\"dropdownimage top10gifts\" src=\"randomDirectory\/images\/forCMS\/topnav_top10.png\" usemap=\"#mapnav_top10\">\n        <img class=\"dropdownimage stargifts\" src=\"randomDirectory\/images\/forCMS\/topnav_stargifts.png\" usemap=\"#mapnav_stargifts\">\n        <img class=\"dropdownimage giftsunder\" src=\"randomDirectory\/images\/forCMS\/topnav_giftsunder.png\" usemap=\"#mapnav_giftsunder\">\n        <img class=\"dropdownimage shopbyrecipient\" src=\"randomDirectory\/images\/forCMS\/topnav_shopbyrecipient.png\" usemap=\"#mapnav_recipient\">\n        <!-- add all other nav dropdown images in here -->\n        <div class=\"buttonbucket\">\n            <a class=\"navitem\" href=\"#\/\" style=\"width: 98px\"><\/a>\n            <div class=\"navitem hasdropdown\" desc=\"her\" style=\"width: 64px\"><\/div>\n            <div class=\"navitem hasdropdown\" desc=\"him\" style=\"width: 64px\"><\/div>\n            <div class=\"navitem hasdropdown\" desc=\"kids\" style=\"width: 70px\"><\/div>\n            <div class=\"navitem hasdropdown\" desc=\"teens\" style=\"width: 82px\"><\/div>\n            <div class=\"navitem hasdropdown\" desc=\"homedecor\" style=\"width: 105px\"><\/div>\n            <div class=\"navitem hasdropdown\" desc=\"beauty\" style=\"width: 65px\"><\/div>\n            <div class=\"navitem hasdropdown\" desc=\"top10gifts\" style=\"width: 91px\"><\/div>\n            <div class=\"navitem hasdropdown\" desc=\"stargifts\" style=\"width: 86px\"><\/div>\n            <div class=\"navitem hasdropdown\" desc=\"giftsunder\" style=\"width: 94px\"><\/div>\n            <div class=\"navitem hasdropdown\" desc=\"shopbyrecipient\" style=\"width: 100px\"><\/div>\n            <a class=\"navitem\" href=\"#\" style=\"width: 100px\"><\/a><!--  shopping bag, where does this one go ?? -->\n        <\/div>\n    <\/div>\n\n\n    <div id=\"bodyContainer\">\n    \t<div class=\"loading\" style=\"display: none;\">\n        \t<div id=\"overlay\"><\/div>\n\t\t\t<div id=\"loadingMessage\"><img src=\"randomDirectory\/images\/loading_anim.gif\" border=\"0\"><\/div>\n        <\/div>\n        <div id=\"pageContainer\">\n        \n        <\/div>\n    \t\n    <\/div>\n\n\n\t<!--div id=\"footerContainer\">\n\t\t<div id=\"footer\">\n\t\t<\/div>\n\t<\/div-->","pages":{"home":"<div id=\"home\" class=\"finderPage\">\n\n\n    <img src=\"randomDirectory\/images\/forCMS\/redbackground1024px.png\">\n\n\n    <div class=\"childrenabsolute\">\n        <a class=\"animeimage forher\" href=\"#\/landing\/her\"><img src=\"randomDirectory\/images\/forCMS\/home_tag_forher.png\" track=\"her\"><\/a>\n        <a class=\"animeimage forhim\" href=\"#\/landing\/him\"><img src=\"randomDirectory\/images\/forCMS\/home_tag_forhim.png\" track=\"him\"><\/a>\n        <a class=\"animeimage forthehome\" href=\"#\/landing\/homedecor\"><img src=\"randomDirectory\/images\/forCMS\/home_tag_forthehome.png\" track=\"home\"><\/a>\n        <a class=\"animeimage forteens\" href=\"#\/landing\/teens\"><img src=\"randomDirectory\/images\/forCMS\/home_tag_for_teens.png\" track=\"teens\"><\/a>\n        <a class=\"animeimage forkids\" href=\"#\/landing\/kids\"><img src=\"randomDirectory\/images\/forCMS\/home_tag_for_kids.png\" track=\"kids\"><\/a>\n        <a class=\"animeimage forbeauty\" href=\"#\/landing\/beauty\"><img src=\"randomDirectory\/images\/forCMS\/home_tag_beauty.png\" track=\"beauty\"><\/a>\n        <a class=\"animeimage forreciept\" href=\"#\/landing\/recipient\"><img src=\"randomDirectory\/images\/forCMS\/home_tag_shop_reciept.png\" track=\"reciept\"><\/a>\n        <a class=\"animeimage forstargifts\"  href=\"#\/landing\/stargifts\"><img src=\"randomDirectory\/images\/forCMS\/home_tag_star_gifts.png\" share=\"stargifts\" track=\"stargifts\"><\/a>\n        <a class=\"animeimage forralphlauren\"  href=\"#\/stargifts\/ralphlauren\"><img src=\"randomDirectory\/images\/forCMS\/home_footer_from_ralphlauren.png\" track=\"ralphlauren\"><\/a>\n        <a class=\"animeimage footerfindoutmore\"  href=\"http:\/\/www1.macys.com\/internationalContext\/index.ognc\" target=\"_blank\"><img src=\"randomDirectory\/images\/forCMS\/home_footer_find_out_more.png\" track=\"findmore\"><\/a>\n        <a class=\"animeimage footergiftcards\"  href=\"https:\/\/www1.macys.com\/shop\/gifts-gift-cards?id=1405\" target=\"_blank\"><img src=\"randomDirectory\/images\/forCMS\/home_footer_gift_cards.png\" track=\"giftscard\"><\/a>\n        <a class=\"animeimage footersantamail\"  href=\"https:\/\/www.macys.com\/believe\" target=\"_blank\"><img src=\"randomDirectory\/images\/forCMS\/home_footer_santa_mail.png\" track=\"santamail\"><\/a>\n        <a class=\"animeimage footerlettertosanta\"  href=\"https:\/\/www.macys.com\/believe\" target=\"_blank\"><img src=\"randomDirectory\/images\/forCMS\/home_footer_letter_to_santa.png\" track=\"santamail\"><\/a>\n        <div class=\"animeimage headline\">\n            <img class=\"headline-main\" src=\"randomDirectory\/images\/forCMS\/home_headline_main.png\">\n            <img class=\"headline-week1\" src=\"randomDirectory\/images\/forCMS\/home_headline_week1.png\">\n        <\/div>\n        <a class=\"home_top10\" href=\"#\/topgifts\"><img src=\"randomDirectory\/images\/forCMS\/home_top10.png\"\/><\/a>\n        <a class=\"home_gifts\" href=\"#\/shop\/her\/giftsunder\"><img src=\"randomDirectory\/images\/forCMS\/home_giftsunder.png\"\/><\/a>\n\n    <\/div>\n\n\n\n    <div class=\"sharing\">\n        <img src=\"randomDirectory\/images\/shareFB.png\" role=\"skavaInteropShareFacebook\" track=\"sharefb\"\/>\n        <img src=\"randomDirectory\/images\/shareTWITTER.png\" role=\"skavaInteropShareTwitter\" track=\"sharetwitter\"\/>\n        <img src=\"randomDirectory\/images\/share_PINSTER.png\" role=\"skavaInteropSharePinterest\"track=\"sharepinster\"\/>\n    <\/div>\n\n<\/div>","landing":"<div id=\"landing\" class=\"finderPage\">\n\n\n\n\n    <div id=\"animewrapper\">\n\n\n\n\n            <div class=\"animebucket her\">\n                <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_bg_1024x653.jpg\">\n                <div class=\"childrenabsolute\">\n                    <img class=\"landing_her_header\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/landing_her_header.png\">\n                    <img class=\"her_hero\" src=\"randomDirectory\/images\/forCMS\/landing_her_hero.png\">\n                    <a class=\"sweaters\" anime=\"left\" href=\"#\/shop\/her\/sweaters\"><img src=\"randomDirectory\/images\/forCMS\/landing_her_sweaters.png\" track=\"sweaters\"\/><\/a>\n                    <a class=\"handbags\" anime=\"left\" href=\"#\/shop\/her\/accessories\"><img src=\"randomDirectory\/images\/forCMS\/landing_her_handbags.png\" track=\"handbags\"\/><\/a>\n                    <a class=\"jewelry\" anime=\"left\" href=\"#\/shop\/her\/jewelrywatches\"><img src=\"randomDirectory\/images\/forCMS\/landing_her_jewelry.png\" track=\"jewelry\"\/><\/a>\n                    <a class=\"beauty\" anime=\"left\" href=\"#\/landing\/beauty\"><img src=\"randomDirectory\/images\/forCMS\/landing_her_beauty.png\" track=\"beauty\"\/><\/a>\n                    <a class=\"pajamas\" anime=\"left\" href=\"#\/shop\/her\/pajamas\"><img src=\"randomDirectory\/images\/forCMS\/landing_her_pajamas.png\" track=\"pajamas\"\/><\/a>\n                    <a class=\"shoes\" anime=\"left\" href=\"#\/shop\/her\/shoes\"><img src=\"randomDirectory\/images\/forCMS\/landing_her_shoes.png\" track=\"shoes\"\/><\/a>\n                    <a class=\"hats\" anime=\"left\" href=\"#\/shop\/her\/hatsglovesscarves\"><img src=\"randomDirectory\/images\/forCMS\/landing_her_hats.png\" track=\"hats\"\/><\/a>\n                    <a class=\"gift\" anime=\"left\" href=\"#\/shop\/her\/giftsets\"><img src=\"randomDirectory\/images\/forCMS\/landing_her_gift.png\" track=\"gift\"\/><\/a>\n                    <a class=\"bottom_0\" anime=\"bottom\" href=\"#\/topgifts\"><img src=\"randomDirectory\/images\/forCMS\/landing_her_top10.png\" track=\"top10.\"\/><\/a>\n                    <a class=\"bottom_1\" anime=\"bottom\" href=\"#\/shop\/her\/giftsunder\"><img src=\"randomDirectory\/images\/forCMS\/landing_her_giftsunder.png\" track=\"giftsunder\"\/><\/a>\n                    <a class=\"bottom_2\" anime=\"bottom\" href=\"#\/landing\/recipient\"><img src=\"randomDirectory\/images\/forCMS\/landing_her_shop.png\" track=\"shop\"\/><\/a>\n                <\/div>\n            <\/div>\n\n\n\n\n            <div class=\"animebucket him\">\n                <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_bg_1024x653.jpg\">\n                <div class=\"childrenabsolute\">\n                    <img class=\"landing_him_header\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/landing_him_header.png\">\n                    <img class=\"him_hero\" src=\"randomDirectory\/images\/forCMS\/landing_him_hero.png\">\n                    <a class=\"sweaters\" anime=\"left\" href=\"#\/shop\/him\/sweaters\"><img src=\"randomDirectory\/images\/forCMS\/landing_him_sweaters.png\" track=\"sweaters\"\/><\/a>\n                    <a class=\"shirts\" anime=\"left\" href=\"#\/shop\/him\/shirts\"><img src=\"randomDirectory\/images\/forCMS\/landing_him_shirts.png\" track=\"shirts\"\/><\/a>\n                    <a class=\"bags\" anime=\"left\" href=\"#\/shop\/him\/accessories\"><img src=\"randomDirectory\/images\/forCMS\/landing_him_bags.png\" track=\"bags\"\/><\/a>\n                    <a class=\"cologne\" anime=\"left\" href=\"#\/shop\/beauty\/cologne\"><img src=\"randomDirectory\/images\/forCMS\/landing_him_cologne.png\" track=\"cologne\"\/><\/a>\n                    <a class=\"watches\" anime=\"left\" href=\"#\/shop\/him\/watches\"><img src=\"randomDirectory\/images\/forCMS\/landing_him_watches.png\" track=\"watches\"\/><\/a>\n                    <a class=\"pajamas\" anime=\"left\" href=\"#\/shop\/him\/pajamas\"><img src=\"randomDirectory\/images\/forCMS\/landing_him_pajamas.png\" track=\"\"\/><\/a>\n                    <a class=\"shoes\" anime=\"left\" href=\"#\/shop\/him\/shoes\"><img src=\"randomDirectory\/images\/forCMS\/landing_him_shoes.png\" track=\"pajamas\"\/><\/a>\n                    <a class=\"coats\" anime=\"left\" href=\"#\/shop\/him\/outerwear\"><img src=\"randomDirectory\/images\/forCMS\/landing_him_coats.png\" track=\"coats\"\/><\/a>\n                    <a class=\"bottom_him_0\" anime=\"bottom\" href=\"#\/topgifts\"><img src=\"randomDirectory\/images\/forCMS\/landing_him_top10.png\" track=\"top10\"\/><\/a>\n                    <a class=\"bottom_him_1\" anime=\"bottom\" href=\"#\/shop\/him\/giftsunder\"><img src=\"randomDirectory\/images\/forCMS\/landing_him_gifts.png\" track=\"gifts\"\/><\/a>\n                    <a class=\"bottom_him_2\" anime=\"bottom\" href=\"#\/landing\/recipient\"><img src=\"randomDirectory\/images\/forCMS\/landing_him_shop.png\" track=\"shop\"\/><\/a>\n                <\/div>\n            <\/div>\n\n\n        <div class=\"animebucket kids\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_bg_1024x653.jpg\">\n            <div class=\"childrenabsolute\">\n                <img class=\"kids_hero\" src=\"randomDirectory\/images\/forCMS\/landing_kids_hero.png\">\n                <img class=\"landing_kids_header\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/landing_kids_header.png\">\n                <a class=\"baby\" anime=\"left\" href=\"#\/shop\/kids\/baby\"><img src=\"randomDirectory\/images\/forCMS\/landing_kids_baby.png\" track=\"baby\"\/><\/a>\n                <a class=\"girls\" anime=\"left\" href=\"#\/shop\/kids\/girls\"><img src=\"randomDirectory\/images\/forCMS\/landing_kids_girls.png\" track=\"girls\"\/><\/a>\n                <a class=\"boys\" anime=\"left\" href=\"#\/shop\/kids\/boys\"><img src=\"randomDirectory\/images\/forCMS\/landing_kids_boys.png\" track=\"boys\"\/><\/a>\n                <a class=\"shoes\" anime=\"left\" href=\"#\/shop\/kids\/shoes\"><img src=\"randomDirectory\/images\/forCMS\/landing_kids_shoes.png\" track=\"shoes\"\/><\/a>\n                <a class=\"toys\" anime=\"left\" href=\"#\/shop\/kids\/toys\"><img src=\"randomDirectory\/images\/forCMS\/landing_kids_toys.png\" track=\"toys\"\/><\/a>\n                <a class=\"stocking\" anime=\"left\" href=\"#\/shop\/kids\/stocking\"><img src=\"randomDirectory\/images\/forCMS\/landing_kids_stocking.png\" track=\"stocking\"\/><\/a>\n                <a class=\"kids_top10\" anime=\"bottom\" href=\"#\/topgifts\"><img src=\"randomDirectory\/images\/forCMS\/landing_kids_top10.png\" track=\"top10\"\/><\/a>\n                <a class=\"kids_giftsunder\" anime=\"bottom\" href=\"#\/shop\/her\/giftsunder\"><img src=\"randomDirectory\/images\/forCMS\/landing_kids_giftsunder.png\" track=\"giftsunder\"\/><\/a>\n            <\/div>\n        <\/div>\n\n        <div class=\"animebucket teens\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_teens_bg.jpg\">\n            <div class=\"childrenabsolute\">\n                <img class=\"landing_teens_header\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/landing_teen_header.png\">\n                <a class=\"girls_clothing\" anime=\"left\" href=\"#\/shop\/teens\/girlsclothing\"><img src=\"randomDirectory\/images\/forCMS\/landing_teens_girls_clothing.png\" track=\"clothing\"\/><\/a>\n                <a class=\"girls_accessories\" anime=\"left\" href=\"#\/shop\/teens\/girlsaccessories\"><img src=\"randomDirectory\/images\/forCMS\/landing_teens_girls_accessories.png\" track=\"accessories\"\/><\/a>\n                <a class=\"guys_clothing\" anime=\"left\" href=\"#\/shop\/teens\/guysclothing\"><img src=\"randomDirectory\/images\/forCMS\/landing_teens_guys_clothing.png\" track=\"clothing\"\/><\/a>\n                <a class=\"guys_shoes\" anime=\"left\" href=\"#\/shop\/teens\/guysaccessories\"><img src=\"randomDirectory\/images\/forCMS\/landing_teens_guys_shoes.png\" track=\"shoes\"\/><\/a>\n                <a class=\"activewear\" anime=\"left\" href=\"#\/shop\/teens\/guysactive\"><img src=\"randomDirectory\/images\/forCMS\/landing_teens_activewear.png\" track=\"activewear\"\/><\/a>\n                <a class=\"gadgets\" anime=\"left\" href=\"#\/shop\/teens\/gadgets\"><img src=\"randomDirectory\/images\/forCMS\/landing_teens_gadgets.png\" track=\"gadgets\"\/><\/a>\n                <a class=\"beauty_fragrance\" anime=\"left\" href=\"#\/shop\/teens\/girlsbeauty\"><img src=\"randomDirectory\/images\/forCMS\/landing_teens_beauty_fragrance.png\" track=\"fragrance\"\/><\/a>\n                <a class=\"teens_top10_girls\" anime=\"left\" href=\"#\/topgifts\"><img src=\"randomDirectory\/images\/forCMS\/landing_teens_top10_girls.png\" track=\"girls\"\/><\/a>\n                <a class=\"teens_top10_guys\" anime=\"bottom\" href=\"#\/topgifts\/guys\"><img src=\"randomDirectory\/images\/forCMS\/landing_teens_top10_guys.png\" track=\"top10_\"\/><\/a>\n                <a class=\"teens_giftsunder\" anime=\"bottom\" href=\"#\/shop\/her\/giftsunder\"><img src=\"randomDirectory\/images\/forCMS\/landing_teens_giftsunder.png\" track=\"giftsunder\"\/><\/a>\n                <a class=\"teens_shop\" anime=\"bottom\" href=\"#\/landing\/recipient\"><img src=\"randomDirectory\/images\/forCMS\/landing_teens_shop.png\" track=\"shop\"\/><\/a>\n            <\/div>\n\n        <\/div>\n\n\n        <div class=\"animebucket homedecor\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_bg_1024x653.jpg\">\n            <div class=\"childrenabsolute\">\n                <img class=\"homedecor_hero\" anime=\"left\" src=\"randomDirectory\/images\/forCMS\/landing_homedecor_hero.png\">\n                <img class=\"landing_homedecor_header\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/landing_homedecor_header.png\">\n                <a class=\"kitchen\" anime=\"left\" href=\"#\/shop\/homedecor\/kitchen\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_kitchen.png\" track=\"kitchen\"\/><\/a>\n                <a class=\"coffee\" anime=\"left\" href=\"#\/shop\/homedecor\/coffee\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_coffee.png\" track=\"coffee\"\/><\/a>\n                <a class=\"holiday_lane\" anime=\"left\" href=\"#\/shop\/homedecor\/holiday\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_holiday_lane.png\" track=\"lane\"\/><\/a>\n                <a class=\"home_decor\" anime=\"left\" href=\"#\/shop\/homedecor\/homedecor\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_homedecor.png\" track=\"homedecor\"\/><\/a>\n                <a class=\"barware\" anime=\"left\" href=\"#\/shop\/homedecor\/barware\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_barware.png\" track=\"barware\"\/><\/a>\n                <a class=\"gourmet\" anime=\"left\" href=\"#\/shop\/homedecor\/gourmet\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_gourmetfood.png\" track=\"gourmetfood\"\/><\/a>\n                <a class=\"gifts_thatgivehope\" anime=\"left\" href=\"#\/shop\/homedecor\/giftsthatgivehope\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_gtgh.png\" track=\"homedecor\"\/><\/a>\n                <a class=\"homedecor_top10\" anime=\"bottom\" href=\"#\/topgifts\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_top10.png\" track=\"top10\"\/><\/a>\n                <a class=\"homedecor_giftsunder\" anime=\"bottom\" href=\"#\/shop\/her\/giftsunder\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_giftsunder.png\" track=\"\"\/><\/a>\n                <a class=\"homedecor_shop\" anime=\"bottom\" href=\"#\/landing\/recipient\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_shop.png\" track=\"shop\"\/><\/a>\n            <\/div>\n        <\/div>\n\n        <div class=\"animebucket beauty\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_bg_1024x653.jpg\">\n            <div class=\"childrenabsolute\">\n                <img class=\"landing_beauty_header\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/landing_beauty_header.png\">\n                <a class=\"perfume\" anime=\"left\" href=\"#\/shop\/beauty\/perfume\"><img src=\"randomDirectory\/images\/forCMS\/landing_beauty_perfume.png\" track=\"perfume\"\/><\/a>\n                <a class=\"fragrance\" anime=\"left\" href=\"#\/shop\/beauty\/fragrancegifts\"><img src=\"randomDirectory\/images\/forCMS\/landing_beauty_fragrance.png\" track=\"fragrance\"\/><\/a>\n                <a class=\"make_gifts\" anime=\"left\" href=\"#\/shop\/beauty\/makeupgifts\"><img src=\"randomDirectory\/images\/forCMS\/landing_beauty_make_gifts.png\" track=\"gifts\"\/><\/a>\n                <a class=\"make_cologne\" anime=\"left\" href=\"#\/shop\/beauty\/cologne\"><img src=\"randomDirectory\/images\/forCMS\/landing_beauty_make_cologne.png\" track=\"cologne\"\/><\/a>\n                <a class=\"skin_care\" anime=\"left\" href=\"#\/shop\/beauty\/skincaregifts\"><img src=\"randomDirectory\/images\/forCMS\/landing_beauty_skin_care.png\" track=\"skincare\"\/><\/a>\n                <a class=\"stocking\" anime=\"left\" href=\"#\/shop\/beauty\/stockingstuffers\"><img src=\"randomDirectory\/images\/forCMS\/landing_beauty_stocking.png\" track=\"stocking\"\/><\/a>\n                <a class=\"beauty_top_beauty\" anime=\"bottom\" href=\"#\/topgifts\/beauty\"><img src=\"randomDirectory\/images\/forCMS\/landing_beauty_top10_gift.png\" track=\"top10gifts\"\/><\/a>\n                <a class=\"beauty_top_cologne\" anime=\"bottom\" href=\"#\/topgifts\/cologne\"><img src=\"randomDirectory\/images\/forCMS\/landing_beauty_top10_gift_cologne.png\" track=\"_top10cologne\"\/><\/a>\n                <a class=\"beauty_top_gifts\" anime=\"bottom\" href=\"#\/shop\/her\/giftsunder\"><img src=\"randomDirectory\/images\/forCMS\/landing_beauty_gift_under.png\" track=\"giftunder\"\/><\/a>\n                <img class=\"beauty_hero\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/landing_beauty_hero.png\">\n            <\/div>\n        <\/div>\n\n\n        <!--<div class=\"animebucket topgifts\">-->\n            <!--&lt;!&ndash; <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/XXXXX\">  &ndash;&gt;-->\n            <!--<div class=\"childrenabsolute\">-->\n                <!--TOPGIFTS<BR><BR>-->\n                <!--TOPGIFTS<BR><BR>-->\n                <!--TOPGIFTS<BR><BR>-->\n               <!--TOPGIFTS<BR><BR>-->\n            <!--<\/div>-->\n        <!--<\/div>-->\n\n        <!--<div class=\"animebucket topgifts-her\">-->\n            <!--&lt;!&ndash; <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/XXXXX\">  &ndash;&gt;-->\n            <!--<div class=\"childrenabsolute\">-->\n                <!--TOPGIFTS  HER<BR><BR>-->\n                <!--TOPGIFTS  HER<BR><BR>-->\n                <!--TOPGIFTS  HER<BR><BR>-->\n                <!--TOPGIFTS  HER<BR><BR>-->\n            <!--<\/div>-->\n        <!--<\/div>-->\n\n        <!--<div class=\"animebucket topgifts-him\">-->\n            <!--&lt;!&ndash; <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/XXXXX\">  &ndash;&gt;-->\n            <!--<div class=\"childrenabsolute\">-->\n                <!--TOPGIFTS  HIM<BR><BR>-->\n                <!--TOPGIFTS  HIM<BR><BR>-->\n                <!--TOPGIFTS  HIM<BR><BR>-->\n                <!--TOPGIFTS  HIM<BR><BR>-->\n            <!--<\/div>-->\n        <!--<\/div>-->\n\n        <!--<div class=\"animebucket topgifts-kids\">-->\n            <!--&lt;!&ndash; <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/XXXXX\">  &ndash;&gt;-->\n            <!--<div class=\"childrenabsolute\">-->\n                <!--TOPGIFTS  kids<BR><BR>-->\n                <!--TOPGIFTS  kids<BR><BR>-->\n                <!--TOPGIFTS  kids<BR><BR>-->\n                <!--TOPGIFTS  kids<BR><BR>-->\n            <!--<\/div>-->\n        <!--<\/div>-->\n\n\n        <!--<div class=\"animebucket topgifts-girls\">-->\n            <!--&lt;!&ndash; <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/XXXXX\">  &ndash;&gt;-->\n            <!--<div class=\"childrenabsolute\">-->\n                <!--TOPGIFTS  girls<BR><BR>-->\n                <!--TOPGIFTS  girls<BR><BR>-->\n                <!--TOPGIFTS  girls<BR><BR>-->\n                <!--TOPGIFTS  girls<BR><BR>-->\n            <!--<\/div>-->\n        <!--<\/div>-->\n\n        <!--<div class=\"animebucket topgifts-guys\">-->\n            <!--&lt;!&ndash; <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/XXXXX\">  &ndash;&gt;-->\n            <!--<div class=\"childrenabsolute\">-->\n                <!--TOPGIFTS  guys<BR><BR>-->\n                <!--TOPGIFTS  guys<BR><BR>-->\n                <!--TOPGIFTS  guys<BR><BR>-->\n                <!--TOPGIFTS  guys<BR><BR>-->\n            <!--<\/div>-->\n        <!--<\/div>-->\n\n        <!--<div class=\"animebucket topgifts-homedecor\">-->\n            <!--&lt;!&ndash; <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/XXXXX\">  &ndash;&gt;-->\n            <!--<div class=\"childrenabsolute\">-->\n                <!--TOPGIFTS  homedecor<BR><BR>-->\n                <!--TOPGIFTS  homedecor<BR><BR>-->\n                <!--TOPGIFTS  homedecor<BR><BR>-->\n                <!--TOPGIFTS  homedecor<BR><BR>-->\n            <!--<\/div>-->\n        <!--<\/div>-->\n\n\n        <!--<div class=\"animebucket topgifts-beauty\">-->\n            <!--&lt;!&ndash; <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/XXXXX\">  &ndash;&gt;-->\n            <!--<div class=\"childrenabsolute\">-->\n                <!--TOPGIFTS  beauty<BR><BR>-->\n                <!--TOPGIFTS  beauty<BR><BR>-->\n                <!--TOPGIFTS  beauty<BR><BR>-->\n                <!--TOPGIFTS  beauty<BR><BR>-->\n            <!--<\/div>-->\n        <!--<\/div>-->\n\n        <!--<div class=\"animebucket topgifts-cologne\">-->\n            <!--&lt;!&ndash; <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/XXXXX\">  &ndash;&gt;-->\n            <!--<div class=\"childrenabsolute\">-->\n                <!--TOPGIFTS  cologne<BR><BR>-->\n                <!--TOPGIFTS  cologne<BR><BR>-->\n                <!--TOPGIFTS  cologne<BR><BR>-->\n                <!--TOPGIFTS  cologne<BR><BR>-->\n            <!--<\/div>-->\n        <!--<\/div>-->\n\n\n        <div class=\"animebucket stargifts\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_stargifts_bg.jpg\">\n            <div class=\"childrenabsolute\">\n                <img class=\"landing_stargifts_header\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/\">\n                <a class=\"tommy_hilfiger\" anime=\"left\" href=\"#\/stargifts\/tommyhilfiger\"><img src=\"randomDirectory\/images\/forCMS\/stargifts_landing_tommy_hilfiger.png\" track=\"tommyhilfiger\"\/><\/a>\n                <a class=\"calvin_klein\" anime=\"left\" href=\"#\/stargifts\/calvinklein\"><img src=\"randomDirectory\/images\/forCMS\/stargifts_landing_calvin_klein.png\" track=\"calvinklein\"\/><\/a>\n                <a class=\"michael_kors\" anime=\"left\" href=\"#\/stargifts\/michaelkors\"><img src=\"randomDirectory\/images\/forCMS\/stargifts_landing_michael_kors.png\" track=\"michaelkors\"\/><\/a>\n                <a class=\"inc\" anime=\"left\" href=\"#\/stargifts\/inc\"><img src=\"randomDirectory\/images\/forCMS\/stargifts_landing_inc.png\" track=\"inc\"\/><\/a>\n                <a class=\"martha_stewart\" anime=\"left\" href=\"#\/shop\/stargifts\/marthastewart\"><img src=\"randomDirectory\/images\/forCMS\/stargifts_landing_martha_stewart.png\" track=\"marthastewart\"\/><\/a>\n                <a class=\"her\" anime=\"left\" href=\"#\/shop\/stargifts\/her\"><img src=\"randomDirectory\/images\/forCMS\/stargifts_landing_her.png\" track=\"her\"\/><\/a>\n                <a class=\"him\" anime=\"left\" href=\"#\/shop\/stargifts\/him\"><img src=\"randomDirectory\/images\/forCMS\/stargifts_landing_him.png\" track=\"him\"\/><\/a>\n                <a class=\"home\" anime=\"left\" href=\"#\/shop\/stargifts\/homedecor\"><img src=\"randomDirectory\/images\/forCMS\/stargifts_landing_home.png\" track=\"home\"\/><\/a>\n                <a class=\"beauty\" anime=\"left\" href=\"#\/shop\/stargifts\/beauty\"><img src=\"randomDirectory\/images\/forCMS\/stargifts_landing_beauty.png\" track=\"beauty\"\/><\/a>\n                <a class=\"teens\" anime=\"left\" href=\"#\/shop\/stargifts\/teens\"><img src=\"randomDirectory\/images\/forCMS\/stargifts_landing_teens.png\" track=\"teens\"\/><\/a>\n                <a class=\"kids\" anime=\"left\" href=\"#\/shop\/stargifts\/kids\"><img src=\"randomDirectory\/images\/forCMS\/stargifts_landing_kids.png\" track=\"kids\"\/><\/a>\n            <\/div>\n        <\/div>\n\n        <div class=\"animebucket giftsunder\">\n            <img class=\"redbackground\" src=\"\">\n            <div class=\"childrenabsolute\">\n                <img class=\"landing_homedecor_header\" src=\"randomDirectory\/images\/forCMS\/landing_homedecor_header.png\">\n                <a class=\"kitchen\" href=\"#\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_kitchen.png\" track=\"kitchen\"\/><\/a>\n                <a class=\"coffee\" href=\"#\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_coffee.png\" track=\"coffee\"\/><\/a>\n                <a class=\"holiday_lane\" href=\"#\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_holiday_lane.png\" track=\"lane\"\/><\/a>\n                <a class=\"home_decor\" href=\"#\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_homedecor.png\" track=\"homedecor\"\/><\/a>\n                <a class=\"barware\" href=\"#\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_barware.png\" track=\"barware\"\/><\/a>\n                <a class=\"gourmet\" href=\"#\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_gourmetfood.png\" track=\"gourmetfood\"\/><\/a>\n                <a class=\"gifts_thatgivehope\" href=\"#\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_gtgh.png\" track=\"homedecorgtgh\"\/><\/a>\n                <a class=\"homedecor_top10\" href=\"#\/topgifts\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_top10.png\" track=\"omedecortop10\"\/><\/a>\n                <a class=\"homedecor_giftsunder\" href=\"#\/shop\/her\/giftsunder\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_giftsunder.png\" track=\"giftsunder\"\/><\/a>\n                <a class=\"homedecor_shop\" href=\"#\/landing\/recipient\"><img src=\"randomDirectory\/images\/forCMS\/landing_homedecor_shop.png\" track=\"shop\"\/><\/a>\n            <\/div>\n            <img class=\"homedecor_hero\" src=\"randomDirectory\/images\/forCMS\/landing_homedecor_hero.png\">\n        <\/div>\n\n\n\n        <div class=\"animebucket recipient\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_recipient_bg.png\">\n            <div class=\"childrenabsolute\">\n                <a class=\"trendsetter\" href=\"#\/shop\/recipient\/trendsetter\"><img src=\"randomDirectory\/images\/forCMS\/landing_recipient_trendsetter.png\" track=\"trendsetter\"\/><\/a>\n                <a class=\"fitness\" href=\"#\/shop\/recipient\/fitness\"><img src=\"randomDirectory\/images\/forCMS\/landing_recipient_fitness.png\"  track=\"fitness\"\/><\/a>\n                <a class=\"traveler\" href=\"#\/shop\/recipient\/jetsetter\"><img src=\"randomDirectory\/images\/forCMS\/landing_recipient_traveler.png\" track=\"traveler\"\/><\/a>\n                <a class=\"sportsfan\" href=\"#\/shop\/recipient\/sportsfan\"><img src=\"randomDirectory\/images\/forCMS\/landing_recipient_sportsfan.png\" track=\"sportsfan\"\/><\/a>\n                <a class=\"partyhost\" href=\"#\/shop\/recipient\/partyhost\"><img src=\"randomDirectory\/images\/forCMS\/landing_recipient_partyhost.png\" track=\"partyhost\"\/><\/a>\n                <a class=\"coworker\" href=\"#\/shop\/recipient\/coworker\"><img src=\"randomDirectory\/images\/forCMS\/landing_recipient_coworker.png\" track=\"coworker\"\/><\/a>\n            <\/div>\n        <\/div>\n\n\n\n\n\n\n\n\n\n    <\/div>\n    <!--  ending #animewrapper -->\n\n\n\n\n\n<\/div>","shop":"<div id=\"shop\" class=\"finderPage\">\n\n\t<div class=\"marquee\"><\/div>\n\t<div class=\"filterBar\"><\/div>\n\t<div class=\"products\"><\/div>\n<\/div>\n\n\n<script id=\"shopHeaderTemplate\" type=\"text\/html\">\n\t<img src=\"${headerImage}\" \/>\n\t<a href=\"#\" class=\"shareButton\">SHARE<\/a>\n<\/script>\n\n<script id=\"shopHeaderTabletTemplate\" type=\"text\/html\">\n\t<img class=\"imageUnit\" src=\"${headerImage}\" \/>\n<\/script>\n\n<script id=\"sortTemplate\" type=\"text\/html\">\n\t<select id=\"sortby\" class=\"poolSort\">\n\t\t<option value=\"DEFAULT\">Sort by:<\/option>\n\t\t<option value=\"DEFAULT\">none<\/option>\n\t\t<option tracking=\"shopbyprice\" value=\"PRICE_HIGH_TO_LOW\">price: high to low<\/option>\n\t\t<option tracking=\"shopbyprice\" value=\"PRICE_LOW_TO_HIGH\">price: low to high<\/option>\n\t\t<option tracking=\"mostloved\" value=\"VOTES_HIGH_TO_LOW\">most loved<\/option>\n\t<\/select>\n<\/script>\n\n<script id=\"filterTemplate\" type=\"text\/html\">\n\t<select class=\"filter\">\n\t\t{{each options}}\n\t\t\t<option value=\"${pfeed},${value}\">${text}<\/option>\n\t\t{{\/each}}\n\t<\/select>\n<\/script>","shoprl":"<div id=\"shoprl\" class=\"finderPage\">\n    <div class=\"marquee\"><\/div>\n    <nav class=\"rl_nav\">\n        <ul class=\"rl_nav_container\">\n            <li class=\"her\"><a class=\"her_btn\" href=\"#\/shoprl\/her\" track=\"subnavher\"><span>For Her<\/span><\/a> <\/li>\n            <li class=\"him\"><a class=\"him_btn\" href=\"#\/shoprl\/him\" track=\"subnavhim\"><span>For Him<\/span><\/a><\/li>\n            <li class=\"girls\"><a class=\"girls_btn\" href=\"#\/shoprl\/girls\" track=\"subnavgirls\"><span>For Girls<\/span><\/a><\/li>\n            <li class=\"boys\"><a class=\"boys_btn\" href=\"#\/shoprl\/boys\" track=\"subnavboys\"><span>For Boys<\/span><\/a><\/li>\n            <li class=\"baby\"><a class=\"baby_btn\" href=\"#shoprl\/baby\" track=\"subnavbaby\"><span>For Baby<\/span><\/a><\/li>\n        <\/ul>\n    <\/nav>\n    <nav class=\"utilities\">\n        <ul class=\"utility_bar\">\n            <li class=\"left_block\"><a class=\"favorite_btn\" href=\"\" track=\"favorite\"><img src=\"randomDirectory\/images\/forCMS\/ralphlauren_favorite_btn.jpg\" alt=\"\" \/><\/a><\/li>\n            <li class=\"left_block\"><a class=\"add_products_btn\" href=\"\" track=\"add\"><img src=\"randomDirectory\/images\/forCMS\/ralphlauren_addproducts_btn.jpg\" alt=\"\" \/><\/a><\/li>\n            <li class=\"right_block\"><a class=\"shop_for\" href=\"\" track=\"shop\"><img src=\"randomDirectory\/images\/forCMS\/ralphlauren_shop_for_btn.jpg\" alt=\"\"><\/a><\/li>\n            <li class=\"right_block\"><a class=\"price\" href=\"\" track=\"price\"><img src=\"randomDirectory\/images\/forCMS\/ralphlauren_price_btn.jpg\" alt=\"\"><\/a><\/li>\n            <li class=\"right_block\"><a class=\"most_loved\" href=\"\" track=\"mostloved\"><img src=\"randomDirectory\/images\/forCMS\/ralphlauren_most_loved_btn.jpg\" alt=\"\"><\/a><\/li>\n            <li class=\"right_block\"><a class=\"loved_items\" href=\"\" track=\"loved\"><img src=\"randomDirectory\/images\/forCMS\/ralphlauren_loved_items.jpg\" alt=\"\"><\/a><\/li>\n        <\/ul>\n    <\/nav>\n\n\t<div class=\"filterBar\"><\/div>\n\t<div class=\"products\"><\/div>\n<\/div>\n\n<script id=\"shopHeaderTemplate\" type=\"text\/html\">\n\t<img src=\"${headerImage}\" \/>\n\t<a href=\"#\" class=\"shareButton\" track=\"share\">SHARE<\/a>\n<\/script>\n\n<script id=\"shopHeaderTabletTemplate\" type=\"text\/html\">\n\t<img class=\"imageUnit\" src=\"${headerImage}\" \/>\n<\/script>\n\n<script id=\"sortTemplate\" type=\"text\/html\">\n\t<select id=\"sortby\" class=\"poolSort\">\n\t\t<option value=\"DEFAULT\">Sort by:<\/option>\n\t\t<option value=\"DEFAULT\">none<\/option>\n\t\t<option tracking=\"shopbyprice\" value=\"PRICE_HIGH_TO_LOW\">price: high to low<\/option>\n\t\t<option tracking=\"shopbyprice\" value=\"PRICE_LOW_TO_HIGH\">price: low to high<\/option>\n\t\t<option tracking=\"mostloved\" value=\"VOTES_HIGH_TO_LOW\">most loved<\/option>\n\t<\/select>\n<\/script>\n\n<script id=\"filterTemplate\" type=\"text\/html\">\n\t<select class=\"filter\">\n\t\t{{each options}}\n\t\t\t<option value=\"${pfeed},${value}\">${text}<\/option>\n\t\t{{\/each}}\n\t<\/select>\n<\/script>\n\n<script id=\"videoTemplate\" type=\"text\/html\">\n\t<div class=\"videoBlock\" style=\"background:transparent url( '${defaultImage}' ) no-repeat 0 0;\">\n\t\t<video autoplay loop>\n\t\t\t<source src=\"${videoPath}\" type=\"video\/mp4\">\n\t\t\t<source src=\"${videoPathWebm}\" type=\"video\/webm\">\n\t\t\tYour browsr does not support video tag\n\t\t<\/video>\n\t<\/div>\n<\/script>\n\n<script id=\"gifTemplate\" type=\"text\/html\">\n\t<div class=\"videoBlock\">\n\t\t<img src=\"${gifPath}\" >\n\t<\/div>\n<\/script>\n\n<script id=\"imageTemplate\" type=\"text\/html\">\n\t<div class=\"videoBlock\">\n\t\t<img src=\"${imagePath}\" >\n\t<\/div>\n<\/script>","stargifts":"<div id=\"stargifts\" class=\"finderPage\">\n\n    <div id=\"animewrapper\">\n\n        <div class=\"animebucket stargifts starhome\">\n            HOME\n        <\/div>\n\n\n        <div class=\"animebucket stargifts ralphlauren\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/stargifts_rl_bg.jpg\">\n            <img class=\"stargifts_ralph_lauren\" anime=\"top\" src=\"\">\n            <div class=\"stargifts_ralph_lauren\">\n                <a class=\"her_btn\" href=\"#\/shoprl\/her\" track=\"her\"><span>For Her<\/span><\/a>\n                <a class=\"him_btn\" href=\"#\/shoprl\/him\" track=\"him\"><span>For Him<\/span><\/a>\n                <a class=\"girls_btn\" href=\"#\/shoprl\/girls\" track=\"girls\"><span>For Girls<\/span><\/a>\n                <a class=\"boys_btn\" href=\"#\/shoprl\/boys\" track=\"boys\"><span>For Boys<\/span><\/a>\n                <a class=\"baby_btn\" href=\"#shoprl\/baby\" track=\"baby\"><span>For Baby<\/span><\/a>\n\n                <a class=\"stargifts_rl_her\" href=\"#\/shoprl\/her\" track=\"stargiftsher\"><img anime=\"left\" src=\"randomDirectory\/images\/forCMS\/stargifts_rl_her.png\"\/><\/a>\n                <a class=\"stargifts_rl_him\" href=\"#\/shoprl\/him\"  track=\"stargiftshim\"><img anime=\"left\" src=\"randomDirectory\/images\/forCMS\/stargifts_rl_men.png\"\/><\/a>\n                <a class=\"stargifts_rl_girls\" href=\"#\/shoprl\/girls\"  track=\"stargiftsgirls\"><img anime=\"left\" src=\"randomDirectory\/images\/forCMS\/stargifts_rl_girls.png\"\/><\/a>\n                <a class=\"stargifts_rl_boys\" href=\"#\/shoprl\/boys\"  track=\"stargiftsboys\"><img anime=\"left\" src=\"randomDirectory\/images\/forCMS\/stargifts_rl_boys.png\"\/><\/a>\n                <a class=\"stargifts_rl_baby\" href=\"#shoprl\/baby\"  track=\"stargiftsbaby\"><img anime=\"left\" src=\"randomDirectory\/images\/forCMS\/stargifts_rl_baby.png\"\/><\/a>\n            <\/div>\n        <\/div>\n\n        <div class=\"animebucket stargifts tommyhilfiger\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/stargifts_tommy.png\">\n            <img class=\"stargifts_tommy_header\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/stargifts_tommy_title.png\">\n            <div class=\"stargifts_tommyhilfiger_tags\">\n                <a href=\"#\/landing\/stargifts\" track=\"stargifts\"><img class=\"stargifts_gifts\" anime=\"left\" src=\"randomDirectory\/images\/forCMS\/stargifts_tommy_gift.png\"\/><\/a>\n                <a href=\"#\/shop\/tommyhilfiger\/her\" track=\"her\"><img class=\"stargifts_her\" anime=\"left\" src=\"randomDirectory\/images\/forCMS\/stargifts_tommy_her.png\"\/><\/a>\n                <a href=\"#\/shop\/tommyhilfiger\/him\" track=\"him\"><img class=\"stargifts_him\" anime=\"left\" src=\"randomDirectory\/images\/forCMS\/stargifts_tommy_him.png\"\/><\/a>\n                <a href=\"#\/shop\/tommyhilfiger\/kids\" track=\"kids\"><img class=\"stargifts_kids\" anime=\"left\" src=\"randomDirectory\/images\/forCMS\/stargifts_tommy_kids.png\"\/><\/a>\n                <a href=\"#\/shop\/tommyhilfiger\/home\" track=\"home\"><img class=\"stargifts_home\" anime=\"left\" src=\"randomDirectory\/images\/forCMS\/stargifts_tommy_home.png\"\/><\/a>\n            <\/div>\n        <\/div>\n\n\n        <div class=\"animebucket stargifts calvinklein\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/stargifts_ck.png\">\n            <img anime=\"top\" class=\"stargifts_ck_header\" src=\"randomDirectory\/images\/forCMS\/stargifts_ck_title.png\">\n            <div class=\"stargifts_calvinklein_tags\">\n                <a href=\"#\/landing\/stargifts\" track=\"stargifts\"><img anime=\"top\" class=\"stargifts_gifts\" src=\"randomDirectory\/images\/forCMS\/stargifts_ck_gift.png\"\/><\/a>\n                <a href=\"#\/shop\/calvinklein\/her\" track=\"her\"><img anime=\"left\" class=\"stargifts_her\" src=\"randomDirectory\/images\/forCMS\/stargifts_ck_her.png\"\/><\/a>\n                <a href=\"#\/shop\/calvinklein\/him\" track=\"him\"><img anime=\"left\" class=\"stargifts_him\" src=\"randomDirectory\/images\/forCMS\/stargifts_ck_him.png\"\/><\/a>\n                <a href=\"#\/shop\/calvinklein\/kids\"  track=\"kids\"><img anime=\"left\" class=\"stargifts_kids\" src=\"randomDirectory\/images\/forCMS\/stargifts_ck_kids.png\"\/><\/a>\n                <a href=\"#\/shop\/calvinklein\/fragrance\"  track=\"fragrance\"><img anime=\"left\" class=\"stargifts_home\" src=\"randomDirectory\/images\/forCMS\/stargifts_ck_fragrance.png\"\/><\/a>\n            <\/div>\n        <\/div>\n\n\n        <div class=\"animebucket stargifts michaelkors\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/stargifts_mk.png\">\n            <img anime=\"top\" class=\"stargifts_header\" src=\"randomDirectory\/images\/forCMS\/stargifts_mk_title.png\">\n            <div class=\"stargifts_mk_tags\">\n                <a href=\"#\/landing\/stargifts\" track=\"stargifts\"><img anime=\"top\" class=\"stargifts_gifts\" src=\"randomDirectory\/images\/forCMS\/stargifts_mk_gifts.png\"\/><\/a>\n                <a href=\"#\/shop\/michaelkors\/her\" track=\"her\"><img anime=\"left\" class=\"stargifts_watch\" src=\"randomDirectory\/images\/forCMS\/stargifts_mk_watch.png\"\/><\/a>\n                <a href=\"#\/shop\/michaelkors\/her\" track=\"stargiftsher\"><img anime=\"left\" class=\"stargifts_bags\" src=\"randomDirectory\/images\/forCMS\/stargifts_mk_bags.png\"\/><\/a>\n                <a href=\"#\/shop\/michaelkors\/beauty\" track=\"her\"><img anime=\"left\" class=\"stargifts_beauty\" src=\"randomDirectory\/images\/forCMS\/stargifts_mk_beauty.png\"\/><\/a>\n                <a href=\"#\/shop\/michaelkors\/her\" track=\"her\"><img anime=\"left\" class=\"stargifts_forher\" src=\"randomDirectory\/images\/forCMS\/stargifts_mk_forher.png\"\/><\/a>\n            <\/div>\n        <\/div>\n\n\n        <div class=\"animebucket stargifts inc\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/stargifts_inc.png\">\n            <div class=\"tags\">\n                <a href=\"#\/landing\/stargifts\" track=\"stargifts\"><img anime=\"left\" class=\"gifts\" src=\"randomDirectory\/images\/forCMS\/stargifts_inc_gifts.png\"\/><\/a>\n                <a href=\"#\/shop\/inc\/her\" track=\"her\"><img anime=\"left\" class=\"her\" src=\"randomDirectory\/images\/forCMS\/stargifts_inc_her.png\"\/><\/a>\n                <a href=\"#\/shop\/inc\/home\" track=\"him\"><img anime=\"left\" class=\"home\" src=\"randomDirectory\/images\/forCMS\/stargifts_inc_home.png\"\/><\/a>\n            <\/div>\n        <\/div>\n\n    <\/div>\n<\/div>","topgifts":"<div id=\"topgifts\" class=\"finderPage\">\n\n\n    <div id=\"animewrapper\">\n\n        <div class=\"animebucket topgifts\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_bg_1024x653.jpg\">\n            <div class=\"childrenabsolute\">\n                <img class=\"topgifts_landing_title\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/topgifts_landing_title.png\">\n                <a class=\"her topgiftlandingcontainer\" anime=\"left\" href=\"#\/topgifts\/her\"><img src=\"randomDirectory\/images\/forCMS\/topgifts_landing_her.png\" track=\"her\"\/><\/a>\n                <a class=\"him topgiftlandingcontainer\" anime=\"left\" href=\"#\/topgifts\/him\"><img src=\"randomDirectory\/images\/forCMS\/topgifts_landing_him.png\" track=\"him\"\/><\/a>\n                <a class=\"kids topgiftlandingcontainer\" anime=\"left\" href=\"#\/topgifts\/kids\"><img src=\"randomDirectory\/images\/forCMS\/topgifts_landing_kids.png\" track=\"kids\"\/><\/a>\n                <a class=\"girls topgiftlandingcontainer\" anime=\"left\" href=\"#\/topgifts\/girls\"><img src=\"randomDirectory\/images\/forCMS\/topgifts_landing_girls.png\" track=\"girls\"\/><\/a>\n                <a class=\"guys topgiftlandingcontainer\" anime=\"left\" href=\"#\/topgifts\/guys\"><img src=\"randomDirectory\/images\/forCMS\/topgifts_landing_guys.png\" track=\"guys\"\/><\/a>\n                <a class=\"home topgiftlandingcontainer\" anime=\"left\" href=\"#\/topgifts\/homedecor\"><img src=\"randomDirectory\/images\/forCMS\/topgifts_landing_home.png\" track=\"home\"\/><\/a>\n                <a class=\"beauty topgiftlandingcontainer\" anime=\"left\" href=\"#\/topgifts\/beauty\"><img src=\"randomDirectory\/images\/forCMS\/topgifts_landing_beauty.png\" track=\"beauty\"\/><\/a>\n                <a class=\"cologne topgiftlandingcontainer\" anime=\"left\" href=\"#\/topgifts\/cologne\"><img src=\"randomDirectory\/images\/forCMS\/topgifts_landing_cologne.png\" track=\"cologne\"\/><\/a>\n            <\/div>\n        <\/div>\n\n\n\n        <div class=\"animebucket her\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_bg_1024x653.jpg\">\n            <div class=\"childrenabsolute\">\n                <img class=\"topgifts_title_her\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/topgifts_title_her.png\">\n                <div class=\"column_1\">\n                    <a class=\"hero-img\" anime=\"left\" href=\"#\/topgifts\/her\"><img src=\"randomDirectory\/images\/forCMS\/\" track=\"her\"\/><\/a>\n                <\/div>\n                <div class=\"column_2\">\n                    <a class=\"\" anime=\"left\" href=\"\"><img src=\"randomDirectory\/images\/forCMS\/topgifts_landing_him.png\" track=\"him\"\/><\/a>\n                    <a class=\"\" anime=\"left\" href=\"\"><img src=\"randomDirectory\/images\/forCMS\/topgifts_landing_kids.png\" track=\"kids\"\/><\/a>\n                    <a class=\"\" anime=\"left\" href=\"\"><img src=\"randomDirectory\/images\/forCMS\/topgifts_landing_girls.png\" track=\"girls\"\/><\/a>\n                    <a class=\"\" anime=\"left\" href=\"\"><img src=\"randomDirectory\/images\/forCMS\/topgifts_landing_guys.png\" track=\"guys\"\/><\/a>\n                    <a class=\"\" anime=\"left\" href=\"\"><img src=\"randomDirectory\/images\/forCMS\/topgifts_landing_home.png\" track=\"home\"\/><\/a>\n                    <a class=\"\" anime=\"left\" href=\"\"><img src=\"randomDirectory\/images\/forCMS\/topgifts_landing_beauty.png\" track=\"beauty\"\/><\/a>\n                    <a class=\"\" anime=\"left\" href=\"\"><img src=\"randomDirectory\/images\/forCMS\/topgifts_landing_cologne.png\" track=\"cologne\"\/><\/a>\n                <\/div>\n\n\n\n\n            <\/div>\n        <\/div>\n\n\n\n        <div class=\"animebucket him\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_bg_1024x653.png\">\n            <div class=\"childrenabsolute\">\n                <img class=\"topgifts_title_him\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/topgifts_title_him.png\">\n\n\n            <\/div>\n        <\/div>\n\n\n        <div class=\"animebucket kids\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_bg_1024x653.png\">\n            <div class=\"childrenabsolute\">\n                <img class=\"topgifts_title_him\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/topgifts_title_kids.png\">\n\n\n            <\/div>\n        <\/div>\n\n        <div class=\"animebucket girls\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_bg_1024x653.png\">\n            <div class=\"childrenabsolute\">\n                <img class=\"topgifts_title_girls\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/topgifts_title_girl.png\">\n\n\n            <\/div>\n        <\/div>\n\n        <div class=\"animebucket guys\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_bg_1024x653.png\">\n            <div class=\"childrenabsolute\">\n                <img class=\"topgifts_title_guys\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/topgifts_title_guys.png\">\n\n\n            <\/div>\n        <\/div>\n\n        <div class=\"animebucket homedecor\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_bg_1024x653.png\">\n            <div class=\"childrenabsolute\">\n                <img class=\"topgifts_title_home\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/topgifts_title_home.png\">\n\n\n            <\/div>\n        <\/div>\n\n        <div class=\"animebucket beauty\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_bg_1024x653.png\">\n            <div class=\"childrenabsolute\">\n                <img class=\"topgifts_title_beauty\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/topgifts_title_beauty.png\">\n\n\n            <\/div>\n        <\/div>\n\n\n        <div class=\"animebucket cologne\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/forCMS\/landing_bg_1024x653.png\">\n            <div class=\"childrenabsolute\">\n                <img class=\"topgifts_title_cologne\" anime=\"top\" src=\"randomDirectory\/images\/forCMS\/topgifts_title_cologne.png\">\n\n\n            <\/div>\n        <\/div>\n\n\n\n    <\/div>\n    <div class=\"products\"><\/div>\n<\/div>"},"templates":{"productListingNew":"<script language=\"javascript\">\n\tfunction getVoteCopy(o){\n\t\tvar voteMsg = '';\n\t\tif(o.inVoteList){\n\t\t\tif(o.votes-1==0){\n\t\t\t\tvoteMsg = 'You love this';\n\t\t\t} else if(o.votes-1==1){\n\t\t\t\tvoteMsg = 'You &amp; 1 other love this!';\n\t\t\t} else {\n\t\t\t\tvoteMsg = 'You and '+(o.votes-1)+' others love this';\n\t\t\t}\n\t\t} else {\n\t\t\tif(o.votes==0){\n\t\t\t\tvoteMsg = 'love it';\n\t\t\t} else if(o.votes==1){\n\t\t\t\tvoteMsg = '1 loves this';\n\t\t\t} else {\n\t\t\t\tvoteMsg = o.votes+' love this';\n\t\t\t}\n\t\t}\n\t\treturn voteMsg;\n\t}\n    function getVoteCopyTopGifts(o){\n\t\tvar voteMsg = '';\n\t\tif(o.inVoteList){\n\t\t\tif(o.votes-1==0){\n\t\t\t\tvoteMsg = 'You love this';\n\t\t\t} else if(o.votes-1==1){\n\t\t\t\tvoteMsg = 'You &amp; 1 other love this!';\n\t\t\t} else {\n\t\t\t\tvoteMsg = 'You and '+(o.votes-1)+' others love this gift!';\n\t\t\t}\n\t\t} else {\n\t\t\tif(o.votes==0){\n\t\t\t\tvoteMsg = 'love it';\n\t\t\t} else if(o.votes==1){\n\t\t\t\tvoteMsg = '1 loves this';\n\t\t\t} else {\n\t\t\t\tvoteMsg = o.votes+' love this gift!';\n\t\t\t}\n\t\t}\n\t\treturn voteMsg;\n\t}\n<\/script>\n\n<script id=\"productTopGifts\" type=\"text\/html\">\n\t<div class=\"product notralphlauren product${$data.insertIndex}\" {{if $data.containerClass!='offer'}} entryId=\"${$data.entryId}\" {{\/if}} productId=\"${$data.pfeed_id}\" {{if $data.containerClass=='offer'}} tracking=\"${$data.tracking}\"{{\/if}}>\n\t\t<div class=\"product_image\">\n\t\t\t<!--<img class=\"topgift_header\" src=\"${assetsDirectory}images\/pool\/topgifts_hgg.png\"\/>-->\n\t\t\t<a entryId=\"${$data.entryId}\" productId=\"${$data.pfeed_id}\" {{if finder.isTablet()}}role=\"skavaInteropQuickView\" href=\"javascript:void(0)\"{{else}}href=\"${$data.pfeed_url}\"{{\/if}}  {{if $data.containerClass=='offer'}}target=\"${$data.target}\"{{else}}target=\"_blank\"{{\/if}}>\n\t\t\t\t<img class=\"image\" src=\"${String($data.image_fullImage).replace(\/wid=(.*?)&\/gi, 'wid=190&')}\" \/>\n\t\t\t<\/a>\t\n\t\t\t{{if $data.pfeed_productvideo != ''}}\n\t\t\t\t<div entryId=\"${$data.entryId}\" productId=\"${$data.pfeed_id}\" onclick=\"finder.insertProductVideo({id:'${$data.pfeed_productvideo}' })\" class=\"product_video_btn product_button_base\">\n\t\t\t\t\t<div class=\"arrow-right\"><\/div>\n\t\t\t\t<\/div>\n\t\t\t{{\/if}}\n\n\n\n\t\t<\/div>\n    <div class=\"num_container\">\n        <div class=\"indexcount\">${$data.insertIndex}<\/div>\n    <\/div>\n    <div class=\"voting_container\">\n\t\t<p class=\"votes\">${getVoteCopyTopGifts($data)}<\/p>\n    <\/div>\n\n\t<\/div>\n<\/script>\n\n<script id=\"productTopGiftsLanding\" type=\"text\/html\">\n    <div class=\"product notralphlauren\" {{if $data.containerClass!='offer'}} entryId=\"${$data.entryId} product${$data.insertIndex}\" {{\/if}} productId=\"${$data.pfeed_id}\" {{if $data.containerClass=='offer'}} tracking=\"${$data.tracking}\"{{\/if}}>\n    <div class=\"product_image\">\n        <!--<img class=\"topgift_header\" src=\"${assetsDirectory}images\/pool\/topgifts_hgg.png\"\/>-->\n        <a entryId=\"${$data.entryId}\" productId=\"${$data.pfeed_id}\" {{if finder.isTablet()}}role=\"skavaInteropQuickView\" href=\"javascript:void(0)\"{{else}}href=\"${$data.pfeed_url}\"{{\/if}}  {{if $data.containerClass=='offer'}}target=\"${$data.target}\"{{else}}target=\"_blank\"{{\/if}}>\n        <img class=\"image\" src=\"${String($data.image_fullImage).replace(\/wid=(.*?)&\/gi, 'wid=190&')}\" \/>\n        <\/a>\n        {{if $data.pfeed_productvideo != ''}}\n        <div entryId=\"${$data.entryId}\" productId=\"${$data.pfeed_id}\" onclick=\"finder.insertProductVideo({id:'${$data.pfeed_productvideo}' })\" class=\"product_video_btn product_button_base\">\n            <div class=\"arrow-right\"><\/div>\n        <\/div>\n        {{\/if}}\n\n\n\n    <\/div>\n    <div class=\"num_container\">\n        <div class=\"indexcount\">${$data.insertIndex}<\/div>\n    <\/div>\n    <p class=\"votes\"><img src=\"randomDirectory\/images\/forCMS\/landing_topgifts_small_heart.png\"><span class=\"votes_text\">${getVoteCopyTopGifts($data)}<\/span><\/p>\n\n    <\/div>\n<\/script>\n\n<script id=\"productListingNew\" type=\"text\/html\">\n\t<div class=\"product {{if $data.ralphlauren}}ralphlauren{{\/if}} {{if !$data.ralphlauren}}notralphlauren{{\/if}} {{if $data.mostVoted}}topgifted{{\/if}} ${$data.containerClass ? $data.containerClass : ''}\" {{if $data.containerClass!='offer'}} entryId=\"${$data.entryId}\" {{\/if}} productId=\"${$data.pfeed_id}\" {{if $data.containerClass=='offer'}} tracking=\"${$data.tracking}\"{{\/if}}>\n\t\t<div class=\"product_image\">\n\t\t\t<!--<img class=\"topgift_header\" src=\"${assetsDirectory}images\/pool\/topgifts_hgg.png\"\/>-->\n\t\t\t<a entryId=\"${$data.entryId}\" productId=\"${$data.pfeed_id}\" {{if finder.isTablet()}}role=\"skavaInteropQuickView\" href=\"javascript:void(0)\"{{else}}href=\"${$data.pfeed_url}\"{{\/if}}  {{if $data.containerClass=='offer'}}target=\"${$data.target}\"{{else}}target=\"_blank\"{{\/if}}>\n\t\t\t\t<img class=\"image\" src=\"${String($data.image_fullImage).replace(\/wid=(.*?)&\/gi, 'wid=190&')}\" \/>\n\t\t\t<\/a>\t\n\t\t\t{{if $data.pfeed_productvideo != ''}}\n\t\t\t\t<div entryId=\"${$data.entryId}\" productId=\"${$data.pfeed_id}\" onclick=\"finder.insertProductVideo({id:'${$data.pfeed_productvideo}' })\" class=\"product_video_btn product_button_base\">\n\t\t\t\t\t<div class=\"arrow-right\"><\/div>\n\t\t\t\t<\/div>\n\t\t\t{{\/if}}\n\t\t\n\t\t\t<div class=\"quickview product_button_base\" entryId=\"${$data.entryId}\" productId=\"${$data.pfeed_id}\" role=\"skavaInteropQuickView\">Quickview<\/div>\n\t\t\n\t\t<\/div>\n\t\t<div class=\"label\">\n\t\t\t<a href=\"${pfeed_url}\" target=\"_blank\">\n\t\t\t\t${label}\n\t\t\t<\/a>\n\t\t<\/div>\n\t\t{{if finder.isInternational && skShipping && skShipping.getLocalizedPriceEx}}\n\t\t\t{{if $data.pfeed_price1}}<p class=\"price price1\">${skShipping.getLocalizedPriceEx($data.pfeed_price1)}<\/p>{{\/if}}\n\t\t\t{{if $data.pfeed_price2}}<p class=\"price price2\">${skShipping.getLocalizedPriceEx($data.pfeed_price2)}<\/p>{{\/if}}\n\t\t\t{{if $data.pfeed_price3}}<p class=\"price price3\">${skShipping.getLocalizedPriceEx($data.pfeed_price3)}<\/p>{{\/if}}\n\t\t{{else}}\n\t\t\t{{if $data.pfeed_price1}}<p class=\"price price1\">${$data.pfeed_price1}<\/p>{{\/if}}\n\t\t\t{{if $data.pfeed_price2}}<p class=\"price price2\">${$data.pfeed_price2}<\/p>{{\/if}}\n\t\t\t{{if $data.pfeed_price3}}<p class=\"price price3\">${$data.pfeed_price3}<\/p>{{\/if}}\n\t\t{{\/if}}\n\t\t\n\t\t{{if $data.pfeed_promotions && $data.pfeed_promotions.length>5}}\n\t\t<p class=\"promotions\">SPECIAL OFFER<\/p>\n\t\t{{\/if}}\n\t\t\n\t\t<p class=\"votes\">${getVoteCopy($data)}<\/p>\n\t\t\n\t\t<div class=\"buttons\">\n\t\t\t<span entryId=\"${$data.entryId}\" productId=\"${$data.pfeed_id}\" class=\"voteButton ${$data.inVoteList ? 'selected' : ''}\"><img src=\"randomDirectory\/images\/pool\/${$data.inVoteList ? 'button_lovelist_off.png' : 'button_lovelist.png'}\"\/><\/span>\n\t\t\t<span entryId=\"${$data.entryId}\" productId=\"${$data.pfeed_id}\" class=\"addtobag\" role=\"skavaInteropQuickView\"><img src=\"randomDirectory\/images\/pool\/button_addtobag.png\"\/><\/span>\n\t\t\t<span entryId=\"${$data.entryId}\" productId=\"${$data.pfeed_id}\" class=\"pinit\" role=\"skavaInteropSharePinterest\" config=\"product\" product_url=\"${$data.pfeed_url}\" product_image=\"${$data.image_fullImage}\" product_desc=\"${$data.title}\"><img src=\"randomDirectory\/images\/pool\/button_pinit.png\"\/><\/span>\n\t\t<\/div>\n\t<\/div>\n<\/script>\n\n<script id=\"productListingRL\" type=\"text\/html\">\n\t<div class=\"product {{if $data.ralphlauren}}ralphlauren{{\/if}} {{if !$data.ralphlauren}}notralphlauren{{\/if}} {{if $data.mostVoted}}topgifted{{\/if}} ${$data.containerClass ? $data.containerClass : ''}\" {{if $data.containerClass!='offer'}} entryId=\"${$data.entryId}\" {{\/if}} productId=\"${$data.pfeed_id}\" {{if $data.containerClass=='offer'}} tracking=\"${$data.tracking}\"{{\/if}}>\n\t\t<div class=\"product_image\">\n\t\t\t<!--<img class=\"topgift_header\" src=\"${assetsDirectory}images\/pool\/topgifts_hgg.png\"\/>-->\n\t\t\t<a entryId=\"${$data.entryId}\" productId=\"${$data.pfeed_id}\" {{if finder.isTablet()}}role=\"skavaInteropQuickView\" href=\"javascript:void(0)\"{{else}}href=\"${$data.pfeed_url}\"{{\/if}}  {{if $data.containerClass=='offer'}}target=\"${$data.target}\"{{else}}target=\"_blank\"{{\/if}}>\n\t\t\t\t<img class=\"image\" src=\"${String($data.image_fullImage).replace(\/wid=(.*?)&\/gi, 'wid=190&')}\" \/>\n\t\t\t<\/a>\t\n\t\t\t{{if $data.pfeed_productvideo != ''}}\n\t\t\t\t<div entryId=\"${$data.entryId}\" productId=\"${$data.pfeed_id}\" onclick=\"finder.insertProductVideo({id:'${$data.pfeed_productvideo}' })\" class=\"product_video_btn product_button_base\">\n\t\t\t\t\t<div class=\"arrow-right\"><\/div>\n\t\t\t\t<\/div>\n\t\t\t{{\/if}}\n\t\t\n\t\t\t<div class=\"quickview product_button_base\" entryId=\"${$data.entryId}\" productId=\"${$data.pfeed_id}\" role=\"skavaInteropQuickView\">Quickview<\/div>\n\t\t\n\t\t<\/div>\n\t\t<div class=\"label\">\n\t\t\t<a href=\"${pfeed_url}\" target=\"_blank\">\n\t\t\t\t${label}\n\t\t\t<\/a>\n\t\t<\/div>\n\t\t{{if finder.isInternational && skShipping && skShipping.getLocalizedPriceEx}}\n\t\t\t{{if $data.pfeed_price1}}<p class=\"price price1\">${skShipping.getLocalizedPriceEx($data.pfeed_price1)}<\/p>{{\/if}}\n\t\t\t{{if $data.pfeed_price2}}<p class=\"price price2\">${skShipping.getLocalizedPriceEx($data.pfeed_price2)}<\/p>{{\/if}}\n\t\t\t{{if $data.pfeed_price3}}<p class=\"price price3\">${skShipping.getLocalizedPriceEx($data.pfeed_price3)}<\/p>{{\/if}}\n\t\t{{else}}\n\t\t\t{{if $data.pfeed_price1}}<p class=\"price price1\">${$data.pfeed_price1}<\/p>{{\/if}}\n\t\t\t{{if $data.pfeed_price2}}<p class=\"price price2\">${$data.pfeed_price2}<\/p>{{\/if}}\n\t\t\t{{if $data.pfeed_price3}}<p class=\"price price3\">${$data.pfeed_price3}<\/p>{{\/if}}\n\t\t{{\/if}}\n\t\t\n\t\t{{if $data.pfeed_promotions && $data.pfeed_promotions.length>5}}\n\t\t<p class=\"promotions\">SPECIAL OFFER<\/p>\n\t\t{{\/if}}\n\t\t\n\n\t\t<div class=\"bottomContainer\">\n\t\t\t<div class=\"buttons\">\n\t\t\t\t<span entryId=\"${$data.entryId}\" productId=\"${$data.pfeed_id}\" class=\"voteButton iconButton ${$data.inVoteList ? 'selected' : ''}\"><img src=\"randomDirectory\/images\/pool\/${$data.inVoteList ? 'button_lovelist_off.png' : 'button_lovelist.png'}\"\/><\/span>\n\t\t\t\t<span entryId=\"${$data.entryId}\" productId=\"${$data.pfeed_id}\" class=\"addtobag iconButton\" role=\"skavaInteropQuickView\"><img src=\"randomDirectory\/images\/pool\/button_addtobag.png\"\/><\/span>\n\t\t\t\t<span entryId=\"${$data.entryId}\" productId=\"${$data.pfeed_id}\" class=\"pinit iconButton\" role=\"skavaInteropSharePinterest\" config=\"product\" product_url=\"${$data.pfeed_url}\" product_image=\"${$data.image_fullImage}\" product_desc=\"${$data.title}\"><img src=\"randomDirectory\/images\/pool\/button_pinit.png\"\/><\/span>\n\n\t\t\t<\/div>\n\n\t\t\t<p class=\"votes\">${getVoteCopy($data)}<\/p>\n\t\t<\/div>\n\n\n\t<\/div>\n<\/script>\n\n<script id=\"XproductListing\" type=\"text\/html\">\n\t<div class=\"product ${$data.containerClass ? $data.containerClass : ''}\" {{if $data.containerClass!='offer'}}entryId=\"${$data.entryId}\"{{\/if}} productId=\"${$data.properties.pfeed_id}\" style=\"width:190px\">\n\t\t<div class=\"product_image\">\n\t\t\t<!--<img class=\"topgift_header\" src=\"${assetsDirectory}images\/pool\/topgifts_hgg.png\"\/>-->\n\t\t\t<a entryId=\"${$data.entryId}\" productId=\"${$data.properties.pfeed_id}\" href=\"${$data.properties.pfeed_url}\" target=\"_blank\">\n\t\t\t\t<img onload=\"finder.requestResizePage()\" class=\"image\" style=\"width:190px;\" src=\"${String($data.properties.pfeed_imageurl).replace(\/wid=(.*?)&\/gi, 'wid=190&')}\" \/>\n\t\t\t<\/a>\n\t\t\t<div class=\"quickview\">\n\t\t\t\t<a entryId=\"${$data.entryId}\" productId=\"${$data.properties.pfeed_id}\" role=\"skavaInteropQuickView\">Quick View<\/a>\n\t\t\t<\/div>\n\t\t\t{{if finder.product_videos[$data.properties.pfeed_id]}}\n\t\t\t\t<div class=\"product_video_icon\" title=\"click to play video\" onclick=\"finder.showProductVideo(${$data.properties.pfeed_id})\">&nbsp;<\/div>\n\t\t\t{{\/if}}\n\t\t<\/div>\n\t\t<p class=\"description\">${$data.title}<\/p>\n\t\t{{if finder.isInternational && skShipping && skShipping.getLocalizedPriceEx}}\n\t\t\t{{if $data.properties.pfeed_price1}}<p class=\"price price1\">${skShipping.getLocalizedPriceEx($data.properties.pfeed_price1)}<\/p>{{\/if}}\n\t\t\t{{if $data.properties.pfeed_price2}}<p class=\"price price2\">${skShipping.getLocalizedPriceEx($data.properties.pfeed_price2)}<\/p>{{\/if}}\n\t\t\t{{if $data.properties.pfeed_price3}}<p class=\"price price3\">${skShipping.getLocalizedPriceEx($data.properties.pfeed_price3)}<\/p>{{\/if}}\n\t\t{{else}}\n\t\t\t{{if $data.properties.pfeed_price1}}<p class=\"price price1\">${$data.properties.pfeed_price1}<\/p>{{\/if}}\n\t\t\t{{if $data.properties.pfeed_price2}}<p class=\"price price2\">${$data.properties.pfeed_price2}<\/p>{{\/if}}\n\t\t\t{{if $data.properties.pfeed_price3}}<p class=\"price price3\">${$data.properties.pfeed_price3}<\/p>{{\/if}}\n\t\t{{\/if}}\n\t\t\n\t\t{{if $data.pfeed_promotions && $data.pfeed_promotions.length>5}}\n\t\t<p class=\"promotions\">SPECIAL OFFER<\/p>\n\t\t{{\/if}}\n\t\t\n\t\t<p class=\"votes\">${ getVoteCopy($data) }<\/p>\n\t\t<div class=\"buttons\">\n\t\t\t<span entryId=\"${$data.entryId}\" productId=\"${$data.properties.pfeed_id}\" class=\"giftlistButton ${$data.inGiftList ? 'selected' : ''}\"><img src=\"randomDirectory\/images\/pool\/button_giftlist.png\"\/><\/span>\n\t\t\t<span entryId=\"${$data.entryId}\" productId=\"${$data.properties.pfeed_id}\" class=\"voteButton ${$data.inVoteList ? 'selected' : ''}\"><img src=\"randomDirectory\/images\/pool\/button_lovelist.png\"\/><\/span>\n\t\t\t<span entryId=\"${$data.entryId}\" productId=\"${$data.properties.pfeed_id}\" class=\"addtobag\" role=\"skavaInteropQuickView\"><img src=\"randomDirectory\/images\/pool\/button_addtobag.png\"\/><\/span>\n\t\t\t<span entryId=\"${$data.entryId}\" productId=\"${$data.properties.pfeed_id}\" class=\"pinit\" role=\"skavaInteropSharePinterest\" config=\"product\" product_url=\"${$data.properties.pfeed_url}\" product_image=\"${$data.properties.pfeed_imageurl}\" product_desc=\"${$data.title}\"><img src=\"randomDirectory\/images\/pool\/button_pinit.png\"\/><\/span>\n\t\t<\/div>\n\t<\/div>\n<\/script>\n\n\n\n\n\n<script id=\"giftlistItem\" type=\"text\/html\">\n\t<div entryid=\"${entryId}\" uniqueid=\"${$data.uniqueId}\" ${$data.gifttag ? 'hasTag' : ''}>\n\t\t<table width=\"100%\" cellpadding=\"0\" cellspacing=\"5\" border=\"0\" class=\"product_info\">\n\t\t\t<tr>\n\t\t\t\t<td width=\"1\" rowspan=\"2\" valign=\"top\" align=\"left\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"button-remove\" title=\"delete\">x<\/div>\n\t\t\t\t\t\t<img class=\"image\" style=\"min-width:${$data.imageWidth}px; min-height:${Math.round($data.imageWidth*1.221333)}px\" src=\"${String($data.properties.pfeed_imageurl).replace(\/wid=(.*?)&\/gi, 'wid='+$data.imageWidth+'&').replace(\/hei=(.*?)&\/gi, '&')}\" \/>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/td>\n\t\t\t\t<td colspan=\"2\" align=\"left\" valign=\"top\">\n\t\t\t\t\t<p class=\"description\">${$data.title}<\/p>\n\t\t\t\t<\/td><!--\n\t\t\t\t<td width=\"1\" rowspan=\"2\" align=\"left\" valign=\"bottom\">\n\t\t\t\t\t<div style=\"display:block; white-space:nowrap;\" class=\"addtobag redGradientSm redGradient\">+ add to bag<\/div>\n\t\t\t\t<\/td>-->\n\t\t\t<\/tr>\n\t\t\t<tr>\n\t\t\t\t<td align=\"left\" valign=\"top\">\n\t\t\t\t\t{{if $data.properties.pfeed_price1}}<p class=\"price price1\">${$data.properties.pfeed_price1}<\/p>{{\/if}}\n\t\t\t\t\t{{if $data.properties.pfeed_price2}}<p class=\"price price2\">${$data.properties.pfeed_price2}<\/p>{{\/if}}\n\t\t\t\t\t{{if $data.properties.pfeed_price3}}<p class=\"price price3\">${$data.properties.pfeed_price3}<\/p>{{\/if}}\n\t\t\t\t\t<div class=\"tagButton\">add custom tag<\/div>\n\t\t\t\t\t<div class=\"tag\">\n\t\t\t\t\t\t<div class=\"tag_p1\"><\/div>\n\t\t\t\t\t\t<div class=\"tag_p2\">For:<\/div>\n\t\t\t\t\t\t<div class=\"tag_p2\">\n\t\t\t\t\t\t\t<div class=\"autocomplete\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"suggest\" \/>\n\t\t\t\t\t\t\t\t<input maxlength=\"20\" type=\"text\" name=\"gift_tag\" startval=\"Enter name\" class=\"userinput ${$data.gifttag ? 'changed' : ''}\" value=\"${$data.gifttag ? $data.gifttag : 'Enter name'}\" \/>\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<div class=\"tag_p3\"><\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/td>\n\t\t\t\t<td width=\"1\" align=\"right\" valign=\"bottom\">\n\t\t\t\t\t<div class=\"shareButton\">share<div class=\"icon\"><\/div><\/div>\n\t\t\t\t\t<div class=\"addtogiftlist {{if $data.gift}}disabled{{\/if}}\">+ add to gift list<\/div>\n\t\t\t\t\t<div class=\"addtobag\">+ add to bag<\/div>\n\t\t\t\t<\/td>\n\t\t\t<\/tr>\n\t\t<\/table>\n\t<\/div>\n<\/script>\n\n<!-- TOP GIFTS -->\n<script id=\"topTenItemTemplate\" type=\"text\/x-jQuery-tmpl\">\n\t<a href=\"javascript:void(0);\" productId=\"${String($data.properties.pfeed_id)}\" entryId=\"${$data.entryId}\" role=\"skavaInteropQuickView\">\n\t\t<img src=\"${$data.properties.pfeed_imageurl.replace('wid=250', 'wid=105')}\" class=\"productImage\" border=\"0\" productId=\"${String($data.properties.pfeed_id)}\" \/>\n\t<\/a>\n\t<a class=\"voterow\">${Math.max(1,$data.votes)}<\/span> love{{if Math.max(1,$data.votes) < 2 }}s{{\/if}} this gift!<\/a>\n<\/script>\n\n<script id=\"topGiftLanding\" type=\"text\/x-jQuery-tmpl\">\n\t<div class=\"gift topgift ${containerClass}\" brand=\"${String($data.properties.pfeed_brand)}\" productId=\"${String($data.properties.pfeed_id)}\" entryId=\"${String($data.entryId)}\" insertId=\"${insertIndex}\">\n\t\t<h2><img src=\"${sectionbanner}\"\/><\/h2>\n\t\t<a href=\"javascript:void(0);\" productId=\"${String($data.properties.pfeed_id)}\" entryId=\"${String($data.entryId)}\" role=\"skavaInteropQuickView\"><img src=\"${String($data.properties.pfeed_imageurl).replace('wid=250', 'wid=105')}\" class=\"productImage\" border=\"0\" role=\"skavaInteropQuickView\" productId=\"${String($data.properties.pfeed_id)}\" \/><\/a>\n\t\t<a class=\"voterow\">${Math.max(1,votes)}&nbsp;&#8226;&nbsp;lovelove{{if Math.max(1,votes) < 2 }}s{{\/if}} this gift!<\/a>\n\t\t<a class=\"gototopten\" href=\"#\/landing\/topgifts\/${containerClass}\"><\/a>\n\t<\/div>\n<\/script>\n\n<script id=\"topgiftListing\" type=\"text\/x-jQuery-tmpl\">\n\t<div class=\"gift topgift p${$data.insertIndex}\" brand=\"${$data.properties.pfeed_brand}\" productId=\"${$data.properties.pfeed_id}\" entryId=\"${$data.entryId}\" insertId=\"${$data.insertIndex}\">\n\t\t<span class=\"number\">${($data.insertIndex + 1)}<\/span>\n\t\t{{if sectionbanner}}\n\t\t<h3><img src=\"${sectionbanner}\"\/><\/h3>\n\t\t{{\/if}}\n\t\t<div class=\"product_image\">\n\t\t\t<a href=\"javascript:void(0);\" productId=\"${String($data.properties.pfeed_id)}\" entryId=\"${String($data.entryId)}\" role=\"skavaInteropQuickView\"><img src=\"${String($data.properties.pfeed_imageurl).replace('wid=250', 'wid=285')}\" class=\"productImage\" border=\"0\" role=\"skavaInteropQuickView\" productId=\"${String($data.properties.pfeed_id)}\"><\/a>\n\t\t<\/div>\t\n\t\t<a class=\"voterow\"><span class=\"num\">${Math.max(1,votes)}<\/span> love{{if Math.max(1,votes) < 2 }}s{{\/if}} this gift!<\/a>\n\t\t{{if sectionbanner}}\n\t\t<p><a href=\"${pfeed_url}\" target=\"_blank\">${title}<\/a><\/p>\n\t\t{{\/if}}\n\t<\/div>\n<\/script>\n\n\n\n\n\n\n\n\n\n\n\n\n"},"misc":{}};

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/GgPage.js */

var GgPage = FinderPage.extend({

    // hack in something to kill all transition out delays from half a second to 1 millisecond
    init: function(params){
        this._super(params);
        this.transitionOutDelay = 1;
    },

	getHighlight: function() {
		return "homepage";
	},
	
	setup: function() {
		this._super();
		
		this.parentDiv = jQuery(".finderPage#" + this.navId, "#pageContainer");
		/*
        var container = jQuery('#footerContainer');
        var footer = container.html();
        this.parentDiv.append(footer);
        container.css({ height: "0" });
		*/
	},

	processParams: function() {
		this._super();
		this.handleTracking();
	},
	
	handleTracking: function() {
	}

});



/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/components/AutoTracker.js */
//cms
function AutoTracker(settings){
	var self = this;
	this.logging = true;
	this.log = [];
	
	self.settings = {prefix:'ca-so-', defaultPage:'home', site:'lenoxsweeps', ignoreKeys:[], ignoreNumbers:true};
	$.extend(self.settings,settings);
	
	this.init = function(){
		$.each(self.settings.ignoreKeys, function(i,e){self.settings.ignoreKeys[i] = self.settings.ignoreKeys[i].toLowerCase()});
		self.parent = $('#finderContainer');
		self.parent.on('click','[track]',self.handleClickTracker);
		self.parent.on('change','select[track]',self.handleClickTracker);
		self.parent.on('click','a:not([track])',self.handleClickLink);
		self.parent.on('pageUrlChanged',self.handlePageChanged);
		self.tracker_base = finder.getConfig().tracking.base;
	}
	
	this.track = function(pageid, catid){
		pageid = self.replaceConstants(pageid);
		catid = self.replaceConstants(catid);
		pageid = pageid.replace('..','.');
		catid = catid.replace('..','.');
		while(pageid.slice(-1)=='.') pageid=pageid.slice(0,-1);
		while(catid.slice(-1)=='.') catid=catid.slice(0,-1);
		catid = catid.replace(/\./g,'-');
		
		self.insertLog(pageid, catid);
		
		try {
			registerPageViewEx(pageid, catid);
		} catch (err) {
			console.log('AutoTracker.track("'+pageid+'","'+catid+'")');
		}
	}
	
	this.pageBase = function(){
		var p = location.hash.slice(1);
		p = p.split('?')[0];
		var keys = p.replace(/^\/|\/$/g, '').split('/');
		if(keys.length>0){
			var path = [];
			for(var i=0; i<keys.length; i++){
				if($.inArray(keys[i],self.ignoreKeys)==-1){// && (self.settings.ignoreNumbers && isNaN(keys[i]))){
					path.push(keys[i]);
				}
			}
			var result = self.filterIgnored(path).join('.').toLowerCase();
			return result=='' ? self.settings.defaultPage : result;
		}
		return 'hp';
	}
	
	this.siteBase = function(){
		return self.settings.prefix+self.settings.site;
	}
	
	this.replaceConstants = function(str,eventType){
		var tags = [];
		var keys = str.split('.');
		for(var i=0; i<keys.length; i++){
			switch(keys[i]){
				case '%PAGE%' :
					tags.push(self.pageBase());
					break;
				case '%SITE%' :
					tags.push(self.siteBase());
					if(eventType=='click'){
						tags.push('click');
					}
					break;
				default :
					tags.push(keys[i]);
			}
		}
		return tags.join('.');
	}
	
	this.handleClickLink = function(evt){
		var href = $(this).attr('href');
		if(href.indexOf('http')==0){
			href = href.split('//')[1];
			var folders = href.split('/');
			var parts = folders[0].split('.');
			var path = [];
			path.push(parts[1] ? parts[1] : parts[0]);
			path.push(folders[1] ? folders[1] : '');
			$(this).attr('track',path.join(''));
			self.handleClickTrackerProxy(this);
			//self.trigger('click');
		}
	}
	
	this.handleClickTrackerProxy = function(_this){
		//console.log('handleClickTracker',evt.target);
		var tags = [];
		
		$(_this).parents('[trackKey]').each(function(i,e){
			if($.inArray($(e).attr('trackKey'),tags)==-1){
				tags.push($(e).attr('trackKey'));
			}
		});
		tags = self.filterIgnored(tags);
		
		var tracker_tag = $(_this).attr('track');
		var pageid = self.siteBase() + '.click.' + self.pageBase() + '.' + tags.join('.') + '.' + tracker_tag;
		var catid = self.siteBase() + '.click.' + self.pageBase() + '.' + tags.join('.');
		
		if(tracker_tag.indexOf('{')>-1){
			// this is json data
			try {
				var d = $.parseJSON(tracker_tag);
				
				if(d.pageid){
					pageid = self.replaceConstants(d.pageid,'click');
				}
				if(d.catid){
					catid = self.replaceConstants(d.catid,'click');
				}
			} catch(err) {
				console.error("Can't process JSON auto tracker:",tracker_tag);
			}
		}
		self.track(pageid,catid);
	}
	
	this.handleClickTracker = function(evt){
		//evt.stopPropagation();
		self.handleClickTrackerProxy(this);
	}
	
	this.handlePageChanged = function(){
		var cms_page = finder.getCurrentPage()//CMSTools.getCurrentCMSPage();
//		if(cms_page && cms_page.tracking){
//			//
//			// use tracker specified in CMS page if found
//			//
//			var tracker_tag = cms_page.tracking;
//			if(tracker_tag.indexOf('{')>-1){
//				try {
//					var d = $.parseJSON(tracker_tag);
//
//					if(d.pageid){
//						pageid = self.replaceConstants(d.pageid,'click');
//					}
//					if(d.catid){
//						catid = self.replaceConstants(d.catid,'click');
//					}
//					self.track(pageid,catid);
//				} catch(err) {
//					console.error("Can't process JSON auto tracker:",tracker_tag);
//				}
//			}
//		} else {
			//
			// contruct tracker based on hash
			//
			var tracker_page = '';
			var p = finder.getCurrentPage();
			if(p.params.argc){
				var tracker_page = self.filterIgnored(p.params.argc).join('.').toLowerCase();
			}
			var pagebase = self.pageBase();
			var pageid = self.siteBase() + '.page.' + pagebase + (pagebase.indexOf('.')==-1 ? '.lp' : '');
			var catid = pageid.split('.').slice(0,-1).join('.');
			self.track(pageid,catid);
//		}
	}
	
	this.filterIgnored = function(arr){
		var result = [];
		for(var i=0; i<arr.length; i++){
			if($.inArray(arr[i].toLowerCase(),self.settings.ignoreKeys)==-1){
				result.push(arr[i].toLowerCase());
			}
		}
		return result;
	}
	//
	// LOGGING CLICKS FOR EXPORT
	//
	this.startLog = function(){
		self.logging = true;
		self.log = [];
	}
	this.insertLog = function(pageid, catid){
		if(self.logging){
			self.log.push('siteid,'+catid+',description,'+pageid);
			/*
			var b = self.siteBase();
			var p = pageid.split('.');
			var c = catid.split('.');
			var pi = p.length;
			var ci = c.length;
			
			while(pi>0 && ci>0){
				var cs = c.slice(0,ci).join('.');
				var ps = p.slice(0,pi).join('.');
				var str = 'siteid,'+cs+',description,'+ps;
				if($.inArray(str,self.log)==-1){
					self.log.push(str);
				}
				ci--;
				pi--;
			}
			*/
		}
	}
	this.printLog = function(){
		self.log.sort();
		console.log(self.log.join('\n'));
	}
	
	this.init();
}

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/pages/HomePage.js */


var HomePage = GgPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {
		
		var params = {
				 	title: "Home Page",
					url: "html/home.html",
					navId: "home",
					preLoad: [
								
							  ]
				 }
		
		this._super(params);
		
	},









	/* this function will be this.render in Backbone */
	setup: function() {
		this._super();


        ////// get from skava date to see if the sweep is over
        try {
            getCurrentESTTime(dateSwitch);

        } catch (e) {
            console.error("getCurrentDateAndTime is not available, or not in Skava Environment " + e);
        }
        function dateSwitch(serverFateArg){
            var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
            var firstDate =  new Date(JSON.parse(serverFateArg).year+','+JSON.parse(serverFateArg).month+','+JSON.parse(serverFateArg).day );
            var secondDate = new Date(2014,09,27);

            var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
            console.log('firstDate', firstDate ,'  secondDate ', secondDate,'     ' ,diffDays);
            if(diffDays<1) {
                $('.headline-week1').hide();
                $('.headline-main').show();
            }else{
                ///// print days to the home page
                $('.headline').append('<div class="daysto">' + diffDays + '</div>')
            }
        };

	},




	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



        $chosen = $('.finderPage#home');


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

/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/pages/LandingPage.js */


var LandingPage = GgPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {
		
		var params = {
				 	title: "landing",
					url: "html/landing.html",
					navId: "landing",
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






        // SHOW AND HIDE THE CORRECT BUCKET

        // determine the $chosen anime bucket based on the hashtag and url
        var chosen = this.params.argc[0];
        // the topgifts landing uses the next arg so concat.  example 'topgifts' becomes 'topgifts-him'
        if (this.params.argc[1]) chosen+= '-'+this.params.argc[1];
        var $chosen = $('#animewrapper').find('.animebucket.' + chosen);
        // show the $chosen and hide the others
        $chosen.show().siblings().hide();






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



/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/pages/ShopPage.js */


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



/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/pages/ShoprlPage.js */


var ShoprlPage = GgPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {
		var params = {
			title: "shoprl",
			url: "html/shoprl.html",
			navId: "shoprl",
			preLoad: []
		};
		var self = this;

		this._super(params);

		$("#finderContainer").on('click','#shoprl .voteButton',{},function(event){
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

		$("#finderContainer").on('change','#shoprl .filter',{},function(event){
			event.preventDefault();
			event.stopPropagation();
			var pfeed = $(this).val().split(",")[0];
			var value = $(this).val().split(",")[1];
			self.cb().filterPool( pfeed, value );
			//alert("change");
		});

		$("#finderContainer").on('change','#shoprl #sortby',{},function(event){
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
		var pageSize = 25;
		// only renders pages if the does not equal pageSize
		var prevItemsOnPage;
		// set dynamic page proeprty to the page value/
		// on scroll this will change
		var itemsOnPage = pageSize;
		// current data filtered and sorted if need be
		var currentSort;
		// the data for the page
		var pageData;

		var itemsPerRow = 5;

		var self = this;
		var $slider;

		var config;

		
		var wantVideos = false;
		// the pool DOM container
		var $container = $( ".products" );
		// html template by id
		var productTemplate = "#productListingNew";

		var grid = [[1,1,0,0,0],
					[1,1,0,0,0],
					[0,0,0,0,0],
					[0,0,0,1,1],
					[0,0,0,1,1],
					[0,0,0,0,0],
					[1,1,0,0,0],
					[1,1,0,0,0]];

	
		function setConfig( configObject ) {
			config = configObject;
		}

		// reset pool
		// emptry container
		// unbind scrolling
		function resetPool() {
			itemsOnPage = pageSize;
			wantVideos = false;
			//unbindEvents();
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
					var tempData = BBPool.processDataRalphLauren( data );
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

			self.data = data;
			self.currentData = self.data.slice(0);
			sortPool();
		}

		// renders data for current page
		function setPage() {
			//pageData = self.currentData.slice( pageIndex * itemsOnPage, pageIndex * itemsOnPage + itemsOnPage );
			console.log( pageData, ' pageData *********************');
			renderPage( self.currentData );
		}

		// increments page as user scrolls down
		function incrementPage() {
			prevItemsOnPage = itemsOnPage;
			// page size gets bigger and bigger until it equals the total items
			itemsOnPage =  (itemsOnPage + pageSize > totalItems ) ? totalItems : itemsOnPage + pageSize;
			if (prevItemsOnPage !== itemsOnPage) {
				setPage();
			} else {
				unbindEvents();
			}
		}

		// DOM specific events can go here
		function bindEvents() {
			try {
				$( parent.window.document ).bind('scroll.endless', function(){
					console.log(" SCROLL ");
					var headerHeight = 212;
					var scrollTop = $( parent.window.document ).scrollTop();
					var contentHeight = $( parent.window.document ).height();
					var windowHeight = $( parent.window ).height();
					var p = scrollTop / ( contentHeight - windowHeight );
					// AUTO LOAD NEXT PAGE OF PRODUCTS
					if( p > 0.8 ){
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

		function buildVideo( data, productWidth, productHeight, margin ) {

			var videoDiv;
			var video;
			var gif;
			var img;
			var content;

			if (data.type === "video") {
				if (finder.isTablet() ) {
					videoDiv = $( "#gifTemplate" ).tmpl( data ).appendTo( $container );
					gif = videoDiv.find("img");
					content = gif;
				} else {
					videoDiv = $( "#videoTemplate" ).tmpl( data ).appendTo( $container );
					video = videoDiv.find("video");
					content = video;
				}
			}

			if( data.type === "image" ) {
				videoDiv = $( "#imageTemplate" ).tmpl( data ).appendTo( $container );
				img = videoDiv.find("img");
				content = img;
			}
			
			if ( video ) {
				video.css("opacity","0");
				video.on("canplaythrough", function( event ) {
					// on firefox has annoying hairline to the right you can se background image through
					if ($.browser.mozilla) {
						videoDiv.css( "background", "none" );
					}
					// fade in video over background image
					video.css("opacity","1");
				});
			}

			var sizeX = data.size[ 0 ];
			var sizeY = data.size[ 1 ];
			var positionX = data.gridPosition[ 0 ];
			var positionY = data.gridPosition[ 1 ];
			
			var width = ( sizeX * productWidth ) + ( sizeX - 1 ) * margin;

			// subtract the 1px border from left and righ side
			width = width - 2;
			var height = ( sizeY * productHeight ) + ( sizeY - 1 ) * margin;
			var x = ( productWidth + margin ) * positionX;
			var y = ( productHeight + margin ) * positionY;

			content.css( {
				width: width
			});

			var videoHeight = height - 2;

			videoDiv.css({
				left: x,
				top: y,
				height: videoHeight + "px"
			});
			
		}

		// destroy and rebuild page
		function renderPage( data ) {
			console.log("renderPage0");
			$container.empty();
			console.log("renderPage1");
			
			var margin = 15;
			var i;
			var counter;
			var xindex;
			var yindex;
			var j;
			var k;

			/*
			var video = $( "#videoTemplate" ).tmpl( ).appendTo( $container );
			video.css( { "margin-top":"20px", "margin-left":"20px" } );

			var video = $( "#videoTemplate2" ).tmpl( ).appendTo( $container );
			video.css( { "margin-top":"80px", "margin-left":"80px" } );

			var video = $( "#videoTemplate3" ).tmpl( ).appendTo( $container );
			video.css( { "margin-top":"100px", "margin-left":"40px" } );
			*/

			var productsHTML = $( productTemplate ).tmpl( data );
			$container.append( productsHTML );
			var $products = $(".product");
			
			

			var $product0 = $products.eq( 0 );

			var productWidth = $product0.width();
			var productHeight = $product0.height();
			var totalProductWidth = productWidth + margin;
			var totalProductHeight = productHeight + margin;

			if (config.videoData){
				if (config.videoData.videos) {
					wantVideos = true;
					grid = config.videoData.grid;
					i = 0;
					while( i < config.videoData.videos.length ) {
						buildVideo(config.videoData.videos[ i ],productWidth,productHeight,margin);
						i++;
					}
				}
			}

			i = 0;
			counter = 0;
			//alert( $products.length );


			function stackProducts(x,y,j,k) {
				x = j * totalProductWidth;
				y = k * totalProductHeight;
				$product.css( "left", x );
				$product.css( "top", y );
			}

			while( i < $products.length ) {
				var $product = $products.eq(i);
				j = counter % itemsPerRow;
				k = Math.floor( ( counter ) / itemsPerRow );
				var x;
				var y;
				if ( wantVideos ) {
					if ( grid[ k ] ) {
						if ( grid[ k ][ j ]) {
							if ( grid[ k ][ j ] === 0 ) {
								stackProducts(x,y,j,k);
								i++;
							}
						} else {
							stackProducts(x,y,j,k);
							i++;
						}
					} else {
						stackProducts(x,y,j,k);
						i++;
					}
				} else {
					stackProducts(x,y,j,k);
					i++;
				}
				

				if (counter > 1000) {
					break;
				}

				counter ++;
			}

			var totalHeight = ( k + 1 ) * totalProductHeight;
			//var videoHeight = 
			var videoHeight = 0;
			if ( config.videoData ) {
				if ( config.videoData.videos ) {
					var highest = _.max( config.videoData.videos, function( o ){ return o.gridPosition[1]; } );
					videoHeight = highest.gridPosition[1] * totalProductHeight + highest.size[1] * totalProductHeight;
				}
			}
			var newHeight = Math.max( totalHeight, videoHeight );

			$( ".products" ).height( newHeight );
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
			setPage();
		}

		function filterPool( pfeed, value ) {
			if ( value === "DEFAULT" ) {
				self.currentData = self.data.slice(0);
			} else {
				self.currentData = BBPool.filter( self.data.slice(0), function( entry ) {
					if( entry[ pfeed ] === value ) return entry;
				} );
			}
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
				resetSliderBuild: resetSliderBuild,
				
				setConfig: setConfig,

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
						parentConfig = finder.getConfig()[ this.navId ];
						if ( finder.getConfig()[ this.navId ][ this.params.argc[0] ] ) {
							config = finder.getConfig()[ this.navId ][ this.params.argc[0] ];
						}
					}
				}
			}
		}

		var setupInterface = this.cb();
		// pool url
	
		setupInterface.resetPool();
		if ( config ) {
			setupInterface.setConfig( config );
			if( finder.isTablet() ) {
				if (this.prevArgc) {
					if ( this.prevArgc[ 0 ] != this.params.argc[ 0 ]) {
						//SlidingHeader.reset();
						this.slidingHeaderForTablet.reset();
						setupInterface.resetSliderBuild();
					}
				}
				//var o = {};
				//o.shoprl = config;
				this.slidingHeaderForTablet.init( parentConfig );
				//self.slidingHeaderForTablet.init( parentConfig );

				//setupInterface.buildHeaderTablet( parentConfig );

			} else {
				setupInterface.buildHeader( config );
			}
			//setupInterface.buildHeader( config );
			setupInterface.buildFilters( config );

			var url = poolRoot + config.poolName;
			var poolName = config.poolName + "rl";
			var data = BBPoolCache.getPoolByName( poolName );

			if ( data === -1 ) {
				finder.loadingDisplay.start( "load_pool" );
				setupInterface.loadPool( url, poolName);
			} else {
				setupInterface.startPool( data );
			}
			
			//setTimeout( function() { setupInterface.loadPool( url ); }, 1000 );
		}

		this.prevArgc = this.params.argc;


////highlight subnav
        var currentSub = finder.currentPage.params.argc[0];
        $('.rl_nav_container').find('.selected').removeClass('selected');
        $('.rl_nav_container').find('.'+currentSub).addClass('selected');


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

		$( parent.window.document ).unbind( "scroll.endless" );
	},
	
	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}
});



/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/pages/StargiftsPage.js */


var StargiftsPage = GgPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {
		
		var params = {
				 	title: "stargifts",
					url: "html/stargifts.html",
					navId: "stargifts",
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

        /*
        // redirect if design requires no generic homepage for stargifts
        if (this.params.argc.length == 0)  window.location.replace("#");
        */

        // determine the $chosen anime bucket based on the hashtag and url
        var chosen = this.params.argc[0];
        chosen = chosen ? chosen : 'starhome';
        var $chosen = $('#animewrapper').find('.animebucket.' + chosen);
        console.log('======= >  ',chosen,'   ', $chosen);

        // show the $chosen and hide the others
        $chosen.show().siblings().hide();

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



/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/pages/TopgiftsPage.js */


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



/* ../projects/giftguide_holiday_2014_tablet//randomDirectory/ipad/js/FinderStarter.js */

try {
    console.log("console exists");
} 
catch (e) {
    window.console = {};
    window.console.log = function(txt){
    
    }
    window.console.warn = function(txt){
    
    }
    window.console.error = function(txt){
    
    }
}


var finder;
jQuery(document.body).ready(function(){
    	
		finder = new GgFinder();
		finder.setTemplates(GgHTMLPages);
		
		var data = finder.getTemplate("structure");
        jQuery("#finderContainer").html(data.replace(/randomDirectory\//g, finder.getConfig().assetsDirectory));
        
		// add the image maps to the page...
		jQuery("#finderContainer").after(finder.getTemplate("imageMaps").replace(/randomDirectory\//g, finder.getConfig().assetsDirectory));
		
		// add all the templates that will be needed later...
		for (i in finder.templates.templates) {
			jQuery("#finderContainer").after(finder.templates.templates[i].replace(/randomDirectory\//g, finder.getConfig().assetsDirectory));
		}
		
		
		/* ADD PAGES START */
finder.addPage(new HomePage());
finder.addPage(new LandingPage());
finder.addPage(new ShopPage());
finder.addPage(new ShoprlPage());
finder.addPage(new StargiftsPage());
finder.addPage(new TopgiftsPage());
/* ADD PAGES END */
		
		
		finder.poolDebug = new PoolDebug();
		
        finder.setup();
     
});
