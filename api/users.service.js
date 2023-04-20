const axios = require("axios");

/**
 * Obtenemos datos de los status de una caja
 * @param {*} data
 * @returns
 */
const getStatusReport = async (data) => {
  try {
    var config = {
      method: "get",
      url: `https://demo.4plbox.com/api/rastreo/getStatusReport/${data}`,
      headers: {
        Authorization: `Bearer ${process.env.PLBOX_DEMO_API_KEY}`,
      },
    };

    const response = await axios(config);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};


module.exports = { getStatusReport };
