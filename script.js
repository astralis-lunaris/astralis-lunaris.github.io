
function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("active");
}

const map = L.map('map').setView([25, 0], 2);
map.attributionControl.setPrefix(false);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const planetariums = [
    {
        name: "Королевский планетарий Эйсе Эйсинги",
        city: "Франекер, Нидерланды",
        address: "Eise Eisingastraat 3, 8801 KE Franeker",
        phone: "+31 517 393 070",
        email: "info@eisinga-planetarium.nl",
        website: "https://www.eisinga-planetarium.nl/",
        coords: [53.18735, 5.5438]
    },
    {
        name: "Zeiss-Planetarium Jena",
        city: "Йена, Германия",
        address: "Am Planetarium 5, 07743 Jena",
        phone: "+49 3641 885488",
        email: "order@planetarium-jena.de",
        website: "https://www.planetarium-jena.de/",
        coords: [50.93177, 11.58730]
    },
    {
        name: "Eugenides Planetarium",
        city: "Афины, Греция",
        address: "387 Syngrou Avenue, 17564 Palaio Faliro",
        phone: "+30 210 9469600",
        email: "info@eef.edu.gr",
        website: "https://www.eef.edu.gr/",
        coords: [37.94010, 23.69644]
    },
    {
        name: "L'Hemisfèric",
        city: "Валенсия, Испания",
        address: "Av. Professor López Piñero, 7, 46013 Valencia",
        phone: "+34 96 197 46 86",
        email: "info@cac.es",
        website: "https://www.cac.es/",
        coords: [39.45668, -0.35386]
    },
    {
        name: "Adler Planetarium",
        city: "Чикаго, США",
        address: "1300 S. DuSable Lake Shore Drive, Chicago, IL 60605",
        phone: "+1 312 922 7827",
        email: "guestservices@adlerplanetarium.org",
        website: "https://www.adlerplanetarium.org/",
        coords: [41.86636, -87.60663]
    },
    {
        name: "Griffith Observatory",
        city: "Лос-Анджелес, США",
        address: "2800 East Observatory Road, Los Angeles, CA 90027",
        phone: "+1 213 473 0800",
        email: null,
        website: "https://griffithobservatory.org/",
        coords: [34.12819, -118.30109],
        note: "Обсерватория с планетарием Samuel Oschin"
    },
    {
        name: "Hayden Planetarium",
        city: "Нью-Йорк, США",
        address: "200 Central Park West, New York, NY 10024",
        phone: "+1 212 769 5100",
        email: null,
        website: "https://www.amnh.org/",
        coords: [40.78150, -73.97319],
        note: "Находится в Американском музее естественной истории"
    },
    {
        name: "Beijing Planetarium",
        city: "Пекин, Китай",
        address: "138 Xizhimenwai Street, Beijing 100044",
        phone: "+86 10 51583311",
        email: "bjtwg@126.com",
        website: "https://www.bjp.org.cn/en/",
        coords: [39.9487, 116.3390]
    },
    {
        name: "Shanghai Astronomy Museum",
        city: "Шанхай, Китай",
        address: "380 Lingang Avenue, Pudong New Area, Shanghai",
        phone: "+86 21 50908563",
        email: null,
        website: "https://www.sstm-sam.org.cn/",
        coords: [30.9107, 121.9280]
    },
    {
        name: "Nagoya City Science Museum",
        city: "Нагоя, Япония",
        address: "17-1, Sakae 2-chome, Naka-ku, Nagoya",
        phone: "+81 52 201 4486",
        email: null,
        website: "https://www.ncsm.city.nagoya.jp/en/",
        coords: [35.1664, 136.8992],
        note: "В музее находится планетарий с куполом диаметром 35 метров"
    },
    {
        name: "Planetario Galileo Galilei",
        city: "Буэнос-Айрес, Аргентина",
        address: "Av. Sarmiento y Belisario Roldán, Buenos Aires",
        phone: "+54 11 4771 6629",
        email: "planetario@buenosaires.gob.ar",
        website: "https://planetario.buenosaires.gob.ar/",
        coords: [-34.5686, -58.4116]
    },
    {
        name: "Melbourne Planetarium",
        city: "Мельбурн, Австралия",
        address: "2 Booker Street, Spotswood, VIC 3015",
        phone: "+61 3 9392 4800",
        email: "mvbookings@museum.vic.gov.au",
        website: "https://museumsvictoria.com.au/scienceworks/",
        coords: [-37.8296, 144.8936],
        note: "Планетарий находится в научном музее Scienceworks"
    },
    {
        name: "Cape Town Science Centre",
        city: "Кейптаун, ЮАР",
        address: "370B Main Road, Observatory, Cape Town",
        phone: "+27 21 300 3200",
        email: "info@ctsc.org.za",
        website: "https://www.ctsc.org.za/planetarium/",
        coords: [-33.9393, 18.4650],
        note: "Научный центр с собственным планетарием"
    },
    {
        name: "Johannesburg Planetarium",
        city: "Йоханнесбург, ЮАР",
        address: "University of the Witwatersrand, Johannesburg",
        phone: "+27 11 717 1392",
        email: null,
        website: "https://www.wits.ac.za/",
        coords: [-26.1929, 28.0305],
        note: "Планетарий расположен на территории университета Витватерсранда"
    },
    {
        name: "Planetário do Rio",
        city: "Рио-де-Жанейро, Бразилия",
        address: "Rua Vice-Governador Rúbens Berardo, 100, Gávea",
        phone: "+55 21 2088 0536",
        email: "contato@planeta.rio",
        website: "https://planeta.rio/",
        coords: [-22.9773, -43.2275]
    },
    {
        name: "Sharjah Academy for Astronomy",
        city: "Шарджа, ОАЭ",
        address: "University of Sharjah, Sharjah",
        phone: "+971 56 445 7202",
        email: "mshwaiki@sharjah.ac.ae",
        website: "https://www.sharjah.ac.ae/",
        coords: [25.2854, 55.4540],
        note: "Академия астрономии, космических наук и технологий"
    },
    {
        name: "Armagh Observatory & Planetarium",
        city: "Арма, Северная Ирландия",
        address: "College Hill, Armagh, BT61 9DB",
        phone: "+44 28 3752 3689",
        email: "reception@armagh.ac.uk",
        website: "https://armagh.space/",
        coords: [54.352672, -6.648123]
    },
    {
        name: "Planetarium Copenhagen",
        city: "Копенгаген, Дания",
        address: "Gammel Kongevej 10, 1610 Copenhagen",
        phone: "+45 33 12 12 24",
        email: "kontakt@planetarium.dk",
        website: "https://www.planetarium.dk/en/",
        coords: [55.6761, 12.5615]
    },
    {
        name: "Cosmonova",
        city: "Стокгольм, Швеция",
        address: "Frescativägen 40, Stockholm",
        phone: "+46 8 519 540 00",
        email: "informationen@nrm.se",
        website: "https://www.nrm.se/engelska/in-english/experience/cosmonova",
        coords: [59.3670, 18.0540],
        note: "Гигантский купольный IMAX-театр при Музее естественной истории Швеции"
    },
    {
        name: "Planetarium of the Royal Observatory of Belgium",
        city: "Брюссель, Бельгия",
        address: "Boechoutlaan 10, 1020 Brussels",
        phone: "+32 2 474 70 50",
        email: "planetarium@planetarium.be",
        website: "https://planetarium.be/en/",
        coords: [50.8970, 4.3386]
    },
    {
        name: "Madrid Planetarium",
        city: "Мадрид, Испания",
        address: "Avenida del Planetario 16, 28045 Madrid",
        phone: "+34 91 467 34 61",
        email: "buzon@planetmad.es",
        website: "https://www.planetmad.es/",
        coords: [40.3917, -3.6842]
    },
    {
        name: "The Cyprus Planetarium",
        city: "Эпископио, Кипр",
        address: "Stavrou Stylianidi, Episkopio 2642, Nicosia",
        phone: "+357 22 278 700",
        email: "info@planetariumcyprus.com",
        website: "https://thecyprusplanetarium.com/",
        coords: [35.0380, 33.2520]
    },
    {
        name: "Konica Minolta Planetarium MANTEN",
        city: "Токио, Япония",
        address: "Sunshine City World Import Mart Building Rooftop, 3-1-3 Higashi-Ikebukuro",
        phone: "+81 3 3989 3546",
        email: null,
        website: "https://planetarium.konicaminolta.jp/manten/",
        coords: [35.7280, 139.7193],
        note: "Известен необычными местами для просмотра звёздного неба"
    },
    {
        name: "Planétarium de Nantes",
        city: "Нант, Франция",
        address: "8 rue des Acadiens, 44100 Nantes",
        phone: "+33 2 40 73 99 23",
        email: "planetarium@nantesmetropole.fr",
        website: "https://planetarium.nantesmetropole.fr/",
        coords: [47.2030, -1.5730]
    },
    {
        name: "Planetario di Roma",
        city: "Рим, Италия",
        address: "Piazza Giovanni Agnelli 10, 00144 Roma",
        phone: "+39 060608",
        email: "info@planetarioroma.it",
        website: "https://www.planetarioroma.it/",
        coords: [41.8270, 12.4660]
    },
    {
        name: "Planetario di Firenze",
        city: "Флоренция, Италия",
        address: "Via Giuseppe Giusti 29, 50121 Firenze",
        phone: "+39 055 234 1157",
        email: "planetario.scienzaetecnica@fstfirenze.it",
        website: "https://www.fstfirenze.it/",
        coords: [43.7740, 11.2640]
    },
    {
        name: "Infini.to Planetario di Torino",
        city: "Турин, Италия",
        address: "Via Osservatorio 30, 10025 Pino Torinese",
        phone: "+39 011 811 8740",
        email: "info@planetarioditorino.it",
        website: "https://www.planetarioditorino.it/",
        coords: [45.0410, 7.7720]
    },
    {
        name: "Planetario de Pamplona",
        city: "Памплона, Испания",
        address: "Calle Sancho Ramírez 2, 31008 Pamplona",
        phone: "+34 948 260 004",
        email: "javarm@pamplonetario.org",
        website: "https://www.pamplonetario.org/",
        coords: [42.8110, -1.6540]
    },
    {
        name: "Heureka Planetarium",
        city: "Вантаа, Финляндия",
        address: "Tiedepuisto 1, 01300 Vantaa",
        phone: "+358 9 8579 288",
        email: "asiakaspalvelu@heureka.fi",
        website: "https://www.heureka.fi/en/",
        coords: [60.2920, 25.0420],
        note: "Цифровой планетарий внутри финского научного центра Heureka"
    },
    {
        name: "Planétarium de Montréal",
        city: "Монреаль, Канада",
        address: "4801 Avenue Pierre-De Coubertin, Montréal, QC H1V 3V4",
        phone: "+1 514 868 3000",
        email: null,
        website: "https://espacepourlavie.ca/en/planetarium",
        coords: [45.5590, -73.5500],
        note: "Часть комплекса Espace pour la vie"
    },
    {
        name: "TELUS World of Science",
        city: "Эдмонтон, Канада",
        address: "11211 142 Street NW, Edmonton, Alberta T5M 4A1",
        phone: "+1 780 452 9100",
        email: "info@twose.ca",
        website: "https://telusworldofscienceedmonton.ca/",
        coords: [53.5650, -113.5500],
        note: "Научный центр с планетарием и программами по космическим наукам"
    },
    {
        name: "Московский планетарий",
        city: "Москва, Россия",
        address: "Садовая-Кудринская улица, 5, стр. 1",
        phone: "+7 (495) 221-76-90",
        email: "info@planetarium-moscow.ru",
        website: "https://www.planetarium-moscow.ru/",
        coords: [55.7615, 37.5820]
    },
    {
        name: "Петербургский планетарий",
        city: "Санкт-Петербург, Россия",
        address: "Александровский парк, 4",
        phone: "+7 (812) 233-26-53",
        email: "orgotdel@planetary-spb.ru",
        website: "https://planetary-spb.ru/",
        coords: [59.9505, 30.3180]
    },
    {
        name: "Планетарий № 1",
        city: "Санкт-Петербург, Россия",
        address: "Набережная Обводного канала, 74Ц",
        phone: "+7 (812) 407-17-31",
        email: "hello@planetarium.one",
        website: "https://planetarium.one/",
        coords: [59.9065, 30.3015]
    },
    {
        name: "Волгоградский планетарий",
        city: "Волгоград, Россия",
        address: "Улица Гагарина, 14",
        phone: "+7 (8442) 24-18-80",
        email: "pr@volgogradplanetarium.ru",
        website: "https://volgogradplanetarium.ru/",
        coords: [48.7105, 44.5160]
    },
    {
        name: "Ярославский планетарий имени В. В. Терешковой",
        city: "Ярославль, Россия",
        address: "Улица Чайковского, 3",
        phone: "+7 (4852) 72-93-61",
        email: "centrtereshkovoi.dk@yarregion.ru",
        website: "https://yarplaneta.ru/",
        coords: [57.6260, 39.8870]
    },
    {
        name: "Большой Новосибирский планетарий",
        city: "Новосибирск, Россия",
        address: "Улица Ключ-Камышенское Плато, 1/1",
        phone: "+7 (383) 347-77-07",
        email: "dyuc_planeta@edu54.ru",
        website: "https://nebo-nsk.ru/",
        coords: [54.9660, 83.0030]
    },
    {
        name: "Нижегородский планетарий имени Г. М. Гречко",
        city: "Нижний Новгород, Россия",
        address: "Улица Революционная, 20",
        phone: "+7 (831) 281-21-09",
        email: "plan_2004@mail.ru",
        website: "https://planetarium-nn.ru/",
        coords: [56.3250, 43.9440]
    },
    {
        name: "Планетарий имени А. А. Леонова",
        city: "Казань, Россия",
        address: "Республика Татарстан, Зеленодольский район, посёлок Октябрьский, улица АОЭ, 7",
        phone: "+7 (960) 031-01-30",
        email: "mail@planetarium-kzn.ru",
        website: "https://planetarium-kzn.ru/",
        coords: [55.839722, 48.8125]
    },
    {
        name: "Уфимский городской планетарий",
        city: "Уфа, Россия",
        address: "Проспект Октября, 79/2",
        phone: "+7 (347) 244-72-06",
        email: "ufaplanetarium@mail.ru",
        website: "https://ufaplanetarium.ru/",
        coords: [54.7440, 56.0000]
    },
    {
        name: "Большой Иркутский планетарий",
        city: "Иркутск, Россия",
        address: "Улица Седова, 30",
        phone: "+7 (3952) 79-79-09",
        email: "mam@yandex.ru",
        website: "https://irkplanetarium.com/",
        coords: [52.2860, 104.2800]
    },
    {
        name: "Планетарий Красноярского краевого краеведческого музея",
        city: "Красноярск, Россия",
        address: "Улица Дубровинского, 84",
        phone: "+7 (902) 966-54-63",
        email: null,
        website: "https://www.kkkm.ru/filialy-muzeya/planetarium",
        coords: [56.0100, 92.8520]
    },
    {
        name: "Пермский планетарий",
        city: "Пермь, Россия",
        address: "Бульвар Гагарина, 27А",
        phone: "+7 (342) 260-41-29",
        email: "planet2.perm@mail.ru",
        website: "https://planetarium.perm.ru/",
        coords: [58.0060, 56.2300]
    },
    {
        name: "Planetario Ciudad de La Plata",
        city: "Ла-Плата, Аргентина",
        address: "Av. Iraola y Calle 118, Paseo del Bosque, La Plata",
        phone: "+54 221 423 6593",
        email: null,
        website: "https://planetario.unlp.edu.ar/",
        coords: [-34.9080, -57.9330]
    },
    {
        name: "Tūhura Otago Museum Planetarium",
        city: "Данидин, Новая Зеландия",
        address: "419 Great King Street, Dunedin 9016",
        phone: "+64 3 474 7474",
        email: "mail@tuhura.nz",
        website: "https://www.tuhura.nz/visit/planetarium",
        coords: [-45.8620, 170.5110],
        note: "Купольный планетарий при музее Tūhura Otago"
    },
    {
        name: "Glasgow Science Centre Planetarium",
        city: "Глазго, Шотландия",
        address: "50 Pacific Quay, Glasgow, G51 1EA",
        phone: "+44 141 420 5000",
        email: null,
        website: "https://www.glasgowsciencecentre.org/",
        coords: [55.8580, -4.2940],
        note: "Планетарий с куполом диаметром 15 метров"
    },
    {
        name: "Sharjah Planetarium",
        city: "Шарджа, ОАЭ",
        address: "Sharjah Space and Astronomy Hub, University City, Sharjah",
        phone: "+971 6 516 6000",
        email: "Planetarium@sharjah.ac.ae",
        website: "https://www.sharjah.ac.ae/SSAH/Planetarium-Overview",
        coords: [25.2885, 55.4790],
        note: "Планетарий при Академии астрономии, космических наук и технологий"
    },
    {
        name: "The Brussels Planetarium",
        city: "Брюссель, Бельгия",
        address: "Boechoutlaan 10, 1020 Brussels",
        phone: "+32 2 474 70 50",
        email: "planetarium@planetarium.be",
        website: "https://planetarium.be/en/",
        coords: [50.8970, 4.3386]
    },
    {
        name: "Kika Silva Pla Planetarium",
        city: "Гейнсвилл, США",
        address: "3000 NW 83rd Street, Building X-129, Gainesville, FL 32606",
        phone: "+1 352 395 5000",
        email: null,
        website: "https://www.sfcollege.edu/planetarium/",
        coords: [29.6990, -82.4310]
    },
    {
        name: "Itami Children's Culture & Science Museum",
        city: "Итами, Япония",
        address: "3-1-36 Kuwazu, Itami, Hyogo 664-0839",
        phone: "+81 72 784 1222",
        email: null,
        website: "https://www.city.itami.lg.jp/SISETU_KIKAN/BUNKA/45596.html",
        coords: [34.7810, 135.4230],
        note: "Научный музей с планетарием и космическими экспозициями"
    },
    {
        name: "Planetarium Hamburg",
        city: "Гамбург, Германия",
        address: "Linnering 1, 22299 Hamburg",
        phone: "+49 40 428 86 52-0",
        email: null,
        website: "https://www.planetarium-hamburg.de/",
        coords: [53.6067, 10.0118]
    },
    {
        name: "Planétarium Galilée",
        city: "Монпелье, Франция",
        address: "100 Allée Ulysse, 34000 Montpellier",
        phone: "+33 4 67 13 26 26",
        email: null,
        website: "https://www.planetarium-galilee.com/",
        coords: [43.6050, 3.9180]
    },
    {
        name: "Planetarium Wien",
        city: "Вена, Австрия",
        address: "Oswald-Thomas-Platz 1, 1020 Wien",
        phone: "+43 1 891 74 150 000",
        email: "planetarium@vhs.at",
        website: "https://www.planetarium-wien.at/",
        coords: [48.2165, 16.3940]
    },
    {
        name: "AHHAA Science Centre",
        city: "Тарту, Эстония",
        address: "Sadama 1, 51004 Tartu",
        phone: "+372 745 6789",
        email: "ahhaa@ahhaa.ee",
        website: "https://ahhaa.ee/en/",
        coords: [58.3780, 26.7300],
        note: "Научный центр с планетарием"
    },
    {
        name: "Planetario de Bogotá",
        city: "Богота, Колумбия",
        address: "Calle 26B No. 5-93, Bogotá",
        phone: "+57 601 379 5750",
        email: null,
        website: "https://planetariodebogota.gov.co/",
        coords: [4.6120, -74.0690]
    },
    {
        name: "Cosmocité",
        city: "Ле-Пон-де-Кле, рядом с Греноблем, Франция",
        address: "85 Cours Saint-André, 38800 Le Pont-de-Claix",
        phone: "+33 4 80 42 34 34",
        email: "accueil@cosmocite.fr",
        website: "https://cosmocite.fr/",
        coords: [45.1405, 5.7028],
        note: "Научный центр с планетарием на 80 мест"
    },
    {
        name: "Planétarium de Vaulx-en-Velin",
        city: "Воль-ан-Велён, рядом с Лионом, Франция",
        address: "Place de la Nation, 69120 Vaulx-en-Velin",
        phone: "+33 4 78 79 50 13",
        email: "stars@planetariumvv.com",
        website: "https://www.planetariumvv.com/",
        coords: [45.7760, 4.9200]
    },
    {
        name: "Cité des sciences et de l'industrie",
        city: "Париж, Франция",
        address: "30 Avenue Corentin Cariou, 75019 Paris",
        phone: "+33 1 40 05 80 00",
        email: null,
        website: "https://www.cite-sciences.fr/",
        coords: [48.8950, 2.3870],
        note: "Научный музей с отдельным планетарием"
    },
    {
        name: "Планетарий Музейного комплекса УГМК",
        city: "Верхняя Пышма, Россия",
        address: "Улица Александра Козицына, 2",
        phone: "+7 961 775-35-55",
        email: "planetarijekb@gmail.com",
        website: "https://www.mkugmk.ru/exhibition-centers/a1anf69tdnw6sjc81bax8u1v",
        coords: [56.9750, 60.5700],
        note: "Планетарий с музейной экспозицией об истории освоения космоса"
    },
    {
        name: "Swiss Museum of Transport Planetarium",
        city: "Lucerne, Switzerland",
        address: "Haldenstrasse 44, 6006 Luzern",
        phone: "+41 41 375 75 75",
        email: "info@verkehrshaus.ch",
        website: "https://www.verkehrshaus.ch/en/your-visit/planetarium",
        coords: [47.0525, 8.3365],
        note: "The largest and one of the most modern planetariums in Switzerland, located inside the Swiss Museum of Transport."
    },
    {
        name: "Space Eye",
        city: "Niedermuhlern, Switzerland",
        address: "Uecht 53a, 3087 Niedermuhlern",
        phone: "+41 31 511 69 80",
        email: "info@space-eye.ch",
        website: "https://www.space-eye.ch/",
        coords: [46.8515, 7.4665],
        note: "A modern astronomy and environmental center featuring an 8K planetarium and a large public telescope."
    },
    {
        name: "Le Dôme Planetarium",
        city: "Sion, Switzerland",
        address: "Rue de St-Guérin 34, 1950 Sion",
        phone: "Not available",
        email: "info@dome-sion.ch",
        website: "https://dome-sion.ch/",
        coords: [46.2295, 7.3575],
        note: "One of the largest planetariums in Western Switzerland, offering immersive 360-degree shows."
    },
    {
        name: "Bodensee Planetarium und Sternwarte",
        city: "Kreuzlingen, Switzerland",
        address: "Breitenrainstrasse 21, 8280 Kreuzlingen",
        phone: "+41 71 677 38 00",
        email: "hallo@bodensee-planetarium.ch",
        website: "https://bodensee-planetarium.ch/",
        coords: [47.6465, 9.1715],
        note: "A modern planetarium combined with an astronomical observatory near Lake Constance."
    },
    {
        name: "Tsiolkovsky State Museum of the History of Cosmonautics",
        city: "Kaluga, Russia",
        address: "Ulitsa Akademika Koroleva, 2, Kaluga, 248000",
        phone: "+7 484 270-50-25",
        email: null,
        website: "https://gmik.ru/",
        coords: [54.5065, 36.2585],
        note: "A major space history museum with its own planetarium, dedicated to the history of space exploration and the legacy of Konstantin Tsiolkovsky."
];

planetariums.forEach(planetarium => {
    const emailInfo = planetarium.email
        ? `<p><b>Электронная почта:</b> <a href="mailto:${planetarium.email}">${planetarium.email}</a></p>`
        : "";

    const noteInfo = planetarium.note
        ? `<p>${planetarium.note}</p>`
        : "";

    const popup = `
        <div class="planetarium-popup">
            <h3>${planetarium.name}</h3>
            <p><b>Местоположение:</b> ${planetarium.city}</p>
            <p><b>Адрес:</b> ${planetarium.address}</p>
            <p><b>Телефон:</b> ${planetarium.phone}</p>
            ${emailInfo}
            ${noteInfo}
            <a href="${planetarium.website}" target="_blank" rel="noopener noreferrer">
                Официальный сайт
            </a>
        </div>
    `;

    L.marker(planetarium.coords)
        .addTo(map)
        .bindPopup(popup);
});
