import axios from "axios";

export default {
  sendMessage: async (body) => {
    console.log("Here", body);

    axios({
      method: "post",
      url: "http://sms-sender-api-lb-1022661461.us-east-1.elb.amazonaws.com/message",
      data: body,
    });
  },

  checkStatus: async () => {

    console.log('Check Status');
    const response = await axios({
      method: "get",
      url: "http://sms-sender-api-lb-1022661461.us-east-1.elb.amazonaws.com/status",
    });

    return response;
  },
};
