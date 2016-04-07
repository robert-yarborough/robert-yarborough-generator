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

    defaultPage:'home',
    'assetsDirectory':assetsDirectory,
    webRoot:DEEPLINK_DIR,

    aliases:{},

    sharing:{

        /* SHARING ITEMS - Don't touch this comment :-) */

        site:{
            mailerIds:{
                staging:215,
                production:203
            },
            url:webRoot,
            icon:assetsDirectory + "images/share/0909_MGTS_share_icon_01.jpg",
            facebook:{
                title:"Check out the Men's Guide to Style!",
                description:"I just got the inside scoop with Macy's Men's Guide to Style. Check out tips and tricks now."
            },
            twitter:"Get the inside scoop on a whole new look with tips & tricks from Macy's Men's Guide to Style."
        }

    },

    quickView:{
        catId:"this is the cat id",
        position:[null, 10, 658, 603],
        bgColor:"#000000"
    },

    comment:{
        position:[150, 70]
    },

    tracking:{
        home:{pageid:"ca-so-gentlemans.hp", catid:"ca-so-gentlemans-guide"},
        suitQuiz:{pageid:"ca-so-gentlemans.quiz", catid:"ca-so-gentlemans-guide-quiz"},
        suitQuizPool:{pageid:"ca-so-gentlemans.quiz.findsuit", catid:"ca-so-gentlemans-guide-quiz"},
        suitQuizPoolquizAgain:{pageid:"ca-so-gentlemans.quiz.findsuit.takequizagain", catid:"ca-so-gentlemans-guide-quiz"},
        suitQuizPoolquizSorting:{pageid:"ca-so-gentlemans.quiz.findsuit.sort", catid:"ca-so-gentlemans-guide-quiz"},
        suitQuizPoolquizReset:{pageid:"ca-so-gentlemans.quiz.findsuit.reset", catid:"ca-so-gentlemans-guide-quiz"},
        shirtTieMixer:{pageid:"ca-so-gentlemans.match", catid:"ca-so-gentlemans-guide-matchmaker"},

        suitsLauren:{pageid:"ca-so-gentlemans.wearit.slide1", catid:"ca-so-gentlemans-guide-wearit-slide1"},
        suitsCK:{pageid:"ca-so-gentlemans.wearit.slide2", catid:"ca-so-gentlemans-guide-wearit-slide2"},
        suitsMK:{pageid:"ca-so-gentlemans.wearit.slide3", catid:"ca-so-gentlemans-guide-wearit-slide3"},



        dressing101:{pageid:"ca-so-gentlemans.101.fitguide", catid:"ca-so-gentlemans-guide-fitguide"},

        fitsuit:{pageid:"ca-so-gentlemans.101.fitguide.suits", catid:"ca-so-gentlemans-guide-fitguide-suits"},
        fitsuitextraslim:{pageid:"ca-so-gentlemans.101.fitguide.suits.extraslimfit", catid:"ca-so-gentlemans-guide-fitguide-suits-extraslimfit"},
        fitsuitslim:{pageid:"ca-so-gentlemans.101.fitguide.suits.slimfit", catid:"ca-so-gentlemans-guide-fitguide-suits-slimfit"},
        fitsuittrim:{pageid:"ca-so-gentlemans.101.fitguide.suits.trimfit", catid:"ca-so-gentlemans-guide-fitguide-suits-trimfit"},
        fitsuitclassic:{pageid:"ca-so-gentlemans.101.fitguide.suits.classicfit", catid:"ca-so-gentlemans-guide-fitguide-suits-classicfit"},
        fitsize:{pageid:"ca-so-gentlemans.101.fitguide.suits.sizesuit", catid:"ca-so-gentlemans-guide-fitguide-suits"},
        fitshirt:{pageid:"ca-so-gentlemans.101.fitguide.shirts", catid:"ca-so-gentlemans-guide-fitguide-shirts"},
        fitshirtextraslim:{pageid:"ca-so-gentlemans.101.fitguide.shirts.extraslimfit", catid:"ca-so-gentlemans-guide-fitguide-shirts-extraslim"},
        fitshirtslim:{pageid:"ca-so-gentlemans.101.fitguide.shirts.slimfit", catid:"ca-so-gentlemans-guide-fitguide-shirts-slimfit"},
        fitshirtfitted:{pageid:"ca-so-gentlemans.101.fitguide.shirts.fitted", catid:"ca-so-gentlemans-guide-fitguide-shirts-fitted"},
        fitshirtclassic:{pageid:"ca-so-gentlemans.101.fitguide.shirts.classicfit", catid:"ca-so-gentlemans-guide-fitguide-shirts-classicfit"},
        fitjeans:{pageid:"ca-so-gentlemans.101.fitguide.jeans", catid:"ca-so-gentlemans-guide-fitguide-jeans"},

        fitknots:{pageid:"ca-so-gentlemans.101.ties.windsor", catid:"ca-so-gentlemans-guide-fitguide-ties"},
        fitknots2:{pageid:"ca-so-gentlemans.101.ties.halfwindsor", catid:"ca-so-gentlemans-guide-fitguide-ties"},
        fitknots3:{pageid:"ca-so-gentlemans.101.ties.classic", catid:"ca-so-gentlemans-guide-fitguide-ties"},
        fitknots4:{pageid:"ca-so-gentlemans.101.ties.bow", catid:"ca-so-gentlemans-guide-fitguide-ties"},


        casualStyle:{pageid:"ca-so-gentlemans.101.casual.style.lp", catid:"ca-so-gentlemans-guide-casual-style"},
        casualClassicPool:{pageid:"ca-so-gentlemans.101.casual.style.classic", catid:"ca-so-gentlemans-guide-casual-style-classic"},
        ClassicShopAll:{pageid:"ca-so-gentlemans.101.casual.style.classic.shop", catid:"ca-so-gentlemans-guide-casual-style-classic"},
        classicontheclock:{pageid:"ca-so-gentlemans.101.casual.style.classic.ontheclock", catid:"ca-so-gentlemans-guide-casual-style-classic"},
        classicnightout:{pageid:"ca-so-gentlemans.101.casual.style.classic.nightout", catid:"ca-so-gentlemans-guide-casual-style-classic"},
        classicweekend:{pageid:"ca-so-gentlemans.101.casual.style.classic.weekend", catid:"ca-so-gentlemans-guide-casual-style-classic"},
        classicgameon:{pageid:"ca-so-gentlemans.101.casual.style.classic.gameon", catid:"ca-so-gentlemans-guide-casual-style-classic"},
        casualModernPool:{pageid:"ca-so-gentlemans.101.casual.style.modern", catid:"ca-so-gentlemans-guide-casual-style-modern"},
        modernShopAll:{pageid:"ca-so-gentlemans.101.casual.style.modern.shop", catid:"ca-so-gentlemans-guide-casual-style-modern"},
        moderneclock:{pageid:"ca-so-gentlemans.101.casual.style.modern.ontheclock", catid:"ca-so-gentlemans-guide-casual-style-modern"},
        modernnightout:{pageid:"ca-so-gentlemans.101.casual.style.modern.nightout", catid:"ca-so-gentlemans-guide-casual-style-modern"},
        modernweekend:{pageid:"ca-so-gentlemans.101.casual.style.modern.weekend", catid:"ca-so-gentlemans-guide-casual-style-modern"},
        moderngameon:{pageid:"ca-so-gentlemans.101.casual.style.modern.gameon", catid:"ca-so-gentlemans-guide-casual-style-modern"},
        casualcontemporaryPool:{pageid:"ca-so-gentlemans.101.casual.style.contemporary", catid:"ca-so-gentlemans-guide-casual-style-contemporary"},
        contempShopAll:{pageid:"ca-so-gentlemans.101.casual.style.contemporary.shop", catid:"ca-so-gentlemans-guide-casual-style-contemporary"},
        contempweekend:{pageid:"ca-so-gentlemans.101.casual.style.contemporary.weekend", catid:"ca-so-gentlemans-guide-casual-style-contemporary"},
        contempnightout:{pageid:"ca-so-gentlemans.101.casual.style.contemporary.nightout", catid:"ca-so-gentlemans-guide-casual-style-contemporary"},
        contempclock:{pageid:"ca-so-gentlemans.101.casual.style.contemporary.ontheclock", catid:"ca-so-gentlemans-guide-casual-style-contemporary"},
        contempgameon:{pageid:"ca-so-gentlemans.101.casual.style.contemporary.gameon", catid:"ca-so-gentlemans-guide-casual-style-contemporary"},
        matchmakerbuy:{pageid:"ca-so-gentlemans.match.buy", catid:"ca-so-gentlemans-guide-matchmaker"},
        'howtowearit': {
        pageid: "ca-so-gentlemans.wearit",
        catid: "ca-so-gentlemans-guide-wearit"
        },

        wearsuitlp:{pageid:"ca-so-gentlemans.wearit.suitandjacket", catid:"ca-so-gentlemans-guide-wearit-suitandjacket"},
        wearsuit:{pageid:"ca-so-gentlemans.wearit.suitandjacket", catid:"ca-so-gentlemans-guide-wearit-suitandjacket"},
        wearsweaterlp:{pageid:"ca-so-gentlemans.wearit.sweater", catid:"ca-so-gentlemans-guide-wearit-sweater"},
        wearsweater:{pageid:"ca-so-gentlemans.wearit.sweater", catid:"ca-so-gentlemans-guide-wearit-sweater"},
        wearcasualshirtlp:{pageid:"ca-so-gentlemans.wearit.casualshirt", catid:"ca-so-gentlemans-guide-wearit-casualshirt"},
        wearcasualshirt:{pageid:"ca-so-gentlemans.wearit.casualshirt", catid:"ca-so-gentlemans-guide-wearit-casualshirt"},
        wearpants:{pageid:"ca-so-gentlemans.wearit.jeanspants", catid:"ca-so-gentlemans-guide-wearit-jeanspants"},
        wearpoloslp:{pageid:"ca-so-gentlemans.wearit.polo", catid:"ca-so-gentlemans-guide-wearit-polo"},
        wearpolos  :{pageid:"ca-so-gentlemans.wearit.polo", catid:"ca-so-gentlemans-guide-wearit-polo"},
        weargear:{pageid:"ca-so-gentlemans.wearit.gear", catid:"ca-so-gentlemans-guide-wearit-gear"},
        wearshoes:{pageid:"ca-so-gentlemans.wearit.shoes", catid:"ca-so-gentlemans-guide-wearit-shoes"},

        /* jhoes comment */

        hotList:{
        	pageid:"ca-so-gentlemans.wearit.accessories",
        	catid:"ca-so-gentlemans-guide-wearit-accessories"
        },
        hotList_shopall:{
        	pageid:"ca-so-gentlemans.wearit.accessories.shop",
        	catid:"ca-so-gentlemans-guide-wearit-accessories"
        },
        hotList_item1:{   // top left going clockwise around the page
        	pageid:"ca-so-gentlemans.wearit.accessories.perfectmatch.shop",
        	catid:"ca-so-gentlemans-guide-wearit-accessories"
        },
        hotList_item2:{
            pageid:"ca-so-gentlemans.wearit.accessories.shadesofcool.shop",
            catid:"ca-so-gentlemans-guide-wearit-accessories"
        },
        hotList_item3:{
            pageid:"ca-so-gentlemans.wearit.accessories.goingplaces.shop",
            catid:"ca-so-gentlemans-guide-wearit-accessories"
        },
        hotList_item4:{
            pageid:"ca-so-gentlemans.wearit.accessories.alltiedup.shop",
            catid:"ca-so-gentlemans-guide-wearit-accessories"
        },
        hotList_item5:{
            pageid:"ca-so-gentlemans.wearit.accessories.leatherornot.shop",
            catid:"ca-so-gentlemans-guide-wearit-accessories"
        },
        hotList_item6:{
            pageid:"ca-so-gentlemans.wearit.accessories.watchandlearn.shop",
            catid:"ca-so-gentlemans-guide-wearit-accessories"
        }
    },

    shop:{
        classic:{
            classicontheclock:"640483,648721,640466,520919,221171",
            classicnightout:"653826,655465,592345,623108,536709",
            classicweekend:"656189,653458,627266,447715",
            classicgameon:"652479,654142,658505"
        },
        modern:{
            moderneclock:"539861,647367,664764,639550",
            modernnightout:"640193,662917,563794,536681",
            modernweekend:"647376,647379",
            moderngameon:"649172,454732,617755,645550"
        },
        contemp:{
            contempweekend:"643538,649229,648247",
            contempnightout:"654995,659766,608662,595666",
            contempclock:"648909,635026,643530,617241",
            contempgameon:"640215,640713,640717,649582"
        }
    },
    pool:{
        blue:{
          pool:"htw_blueperiod"
        },
        gray:{
          pool:"htw_greymatters"
        },
        rustic:{
          pool:"htw_rusticretreat"
        },
        active:{
          pool:"htw_streetactive"
        },
        street:{
          pool:"htw_suit_jacket"
        },
        tan:{
          pool:"htw_perfecttan"
        },
        quiz:{
            url:webRoot,
            navHighlight:"suitQuiz",
            subnavHighlight:"",
            sidebar:assetsDirectory + "images/suitQuizPool/suitQuizPool_image.gif",
            header:assetsDirectory + "images/suitQuizPool/quiz_title.png"
        },
        /*
        suite:{
            navHighlight:"swimStyle",
            subnavHighlight:"onepiece",
            url:poolRoot + "howto_suit",
            header:assetsDirectory + "images/pool/style_pool_header_one_piece.png",
            shopby:{
                "all":{label:"VIEW ALL", filter:[], selected:true},
                "modern":{label:"MODERN", filter:[
                    {pfeed_shopcategory:{has:"suit_modern"}}
                ]},
                "classic":{label:"CLASSIC", filter:[
                    {pfeed_shopcategory:{has:"suit_classic"}}
                ]},
                "contemporary":{label:"CONTEMPORARY", filter:[
                    {pfeed_shopcategory:{has:"suit_contemporary"}}
                ]}
            }
        },
        */
        gear:{
        /*
            navHighlight:"swimStyle",
            subnavHighlight:"onepiece",
            url:poolRoot + "howto_suit",
            header:assetsDirectory + "images/pool/style_pool_header_one_piece.png",
            */
            //View All Pants Shorts T-Shirts Sneakers

            pools: [
                {
                    label: "View All",
                    pool: "htw_gear"
                },
                {
                    label: "Pants",
                    pool: "htw_pants"
                },
                {
                    label: "Shorts",
                    pool: "htw_shorts"
                },
                {
                    label: "T-Shirts",
                    pool: "htw_tshirts"
                },
                {
                    label: "Sneakers",
                    pool: "htw_sneakers"
                }
            ],


            shopby:{
                "View All":{label:"View All", filter:[], selected:true},
                "Pants":{label:"Pants", filter:[
                    {pfeed_shopcategory:{has:"htw_pants"}}
                ]},
                "Shorts":{label:"Shorts", filter:[
                    {pfeed_shopcategory:{has:"htw_shorts"}}
                ]},
                "T-Shirts":{label:"T-Shirts", filter:[
                    {pfeed_shopcategory:{has:"htw_tshirts"}}
                ]},
                "Sneakers":{label:"Sneakers", filter:[
                    {pfeed_shopcategory:{has:"htw_sneakers"}}
                ]}
            }
        },
        /*View All Casual Shoes Fashion Sneakers Boots Dress Shoes Laceups Oxford Slipon Loafers*/
        shoes:{

            pools: [
                {
                    label: "View All",
                    pool: "htw_shoe_all"
                },
                {
                    label: "Casual Shoes",
                    pool: "casual_shoes"
                },
                {
                    label: "Fashion Sneakers",
                    pool: "fashion_sneakers"
                },
                {
                    label: "Boots",
                    pool: "boots"
                },
                {
                    label: "Dress Shoes",
                    pool: "dress_shoes"
                },
                {
                    label: "Laceups Oxford",
                    pool: "laceups_oxfords"
                },
                {
                    label: "Slipon Loafers",
                    pool: "slipon_loafers"
                }
            ],
        /*
            navHighlight:"swimStyle",
            subnavHighlight:"onepiece",
            url:poolRoot + "howto_suit",
            header:assetsDirectory + "images/pool/style_pool_header_one_piece.png",
            */
            shopby:{
                "View All":{label:"View All", filter:[], selected:true},
                "Casual Shoes":{label:"Casual Shoes", filter:[
                    {pfeed_shopcategory:{has:"casual_shoes"}}
                ]},
                "Fashion Sneakers":{label:"Fashion Sneakers", filter:[
                    {pfeed_shopcategory:{has:"fashion_sneakers"}}
                ]},
                "Boots":{label:"Boots", filter:[
                    {pfeed_shopcategory:{has:"boots"}}
                ]},
                "Dress Shoes":{label:"Dress Shoes", filter:[
                    {pfeed_shopcategory:{has:"dress_shoes"}}
                ]},
                "Laceups Oxford":{label:"Laceups Oxford", filter:[
                    {pfeed_shopcategory:{has:"laceups_oxfords"}}
                ]},
                "Slipon Loafers":{label:"Slipon Loafers", filter:[
                    {pfeed_shopcategory:{has:"slipon_loafers"}}
                ]}
            }
        },

        shoessummer:{

            pools: [
                {
                    label: "View All",
                    pool: "htw_shoe_all"
                },
                {
                    label: "Sandals and Flip Flops",
                    pool: "sandals_flipflops"
                },
                {
                    label: "Boat Shoes",
                    pool: "boat_shoes"
                }
            ],
        /*
            navHighlight:"swimStyle",
            subnavHighlight:"onepiece",
            url:poolRoot + "howto_suit",
            header:assetsDirectory + "images/pool/style_pool_header_one_piece.png",
            */
            shopby:{
                "View All":{label:"View All", filter:[], selected:true},
                "Casual Shoes":{label:"Casual Shoes", filter:[
                    {pfeed_shopcategory:{has:"casual_shoes"}}
                ]},
                "Fashion Sneakers":{label:"Fashion Sneakers", filter:[
                    {pfeed_shopcategory:{has:"fashion_sneakers"}}
                ]},
                "Boots":{label:"Boots", filter:[
                    {pfeed_shopcategory:{has:"boots"}}
                ]},
                "Dress Shoes":{label:"Dress Shoes", filter:[
                    {pfeed_shopcategory:{has:"dress_shoes"}}
                ]},
                "Laceups Oxford":{label:"Laceups Oxford", filter:[
                    {pfeed_shopcategory:{has:"laceups_oxfords"}}
                ]},
                "Slipon Loafers":{label:"Slipon Loafers", filter:[
                    {pfeed_shopcategory:{has:"slipon_loafers"}}
                ]}
            }
        },

        pants:{
            /*
            navHighlight:"swimStyle",
            subnavHighlight:"onepiece",
            url:poolRoot + "howto_pants",
            header:assetsDirectory + "images/pool/style_pool_header_one_piece.png",
            */
            pools: [
                {
                    label: "View All",
                    pool: "htw_jeanpant_all"
                },
                {
                    label: "Jeans",
                    pool: "htw_jean"
                },
                {
                    label: "Pants",
                    pool: "htw_pant"
                }
            ],

            shopby:{
                "View All":{label:"View All", filter:[], selected:true},
                "Jeans":{label:"Jeans", filter:[
                    {pfeed_shopcategory:{has:"htw_jean"}}
                ]},
                "Pants":{label:"Pants", filter:[
                    {pfeed_shopcategory:{has:"htw_pant"}}
                ]}
            }
        }
    }



};


