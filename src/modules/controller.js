import OPENAI_API_KEY from './env';



class Controller {
  configuration = null;
  openai = null;
  usedWordsArray = [];
  chatHistoryArray = [];
  ///////////////////////////////////////////////////

  settingOpenAI_API() {
    const { Configuration, OpenAIApi } = require('openai');
    this.configuration = new Configuration({
      apiKey: OPENAI_API_KEY,
      headers: {
        'User-Agent': 'my-app/1.0',
      },
    });
    delete this.configuration.baseOptions.headers['User-Agent'];
    this.openai = new OpenAIApi(this.configuration);
  }

  async getResponse(prompt) {
    const response = await this.openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 30,
      temperature: 0,
    });
    console.log(response.data.choices[0].text);
  }

  validateInput(myInput, previousWords, letters) {
    
    //eroare sa fie doar un cuvant " "
    if(myInput.includes(' ')){
      throw new Error("You can't enter more than one word. You lost!");
    }
    if(myInput.slice(0,2)!== letters){
      throw new Error(`The word does not start with ${letters}. You lost`);
    }
    if(previousWords.includes(myInput)){
      throw new Error('The words are the same. You lost');
    }
  
  }
}
export default new Controller();

// Let s play tic tac toe. Please answer only by telling the position. I place X on position 1
