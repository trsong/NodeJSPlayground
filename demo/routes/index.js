var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    var myArtWork = [];
    var myArtists = [];
    myArtists = appdata.speakers;

    appdata.speakers.forEach(function(speaker){
        myArtWork = myArtWork.concat(speaker.artwork);

    });
    res.render('index', {
        title: 'Home',
        artwork: myArtWork,
        artists: myArtists,
        page: 'home'
    });
});

/* GET all speakers' page. */
router.get('/speakers', function(req, res, next) {
    var myArtWork = [];
    var myArtists = [];
    myArtists = appdata.speakers;

    appdata.speakers.forEach(function(speaker){
        myArtWork = myArtWork.concat(speaker.artwork);
    });
    res.render('speakers', {
        title: 'Speakers',
        artwork: myArtWork,
        artists: myArtists,
        page: 'artistList'
    });
});

/* GET a speaker detail page. */
router.get('/speakers/:speakerid', function(req, res, next) {
    var myArtWork = [];
    var myArtists = [];

    appdata.speakers.forEach(function(speaker){
        if(speaker.shortname === req.params.speakerid) {
            myArtists.push(speaker);
            myArtWork = myArtWork.concat(speaker.artwork);
        }
    });
    var allSpeakerNames = appdata.speakers.filter(function(item){
        return item.shortname === req.params.speakerid;
    });

    var speakerName = "Speakers";
    if(allSpeakerNames.length > 0){
        speakerName = allSpeakerNames[0].name;
    }

    res.render('speakers', {
        title: speakerName,
        artwork: myArtWork,
        artists: myArtists,
        page: 'artistDetail'
    });

});
module.exports = router;
