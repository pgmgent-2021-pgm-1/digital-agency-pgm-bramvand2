const projects = [
    {
        titel: "One Minute Festival 2020",
        synopsis: `Het One Minute Festival is een gratis kortfilmfestival waar de 50 beste filmpjes van studenten Grafische en Digitale Media aan de Arteveldehogeschool worden vertoond. 
                    Dat gebeurt elk jaar via een live show, gepresenteerd door studenten Audiovisual Design en studenten Journalistiek. Er zijn verschillende categorieën waar prijzen gewonnen kunnen worden:
                    originaliteit, humor, geluid, story, animatie, More than One Minute (M-O-M), etc.`,
        thumbnailUrl: "https://dl.airtable.com/.attachments/441cac5f843043bd108b164cf4e3010e/25e47a4c/nieuwsbriefstudenten.jpg",
        assets: [
            {
                type: "image",
                url: "https://dl.airtable.com/.attachments/441cac5f843043bd108b164cf4e3010e/25e47a4c/nieuwsbriefstudenten.jpg" ,
            },

            {
                type: "video",
                url: "https://youtu.be/S-iR9OnBTU4"
            },
        ],
        likes: Math.floor(Math.random()*1000),
        views: Math.floor(Math.random()*1000),
        aanmaakDatum: "Friday Oct 16 2020",
        modificatieDatum: generateDate(),
    },

    {
        titel: "Kijkplaat: Disect",
        synopsis:`Wat als je van alles wat je zag zonder problemen een doorsnede zou kunnen maken? Aan jou om een leuk/boeiend/inspirerend/poëtisch/creatief beeld te maken waarin je heel wat 
                    details toont aan de hand van een doorsnede. Je zorgt voor een boeiende inhoud, een spetterende lay-out en een zéér geloofwaardige fotomontage. Zorg voor voldoende diepte en diepgang.
                    In het beeld verweef/verwerk je een sprekende zelf gekozen titel. Je plaatst minstens 5 verwijzingen in infographic style naar bepaalde onderdelen van je beeld. Er is duidelijk minstens 
                    één persoon aanwezig in je beeld. Deze persoon staat voldoende groot en zichtbaar in je beeld. Deze persoon fotografeer je in studio om een zo kwalitatief mogelijk beeld te krijgen.`,
        thumbnailUrl: "https://dl.airtable.com/.attachments/6a08a898972a81616d2fe7342fb624b3/453750fb/image_VermandereFloor_kijkplaat_015.jpg",
        assets: [
            {
                type: "image",
                url: "https://dl.airtable.com/.attachments/6a08a898972a81616d2fe7342fb624b3/453750fb/image_VermandereFloor_kijkplaat_015.jpg" ,
            },

            {
                type: "image",
                url: "https://dl.airtable.com/.attachments/53760665ef3dbaa57d4b5559de4dbdf4/6ac2fb3b/image_BogaertsNele_011.jpg"
            },

            {
                type: "image",
                url: "https://dl.airtable.com/.attachments/60514689aac1e79aaab63707031fe3c2/0dc7cd03/image_DeBlaiser_Sarah_Disect_012.jpg"
            },

            {
                type: "image",
                url: "https://dl.airtable.com/.attachments/7cd969ee02e23302cccf1363eb02d413/f3006105/image_dekeyserpaul_4842_765723_DekeyserPaul_KijkplaatDisect-1_013.jpg"
            },

            {
                type: "image",
                url: "https://dl.airtable.com/.attachments/ea131adf31fc2e4a78eded0ab5e82c90/3daf25c8/monkiewiczrozalia_9029_758209_03KIJKPLAATZWEMBAD.jpg"
            },

            {
                type: "image",
                url: "https://dl.airtable.com/.attachments/91c9ab9bb97d31b42b6f2551723e5ac4/ae162c62/image_VermandereFloor_kijkplaat_015.jpg"
            },

        ],
        likes: Math.floor(Math.random()*1000),
        views: Math.floor(Math.random()*1000),
        aanmaakDatum: "Friday Oct 16 2020",
        modificatieDatum: generateDate(),
    },
    
];


// DATE FUNCTION
function generateDate(){
    let date = new Date();
    let n = date.toDateString();
    return n;
};

// PORTFOLIO FUNCTION
function generatePortfolio(){    
    return `    
===========================================================================================================
|                                               PORTFOLIO                                                 |
===========================================================================================================

${generateProject(projects)}`;
};

//ASSET FUNCTION
function generateAssets (array){
    let tempStr="";
    array.forEach(function (element, index){
        tempStr +=
`Asset ${(index+1)}:            Type: ${element.type}
                    URL: ${element.url}
`
    });
    return tempStr;
};

// PROJECT FUNCTION
function generateProject(array){
    let seperator = "-----------------------------------------------------------------------------------------------------------";
    let tempStr ="";
    array.forEach(function (element, index){
       tempStr += 
`
${seperator}
Project ${(index+1)}:          ${element.titel}
${seperator}
Synopsis:           ${element.synopsis}
${seperator}                    
Thumbnail URL:      ${element.thumbnailUrl}
${seperator}
Likes:              ${element.likes} 
Views:              ${element.views}
Created on:         ${element.aanmaakDatum}
Modified on:        ${element.modificatieDatum}
${seperator}
${generateAssets(element.assets)}
${seperator}
`   
    });
    return tempStr;
};

//SHOW PORTFOLIO
console.log(generatePortfolio(projects));