   

const RegionsMap = {
    "AT": [
        {"code": "BL", "name": "Burgenland"},
        {"code": "KN", "name": "Kärnten"},
        {"code": "NO", "name": "Niederösterreich"},
        {"code": "OO", "name": "Oberösterreich"},
        {"code": "SB", "name": "Salzburg"},
        {"code": "ST", "name": "Steiermark"},
        {"code": "TI", "name": "Tirol"},
        {"code": "VB", "name": "Vorarlberg"},
        {"code": "WI", "name": "Wien"},
    ],
    "AU": [
        {"code": "AU-NSW", "name": "New South Wales"},
        {"code": "AU-QLD", "name": "Queensland"},
        {"code": "AU-SA", "name": "South Australia"},
        {"code": "AU-TAS", "name": "Tasmania"},
        {"code": "AU-VIC", "name": "Victoria"},
        {"code": "AU-WA", "name": "Western Australia"},
        {"code": "AU-ACT", "name": "Australian Capital Territory"},
        {"code": "AU-NT", "name": "Northern Territory"}
    ],
    "BR": [
        {"code": "AC", "name": "Acre"},
        {"code": "AL", "name": "Alagoas"},
        {"code": "AM", "name": "Amazonas"},
        {"code": "AP", "name": "Amapá"},
        {"code": "BA", "name": "Bahia"},
        {"code": "CE", "name": "Ceará"},
        {"code": "DF", "name": "Distrito Federal"},
        {"code": "ES", "name": "Espírito Santo"},
        {"code": "GO", "name": "Goiás"},
        {"code": "MA", "name": "Maranhão"},
        {"code": "MG", "name": "Minas Gerais"},
        {"code": "MS", "name": "Mato Grosso do Sul"},
        {"code": "MT", "name": "Mato Grosso"},
        {"code": "PA", "name": "Pará"},
        {"code": "PB", "name": "Paraíba"},
        {"code": "PE", "name": "Pernambuco"},
        {"code": "PI", "name": "Piauí"},
        {"code": "PR", "name": "Paraná"},
        {"code": "RJ", "name": "Rio de Janeiro"},
        {"code": "RN", "name": "Rio Grande do Norte"},
        {"code": "RO", "name": "Rondônia"},
        {"code": "RR", "name": "Roraima"},
        {"code": "RS", "name": "Rio Grande do Sul"},
        {"code": "SC", "name": "Santa Catarina"},
        {"code": "SE", "name": "Sergipe"},
        {"code": "SP", "name": "São Paulo"},
        {"code": "TO", "name": "Tocantins"},
    ],
    "CA": [
        {"code": "AB", "name": "Alberta"},
        {"code": "BC", "name": "British Columbia"},
        {"code": "MB", "name": "Manitoba"},
        {"code": "NB", "name": "New Brunswick"},
        {"code": "NL", "name": "Newfoundland and Labrador"},
        {"code": "NS", "name": "Nova Scotia"},
        {"code": "NT", "name": "Northwest Territories"},
        {"code": "NU", "name": "Nunavut"},
        {"code": "ON", "name": "Ontario"},
        {"code": "PE", "name": "Prince Edward Island"},
        {"code": "QC", "name": "Quebec"},
        {"code": "SK", "name": "Saskatchewan"},
        {"code": "YT", "name": "Yukon Territory"},
    ],
    "CH": [
        {"code": "AG", "name": "Aargau"},
        {"code": "AI", "name": "Appenzell Innerrhoden"},
        {"code": "AR", "name": "Appenzell Ausserrhoden"},
        {"code": "BE", "name": "Bern"},
        {"code": "BL", "name": "Basel-Landschaft"},
        {"code": "BS", "name": "Basel-Stadt"},
        {"code": "FR", "name": "Freiburg"},
        {"code": "GE", "name": "Genf"},
        {"code": "GL", "name": "Glarus"},
        {"code": "GR", "name": "Graubünden"},
        {"code": "JU", "name": "Jura"},
        {"code": "LU", "name": "Luzern"},
        {"code": "NE", "name": "Neuenburg"},
        {"code": "NW", "name": "Nidwalden"},
        {"code": "OW", "name": "Obwalden"},
        {"code": "SG", "name": "St. Gallen"},
        {"code": "SH", "name": "Schaffhausen"},
        {"code": "SO", "name": "Solothurn"},
        {"code": "SZ", "name": "Schwyz"},
        {"code": "TG", "name": "Thurgau"},
        {"code": "TI", "name": "Tessin"},
        {"code": "UR", "name": "Uri"},
        {"code": "VD", "name": "Waadt"},
        {"code": "VS", "name": "Wallis"},
        {"code": "ZG", "name": "Zug"},
        {"code": "ZH", "name": "Zürich"},
    ],
    "DE": [
        {"code": "BAW", "name": "Baden-Württemberg"},
        {"code": "BAY", "name": "Bayern"},
        {"code": "BER", "name": "Berlin"},
        {"code": "BRE", "name": "Bremen"},
        {"code": "BRG", "name": "Brandenburg"},
        {"code": "HAM", "name": "Hamburg"},
        {"code": "HES", "name": "Hessen"},
        {"code": "MEC", "name": "Mecklenburg-Vorpommern"},
        {"code": "NDS", "name": "Niedersachsen"},
        {"code": "NRW", "name": "Nordrhein-Westfalen"},
        {"code": "RHE", "name": "Rheinland-Pfalz"},
        {"code": "SAC", "name": "Sachsen-Anhalt"},
        {"code": "SAR", "name": "Saarland"},
        {"code": "SAS", "name": "Sachsen"},
        {"code": "SCN", "name": "Schleswig-Holstein"},
        {"code": "THE", "name": "Thüringen"},
    ],
    "EE": [
        {"code": "EE-37", "name": "Harjumaa"},
        {"code": "EE-39", "name": "Hiiumaa"},
        {"code": "EE-44", "name": "Ida-Virumaa"},
        {"code": "EE-49", "name": "Jõgevamaa"},
        {"code": "EE-51", "name": "Järvamaa"},
        {"code": "EE-57", "name": "Läänemaa"},
        {"code": "EE-59", "name": "Lääne-Virumaa"},
        {"code": "EE-65", "name": "Põlvamaa"},
        {"code": "EE-67", "name": "Pärnumaa"},
        {"code": "EE-70", "name": "Raplamaa"},
        {"code": "EE-74", "name": "Saaremaa"},
        {"code": "EE-78", "name": "Tartumaa"},
        {"code": "EE-82", "name": "Valgamaa"},
        {"code": "EE-84", "name": "Viljandimaa"},
        {"code": "EE-86", "name": "Võrumaa"},
    ],
    "ES": [
        {"code": "A Coruсa", "name": "A Coruña"},
        {"code": "Alava", "name": "Alava"},
        {"code": "Albacete", "name": "Albacete"},
        {"code": "Alicante", "name": "Alicante"},
        {"code": "Almeria", "name": "Almeria"},
        {"code": "Asturias", "name": "Asturias"},
        {"code": "Avila", "name": "Avila"},
        {"code": "Badajoz", "name": "Badajoz"},
        {"code": "Baleares", "name": "Baleares"},
        {"code": "Barcelona", "name": "Barcelona"},
        {"code": "Burgos", "name": "Burgos"},
        {"code": "Caceres", "name": "Caceres"},
        {"code": "Cadiz", "name": "Cadiz"},
        {"code": "Cantabria", "name": "Cantabria"},
        {"code": "Castellon", "name": "Castellon"},
        {"code": "Ceuta", "name": "Ceuta"},
        {"code": "Ciudad Real", "name": "Ciudad Real"},
        {"code": "Cordoba", "name": "Cordoba"},
        {"code": "Cuenca", "name": "Cuenca"},
        {"code": "Girona", "name": "Girona"},
        {"code": "Granada", "name": "Granada"},
        {"code": "Guadalajara", "name": "Guadalajara"},
        {"code": "Guipuzcoa", "name": "Guipuzcoa"},
        {"code": "Huelva", "name": "Huelva"},
        {"code": "Huesca", "name": "Huesca"},
        {"code": "Jaen", "name": "Jaen"},
        {"code": "La Rioja", "name": "La Rioja"},
        {"code": "Las Palmas", "name": "Las Palmas"},
        {"code": "Leon", "name": "Leon"},
        {"code": "Lleida", "name": "Lleida"},
        {"code": "Lugo", "name": "Lugo"},
        {"code": "Madrid", "name": "Madrid"},
        {"code": "Malaga", "name": "Malaga"},
        {"code": "Melilla", "name": "Melilla"},
        {"code": "Murcia", "name": "Murcia"},
        {"code": "Navarra", "name": "Navarra"},
        {"code": "Ourense", "name": "Ourense"},
        {"code": "Palencia", "name": "Palencia"},
        {"code": "Pontevedra", "name": "Pontevedra"},
        {"code": "Salamanca", "name": "Salamanca"},
        {"code": "Santa Cruz de Tenerife", "name": "Santa Cruz de Tenerife"},
        {"code": "Segovia", "name": "Segovia"},
        {"code": "Sevilla", "name": "Sevilla"},
        {"code": "Soria", "name": "Soria"},
        {"code": "Tarragona", "name": "Tarragona"},
        {"code": "Teruel", "name": "Teruel"},
        {"code": "Toledo", "name": "Toledo"},
        {"code": "Valencia", "name": "Valencia"},
        {"code": "Valladolid", "name": "Valladolid"},
        {"code": "Vizcaya", "name": "Vizcaya"},
        {"code": "Zamora", "name": "Zamora"},
        {"code": "Zaragoza", "name": "Zaragoza"},
    ],
    "FI": [
        {"code": "Ahvenanmaa", "name": "Ahvenanmaa"},
        {"code": "Etelä-Karjala", "name": "Etelä-Karjala"},
        {"code": "Etelä-Pohjanmaa", "name": "Etelä-Pohjanmaa"},
        {"code": "Etelä-Savo", "name": "Etelä-Savo"},
        {"code": "Itä-Uusimaa", "name": "Itä-Uusimaa"},
        {"code": "Kainuu", "name": "Kainuu"},
        {"code": "Kanta-Häme", "name": "Kanta-Häme"},
        {"code": "Keski-Pohjanmaa", "name": "Keski-Pohjanmaa"},
        {"code": "Keski-Suomi", "name": "Keski-Suomi"},
        {"code": "Kymenlaakso", "name": "Kymenlaakso"},
        {"code": "Lappi", "name": "Lappi"},
        {"code": "Pirkanmaa", "name": "Pirkanmaa"},
        {"code": "Pohjanmaa", "name": "Pohjanmaa"},
        {"code": "Pohjois-Karjala", "name": "Pohjois-Karjala"},
        {"code": "Pohjois-Pohjanmaa", "name": "Pohjois-Pohjanmaa"},
        {"code": "Pohjois-Savo", "name": "Pohjois-Savo"},
        {"code": "Päijät-Häme", "name": "Päijät-Häme"},
        {"code": "Satakunta", "name": "Satakunta"},
        {"code": "Uusimaa", "name": "Uusimaa"},
        {"code": "Varsinais-Suomi", "name": "Varsinais-Suomi"},
    ],
    "FR": [
        {"code": "1", "name": "Ain"},
        {"code": "10", "name": "Aube"},
        {"code": "11", "name": "Aude"},
        {"code": "12", "name": "Aveyron"},
        {"code": "13", "name": "Bouches-du-Rhône"},
        {"code": "14", "name": "Calvados"},
        {"code": "15", "name": "Cantal"},
        {"code": "16", "name": "Charente"},
        {"code": "17", "name": "Charente-Maritime"},
        {"code": "18", "name": "Cher"},
        {"code": "19", "name": "Corrèze"},
        {"code": "2", "name": "Aisne"},
        {"code": "21", "name": "Côte-d'Or"},
        {"code": "22", "name": "Côtes-d'Armor"},
        {"code": "23", "name": "Creuse"},
        {"code": "24", "name": "Dordogne"},
        {"code": "25", "name": "Doubs"},
        {"code": "26", "name": "Drôme"},
        {"code": "27", "name": "Eure"},
        {"code": "28", "name": "Eure-et-Loir"},
        {"code": "29", "name": "Finistère"},
        {"code": "2A", "name": "Corse-du-Sud"},
        {"code": "2B", "name": "Haute-Corse"},
        {"code": "3", "name": "Allier"},
        {"code": "30", "name": "Gard"},
        {"code": "31", "name": "Haute-Garonne"},
        {"code": "32", "name": "Gers"},
        {"code": "33", "name": "Gironde"},
        {"code": "34", "name": "Hérault"},
        {"code": "35", "name": "Ille-et-Vilaine"},
        {"code": "36", "name": "Indre"},
        {"code": "37", "name": "Indre-et-Loire"},
        {"code": "38", "name": "Isère"},
        {"code": "39", "name": "Jura"},
        {"code": "4", "name": "Alpes-de-Haute-Provence"},
        {"code": "40", "name": "Landes"},
        {"code": "41", "name": "Loir-et-Cher"},
        {"code": "42", "name": "Loire"},
        {"code": "43", "name": "Haute-Loire"},
        {"code": "44", "name": "Loire-Atlantique"},
        {"code": "45", "name": "Loiret"},
        {"code": "46", "name": "Lot"},
        {"code": "47", "name": "Lot-et-Garonne"},
        {"code": "48", "name": "Lozère"},
        {"code": "49", "name": "Maine-et-Loire"},
        {"code": "5", "name": "Hautes-Alpes"},
        {"code": "50", "name": "Manche"},
        {"code": "51", "name": "Marne"},
        {"code": "52", "name": "Haute-Marne"},
        {"code": "53", "name": "Mayenne"},
        {"code": "54", "name": "Meurthe-et-Moselle"},
        {"code": "55", "name": "Meuse"},
        {"code": "56", "name": "Morbihan"},
        {"code": "57", "name": "Moselle"},
        {"code": "58", "name": "Nièvre"},
        {"code": "59", "name": "Nord"},
        {"code": "6", "name": "Alpes-Maritimes"},
        {"code": "60", "name": "Oise"},
        {"code": "61", "name": "Orne"},
        {"code": "62", "name": "Pas-de-Calais"},
        {"code": "63", "name": "Puy-de-Dôme"},
        {"code": "64", "name": "Pyrénées-Atlantiques"},
        {"code": "65", "name": "Hautes-Pyrénées"},
        {"code": "66", "name": "Pyrénées-Orientales"},
        {"code": "67", "name": "Bas-Rhin"},
        {"code": "68", "name": "Haut-Rhin"},
        {"code": "69", "name": "Rhône"},
        {"code": "7", "name": "Ardèche"},
        {"code": "70", "name": "Haute-Saône"},
        {"code": "71", "name": "Saône-et-Loire"},
        {"code": "72", "name": "Sarthe"},
        {"code": "73", "name": "Savoie"},
        {"code": "74", "name": "Haute-Savoie"},
        {"code": "75", "name": "Paris"},
        {"code": "76", "name": "Seine-Maritime"},
        {"code": "77", "name": "Seine-et-Marne"},
        {"code": "78", "name": "Yvelines"},
        {"code": "79", "name": "Deux-Sèvres"},
        {"code": "8", "name": "Ardennes"},
        {"code": "80", "name": "Somme"},
        {"code": "81", "name": "Tarn"},
        {"code": "82", "name": "Tarn-et-Garonne"},
        {"code": "83", "name": "Var"},
        {"code": "84", "name": "Vaucluse"},
        {"code": "85", "name": "Vendée"},
        {"code": "86", "name": "Vienne"},
        {"code": "87", "name": "Haute-Vienne"},
        {"code": "88", "name": "Vosges"},
        {"code": "89", "name": "Yonne"},
        {"code": "9", "name": "Ariège"},
        {"code": "90", "name": "Territoire-de-Belfort"},
        {"code": "91", "name": "Essonne"},
        {"code": "92", "name": "Hauts-de-Seine"},
        {"code": "93", "name": "Seine-Saint-Denis"},
        {"code": "94", "name": "Val-de-Marne"},
        {"code": "95", "name": "Val-d'Oise"},
    ],
    "LT": [
        {"code": "LT-AL", "name": "Alytaus Apskritis"},
        {"code": "LT-KL", "name": "Klaipėdos Apskritis"},
        {"code": "LT-KU", "name": "Kauno Apskritis"},
        {"code": "LT-MR", "name": "Marijampolės Apskritis"},
        {"code": "LT-PN", "name": "Panevėžio Apskritis"},
        {"code": "LT-SA", "name": "Šiaulių Apskritis"},
        {"code": "LT-TA", "name": "Tauragės Apskritis"},
        {"code": "LT-TE", "name": "Telšių Apskritis"},
        {"code": "LT-UT", "name": "Utenos Apskritis"},
        {"code": "LT-VL", "name": "Vilniaus Apskritis"},
    ],
    "LV": [
        {"code": "Aglonas novads", "name": "Aglonas novads"},
        {"code": "Aizputes novads", "name": "Aizputes novads"},
        {"code": "Aknīstes novads", "name": "Aknīstes novads"},
        {"code": "Alojas novads", "name": "Alojas novads"},
        {"code": "Alsungas novads", "name": "Alsungas novads"},
        {"code": "Amatas novads", "name": "Amatas novads"},
        {"code": "Apes novads", "name": "Apes novads"},
        {"code": "Auces novads", "name": "Auces novads"},
        {"code": "Babītes novads", "name": "Babītes novads"},
        {"code": "Baldones novads", "name": "Baldones novads"},
        {"code": "Baltinavas novads", "name": "Baltinavas novads"},
        {"code": "Beverīnas novads", "name": "Beverīnas novads"},
        {"code": "Brocēnu novads", "name": "Brocēnu novads"},
        {"code": "Burtnieku novads", "name": "Burtnieku novads"},
        {"code": "Carnikavas novads", "name": "Carnikavas novads"},
        {"code": "Cesvaines novads", "name": "Cesvaines novads"},
        {"code": "Ciblas novads", "name": "Ciblas novads"},
        {"code": "Dagdas novads", "name": "Dagdas novads"},
        {"code": "Dundagas novads", "name": "Dundagas novads"},
        {"code": "Durbes novads", "name": "Durbes novads"},
        {"code": "Engures novads", "name": "Engures novads"},
        {"code": "Garkalnes novads", "name": "Garkalnes novads"},
        {"code": "Grobiņas novads", "name": "Grobiņas novads"},
        {"code": "Iecavas novads", "name": "Iecavas novads"},
        {"code": "Ikšķiles novads", "name": "Ikšķiles novads"},
        {"code": "Ilūkstes novads", "name": "Ilūkstes novads"},
        {"code": "Inčukalna novads", "name": "Inčukalna novads"},
        {"code": "Jaunjelgavas novads", "name": "Jaunjelgavas novads"},
        {"code": "Jaunpiebalgas novads", "name": "Jaunpiebalgas novads"},
        {"code": "Jaunpils novads", "name": "Jaunpils novads"},
        {"code": "Jēkabpils", "name": "Jēkabpils"},
        {"code": "Kandavas novads", "name": "Kandavas novads"},
        {"code": "Kokneses novads", "name": "Kokneses novads"},
        {"code": "Krimuldas novads", "name": "Krimuldas novads"},
        {"code": "Krustpils novads", "name": "Krustpils novads"},
        {"code": "Kārsavas novads", "name": "Kārsavas novads"},
        {"code": "LV-AI", "name": "Aizkraukles novads"},
        {"code": "LV-AL", "name": "Alūksnes novads"},
        {"code": "LV-BL", "name": "Balvu novads"},
        {"code": "LV-BU", "name": "Bauskas novads"},
        {"code": "LV-CE", "name": "Cēsu novads"},
        {"code": "LV-DA", "name": "Daugavpils novads"},
        {"code": "LV-DGV", "name": "Daugavpils"},
        {"code": "LV-DO", "name": "Dobeles novads"},
        {"code": "LV-GU", "name": "Gulbenes novads"},
        {"code": "LV-JEL", "name": "Jelgava"},
        {"code": "LV-JK", "name": "Jēkabpils novads"},
        {"code": "LV-JL", "name": "Jelgavas novads"},
        {"code": "LV-JUR", "name": "Jūrmala"},
        {"code": "LV-KR", "name": "Krāslavas novads"},
        {"code": "LV-KU", "name": "Kuldīgas novads"},
        {"code": "LV-LE", "name": "Liepājas novads"},
        {"code": "LV-LM", "name": "Limbažu novads"},
        {"code": "LV-LPX", "name": "Liepāja"},
        {"code": "LV-LU", "name": "Ludzas novads"},
        {"code": "LV-MA", "name": "Madonas novads"},
        {"code": "LV-OG", "name": "Ogres novads"},
        {"code": "LV-PR", "name": "Preiļu novads"},
        {"code": "LV-RE", "name": "Rēzeknes novads"},
        {"code": "LV-REZ", "name": "Rēzekne"},
        {"code": "LV-RI", "name": "Rīgas novads"},
        {"code": "LV-RIX", "name": "Rīga"},
        {"code": "LV-SA", "name": "Saldus novads"},
        {"code": "LV-TA", "name": "Talsu novads"},
        {"code": "LV-TU", "name": "Tukuma novads"},
        {"code": "LV-VE", "name": "Ventspils novads"},
        {"code": "LV-VEN", "name": "Ventspils"},
        {"code": "LV-VK", "name": "Valkas novads"},
        {"code": "LV-VM", "name": "Valmieras novads"},
        {"code": "Lielvārdes novads", "name": "Lielvārdes novads"},
        {"code": "Lubānas novads", "name": "Lubānas novads"},
        {"code": "Līgatnes novads", "name": "Līgatnes novads"},
        {"code": "Līvānu novads", "name": "Līvānu novads"},
        {"code": "Mazsalacas novads", "name": "Mazsalacas novads"},
        {"code": "Mālpils novads", "name": "Mālpils novads"},
        {"code": "Mārupes novads", "name": "Mārupes novads"},
        {"code": "Naukšēnu novads", "name": "Naukšēnu novads"},
        {"code": "Neretas novads", "name": "Neretas novads"},
        {"code": "Nīcas novads", "name": "Nīcas novads"},
        {"code": "Olaines novads", "name": "Olaines novads"},
        {"code": "Ozolnieku novads", "name": "Ozolnieku novads"},
        {"code": "Priekules novads", "name": "Priekules novads"},
        {"code": "Priekuļu novads", "name": "Priekuļu novads"},
        {"code": "Pārgaujas novads", "name": "Pārgaujas novads"},
        {"code": "Pāvilostas novads", "name": "Pāvilostas novads"},
        {"code": "Pļaviņu novads", "name": "Pļaviņu novads"},
        {"code": "Raunas novads", "name": "Raunas novads"},
        {"code": "Riebiņu novads", "name": "Riebiņu novads"},
        {"code": "Rojas novads", "name": "Rojas novads"},
        {"code": "Ropažu novads", "name": "Ropažu novads"},
        {"code": "Rucavas novads", "name": "Rucavas novads"},
        {"code": "Rugāju novads", "name": "Rugāju novads"},
        {"code": "Rundāles novads", "name": "Rundāles novads"},
        {"code": "Rūjienas novads", "name": "Rūjienas novads"},
        {"code": "Salacgrīvas novads", "name": "Salacgrīvas novads"},
        {"code": "Salas novads", "name": "Salas novads"},
        {"code": "Salaspils novads", "name": "Salaspils novads"},
        {"code": "Saulkrastu novads", "name": "Saulkrastu novads"},
        {"code": "Siguldas novads", "name": "Siguldas novads"},
        {"code": "Skrundas novads", "name": "Skrundas novads"},
        {"code": "Skrīveru novads", "name": "Skrīveru novads"},
        {"code": "Smiltenes novads", "name": "Smiltenes novads"},
        {"code": "Stopiņu novads", "name": "Stopiņu novads"},
        {"code": "Strenču novads", "name": "Strenču novads"},
        {"code": "Sējas novads", "name": "Sējas novads"},
        {"code": "Tērvetes novads", "name": "Tērvetes novads"},
        {"code": "Vaiņodes novads", "name": "Vaiņodes novads"},
        {"code": "Valmiera", "name": "Valmiera"},
        {"code": "Varakļānu novads", "name": "Varakļānu novads"},
        {"code": "Vecpiebalgas novads", "name": "Vecpiebalgas novads"},
        {"code": "Vecumnieku novads", "name": "Vecumnieku novads"},
        {"code": "Viesītes novads", "name": "Viesītes novads"},
        {"code": "Viļakas novads", "name": "Viļakas novads"},
        {"code": "Viļānu novads", "name": "Viļānu novads"},
        {"code": "Vārkavas novads", "name": "Vārkavas novads"},
        {"code": "Zilupes novads", "name": "Zilupes novads"},
        {"code": "Ādažu novads", "name": "Ādažu novads"},
        {"code": "Ērgļu novads", "name": "Ērgļu novads"},
        {"code": "Ķeguma novads", "name": "Ķeguma novads"},
        {"code": "Ķekavas novads", "name": "Ķekavas novads"},
    ],
    "RO": [
        {"code": "AB", "name": "Alba"},
        {"code": "AG", "name": "Argeş"},
        {"code": "AR", "name": "Arad"},
        {"code": "B", "name": "Bucureşti"},
        {"code": "BC", "name": "Bacău"},
        {"code": "BH", "name": "Bihor"},
        {"code": "BN", "name": "Bistriţa-Năsăud"},
        {"code": "BR", "name": "Brăila"},
        {"code": "BT", "name": "Botoşani"},
        {"code": "BV", "name": "Braşov"},
        {"code": "BZ", "name": "Buzău"},
        {"code": "CJ", "name": "Cluj"},
        {"code": "CL", "name": "Călăraşi"},
        {"code": "CS", "name": "Caraş-Severin"},
        {"code": "CT", "name": "Constanţa"},
        {"code": "CV", "name": "Covasna"},
        {"code": "DB", "name": "Dâmboviţa"},
        {"code": "DJ", "name": "Dolj"},
        {"code": "GJ", "name": "Gorj"},
        {"code": "GL", "name": "Galaţi"},
        {"code": "GR", "name": "Giurgiu"},
        {"code": "HD", "name": "Hunedoara"},
        {"code": "HR", "name": "Harghita"},
        {"code": "IF", "name": "Ilfov"},
        {"code": "IL", "name": "Ialomiţa"},
        {"code": "IS", "name": "Iaşi"},
        {"code": "MH", "name": "Mehedinţi"},
        {"code": "MM", "name": "Maramureş"},
        {"code": "MS", "name": "Mureş"},
        {"code": "NT", "name": "Neamţ"},
        {"code": "OT", "name": "Olt"},
        {"code": "PH", "name": "Prahova"},
        {"code": "SB", "name": "Sibiu"},
        {"code": "SJ", "name": "Sălaj"},
        {"code": "SM", "name": "Satu-Mare"},
        {"code": "SV", "name": "Suceava"},
        {"code": "TL", "name": "Tulcea"},
        {"code": "TM", "name": "Timiş"},
        {"code": "TR", "name": "Teleorman"},
        {"code": "VL", "name": "Vâlcea"},
        {"code": "VN", "name": "Vrancea"},
        {"code": "VS", "name": "Vaslui"},
    ],
    "US": [
        {"code": "AA", "name": "Armed Forces Americas"},
        {"code": "AE", "name": "Armed Forces Africa"},
        {"code": "AE", "name": "Armed Forces Canada"},
        {"code": "AE", "name": "Armed Forces Europe"},
        {"code": "AE", "name": "Armed Forces Middle East"},
        {"code": "AK", "name": "Alaska"},
        {"code": "AL", "name": "Alabama"},
        {"code": "AP", "name": "Armed Forces Pacific"},
        {"code": "AR", "name": "Arkansas"},
        {"code": "AS", "name": "American Samoa"},
        {"code": "AZ", "name": "Arizona"},
        {"code": "CA", "name": "California"},
        {"code": "CO", "name": "Colorado"},
        {"code": "CT", "name": "Connecticut"},
        {"code": "DC", "name": "District of Columbia"},
        {"code": "DE", "name": "Delaware"},
        {"code": "FL", "name": "Florida"},
        {"code": "FM", "name": "Federated States Of Micronesia"},
        {"code": "GA", "name": "Georgia"},
        {"code": "GU", "name": "Guam"},
        {"code": "HI", "name": "Hawaii"},
        {"code": "IA", "name": "Iowa"},
        {"code": "ID", "name": "Idaho"},
        {"code": "IL", "name": "Illinois"},
        {"code": "IN", "name": "Indiana"},
        {"code": "KS", "name": "Kansas"},
        {"code": "KY", "name": "Kentucky"},
        {"code": "LA", "name": "Louisiana"},
        {"code": "MA", "name": "Massachusetts"},
        {"code": "MD", "name": "Maryland"},
        {"code": "ME", "name": "Maine"},
        {"code": "MH", "name": "Marshall Islands"},
        {"code": "MI", "name": "Michigan"},
        {"code": "MN", "name": "Minnesota"},
        {"code": "MO", "name": "Missouri"},
        {"code": "MP", "name": "Northern Mariana Islands"},
        {"code": "MS", "name": "Mississippi"},
        {"code": "MT", "name": "Montana"},
        {"code": "NC", "name": "North Carolina"},
        {"code": "ND", "name": "North Dakota"},
        {"code": "NE", "name": "Nebraska"},
        {"code": "NH", "name": "New Hampshire"},
        {"code": "NJ", "name": "New Jersey"},
        {"code": "NM", "name": "New Mexico"},
        {"code": "NV", "name": "Nevada"},
        {"code": "NY", "name": "New York"},
        {"code": "OH", "name": "Ohio"},
        {"code": "OK", "name": "Oklahoma"},
        {"code": "OR", "name": "Oregon"},
        {"code": "PA", "name": "Pennsylvania"},
        {"code": "PR", "name": "Puerto Rico"},
        {"code": "PW", "name": "Palau"},
        {"code": "RI", "name": "Rhode Island"},
        {"code": "SC", "name": "South Carolina"},
        {"code": "SD", "name": "South Dakota"},
        {"code": "TN", "name": "Tennessee"},
        {"code": "TX", "name": "Texas"},
        {"code": "UT", "name": "Utah"},
        {"code": "VA", "name": "Virginia"},
        {"code": "VI", "name": "Virgin Islands"},
        {"code": "VT", "name": "Vermont"},
        {"code": "WA", "name": "Washington"},
        {"code": "WI", "name": "Wisconsin"},
        {"code": "WV", "name": "West Virginia"},
        {"code": "WY", "name": "Wyoming"},
    ],
};

export default RegionsMap;
