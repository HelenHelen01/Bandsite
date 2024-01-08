let showsArray = []

const addNewChildElement = (elementType, className, innerText)=> {
    let newElement = document.createElement(elementType);
    newElement.classList.add(className);
    newElement.innerText = innerText;
    return newElement;
}

const parentDiv = document.querySelector(".shows__right-section");


const convertDate = d => {
    const newDate = new Date(d);
    const dateConverted = newDate.toDateString();
    return dateConverted;
};

const displayShowArray =(array) => {
    array.forEach(show => {
        let date = convertDate(show.date);
        let place = show.place;
        let location = show.location;
        const newSection = document.createElement("section");
        newSection.classList.add("shows-row");

const headerDate = addNewChildElement("h3","shows-row__title", 'date');
newSection.appendChild(headerDate);


const paragraphDate = addNewChildElement("h3", "shows-row__date", date);
newSection.appendChild(paragraphDate);

const headerVenue = addNewChildElement("h3", "shows-row__title", 'venue');
newSection.appendChild(headerVenue);

const childDiv = document.createElement("div");
childDiv.classList.add("shows-row__venue-location-section");

const paragraphVenue = addNewChildElement("p", "shows-row__venue", place);
childDiv.appendChild(paragraphVenue);


const headerLocation = addNewChildElement("h3","shows-row__title", 'location');
childDiv.appendChild(headerLocation);

const paragraphLocation = addNewChildElement("p", "shows-row__venue", location);
childDiv.appendChild(paragraphLocation);

newSection.appendChild(childDiv);

const anchor = document.createElement("a");
anchor.href = "";

const button = document.createElement("button");
button.classList.add("shows-row__btn");
button.classList.add("btn");
button.innerText = 'buy tickets';
anchor.appendChild(button);

newSection.appendChild(anchor);

parentDiv.appendChild(newSection);

    })
}

