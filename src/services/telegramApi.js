import axios from 'axios';

const sendMessageToTg = async text => {
  const GATSBY_TOKEN = process.env.GATSBY_TOKEN;
  const GATSBY_CHAT_ID = process.env.GATSBY_CHAT_ID;
  const TG_URL = `https://api.telegram.org/bot${GATSBY_TOKEN}/sendMessage?chat_id=${GATSBY_CHAT_ID}`;

  try {
    return await axios.post(TG_URL, {
      text,
      parse_mode: 'HTML',
    });
  } catch (error) {
    alert(error);
  }
};

export default sendMessageToTg;
