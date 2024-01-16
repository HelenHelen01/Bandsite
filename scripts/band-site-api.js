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


 