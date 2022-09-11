var occupation = ['Junior developer', 
                  'Middle developer',
                  'Senior developer', 
                  'Junior QA',
                  'Middle QA', 
                  'Senior QA', 
                  'Project manager']
var names = ['Iryna',
            'Nina',
            'Yulia', 
            'Kateryna',
            'Nadia', 
            'Khrystyna', 
            'Lilia'];
var team = { employers: []};

const getSelary = occupation =>  {
 if(occupation.toLowerCase().indexOf('junior')) {
   return calculateSellary(500, 1000)
 } else if(occupation.toLowerCase().indexOf('middle')) {
   return calculateSellary(1500, 2000)
 } else if(occupation.toLowerCase().indexOf('senior')) {
    return calculateSellary(2500, 3000)
 }else {
     return calculateSellary(4000, 4500)
 }
}

const calculateSellary = (min, max) => {
    return Math.random() * (max - min) + min;
}

for (var i = 0; i < occupation.length; i++) {
  var currentOccupation = occupation[i];
  team.employers.push({names: names[i], occupation: currentOccupation, salary: getSelary(currentOccupation)})
}

var yourSelf = function tellAboutYourSelf(item) {
    return `Мене звуть ${item.names} і я - ${item.occupation}. Я заробляю ${item.salary}$.`
}
tellAboutYourSelf();
console.log (yourSelf);
console.log(team);