/*  *********************************************************************  */
/*  *********************************************************************  */
/*  *********************************************************************  */


SiteConfig.hotspots = {
    blue : [
        {
            "x":"340",
            "y":"155",
            "openDirection":"southEast",
            "title":"INTO THE BLUE",
            "description":"TAKE A DEEP DIVE INTO SMART LAYERS &#38; CRISP KHAKIS FOR EASY POLISH.",
            "productId":"1606336,1656264,1476702",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"640",
            "y":"95",
            "openDirection":"southWest",
            "title":"the new navy",
            "description":"a rugged bomber meets sleek jeans—feeling blue never looked so stylish.",
            "productId":"1719710,1719410,1606829",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        }
    ],
    blueprod : [
        {
            "x":"225",
            "y":"464",
            "openDirection":"northEast",
            "title":"strong suit",
            "description":"a tailored jacket<br>instantly upgrades<br>your man-about-town<br>look.",
            "productId":"1592789,1132938",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"372",
            "y":"256",
            "openDirection":"southWest",
            "title":"how timely",
            "description":"arm yourself with a bold timepiece that adds a dose of edge.",
            "productId":"1570077,1532334,1107725",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },

        {
            "x":"496",
            "y":"297",
            "openDirection":"southWest",
            "title":"ahoy sailor",
            "description":"wave hello to this nautical-themed necessity.",
            "productId":"1506382",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },

        {
            "x":"725",
            "y":"225",
            "openDirection":"southWest",
            "title":"get framed",
            "description":"grab some shade with a look-at-me pair.",
            "productId":"1611675",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"114",
            "y":"533",
            "openDirection":"northEast",
            "title":"walk this way",
            "description":"a classic style to step<br>into now & later.",
            "productId":"1570077,1532334,1107725",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"494",
            "y":"582",
            "openDirection":"northEast",
            "title":"check mate",
            "description":"dynamic prints for a surefire style win. your move.",
            "productId":"1593636,1639576",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },

        {
            "x":"644",
            "y":"582",
            "openDirection":"northWest",
            "title":"hit the blue note",
            "description":"classic. essential. pitch-perfect denim is here.",
            "productId":"1666176",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        }
    ],
    gray : [
        {
            "x":"270",
            "y":"109",
            "openDirection":"southEast",
            "title":"the new modern",
            "description":"swear off traditional accents for neat patterns & versatile knits.",
            "productId":"1570077,1636949",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"615",
            "y":"82",
            "openDirection":"southWest",
            "title":"well in-vested",
            "description":"boost your sartorial cred with crisp three-piece suiting.",
            "productId":"1574182,1649798,1719977",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        }
    ],
    grayprod : [
        {
            "x":"237",
            "y":"487",
            "openDirection":"northEast",
            "title":"mad for plaid",
            "description":"master sophisticated suiting with this time-honored pattern.",
            "productId":"1719707",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"368",
            "y":"274",
            "openDirection":"southWest",
            "title":"basic bets",
            "description":"define understated style with simple leather accessories.",
            "productId":"1631051,1631040",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"585",
            "y":"292",
            "openDirection":"southWest",
            "title":"buttoned up",
            "description":"pick from a bevy of solids & patterns in a modern silhouette.",
            "productId":"1592788,1592797",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"256",
            "y":"582",
            "openDirection":"northEast",
            "title":"mixed metals",
            "description":"fine-tune smart tailoring with polished finishing touches.",
            "productId":"1418632,1393658",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"519",
            "y":"582",
            "openDirection":"northEast",
            "title":"knit value",
            "description":"cozy up to sweater weather in a<br>shawl-collar style.",
            "productId":"1570077,1532334,1107725",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"648",
            "y":"583",
            "openDirection":"northWest",
            "title":"carry on",
            "description":"conquer rush-hour commutes with a travel-friendly messenger.",
            "productId":"1570077,1532334,1107725",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        }
    ],
    rustic : [
        {
            "x":"329",
            "y":"108",
            "openDirection":"southEast",
            "title":"rugged rascal",
            "description":"hunt down an outdoorsy look with a bold puffer vest offset by a timeless cable-knit sweater.",
            "productId":"1719932,1693846,1693891",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"600",
            "y":"100",
            "openDirection":"southWest",
            "title":"mixed-media mogul",
            "description":"Broadcast your style with classic quilting, faithful fabrics and autumnal hues.",
            "productId":"1719930,1693842,449783,1719931",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        }
    ],
    rusticprod : [
        {
            "x":"275",
            "y":"473",
            "openDirection":"northEast",
            "title":"cold conquerer",
            "description":"no storm can stop you with a resilient puffer jacket on your side.",
            "productId":"1530134",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"435",
            "y":"468",
            "openDirection":"northWest",
            "title":"basic training",
            "description":"designed in this season’s must-have colors, these simple pants have a solid sense of style.",
            "productId":"1719501,586004,1719508",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"570",
            "y":"267",
            "openDirection":"southWest",
            "title":"mighty messenger",
            "description":"tote like a man with masculine messenger bag.",
            "productId":"1665048",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"282",
            "y":"547",
            "openDirection":"northEast",
            "title":"loyal leather",
            "description":"stand out when you step out in classic leather boots.",
            "productId":"1622659,1559095",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"593",
            "y":"588",
            "openDirection":"northWest",
            "title":"rad in plaid",
            "description":"add a dose of vintage charm to your layered look with classic plaid.",
            "productId":"1622659,1559095",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        }
    ],
    street : [
        {
            "x":"348",
            "y":"152",
            "openDirection":"southEast",
            "title":"no sweat",
            "description":"chill out in a relaxed look with layered sweats.",
            "productId":"1622659,1559095",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"581",
            "y":"37",
            "openDirection":"southWest",
            "title":"urban legend",
            "description":"it’s more than a myth: the jogger pant is about to make fashion history. ",
            "productId":"1668393",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        }
    ],
    streetprod : [
        {
            "x":"253",
            "y":"337",
            "openDirection":"southEast",
            "title":"line drive",
            "description":"live in the fast lane with striped gym pants—effortless, casual, cool.",
            "productId":"1622659,1559095",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"510",
            "y":"153",
            "openDirection":"southEast",
            "title":"capped off",
            "description":"underground style lands on top with the bold look of a snapback hat.",
            "productId":"1570077,1532334,1107725",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"260",
            "y":"582",
            "openDirection":"northEast",
            "title":"bag a winner",
            "description":"get pumped up for a gym-bag trade-in: the backpack.",
            "productId":"1650094",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"349",
            "y":"577",
            "openDirection":"northWest",
            "title":"the jacked-up jacket",
            "description":"quilting is big, but it’s all about the edge: nylon or leather trim is in.",
            "productId":"1622659,1559095",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"701",
            "y":"515",
            "openDirection":"northWest",
            "title":"jonesing for joggers",
            "description":"the jogger pant is<br>the latest trend for<br>men&#8212;active & attractive.",
            "productId":"1622659,1559095",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        }
    ],
    tanprod : [
        {
            "x":"214",
            "y":"584",
            "openDirection":"northEast",
            "title":"saddle up",
            "description":"the gentleman’s carryall-done in a sleek, polished silhouette.",
            "productId":"1721595,1721594",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"405",
            "y":"189",
            "openDirection":"southWest",
            "title":"terra firma",
            "description":"from sand to soil, terrain meets its tonal match with shoes in shades of tan. ",
            "productId":"1570077,1532334,1107725",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"390",
            "y":"382",
            "openDirection":"northWest",
            "title":"brass band",
            "description":"a strapping leather belt is instrumental in the completion of your ensemble.",
            "productId":"1631209",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"342",
            "y":"582",
            "openDirection":"northWest",
            "title":"good seeing you, chap",
            "description":"See how the world looks in a pair of swank shades.",
            "productId":"1611953",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"675",
            "y":"583",
            "openDirection":"northWest",
            "title":"it makes scents",
            "description":"What every memorable look requires: a dose of spice.",
            "productId":"1622659,1559095",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        }
    ],




    boldbuds : [
        {
            "x":"307",
            "y":"90",
            "openDirection":"southEast",
            "title":"From caf&#201; to corner office-add or subtract suit separates as the occasion calls.",
            "productId":"1622659,1559095",
            "pageid":"ca-so-gentlemans.wearit.slide4",
             "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"470",
            "y":"355",
            "openDirection":"southWest",
            "title":"as the weather cools, the floral trend is staying in full bloom.",
            "productId":"1570077,1532334,1107725",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        }
    ],
    suitsMK : [
        {
            "x":"265",
            "y":"160",
            "openDirection":"southEast",
            "title":"Play up pattern with a plaid dress shirt;pair with polished accents.",
            "productId":"1558820",
            "pageid":"ca-so-gentlemans.wearit.slide3",
            "catid":"ca-so-gentlemans-wearit-slide3",
            "fbid":"ca-so-gentlemans.wearit.slide3.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide3.hotspot1.twitter"
        },
        {
            "x":"610",
            "y":"75",
            "openDirection":"southWest",
            "title":"for a new take on tradition; enter the windowpane suit-mixed with prints.",
            "productId":"1635064,1623857",
            "pageid":"ca-so-gentlemans.wearit.slide3",
            "catid":"ca-so-gentlemans-wearit-slide3",
            "fbid":"ca-so-gentlemans.wearit.slide3.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide3.hotspot2.twitter"
        }
    ],
    suitsCK : [
        {
            "x":"305",
            "y":"315",
            "openDirection":"southEast",
            "title":"Timelessness is the look of today with a sleek suit in clean, classic lines.",
            "productId":"827045,1623854",
             "pageid":"ca-so-gentlemans.wearit.slide2",
             "catid":"ca-so-gentlemans-guide-wearit-slide2",
            "fbid":"ca-so-gentlemans.wearit.slide2.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide2.hotspot1.twitter"
        },
        {
            "x":"500",
            "y":"450",
            "openDirection":"northWest",
            "title":"Smooth Moves; Non iron, slim fit, check print-all low-maintenance modern musts.",
            "productId":"1591123,1653513",
             "pageid":"ca-so-gentlemans.wearit.slide2",
             "catid":"ca-so-gentlemans-guide-wearit-slide2",
            "fbid":"ca-so-gentlemans.wearit.slide2.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide2.hotspot2.twitter"
        }
    ],
    suitsLauren : [
        {
            "x":"480",
            "y":"145",
            "openDirection":"southWest",
            "title":"Place your bet on the trifecta: Three-piece suiting in a debonair fabric.",
            "productId":"1622129",
            "pageid":"ca-so-gentlemans.wearit.slide1",
            "catid":"ca-so-gentlemans-guide-wearit-slide1",
            "fbid":"ca-so-gentlemans.wearit.slide1.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide1.hotspot1.twitter"
        }
    ],
    howtoSuit_lp : [
        {
            "x":"168",
            "y":"332",
            "openDirection":"southEast",
            "title":"<b>WHITEOUT</b>you’ll polish up nicely in pristine white three-piece suiting.",
            "productId": "652999,653000,653001,653002,1326351,1234341,1213504",
            "pageid":"ca-so-gentlemans.wearit.suitandjacket.whiteout",
            "catid":"ca-so-gentlemans-guide-wearit-suitandjacket",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_02.jpg"
        },
        {
            "x":"640",
            "y":"120",
            "openDirection":"southEast",
            "title":"<b>PLAID LAD</b>take a gentlemanly jaunt in plaid patchwork.",
            "productId":"1285137,1376333,694147,1482809",
            "pageid": "ca-so-gentlemans.wearit.suitandjacket.plaidlad",
            "catid":"ca-so-gentlemans-guide-wearit-suitandjacket",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_02.jpg"
        },
        {
            "x":"685",
            "y":"95",
            "openDirection":"southWest",
            "title":"<b>MR. DEBONAIRE</b>a dapper bow tie finishes a suit with strapping style.",
            "productId":"786303,1089623,786301,786302,1053905,769642,1449319",
            "pageid": "ca-so-gentlemans.wearit.suitandjacket.mrdebonaire",
            "catid":"ca-so-gentlemans-guide-wearit-suitandjacket",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_02.jpg"
        }
    ],

    howtoSuit : [
        {
            "x":"320",
            "y":"90",
            "openDirection":"southEast",
             "title":"<b>FINE & DANDY</b> polish off a slim-fit suit with pitch-perfect accessories.",
            "productId": "801115,801113,801114,598475,1290266,553037,1330934,682216",
            "pageid":"ca-so-gentlemans.wearit.suitandjacket.finedandy",
            "catid":"ca-so-gentlemans-guide-wearit-suitandjacket",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_03.jpg"
        },
        {
            "x":"395",
            "y":"145",
            "openDirection":"southWest",
            "title":"<b>PRINCE OF PLAID</b>pair a plaid blazer with dark pants for a modern twist.",
            "productId":"1285139,848711,1063211",
            "pageid": "ca-so-gentlemans.wearit.suitandjacket.princeplaid",
            "catid":"ca-so-gentlemans-guide-wearit-suitandjacket",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_03.jpg"
        },
        {
            "x":"670",
            "y":"105",
            "openDirection":"southWest",
            "title":"<b>SHIMMER DOWN</b>conquer day-to-night and beyond in new metallic suiting.",
            "productId":"1285080,520910,1449296,682216",
            "pageid": "ca-so-gentlemans.wearit.suitandjacket.shimmerdown",
            "catid":"ca-so-gentlemans-guide-wearit-suitandjacket",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_03.jpg"
        }
    ],

    howtoSweater_lp : [
        {
            "x":"243",
            "y":"80",
            "openDirection":"southEast",
            "title":"<b>EXTRA SEASONING</b> add this fall's color trend to your mix",
            "productId": "1045225",
            "pageid":"ca-so-gentlemans.wearit.sweater.extraseasoning",
            "catid":"ca-so-gentlemans-guide-wearit-sweater"
        },
        {
            "x":"558",
            "y":"123",
            "openDirection":"southEast",
            "title":"<b>ALL SHAWL</b>play up a shawl collar by layering a plaid shirt underneath.",
            "productId": "1064169,1093824,961488",
            "pageid":"ca-so-gentlemans.wearit.sweater.allshawl",
            "catid":"ca-so-gentlemans-guide-wearit-sweater"
        },
        {
            "x":"695",
            "y":"85",
            "openDirection":"southWest",
            "title":"<b>DETAIL ORIENTED</b> elbow patches and modern knits shift your focus",
            "productId":"1058057",
            "pageid":"ca-so-gentlemans.wearit.sweater.detailoriented",
            "catid":"ca-so-gentlemans-guide-wearit-sweater"
        }
    ],

    howtoSweater : [
        {
            "x":"162",
            "y":"242",
            "openDirection":"southWest",
            "title":"<b>GET TONED</b> keep your look together with variations of the same color",
            "productId":"1007450",
            "pageid":"ca-so-gentlemans.wearit.sweater.gettoned",
            "catid":"ca-so-gentlemans-guide-wearit-sweater"
        },
        {
            "x":"609",
            "y":"135",
            "openDirection":"southWest",
            "title":"<b>COLOR ROCKING</b> a two-tone seater amps up any pairing",
            "productId":"1007450",
            "pageid":"ca-so-gentlemans.wearit.sweater.colorrocking",
            "catid":"ca-so-gentlemans-guide-wearit-sweater"
        }
    ],


    howtoCasualShirt_lp : [
        {
            "x":"170",
            "y":"350",
            "openDirection":"southEast",
            "title":"<b>STRIPED TO <br />THE MAX </b>make a bee-line for this season’s standout style: the allover print.",
            "productId": "1211531,1163913,1489638,1319346",
            "pageid":"ca-so-gentlemans.wearit.casualshirt.stripedmax",
            "catid":"ca-so-gentlemans-guide-wearit-casualshirt",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_04.jpg"
        },
       /* {
            "x":"351",
            "y":"129",
            "openDirection":"southEast",
            "title":"<b>ONE TOUGH OMBRE</b> the print of the season is your new go to",
            "productId": "932610,1004544",
            "pageid":"ca-so-gentlemans.wearit.casualshirt.onetouchombre",
            "catid":"ca-so-gentlemans-guide-wearit-casualshirt"
        },*/
        {
            "x":"398",
            "y":"356",
            "openDirection":"southWest",
            "title":"<b>LAYER PLAYER</b>break the rules by layering patterns, fabrics & pops of color.",
            "productId":"1345684,1272315,1272401",
            "pageid": "ca-so-gentlemans.wearit.casualshirt.layerplayer",
            "catid":"ca-so-gentlemans-guide-wearit-casualshirt",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_04.jpg"
        },
        {
            "x":"680",
            "y":"90",
            "openDirection":"southWest",
            "title":"<b>PREPPY THAT POPS</b>step up your casual style with a smashing bow tie.",
            "productId":"1266842,1117307,1219834",
            "pageid": "ca-so-gentlemans.wearit.casualshirt.preppypops",
            "catid":"ca-so-gentlemans-guide-wearit-suitandjacket",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_04.jpg"

        }
    ],

    howtoCasualShirt : [
        {
            "x":"345",
            "y":"105",
            "openDirection":"southEast",
            "title":"<b>WALK THE LINE</b>thin lines and slim fits create a slick look.",
            "productId": "1283525,1324702,1439187",
            "pageid":"ca-so-gentlemans.wearit.casualshirt.walktheline",
            "catid":"ca-so-gentlemans-guide-wearit-casualshirt",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_05.jpg"
        },
        {
            "x":"608",
            "y":"130",
            "openDirection":"southEast",
            "title":"<b>KINDA BLUE</b>hit the right style notes with a blue button-down and blue jeans.",
            "productId":"1308551,1471165,1083481",
            "pageid": "ca-so-gentlemans.wearit.casualshirt.kindablue",
            "catid":"ca-so-gentlemans-guide-wearit-casualshirt",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_05.jpg"
        },
        {
            "x":"685",
            "y":"85",
            "openDirection":"southWest",
            "title":"<b>OPEN BOOK</b>put yourself out there with an unbuttoned button-front.",
            "productId":"1471160,1326477,307269",
            "pageid": "ca-so-gentlemans.wearit.casualshirt.openbook",
            "catid":"ca-so-gentlemans-guide-wearit-casualshirt",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_05.jpg"
        }
    ],
    howtoJeansPants : [
        {
            "x":"176",
            "y":"370",
            "openDirection":"southEast",
            "title":"<b>DENIM DONE RIGHT</b>offset classic dark-rinse jeans with wear-forever basics.",
            "productId": "1163913,1246671,632307",
            "pageid":"ca-so-gentlemans.wearit.jeanspants.denimdoneright",
            "catid":"ca-so-gentlemans-guide-wearit-jeanspants",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_06.jpg"
        },
        {
            "x":"353",
            "y":"370",
            "openDirection":"southEast",
            "title":"<b>THE MULTITASKER</b>go from sand to surf with the versatility of hybrid shorts.",
            "productId":"1249945,1249959,1269601",
            "pageid": "ca-so-gentlemans.wearit.jeanspants.multitasker",
            "catid":"ca-so-gentlemans-guide-wearit-jeanspants",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_06.jpg"
        },
        {
            "x":"500",
            "y":"375",
            "openDirection":"southEast",
            "title":"<b>IN THE GREEN</b>punch up your palette with a dose of vibrant-colored denim.",
            "productId":"1231493,1272401,465901",
            "pageid": "ca-so-gentlemans.wearit.jeanspants.inthegreen",
            "catid":"ca-so-gentlemans-guide-wearit-jeanspants",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_06.jpg"
        },
        {
            "x":"542",
            "y":"375",
            "openDirection":"southWest",
            "title":"<b>SHORT STORY</b>paint a vivid picture with richly hued shorts.",
            "productId": "1224728,1329173,1285453",
            "pageid":"ca-so-gentlemans.wearit.jeanspants.shortstory",
            "catid":"ca-so-gentlemans-guide-wearit-jeanspants",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_06.jpg"
        },
        {
            "x":"710",
            "y":"375",
            "openDirection":"southWest",
            "title":"<b>CUFF STUFF</b>reveal a hint of contrast for off-the-cuff casual cool.",
            "productId":"753134,1266599,1181860",
            "pageid": "ca-so-gentlemans.wearit.jeanspants.cuffstuff",
            "catid":"ca-so-gentlemans-guide-wearit-jeanspants",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_06.jpg"
        }
    ],

    howtoPolo_lp : [
        {
            "x":"210",
            "y":"330",
            "openDirection":"southEast",
            "title":"<b>TIP OFF</b>a tipped polo adds a dash of dapper to everyday wear.",
            "productId": "1318172,1219834,1260164",
            "pageid":"ca-so-gentlemans.wearit.polo.tipoff",
            "catid":"ca-so-gentlemans-guide-wearit-polo",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_08.jpg"
        },
        {
            "x":"395",
            "y":"324",
            "openDirection":"southWest",
            "title":"<b>NO WALLFLOWERS</b>stand out from the norm with a bright polo and forward floral shorts.",
            "productId": "1234162,1234163,1332638",
            "pageid":"ca-so-gentlemans.wearit.polo.nowallflowers",
            "catid":"ca-so-gentlemans-guide-wearit-polo",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_08.jpg"
        },
        {
            "x":"685",
            "y":"95",
            "openDirection":"southWest",
            "title":"<b>STRIPE IT BIG</b>a style standout this season: a boldly striped polo.",
            "productId": "1270904,1147490,1071546",
            "pageid":"ca-so-gentlemans.wearit.polo.stripeitbig",
            "catid":"ca-so-gentlemans-guide-wearit-polo",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_08.jpg"
        }
    ],

    howtoPolo : [
        {
            "x":"325",
            "y":"114",
            "openDirection":"southEast",
            "title":"<b>DECKED OUT</b>rig up a nautical look with sea-inspired shades & shoes.",
            "productId":"1266819,1324702,1266836",
            "pageid": "ca-so-gentlemans.wearit.polo.deckedout",
            "catid":"ca-so-gentlemans-guide-wearit-polo",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_09.jpg"
        },
        {
            "x":"360",
            "y":"150",
            "openDirection":"southWest",
            "title":"<b>CROSS THE LINE</b>enter a new world of polo prints with the wide stripe.",
            "productId": "1326529,1394180,1211531",
            "pageid":"ca-so-gentlemans.wearit.polo.crosstheline",
            "catid":"ca-so-gentlemans-guide-wearit-polo",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_09.jpg"
        },
        {
            "x":"680",
            "y":"95",
            "openDirection":"southWest",
            "title":"<b>GO DEEP</b>a rich blue shade is a smart choice for a classic look.",
            "productId": "1260147,1247079,1377448",
            "pageid":"ca-so-gentlemans.wearit.polo.godeep",
            "catid":"ca-so-gentlemans-guide-wearit-polo",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_09.jpg"
        }
    ],

    howtoGear : [
        {
            "x":"185",
            "y":"145",
            "openDirection":"southEast",
            "title":"<b>POWER PLAY</b>show off your super-strength in a superhero tee, sporty shorts and sneakers.",
            "productId": "1038232,785557,488271",
            "pageid":"ca-so-gentlemans.wearit.gear.powerplay",
            "catid":"ca-so-gentlemans-guide-wearit-gear",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_07.jpg"
        },
        {
            "x":"432",
            "y":"160",
            "openDirection":"southEast",
            "title":"<b>ALWAYS ON COURSE</b>contrast the green with standout golf gear.",
            "productId": "1311337,804339,1055703",
            "pageid":"ca-so-gentlemans.wearit.gear.alwaysoncourse",
            "catid":"ca-so-gentlemans-guide-wearit-gear",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_07.jpg"
        },
        {
            "x":"585",
            "y":"160",
            "openDirection":"southEast",
            "title":"<b>SOCCER SMARTS</b>shock them on the pitch with a white-hot ensemble and lightning-fast moves.",
            "productId":"1382442,1042999,1056489",
            "pageid": "ca-so-gentlemans.wearit.gear.soccersmarts",
            "catid":"ca-so-gentlemans-guide-wearit-gear",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_07.jpg"
        },
        {
            "x":"690",
            "y":"165",
            "openDirection":"southWest",
            "title":"<b>RUN WITH IT</b>tone up your tank assortment with cool color.",
            "productId":"1382488,954016,1400424,1466018",
            "pageid": "ca-so-gentlemans.wearit.gear.runwithit",
            "catid":"ca-so-gentlemans-guide-wearit-gear",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_07.jpg"
        }
    ],

    "fitsize":[
        {
            "x":"210",
            "y":"130",
            "openDirection":"northEast",
            "title":"<b>OVER ARM:</b> With arms at your sides, have someone measure around the broadest part of your shoulders and upper arms."
        },
        {
            "x":"168",
            "y":"161",
            "openDirection":"southEast",
            "title":"<b>CHEST:</b> With arms at your sides, measure around your upper body, under your armpits and over the fullest part of your chest and shoulder blades."
        },
        {
            "x":"164",
            "y":"258",
            "openDirection":"southEast",
            "title":"<b>WAIST:</B> Bend to one side to find the natural crease of your waist. Measure at this point, keeping the tape comfortably loose around your waist."
        },
        {
            "x":"163",
            "y":"380",
            "openDirection":"southEast",
            "title":"<b>INSEAM:</b> Measure from the crotch seam to the hem."
        }
    ],

    "fitguideshirt":[
        {
            "x":"199",
            "y":"125",
            "openDirection":"northEast",
            "title":"a small-collar dress shirt is best paired with a slim suit, skinny tie and tie bar."
        },
        {
            "x":"72",
            "y":"217",
            "openDirection":"southEast",
            "title":"Higher armholes and a nipped-in waist create a sleek look."
        },
        /*
        {
            "x":"184",
            "y":"283",
            "openDirection":"southEast",
            "title":"Placket should lay flat. if it puckers you need one size larger."
        },
        */
        {
            "x":"673",
            "y":"120",
            "openDirection":"southWest",
            "title":"If there’s room for one finger in between your neck and fully buttoned collar, you know it’s the right size."
        },
        {
            "x":"786",
            "y":"335",
            "openDirection":"northWest",
            "title":"Classic shirts have a fuller cut and look best under suit jackets."
        },
        {
            "x":"554",
            "y":"445",
            "openDirection":"northEast",
            "title":"Whether you choose barrel or French cuffs, make sure the cuff hits the top of your wrist."
        }
    ]



};