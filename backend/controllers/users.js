const axios = require("axios");

exports.getUser = (req, res, next) => {
  const url =
    "https://" +
    req.params.rg +
    ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
    req.params.name +
    "?api_key=" +
    process.env.API_KEY;

  axios.get(url).then((response) => {
    res.status(200).json(response.data);
  });
};
