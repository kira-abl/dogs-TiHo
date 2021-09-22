const connection = require("../database/db_connection");

const logMood = (array, body) => {

// console.log("Body",  body.result['question18-Comment']);

  let whicOp = "";
  let daysAgo = "";
  let other = "";
  let type = "";

  var now = new Date();
        var year    = now.getUTCFullYear();
        var month   = now.getUTCMonth()+1;
        var day     = now.getUTCDate();
        var hour    = now.getUTCHours();
        var minute  = now.getUTCMinutes();
        var second  = now.getUTCSeconds();
        if(month.toString().length == 1) {
             month = '0'+month;
        }
        if(day.toString().length == 1) {
             day = '0'+day;
        }
        if(hour.toString().length == 1) {
             hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
             minute = '0'+minute;
        }
        if(second.toString().length == 1) {
             second = '0'+second;
        }
        var time = year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;


  // let time = d.toUTCString();


const {Question1, Question40, Question401, Question402, Question403, question6, question13, question9, question14, question18, question11, question5, question4, question7, question8, question19, question21, question22, Schmerzbewertung, question24, question25, Question111, Question112, question23} = body.result;

if (Question401 === true) {
   whichOp = Question402;
   daysAgo = Question403;

 } else {
   whichOp = "";
   daysAgo = "";
}

if (Question111 === true) {
   type = "clinical";

 } else {
   type = "research";

}

if (body.result['question18-Comment'] !== undefined) {
   other = body.result['question18-Comment'];
   console.log(other);


 } else {
   other = "";
}

  console.log("Type", type);

  console.log("At queries", whichOp, daysAgo);
  //
  return connection.query(
    `INSERT INTO answers( animal_number, diagnosis, had_op, op, days_ago, is_well, has_pain, nausea, had_meds, meds, other, image1, image2, image3, image4, pain1, pain2, pain3, pain4, pain5, pain6, pain7, pain8, score, position, sex, date, type, type_cat, name)
     VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30)`,

    [Question1, Question40, Question401, whichOp, daysAgo, question6, question13, question9, question14, question18, other, array[0].link, array[1].link, array[2].link, array[3].link, question11, question5, question4, question7, question8, question19, question21, question22, Schmerzbewertung, question24, question25, time, type, Question112, question23]
  );
};



const getData = () => {
  return connection.query('SELECT * FROM answers');
};

const getImages = () => {
  return connection.query(`SELECT image1, image2 FROM answers WHERE (image2!='')`);
};


module.exports = {
  logMood,
  getData,
  getImages
};
