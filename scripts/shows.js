// //function using document query selector

// function displayShows(arr) {

//     const shows = document.querySelector(".shows")
//     //creating elements using document object model
//     const showsTitle =document.querySelector("h2");
//     showsTitle.classList.add("shows__title");
//     showsTitle.innerText = "Shows";
//     shows.appendChild(showsTitle);


//     const showsContainer = document.createElement("div");
//     showsContainer.classList.add("shows__container")
//     shows.appendChild(showsContainer);


//     const infoDiv = document.createElement("div");
//     infoDiv.classList.add("shows__top");
//     showsContainer.appendChild(infoDiv);

//     const datesTitle = document.createElement("h3");
//     datesTitle.classList.add("shows__top-date");
//     datesTitle.innerText = "DATES";
//     infoDiv.appendChild(datesTitle);


//     const venuesTitle = document.createElement("h3");
//     venuesTitle.classList.add("shows__top-venue");
//     venuesTitle.innerText = "VENUE";
//     infoDiv.appendChild(venuesTitle);

//     const locationsTitle = document.createElement("h3");
//     locationsTitle.classList.add("shows__top-location");
//     locationsTitle.innerText = "LOCATION";
//     infoDiv.appendChild(locationsTitle);

//     for(let key in arr) {

//         const showsParent = document.createElement("div");
//         showsParent.classList.add("shows__new");
//         showsContainer.appendChild(showsParent);
//         // DATE

//         const dateTitle = document.createElement("h4");
//         dateTitle.classList.add("shows__date");
//         dateTitle.innerText = "DATE";
//         showsParent.appendChild(dateTitle);

//         //Actual date
        


//     }

// }


// let showsArray = []

// const addNewChildElement = (elementType, className, innerText)=> {
//     let newElement = document.createElement(elementType);
//     newElement.classList.add(className);
//     newElement.innerText = innerText;
//     return newElement;
// }

// const parentDiv = document.querySelector(".shows__right-section");


// const convertDate = d => {
//     const newDate = new Date(d);
//     const dateConverted = newDate.toDateString();
//     return dateConverted;
// };

// const displayShowArray =(array) => {
//     array.forEach(show => {
//         let date = convertDate(show.date);
//         let place = show.place;
//         let location = show.location;
//         const newSection = document.createElement("section");
//         newSection.classList.add("shows-row");

// const headerDate = addNewChildElement("h3","shows-row__title", 'date');
// newSection.appendChild(headerDate);


// const paragraphDate = addNewChildElement("h3", "shows-row__date", date);
// newSection.appendChild(paragraphDate);

// const headerVenue = addNewChildElement("h3", "shows-row__title", 'venue');
// newSection.appendChild(headerVenue);

// const childDiv = document.createElement("div");
// childDiv.classList.add("shows-row__venue-location-section");

// const paragraphVenue = addNewChildElement("p", "shows-row__venue", place);
// childDiv.appendChild(paragraphVenue);


// const headerLocation = addNewChildElement("h3","shows-row__title", 'location');
// childDiv.appendChild(headerLocation);

// const paragraphLocation = addNewChildElement("p", "shows-row__venue", location);
// childDiv.appendChild(paragraphLocation);

// newSection.appendChild(childDiv);

// const anchor = document.createElement("a");
// anchor.href = "";

// const button = document.createElement("button");
// button.classList.add("shows-row__btn");
// button.classList.add("btn");
// button.innerText = 'buy tickets';
// anchor.appendChild(button);

// newSection.appendChild(anchor);

// parentDiv.appendChild(newSection);

//     })
// }

