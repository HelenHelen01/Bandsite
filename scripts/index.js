//1.creating a string to hold the comment section string...
const commentsSection = [
    {
    name: "Connor Walton", date: "02/17/2021",
    info: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
    name: "Emilie Beach", date: "01/09/2021",
    info: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
    name: "Emilie Beach", date: "12/20/2020",
    info: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
    },
    ];


//2.creating the function for creating comment names ....
function createComment(name, info) 
{ const now = new Date();
    return { name: name,
    date: now.toDateString(), 
    info: info,
    };
}
    

//3.declaring variables
const containerForAllComments = document.getElementById("hardComments"); 
const existingComments = document.getElementById("comments__existing");

//4.creating function that will create new elements
function displayPreExistingComments(commentsSection){
    
}


//5.-----> creating div for forms  console.log(commentForm);
//const commentForm = document.createElement("div");
//commentForm.classList.add("comments__form");
//existingComments.appendChild(commentForm); 


//6.----->creating div for Grey images
//const commentsImage = document.createElement("div");
//commentsImage.classList.add("comments__grey");
///commentsForm.appendChild(commentsImage);
//7.----->creating div for top
//const commentsTop = document.createElement("div");
//commentsTop.classList.add("comments__top");
//commentsForm.appendChild(commentsTop);

//8.----->name element
///const commentName = document.createElement("p");
//commentName.textContent = commentsSection.name;
//commentName.classList.add("comments__name");
//commentsTop.appendChild(commentName);

//9.----->date element
///const commentDate = document.createElement("p"); 
//commentDate.textContent = commentsSection.date; 
//commentDate.classList.add("comments date"); 
//commentsTop.appendChild(commentDate);

//10.---->creating div for Bottom
//const commentsBottom = document.createElement("div"); 
//commentsBottom.classList.add("comments bottom"); 
//commentsForm.appendChild(commentsBottom);

//11.---->comments element
///const commentInfo = document.createElement("p"); 
//commentInfo.textContent = commentsSection.info; 
//commentInfo.classList.add("comments info"); 
///commentsBottom.appendChild(commentInfo);

//12.create a list of comments using the array of objects
// function showAllComments(hardcodedComments) {
//     console.log(hardcodedComments);
// //13.---->clear comments
// //existingComments.innerHTML = "";

// //14.---->loop through the array and create all the comments
// hardcodedComments.forEach((oldC) => {
//     displayPreExistingComments(oldC);

// } );
// }

// showAllComments(commentsSection);


class BandsiteApiAPI {
    constructor(baseURL) {
        this.baseURL = baseURL;

    }
    async getRequestComment() {
        try {
            const response = await axios.get(this.baseURL);
            const comments = response.data
            console.log(comments);
            //landing spot for newly created elements
            const commentsElem = document.querySelector(".comments");
            //commentsElem.innerHTML = "";
            //loop through our result and create elements
            comments.forEach((comment) => {
                //create elements and appent them
                const nameElem = document.createElement("p");
                nameElem.textContent = comment.name;
                nameElem.classList.add("name");
                commentsElem.appendChild(nameElem);

                const bandsiteCommentElem = document.createElement("p");
                bandsiteCommentElem.textContent = comment.comment;
                commentsElem.appendChild(bandsiteCommentElem);

                const bandsiteDateelem = document.createElement("p");
                bandsiteDateelem.textContent = comment.timestamp;
                commentsElem.appendChild(bandsiteDateelem);
            });
    
            return comments;


        } catch (error) {
            console.log(error);
        }
    }

    async postRequestComment(comment) {
        try {
            await axios.post(this.baseURL, comment);
        } catch (error) {
            console.log(error);
        }
    }
}

const url = "https://project-1-api.herokuapp.com/comments?api_key=%3C51ed3ac1-908d-4fb7-81be-88ffb836f36b%3E";
const Bandsite = new BandsiteApiAPI(url);
Bandsite.getRequestComment();



//target our element
const commentForm = document.getElementById("convForm");

//create an event listener to listen for submit

commentForm.addEventListener("submit", async (event) => {
    //prevents page from immediatelly refreshing
    event.preventDefault();
//target the input elements so that we may grab what the user typed in 

const newName = event.target.name.value;
const newComment = event.target.name.value;

//create an object that will be submitted

const comment = {
    name: newName.value,
    comment: newComment.value,
    timestamp: new Date(),
};
//call the Post request method here
await Bandsite.postRequestComment(comment);
//convFormcomment.reset();
console.log(comment)



});

