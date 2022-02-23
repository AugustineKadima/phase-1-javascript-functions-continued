// code your solution here

function saturdayFun(parar = "turus"){
    if (parar == "bathe my dog") return "This Saturday, I want to bathe my dog!"
    else return "This Saturday, I want to roller-skate!"
}

function mondayWork(action = 'go to the office'){
    if(action == "work from home") return "This Monday, I will work from home."
    else return "This Monday, I will go to the office."
}

function wrapAdjective(adj="*"){
  return function(word){
    return `You are ${adj}${word}${adj}!`
  }
}

function wrapAdjective(adj="||"){
  return function(word){
    return `You are ${adj}${word}${adj}!`
  }
}