
  const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}


function addFrontendSkill(obj,skill,level){
    const FE=obj.skills.frontEnd;
    FE.push({skill:skill,level:level})
    console.log(FE);
    console.log(obj)
    return obj;
}
addFrontendSkill(student,"Bootstrap",8)

function addBackendSkill(obj,skill,level){
    const BE=obj.skills.backEnd;
    BE.push({skill:skill,level:level})
    console.log(BE);
    console.log(obj)
    return obj;
}
addBackendSkill(student,"Express",9)


function addDatabaseSkill(obj,skill,level){
    const DB=obj.skills.dataBase;
    DB.push({skill:skill,level:level})
    console.log(DB);
    console.log(obj)
    return obj;
}
addDatabaseSkill(student,"SQL",8)


function addDataScienceSkill(obj,skill){
    const DS=obj.skills.dataScience;
    DS.push(skill)
    console.log(DS);
    console.log(obj)
    return obj;
}
addDataScienceSkill(student,"SQL")

