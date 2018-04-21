const TEXT = {
    ABOUT_PAGE: {
        TITLE: "Autoriai",
        IMAGE_ALT: "Dviračių maršrutų autoriai",
        PARAGRAPHS: [
            "Mes esame Ieva ir Jonas. Gražiu oru mėgstame dviračiais važinėtis po Lietuvą.",
            "Šiame bloge rasite visus mūsų išbandytus maršrutus.",
            "Mes esame ne dviračių sporto, o labiau poilsio dviračiais entuziastai. Todėl siūlomi maršrutai yra skirti pradedantiesiems arba vidutiniokams. Tačiau idėjų savo žygiams pasisems ir labiau patyrę.",
            "Linkime smagių kelionių!",
        ]
    },
    MAIN_PAGE: {
        WELCOME_BOX: {
            TITLE: "Sveiki atvykę!",
            PARAGRAPH_1: "Tai blogas, kuriame du neprofesionaliausi Lietuvos dviratininkai apžvelgia maršrutus, įveiktus laisvalaikiu.",
            PARAGRAPH_2: "Maršrutų žemėlapis, lankytinos vietos, įspūdžiai bei patarimai – viskas apie turistinius žygius dviračiais.",
            BUTTON: "Rodyti maršrutų žemėlapį!",
        },
        LATEST_ROUTES_BOX: {
            TITLE: "NAUJAUSI MARŠRUTAI",
            MORE_ROUTES: "Daugiau maršrutų...",
        },
        STATS_BOX: {
            TITLE: "Puslapyje rasite",
            STATS: {
                ROUTES_COUNT: {
                    VARDININKAS_VNS: 'maršrutas',
                    VARDININKAS_DGS: 'maršrutai',
                    KILMININKAS_DGS: 'maršrutų'
                },
                TOTAL_DISTANCE: {
                    VARDININKAS_VNS: 'kilometras',
                    VARDININKAS_DGS: 'kilometrai',
                    KILMININKAS_DGS: 'kilometrų'
                },
                ATTRACTION_COUNT: {
                    VARDININKAS_VNS: 'lankytina vieta',
                    VARDININKAS_DGS: 'lankytinos vietos',
                    KILMININKAS_DGS: 'lankytinų vietų'
                },
                NUMBER_OF_AUTHORS: "2-iejų keliautojų įspūdžiai"
            }
        }
    },
    ROUTE_PAGE: {
        FOLLOW_US: "Sek mus facebook'e!",
        GALLERY: "Galerija",
        BY_TRAIN: "Maršrutas pasiekiamas traukiniu",
        INFO_TITLE: "Informacija",
        ATTRACTIONS_TITLE: "Lankytinos vietos",
        ROUTE_MAP: "Žemėlapis",
    },
    ROUTE_SEARCH_PAGE: {
        SEARCH_INPUT_PLACEHOLDER: "Ieškoti",
        NO_ROUTES_FOUND: "Maršrutų neradome – papildykite / pakeiskite paiešką",
    },
    MAP_PAGE: {},
    HEADER: {
        NAME: "Dviračių maršrutai",
        ROUTE_MAIN: "Pagrindinis",
        ROUTE_ABOUT: "Apie",
        ROUTE_MAP: "Žemėlapis",
        ROUTE_ROUTES: "Maršrutai",
    },
    FOOTER: {
        TEXT: "Dviračių maršrutai",
    },
    OTHER: {
        SHOW_ROUTE_BUTTON: "Plačiau",
        KM: "km",
    }
}

export const LT_LINKSNIAI = {
    VARDININKAS_VNS: 'VARDININKAS_VNS',
    VARDININKAS_DGS: 'VARDININKAS_DGS',
    KILMININKAS_DGS: 'KILMININKAS_DGS'
};

export function getWordCaseByNumber(n) {
    let number = n % 100;
    if( number == 0) return LT_LINKSNIAI.KILMININKAS_DGS;
    if( number == 1) return LT_LINKSNIAI.VARDININKAS_VNS;
    if( number > 1 &&  number < 10 ) return LT_LINKSNIAI.VARDININKAS_DGS;
    if( number >= 10 &&  number <= 20 ) return LT_LINKSNIAI.KILMININKAS_DGS;
    number = number % 10;
    if( number == 0) return LT_LINKSNIAI.KILMININKAS_DGS;
    if( number == 1) return LT_LINKSNIAI.VARDININKAS_VNS;
    return LT_LINKSNIAI.VARDININKAS_DGS;
}

export default TEXT;
