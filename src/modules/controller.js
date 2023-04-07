import OPENAI_API_KEY from './env';

class Controller {
  letters = null;
  configuration = null;
  openai = null;
  loading = false;
  usedWordsArray = [];
  chatHistoryArray = [];
  ///////////////////////////////////////////////////

  initApplication(
    setDataLength,
    text = 'Bine ati venit la jocul nostru de fazan! Introduceti un cuvant pentru a incepe!'
  ) {
    this.usedWordsArray = [];
    this.chatHistoryArray = [];
    this.settingOpenAI_API();
    this.chatHistoryArray.push({
      type: 'ai',
      text: text,
    });

    setDataLength(this.chatHistoryArray.length);
  }

  extractMessage(response, type, setDataLength, user = 'Player') {
    try {
      // display message in chat
      // save response
      if (response.trim() === '') {
        return;
      }
      this.chatHistoryArray.push({ type: type, text: response });
      setDataLength(this.chatHistoryArray.length);
      if (this.chatHistoryArray.length <= 2) {
        this.letters = response.slice(0, 2);
      }
      // validate input

      this.validateInput(response, user);

      // if ok save input
      this.saveInput(response, type);

      // Generate next letters
      //this.setLetters(response.slice(-2));

      this.letters = response.slice(-2);
    } catch (err) {
      throw err;
    }
  }

  getResponseFromUser(response, setDataLength) {
    try {
      response = this.processResponse(response);
      this.extractMessage(response, 'user', setDataLength, 'Player');
      // send prompt to openaAI modules
      this.loading = true;
      setDataLength(this.chatHistoryArray.length);
      try {
        this.getResponseFromOpenai(response, setDataLength);
      } catch (err) {
        throw err;
      }
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

  processResponse(response) {
    return response
      .replaceAll('.', '')
      .replaceAll(',', '')
      .trim()
      .toLowerCase();
  }

  async getResponseFromOpenai(userResponse, setDataLength) {
    try {
      const greseala = 'XXX';
      const prompt = `
      Ne vom juca un joc cu reguli foarte stricte. 
      Nu ai voie sa trimiti mai mult de un cuvant pe mesaj.
      ${
        this.usedWordsArray.length < 1
          ? ''
          : `Nu ai voie sa repeti aceste cuvinte:  ${this.usedWordsArray
              .toString()
              .replaceAll(',', '  ')}`
      }
      Verifica dex online pentru cuvinte.
      Daca cuvantul ${userResponse} exista in dex online, spune-mi un cuvant simplu care sa inceapa cu literele '${
        this.letters
      }'
      Daca ${userResponse} nu exista in dex online spune-mi ${greseala}`;
      console.log(prompt);
      let openaiResponse;
      try {
        openaiResponse = await this.getResponse(prompt);
      } catch (err) {
        throw err;
      }

      openaiResponse = this.processResponse(openaiResponse);
      if (openaiResponse.trim() == 'XXX' || openaiResponse.trim() === 'xxx')
        throw new Error(`${userResponse} is not a valid word 💩`);
      this.extractMessage(openaiResponse, 'ai', setDataLength, 'OpenAI');
    } catch (err) {
      this.initApplication(
        setDataLength,
        err.message + '. Paste a word to restart game 😁'
      );
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
        max_tokens: 10,
        temperature: 0,
      });
      //console.log(response);
      //console.log(response.data.choices[0].text);
      return response.data.choices[0].text;
    } catch (err) {
      throw err;
    }
  }

  validateInput(myInput, user) {
    try {
      //eroare sa fie doar un cuvant " "
      if (myInput.includes(' ')) {
        throw new Error(`You can't enter more than one word. ${user} lost 💥`);
      }
      if (myInput.slice(0, 2) !== this.letters) {
        throw new Error(
          `The word does not start with \"${this.letters}\" 😅 . ${user} lost 💥`
        );
      }
      if (this.usedWordsArray.includes(myInput)) {
        throw new Error(`"${myInput}" has already been used. ${user} lost 💥`);
      }
    } catch (err) {
      throw err;
    }
  }
}
export default new Controller();

// Let s play tic tac toe. Please answer only by telling the position. I place X on position 1
