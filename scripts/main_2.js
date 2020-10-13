/********************************************************* DATA VARIABLES ************************************************/
var nodes = [
    {
        "id": "tonys",
        "label": "Iron Man",
        "movies": [
            "av1",
            "av2",
            "av3",
            "ca3",
            "hk1",
            "im1",
            "im2",
            "im3",
            "sm1"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg"
    },
    {
        "id": "stever",
        "label": "Captain America",
        "movies": [
            "av1",
            "av2",
            "av3",
            "ca1",
            "ca2",
            "ca3"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg"
    },
    {
        "id": "bruceb",
        "label": "Hulk",
        "movies": [
            "av1",
            "av2",
            "av3",
            "hk1",
            "im3",
            "th3"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_crd_03.jpg"
    },
    {
        "id": "thor",
        "label": "Thor",
        "movies": [
            "av1",
            "av2",
            "av3",
            "th1",
            "th2",
            "th3",
            "ds1"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg"
    },
    {
        "id": "blackw",
        "label": "Black Widow",
        "movies": [
            "av1",
            "av2",
            "av3",
            "ca2",
            "ca3",
            "im2"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_03.jpg"
    },
    {
        "id": "rhody",
        "label": "War Machine",
        "movies": [
            "av2",
            "av3",
            "ca3",
            "im1",
            "im2",
            "im3"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/042wmr_ons_crd_03.jpg"
    },
    {
        "id": "hawke",
        "label": "Hawkeye",
        "movies": [
            "av1",
            "av2",
            "av3",
            "ca3",
            "th1"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/018hcb_ons_crd_02.jpg"
    },
    {
        "id": "falcon",
        "label": "Falcon",
        "movies": [
            "am1",
            "av2",
            "av3",
            "ca2",
            "ca3"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/014fal_ons_crd_02.jpg"
    },
    {
        "id": "vision",
        "label": "Vision",
        "movies": [
            "av2",
            "av3",
            "ca3"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/013vis_ons_crd_01-1.jpg"
    },
    {
        "id": "wandam",
        "label": "Wanda Maximoff",
        "movies": [
            "av2",
            "av3",
            "ca3"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_crd_02.jpg"
    },
    {
        "id": "heimdall",
        "label": "Heimdall",
        "movies": [
            "av2",
            "th1",
            "th2",
            "th3"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/116hdl_ons_crd_01-1.jpg"
    },
    {
        "id": "nickf",
        "label": "Nick Fury",
        "movies": [
            "av1",
            "av2",
            "ca1",
            "ca2",
            "im1",
            "im2",
            "th1"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/284nfy_ons_crd_01.jpg"
    },
    {
        "id": "loki",
        "label": "Loki",
        "movies": [
            "av1",
            "av3",
            "th1",
            "th2",
            "th3"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/017lok_ons_crd_02.jpg"
    },
    {
        "id": "bucky",
        "label": "Winter Soldier",
        "movies": [
            "av3",
            "bp1",
            "ca1",
            "ca2",
            "ca3"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/015wsb_ons_crd_02.jpg"
    },
    {
        "id": "tchalla",
        "label": "Black Panther",
        "movies": [
            "av3",
            "bp1",
            "ca3"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_ons_crd_02.jpg"
    },
    {
        "id": "peterq",
        "label": "Star-Lord",
        "movies": [
            "av3",
            "gotg1",
            "gotg2"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/021slq_ons_crd_02.jpg"
    },
    {
        "id": "gamora",
        "label": "Gamora",
        "movies": [
            "av3",
            "gotg1",
            "gotg2"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/022gam_ons_crd_01-1.jpg"
    },
    {
        "id": "drax",
        "label": "Drax",
        "movies": [
            "av3",
            "gotg1",
            "gotg2"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/025drx_ons_crd_02.jpg"
    },
    {
        "id": "rocket",
        "label": "Rocket",
        "movies": [
            "av3",
            "gotg1",
            "gotg2"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/023rra_ons_crd_03.jpg"
    },
    {
        "id": "groota",
        "label": "Groot",
        "movies": [
            "av3",
            "gotg1",
            "gotg2"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/024grt_ons_crd_01-1.jpg"
    },
    {
        "id": "nebula",
        "label": "Nebula",
        "movies": [
            "av3",
            "gotg1",
            "gotg2"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/043neb_ons_crd_03.jpg"
    },
    {
        "id": "mantis",
        "label": "Mantis",
        "movies": [
            "av3",
            "gotg2"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/045mts_ons_crd_02.jpg"
    },
    {
        "id": "scottl",
        "label": "Ant-Man",
        "movies": [
            "am1",
            "av3",
            "ca3"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/010ant_ons_crd_04.jpg"
    },
    {
        "id": "stephens",
        "label": "Doctor Strange",
        "movies": [
            "av3",
            "ds1",
            "th3"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_ons_crd_02.jpg"
    },
    {
        "id": "peterp",
        "label": "Spider-Man",
        "movies": [
            "av3",
            "ca3",
            "sm1"
        ],
        "type": "b",
        "level": 1,
        "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg"
    },
    {
        "id": "im1",
        "level": 2,
        "label": "Iron Man",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/im1.png",
        "phase": "1"
    },
    {
        "id": "hk1",
        "level": 2,
        "label": "The Incredible Hulk",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/hk1.png",
        "phase": "1"
    },
    {
        "id": "im2",
        "level": 2,
        "label": "Iron Man 2",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/im2.png",
        "phase": "1"
    },
    {
        "id": "th1",
        "level": 2,
        "label": "Thor",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/th1.png",
        "phase": "1"
    },
    {
        "id": "ca1",
        "level": 2,
        "label": "Captain America: The First Avenger",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/ca1.png",
        "phase": "1"
    },
    {
        "id": "ca2",
        "level": 2,
        "label": "Captain America: The Winter Soldier",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/ca2.png",
        "phase": "2"
    },
    {
        "id": "av1",
        "level": 2,
        "label": "Marvel's The Avengers",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/av1.png",
        "phase": "1"
    },

    {
        "id": "th3",
        "level": 2,
        "label": "Thor: Ragnarok",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/th3.png",
        "phase": "3"
    },
    {
        "id": "th2",
        "level": 2,
        "label": "Thor: The Dark World",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/th2.png",
        "phase": "2"
    },
    {
        "id": "gotg1",
        "level": 2,
        "label": "Guardians Of The Galaxy",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/gotg1.png",
        "phase": "2"
    },
    {
        "id": "av2",
        "level": 2,
        "label": "Avengers: Age Of Ultron",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/av2.png",
        "phase": "2"
    },

    {
        "id": "ca3",
        "level": 2,
        "label": "Captain America: Civil War",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/ca3.png",
        "phase": "3"
    },
    {
        "id": "im3",
        "level": 2,
        "label": "Iron Man 3",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/im3.png",
        "phase": "2"
    },
    {
        "id": "ds1",
        "level": 2,
        "label": "Doctor Strange",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/ds1.png",
        "phase": "3"
    },
    {
        "id": "gotg2",
        "level": 2,
        "label": "Guardians Of The Galaxy Vol. 2",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/gotg2.png",
        "phase": "3"
    },

    {
        "id": "am1",
        "level": 2,
        "label": "Ant-Man",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/am1.png",
        "phase": "2"
    },
    {
        "id": "bp1",
        "level": 2,
        "label": "Black Panther",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/bp1.png",
        "phase": "3"
    },
    {
        "id": "av3",
        "level": 2,
        "label": "Avengers: Infinity War",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/av3.png",
        "phase": "3"
    },
    {
        "id": "sm1",
        "level": 2,
        "label": "Spider-Man: Homecoming",
        "type": "a",
        "img": "https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/images_doc/marvel/nodeIcons/sm1.png",
        "phase": "3"
    }

];

var links = [
    {
        "source": "av1",
        "target": "tonys",
        "color": "#FA000B"
    },
    {
        "source": "av2",
        "target": "tonys",
        "color": "#9CDDC8"
    },
    {
        "source": "av3",
        "target": "tonys",
        "color": "#BE5ADF"
    },
    {
        "source": "ca3",
        "target": "tonys",
        "color": "#BE5ADF"
    },
    {
        "source": "hk1",
        "target": "tonys",
        "color": "#FA000B"
    },
    {
        "source": "av3",
        "target": "hawke",
        "color": "#BE5ADF"
    },
    {
        "source": "im1",
        "target": "tonys",
        "color": "#FA000B"
    },
    {
        "source": "im2",
        "target": "tonys",
        "color": "#FA000B"
    },
    {
        "source": "im3",
        "target": "tonys",
        "color": "#9CDDC8"
    },
    {
        "source": "sm1",
        "target": "tonys",
        "color": "#BE5ADF"
    },
    {
        "source": "av1",
        "target": "stever",
        "color": "#FA000B"
    },
    {
        "source": "av2",
        "target": "stever",
        "color": "#9CDDC8"
    },
    {
        "source": "av3",
        "target": "stever",
        "color": "#BE5ADF"
    },
    {
        "source": "ca1",
        "target": "stever",
        "color": "#FA000B"
    },
    {
        "source": "ca2",
        "target": "stever",
        "color": "#9CDDC8"
    },
    {
        "source": "ca3",
        "target": "stever",
        "color": "#BE5ADF"
    },
    {
        "source": "av1",
        "target": "bruceb",
        "color": "#FA000B"
    },
    {
        "source": "av2",
        "target": "bruceb",
        "color": "#9CDDC8"
    },
    {
        "source": "av3",
        "target": "bruceb",
        "color": "#BE5ADF"
    },
    {
        "source": "hk1",
        "target": "bruceb",
        "color": "#FA000B"
    },
    {
        "source": "im3",
        "target": "bruceb",
        "color": "#9CDDC8"
    },
    {
        "source": "th3",
        "target": "bruceb",
        "color": "#BE5ADF"
    },
    {
        "source": "av1",
        "target": "thor",
        "color": "#FA000B"
    },
    {
        "source": "av2",
        "target": "thor",
        "color": "#9CDDC8"
    },
    {
        "source": "av3",
        "target": "thor",
        "color": "#BE5ADF"
    },
    {
        "source": "th1",
        "target": "thor",
        "color": "#FA000B"
    },
    {
        "source": "th2",
        "target": "thor",
        "color": "#9CDDC8"
    },
    {
        "source": "th3",
        "target": "thor",
        "color": "#BE5ADF"
    },
    {
        "source": "ds1",
        "target": "thor",
        "color": "#BE5ADF"
    },
    {
        "source": "av1",
        "target": "blackw",
        "color": "#FA000B"
    },
    {
        "source": "av2",
        "target": "blackw",
        "color": "#9CDDC8"
    },
    {
        "source": "av3",
        "target": "blackw",
        "color": "#BE5ADF"
    },
    {
        "source": "ca2",
        "target": "blackw",
        "color": "#9CDDC8"
    },
    {
        "source": "ca3",
        "target": "blackw",
        "color": "#BE5ADF"
    },
    {
        "source": "im2",
        "target": "blackw",
        "color": "#FA000B"
    },
    {
        "source": "av2",
        "target": "rhody",
        "color": "#9CDDC8"
    },
    {
        "source": "av3",
        "target": "rhody",
        "color": "#BE5ADF"
    },
    {
        "source": "ca3",
        "target": "rhody",
        "color": "#BE5ADF"
    },
    {
        "source": "im1",
        "target": "rhody",
        "color": "#FA000B"
    },
    {
        "source": "im2",
        "target": "rhody",
        "color": "#FA000B"
    },
    {
        "source": "im3",
        "target": "rhody",
        "color": "#9CDDC8"
    },
    {
        "source": "av1",
        "target": "hawke",
        "color": "#FA000B"
    },
    {
        "source": "av2",
        "target": "hawke",
        "color": "#9CDDC8"
    },
    {
        "source": "ca3",
        "target": "hawke",
        "color": "#BE5ADF"
    },
    {
        "source": "th1",
        "target": "hawke",
        "color": "#FA000B"
    },
    {
        "source": "av1",
        "target": "nickf",
        "color": "#FA000B"
    },
    {
        "source": "av2",
        "target": "nickf",
        "color": "#9CDDC8"
    },
    {
        "source": "ca1",
        "target": "nickf",
        "color": "#FA000B"
    },
    {
        "source": "ca2",
        "target": "nickf",
        "color": "#9CDDC8"
    },
    {
        "source": "im1",
        "target": "nickf",
        "color": "#FA000B"
    },
    {
        "source": "im2",
        "target": "nickf",
        "color": "#FA000B"
    },
    {
        "source": "th1",
        "target": "nickf",
        "color": "#FA000B"
    },
    {
        "source": "am1",
        "target": "falcon",
        "color": "#9CDDC8"
    },
    {
        "source": "av2",
        "target": "falcon",
        "color": "#9CDDC8"
    },
    {
        "source": "av3",
        "target": "falcon",
        "color": "#BE5ADF"
    },
    {
        "source": "ca2",
        "target": "falcon",
        "color": "#9CDDC8"
    },
    {
        "source": "ca3",
        "target": "falcon",
        "color": "#BE5ADF"
    },
    {
        "source": "av2",
        "target": "vision",
        "color": "#9CDDC8"
    },
    {
        "source": "av3",
        "target": "vision",
        "color": "#BE5ADF"
    },
    {
        "source": "ca3",
        "target": "vision",
        "color": "#BE5ADF"
    },
    {
        "source": "av2",
        "target": "wandam",
        "color": "#9CDDC8"
    },
    {
        "source": "av3",
        "target": "wandam",
        "color": "#BE5ADF"
    },
    {
        "source": "ca3",
        "target": "wandam",
        "color": "#BE5ADF"
    },
    {
        "source": "av2",
        "target": "heimdall",
        "color": "#9CDDC8"
    },
    {
        "source": "th1",
        "target": "heimdall",
        "color": "#FA000B"
    },
    {
        "source": "th2",
        "target": "heimdall",
        "color": "#9CDDC8"
    },
    {
        "source": "th3",
        "target": "heimdall",
        "color": "#BE5ADF"
    },
    {
        "source": "av1",
        "target": "loki",
        "color": "#FA000B"
    },
    {
        "source": "av3",
        "target": "loki",
        "color": "#BE5ADF"
    },
    {
        "source": "th1",
        "target": "loki",
        "color": "#FA000B"
    },
    {
        "source": "th2",
        "target": "loki",
        "color": "#9CDDC8"
    },
    {
        "source": "th3",
        "target": "loki",
        "color": "#BE5ADF"
    },
    {
        "source": "av3",
        "target": "bucky",
        "color": "#BE5ADF"
    },
    {
        "source": "bp1",
        "target": "bucky",
        "color": "#BE5ADF"
    },
    {
        "source": "ca1",
        "target": "bucky",
        "color": "#FA000B"
    },
    {
        "source": "ca2",
        "target": "bucky",
        "color": "#9CDDC8"
    },
    {
        "source": "ca3",
        "target": "bucky",
        "color": "#BE5ADF"
    },
    {
        "source": "av3",
        "target": "tchalla",
        "color": "#BE5ADF"
    },
    {
        "source": "bp1",
        "target": "tchalla",
        "color": "#BE5ADF"
    },
    {
        "source": "ca3",
        "target": "tchalla",
        "color": "#BE5ADF"
    },
    {
        "source": "av3",
        "target": "peterq",
        "color": "#BE5ADF"
    },
    {
        "source": "gotg1",
        "target": "peterq",
        "color": "#9CDDC8"
    },
    {
        "source": "gotg2",
        "target": "peterq",
        "color": "#BE5ADF"
    },
    {
        "source": "av3",
        "target": "gamora",
        "color": "#BE5ADF"
    },
    {
        "source": "gotg1",
        "target": "gamora",
        "color": "#9CDDC8"
    },
    {
        "source": "gotg2",
        "target": "gamora",
        "color": "#BE5ADF"
    },
    {
        "source": "av3",
        "target": "drax",
        "color": "#BE5ADF"
    },
    {
        "source": "gotg1",
        "target": "drax",
        "color": "#9CDDC8"
    },
    {
        "source": "gotg2",
        "target": "drax",
        "color": "#BE5ADF"
    },
    {
        "source": "av3",
        "target": "rocket",
        "color": "#BE5ADF"
    },
    {
        "source": "gotg1",
        "target": "rocket",
        "color": "#9CDDC8"
    },
    {
        "source": "gotg2",
        "target": "rocket",
        "color": "#BE5ADF"
    },
    {
        "source": "av3",
        "target": "groota",
        "color": "#BE5ADF"
    },
    {
        "source": "gotg1",
        "target": "groota",
        "color": "#9CDDC8"
    },
    {
        "source": "gotg2",
        "target": "groota",
        "color": "#BE5ADF"
    },
    {
        "source": "av3",
        "target": "nebula",
        "color": "#BE5ADF"
    },
    {
        "source": "gotg1",
        "target": "nebula",
        "color": "#9CDDC8"
    },
    {
        "source": "gotg2",
        "target": "nebula",
        "color": "#BE5ADF"
    },
    {
        "source": "av3",
        "target": "mantis",
        "color": "#BE5ADF"
    },
    {
        "source": "gotg2",
        "target": "mantis",
        "color": "#BE5ADF"
    },
    {
        "source": "am1",
        "target": "scottl",
        "color": "#9CDDC8"
    },
    {
        "source": "av3",
        "target": "scottl",
        "color": "#BE5ADF"
    },
    {
        "source": "ca3",
        "target": "scottl",
        "color": "#BE5ADF"
    },
    {
        "source": "av3",
        "target": "stephens",
        "color": "#BE5ADF"
    },
    {
        "source": "ds1",
        "target": "stephens",
        "color": "#BE5ADF"
    },
    {
        "source": "th3",
        "target": "stephens",
        "color": "#BE5ADF"
    },
    {
        "source": "av3",
        "target": "peterp",
        "color": "#BE5ADF"
    },
    {
        "source": "ca3",
        "target": "peterp",
        "color": "#BE5ADF"
    },
    {
        "source": "sm1",
        "target": "peterp",
        "color": "#BE5ADF"
    }
];

/********************************************************* VARIABLES ************************************************/

var svg = d3.select('svg');
var HERO = 'b'
var MOVIE = 'a'

var neighbors;
var resetted_graph = true;
var selected_nodes = [];

var labels = [];
var label_links = [];
var labels_g;

var nei = [];
var lista = [];
var link_ok = [];
var clicked = false

var text_elems;
var node_elems;
var rect_elems;
var link_elems = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .enter()
    .append("line")
    .attr('class', function (d) {
        return d.source + d.target
    })
    .attr("stroke-width", 1)
    .attr("stroke", "rgba(220, 220, 220, 0.2)")

var linkForce = d3
    .forceLink()
    .id(function (link) {
        return link.id
    })
    .strength(function (link) {
        return 0
    })

var simulation = d3.forceSimulation(nodes)
    .force('link', linkForce)
    .force('charge', d3.forceManyBody().strength(-50))
    .force("collide", d3.forceCollide().radius(15).iterations(10))
    .force("r", d3.forceRadial(function (d) {
        if (d.type === MOVIE)
            return 200
        return 300
    }))

var dragDrop = d3.drag().on('start', function (node) {
    node.fx = node.x
    node.fy = node.y
}).on('drag', function (node) {
    simulation.alphaTarget(1).restart()
    node.fx = d3.event.x
    node.fy = d3.event.y
}).on('end', function (node) {
    if (!d3.event.active) {
        simulation.alphaTarget(0)
    }
    node.fx = null
    node.fy = null
})


svg.call(
    d3.zoom()
        .scaleExtent([.1, 4])
        .on("zoom", function () {
            svg.attr("transform", d3.event.transform);
        })
);

/********************************************************* FUNCTIONS ************************************************/

function create_defs_links() {
    var hero_defs = d3.select('svg').append("defs");

    let indice = 0;
    for (key in nodes) {
        var pattern = hero_defs.append('pattern')
            .attr('id', "image" + indice.toString())
            .attr('x', '0%')
            .attr('y', '0%')
            .attr('height', '100%')
            .attr('width', '100%')
            .attr('viewBox', "0 0 512 512");

        var image = pattern.append('image')
            .attr('x', '0%')
            .attr('y', '0%')
            .attr('height', '512')
            .attr('width', '512')
            .attr('xlink:href', nodes[key].img);

        let label = {
            id: nodes[key].id + '_label',
            radius: 5,
            label: nodes[key].label,
            type: nodes[key].type
        }

        labels.push(label)

        label_links.push({
            source: nodes[key],
            target: label,
            strenght: 1
        })

        indice++;
    }
}


function get_node_neighbors(node) {
    let neighbors = []
    neighbors.push(node)
    links.forEach(function (d) {
        if (d.target.id === node.id)
            neighbors.push(d.source)
        else if (d.source.id === node.id)
            neighbors.push(d.target)
    })
    return neighbors
}


function bool_link_neighbor(node, link) {
    return link.target.id === node.id || link.source.id === node.id
}


function get_image(node, neighbors) {
    return "url(#image" + nodes.indexOf(node) + ")"
}


function get_link_color(node, link) {
    if (!link_ok.includes(link)) {
        if (bool_link_neighbor(node, link)) {
            //console.log(node)
            link_ok.push(link)
            return link.color
        }
        return 'transparent'
    } else {
        return link.color
    }
}


function get_clean_link_color(node, link) {
    if (bool_link_neighbor(node, link))
        return link.color
    return 'transparent'
}


function reset_link_color(node, link) {
    return 'rgba(220, 220, 220, 0.2)'
}


function create_simulation(type, x, y) {
    simulation = d3.forceSimulation()
        .force('link', linkForce)
        .force('charge', d3.forceManyBody().strength(-50))
        .force("collide", d3.forceCollide().radius(15).iterations(10))
        .force("r", d3.forceRadial(function (d) {
            if (d.type === type) {
                if (x !== undefined)
                    return x;
                return 200;
            }
            if (y !== undefined)
                return y;
            return 300
        }))
    generate_simulation()
    simulation.force("link").links(links);
}


function select_node(selectedNode, visible) {
    selected_nodes.push(selectedNode)
    /*if (selected_nodes.length === 3)
        selected_nodes.shift()*/

    neighbors = get_node_neighbors(selectedNode)

    /*if (selectedNode.type === HERO)
        create_simulation(HERO)
    if (selectedNode.type === MOVIE)
        create_simulation(MOVIE)*/

    node_elems
        .attr('fill', function (node) {
            return get_image(node, neighbors)
        })
        .attr('r', 15)

    text_elems
        .attr("font-size", function (node) {
            return 12
        })

    link_elems
        .attr('stroke', function (link) {
            return get_link_color(selectedNode, link)
        })
}


/*function create_useful_links() {
    let tutti = []
    let link
    for (var node in nei) {
        let app = get_node_neighbors(nei[node])
        for (var elem in app)
            tutti.push([app[elem]])
    }

    svg.select(".links")
        .selectAll("line")
        .data(tutti)
        .enter()
        .append("line")
        .attr('class', function (d) {
            return d.source + d.target
        })
        .attr("stroke-width", 1)
        .attr("stroke", function (d) {

            if (get_links(d) !== undefined) {
                console.log(get_links(d).color)
                return get_links(d).color
            }
        })
        .attr('x1', function (d) {
            if (get_links(d) !== undefined)
                return get_links(d).source.x
        })
        .attr('y1', function (d) {
            if (get_links(d) !== undefined)
                return get_links(d).source.y
        })
        .attr('x2', function (d) {
            if (get_links(d) !== undefined)
                return get_links(d).target.x
        })
        .attr('y2', function (d) {
            if (get_links(d) !== undefined)
                return get_links(d).target.y
        })

}*/


/*function get_links(node) {
    let valore
    for (var link in links) {
        //for (var node in nei) {
        //console.log(links[link].target.id)
        if (links[link].source.id === node.id || links[link].target.id === node.id) {
            console.log(links[link])
            valore = links[link]
        }
        //}
    }
    console.log(valore)
    return valore
}*/


function create_labels() {
    labels_g =
        svg.append("g")
            .attr("class", "labels")

    rect_elems =
        labels_g.selectAll("circle")
            .data(nodes)
            .enter()
            .append("circle")
            .attr('id', function (d, i) {
                return 'label_circle' + i
            })

    text_elems =
        labels_g.selectAll('text')
            .data(nodes)
            .enter()
            .append("text")
            .attr('id', function (d, i) {
                return 'label' + i
            })
            .text(function (d) {
                return d.label;
            })
            .attr("font-size", 12)
            .attr("fill", '#F7AF63')
}


function create_useful_labels(lista, i) {

    labels_g =
        svg.append("g")
            .attr("class", "labels")

    rect_elems =
        labels_g.selectAll("circle")
            .data(lista)
            .enter()
            .append("circle")
            .attr('id', function (d, i) {

                return 'label_circle' + i
            })

    text_elems =
        labels_g.selectAll('text')
            .data(lista)
            .enter()
            .append("text")
            .attr('id', function (d, i) {
                return 'label' + d.index
            })
            .text(function (d) {
                //console.log(d)
                return d.label;
            })
            .attr("font-size", 12)
            .attr("fill", 'white')
}


function create_nodeElements() {
    node_elems =
        svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(nodes)
            .enter()
            .append("circle")
            .attr('id', function (d, i) {
                return 'nodeElement' + i
            })
            .attr('class', 'radius')
            .attr("r", 15)
            .attr("fill", get_image)
            .attr('stroke', 'steelblue')
            .attr('stroke-width', '0.75')
            .call(dragDrop)
            .on("mouseover", function (d, i) {
                highlight_node(nei, d, i)
            })
            .on("mouseout", function (d, i) {
                reset_highlighted_node(d, i)
            })
            .on('click', function (d, i) {

                if (nei.indexOf(d) < 0)
                    nei.push(d)
                light_ring(d)
            })

    var button = d3.select('#vai')
        /*.attr("class", "bottone")
        .append('rect')
        .attr('id', 'vai')
        .attr('x', 400)
        .attr('y', 400)
        .attr('height', 40)
        .attr('width', 40)
        .attr('fill', '#FFFFFF')*/
        .on('click', function (d, i) {
            clicked = true
            //if (nei.length > 1) {
            d3.selectAll('line').attr('stroke', 'transparent')
            d3.selectAll('.labels').remove()
            link_ok = []

            for (var elem in nei) {
                let vicini = get_node_neighbors(nei[elem])
                for (var x in vicini)
                    lista.push(vicini[x])
            }

            create_useful_labels(lista, i)
            /*text_elems
                .attr('style', 'visibility: visible;')
                .attr("font-size", function (node) {
                    if (lista.includes(node)) {
                        console.log(node)
                        return 12
                    }
                    return 0
                })*/

            for (var nodo in nei) {
                select_node(nei[nodo], false)
            }
            console.log(nei)
            if (nei[0].type === HERO)
                create_simulation(HERO)
            if (nei[0].type === MOVIE)
                create_simulation(MOVIE)

            /*} else if (nei.length === 1) {
                //nei = get_node_neighbors(d)
                d3.selectAll('.labels').remove()
                create_useful_single_labels(nei[0], i)
                text_elems
                    .attr('style', 'visibility: visible; white-space: pre-line;')
                    .attr("font-size", function (node) {
                        if (get_node_neighbors(nei[0]).includes(node)) return 12
                        return 0
                    })
                select_single_node(nei[0], false)
            }*/
            nei = []
            lista = []
        })
    //nei = []

}


/*function create_useful_single_labels(d, i) {
    neighbors = get_node_neighbors(d)

    labels_g =
        svg.append("g")
            .attr("class", "labels")

    rect_elems =
        labels_g.selectAll("circle")
            .data(neighbors)
            .enter()
            .append("circle")
            .attr('id', function (d, i) {
                return 'label_circle' + i
            })

    text_elems =
        labels_g.selectAll('text')
            .data(neighbors)
            .enter()
            .append("text")
            .attr('id', function (d, i) {
                return 'label' + i
            })
            .text(function (d) {
                return d.label;
            })
            .attr("font-size", 12)
            .attr("fill", 'white')
}*/


/*function select_single_node(selectedNode, visible) {
    selected_nodes.push(selectedNode)
    if (selected_nodes.length === 3)
        selected_nodes.shift()

    resetted_graph = false
    neighbors = get_node_neighbors(selectedNode)

    if (selectedNode.type === HERO)
        create_simulation(HERO)
    else
        create_simulation(MOVIE)

    node_elems
        .attr('fill', function (node) {
            return get_image(node, neighbors)
        })
        .attr('r', 15)

    text_elems
        .attr("font-size", function (node) {
            if (neighbors.includes(node)) return 12
            return 0
        })

    link_elems
        .attr('stroke', function (link) {
            return get_clean_link_color(selectedNode, link)
        })
}*/


function light_ring(node) {

    node_elems
        /*.attr('r', function (node) {
            if (nei.includes(node)){
                console.log(nei, node)
                return 25
            }
            return 15
        })*/
        .attr('stroke', function (node) {
            if (nei.includes(node))
                return 'red'
            return 'steelblue'
        })
        .attr('stroke-width', function (node) {
            if (nei.includes(node))
                return '1.0'
            return '0.75'
        })

    /*text_elems
        .attr("x", function (node) {
            if (nei.includes(node))
                return node.x + 35
            return node.x + 20
        })*/
}


function create_node_label(nei, d) {
    var current = [d]

    if (nei.indexOf(d) < 0) {
        svg.select('.labels')
            .data(current)
            .append("text")
            .attr('id', function (d, i) {
                return 'label' + '1000'
            })
            .text(function (d) {
                return d.label;
            })
            .attr("font-size", 12)
            .attr("fill", 'white')
            .attr('x', function (d) {
                return d.x + 20
            })
            .attr('y', function (d) {
                return d.y
            })
    }
}


function highlight_node(nei, d, i) {
    if (clicked === false)
        link_elems.attr('stroke', 'transparent')

    neighbors = get_node_neighbors(d)

    if (selected_nodes.length === 0) {
        simulation.force("collide", d3.forceCollide().radius(20).iterations(10))

        node_elems
            .attr('fill', function (node) {
                return get_image(node, neighbors)
            })

        text_elems
            .attr('style', 'visibility: visible;')
            .attr("font-size", function (node) {
                if (neighbors.includes(node)) return 18
                return 0
            })
            .attr("x", function (node) {
                return node.x + 25
            })

        rect_elems
            .attr('style', 'visibility: visible;')

        node_elems
            .attr('r', function (node) {
                if (neighbors.includes(node)) return 20
                return 0
            })

        link_elems
            .attr('stroke', function (link) {
                return get_clean_link_color(d, link)
            })
    } else {
        create_node_label(nei, d)
    }
    return 0
}


function reset_highlighted_node(d, i) {
    node_elems.attr('r', 15)

    if (selected_nodes.length === 0) {
        d3.select('#label' + i).style('fill', '#FFFFFF')

        text_elems
            .attr("font-size", 12)
            .attr('x', function (node) {
                if (nei.includes(node))
                    return node.x + 25
                return node.x + 20
            })

        link_elems
            .attr('stroke', function (d) {
                return reset_link_color(d)
            })
    } else if (!neighbors.includes(d)) {
        svg.selectAll('#label1000').remove()
    } else {
        svg.selectAll('#label1000').remove()
    }
}


function generate_simulation() {
    simulation
        .nodes(nodes)
        .on('tick', () => {
            node_elems
                .attr('cx', function (node) {
                    return node.x
                })
                .attr('cy', function (node) {
                    return node.y
                })

            text_elems
                .attr('x', function (node) {
                    return node.x + 20
                })
                .attr('y', function (node) {
                    return node.y
                })

            rect_elems
                .attr('cx', function (node) {
                    return node.x + 15
                })
                .attr('cy', function (node) {
                    return node.y
                })

            link_elems
                .attr('x1', function (link) {
                    return link.source.x
                })
                .attr('y1', function (link) {
                    return link.source.y
                })
                .attr('x2', function (link) {
                    return link.target.x
                })
                .attr('y2', function (link) {
                    return link.target.y
                })
        })

}


var logo = d3.select('#logo');
logo.on('click', function () {

    svg.selectAll('g').remove()
    svg.selectAll('defs').remove()

    link_elems = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .enter()
        .append("line")
        .attr("stroke-width", 1)
        .attr("stroke", "rgba(220, 220, 220, 0.2)")


    var linkForce = d3
        .forceLink()
        .id(function (link) {
            return link.id
        })
        .strength(function (link) {
            return 0
        })

    var simulation = d3.forceSimulation(nodes)
        .force('link', linkForce)
        .force('charge', d3.forceManyBody().strength(-50))
        .force("collide", d3.forceCollide().radius(15).iterations(10))
        .force("r", d3.forceRadial(function (d) {
            if (d.type === MOVIE)
                return 200
            return 300
        }))

    var dragDrop = d3.drag().on('start', function (node) {
        node.fx = node.x
        node.fy = node.y
    }).on('drag', function (node) {
        simulation.alphaTarget(1).restart()
        node.fx = d3.event.x
        node.fy = d3.event.y
    }).on('end', function (node) {
        if (!d3.event.active) {
            simulation.alphaTarget(0)
        }
        node.fx = null
        node.fy = null
    })

    selected_nodes = []
    nei = []
    neighbors = []
    lista = []
    clicked = false

    create_defs_links();
    create_nodeElements();
    create_labels();

    generate_simulation();
    simulation.force("link").links(links);
})

/********************************************************* MAIN ************************************************/

create_defs_links()
create_nodeElements();
create_labels();

generate_simulation();
simulation.force("link").links(links);
