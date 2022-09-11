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

for (var i = 0; i < occupation.length; i++) {
  team.employers.push({names: names[i], occupation: occupation[i] })
}

console.log(team);