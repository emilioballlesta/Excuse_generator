let who = ['The dog','My granma','My mom', 'My turtle','My bird', 'The president', 'The pope', 'The COVID19', 'My teacher', 'God'];
let what = ['ate','pissed','crushed','broked', 'destroyed', 'stole', 'drank', 'erased', 'smashed', 'damaged'];
let avoid = ['my homework', 'my computer', 'my 4Geeks coding assigment', 'my MSc tesis', 'my 4Geeks final project', 'my github account', 'my wifi conection', 'my notebook', 'my clothes', 'my desire to live'];
let when = ['before the class.','right in time.','when I finished.','during my lunch.','while I was praying.', 'when I was in the bathroom.', 'when I was in the shower.', 'when I was in quarantine.', 'when I was training.', 'at 3:00 PM.'];

function excuse_generator() {
    who_tmp = who[Math.floor(Math.random() * 10)];
    what_tmp = what[Math.floor(Math.random() * 10)];
    avoid_tmp = avoid[Math.floor(Math.random() * 10)];
    when_tmp = when[Math.floor(Math.random() * 10)];
    return(who_tmp + ' ' + what_tmp + ' ' + avoid_tmp + ' ' + when_tmp)
}

var excuse = excuse_generator();

document.querySelector('p').innerHTML = excuse;