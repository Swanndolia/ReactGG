const axios = require("axios");

exports.getUser = (req, res, next) => {
  const url =
    "https://" +
    req.params.rg +
    "1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
    req.params.name +
    "?api_key=" +
    process.env.API_KEY;

  axios
    .get(url)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log(error.code + " summoner")
      res.status(400).json(error.code);
    });
};

exports.getUserLeague = (req, res, next) => {
  const url =
    "https://" +
    req.params.rg +
    "1.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
    req.params.esid +
    "?api_key=" +
    process.env.API_KEY;

  axios
    .get(url)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log(error.code +" league")
      res.status(400).json(error.code);
    });
};

