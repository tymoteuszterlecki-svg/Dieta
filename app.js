// GainsPlan PRO - Full 7-Day Weekly Meal Schedule & Recipe Book Editor
document.addEventListener('DOMContentLoaded', () => {
  // --- DEFAULT MASTER RECIPES CATALOG (14 KOMPLETNYCH PRZEPISÓW) ---
  const defaultMasterRecipes = [
    // SZEJKI ŚNIADANIOWE
    {
      id: 'rec_shake_1',
      title: 'Shake 1: Chałwowy z Owocami Leśnymi i Serkiem Wiejskim (100g Chałwy)',
      category: 'Śniadaniowy Super-Shake',
      catType: 'shake',
      prepTime: '3 min',
      kcal: 1149, protein: 49.4, fat: 54.5, carbs: 111.1,
      isBatchCooking: false,
      ingredients: [
        { name: 'Serek wiejski (naturalny)', amount: 200, unit: 'g', homeMeasure: '1 całe opakowanie (baza)', shopCat: 'dairy' },
        { name: 'Chałwa waniliowa / sezamowa', amount: 100, unit: 'g', homeMeasure: 'cała kostka (100g)', shopCat: 'fats' },
        { name: 'Mleko 3,2%', amount: 250, unit: 'ml', homeMeasure: '1 szklanka', shopCat: 'dairy' },
        { name: 'Płatki owsiane', amount: 40, unit: 'g', homeMeasure: '4 łyżki', shopCat: 'dry' },
        { name: 'Banan', amount: 60, unit: 'g', homeMeasure: 'pół banana', shopCat: 'produce' },
        { name: 'Owoce leśne mrożone', amount: 100, unit: 'g', homeMeasure: 'garść', shopCat: 'produce' }
      ],
      steps: [
        'Płatki owsiane zmiel na sucho w blenderze (10-15 sek).',
        'Wlej mleko 3,2%, wrzuć cały serek wiejski (200g), pokruszoną całą chałwę (100g), pół banana oraz owoce leśne.',
        'Blenduj na wysokich obrotach przez 45-60 sek na aksamitny, gęsty krem sezamowo-owocowy.'
      ],
      note: 'Mocny, sezamowo-owocowy smak z pełną kostką chałwy (100g) – ~1149 kcal i ~49,4g naturalnego białka bez odżywki.'
    },
    {
      id: 'rec_shake_2',
      title: 'Shake 2: Czekoladowo-Kokosowe „Bounty” ze Skyrem',
      category: 'Śniadaniowy Super-Shake',
      catType: 'shake',
      prepTime: '3 min',
      kcal: 1116, protein: 46.6, fat: 46.0, carbs: 123.5,
      isBatchCooking: false,
      ingredients: [
        { name: 'Skyr naturalny', amount: 150, unit: 'g', homeMeasure: '1 opakowanie', shopCat: 'dairy' },
        { name: 'Mleko 3,2%', amount: 350, unit: 'ml', homeMeasure: 'ok. 1.5 szklanki', shopCat: 'dairy' },
        { name: 'Płatki owsiane', amount: 70, unit: 'g', homeMeasure: '7 łyżek', shopCat: 'dry' },
        { name: 'Banan', amount: 120, unit: 'g', homeMeasure: '1 sztuka', shopCat: 'produce' },
        { name: 'Wiórki kokosowe', amount: 25, unit: 'g', homeMeasure: '2.5 łyżki', shopCat: 'fats' },
        { name: 'Orzechy nerkowca lub włoskie', amount: 25, unit: 'g', homeMeasure: 'garść', shopCat: 'fats' },
        { name: 'Ciemne kakao naturalne', amount: 10, unit: 'g', homeMeasure: '1 czubata łyżka', shopCat: 'dry' },
        { name: 'Miód pszczeli', amount: 25, unit: 'g', homeMeasure: '1 pełna łyżka', shopCat: 'fats' }
      ],
      steps: [
        'Płatki owsiane, wiórki kokosowe i orzechy zblenduj krótko na drobno.',
        'Dodaj Skyr naturalny (150g), mleko 3,2%, banana, ciemne kakao oraz miód.',
        'Blenduj przez 45-60 sek na idealnie gładki, czekoladowo-kokosowy koktajl bez grudek.'
      ],
      note: 'Wersja bez serka wiejskiego – gęsty jogurt Skyr w połączeniu ze zdrowymi tłuszczami daje aksamitne „Bounty” (~1116 kcal, ~46,6g białka).'
    },
    {
      id: 'rec_shake_3',
      title: 'Shake 3: „Szarlotka” z Serkiem Wiejskim i Daktylami',
      category: 'Śniadaniowy Super-Shake',
      catType: 'shake',
      prepTime: '3 min',
      kcal: 1119, protein: 51.9, fat: 43.4, carbs: 125.3,
      isBatchCooking: false,
      ingredients: [
        { name: 'Serek wiejski (naturalny)', amount: 200, unit: 'g', homeMeasure: '1 całe opakowanie (baza)', shopCat: 'dairy' },
        { name: 'Mleko 3,2%', amount: 300, unit: 'ml', homeMeasure: 'ok. 1.2 szklanki', shopCat: 'dairy' },
        { name: 'Płatki owsiane', amount: 80, unit: 'g', homeMeasure: '8 łyżek', shopCat: 'dry' },
        { name: 'Jabłko (obrane, bez gniazda)', amount: 150, unit: 'g', homeMeasure: '1 sztuka', shopCat: 'produce' },
        { name: 'Suszone daktyle', amount: 50, unit: 'g', homeMeasure: 'ok. 9-10 sztuk', shopCat: 'dry' },
        { name: 'Masło orzechowe 100%', amount: 35, unit: 'g', homeMeasure: '2 czubate łyżki', shopCat: 'fats' },
        { name: 'Cynamon mielony', amount: 2, unit: 'g', homeMeasure: 'pół łyżeczki', shopCat: 'fats' }
      ],
      steps: [
        'Płatki owsiane i miękkie suszone daktyle zmiel w blenderze na drobne cząstki.',
        'Dodaj obrane i pokrojone jabłko, cały serek wiejski (200g), mleko 3,2%, masło orzechowe oraz cynamon.',
        'Blenduj na wysokich obrotach przez 60 sekund do uzyskania puszystego, szarlotkowego kremu z nutą karmelu.'
      ],
      note: 'Połączenie jabłka, cynamonu, daktyli i masła orzechowego w stylu ciasta jabłkowego – ~1119 kcal i ~51,9g naturalnego białka.'
    },

    // OBIADY (BATCH-COOKING & ŚWIEŻY)
    {
      id: 'rec_dinner_1',
      title: 'Obiad A: Makaron z mięsem mielonym w kremowym sosie pomidorowym',
      category: 'Obiad • Gotowanie na 2 dni (Batch-cook)',
      catType: 'dinner',
      prepTime: '20 min',
      kcal: 876, protein: 50.8, fat: 32.2, carbs: 92.2,
      isBatchCooking: true,
      ingredients: [
        { name: 'Mięso mielone z szynki wieprzowej lub z indyka', amount: 160, unit: 'g', homeMeasure: 'porcja na 1 dzień', shopCat: 'meat' },
        { name: 'Makaron (penne / świderki)', amount: 110, unit: 'g', homeMeasure: 'sucha masa', shopCat: 'dry' },
        { name: 'Passata pomidorowa', amount: 200, unit: 'g', homeMeasure: 'niecała szklanka', shopCat: 'dry' },
        { name: 'Serek śmietankowy łagodny (lub 18%)', amount: 40, unit: 'g', homeMeasure: '2 czubate łyżki (Twój Smak / Philadelphia)', shopCat: 'dairy' },
        { name: 'Oliwa z oliwek extra virgin', amount: 10, unit: 'g', homeMeasure: '1 łyżka', shopCat: 'fats' },
        { name: 'Czosnek, oregano, bazylia, pieprz', amount: 5, unit: 'g', homeMeasure: 'czosnek, oregano, bazylia, sól, pieprz', shopCat: 'fats' }
      ],
      steps: [
        'Ugotuj makaron w osolonej wodzie.',
        'Na patelni rozgrzej oliwę, podsmaż mięso mielone z czosnkiem i przyprawami.',
        'Wlej passatę pomidorową i duś na małym ogniu przez ok. 6–7 minut.',
        'Zdejmij z ognia, wmieszaj serek śmietankowy na gładki sos, dodaj makaron, połącz całość i podziel na 2 pojemniki.',
        '💡 GOTUJESZ NA 2 DNI (x2 do garnka): 320g mięsa mielonego, 220g makaronu, 400g passaty, 80g serka, 20g oliwy.'
      ],
      note: 'Do garnka na 2 dni wrzucasz x2: 320g mięsa, 220g makaronu, 400g passaty, 80g serka, 20g oliwy. ~876 kcal, ~50,8g białka.'
    },
    {
      id: 'rec_dinner_2',
      title: 'Obiad B: Ulepszony „Meksykanin” z ryżem, mięsem i stopionym serem',
      category: 'Obiad • Gotowanie na 2 dni (Batch-cook)',
      catType: 'dinner',
      prepTime: '25 min',
      kcal: 950, protein: 57.4, fat: 31.9, carbs: 104.6,
      isBatchCooking: true,
      ingredients: [
        { name: 'Mięso mielone chude (wołowina do 10% lub indyk)', amount: 160, unit: 'g', homeMeasure: 'porcja na 1 dzień', shopCat: 'meat' },
        { name: 'Ryż basmati lub parboiled', amount: 100, unit: 'g', homeMeasure: 'sucha masa (1 torebka)', shopCat: 'dry' },
        { name: 'Passata pomidorowa z ziołami', amount: 150, unit: 'g', homeMeasure: 'nieco ponad pół szklanki', shopCat: 'dry' },
        { name: 'Fasola czerwona z puszki (odsączona)', amount: 80, unit: 'g', homeMeasure: 'ok. 3-4 czubate łyżki', shopCat: 'produce' },
        { name: 'Kukurydza konserwowa', amount: 50, unit: 'g', homeMeasure: '2.5 czubate łyżki', shopCat: 'produce' },
        { name: 'Ser cheddar lub mozzarella (tarty)', amount: 30, unit: 'g', homeMeasure: '2 czubate łyżki', shopCat: 'dairy' },
        { name: 'Oliwa z oliwek extra virgin', amount: 10, unit: 'g', homeMeasure: '1 łyżka', shopCat: 'fats' },
        { name: 'Przyprawa burrito / kumin / papryka', amount: 5, unit: 'g', homeMeasure: 'kumin, papryka wędzona, czosnek', shopCat: 'fats' }
      ],
      steps: [
        'Ugotuj ryż w osolonej wodzie.',
        'Na głębokiej patelni na oliwie podsmaż mięso mielone z przyprawami (kumin, papryka słodka i wędzona, czosnek, sól, pieprz).',
        'Wlej passatę, dodaj odsączoną fasolę oraz kukurydzę. Duś pod przykryciem przez ok. 6–8 minut.',
        'Wsyp ugotowany ryż bezpośrednio na patelnię i wymieszaj z sosem.',
        'Posyp z góry startym serem, przykryj pokrywką na 1–2 minuty do rozpuszczenia sera i rozdziel na 2 porcje.',
        '💡 GOTUJESZ NA 2 DNI (x2 do garnka): 320g mięsa, 200g ryżu, 300g passaty, 160g fasoli, 100g kukurydzy, 60g sera, 20g oliwy.'
      ],
      note: 'Do garnka na 2 dni wrzucasz x2: 320g mięsa, 200g ryżu, 300g passaty, 160g fasoli, 100g kukurydzy, 60g sera, 20g oliwy. ~950 kcal, ~57,4g białka.'
    },
    {
      id: 'rec_dinner_3',
      title: 'Obiad C: Makaron ze szpinakiem, kurczakiem, śmietanką i parmezanem',
      category: 'Obiad • Gotowanie na 2 dni (Batch-cook)',
      catType: 'dinner',
      prepTime: '20 min',
      kcal: 878, protein: 60.0, fat: 31.1, carbs: 84.2,
      isBatchCooking: true,
      ingredients: [
        { name: 'Pierś z kurczaka (filet)', amount: 160, unit: 'g', homeMeasure: '1 duży filet', shopCat: 'meat' },
        { name: 'Makaron (penne / tagliatelle / fusilli)', amount: 110, unit: 'g', homeMeasure: 'sucha masa', shopCat: 'dry' },
        { name: 'Szpinak (świeży lub mrożony rozdrobniony)', amount: 120, unit: 'g', homeMeasure: '2 solidne garście', shopCat: 'produce' },
        { name: 'Śmietanka 18%', amount: 60, unit: 'g', homeMeasure: 'ok. 4 łyżki', shopCat: 'dairy' },
        { name: 'Parmezan lub Grana Padano (tarty)', amount: 20, unit: 'g', homeMeasure: '2 łyżki', shopCat: 'dairy' },
        { name: 'Oliwa z oliwek extra virgin', amount: 10, unit: 'g', homeMeasure: '1 łyżka', shopCat: 'fats' },
        { name: 'Zioła i przyprawy (czosnek, zioła, sól, pieprz)', amount: 5, unit: 'g', homeMeasure: '2 ząbki czosnku, gałka, sól, pieprz', shopCat: 'fats' }
      ],
      steps: [
        'Ugotuj makaron al dente (zostaw 3–4 łyżki wody z gotowania).',
        'Na oliwie podsmaż pokrojonego kurczaka na złoty kolor z solą i pieprzem.',
        'Dodaj czosnek oraz szpinak, podsmażaj 2–3 minuty do odparowania wody.',
        'Wlej śmietankę, dodaj przyprawy (szczypta gałki!), wodę z makaronu oraz tarty parmezan. Zredukuj sos przez 1–2 minuty.',
        'Połącz z makaronem i podziel na 2 pojemniki.',
        '💡 GOTUJESZ NA 2 DNI (x2 do garnka): 320g kurczaka, 220g makaronu, 240g szpinaku, 120g śmietanki, 40g parmezanu, 20g oliwy.'
      ],
      note: 'Do garnka na 2 dni wrzucasz x2: 320g kurczaka, 220g makaronu, 240g szpinaku, 120g śmietanki, 40g parmezanu, 20g oliwy. ~878 kcal, aż 60g białka!'
    },
    {
      id: 'rec_dinner_4',
      title: 'Obiad D: Podwójne chrupiące wrapy z kurczakiem i sosem czosnkowym',
      category: 'Obiad Świeży (1 dzień)',
      catType: 'dinner',
      prepTime: '15 min',
      kcal: 940, protein: 58.9, fat: 43.7, carbs: 71.4,
      isBatchCooking: false,
      ingredients: [
        { name: 'Placek tortilli pszennej / graham', amount: 125, unit: 'g', homeMeasure: '2 duże placki (ok. 25 cm)', shopCat: 'dry' },
        { name: 'Pierś z kurczaka (filet)', amount: 160, unit: 'g', homeMeasure: '1 duży filet w paski', shopCat: 'meat' },
        { name: 'Ser mozzarella (tarty lub w plastrach)', amount: 40, unit: 'g', homeMeasure: 'tarty lub w plastrach', shopCat: 'dairy' },
        { name: 'Jogurt grecki lub naturalny gęsty', amount: 80, unit: 'g', homeMeasure: 'baza sosu czosnkowego', shopCat: 'dairy' },
        { name: 'Majonez lekki lub klasyczny', amount: 15, unit: 'g', homeMeasure: '1 łyżka', shopCat: 'fats' },
        { name: 'Oliwa z oliwek extra virgin', amount: 10, unit: 'g', homeMeasure: 'do usmażenia kurczaka', shopCat: 'fats' },
        { name: 'Sałata lodowa / pomidorki koktajlowe', amount: 80, unit: 'g', homeMeasure: 'sałata, pomidor, ogórek', shopCat: 'produce' },
        { name: 'Czosnek, oregano, sól, pieprz', amount: 5, unit: 'g', homeMeasure: 'do sosu i mięsa', shopCat: 'fats' }
      ],
      steps: [
        'Kurczaka pokrój w paski i usmaż na oliwie z przyprawami (czosnek granulowany, sól, pieprz, oregano).',
        'W miseczce wymieszaj jogurt, majonez, czosnek i sól, tworząc sos.',
        'Posmaruj tortille sosem, nałóż warzywa, kurczaka oraz mozzarellę i zwiń w rulon/kieszonkę.',
        'Połóż na suchą, mocno rozgrzaną patelnię pod przykryciem na 2–3 minuty z każdej strony, aż placki będą chrupiące, a ser w środku roztopiony.'
      ],
      note: 'Świeży posiłek robiony na bieżąco na patelni (bez piekarnika) – 2 potężne wrapy (~940 kcal, ~58,9g białka).'
    },

    // BOGATE OPCJE NA KOLACJĘ (ZAMIAST DRUGIEGO ŚNIADANIA)
    {
      id: 'rec_kolacja_1',
      title: 'Kolacja 1: Chrupiące tosty żytnie z mozzarellą i szynką',
      category: 'Kolacja',
      catType: 'kolacja',
      prepTime: '6 min',
      kcal: 614, protein: 33.0, fat: 21.2, carbs: 69.8,
      isBatchCooking: false,
      ingredients: [
        { name: 'Chleb żytni lub graham', amount: 140, unit: 'g', homeMeasure: 'ok. 4 kromki', shopCat: 'dry' },
        { name: 'Ser mozzarella (tarty lub wiórki)', amount: 50, unit: 'g', homeMeasure: 'tarty lub wiórki', shopCat: 'dairy' },
        { name: 'Szynka drobiowa / polędwica sopocka', amount: 60, unit: 'g', homeMeasure: 'ok. 3-4 plastry', shopCat: 'meat' },
        { name: 'Masło ekstra', amount: 10, unit: 'g', homeMeasure: 'do posmarowania chleba', shopCat: 'fats' },
        { name: 'Pomidor / ogórek kiszony', amount: 120, unit: 'g', homeMeasure: 'na talerz (1 sztuka)', shopCat: 'produce' }
      ],
      steps: [
        'Pieczywo posmaruj cienko masłem.',
        'Ułóż szynkę i mozzarellę, złóż w kanapki.',
        'Opiecz w opiekaczu lub na rozgrzanej, suchej patelni pod przykryciem, aż chleb będzie chrupiący, a ser się rozpuści. Zjedz ze świeżym pomidorem lub ogórkiem.'
      ],
      note: 'Czas: 6 min | Toster, opiekacz lub sucha patelnia pod przykryciem. ~614 kcal, ~33g białka.'
    },
    {
      id: 'rec_kolacja_2',
      title: 'Kolacja 2: Włoska bruschetta na pieczywie żytnim z mozzarellą i szynką dojrzewającą',
      category: 'Kolacja',
      catType: 'kolacja',
      prepTime: '7 min',
      kcal: 665, protein: 31.3, fat: 27.9, carbs: 71.4,
      isBatchCooking: false,
      ingredients: [
        { name: 'Chleb żytni, graham lub ciabatta', amount: 140, unit: 'g', homeMeasure: '4 kromki', shopCat: 'dry' },
        { name: 'Pomidory sparzone i pokrojone w kostkę', amount: 150, unit: 'g', homeMeasure: '1 duży pomidor', shopCat: 'produce' },
        { name: 'Ser mozzarella', amount: 50, unit: 'g', homeMeasure: 'w kostkę lub plastry', shopCat: 'dairy' },
        { name: 'Szynka dojrzewająca (szwarcwaldzka lub parmeńska)', amount: 40, unit: 'g', homeMeasure: 'ok. 2-3 plastry', shopCat: 'meat' },
        { name: 'Oliwa z oliwek extra virgin', amount: 10, unit: 'g', homeMeasure: '1 łyżka', shopCat: 'fats' },
        { name: 'Czosnek, świeża bazylia, sól, pieprz', amount: 5, unit: 'g', homeMeasure: 'ząbek czosnku, bazylia, pieprz', shopCat: 'fats' }
      ],
      steps: [
        'Kromki chleba przypiecz na suchej patelni z obu stron na złoty, chrupiący kolor, a po zdjęciu potrzyj ząbkiem czosnku.',
        'Pomidory w kostce wymieszaj w miseczce z oliwą z oliwek, solą, pieprzem i posiekaną bazylią.',
        'Na grzankach ułóż plastry szynki dojrzewającej, mozzarellę oraz zamarynowane pomidory.'
      ],
      note: 'Czas: 7 min | Kromki podpieczone na chrupko na patelni. Prawdziwa włoska bruschetta z szynką dojrzewającą (~665 kcal, ~31g białka).'
    },
    {
      id: 'rec_kolacja_3',
      title: 'Kolacja 3: Domowa quesadilla z szynką, ciągnącym serem i sosem pomidorowym',
      category: 'Kolacja',
      catType: 'kolacja',
      prepTime: '5 min',
      kcal: 618, protein: 35.4, fat: 21.8, carbs: 67.1,
      isBatchCooking: false,
      ingredients: [
        { name: 'Placek tortilli pszennej / graham', amount: 125, unit: 'g', homeMeasure: '2 sztuki', shopCat: 'dry' },
        { name: 'Ser żółty gouda / mozzarella', amount: 50, unit: 'g', homeMeasure: 'tarty gouda lub cheddar', shopCat: 'dairy' },
        { name: 'Szynka drobiowa / polędwica sopocka', amount: 60, unit: 'g', homeMeasure: 'pokrojona w paski', shopCat: 'meat' },
        { name: 'Passata pomidorowa lub ketchup z dobrym składem', amount: 30, unit: 'g', homeMeasure: '2 łyżki', shopCat: 'dry' },
        { name: 'Oregano, bazylia, pieprz', amount: 3, unit: 'g', homeMeasure: 'do smaku', shopCat: 'fats' }
      ],
      steps: [
        'Na jeden placek tortilli nałóż passatę/ketchup, posyp oregano, wyłóż pokrojoną szynkę i tarty ser.',
        'Przykryj drugim plackiem tortilli.',
        'Połóż na rozgrzaną suchą patelnię na średnim ogniu pod przykryciem. Po ok. 2 minutach obróć ostrożnie łopatką na drugą stronę na kolejne 1–2 minuty, aż placki będą chrupiące, a ser roztopiony. Pokrój w trójkąty.'
      ],
      note: 'Czas: 5 min | 100% na suchej patelni (zamiast zapiekanki z pieca). ~618 kcal, ~35,4g białka.'
    },
    {
      id: 'rec_kolacja_4',
      title: 'Kolacja 4: Jajecznica z 3 jaj na maśle ze szczypiorkiem i chlebem żytnim',
      category: 'Kolacja',
      catType: 'kolacja',
      prepTime: '6 min',
      kcal: 682, protein: 30.2, fat: 31.2, carbs: 69.1,
      isBatchCooking: false,
      ingredients: [
        { name: 'Jaja kurze', amount: 165, unit: 'g', homeMeasure: '3 sztuki (klasa M/L)', shopCat: 'dairy' },
        { name: 'Chleb żytni lub graham', amount: 140, unit: 'g', homeMeasure: 'ok. 4 kromki', shopCat: 'dry' },
        { name: 'Masło ekstra', amount: 15, unit: 'g', homeMeasure: '1 łyżka (10g patelnia, 5g chleb)', shopCat: 'fats' },
        { name: 'Szczypiorek świeży', amount: 10, unit: 'g', homeMeasure: '1 czubata łyżka', shopCat: 'produce' },
        { name: 'Pomidor / ogórek kiszony', amount: 100, unit: 'g', homeMeasure: '1 sztuka', shopCat: 'produce' },
        { name: 'Sól, pieprz', amount: 2, unit: 'g', homeMeasure: 'do smaku', shopCat: 'fats' }
      ],
      steps: [
        'Na patelni rozpuść 10 g masła, wbij jaja i smaż na małym ogniu, cały czas mieszając, do uzyskania kremowej konsystencji. Dopraw solą, pieprzem i posyp posiekanym szczypiorkiem.',
        'Zjedz ze świeżym pieczywem posmarowanym resztą masła (5 g) i świeżymi warzywami.'
      ],
      note: 'Czas: 6 min | Klasyk z patelni – naturalne białko i zdrowe tłuszcze (~682 kcal, ~30,2g białka).'
    },

    // GAINER NA NOC (OSTATNI POSIŁEK)
    {
      id: 'rec_gainer_1',
      title: 'Hi Tec Whey Mass Builder + WPC 80% + Kreatyna',
      category: 'Ostatni Posiłek • Nocna Regeneracja & Siła',
      catType: 'gainer',
      prepTime: '1 min (Shaker)',
      kcal: 680, protein: 53.6, fat: 11.3, carbs: 91.5,
      isBatchCooking: false,
      ingredients: [
        { name: 'Hi Tec Whey Mass Builder', amount: 100, unit: 'g', homeMeasure: '2 czubate miarki (podwójna porcja)', shopCat: 'supplements' },
        { name: 'Odżywka białkowa WPC 80%', amount: 25, unit: 'g', homeMeasure: '1 miarka (wyrównuje profil aminokwasowy)', shopCat: 'supplements' },
        { name: 'Monohydrat kreatyny', amount: 5, unit: 'g', homeMeasure: '1 płaska łyżeczka / standardowa miarka', shopCat: 'supplements' },
        { name: 'Mleko 2%', amount: 400, unit: 'ml', homeMeasure: '1.6 szklanki (lub woda)', shopCat: 'dairy' }
      ],
      steps: [
        'Wlej 400 ml mleka do shakera.',
        'Wsyp 100 g Whey Mass Builder, 25 g odżywki WPC oraz 5 g kreatyny.',
        'Wstrząśnij energicznie przez 20-30 sekund.',
        '💡 Wypij jako ostatni posiłek dnia (np. 45-60 minut przed snem lub po wieczornym treningu). Zero stania w kuchni na noc!'
      ],
      note: 'Aż 53,6g białka i 91,5g węglowodanów w 1 minutę + 5g kreatyny pod nocną syntezę włókien.'
    }
  ];

  // --- RECIPES CATALOG INITIALIZER & MIGRATION ---
  function initCatalog() {
    let saved = null;
    try {
      saved = JSON.parse(localStorage.getItem('gains_recipes_catalog_v7'));
    } catch (e) {}

    if (!saved) {
      try {
        const prev = JSON.parse(localStorage.getItem('gains_recipes_catalog_v6')) || JSON.parse(localStorage.getItem('gains_recipes_catalog_v5')) || JSON.parse(localStorage.getItem('gains_recipes_catalog_v4')) || JSON.parse(localStorage.getItem('gains_recipes_catalog_v3'));
        if (Array.isArray(prev)) {
          const custom = prev.filter(r => r.id.startsWith('rec_custom_'));
          saved = [...custom, ...defaultMasterRecipes];
        }
      } catch (e) {}
    }

    if (!saved) {
      saved = defaultMasterRecipes;
    }

    // Filter out retired suppers (rec_kolacja_5, rec_kolacja_6)
    saved = saved.filter(r => r.id !== 'rec_kolacja_5' && r.id !== 'rec_kolacja_6');

    // Always ensure all default master recipes have the latest updated ingredients & macros
    defaultMasterRecipes.forEach(defRec => {
      const idx = saved.findIndex(r => r.id === defRec.id);
      if (idx !== -1) {
        saved[idx] = defRec;
      } else {
        saved.push(defRec);
      }
    });

    localStorage.setItem('gains_recipes_catalog_v7', JSON.stringify(saved));
    return saved;
  }

  // --- DEFAULT PRODUCTS & INGREDIENTS DATABASE (MAKRO NA 100g) ---
  const defaultProductsDatabase = [
    // --- NABIAŁ & JAJA (DAIRY) ---
    {
      id: 'prod_serek_wiejski',
      name: 'Serek wiejski (naturalny)',
      category: 'dairy',
      kcal: 100, protein: 11, fat: 5, carbs: 2,
      defaultUnit: 'g', pieceWeight: 200, spoonWeight: 25,
      aliases: ['serek wiejski', 'serek wiejski lekki', 'serek wiejski 200g', 'serek wiejski (naturalny)']
    },
    {
      id: 'prod_mleko_32',
      name: 'Mleko 3,2%',
      category: 'dairy',
      kcal: 61, protein: 3.2, fat: 3.2, carbs: 4.8,
      defaultUnit: 'ml', pieceWeight: 250, spoonWeight: 15,
      aliases: ['mleko 3.2%', 'mleko 3,2%', 'mleko 3.2', 'mleko 3,2', 'mleko tłuste']
    },
    {
      id: 'prod_mleko_2',
      name: 'Mleko 2%',
      category: 'dairy',
      kcal: 50, protein: 3.4, fat: 2.0, carbs: 4.8,
      defaultUnit: 'ml', pieceWeight: 250, spoonWeight: 15,
      aliases: ['mleko', 'mleko krowie 2%', 'mleko 2.0%']
    },
    {
      id: 'prod_jaja_kurze',
      name: 'Jaja kurze',
      category: 'dairy',
      kcal: 143, protein: 12.5, fat: 10, carbs: 0.7,
      defaultUnit: 'g', pieceWeight: 55, spoonWeight: null,
      aliases: ['jajko', 'jajka', 'jajko kurze', 'jajko na twardo', 'jajka kurze']
    },
    {
      id: 'prod_twarog_poltlusty',
      name: 'Twaróg chudy lub półtłusty',
      category: 'dairy',
      kcal: 110, protein: 18, fat: 4, carbs: 3.5,
      defaultUnit: 'g', pieceWeight: 200, spoonWeight: 30,
      aliases: ['twaróg', 'twarog', 'twaróg półtłusty', 'twaróg chudy', 'ser biały']
    },
    {
      id: 'prod_mozzarella',
      name: 'Ser mozzarella',
      category: 'dairy',
      kcal: 280, protein: 23, fat: 19, carbs: 2.4,
      defaultUnit: 'g', pieceWeight: 125, spoonWeight: 20,
      aliases: ['mozzarella', 'ser mozzarella w kulce', 'mozzarella light', 'ser mozzarella (tarty lub wiórki)', 'ser mozzarella (tarty lub w plastrach)', 'mozzarella (tarty lub wiórki)', 'ser mozzarella (tarty lub wiórki)']
    },
    {
      id: 'prod_mozzarella_tarty',
      name: 'Ser mozzarella tarty',
      category: 'dairy',
      kcal: 340, protein: 25, fat: 26, carbs: 2,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 15,
      aliases: ['mozzarella tarta', 'ser tarty mozzarella', 'ser cheddar lub mozzarella (tarty)', 'ser cheddar / mozzarella', 'ser cheddar', 'cheddar']
    },
    {
      id: 'prod_parmezan',
      name: 'Parmezan lub Grana Padano (tarty)',
      category: 'dairy',
      kcal: 390, protein: 38, fat: 28, carbs: 0,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 10,
      aliases: ['parmezan', 'grana padano', 'parmezan lub grana padano', 'parmezan tarty', 'parmezan lub grana padano (tarty)']
    },
    {
      id: 'prod_smietanka_18',
      name: 'Śmietanka 18%',
      category: 'dairy',
      kcal: 190, protein: 2.7, fat: 18, carbs: 4.0,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 15,
      aliases: ['śmietanka 18%', 'śmietanka', 'śmietana 18% łagodna']
    },
    {
      id: 'prod_ser_gouda',
      name: 'Ser żółty gouda / mozzarella',
      category: 'dairy',
      kcal: 340, protein: 26, fat: 26, carbs: 0.2,
      defaultUnit: 'g', pieceWeight: 25, spoonWeight: 15,
      aliases: ['ser żółty', 'gouda', 'ser gouda', 'ser edamski', 'ser żółty gouda / mozzarella']
    },
    {
      id: 'prod_jogurt_grecki',
      name: 'Jogurt grecki lub naturalny gęsty',
      category: 'dairy',
      kcal: 94, protein: 4.4, fat: 6.2, carbs: 3.8,
      defaultUnit: 'g', pieceWeight: 150, spoonWeight: 20,
      aliases: ['jogurt grecki', 'jogurt naturalny', 'jogurt grecki gęsty', 'jogurt grecki lub naturalny gęsty']
    },
    {
      id: 'prod_serek_smietankowy',
      name: 'Serek śmietankowy łagodny (lub 18%)',
      category: 'dairy',
      kcal: 250, protein: 7.5, fat: 22.5, carbs: 5.5,
      defaultUnit: 'g', pieceWeight: 150, spoonWeight: 20,
      aliases: ['serek śmietankowy', 'serek almette', 'philadelphia', 'śmietana 18%', 'twój smak', 'serek twój smak', 'serek śmietankowy łagodny (lub 18%)', 'serek śmietankowy łagodny']
    },
    {
      id: 'prod_skyr_naturalny',
      name: 'Skyr naturalny',
      category: 'dairy',
      kcal: 65, protein: 12, fat: 0, carbs: 4,
      defaultUnit: 'g', pieceWeight: 150, spoonWeight: 25,
      aliases: ['skyr', 'jogurt skyr', 'skyr waniliowy', 'skyr naturalny']
    },

    // --- MIĘSO, RYBY & WĘDLINY (MEAT) ---
    {
      id: 'prod_piers_kurczaka',
      name: 'Pierś z kurczaka (filet)',
      category: 'meat',
      kcal: 110, protein: 22, fat: 1.5, carbs: 0,
      defaultUnit: 'g', pieceWeight: 160, spoonWeight: null,
      aliases: ['pierś z kurczaka', 'kurczak filet', 'filet z kurczaka', 'kurczak', 'pierś z kurczaka (filet)']
    },
    {
      id: 'prod_mielone_szynka',
      name: 'Mięso mielone z szynki wieprzowej lub z indyka',
      category: 'meat',
      kcal: 150, protein: 20, fat: 7.5, carbs: 0,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: null,
      aliases: ['mięso mielone z szynki', 'mielone z szynki', 'mięso mielone z szynki wieprzowej', 'mielona szynka', 'mięso mielone', 'mięso mielone z szynki wieprzowej lub z indyka']
    },
    {
      id: 'prod_mielone_indyk',
      name: 'Mięso mielone z piersi indyka (lub kurczaka)',
      category: 'meat',
      kcal: 110, protein: 21, fat: 2.5, carbs: 0,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: null,
      aliases: ['mięso mielone z indyka', 'mielony indyk', 'mielony kurczak', 'indyk']
    },
    {
      id: 'prod_mielone_wolowina',
      name: 'Mięso mielone chude (wołowina do 10% lub indyk)',
      category: 'meat',
      kcal: 150, protein: 20, fat: 7.5, carbs: 0,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: null,
      aliases: ['mielona wołowina', 'wołowina mielona chuda', 'wołowina', 'mięso mielone chude', 'mięso mielone z indyka lub chudej wołowiny', 'mięso mielone chude (wołowina do 10% lub indyk)']
    },
    {
      id: 'prod_poledwica_sopocka',
      name: 'Polędwica sopocka / szynka drobiowa',
      category: 'meat',
      kcal: 108, protein: 20, fat: 2, carbs: 1,
      defaultUnit: 'g', pieceWeight: 20, spoonWeight: null,
      aliases: ['polędwica sopocka', 'szynka drobiowa', 'szynka z indyka', 'szynka drobiowa / polędwica', 'szynka drobiowa / polędwica sopocka', 'polędwica sopocka / szynka drobiowa']
    },
    {
      id: 'prod_tunczyk',
      name: 'Tuńczyk w sosie własnym (odsączony)',
      category: 'meat',
      kcal: 110, protein: 25, fat: 1, carbs: 0,
      defaultUnit: 'g', pieceWeight: 130, spoonWeight: 25,
      aliases: ['tuńczyk w sosie własnym', 'tuńczyk', 'tunczyk w puszce']
    },
    {
      id: 'prod_szynka_dojrzewajaca',
      name: 'Szynka dojrzewająca / szwarcwaldzka',
      category: 'meat',
      kcal: 238, protein: 25, fat: 15, carbs: 1,
      defaultUnit: 'g', pieceWeight: 18, spoonWeight: null,
      aliases: ['szynka szwarcwaldzka', 'prosciutto', 'szynka parmeńska', 'szynka dojrzewająca', 'szynka dojrzewająca (szwarcwaldzka lub parmeńska)', 'szynka dojrzewająca / szwarcwaldzka']
    },
    {
      id: 'prod_losos_swiezy',
      name: 'Łosoś świeży (filet)',
      category: 'meat',
      kcal: 205, protein: 20, fat: 13.5, carbs: 0,
      defaultUnit: 'g', pieceWeight: 150, spoonWeight: null,
      aliases: ['łosoś', 'losos', 'filet z łososia']
    },

    // --- PRODUKTY SUCHE (DRY) ---
    {
      id: 'prod_platki_owsiane',
      name: 'Płatki owsiane',
      category: 'dry',
      kcal: 372, protein: 12, fat: 7.2, carbs: 62.8,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 10,
      aliases: ['płatki owsiane górskie', 'platki owsiane', 'owsianka']
    },
    {
      id: 'prod_makaron',
      name: 'Makaron pełnoziarnisty / penne',
      category: 'dry',
      kcal: 360, protein: 12, fat: 1.6, carbs: 72.7,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: null,
      aliases: ['makaron', 'makaron (penne / świderki)', 'makaron (penne / tagliatelle / fusilli)', 'makaron rurki / penne', 'makaron rurki', 'makaron penne', 'makaron spaghetti', 'penne', 'świderki', 'fusilli', 'tagliatelle', 'makaron pełnoziarnisty / penne']
    },
    {
      id: 'prod_ryz_basmati',
      name: 'Ryż basmati lub parboiled',
      category: 'dry',
      kcal: 350, protein: 8, fat: 0.7, carbs: 77,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: null,
      aliases: ['ryż', 'ryz', 'ryż basmati', 'ryż parboiled', 'ryż biały', 'ryż basmati lub parboiled']
    },
    {
      id: 'prod_passata',
      name: 'Passata pomidorowa',
      category: 'dry',
      kcal: 25, protein: 1.3, fat: 0.2, carbs: 4.5,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 20,
      aliases: ['passata', 'passata pomidorowa z ziołami', 'passata pomidorowa z bazylią', 'przecier pomidorowy', 'passata pomidorowa', 'passata pomidorowa lub ketchup z dobrym składem']
    },
    {
      id: 'prod_chleb_zytni',
      name: 'Chleb żytni lub graham',
      category: 'dry',
      kcal: 225, protein: 6, fat: 1.5, carbs: 46,
      defaultUnit: 'g', pieceWeight: 40, spoonWeight: null,
      aliases: ['chleb żytni', 'chleb graham', 'chleb', 'chleb żytni lub ciabatta', 'chleb żytni lub graham', 'chleb żytni, graham lub ciabatta']
    },
    {
      id: 'prod_tortilla',
      name: 'Placek tortilli pszennej / graham',
      category: 'dry',
      kcal: 300, protein: 8, fat: 6, carbs: 52,
      defaultUnit: 'g', pieceWeight: 60, spoonWeight: null,
      aliases: ['tortilla', 'wrap', 'placek tortilli', 'placek tortilli pszennej / graham']
    },
    {
      id: 'prod_bulka_grahamka',
      name: 'Bagietka wieloziarnista lub bułka grahamka',
      category: 'dry',
      kcal: 270, protein: 9, fat: 2, carbs: 53,
      defaultUnit: 'g', pieceWeight: 90, spoonWeight: null,
      aliases: ['bułka grahamka', 'grahamka', 'bagietka', 'bułka', 'bagietka wieloziarnista']
    },
    {
      id: 'prod_kakao',
      name: 'Ciemne kakao naturalne',
      category: 'dry',
      kcal: 300, protein: 18, fat: 11, carbs: 13,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 10,
      aliases: ['kakao', 'kakao naturalne', 'ciemne kakao', 'ciemne kakao naturalne', 'kakao ciemne', 'kakao ciemne naturalne']
    },
    {
      id: 'prod_daktyle',
      name: 'Suszone daktyle',
      category: 'dry',
      kcal: 290, protein: 2, fat: 0.4, carbs: 68,
      defaultUnit: 'g', pieceWeight: 6, spoonWeight: 15,
      aliases: ['daktyle', 'daktyle suszone', 'suszone daktyle']
    },
    {
      id: 'prod_kasza_gryczana',
      name: 'Kasza gryczana / jaglana',
      category: 'dry',
      kcal: 345, protein: 12.5, fat: 3, carbs: 68,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: null,
      aliases: ['kasza', 'kasza gryczana', 'kasza jaglana']
    },

    // --- OWOCE & WARZYWA (PRODUCE) ---
    {
      id: 'prod_banan',
      name: 'Banan',
      category: 'produce',
      kcal: 97, protein: 1, fat: 0.3, carbs: 21.7,
      defaultUnit: 'g', pieceWeight: 120, spoonWeight: null,
      aliases: ['banan świeży', 'banany', 'banan']
    },
    {
      id: 'prod_jablko',
      name: 'Jabłko (obrane, bez gniazda)',
      category: 'produce',
      kcal: 52, protein: 0.3, fat: 0.2, carbs: 12,
      defaultUnit: 'g', pieceWeight: 150, spoonWeight: null,
      aliases: ['jabłko', 'jablko', 'jabłka', 'jabłko (obrane, bez gniazda)']
    },
    {
      id: 'prod_owoce_lesne',
      name: 'Owoce leśne mrożone (jagody/maliny)',
      category: 'produce',
      kcal: 45, protein: 1, fat: 0.4, carbs: 8,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 15,
      aliases: ['owoce leśne', 'borówki', 'jagody', 'maliny', 'truskawki', 'owoce leśne mrożone', 'owoce leśne mrożone (jagody/maliny)']
    },
    {
      id: 'prod_ziemniaki',
      name: 'Ziemniaki (wczesne / klasyczne)',
      category: 'produce',
      kcal: 77, protein: 2, fat: 0.1, carbs: 17,
      defaultUnit: 'g', pieceWeight: 90, spoonWeight: null,
      aliases: ['ziemniaki', 'kartofle', 'ziemniak']
    },
    {
      id: 'prod_fasola_czerwona',
      name: 'Fasola czerwona z puszki (odsączona)',
      category: 'produce',
      kcal: 100, protein: 8, fat: 0.6, carbs: 14,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 20,
      aliases: ['fasola czerwona', 'fasola z puszki', 'czerwona fasola', 'fasola czerwona z puszki (odsączona)']
    },
    {
      id: 'prod_kukurydza',
      name: 'Kukurydza konserwowa',
      category: 'produce',
      kcal: 100, protein: 3, fat: 1.2, carbs: 18,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 20,
      aliases: ['kukurydza', 'kukurydza z puszki', 'kukurydza konserwowa']
    },
    {
      id: 'prod_brokul_fasolka',
      name: 'Fasolka szparagowa lub brokuł',
      category: 'produce',
      kcal: 35, protein: 2.5, fat: 0.4, carbs: 4.5,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: null,
      aliases: ['fasolka szparagowa', 'brokuł', 'brokuły']
    },
    {
      id: 'prod_pomidor',
      name: 'Pomidor świeży',
      category: 'produce',
      kcal: 18, protein: 0.9, fat: 0.2, carbs: 3.5,
      defaultUnit: 'g', pieceWeight: 130, spoonWeight: null,
      aliases: ['pomidor', 'pomidory', 'pomidor / ogórek kiszony', 'pomidory sparzone i pokrojone w kostkę', 'ogórek', 'pomidor świeży', 'warzywa']
    },
    {
      id: 'prod_pieczarki',
      name: 'Pieczarki świeże',
      category: 'produce',
      kcal: 22, protein: 3, fat: 0.3, carbs: 3,
      defaultUnit: 'g', pieceWeight: 25, spoonWeight: null,
      aliases: ['pieczarki', 'pieczarka']
    },
    {
      id: 'prod_salata_warzywa',
      name: 'Sałata lodowa / pomidorki koktajlowe',
      category: 'produce',
      kcal: 16, protein: 1, fat: 0.2, carbs: 2.5,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: null,
      aliases: ['sałata lodowa', 'sałata', 'pomidorki koktajlowe', 'szpinak świeży', 'sałata lodowa / pomidorki koktajlowe']
    },
    {
      id: 'prod_szpinak',
      name: 'Szpinak (świeży lub mrożony rozdrobniony)',
      category: 'produce',
      kcal: 20, protein: 2.0, fat: 0.4, carbs: 1.5,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: null,
      aliases: ['szpinak', 'szpinak świeży', 'szpinak mrożony', 'liście szpinaku', 'szpinak (świeży lub mrożony rozdrobniony)']
    },
    {
      id: 'prod_szczypiorek',
      name: 'Szczypiorek świeży',
      category: 'produce',
      kcal: 30, protein: 3.0, fat: 0.7, carbs: 4.4,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 10,
      aliases: ['szczypiorek', 'szczypiorek świeży', 'zielona cebulka']
    },
    {
      id: 'prod_awokado',
      name: 'Awokado',
      category: 'produce',
      kcal: 160, protein: 2, fat: 15, carbs: 8.5,
      defaultUnit: 'g', pieceWeight: 140, spoonWeight: 20,
      aliases: ['awokado']
    },

    // --- TŁUSZCZE & DODATKI (FATS) ---
    {
      id: 'prod_chalwa',
      name: 'Chałwa waniliowa / sezamowa',
      category: 'fats',
      kcal: 545, protein: 13, fat: 33, carbs: 49,
      defaultUnit: 'g', pieceWeight: 50, spoonWeight: 15,
      aliases: ['chałwa', 'chalwa', 'chałwa waniliowa', 'chałwa sezamowa', 'chałwa waniliowa / sezamowa']
    },
    {
      id: 'prod_maslo_orzechowe',
      name: 'Masło orzechowe 100%',
      category: 'fats',
      kcal: 600, protein: 26, fat: 50, carbs: 12,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 15,
      aliases: ['masło orzechowe', 'krem orzechowy', 'maslo orzechowe', 'masło orzechowe 100%']
    },
    {
      id: 'prod_czekolada_gorzka',
      name: 'Gorzka czekolada (min. 70%)',
      category: 'fats',
      kcal: 580, protein: 8, fat: 42, carbs: 35,
      defaultUnit: 'g', pieceWeight: 5, spoonWeight: 15,
      aliases: ['gorzka czekolada', 'czekolada gorzka', 'czekolada']
    },
    {
      id: 'prod_oliwa',
      name: 'Oliwa z oliwek extra virgin',
      category: 'fats',
      kcal: 900, protein: 0, fat: 100, carbs: 0,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 10,
      aliases: ['oliwa z oliwek', 'oliwa', 'olej rzepakowy', 'oliwa z oliwek extra virgin']
    },
    {
      id: 'prod_maslo_ekstra',
      name: 'Masło ekstra',
      category: 'fats',
      kcal: 740, protein: 0.7, fat: 82, carbs: 0.7,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 10,
      aliases: ['masło', 'maslo', 'masło czosnkowe / ziołowe', 'masło 82%', 'masło ekstra']
    },
    {
      id: 'prod_orzechy',
      name: 'Orzechy włoskie lub nerkowca',
      category: 'fats',
      kcal: 616, protein: 16.8, fat: 46.8, carbs: 30,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 15,
      aliases: ['orzechy włoskie', 'orzechy nerkowca', 'orzechy', 'migdały', 'orzechy nerkowca lub włoskie', 'orzechy włoskie lub nerkowca']
    },
    {
      id: 'prod_wiorki_kokosowe',
      name: 'Wiórki kokosowe',
      category: 'fats',
      kcal: 660, protein: 7.2, fat: 65, carbs: 7.2,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 8,
      aliases: ['wiórki kokosowe', 'wiorki kokosowe']
    },
    {
      id: 'prod_miod',
      name: 'Miód pszczeli',
      category: 'fats',
      kcal: 320, protein: 0.8, fat: 0, carbs: 80.8,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 20,
      aliases: ['miód', 'miod', 'miód pszczeli']
    },
    {
      id: 'prod_ketchup',
      name: 'Ketchup z dobrym składem',
      category: 'fats',
      kcal: 110, protein: 1.5, fat: 0.2, carbs: 25,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 15,
      aliases: ['ketchup', 'keczup', 'ketchup z dobrym składem']
    },
    {
      id: 'prod_majonez',
      name: 'Majonez lekki lub klasyczny',
      category: 'fats',
      kcal: 660, protein: 1.3, fat: 73, carbs: 2.7,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 15,
      aliases: ['majonez', 'majonez lekki', 'majonez klasyczny', 'majonez kielecki', 'majonez winiary', 'majonez lekki lub klasyczny']
    },
    {
      id: 'prod_cynamon',
      name: 'Cynamon mielony',
      category: 'fats',
      kcal: 250, protein: 5, fat: 1, carbs: 25,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 4,
      aliases: ['cynamon', 'cynamon mielony']
    },
    {
      id: 'prod_przyprawy',
      name: 'Zioła i przyprawy (czosnek, zioła, sól, pieprz)',
      category: 'fats',
      kcal: 0, protein: 0, fat: 0, carbs: 0,
      defaultUnit: 'g', pieceWeight: null, spoonWeight: 5,
      aliases: [
        'czosnek, oregano, bazylia, pieprz', 'czosnek, oregano, bazylia, sól, pieprz',
        'przyprawa burrito / kumin / papryka', 'zioła prowansalskie, czosnek, papryka wędzona',
        'czosnek, oregano, sól, pieprz', 'czosnek, świeża bazylia, sól, pieprz',
        'czosnek granulowany, sól, pieprz, oregano', '2 ząbki czosnku, gałka, sól, pieprz',
        'zioła i przyprawy (czosnek, zioła, sól, pieprz)', 'przyprawy', 'oregano, bazylia, pieprz',
        'sól, pieprz'
      ]
    },

    // --- SUPLEMENTY (SUPPLEMENTS) ---
    {
      id: 'prod_wpc_bialko',
      name: 'Odżywka białkowa WPC (wanilia/czekolada)',
      category: 'supplements',
      kcal: 380, protein: 78, fat: 6, carbs: 6,
      defaultUnit: 'g', pieceWeight: 30, spoonWeight: 15,
      aliases: ['odżywka białkowa', 'wpc', 'odżywka białkowa wpc', 'odżywka białkowa wpc (czekolada/kokos)', 'odżywka białkowa wpc (wanilia/karmel)']
    },
    {
      id: 'prod_wpc_80',
      name: 'Odżywka białkowa WPC 80%',
      category: 'supplements',
      kcal: 380, protein: 80, fat: 5, carbs: 5,
      defaultUnit: 'g', pieceWeight: 25, spoonWeight: 15,
      aliases: ['odżywka białkowa wpc 80%', 'wpc 80%']
    },
    {
      id: 'prod_hi_tec_gainer',
      name: 'Hi Tec Whey Mass Builder',
      category: 'supplements',
      kcal: 385, protein: 20, fat: 2, carbs: 71,
      defaultUnit: 'g', pieceWeight: 50, spoonWeight: 25,
      aliases: ['whey mass builder', 'hi tec mass builder', 'gainer', 'hi tec whey mass builder']
    },
    {
      id: 'prod_kreatyna',
      name: 'Monohydrat kreatyny',
      category: 'supplements',
      kcal: 0, protein: 0, fat: 0, carbs: 0,
      defaultUnit: 'g', pieceWeight: 5, spoonWeight: 5,
      aliases: ['kreatyna', 'kreatyna monohydrat', 'creatine', 'monohydrat kreatyny']
    }
  ];

  // --- INITIALIZE & MIGRATE PRODUCTS DATABASE ---
  function initProductsDatabase() {
    let saved = null;
    try {
      saved = JSON.parse(localStorage.getItem('gains_products_db_v2'));
    } catch (e) {}

    if (!saved) {
      try {
        const prev = JSON.parse(localStorage.getItem('gains_products_db_v2'));
        if (Array.isArray(prev)) {
          const custom = prev.filter(p => p.id.startsWith('prod_custom_'));
          saved = [...custom, ...defaultProductsDatabase];
        }
      } catch (e) {}
    }

    if (!Array.isArray(saved) || saved.length === 0) {
      saved = [...defaultProductsDatabase];
    } else {
      // Always ensure all default products have the latest updated macros, weights, and aliases
      defaultProductsDatabase.forEach(defProd => {
        const idx = saved.findIndex(p => p.id === defProd.id);
        if (idx !== -1) {
          saved[idx] = defProd;
        } else {
          saved.push(defProd);
        }
      });
    }

    localStorage.setItem('gains_products_db_v2', JSON.stringify(saved));
    return saved;
  }

  // --- SMART PRODUCT SEARCH & MATCHING ---
  function findProduct(query) {
    if (!query || typeof query !== 'string') return null;
    const q = query.trim().toLowerCase();
    if (!q) return null;

    // 1. Exact name match
    let match = state.productsDatabase.find(p => p.name.toLowerCase() === q);
    if (match) return match;

    // 2. Exact alias match
    match = state.productsDatabase.find(p => p.aliases?.some(a => a.toLowerCase() === q));
    if (match) return match;

    // 3. Normalized query (remove parentheses, punctuation)
    const normQ = q.replace(/\([^)]*\)/g, '').replace(/[^a-ząćęłńóśźż0-9\s]/gi, '').trim();
    if (normQ.length > 2) {
      match = state.productsDatabase.find(p => {
        const normName = p.name.toLowerCase().replace(/\([^)]*\)/g, '').replace(/[^a-ząćęłńóśźż0-9\s]/gi, '').trim();
        return normName === normQ || p.aliases?.some(a => a.toLowerCase().replace(/[^a-ząćęłńóśźż0-9\s]/gi, '').trim() === normQ);
      });
      if (match) return match;
    }

    // 4. Starts with / substring matching
    match = state.productsDatabase.find(p => {
      const pName = p.name.toLowerCase();
      return pName.startsWith(q) || q.startsWith(pName);
    });
    if (match) return match;

    // 5. Word inclusion matching
    match = state.productsDatabase.find(p => {
      return p.name.toLowerCase().includes(q) || (normQ.length > 3 && p.name.toLowerCase().includes(normQ));
    });
    return match || null;
  }

  // --- CALCULATE INGREDIENT MACRO ---
  function calculateIngredientMacro(name, amount, unit) {
    const product = findProduct(name);
    if (!product || !amount || amount <= 0) {
      return { found: false, product: null, grams: 0, kcal: 0, protein: 0, carbs: 0, fat: 0 };
    }

    let grams = amount;
    if (unit === 'ml') {
      grams = amount; // ~1g / ml
    } else if (unit === 'szt') {
      grams = amount * (product.pieceWeight || 60);
    } else if (unit === 'łyżka') {
      grams = amount * (product.spoonWeight || 15);
    }

    const factor = grams / 100;
    return {
      found: true,
      product,
      grams: Math.round(grams),
      kcal: Math.round(product.kcal * factor),
      protein: Math.round(product.protein * factor * 10) / 10,
      carbs: Math.round(product.carbs * factor * 10) / 10,
      fat: Math.round(product.fat * factor * 10) / 10
    };
  }

  // --- RECALCULATE RECIPE FORM MACROS IN REAL-TIME ---
  function recalculateRecipeFormMacro(forceSyncFields = false) {
    const ingRows = document.querySelectorAll('.modal-ing-card');
    let totalKcal = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;
    let matchedCount = 0;
    let totalCount = 0;

    ingRows.forEach(card => {
      const nameInput = card.querySelector('.ing-input-name');
      const amountInput = card.querySelector('.ing-input-amount');
      const unitHidden = card.querySelector('.ing-input-unit');
      const catHidden = card.querySelector('.ing-input-cat');
      const previewEl = card.querySelector('.ing-macro-preview');
      const addProdBtn = card.querySelector('.btn-quick-add-prod');

      const name = nameInput ? nameInput.value.trim() : '';
      const amount = amountInput ? parseFloat(amountInput.value) || 0 : 0;
      let unit = unitHidden ? unitHidden.value : 'g';

      if (name) {
        totalCount++;
        const res = calculateIngredientMacro(name, amount, unit);
        if (res.found) {
          matchedCount++;
          totalKcal += res.kcal;
          totalProtein += res.protein;
          totalCarbs += res.carbs;
          totalFat += res.fat;

          const displayUnit = res.product.defaultUnit || unit || 'g';
          if (previewEl) {
            previewEl.innerHTML = `
              <span class="preview-chip kcal">🔥 ${res.kcal} kcal</span>
              <span class="preview-chip protein">🥩 ${res.protein}g B</span>
              <span class="preview-chip carbs">🌾 ${res.carbs}g W</span>
              <span class="preview-chip fat">🥑 ${res.fat}g T</span>
              <span class="preview-match-ok" title="Wartości wyliczone na podstawie bazy produktów">✓ z bazy (${amount} ${displayUnit})</span>
            `;
          }
          if (addProdBtn) addProdBtn.classList.add('hidden');
          if (catHidden && res.product.category) {
            catHidden.value = res.product.category;
            const catBadge = card.querySelector('.ing-cat-badge');
            if (catBadge) {
              const cInfo = shopCategoryDisplay[res.product.category] || { label: res.product.category, icon: '📦', color: '#94a3b8', bg: 'rgba(255, 255, 255, 0.08)' };
              catBadge.innerHTML = `${cInfo.icon} ${cInfo.label}`;
              catBadge.style.color = cInfo.color;
              catBadge.style.background = cInfo.bg;
            }
          }
        } else {
          if (previewEl) {
            previewEl.innerHTML = `
              <span class="preview-unknown">⚠️ Produkt nieznany w bazie</span>
            `;
          }
          if (addProdBtn) {
            addProdBtn.classList.remove('hidden');
            addProdBtn.setAttribute('data-prod-name', name);
            if (catHidden) addProdBtn.setAttribute('data-prod-cat', catHidden.value);
          }
        }
      } else {
        if (previewEl) previewEl.innerHTML = '';
        if (addProdBtn) addProdBtn.classList.add('hidden');
      }
    });

    totalProtein = Math.round(totalProtein * 10) / 10;
    totalCarbs = Math.round(totalCarbs * 10) / 10;
    totalFat = Math.round(totalFat * 10) / 10;

    // Update live chips in Recipe Modal
    const liveKcal = document.getElementById('live-calc-kcal');
    const liveP = document.getElementById('live-calc-protein');
    const liveC = document.getElementById('live-calc-carbs');
    const liveF = document.getElementById('live-calc-fat');
    const liveStatus = document.getElementById('live-calc-status');

    if (liveKcal) liveKcal.textContent = totalKcal;
    if (liveP) liveP.textContent = totalProtein;
    if (liveC) liveC.textContent = totalCarbs;
    if (liveF) liveF.textContent = totalFat;

    if (liveStatus) {
      if (totalCount === 0) {
        liveStatus.textContent = 'Wprowadź składniki i gramatury, aby wyliczyć makroskładniki.';
        liveStatus.style.color = 'var(--text-muted)';
      } else if (matchedCount === totalCount) {
        liveStatus.textContent = `✓ Wszystkie składniki (${matchedCount}/${totalCount}) zsynchronizowane z bazą produktów. 100% z bazy!`;
        liveStatus.style.color = 'var(--accent-green)';
      } else {
        liveStatus.textContent = `⚡ Rozpoznano ${matchedCount} z ${totalCount} składników. Dodaj brakujące do bazy, aby dopełnić wyliczenie.`;
        liveStatus.style.color = '#fbbf24';
      }
    }

    // Auto-sync into form inputs if enabled or forced
    const autoSyncCheckbox = document.getElementById('form-recipe-autocalc');
    if (forceSyncFields || (autoSyncCheckbox && autoSyncCheckbox.checked)) {
      const kcalInput = document.getElementById('form-recipe-kcal');
      const pInput = document.getElementById('form-recipe-protein');
      const cInput = document.getElementById('form-recipe-carbs');
      const fInput = document.getElementById('form-recipe-fat');

      if (kcalInput && totalKcal > 0) kcalInput.value = totalKcal;
      if (pInput && totalProtein > 0) pInput.value = totalProtein;
      if (cInput && totalCarbs > 0) cInput.value = totalCarbs;
      if (fInput && totalFat > 0) fInput.value = totalFat;
    }
  }

  // --- POPULATE PRODUCTS DATALIST ---
  function populateProductsDatalist() {
    const datalist = document.getElementById('products-datalist');
    if (!datalist) return;
    datalist.innerHTML = state.productsDatabase.map(p => `
      <option value="${p.name}">${p.kcal} kcal/100g • B:${p.protein}g T:${p.fat}g W:${p.carbs}g</option>
    `).join('');
  }

  // --- APPLICATION STATE ---
  const state = {
    currentTab: 'plan',
    activePlanView: localStorage.getItem('gains_plan_view') || 'day', // 'day' | 'week' | 'calendar'
    activeDay: localStorage.getItem('gains_active_day') || 'mon',
    recipesCatalog: initCatalog(),
    productsDatabase: initProductsDatabase(),
    productFilter: 'all',
    productSearch: '',
    dayMealOverrides: JSON.parse(localStorage.getItem('gains_day_meal_overrides')) || {},
    recipeFilter: 'all',
    recipeSearch: '',
    eatenMeals: JSON.parse(localStorage.getItem('gains_eaten_meals')) || {},
    waterMl: parseInt(localStorage.getItem('gains_water_ml')) || 1500,
    waterTargetMl: 3000,
    dinnerBatchMultiplier: 1,
    shopDays: 7,
    checkedShopItems: JSON.parse(localStorage.getItem('gains_checked_shop')) || {},
    userProfile: JSON.parse(localStorage.getItem('gains_user_profile')) || {
      weight: 65, height: 183, age: 22, pal: 1.55, surplus: 400
    },
    // Calendar month tracking (year 2026, month 8 = September)
    calendarDate: new Date(2026, 8, 25),
    // Swap modal slot tracking
    activeSwapSlot: null, // { dayKey, mealIndex, catType, filter }
    // Expanded recipe ingredients in catalog
    expandedRecipeIngredients: new Set()
  };

  // --- DAYS DEFINITION ---
  const weekDays = [
    { key: 'mon', name: 'Poniedziałek', short: 'PN', isGym: true, isBatchDay: true, batchNote: '📦 Gotujesz Obiad A na 2 dni (Pn + Wt)' },
    { key: 'tue', name: 'Wtorek', short: 'WT', isGym: false, isBatchDay: false, batchNote: '🍽️ Jemy gotowy Obiad A z wczoraj (oszczędzasz czas!)' },
    { key: 'wed', name: 'Środa', short: 'ŚR', isGym: true, isBatchDay: true, batchNote: '📦 Gotujesz Obiad B na 2 dni (Śr + Czw)' },
    { key: 'thu', name: 'Czwartek', short: 'CZW', isGym: false, isBatchDay: false, batchNote: '🍽️ Jemy gotowy Obiad B z wczoraj' },
    { key: 'fri', name: 'Piątek', short: 'PT', isGym: true, isBatchDay: true, batchNote: '📦 Gotujesz Obiad C na 2 dni (Pt + Sob)' },
    { key: 'sat', name: 'Sobota', short: 'SOB', isGym: false, isBatchDay: false, batchNote: '🍽️ Jemy gotowy Obiad C z wczoraj' },
    { key: 'sun', name: 'Niedziela', short: 'ND', isGym: true, isBatchDay: false, batchNote: '🍲 Świeży obiad niedzielny (1 dzień)' }
  ];

  function findRecipe(id) {
    return state.recipesCatalog.find(r => r.id === id) || defaultMasterRecipes.find(r => r.id === id);
  }

  // --- DYNAMIC WEEKLY PLAN MAPPING (Śniadanie -> Obiad -> Kolacja -> Gainer) ---
  function getWeeklyPlan() {
    const r_sh1 = findRecipe('rec_shake_1');
    const r_sh2 = findRecipe('rec_shake_2');
    const r_sh3 = findRecipe('rec_shake_3');

    const r_dn1 = findRecipe('rec_dinner_1');
    const r_dn2 = findRecipe('rec_dinner_2');
    const r_dn3 = findRecipe('rec_dinner_3');
    const r_dn4 = findRecipe('rec_dinner_4');

    const r_k1 = findRecipe('rec_kolacja_1');
    const r_k2 = findRecipe('rec_kolacja_2');
    const r_k3 = findRecipe('rec_kolacja_3');
    const r_k4 = findRecipe('rec_kolacja_4');

    const r_gn1 = findRecipe('rec_gainer_1');

    const defaultSchedule = {
      mon: [
        { ...r_sh1, masterRecipeId: r_sh1.id, number: 'Posiłek 1 (Śniadanie)' },
        { ...r_dn1, masterRecipeId: r_dn1.id, number: 'Posiłek 2 (Obiad)' },
        { ...r_k1,  masterRecipeId: r_k1.id,  number: 'Posiłek 3 (Kolacja)' },
        { ...r_gn1, masterRecipeId: r_gn1.id, number: 'Posiłek 4 (Ostatni Posiłek)' }
      ],
      tue: [
        { ...r_sh2, masterRecipeId: r_sh2.id, number: 'Posiłek 1 (Śniadanie)' },
        { ...r_dn1, masterRecipeId: r_dn1.id, number: 'Posiłek 2 (Obiad)', title: `${r_dn1.title} (Z wczoraj)`, isBatchCooking: false },
        { ...r_k2,  masterRecipeId: r_k2.id,  number: 'Posiłek 3 (Kolacja)' },
        { ...r_gn1, masterRecipeId: r_gn1.id, number: 'Posiłek 4 (Ostatni Posiłek)' }
      ],
      wed: [
        { ...r_sh3, masterRecipeId: r_sh3.id, number: 'Posiłek 1 (Śniadanie)' },
        { ...r_dn2, masterRecipeId: r_dn2.id, number: 'Posiłek 2 (Obiad)' },
        { ...r_k3,  masterRecipeId: r_k3.id,  number: 'Posiłek 3 (Kolacja)' },
        { ...r_gn1, masterRecipeId: r_gn1.id, number: 'Posiłek 4 (Ostatni Posiłek)' }
      ],
      thu: [
        { ...r_sh1, masterRecipeId: r_sh1.id, number: 'Posiłek 1 (Śniadanie)' },
        { ...r_dn2, masterRecipeId: r_dn2.id, number: 'Posiłek 2 (Obiad)', title: `${r_dn2.title} (Z wczoraj)`, isBatchCooking: false },
        { ...r_k4,  masterRecipeId: r_k4.id,  number: 'Posiłek 3 (Kolacja)' },
        { ...r_gn1, masterRecipeId: r_gn1.id, number: 'Posiłek 4 (Ostatni Posiłek)' }
      ],
      fri: [
        { ...r_sh2, masterRecipeId: r_sh2.id, number: 'Posiłek 1 (Śniadanie)' },
        { ...r_dn3, masterRecipeId: r_dn3.id, number: 'Posiłek 2 (Obiad)' },
        { ...r_k1,  masterRecipeId: r_k1.id,  number: 'Posiłek 3 (Kolacja)' },
        { ...r_gn1, masterRecipeId: r_gn1.id, number: 'Posiłek 4 (Ostatni Posiłek)' }
      ],
      sat: [
        { ...r_sh3, masterRecipeId: r_sh3.id, number: 'Posiłek 1 (Śniadanie)' },
        { ...r_dn3, masterRecipeId: r_dn3.id, number: 'Posiłek 2 (Obiad)', title: `${r_dn3.title} (Z wczoraj)`, isBatchCooking: false },
        { ...r_k2,  masterRecipeId: r_k2.id,  number: 'Posiłek 3 (Kolacja)' },
        { ...r_gn1, masterRecipeId: r_gn1.id, number: 'Posiłek 4 (Ostatni Posiłek)' }
      ],
      sun: [
        { ...r_sh1, masterRecipeId: r_sh1.id, number: 'Posiłek 1 (Śniadanie)' },
        { ...r_dn4, masterRecipeId: r_dn4.id, number: 'Posiłek 2 (Obiad)' },
        { ...r_k3,  masterRecipeId: r_k3.id,  number: 'Posiłek 3 (Kolacja)' },
        { ...r_gn1, masterRecipeId: r_gn1.id, number: 'Posiłek 4 (Ostatni Posiłek)' }
      ]
    };

    const finalPlan = {};
    weekDays.forEach(day => {
      const dayKey = day.key;
      const baseMeals = defaultSchedule[dayKey];
      const meals = baseMeals.map((defaultMeal, mealIdx) => {
        const overrideRecipeId = state.dayMealOverrides[dayKey]?.[mealIdx];
        if (overrideRecipeId) {
          const overrideRec = findRecipe(overrideRecipeId);
          if (overrideRec) {
            return {
              ...overrideRec,
              id: `${dayKey}_${mealIdx + 1}`,
              masterRecipeId: overrideRec.id,
              number: defaultMeal.number,
              isOverridden: true,
              mealIndex: mealIdx
            };
          }
        }
        return {
          ...defaultMeal,
          id: `${dayKey}_${mealIdx + 1}`,
          isOverridden: false,
          mealIndex: mealIdx
        };
      });
      finalPlan[dayKey] = { meals };
    });

    return finalPlan;
  }

  // --- SHOPPING CATEGORIES MAP ---
  const shopCategoryNames = {
    supplements: { title: 'Odżywki & Suplementy (Whey Mass Builder, WPC 80%, Kreatyna)', icon: '⚡' },
    dairy: { title: 'Nabiał & Chłodnia (Mleko, Jaja, Sery, Twaróg)', icon: '🥛' },
    meat: { title: 'Mięso, Ryby & Wędliny (Kurczak, Indyk, Tuńczyk, Szynka)', icon: '🥩' },
    produce: { title: 'Owoce & Warzywa (Banany, Jabłka, Ziemniaki, Pieczarki, Warzywa)', icon: '🍌' },
    dry: { title: 'Produkty Suche (Płatki, Ryż, Makaron, Chleb, Bagietka, Tortilla)', icon: '🥖' },
    fats: { title: 'Tłuszcze & Dodatki (Chałwa, Czekolada, Masło orzechowe, Wiórki, Oliwa)', icon: '🫒' }
  };

  // --- RENDER RECIPES CATALOG ---
  function renderRecipesCatalog() {
    const container = document.getElementById('recipes-catalog');
    if (!container) return;

    const badge = document.getElementById('recipes-badge');
    if (badge) badge.textContent = state.recipesCatalog.length;

    let filtered = state.recipesCatalog.filter(r => {
      // Filter by category
      if (state.recipeFilter !== 'all') {
        if (state.recipeFilter === 'shake' && r.catType !== 'shake') return false;
        if (state.recipeFilter === 'dinner' && r.catType !== 'dinner') return false;
        if (state.recipeFilter === 'kolacja' && r.catType !== 'kolacja') return false;
        if (state.recipeFilter === 'gainer' && r.catType !== 'gainer') return false;
      }

      // Filter by search text
      if (state.recipeSearch.trim() !== '') {
        const query = state.recipeSearch.toLowerCase();
        const inTitle = r.title.toLowerCase().includes(query);
        const inIngredients = r.ingredients.some(i => i.name.toLowerCase().includes(query));
        if (!inTitle && !inIngredients) return false;
      }

      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
          <p style="color: var(--text-muted); font-size: 1rem;">Brak przepisów pasujących do kryteriów wyszukiwania.</p>
        </div>
      `;
      return;
    }

  function formatRemainingIngredientsCount(count) {
    if (count === 1) return '1 składnik';
    const rem10 = count % 10;
    const rem100 = count % 100;
    if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 >= 20)) {
      return `${count} składniki`;
    }
    return `${count} składników`;
  }

  window.toggleRecipeIngredients = function(recipeId, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (!state.expandedRecipeIngredients) {
      state.expandedRecipeIngredients = new Set();
    }

    const wasExpanded = state.expandedRecipeIngredients.has(recipeId);
    if (wasExpanded) {
      state.expandedRecipeIngredients.delete(recipeId);
    } else {
      state.expandedRecipeIngredients.add(recipeId);
    }
    const isNowExpanded = !wasExpanded;

    const extraUl = document.getElementById(`extra-ing-${recipeId}`);
    const toggleBtn = document.getElementById(`toggle-btn-${recipeId}`);
    const hintBadge = document.getElementById(`hint-badge-${recipeId}`);

    if (extraUl && toggleBtn) {
      if (isNowExpanded) {
        extraUl.style.display = 'flex';
        toggleBtn.classList.add('is-expanded');
        const textSpan = toggleBtn.querySelector('.toggle-text');
        if (textSpan) textSpan.textContent = '▲ Zwiń składniki';
        toggleBtn.setAttribute('title', 'Zwiń listę składników');
        if (hintBadge) hintBadge.textContent = 'Zwiń ▴';
      } else {
        extraUl.style.display = 'none';
        toggleBtn.classList.remove('is-expanded');
        const count = parseInt(toggleBtn.getAttribute('data-count') || '0', 10);
        const textSpan = toggleBtn.querySelector('.toggle-text');
        if (textSpan) textSpan.textContent = `+ jeszcze ${formatRemainingIngredientsCount(count)}...`;
        toggleBtn.setAttribute('title', 'Rozwiń wszystkie składniki');
        if (hintBadge) hintBadge.textContent = 'Rozwiń ▾';
      }
    } else {
      renderRecipesCatalog();
    }
  };

    container.innerHTML = filtered.map(r => {
      const isExpanded = state.expandedRecipeIngredients && state.expandedRecipeIngredients.has(r.id);
      const remainingCount = Math.max(0, r.ingredients.length - 5);

      return `
      <div class="recipe-catalog-card" id="recipe-${r.id}">
        <div>
          <div class="r-card-header">
            <div class="r-badges">
              <span class="meal-badge" style="background: rgba(16, 185, 129, 0.12); color: #34d399;">${r.category}</span>
              ${r.isBatchCooking ? '<span class="batch-tag">Batch-cook</span>' : ''}
              <span class="prep-time">⏱️ ${r.prepTime}</span>
            </div>

            <div class="r-card-actions">
              <button class="r-action-btn" onclick="openRecipeModal('${r.id}')" title="Edytuj ten przepis">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>
              <button class="r-action-btn delete" onclick="deleteRecipe('${r.id}')" title="Usuń ten przepis">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </div>

          <h3 class="r-title">${r.title}</h3>

          <div class="r-macros">
            <span class="macro-chip kcal">🔥 ${r.kcal} kcal</span>
            <span class="macro-chip protein">🥩 ${r.protein}g B</span>
            <span class="macro-chip carbs">🌾 ${r.carbs}g W</span>
            <span class="macro-chip fat">🥑 ${r.fat}g T</span>
          </div>

          <div class="r-ingredients-preview">
            <div class="section-label ${r.ingredients.length > 5 ? 'clickable-section' : ''}"
                 ${r.ingredients.length > 5 ? `onclick="toggleRecipeIngredients('${r.id}', event)" title="Kliknij, aby rozwinąć/zwinąć listę składników"` : ''}>
              <span>Składniki (${r.ingredients.length})</span>
              ${r.ingredients.length > 5 ? `
                <span class="expand-hint-badge" id="hint-badge-${r.id}">
                  ${isExpanded ? 'Zwiń ▴' : 'Rozwiń ▾'}
                </span>
              ` : ''}
            </div>
            <ul>
              ${r.ingredients.slice(0, 5).map(i => `
                <li>
                  <span title="${i.homeMeasure ? i.homeMeasure : ''}">${i.name}</span>
                  <strong>${i.amount} ${i.unit}</strong>
                </li>
              `).join('')}
            </ul>
            ${r.ingredients.length > 5 ? `
              <ul class="r-extra-ingredients" id="extra-ing-${r.id}" style="${isExpanded ? 'display: flex;' : 'display: none;'}">
                ${r.ingredients.slice(5).map(i => `
                  <li class="extra-ing-item">
                    <span title="${i.homeMeasure ? i.homeMeasure : ''}">${i.name}</span>
                    <strong>${i.amount} ${i.unit}</strong>
                  </li>
                `).join('')}
              </ul>
              <button type="button" 
                      class="btn-toggle-ingredients ${isExpanded ? 'is-expanded' : ''}" 
                      onclick="toggleRecipeIngredients('${r.id}', event)" 
                      id="toggle-btn-${r.id}" 
                      data-count="${remainingCount}"
                      title="${isExpanded ? 'Zwiń listę składników' : 'Pokaż wszystkie składniki'}">
                <span class="toggle-text">${isExpanded ? '▲ Zwiń składniki' : `+ jeszcze ${formatRemainingIngredientsCount(remainingCount)}...`}</span>
                <svg class="toggle-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            ` : ''}
          </div>
        </div>

        <div class="r-footer">
          <span style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">${r.note || ''}</span>
          <button class="fitatu-copy-btn" onclick="copyRecipeCardToFitatu('${r.id}')" title="Kopiuj do Fitatu">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            Fitatu
          </button>
        </div>
      </div>
    `;
    }).join('');
  }

  // --- MODAL FUNCTIONS (ADD & EDIT) ---
  window.openRecipeModal = function(recipeId = null) {
    populateProductsDatalist();

    const modal = document.getElementById('recipe-modal');
    const modalTitle = document.getElementById('modal-recipe-title');
    const idInput = document.getElementById('edit-recipe-id');
    const titleInput = document.getElementById('form-recipe-title');
    const catInput = document.getElementById('form-recipe-cat');
    const timeInput = document.getElementById('form-recipe-time');
    const kcalInput = document.getElementById('form-recipe-kcal');
    const pInput = document.getElementById('form-recipe-protein');
    const cInput = document.getElementById('form-recipe-carbs');
    const fInput = document.getElementById('form-recipe-fat');
    const batchInput = document.getElementById('form-recipe-batch');
    const stepsInput = document.getElementById('form-recipe-steps');
    const noteInput = document.getElementById('form-recipe-note');
    const ingContainer = document.getElementById('modal-ingredients-list');

    if (!modal) return;
    ingContainer.innerHTML = '';

    if (recipeId) {
      const rec = findRecipe(recipeId);
      if (!rec) return;

      modalTitle.textContent = 'Edytuj Przepis';
      idInput.value = rec.id;
      titleInput.value = rec.title;
      catInput.value = rec.category;
      timeInput.value = rec.prepTime;
      kcalInput.value = rec.kcal;
      pInput.value = rec.protein;
      cInput.value = rec.carbs;
      fInput.value = rec.fat;
      batchInput.checked = !!rec.isBatchCooking;
      stepsInput.value = (rec.steps || []).join('\n');
      noteInput.value = rec.note || '';

      (rec.ingredients || []).forEach(ing => {
        addIngredientRow(ing.name, ing.amount, ing.unit, ing.shopCat || 'dry');
      });
    } else {
      modalTitle.textContent = 'Dodaj Nowy Przepis';
      idInput.value = '';
      titleInput.value = '';
      catInput.value = 'Kolacja';
      timeInput.value = '7 min';
      kcalInput.value = '590';
      pInput.value = '28';
      cInput.value = '82';
      fInput.value = '15';
      batchInput.checked = false;
      stepsInput.value = '';
      noteInput.value = '';

      addIngredientRow('Chleb żytni lub graham', 120, 'g', 'dry');
      addIngredientRow('Ser mozzarella', 40, 'g', 'dairy');
    }

    modal.classList.remove('hidden');
    recalculateRecipeFormMacro();
  };

  window.closeRecipeModal = function() {
    const modal = document.getElementById('recipe-modal');
    if (modal) modal.classList.add('hidden');
  };

  const shopCategoryDisplay = {
    dairy: { label: 'Nabiał', icon: '🥛', color: '#60a5fa', bg: 'rgba(96, 165, 250, 0.15)' },
    meat: { label: 'Mięso/Ryby', icon: '🥩', color: '#f87171', bg: 'rgba(248, 113, 113, 0.15)' },
    produce: { label: 'Warzywa/Owoce', icon: '🍌', color: '#4ade80', bg: 'rgba(74, 222, 128, 0.15)' },
    dry: { label: 'Suche', icon: '🥖', color: '#fbbf24', bg: 'rgba(251, 191, 36, 0.15)' },
    fats: { label: 'Tłuszcze', icon: '🫒', color: '#c084fc', bg: 'rgba(192, 132, 252, 0.15)' },
    supplements: { label: 'Suple', icon: '⚡', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)' }
  };

  window.addIngredientRow = function(name = '', amount = '', unit = '', category = '') {
    const container = document.getElementById('modal-ingredients-list');
    if (!container) return;

    if (name) {
      const p = findProduct(name);
      if (p) {
        if (p.defaultUnit && !unit) unit = p.defaultUnit;
        if (p.category && !category) category = p.category;
      }
    }

    unit = unit || 'g';
    category = category || 'dry';
    const catData = shopCategoryDisplay[category] || { label: category, icon: '📦', color: '#94a3b8', bg: 'rgba(255, 255, 255, 0.08)' };

    const card = document.createElement('div');
    card.className = 'modal-ing-card';
    card.innerHTML = `
      <div class="modal-ing-row">
        <input type="text" class="ing-input-name" list="products-datalist" placeholder="Wpisz produkt (np. Mleko 2%, Pierś z kurczaka)" value="${name}" required>
        <div class="ing-amount-box">
          <input type="number" class="ing-input-amount" placeholder="Ilość" value="${amount}" required step="0.5" min="0">
          <span class="ing-unit-badge">${unit}</span>
          <input type="hidden" class="ing-input-unit" value="${unit}">
        </div>
        <div class="ing-cat-badge-wrap" title="Kategoria przypisana automatycznie z bazy produktów">
          <span class="ing-cat-badge" style="color: ${catData.color}; background: ${catData.bg};">
            ${catData.icon} ${catData.label}
          </span>
          <input type="hidden" class="ing-input-cat" value="${category}">
        </div>
        <button type="button" class="btn-remove-ing" onclick="removeIngredientRow(this)" title="Usuń składnik">×</button>
      </div>
      <div class="ing-row-bottom">
        <div class="ing-macro-preview"></div>
        <button type="button" class="btn-quick-add-prod hidden" onclick="quickAddProductFromRow(this)" title="Zapisz ten produkt do bazy">
          ➕ Zapisz produkt w bazie
        </button>
      </div>
    `;

    const nameInput = card.querySelector('.ing-input-name');
    const amountInput = card.querySelector('.ing-input-amount');
    const unitBadge = card.querySelector('.ing-unit-badge');
    const unitInput = card.querySelector('.ing-input-unit');
    const catBadge = card.querySelector('.ing-cat-badge');
    const catInput = card.querySelector('.ing-input-cat');

    nameInput.addEventListener('input', () => {
      const prod = findProduct(nameInput.value);
      if (prod) {
        const u = prod.defaultUnit || 'g';
        const c = prod.category || 'dry';
        const cInfo = shopCategoryDisplay[c] || { label: c, icon: '📦', color: '#94a3b8', bg: 'rgba(255, 255, 255, 0.08)' };

        if (unitBadge) unitBadge.textContent = u;
        if (unitInput) unitInput.value = u;
        if (catInput) catInput.value = c;
        if (catBadge) {
          catBadge.innerHTML = `${cInfo.icon} ${cInfo.label}`;
          catBadge.style.color = cInfo.color;
          catBadge.style.background = cInfo.bg;
        }
      }
      recalculateRecipeFormMacro();
    });

    amountInput.addEventListener('input', () => recalculateRecipeFormMacro());

    container.appendChild(card);
    recalculateRecipeFormMacro();
  };

  window.removeIngredientRow = function(btn) {
    const card = btn.closest('.modal-ing-card');
    if (card) {
      card.remove();
      recalculateRecipeFormMacro();
    }
  };

  window.quickAddProductFromRow = function(btn) {
    const name = btn.getAttribute('data-prod-name') || '';
    const cat = btn.getAttribute('data-prod-cat') || 'dry';
    openProductModal({ name, category: cat, defaultUnit: 'g' });
  };

  window.saveRecipeForm = function(event) {
    event.preventDefault();

    const id = document.getElementById('edit-recipe-id').value;
    const title = document.getElementById('form-recipe-title').value.trim();
    const category = document.getElementById('form-recipe-cat').value;
    const prepTime = document.getElementById('form-recipe-time').value.trim() || '7 min';
    const kcal = parseInt(document.getElementById('form-recipe-kcal').value) || 0;
    const protein = parseFloat(document.getElementById('form-recipe-protein').value) || 0;
    const carbs = parseFloat(document.getElementById('form-recipe-carbs').value) || 0;
    const fat = parseFloat(document.getElementById('form-recipe-fat').value) || 0;
    const isBatchCooking = document.getElementById('form-recipe-batch').checked;
    const stepsText = document.getElementById('form-recipe-steps').value;
    const note = document.getElementById('form-recipe-note').value.trim();

    let catType = 'kolacja';
    if (category.includes('Shake')) catType = 'shake';
    else if (category.includes('Obiad')) catType = 'dinner';
    else if (category.includes('Gainer') || category.includes('Ostatni')) catType = 'gainer';

    const ingRows = document.querySelectorAll('.modal-ing-card');
    const ingredients = [];
    ingRows.forEach(card => {
      const name = card.querySelector('.ing-input-name').value.trim();
      const amount = parseFloat(card.querySelector('.ing-input-amount').value) || 0;
      const unit = card.querySelector('.ing-input-unit')?.value || 'g';
      const shopCat = card.querySelector('.ing-input-cat')?.value || 'dry';

      if (name) {
        ingredients.push({
          name,
          amount,
          unit,
          homeMeasure: `${amount} ${unit}`,
          shopCat
        });
      }
    });

    const steps = stepsText.split('\n').map(s => s.trim()).filter(s => s.length > 0);

    if (id) {
      const index = state.recipesCatalog.findIndex(r => r.id === id);
      if (index !== -1) {
        state.recipesCatalog[index] = {
          ...state.recipesCatalog[index],
          title, category, catType, prepTime, kcal, protein, carbs, fat, isBatchCooking, ingredients, steps, note
        };
      }
      showToast('Zaktualizowano przepis! ✏️');
    } else {
      const newId = 'rec_custom_' + Date.now();
      state.recipesCatalog.unshift({
        id: newId,
        title, category, catType, prepTime, kcal, protein, carbs, fat, isBatchCooking, ingredients, steps, note
      });
      showToast('Dodano nowy przepis do bazy! 🎉');
    }

    localStorage.setItem('gains_recipes_catalog_v3', JSON.stringify(state.recipesCatalog));
    closeRecipeModal();
    renderRecipesCatalog();
    renderMeals();
    renderShoppingList();
    renderProductsCatalog();
  };

  window.deleteRecipe = function(recipeId) {
    if (confirm('Czy na pewno chcesz usunąć ten przepis z bazy?')) {
      state.recipesCatalog = state.recipesCatalog.filter(r => r.id !== recipeId);
      localStorage.setItem('gains_recipes_catalog_v3', JSON.stringify(state.recipesCatalog));
      renderRecipesCatalog();
      renderMeals();
      renderShoppingList();
      renderProductsCatalog();
      showToast('Usunięto przepis z bazy.');
    }
  };

  window.copyRecipeCardToFitatu = function(recipeId) {
    const rec = findRecipe(recipeId);
    if (!rec) return;

    let text = `📋 ${rec.title}\n`;
    text += `Wartości: ~${rec.kcal} kcal | B: ${rec.protein}g | T: ${rec.fat}g | W: ${rec.carbs}g\n`;
    text += `Składniki do wpisania w Fitatu:\n`;
    rec.ingredients.forEach(i => {
      text += `• ${i.name}: ${i.amount}${i.unit} (${i.homeMeasure})\n`;
    });

    navigator.clipboard.writeText(text).then(() => {
      showToast(`Skopiowano przepis do Fitatu! 📋`);
    });
  };

  // --- PRODUCT MODAL FUNCTIONS (DATABASE MANAGEMENT) ---
  window.openProductModal = function(productData = null) {
    const modal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('modal-product-title');
    const idInput = document.getElementById('edit-product-id');
    const nameInput = document.getElementById('form-prod-name');
    const catInput = document.getElementById('form-prod-cat');
    const unitInput = document.getElementById('form-prod-unit');
    const kcalInput = document.getElementById('form-prod-kcal');
    const pInput = document.getElementById('form-prod-protein');
    const cInput = document.getElementById('form-prod-carbs');
    const fInput = document.getElementById('form-prod-fat');
    const pieceInput = document.getElementById('form-prod-piece');
    const spoonInput = document.getElementById('form-prod-spoon');

    if (!modal) return;

    if (typeof productData === 'string') {
      const prod = state.productsDatabase.find(p => p.id === productData);
      if (prod) {
        modalTitle.textContent = 'Edytuj Produkt w Bazie';
        idInput.value = prod.id;
        nameInput.value = prod.name;
        catInput.value = prod.category || 'dairy';
        if (unitInput) unitInput.value = prod.defaultUnit || 'g';
        kcalInput.value = prod.kcal;
        pInput.value = prod.protein;
        cInput.value = prod.carbs;
        fInput.value = prod.fat;
        pieceInput.value = prod.pieceWeight || '';
        spoonInput.value = prod.spoonWeight || '';
      }
    } else if (productData && typeof productData === 'object') {
      modalTitle.textContent = 'Dodaj Produkt do Bazy';
      idInput.value = productData.id || '';
      nameInput.value = productData.name || '';
      catInput.value = productData.category || 'dairy';
      if (unitInput) unitInput.value = productData.defaultUnit || 'g';
      kcalInput.value = productData.kcal !== undefined ? productData.kcal : '';
      pInput.value = productData.protein !== undefined ? productData.protein : '';
      cInput.value = productData.carbs !== undefined ? productData.carbs : '';
      fInput.value = productData.fat !== undefined ? productData.fat : '';
      pieceInput.value = productData.pieceWeight || '';
      spoonInput.value = productData.spoonWeight || '';
    } else {
      modalTitle.textContent = 'Dodaj Nowy Produkt do Bazy';
      idInput.value = '';
      nameInput.value = '';
      catInput.value = 'dairy';
      if (unitInput) unitInput.value = 'g';
      kcalInput.value = '';
      pInput.value = '';
      cInput.value = '';
      fInput.value = '';
      pieceInput.value = '';
      spoonInput.value = '';
    }

    modal.classList.remove('hidden');
  };

  window.closeProductModal = function() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.classList.add('hidden');
  };

  window.saveProductForm = function(event) {
    event.preventDefault();

    const id = document.getElementById('edit-product-id').value;
    const name = document.getElementById('form-prod-name').value.trim();
    const category = document.getElementById('form-prod-cat').value;
    const defaultUnit = document.getElementById('form-prod-unit')?.value || 'g';
    const kcal = parseInt(document.getElementById('form-prod-kcal').value) || 0;
    const protein = parseFloat(document.getElementById('form-prod-protein').value) || 0;
    const carbs = parseFloat(document.getElementById('form-prod-carbs').value) || 0;
    const fat = parseFloat(document.getElementById('form-prod-fat').value) || 0;
    const pieceWeight = parseInt(document.getElementById('form-prod-piece').value) || null;
    const spoonWeight = parseInt(document.getElementById('form-prod-spoon').value) || null;

    if (!name) return;

    if (id) {
      const idx = state.productsDatabase.findIndex(p => p.id === id);
      if (idx !== -1) {
        state.productsDatabase[idx] = {
          ...state.productsDatabase[idx],
          name, category, defaultUnit, kcal, protein, carbs, fat, pieceWeight, spoonWeight
        };
      }
      showToast(`Zaktualizowano produkt: ${name} 🍎`);
    } else {
      const newId = 'prod_custom_' + Date.now();
      state.productsDatabase.unshift({
        id: newId,
        name, category, defaultUnit, kcal, protein, carbs, fat, pieceWeight, spoonWeight,
        aliases: [name.toLowerCase()]
      });
      showToast(`Zapamiętano nowy produkt w bazie: ${name}! 🎉`);
    }

    localStorage.setItem('gains_products_db_v2', JSON.stringify(state.productsDatabase));
    populateProductsDatalist();
    renderProductsCatalog();
    closeProductModal();

    // If recipe modal is open, trigger live recalculation immediately
    const recipeModal = document.getElementById('recipe-modal');
    if (recipeModal && !recipeModal.classList.contains('hidden')) {
      recalculateRecipeFormMacro(true);
    }
  };

  window.deleteProduct = function(productId) {
    const prod = state.productsDatabase.find(p => p.id === productId);
    const prodName = prod ? prod.name : 'ten produkt';
    if (confirm(`Czy na pewno chcesz usunąć "${prodName}" z bazy produktów?`)) {
      state.productsDatabase = state.productsDatabase.filter(p => p.id !== productId);
      localStorage.setItem('gains_products_db_v2', JSON.stringify(state.productsDatabase));
      populateProductsDatalist();
      renderProductsCatalog();
      showToast(`Usunięto "${prodName}" z bazy produktów.`);
    }
  };

  window.resetProductsDatabaseToDefault = function() {
    if (confirm('Czy na pewno chcesz przywrócić fabryczną bazę produktów? Wszystkie standardowe składniki i ich wartości zostaną przywrócone.')) {
      state.productsDatabase = [...defaultProductsDatabase];
      localStorage.setItem('gains_products_db_v2', JSON.stringify(state.productsDatabase));
      populateProductsDatalist();
      renderProductsCatalog();
      showToast('Przywrócono domyślną bazę produktów! ↺');
    }
  };

  // --- RENDER PRODUCTS CATALOG (TAB 4) ---
  function renderProductsCatalog() {
    const container = document.getElementById('products-catalog');
    if (!container) return;

    const badge = document.getElementById('products-badge');
    if (badge) badge.textContent = state.productsDatabase.length;

    let filtered = state.productsDatabase.filter(p => {
      if (state.productFilter !== 'all' && p.category !== state.productFilter) {
        return false;
      }
      if (state.productSearch.trim() !== '') {
        const q = state.productSearch.toLowerCase();
        const inName = p.name.toLowerCase().includes(q);
        const inAliases = p.aliases?.some(a => a.toLowerCase().includes(q));
        if (!inName && !inAliases) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
          <p style="color: var(--text-muted); font-size: 1rem;">Brak produktów pasujących do filtra.</p>
        </div>
      `;
      return;
    }

    const catBadgeNames = {
      dairy: { label: 'Nabiał & Jaja', color: '#60a5fa' },
      meat: { label: 'Mięso & Ryby', color: '#f87171' },
      produce: { label: 'Owoce & Warzywa', color: '#4ade80' },
      dry: { label: 'Produkty Suche', color: '#fbbf24' },
      fats: { label: 'Tłuszcze & Dodatki', color: '#c084fc' },
      supplements: { label: 'Odżywki & Suple', color: '#38bdf8' }
    };

    // Calculate usage count in recipes
    const usageCount = {};
    state.recipesCatalog.forEach(rec => {
      (rec.ingredients || []).forEach(ing => {
        const prod = findProduct(ing.name);
        if (prod) {
          usageCount[prod.id] = (usageCount[prod.id] || 0) + 1;
        }
      });
    });

    container.innerHTML = filtered.map(p => {
      const catInfo = catBadgeNames[p.category] || { label: p.category, color: '#94a3b8' };
      const uses = usageCount[p.id] || 0;

      return `
        <div class="product-card" id="prod-${p.id}">
          <div class="prod-header">
            <div>
              <span class="meal-badge" style="background: rgba(255, 255, 255, 0.08); color: ${catInfo.color}; font-size: 0.72rem; margin-bottom: 0.35rem;">
                ${catInfo.label}
              </span>
              <h4 class="prod-title">${p.name}</h4>
            </div>

            <div class="prod-actions">
              <button class="r-action-btn" onclick="openProductModal('${p.id}')" title="Edytuj produkt">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>
              <button class="r-action-btn delete" onclick="deleteProduct('${p.id}')" title="Usuń z bazy">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="prod-macros-grid">
            <div class="prod-macro-item kcal">
              <span class="m-label">Kcal/100g</span>
              <span class="m-val">${p.kcal}</span>
            </div>
            <div class="prod-macro-item protein">
              <span class="m-label">Białko</span>
              <span class="m-val">${p.protein}g</span>
            </div>
            <div class="prod-macro-item carbs">
              <span class="m-label">Węgle</span>
              <span class="m-val">${p.carbs}g</span>
            </div>
            <div class="prod-macro-item fat">
              <span class="m-label">Tłuszcze</span>
              <span class="m-val">${p.fat}g</span>
            </div>
          </div>

          <div class="prod-footer">
            <div>
              ${p.pieceWeight ? `<span class="prod-measure-tag">📦 1 szt: ${p.pieceWeight}g</span>` : ''}
              ${p.spoonWeight ? `<span class="prod-measure-tag">🥄 1 łyżka: ${p.spoonWeight}g</span>` : ''}
              ${!p.pieceWeight && !p.spoonWeight ? `<span style="color: var(--text-muted); font-size: 0.72rem;">Standard: g / ml</span>` : ''}
            </div>
            <span class="prod-usage-tag">
              ${uses > 0 ? `W ${uses} ${uses === 1 ? 'przepisie' : 'przepisach'}` : 'Baza'}
            </span>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- RECIPE SEARCH & FILTERS LISTENERS ---
  const searchInput = document.getElementById('recipes-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.recipeSearch = e.target.value;
      renderRecipesCatalog();
    });
  }

  const filterButtons = document.querySelectorAll('#recipe-filter-pills .pill-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.recipeFilter = btn.getAttribute('data-filter') || 'all';
      renderRecipesCatalog();
    });
  });

  // --- RENDER DAY SELECTOR ---
  function renderWeekDaySelector() {
    const container = document.getElementById('week-days-container');
    if (!container) return;

    const weekly = getWeeklyPlan();

    container.innerHTML = weekDays.map(day => {
      const isActive = day.key === state.activeDay;
      const dayMeals = weekly[day.key]?.meals || [];
      const eatenCount = dayMeals.filter(m => !!state.eatenMeals[m.id]).length;
      const allDone = eatenCount === dayMeals.length && dayMeals.length > 0;

      return `
        <button class="day-tab-btn ${isActive ? 'active' : ''} ${allDone ? 'all-done' : ''}" onclick="selectDay('${day.key}')">
          <div class="day-tab-header">
            <span class="day-short">${day.short}</span>
            ${day.isGym ? '<span class="gym-badge" title="Dzień Treningowy">🏋️</span>' : '<span class="rest-badge" title="Dzień Regeneracji">🛌</span>'}
          </div>
          <span class="day-name">${day.name}</span>
          <div class="day-meta-row">
            ${day.isBatchDay ? '<span class="batch-tag">Gotuj x2</span>' : ''}
            <span class="day-status-dots">${eatenCount}/${dayMeals.length}</span>
          </div>
        </button>
      `;
    }).join('');
  }

  window.selectDay = function(dayKey) {
    state.activeDay = dayKey;
    localStorage.setItem('gains_active_day', dayKey);
    state.dinnerBatchMultiplier = 1;
    renderWeekDaySelector();
    renderMeals();
    showToast(`Przełączono na ${weekDays.find(d => d.key === dayKey)?.name}!`);
  };

  // --- RENDER MEALS FOR CURRENT DAY ---
  function renderMeals() {
    const container = document.getElementById('meals-container');
    const dayConfig = weekDays.find(d => d.key === state.activeDay) || weekDays[0];
    const weekly = getWeeklyPlan();
    const currentDayData = weekly[state.activeDay];
    if (!container || !currentDayData) return;

    const bannerText = document.getElementById('batch-banner-text');
    if (bannerText) {
      bannerText.innerHTML = `<strong>${dayConfig.name}:</strong> ${dayConfig.batchNote}`;
    }

    const gymToggle = document.getElementById('gym-day-toggle');
    const gymLabel = document.getElementById('gym-label');
    if (gymToggle && gymLabel) {
      gymToggle.checked = dayConfig.isGym;
      gymLabel.textContent = dayConfig.isGym ? 'Dzień Treningowy 🏋️' : 'Dzień Regeneracji 🛌';
    }

    container.innerHTML = currentDayData.meals.map(meal => {
      const isCompleted = !!state.eatenMeals[meal.id];
      const isDinner = meal.isBatchCooking;
      const mult = isDinner ? state.dinnerBatchMultiplier : 1;

      return `
        <article class="meal-card ${isCompleted ? 'completed' : ''}" id="card-${meal.id}">
          <div class="meal-header">
            <div class="meal-title-block">
              <button class="meal-check-btn" onclick="toggleMeal('${meal.id}')" title="${isCompleted ? 'Oznacz jako niezjedzone' : 'Oznacz jako zjedzone'}">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </button>
              <div>
                <div class="meal-badges-row">
                  <span class="meal-badge">${meal.number}</span>
                  <span class="meal-badge" style="background: rgba(16, 185, 129, 0.12); color: #34d399;">${meal.category}</span>
                  <span class="prep-time">⏱️ ${meal.prepTime}</span>
                  ${meal.isOverridden ? '<span class="overridden-badge" title="Posiłek zamieniony na inny dla tego dnia">✨ Zmieniony w tym dniu</span>' : ''}
                </div>
                <h3 class="meal-title">${meal.title}</h3>
              </div>
            </div>

            <div class="meal-macros">
              <span class="macro-chip kcal">🔥 ${meal.kcal * mult} kcal</span>
              <span class="macro-chip protein">🥩 ${meal.protein * mult}g B</span>
              <span class="macro-chip carbs">🌾 ${meal.carbs * mult}g W</span>
              <span class="macro-chip fat">🥑 ${meal.fat * mult}g T</span>
              ${isDinner ? `
                <button class="batch-toggle-btn" onclick="toggleDinnerBatch()" title="Przełącz składniki na 1 lub 2 dni">
                  ${state.dinnerBatchMultiplier === 2 ? '📦 Pokazujesz: Do garnka x2 (na 2 dni)' : '🍽️ Pokazujesz: 1 porcję'}
                </button>
              ` : ''}
            </div>
          </div>

          <div class="meal-body">
            <div class="ingredients-col">
              <div class="section-label">
                <span>Składniki ${mult > 1 ? '(Do garnka na 2 dni!)' : '(1 porcja)'}</span>
                <span style="font-weight: 400; text-transform: none; color: var(--accent-cyan); font-size: 0.72rem;">Wagi kuchenne</span>
              </div>
              <ul class="ingredients-list">
                ${meal.ingredients.map(ing => `
                  <li class="ingredient-item">
                    <span class="ing-name">
                      ${ing.name}
                      <span class="ing-sub">(${ing.homeMeasure}${mult > 1 && ing.amount > 1 ? ' × 2' : ''})</span>
                    </span>
                    <span class="ing-amount">${ing.amount * mult} ${ing.unit}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="instructions-col">
              <div class="section-label">Sposób Przygotowania</div>
              <ul class="instructions-list">
                ${(meal.steps || []).map((step, idx) => `
                  <li class="instruction-step">
                    <span class="step-num">${idx + 1}</span>
                    <span>${step}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>

          <div class="meal-footer">
            <span class="meal-note">💡 ${meal.note || ''}</span>
            <div class="meal-footer-actions">
              ${meal.isOverridden ? `
                <button class="btn-meal-action btn-restore-meal" onclick="restoreMealForSlot('${state.activeDay}', ${meal.mealIndex})" title="Przywróć domyślny posiłek dla tego dnia">
                  ↺ Domyślny
                </button>
              ` : ''}
              <button class="btn-meal-action btn-swap-meal" onclick="openSwapModal('${state.activeDay}', ${meal.mealIndex}, '${meal.catType || 'kolacja'}')" title="Zamień to danie na inny przepis z bazy">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M16 3h5v5"></path><path d="M4 20L21 3"></path><path d="M21 16v5h-5"></path><path d="M15 15l6 6"></path><path d="M4 4l5 5"></path></svg>
                Zamień posiłek
              </button>
              <button class="btn-meal-action btn-edit-meal" onclick="openRecipeModal('${meal.masterRecipeId || meal.id}')" title="Edytuj składniki lub gramatury tego przepisu">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                Edytuj przepis
              </button>
              <button class="fitatu-copy-btn" onclick="copyMealToFitatu('${meal.id}')" title="Kopiuje listę i gramatury do schowka">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Fitatu
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    updateDashboardMetrics();
  }

  // --- TOGGLE MEAL EATEN STATE ---
  window.toggleMeal = function(mealId) {
    if (state.eatenMeals[mealId]) {
      delete state.eatenMeals[mealId];
    } else {
      state.eatenMeals[mealId] = true;
      showToast('Oznaczono posiłek jako zjedzony! 💪');
    }
    localStorage.setItem('gains_eaten_meals', JSON.stringify(state.eatenMeals));
    renderWeekDaySelector();
    renderMeals();
  };

  // --- TOGGLE DINNER BATCH ---
  window.toggleDinnerBatch = function() {
    state.dinnerBatchMultiplier = state.dinnerBatchMultiplier === 1 ? 2 : 1;
    showToast(state.dinnerBatchMultiplier === 2 ? 'Widok x2: Wrzuć podwójną ilość do garnka!' : 'Widok 1 porcji.');
    renderMeals();
  };

  // --- UPDATE MACRO DASHBOARD ---
  function updateDashboardMetrics() {
    const weekly = getWeeklyPlan();
    const currentMeals = weekly[state.activeDay]?.meals || [];
    let eatenKcal = 0;
    let eatenP = 0;
    let eatenC = 0;
    let eatenF = 0;

    let targetKcal = 0;
    let targetP = 0;
    let targetC = 0;
    let targetF = 0;

    currentMeals.forEach(meal => {
      targetKcal += meal.kcal;
      targetP += meal.protein;
      targetC += meal.carbs;
      targetF += meal.fat;

      if (state.eatenMeals[meal.id]) {
        eatenKcal += meal.kcal;
        eatenP += meal.protein;
        eatenC += meal.carbs;
        eatenF += meal.fat;
      }
    });

    targetKcal = targetKcal || 3120;
    targetP = targetP || 190;
    targetC = targetC || 405;
    targetF = targetF || 89;

    document.getElementById('calories-eaten').textContent = eatenKcal;
    const circleTarget = document.getElementById('circle-target-label');
    if (circleTarget) circleTarget.textContent = `/ ${targetKcal} kcal`;
    const leftKcal = Math.max(0, targetKcal - eatenKcal);
    const leftText = document.getElementById('calories-left-text');
    const pill = document.getElementById('macro-status-pill');

    if (eatenKcal >= targetKcal) {
      leftText.textContent = `Cel osiągnięty! Pełna nadwyżka anaboliczna (+${eatenKcal - targetKcal} kcal)`;
      pill.textContent = '🔥 Cel Zrealizowany!';
      pill.style.background = 'rgba(16, 185, 129, 0.25)';
    } else {
      leftText.textContent = `Zostało: ${leftKcal} kcal do osiągnięcia nadwyżki`;
      const pct = Math.round((eatenKcal / targetKcal) * 100);
      pill.textContent = `${pct}% Zrealizowano`;
      pill.style.background = 'rgba(16, 185, 129, 0.15)';
    }

    const circle = document.getElementById('calorie-circle');
    const circumference = 351.85;
    const progress = Math.min(1, eatenKcal / targetKcal);
    const offset = circumference - (progress * circumference);
    circle.style.strokeDashoffset = offset;

    document.getElementById('val-protein').textContent = `${eatenP} / ${targetP} g`;
    document.getElementById('bar-protein').style.width = `${Math.min(100, (eatenP / targetP) * 100)}%`;

    document.getElementById('val-carbs').textContent = `${eatenC} / ${targetC} g`;
    document.getElementById('bar-carbs').style.width = `${Math.min(100, (eatenC / targetC) * 100)}%`;

    document.getElementById('val-fat').textContent = `${eatenF} / ${targetF} g`;
    document.getElementById('bar-fat').style.width = `${Math.min(100, (eatenF / targetF) * 100)}%`;
  }

  // --- MEAL SWAP MODAL HANDLERS ---
  window.openSwapModal = function(dayKey, mealIndex, catType = 'all') {
    state.activeSwapSlot = {
      dayKey,
      mealIndex,
      catType,
      filter: 'matching'
    };

    const modal = document.getElementById('swap-modal');
    const title = document.getElementById('swap-modal-title');
    const subtitle = document.getElementById('swap-modal-subtitle');
    const restoreBtn = document.getElementById('btn-restore-default-meal');
    const matchingBtn = document.getElementById('swap-filter-matching');
    const allBtn = document.getElementById('swap-filter-all');

    if (!modal) return;

    const dayName = weekDays.find(d => d.key === dayKey)?.name || dayKey;
    const weekly = getWeeklyPlan();
    const currentMeal = weekly[dayKey]?.meals[mealIndex];

    if (title) title.textContent = `Zamień ${currentMeal ? currentMeal.number : 'Posiłek'} (${dayName})`;
    if (subtitle) subtitle.textContent = `Aktualne danie: ${currentMeal ? currentMeal.title : ''}`;

    if (restoreBtn) {
      restoreBtn.style.display = (currentMeal && currentMeal.isOverridden) ? 'inline-block' : 'none';
    }

    if (matchingBtn && allBtn) {
      matchingBtn.classList.add('active');
      allBtn.classList.remove('active');
    }

    renderSwapModalOptions();
    modal.classList.remove('hidden');
  };

  window.closeSwapModal = function() {
    const modal = document.getElementById('swap-modal');
    if (modal) modal.classList.add('hidden');
    state.activeSwapSlot = null;
  };

  function renderSwapModalOptions() {
    const container = document.getElementById('swap-options-container');
    if (!container || !state.activeSwapSlot) return;

    const { dayKey, mealIndex, catType, filter } = state.activeSwapSlot;
    const weekly = getWeeklyPlan();
    const currentMeal = weekly[dayKey]?.meals[mealIndex];

    let recipes = state.recipesCatalog;
    if (filter === 'matching' && catType && catType !== 'all') {
      recipes = recipes.filter(r => r.catType === catType);
      if (recipes.length === 0) {
        recipes = state.recipesCatalog;
      }
    }

    container.innerHTML = recipes.map(r => {
      const isCurrent = currentMeal && (currentMeal.masterRecipeId === r.id || currentMeal.title === r.title);
      return `
        <div class="swap-option-card ${isCurrent ? 'current' : ''}">
          <div>
            <div class="swap-opt-header">
              <span class="meal-badge" style="background: rgba(16, 185, 129, 0.12); color: #34d399;">${r.category}</span>
              <span class="prep-time">⏱️ ${r.prepTime}</span>
            </div>
            <h4 class="swap-opt-title" style="margin: 0.6rem 0 0.4rem 0;">${r.title}</h4>
            <div class="swap-opt-macros">
              <span class="macro-chip kcal">🔥 ${r.kcal} kcal</span>
              <span class="macro-chip protein">🥩 ${r.protein}g B</span>
              <span class="macro-chip carbs">🌾 ${r.carbs}g W</span>
              <span class="macro-chip fat">🥑 ${r.fat}g T</span>
            </div>
          </div>
          <div>
            <button class="swap-opt-btn ${isCurrent ? 'is-active-btn' : ''}" onclick="selectSwapRecipe('${r.id}')">
              ${isCurrent ? '✓ Aktualnie w planie na ten dzień' : 'Wybierz ten posiłek &rarr;'}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  window.selectSwapRecipe = function(recipeId) {
    if (!state.activeSwapSlot) return;
    const { dayKey, mealIndex } = state.activeSwapSlot;

    if (!state.dayMealOverrides[dayKey]) {
      state.dayMealOverrides[dayKey] = {};
    }
    state.dayMealOverrides[dayKey][mealIndex] = recipeId;
    localStorage.setItem('gains_day_meal_overrides', JSON.stringify(state.dayMealOverrides));

    const rec = findRecipe(recipeId);
    showToast(`Zamieniono posiłek na: ${rec ? rec.title.slice(0, 30) : ''}... 🔄`);

    closeSwapModal();
    renderMeals();
    renderWeekDaySelector();
    renderWeekMatrix();
    renderMonthCalendar();
    renderShoppingList();
  };

  window.restoreMealForSlot = function(dayKey, mealIndex) {
    if (state.dayMealOverrides[dayKey] && state.dayMealOverrides[dayKey][mealIndex]) {
      delete state.dayMealOverrides[dayKey][mealIndex];
      if (Object.keys(state.dayMealOverrides[dayKey]).length === 0) {
        delete state.dayMealOverrides[dayKey];
      }
      localStorage.setItem('gains_day_meal_overrides', JSON.stringify(state.dayMealOverrides));
      showToast('Przywrócono domyślne danie dla tego dnia! ↺');
      renderMeals();
      renderWeekDaySelector();
      renderWeekMatrix();
      renderMonthCalendar();
      renderShoppingList();
    }
  };

  window.restoreDefaultMealForActiveSlot = function() {
    if (!state.activeSwapSlot) return;
    const { dayKey, mealIndex } = state.activeSwapSlot;
    restoreMealForSlot(dayKey, mealIndex);
    closeSwapModal();
  };

  // Swap modal category filter pill listeners
  const swapFilterPills = document.querySelectorAll('#swap-category-filter .pill-btn');
  swapFilterPills.forEach(btn => {
    btn.addEventListener('click', () => {
      swapFilterPills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (state.activeSwapSlot) {
        state.activeSwapSlot.filter = btn.getAttribute('data-swapfilter') || 'matching';
        renderSwapModalOptions();
      }
    });
  });

  // --- RENDER WEEK GRID MATRIX (ALL 7 DAYS SIDE-BY-SIDE) ---
  function renderWeekMatrix() {
    const container = document.getElementById('week-matrix-container');
    if (!container) return;

    const weekly = getWeeklyPlan();

    container.innerHTML = weekDays.map(day => {
      const dayData = weekly[day.key];
      const meals = dayData?.meals || [];
      const isActive = day.key === state.activeDay;

      let totalKcal = 0;
      let totalProtein = 0;
      meals.forEach(m => {
        totalKcal += m.kcal;
        totalProtein += m.protein;
      });

      return `
        <div class="week-matrix-col ${isActive ? 'active-day-col' : ''}">
          <div class="matrix-col-header">
            <div class="matrix-day-title">
              <span class="matrix-day-short">${day.short}</span>
              <span class="matrix-day-full">${day.name}</span>
            </div>
            <div class="matrix-day-badges">
              ${day.isGym ? '<span class="cal-badge-pill gym">🏋️ Trening</span>' : '<span class="cal-badge-pill rest">🛌 Rest</span>'}
              ${day.isBatchDay ? '<span class="batch-tag">Gotuj x2</span>' : ''}
            </div>
          </div>

          <div class="matrix-totals">
            <span class="kcal">🔥 ${totalKcal} kcal</span>
            <span class="protein">🥩 ${totalProtein}g B</span>
          </div>

          <div class="matrix-meals-list">
            ${meals.map((m, idx) => `
              <div class="matrix-meal-item ${state.eatenMeals[m.id] ? 'completed' : ''}">
                <div class="matrix-meal-top">
                  <span>${m.number.split(' ')[0]} ${m.number.split(' ')[1] || ''}</span>
                  <span>⏱️ ${m.prepTime}</span>
                </div>
                <div class="matrix-meal-title">
                  ${m.isOverridden ? '<span style="color: var(--accent-cyan); font-weight: 700;">✨ </span>' : ''}${m.title}
                </div>
                <div class="matrix-meal-meta">
                  <span style="font-size: 0.72rem; color: #34d399; font-weight: 700;">${m.kcal} kcal • ${m.protein}g B</span>
                  <div class="matrix-meal-actions">
                    <button class="matrix-btn-xs" onclick="openSwapModal('${day.key}', ${idx}, '${m.catType || 'kolacja'}')" title="Zamień ten posiłek">🔄 Zamień</button>
                    <button class="matrix-btn-xs" onclick="openRecipeModal('${m.masterRecipeId || m.id}')" title="Edytuj przepis">✏️</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <button class="btn-open-day-view" onclick="selectDay('${day.key}'); setPlanView('day');">
            Otwórz ten dzień szczegółowo &rarr;
          </button>
        </div>
      `;
    }).join('');
  }

  // --- RENDER FULL MONTH CALENDAR VIEW ---
  function renderMonthCalendar() {
    const container = document.getElementById('month-calendar-container');
    const titleEl = document.getElementById('cal-month-title');
    if (!container) return;

    const polishMonths = [
      'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
      'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
    ];

    const currentYear = state.calendarDate.getFullYear();
    const currentMonth = state.calendarDate.getMonth();

    if (titleEl) {
      titleEl.textContent = `${polishMonths[currentMonth]} ${currentYear}`;
    }

    // Days in current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    // First day of month (convert Sunday=0 to Monday=0..Sunday=6)
    const firstDayOfWeek = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7;
    // Days in previous month
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

    const weekly = getWeeklyPlan();
    const today = new Date();
    const isCurrentRealMonth = today.getFullYear() === currentYear && today.getMonth() === currentMonth;

    let html = '';

    // 1. Weekday headers (Pon..Nd)
    const weekdayHeaders = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd'];
    weekdayHeaders.forEach(name => {
      html += `<div class="cal-weekday-header">${name}</div>`;
    });

    // 2. Trailing days from previous month
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const prevDateNum = daysInPrevMonth - i;
      html += `
        <div class="cal-day-cell other-month" onclick="changeMonth(-1)">
          <div class="cal-cell-top">
            <span class="cal-date-badge">${prevDateNum}</span>
          </div>
          <div class="cal-cell-meals">
            <span style="font-size: 0.7rem; color: var(--text-muted);">&larr; Poprzedni miesiąc</span>
          </div>
        </div>
      `;
    }

    // 3. Days of current month
    for (let d = 1; d <= daysInMonth; d++) {
      const thisDate = new Date(currentYear, currentMonth, d);
      const dayOfWeekIdx = (thisDate.getDay() + 6) % 7;
      const dayConfig = weekDays[dayOfWeekIdx];
      const dayKey = dayConfig.key;
      const isToday = isCurrentRealMonth && today.getDate() === d;
      const dayMeals = weekly[dayKey]?.meals || [];

      let totalKcal = 0;
      let totalP = 0;
      dayMeals.forEach(m => {
        totalKcal += m.kcal;
        totalP += m.protein;
      });

      html += `
        <div class="cal-day-cell ${isToday ? 'today-cell' : ''}" onclick="selectDay('${dayKey}'); setPlanView('day');" title="Kliknij, aby otworzyć szczegóły dla ${dayConfig.name} (${d} ${polishMonths[currentMonth]})">
          <div class="cal-cell-top">
            <span class="cal-date-badge">${d}</span>
            <span class="cal-badge-pill ${dayConfig.isGym ? 'gym' : 'rest'}">
              ${dayConfig.isGym ? '🏋️ Siłownia' : '🛌 Rest'}
            </span>
          </div>

          <div class="cal-cell-meals">
            <div class="cal-mini-meal" title="${dayMeals[0]?.title || ''}">
              <span class="cal-mini-meal-bullet">🥣</span>
              <span>${(dayMeals[0]?.title || 'Śniadanie').split(':')[0]}</span>
            </div>
            <div class="cal-mini-meal" title="${dayMeals[1]?.title || ''}">
              <span class="cal-mini-meal-bullet">🍗</span>
              <span>${(dayMeals[1]?.title || 'Obiad').split(':')[0]}</span>
            </div>
            <div class="cal-mini-meal" title="${dayMeals[2]?.title || ''}">
              <span class="cal-mini-meal-bullet">🥪</span>
              <span>${(dayMeals[2]?.title || 'Kolacja').split(':')[0]}</span>
            </div>
            <div class="cal-mini-meal" title="${dayMeals[3]?.title || ''}">
              <span class="cal-mini-meal-bullet">⚡</span>
              <span>Gainer 100g + WPC</span>
            </div>
          </div>

          <div class="cal-cell-bottom">
            <span class="cal-batch-indicator">${dayConfig.isBatchDay ? '📦 Gotuj x2' : (dayConfig.isGym ? '🔥 Trening' : '🍽️ Z wczoraj')}</span>
            <span class="cal-macro-stat">${totalKcal} kcal</span>
          </div>
        </div>
      `;
    }

    // 4. Trailing days for next month to complete the 7-column row
    const totalRenderedCells = firstDayOfWeek + daysInMonth;
    const remainingInGrid = (7 - (totalRenderedCells % 7)) % 7;
    for (let j = 1; j <= remainingInGrid; j++) {
      html += `
        <div class="cal-day-cell other-month" onclick="changeMonth(1)">
          <div class="cal-cell-top">
            <span class="cal-date-badge">${j}</span>
          </div>
          <div class="cal-cell-meals">
            <span style="font-size: 0.7rem; color: var(--text-muted);">Następny miesiąc &rarr;</span>
          </div>
        </div>
      `;
    }

    container.innerHTML = html;
  }

  window.changeMonth = function(delta) {
    state.calendarDate.setMonth(state.calendarDate.getMonth() + delta);
    renderMonthCalendar();
  };

  // --- PLAN VIEW MODE SWITCHER (DAY / WEEK / CALENDAR) ---
  function setPlanView(viewMode) {
    state.activePlanView = viewMode;
    localStorage.setItem('gains_plan_view', viewMode);

    const btnDay = document.getElementById('btn-view-day');
    const btnWeek = document.getElementById('btn-view-week');
    const btnCal = document.getElementById('btn-view-calendar');

    const vDay = document.getElementById('view-container-day');
    const vWeek = document.getElementById('view-container-week');
    const vCal = document.getElementById('view-container-calendar');

    [btnDay, btnWeek, btnCal].forEach(b => b?.classList.remove('active'));
    [vDay, vWeek, vCal].forEach(v => v?.classList.add('hidden'));

    if (viewMode === 'day') {
      btnDay?.classList.add('active');
      vDay?.classList.remove('hidden');
      renderWeekDaySelector();
      renderMeals();
    } else if (viewMode === 'week') {
      btnWeek?.classList.add('active');
      vWeek?.classList.remove('hidden');
      renderWeekMatrix();
    } else if (viewMode === 'calendar') {
      btnCal?.classList.add('active');
      vCal?.classList.remove('hidden');
      renderMonthCalendar();
    }
  }
  window.setPlanView = setPlanView;

  // View toggle button listeners
  document.getElementById('btn-view-day')?.addEventListener('click', () => setPlanView('day'));
  document.getElementById('btn-view-week')?.addEventListener('click', () => setPlanView('week'));
  document.getElementById('btn-view-calendar')?.addEventListener('click', () => setPlanView('calendar'));

  // Calendar navigation listeners
  document.getElementById('cal-prev-month')?.addEventListener('click', () => changeMonth(-1));
  document.getElementById('cal-next-month')?.addEventListener('click', () => changeMonth(1));
  document.getElementById('cal-today-btn')?.addEventListener('click', () => {
    state.calendarDate = new Date();
    renderMonthCalendar();
    showToast('Przejście do bieżącego miesiąca 📅');
  });

  // --- AGGREGATE SHOPPING INGREDIENTS WITH CANONICAL PRODUCT MERGING ---
  function getAggregatedShoppingList(daysCount) {
    let selectedDays = [];
    if (daysCount === 2) selectedDays = ['mon', 'tue'];
    else if (daysCount === 4) selectedDays = ['mon', 'tue', 'wed', 'thu'];
    else selectedDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    const aggregated = {};
    const weekly = getWeeklyPlan();

    selectedDays.forEach(dayKey => {
      const dayMeals = weekly[dayKey]?.meals || [];
      dayMeals.forEach(meal => {
        // Skip duplicate leftover dinners from batch cooking (already counted on day 1 x2)
        if (meal.title.includes('(Z wczoraj)')) return;
        const mult = meal.isBatchCooking ? 2 : 1;
        meal.ingredients.forEach(ing => {
          // Canonical product lookup to cleanly merge aliases (e.g. Pierś z kurczaka filet + Pierś z kurczaka -> 620g)
          const prod = findProduct(ing.name);
          const canonicalName = prod ? prod.name : ing.name;
          const cat = prod?.category || ing.shopCat || 'dry';
          const unit = ing.unit || prod?.defaultUnit || 'g';

          if (!aggregated[cat]) aggregated[cat] = {};
          
          if (!aggregated[cat][canonicalName]) {
            aggregated[cat][canonicalName] = {
              name: canonicalName,
              totalAmount: 0,
              unit: unit,
              category: cat
            };
          }
          aggregated[cat][canonicalName].totalAmount += (ing.amount * mult);
        });
      });
    });

    return aggregated;
  }

  // --- RENDER AGGREGATED SHOPPING LIST ---
  function renderShoppingList() {
    const container = document.getElementById('shopping-categories');
    if (!container) return;

    const aggregated = getAggregatedShoppingList(state.shopDays);

    let totalItems = 0;
    let checkedCount = 0;

    let html = '';
    Object.keys(shopCategoryNames).forEach(catKey => {
      const itemsObj = aggregated[catKey];
      if (!itemsObj) return;

      const items = Object.values(itemsObj);
      totalItems += items.length;

      html += `
        <div class="shop-category">
          <div class="cat-header">
            <span class="cat-title">${shopCategoryNames[catKey].icon} ${shopCategoryNames[catKey].title}</span>
            <span class="cat-count">${items.length} pozycji</span>
          </div>
          <ul class="shop-items">
            ${items.map(item => {
              const itemKey = `${item.name}_${state.shopDays}`;
              const isChecked = !!state.checkedShopItems[itemKey];
              if (isChecked) checkedCount++;

              return `
                <li class="shop-item ${isChecked ? 'checked' : ''}" onclick="toggleShopItem('${encodeURIComponent(itemKey)}')">
                  <div class="shop-checkbox">✓</div>
                  <span class="shop-name">${item.name}</span>
                  <span class="shop-weight">${item.totalAmount} ${item.unit}</span>
                </li>
              `;
            }).join('')}
          </ul>
        </div>
      `;
    });

    container.innerHTML = html;
    const badge = document.getElementById('shop-badge');
    if (badge) {
      badge.textContent = `${totalItems - checkedCount}`;
    }
  }

  window.toggleShopItem = function(encodedKey) {
    const itemKey = decodeURIComponent(encodedKey);
    if (state.checkedShopItems[itemKey]) {
      delete state.checkedShopItems[itemKey];
    } else {
      state.checkedShopItems[itemKey] = true;
    }
    localStorage.setItem('gains_checked_shop', JSON.stringify(state.checkedShopItems));
    renderShoppingList();
  };

  // --- WATER TRACKER LOGIC ---
  function updateWaterUI() {
    const display = document.getElementById('water-display');
    const bar = document.getElementById('water-progress-bar');
    if (!display || !bar) return;

    const liters = (state.waterMl / 1000).toFixed(1);
    const targetLiters = (state.waterTargetMl / 1000).toFixed(1);
    display.textContent = `${liters} / ${targetLiters} L`;

    const pct = Math.min(100, (state.waterMl / state.waterTargetMl) * 100);
    bar.style.width = `${pct}%`;
    localStorage.setItem('gains_water_ml', state.waterMl);
  }

  document.getElementById('btn-water-plus')?.addEventListener('click', () => {
    state.waterMl = Math.min(6000, state.waterMl + 250);
    updateWaterUI();
    showToast('+250 ml wody dodane! 💧');
  });

  document.getElementById('btn-water-minus')?.addEventListener('click', () => {
    state.waterMl = Math.max(0, state.waterMl - 250);
    updateWaterUI();
  });

  // --- COPY MEAL TO FITATU ---
  window.copyMealToFitatu = function(mealId) {
    const weekly = getWeeklyPlan();
    const dayData = weekly[state.activeDay];
    const meal = dayData?.meals.find(m => m.id === mealId);
    if (!meal) return;

    const mult = meal.isBatchCooking ? state.dinnerBatchMultiplier : 1;
    let text = `📋 ${meal.number}: ${meal.title}\n`;
    text += `Wartości: ~${meal.kcal * mult} kcal | B: ${meal.protein * mult}g | T: ${meal.fat * mult}g | W: ${meal.carbs * mult}g\n`;
    text += `Składniki do wpisania w Fitatu:\n`;
    meal.ingredients.forEach(i => {
      text += `• ${i.name}: ${i.amount * mult}${i.unit} (${i.homeMeasure})\n`;
    });

    navigator.clipboard.writeText(text).then(() => {
      showToast(`Skopiowano ${meal.number} dla Fitatu! 📋`);
    }).catch(() => {
      showToast('Zezwól na dostęp do schowka');
    });
  };

  // --- COPY FULL DAY SUMMARY ---
  document.getElementById('btn-copy-all-fitatu')?.addEventListener('click', () => {
    const dayConfig = weekDays.find(d => d.key === state.activeDay);
    const weekly = getWeeklyPlan();
    const dayMeals = weekly[state.activeDay]?.meals || [];

    let fullText = `🌟 GAINSPLAN - JADŁOSPIS: ${dayConfig?.name.toUpperCase()} (3024 KCAL)\n`;
    fullText += `Cel dnia: ~3024 kcal | Białko: 168g | Węgle: 395g | Tłuszcze: 81g\n\n`;

    dayMeals.forEach(meal => {
      fullText += `[${meal.number} - ${meal.title}] (${meal.kcal} kcal, B:${meal.protein}g, T:${meal.fat}g, W:${meal.carbs}g)\n`;
      meal.ingredients.forEach(i => {
        fullText += `- ${i.name}: ${i.amount}${i.unit} (${i.homeMeasure})\n`;
      });
      fullText += `\n`;
    });

    navigator.clipboard.writeText(fullText).then(() => {
      showToast(`${dayConfig?.name} skopiowany do schowka dla Fitatu! 🚀`);
    });
  });

  // --- COPY FULL WEEK PLAN SUMMARY ---
  window.copyFullWeekPlan = function() {
    let weekText = `🏆 GAINSPLAN PRO - KOMPLETNY TYDZIEŃ DIETY NA MASĘ (3024 KCAL)\n`;
    weekText += `Autor: Tymoteusz (65kg -> Cel: Czysta masa) | Śniadanie -> Obiad na 2 dni -> Kolacja -> Gainer na noc\n`;
    weekText += `========================================================================\n\n`;

    const weekly = getWeeklyPlan();

    weekDays.forEach(day => {
      weekText += `📅 ${day.name.toUpperCase()} (${day.isGym ? '🏋️ Dzień Treningowy' : '🛌 Regeneracja'})\n`;
      weekText += `Strategia: ${day.batchNote}\n`;
      const dayMeals = weekly[day.key]?.meals || [];
      dayMeals.forEach(m => {
        weekText += `  • ${m.number}: ${m.title} (~${m.kcal} kcal | B:${m.protein}g | T:${m.fat}g | W:${m.carbs}g)\n`;
      });
      weekText += `\n`;
    });

    navigator.clipboard.writeText(weekText).then(() => {
      showToast('Kompletny tygodniowy plan skopiowany! 📋');
    });
  };

  // --- COPY SHOPPING LIST ---
  document.getElementById('btn-copy-shopping')?.addEventListener('click', () => {
    let text = `🛒 LISTA ZAKUPÓW NA ${state.shopDays} DNI (GainsPlan 3024 kcal):\n\n`;

    const aggregated = getAggregatedShoppingList(state.shopDays);

    Object.keys(shopCategoryNames).forEach(k => {
      if (aggregated[k]) {
        text += `${shopCategoryNames[k].icon} ${shopCategoryNames[k].title}:\n`;
        Object.values(aggregated[k]).forEach(item => {
          text += ` [ ] ${item.name} - ${item.totalAmount} ${item.unit}\n`;
        });
        text += `\n`;
      }
    });

    navigator.clipboard.writeText(text).then(() => {
      showToast(`Lista zakupów na ${state.shopDays} dni skopiowana! 🛒`);
    });
  });

  // --- RESET BUTTONS ---
  document.getElementById('btn-reset-day')?.addEventListener('click', () => {
    if (confirm('Czy na pewno chcesz zresetować odhaczone posiłki dla tego dnia?')) {
      const weekly = getWeeklyPlan();
      const dayMeals = weekly[state.activeDay]?.meals || [];
      dayMeals.forEach(m => delete state.eatenMeals[m.id]);
      localStorage.setItem('gains_eaten_meals', JSON.stringify(state.eatenMeals));
      renderWeekDaySelector();
      renderMeals();
      showToast('Zresetowano licznik posiłków dla wybranego dnia.');
    }
  });

  document.getElementById('btn-reset-shopping')?.addEventListener('click', () => {
    state.checkedShopItems = {};
    localStorage.removeItem('gains_checked_shop');
    renderShoppingList();
    showToast('Wyczyszczono odznaczenia z listy zakupów.');
  });

  // --- TAB NAVIGATION ---
  const navButtons = document.querySelectorAll('.nav-item, .m-nav-item');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      if (!tabId) return;

      state.currentTab = tabId;

      navButtons.forEach(b => {
        if (b.getAttribute('data-tab') === tabId) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      const activePane = document.getElementById(`tab-${tabId}`);
      if (activePane) activePane.classList.add('active');

      const heading = document.getElementById('page-heading');
      const subtitle = document.getElementById('page-subtitle');
      if (tabId === 'plan') {
        heading.textContent = 'Jadłospis Tygodniowy na Masę';
        if (subtitle) subtitle.textContent = 'Śniadanie -> Obiad na 2 dni -> Kolacja -> Gainer na noc';
      }
      if (tabId === 'recipes') {
        heading.textContent = 'Książka Przepisów & Edytor';
        if (subtitle) subtitle.textContent = 'Baza wszystkich dań w diecie • Edytuj gramatury i dodawaj nowe potrawy';
      }
      if (tabId === 'products') {
        heading.textContent = 'Baza Produktów & Składników';
        if (subtitle) subtitle.textContent = 'Wartości odżywcze na 100g • Automatyczne wyliczanie kalorii i makroskładników (B/T/W)';
        renderProductsCatalog();
      }
      if (tabId === 'shopping') {
        heading.textContent = 'Lista Zakupów na Masę';
        if (subtitle) subtitle.textContent = 'Agregacja składników wg działów z Biedronki i Lidla';
      }
    });
  });

  // --- PRODUCTS SEARCH & FILTER LISTENERS ---
  const prodSearchInput = document.getElementById('products-search');
  if (prodSearchInput) {
    prodSearchInput.addEventListener('input', (e) => {
      state.productSearch = e.target.value;
      renderProductsCatalog();
    });
  }

  const prodFilterButtons = document.querySelectorAll('#product-filter-pills .pill-btn');
  prodFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      prodFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.productFilter = btn.getAttribute('data-prodfilter') || 'all';
      renderProductsCatalog();
    });
  });

  // --- AUTO-CALC TOGGLE LISTENER IN RECIPE MODAL ---
  document.getElementById('form-recipe-autocalc')?.addEventListener('change', (e) => {
    if (e.target.checked) {
      recalculateRecipeFormMacro(true);
      showToast('Włączono auto-synchronizację makro!');
    }
  });

  // --- SHOPPING DAYS SELECTOR ---
  const dayButtons = document.querySelectorAll('#shop-days-group .btn-toggle');
  dayButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      dayButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.shopDays = parseInt(btn.getAttribute('data-days')) || 7;
      renderShoppingList();
      showToast(`Przeliczono zakupy na ${state.shopDays} dni!`);
    });
  });

  // --- TOAST NOTIFICATION HELPER ---
  let toastTimeout;
  function showToast(message) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;

    toastText.textContent = message;
    toast.classList.remove('hidden');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.add('hidden');
    }, 2800);
  }

  // --- INITIALIZE APP ---
  populateProductsDatalist();
  renderProductsCatalog();
  renderRecipesCatalog();
  renderWeekDaySelector();
  setPlanView(state.activePlanView || 'day');
  renderShoppingList();
  updateWaterUI();
});
