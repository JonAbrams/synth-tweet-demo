var db = require('promised-mongo')('tweets-db');
var Promise = require('bluebird');

var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Primum cur ista res digna odio est, nisi quod est turpis? Sed quot homines, tot sententiae; Est enim tanti philosophi tamque nobilis audacter sua decreta defendere. Ita redarguitur ipse a sese, convincunturque scripta eius probitate ipsius ac moribus. Duo Reges: constructio interrete. Cupiditates non Epicuri divisione finiebat, sed sua satietate. Quid, si etiam iucunda memoria est praeteritorum malorum? Sed in rebus apertissimis nimium longi sumus. Nunc omni virtuti vitium contrario nomine opponitur. Ergo, inquit, tibi Q. Cur ipse Pythagoras et Aegyptum lustravit et Persarum magos adiit? Ergo ita: non posse honeste vivi, nisi honeste vivatur? Sed in rebus apertissimis nimium longi sumus. At multis se probavit. Piso igitur hoc modo, vir optimus tuique, ut scis, amantissimus. Hoc ille tuus non vult omnibusque ex rebus voluptatem quasi mercedem exigit. Nihil sane. Ergo ita: non posse honeste vivi, nisi honeste vivatur? Illum mallem levares, quo optimum atque humanissimum virum, Cn. Consequentia exquirere, quoad sit id, quod volumus, effectum. Qui autem de summo bono dissentit de tota philosophiae ratione dissentit. Hoc non est positum in nostra actione. Ita enim vivunt quidam, ut eorum vita refellatur oratio. Confecta res esset. Eadem nunc mea adversum te oratio est. Id enim natura desiderat. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Idemque diviserunt naturam hominis in animum et corpus.'.split(' ');

var rand = function (max) {
  if (max == null) max = 100;
  return Math.floor( Math.random() * max );
};

var randomContent  = function () {
  var tweet = '';
  var word;
  while (tweet.length < 140) {
    word = lorem[ rand(lorem.length) ] + ' ';
    if (tweet + word > 140) break;
    tweet += word;
  }
  return tweet;
};

var promises = [];
for (var i=0; i < 10000; i++) {
  promises.push(
    db.collection('tweets').insert({
      content: randomContent(),
      created_at: new Date( new Date() - rand(3.15569e10) ) /* any time in the past year */
    })
  );
}

Promise.all(promises).then(function () {
  process.exit();
});
