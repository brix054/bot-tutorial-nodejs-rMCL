var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex=/^\/cool guy/;botRegexLG=/^\/leagueinfo/i;botRegexDL=/^\/DDL/i;botRegexCS=/^\/commish/;botRegexRules=/^\/rules/;
      botRegexAd=/^\/advance/;botRegexGTA=/^\/payout/;botRegexSC=/^\/Schedule/i;botDuck=/^\/duck/;
      botRegexP=/^\/DPL/i;botRegexTw=/^\/bum/i;botRegexSb=/^\/Champ/;botRegexSh=/^\/shrug/;botRegexWk=/^\/eyes/;botRegexCC=/^\/commands/;
      botRegexDr=/^\/Draft/i;botRegexBt=/^\/bot/i;botRegexHl=/^\/hello/i;botRegexPk=/^\/poke/i;botRegexUd=/^\/update/i;botRegexPp=/^\/paypal/i;botRegexMj=/^\/jordan/i;
      botRegexSiege = /^\/siege/
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();        
  }              
  else if(request.text && botRegexLG.test(request.text)) {
    this.res.writeHead(200);
    postMessage("This is Case Sensitive                            League Name: EMB16                            League PW: EMB16");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/emb16/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexCS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("The commissioners are Riot, Sixth, Killa, and Gotem");
    this.res.end();
  } 
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/emb16/rules                         Tournament Rules, Nanos Allowed, No Fake Punt/FG,        No Turbo Blitzing");
    this.res.end();
  }
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("EMB Advances every 48hrs at        10 PM EST. Games need to be started before 9PM EST");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Playoffs teams receive $ back, $300 1st, $100 2nd");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/emb16/schedules");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/emb16/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/RholFzW.png");
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("The reigning Super Bowl champ is SixthSense. Will you be next?");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.clker.com/cliparts/6/8/f/c/13926397621966356997cartoon-eyes.jpg");
    this.res.end();
  } 

  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("/league info, /DDL, /commish, /rules, /advance, /payout, /Schedule, /update/, /paypal, /Duck, /DPL, /bum,   /Champ, /shrug, /eyes, /commands, /draft");
    this.res.end();
  }
  else if(request.text && botRegexDr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("EMB is currently slow drafting until the end of the regular season. A draft time will be voted for after the season concludes");
    this.res.end();
  }
  else if(request.text && botRegexBt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("One cannot summon what one cannot see");
    this.res.end();
  }
  else if(request.text && botRegexHl.test(request.text)) {
    this.res.writeHead(200);
    postMessage("How can you see me? I am the invisible man");
    this.res.end();
  }
    else if(request.text && botRegexPk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Fuck off don't poke me");
    this.res.end();
  }
  else if(request.text && botRegexUd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("LEAVE ME THE FUCK ALONE. LET"S ASSUME IT"S ON IVY. IVY MAKE YOUR PICK ALREADY.");
    this.res.end();
  }   
  else if(request.text && botRegexPp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("The paypal is maddenemb16@gmail.com, send via friends & family");
    this.res.end();
  }
 else if(request.text && botRegexPp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://si.wsj.net/public/resources/images/AR-AM060_JORDAN_8S_20160203123002.jpg");
    this.res.end();
  }
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
