var subject = ["some idiot",
            "a person who probably owns 10+ properties",
            "someone",
            "someone who MUST have been joking when they bid at the auction",
            "an individual who would be terrible at Deal or no Deal",
            "someone whose personal manifesto is based off 'The Castle'",
            "an Australian Financial Review reader",
            "someone who fucking loved 'The Big Short' but struggles with self-awareness",
            "an Instagram blogger who is making some sweet cash from their 'content' ",
            "a person whose version of savings is a 20% deposit on a million dollar loan ",
            "the future subject of a 'how I bought 20 properties before 30 with a small loan from my parents' article",
            "someone who got one of the 'good jobs' that Joe Hockey was talking about",
            "a real estate investor who thinks the housing market will never crash because 'Australia is different mate'",
            "an overseas investor who is unfairly profiled by the press",
            "an 'entrepreneur' with three failed startups and a fallback job at dad's firm",
            "a person who keeps referring to the 'property ladder' without realising that you can go down ladders too",
            "that couple who haven't shut up about property since they moved in with their parents 4 years ago",
            "a masochist who's actually really looking forward to decades of debt",
            "an Andrew Bolt apologist",
            "someone on $40 000 per year, with an appetite for risk",
            "a guy who works so much he’s never at home anyway",
            "a couple who just want to please their parents",
            "a dude who financed a car worth more than his annual salary",
          ]

var property =[
"6 bedroom house in Vaucluse for $6,700,000,",
"5 bedroom house in Balgowlah Heights for $2,430,095,",
"5 bedroom house in Collaroy Plateau for $2,585,000,",
"5 bedroom house in Eastwood for $2,620,000,",
"5 bedroom house in Pennant Hills for $2,790,000,",
"5 bedroom house in Epping for $2,850,000,",
"5 bedroom house in Curl Curl for $3,160,000,",
"5 bedroom house in Strathfield for $3,300,000,",
"5 bedroom house in Blakehurst for $3,500,000,",
"5 bedroom house in St Ives for $3,530,000,",
"5 bedroom house in Kensington for $3,550,000,",
"5 bedroom house in Wahroonga for $4,045,000,",
"5 bedroom house in Redfern for $4,400,000,",
"5 bedroom house in Edgecliff for $5,200,000,",
"5 bedroom house in Longueville for $5,535,000,",
"5 bedroom house in Wahroonga for $7,250,000,",
"4 bedroom house in Wareemba for $2,040,000,",
"4 bedroom house in North Manly for $2,092,000,",
"4 bedroom house in Concord West for $2,100,000,",
"4 bedroom house in Neutral Bay for $2,100,000,",
"4 bedroom house in Stanmore for $2,100,000,",
"4 bedroom house in Surry Hills for $2,125,000,",
"4 bedroom house in Turramurra for $2,171,000,",
"4 bedroom house in Wahroonga for $2,250,000,",
"4 bedroom house in Chifley for $2,270,000,",
"4 bedroom house in Maroubra for $2,280,000,",
"4 bedroom house in Castle Cove for $2,300,000,",
"4 bedroom house in Castle Hill for $2,300,000,",
"4 bedroom house in Roseville for $2,300,000,",
"4 bedroom house in Darlinghurst for $2,335,000,",
"4 bedroom house in Drummoyne for $2,400,000,",
"4 bedroom house in Balgowlah Heights for $2,430,000,",
"4 bedroom house in St Ives for $2,550,000,",
"4 bedroom house in Kangaroo Point for $2,575,000,",
"4 bedroom house in Seaforth for $2,625,000,",
"4 bedroom house in Belrose for $2,650,000,",
"4 bedroom house in Annandale for $2,678,000,",
"4 bedroom house in Hunters Hill for $2,700,000,",
"4 bedroom house in Paddington for $2,755,000,",
"4 bedroom house in Annandale for $2,850,000,",
"4 bedroom house in Gladesville for $2,850,000,",
"4 bedroom house in Strathfield for $2,850,000,",
"4 bedroom house in Concord for $2,876,000,",
"4 bedroom house in Forest Lodge for $2,950,000,",
"4 bedroom house in Maroubra for $3,000,000,",
"4 bedroom house in Freshwater for $3,200,000,",
"4 bedroom house in Woollahra for $3,225,000,",
"4 bedroom house in Beecroft for $3,250,000,",
"4 bedroom house in Neutral Bay for $3,300,000,",
"4 bedroom house in Roseville for $3,300,000,",
"4 bedroom house in Balmain for $3,351,000,",
"4 bedroom house in Castlecrag for $3,360,000,",
"4 bedroom house in Mosman for $3,540,000,",
"4 bedroom house in Annandale for $3,830,000,",
"3 bedroom unit in Narrabeen for $1,585,000,",
"3 bedroom unit in Huntleys Cove for $1,630,000,",
"3 bedroom unit in Wollstonecraft for $1,801,000,",
"3 bedroom unit in Kirribilli for $2,191,000,",
"3 bedroom unit in Mosman for $2,560,000,",
"3 bedroom townhouse in North Sydney for $3,640,000,",
"3 bedroom house in Belfield for $1,760,000,",
"3 bedroom house in Earlwood for $1,760,000,",
"3 bedroom house in Gladesville for $1,780,000,",
"3 bedroom house in Turramurra for $1,800,000,",
"3 bedroom house in Lidcombe for $1,820,000,",
"3 bedroom house in Matraville for $1,835,000,",
"3 bedroom house in Stanmore for $1,846,000,",
"3 bedroom house in Matraville for $1,850,000,",
"3 bedroom house in Bexley for $1,855,000,",
"3 bedroom house in Miranda for $1,865,000,",
"3 bedroom house in Pagewood for $1,925,000,",
"3 bedroom house in Camperdown for $1,960,000,",
"3 bedroom house in Pennant Hills for $2,000,000,",
"3 bedroom house in Randwick for $2,000,000,",
"3 bedroom house in St Ives Chase for $2,100,000,",
"3 bedroom house in Bronte for $2,200,000,",
"3 bedroom house in Fairlight for $2,200,000,",
"3 bedroom house in Maroubra for $2,210,000,",
"3 bedroom house in Queens Park for $2,250,000,",
"3 bedroom house in Strathfield for $2,334,000,",
"3 bedroom house in Queens Park for $2,500,000,",
"3 bedroom house in Neutral Bay for $2,550,000,",
"3 bedroom house in Concord for $2,575,000,",
"3 bedroom house in Coogee for $2,730,000,",
"3 bedroom house in Freshwater for $2,811,000,",
"3 bedroom house in Edgecliff for $4,580,000,",
"2 bedroom unit in Chatswood for $1,300,000,",
"2 bedroom unit in Elizabeth Bay for $1,310,000,",
"2 bedroom unit in Kensington for $1,330,000,",
"2 bedroom unit in Manly for $1,385,000,",
"2 bedroom unit in Little Bay for $1,400,000,",
"2 bedroom unit in Manly for $1,405,000,",
"2 bedroom unit in Cremorne for $1,410,000,",
"2 bedroom unit in Camperdown for $1,550,000,",
"2 bedroom unit in Mosman for $1,580,000,",
"2 bedroom unit in Cronulla for $1,585,000,",
"2 bedroom unit in Neutral Bay for $1,620,000,",
"2 bedroom unit in Fairlight for $1,710,000,",
"2 bedroom unit in Mosman for $2,000,000,",
"2 bedroom unit in Bronte for $3,100,000,",
"2 bedroom house in Croydon Park for $1,403,000,",
"2 bedroom house in Marrickville for $1,480,000,",
"2 bedroom house in Zetland for $1,520,000,",
"2 bedroom house in Alexandria for $1,575,000,",
"2 bedroom house in Leichhardt for $1,580,000,",
"2 bedroom house in Leichhardt for $1,580,000,",
"2 bedroom house in Newtown for $1,600,000,",
"2 bedroom house in Forest Lodge for $1,623,000,",
"2 bedroom house in Westmead for $1,625,000,",
"2 bedroom house in Narrabeen for $1,675,000,",
"2 bedroom house in Northbridge for $1,680,000,",
"2 bedroom house in Stanmore for $1,685,000,",
"2 bedroom house in Paddington for $1,750,000,",
"2 bedroom house in Annandale for $1,845,000,",
"2 bedroom house in Neutral Bay for $1,865,000,",
"2 bedroom house in Waverley for $2,005,000,",
"2 bedroom house in Malabar for $2,110,000,",
"2 bedroom house in Russell Lea for $2,410,000,",
"2 bedroom house in Wahroonga for $3,065,000,",
"1 bedroom unit in Randwick for $900,000,",
"1 bedroom unit in Erskineville for $975,000,",
"1 bedroom unit in Surry Hills for $1,100,000,",
"1 bedroom unit in McMahons Point for $1,266,000,"
]



