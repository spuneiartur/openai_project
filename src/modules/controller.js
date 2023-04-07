import OPENAI_API_KEY from './env';

class Controller {
  letters = null;
  configuration = null;
  openai = null;
  loading = false;
  usedWordsArray = [];
  chatHistoryArray = [];
  ///////////////////////////////////////////////////

  

  initApplication(setDataLength) {
    this.settingOpenAI_API();
    this.setLetters('ar');
    this.chatHistoryArray.push
    ('ai', "Bine ati venit la jocul nostru de fazan! Introduceti un cuvant pentru a incepe");
    setDataLength(this.chatHistoryArray.length);
  }

  extractMessage(response, type, setDataLength) {
    // display message in chat
    // save response
    if (response.trim() === '') {
      return;
    }
    this.chatHistoryArray.push({ type: type, text: response });
    setDataLength(this.chatHistoryArray.length);
    // validate input
    //this.validateInput(response);
    // if ok save input
    this.saveInput(response, type);

    // Generate next letters
    this.setLetters(response.slice(-2));
  }
  getResponseFromUser(response, setDataLength) {
    try {
      this.extractMessage(response, 'user', setDataLength);
      // send prompt to openaAI modules
      this.loading = true;
      setDataLength(this.chatHistoryArray.length);
      this.getResponseFromOpenai(response, setDataLength);
    } catch (err) {
      throw err;
    }
  }

  setLetters(value) {
    this.letters = value;
  }

  saveInput(response, type) {
    this.usedWordsArray.push(response.trim());
  }

  async getResponseFromOpenai(userResponse, setDataLength) {
    try {
      const openaiResponse = await this.getResponse(userResponse);
      console.log(openaiResponse);
      this.extractMessage(openaiResponse, 'ai', setDataLength);
    } catch (err) {
      throw err;
    } finally {
      this.loading = false;
    }
  }

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
    try {
      const response = await this.openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 30,
        temperature: 0,
      });
      console.log(response);
      console.log(response.data.choices[0].text);
      return response.data.choices[0].text;
    } catch (err) {
      throw err;
    }
  }

  validateInput(myInput) {
    //eroare sa fie doar un cuvant " "
    if (myInput.includes(' ')) {
      throw new Error("You can't enter more than one word. You lost!");
    }
    if (myInput.slice(0, 2) !== this.letters) {
      throw new Error(`The word does not start with ${this.letters}. You lost`);
    }
    if (this.usedWordsArray.includes(myInput)) {
      throw new Error('The words are the same. You lost');
    }
  }
}
export default new Controller();

// Let s play tic tac toe. Please answer only by telling the position. I place X on position 1
