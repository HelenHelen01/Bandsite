 export default class BandsiteApi {
  constructor( apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "https://project-1-api.herokuapp.com/";
    


  }

  async postRequestComment(comment) {
    try {
      const postRequest = await axios.post('${this.baseURL}comments/api_key=${this.apiKey}',comment, 'headers:{"Content-Type":"application/json"}');
      
      const comments = postRequest.data;
      console.log(comments);

      //return getCommentsByName;
      }
      catch (error) {
        console.log("ajilku bn", error);
      }
    }



//   async postRequest(){}
// try {
//   const postRequest = await axios.post(`${this.baseURL}/comments?api_key=${this.apiKey}`),
//   comment 
//   );
//   console.log(response)
// }


  }


 



// class BandsiteApi {
//     constructor(baseURL) {
//         this.baseUrl = baseUrl; //apiKey key as an parameter
//     }
//     async getBandsiteByName(bandName){  //bandname
//         try {
//             const response = await axios.get(
                
//             )
//         }
//     }

// }


// const bandSiteCommentURL = 'https://project-1-api.herokuapp.com';

// const api_key ='';  //




  
//   const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
//   const cocktailsApi = new CocktailsApi(BASE_URL);
  
//   const cocktailsSection = document.querySelector(".cocktails-list");
//   const button = document.getElementById("cocktailSearchButton");
//   const form = document.querySelector(".cocktails-section__search");
  
//   const noResultsMessage = document.createElement("div");
//   noResultsMessage.classList.add("no-results-message");
//   noResultsMessage.style.display = "none";
//   document.body.appendChild(noResultsMessage);
  
//   const noResultsImg = document.createElement("img");
//   noResultsImg.classList.add("no-results-img");
//   noResultsImg.src = "../assets/sorry-icon.png";
//   noResultsMessage.appendChild(noResultsImg);
  
//   const noResultsText = document.createElement("p");
//   noResultsText.textContent =
//     "Sorry, we couldn't find any cocktails with that name. Try another one!";
//   noResultsMessage.appendChild(noResultsText);
  
//   form.addEventListener("submit", async (event) => {
//     event.preventDefault();
//     const cocktailName = event.target.cocktail.value;
  
//     if (cocktailName) {
//       try {
//         const response = await cocktailsApi.getCocktailByName(cocktailName);
//         const cocktails = response.drinks;
//         console.log(cocktails);
//         displayCocktails(cocktails);
//       } catch (error) {
//         console.log("Error: ", error);
//         noResultsMessage.style.display = "block";
//       }
//     } else {
//       noResultsMessage.style.display = "block";
//     }
//   });
  
//   function displayCocktails(cocktails) {
//     const cocktailsSection = document.querySelector(".cocktails-list");
  
//     while (cocktailsSection.firstChild) {
//       cocktailsSection.removeChild(cocktailsSection.firstChild);
//     }
  
//     cocktails.forEach((cocktail) => {
//       const cocktailCard = document.createElement("article");
//       cocktailCard.classList.add("cocktail__card");
  
//       const cocktailImg = document.createElement("img");
//       cocktailImg.classList.add("cocktail__card-img");
//       cocktailImg.src = cocktail.strDrinkThumb;
//       cocktailCard.appendChild(cocktailImg);
  
//       const cardInfo = document.createElement("div");
//       cardInfo.classList.add("cocktail__card-info");
//       cocktailCard.appendChild(cardInfo);
  
//       const cocktailName = document.createElement("h3");
//       cocktailName.classList.add("cocktail__name");
//       cocktailName.textContent = cocktail.strDrink;
//       cardInfo.appendChild(cocktailName);
  
//       const ingredientList = document.createElement("ul");
//       ingredientList.classList.add("cocktail__ingredient-list");
//       cardInfo.appendChild(ingredientList);
  
//       const ingredients = [];
  
//       for (let i = 1; i <= 15; i++) {
//         const ingredient = cocktail[`strIngredient${i}`];
  
//         if (ingredient) {
//           const ingredientItem = document.createElement("li");
//           ingredientItem.classList.add("cocktail__ingredient");
//           ingredientItem.textContent = ingredient;
//           ingredientList.appendChild(ingredientItem);
//         } else {
//           break;
//         }
//       }
  
//       const instructions = document.createElement("p");
//       instructions.classList.add("cocktail__instructions");
//       instructions.textContent = cocktail.strInstructions;
//       cardInfo.appendChild(instructions);
  
//       cocktailsSection.appendChild(cocktailCard);
//     });
//   }
  