var impact = ["now they can’t afford to eat smashed avocado on toast for 789,374 years",
            "they CAN'T WAIT to tell you about every time they go to Ikea and Bunnings",
            "you'd better bring some Cadbury Favourites when they tell you 'not to bring a thing' to their house warming",
            "they can't afford to furnish it, but who cares right? They'll just get another loan",
            "maybe they're really happy, have saved for years, and it'll all end up a huge success",
            "they can't wait to 'finally control' what goes in their house... like all the bills coming through the mailbox",
            "they're itching to start a 10-year legal dispute with their neighbour over a tree",
            "they're now looking at what else they can negatively gear",
            "they have no plans of living there or renting it out ever, seriously",
            "they're pretty keen to tell you 'it's ACTUALLY not that hard to get into property'",
            "their bank cannot believe they were dumb enough to sign that contract",
            "finally their two jet skis, that were bought on finance, have a home too",
            "they're the reason that their 'cool and trendy' suburb is gentrifying so fast",
            "surely it's only days until they make a noise complaint at 9pm about the pub next door's live music",
            "you'll never see them again, but at least they're on the property ladder",
            "how lucky are they that they live in the only city in the world that's immune to housing bubbles",
            "their food pyramid is now solely ramen",
            "as an ANZ shareholder, thank you",
            "the only thing drier than their celebratory Facebook post is a bowl of milkless Weet-Bix",
            "unfollow them on Instagram now",
            "they're in a good catchment area, even if they can't afford kids",
            "Bernard Salt has already followed them on Twitter",
            "they're dead broke, but at least they have a status symbol",
            "The Sahara Desert is more liquid than their portfolio",
            "Malcolm Turnbull just got the chills out of nowhere",

            ]

var randomSubject = Math.floor(Math.random()*subject.length);
var randomProperty = Math.floor(Math.random()*property.length);
var randomImpact = Math.floor(Math.random()*impact.length);

// function writeAnswer() {
document.write("<h2>Last weekend, " + subject[randomSubject] + " bought a " + property[randomProperty] + " and " + impact[randomImpact] + ".</h2>");
// }
