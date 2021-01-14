/* eslint-disable default-case */

const initState = {
    produkte : [ 
        {
          "name": "Entertainment",
          "gruppe": [
            {
              "name": "Spiele",
              "artikel": [
                {
                  "titel": "Donkey Kong",
                  "jahr": 1981,
                  "publisher": "Nintendo",
                  "preis": 99.99
                },
                {
                  "titel": "Pac-Man",
                  "jahr": 1980,
                  "publisher": "Namco",
                  "preis": 99.99
                },
                {
                  "titel": "Asteroids",
                  "jahr": 1979,
                  "publisher": "Atari",
                  "preis": 99.99
                },
                {
                  "titel": "Space Invaders",
                  "jahr": 1978,
                  "publisher": "Taito",
                  "preis": 99.99
                },
                {
                  "titel": "Pong",
                  "jahr": 1972,
                  "publisher": "Atari",
                  "preis": 99.99
                }
              ]
            },
            {
              "name": "Bücher",
              "artikel": [
                {
                  "autor": "Stephen King",
                  "titel": "Carrie",
                  "jahr": 1974,
                  "seiten": 199,
                  "verlag": "Doubleday",
                  "preis": 9.99
                },
                {
                  "autor": "Stephen King",
                  "titel": "The Shining",
                  "jahr": 1977,
                  "seiten": 447,
                  "verlag": "Doubleday",
                  "preis": 9.99
                },
                {
                  "autor": "Stephen King",
                  "titel": "Christine",
                  "jahr": 1983,
                  "seiten": 526,
                  "verlag": "Viking",
                  "preis": 14.99
                },
                {
                  "autor": "Stephen King",
                  "titel": "It",
                  "jahr": 1986,
                  "seiten": 1138,
                  "verlag": "Viking",
                  "preis": 19.99
                },
                {
                  "autor": "Stephen King",
                  "titel": "Misery",
                  "jahr": 1987,
                  "seiten": 310,
                  "verlag": "Viking",
                  "preis": 9.99
                },
                {
                  "autor": "Stephen King",
                  "titel": "Joyland",
                  "jahr": 2013,
                  "seiten": 288,
                  "verlag": "Hard Case Crime",
                  "preis": 9.99
                }
              ]
            },
            {
              "name": "Audio-Books",
              "artikel": [
                {
                  "autor": "Stephen King",
                  "titel": "Bag of Bones",
                  "jahr": 2005,
                  "laenge": 240,
                  "verlag": "Simon & Schuster Audio",
                  "preis": 19.99
                },
                {
                  "autor": "Stephen King",
                  "titel": "On Writing: A Memoir of the Craft",
                  "jahr": 2000,
                  "laenge": 120,
                  "verlag": "Simon & Schuster Audio",
                  "preis": 19.99
                },
                {
                  "autor": "Stephen King",
                  "titel": "Salem's Lot (introduction)",
                  "jahr": 2004,
                  "laenge": 180,
                  "verlag": "Simon & Schuster Audio",
                  "preis": 29.99
                }
              ]
            }
          ]
        },
        {
          "name": "Sport",
          "gruppe": [
            {
              "name": "Schuhe",
              "artikel": [
                {
                  "titel": "Air Betonfuß",
                  "hersteller": "Mike",
                  "preis": 149.99
                },
                {
                  "titel": "Turtle Light",
                  "hersteller": "attitas",
                  "preis": 129.99
                },
                {
                  "titel": "Royal Classic Loser",
                  "hersteller": "Rehbock",
                  "preis": 99.99
                }
              ]
            },
            {
              "name": "Geräte",
              "artikel": [
                {
                  "titel": "Hantelset 250g",
                  "beschreibung": "Kurzhantel, 10 Scheiben",
                  "preis": 149.99
                },
                {
                  "titel": "Fingerexpander",
                  "beschreibung": "Maximallänge 25cm",
                  "preis": 149.99
                },
                {
                  "titel": "Gymnastikball",
                  "beschreibung": "Durchmesser 8,5m",
                  "preis": 149.99
                }
              ]
            }
          ]
        }
     ],
    cart: [],
    selA: "-1",
    selB: "-1",
    optionsB : []

}

const rootReducer = (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'CHANGE_NAME': 
            return {
                vorname: action.first,
                nachname: action.last
            }
        case 'EDIT_CART':
            switch (action.operation) {
                case "ADD": 
                  let item = state.produkte[state.selA].gruppe[state.selB].artikel[action.index]
                  return ([ ...state.cart, { 'Name': item.titel, 'Preis': item.preis } ])
                case "DEL":
                  return([...state.cart].filter((item, i) => i !== action.index))
            }
    }
    return state
}

export default rootReducer