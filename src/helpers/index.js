const catchValue = (value, func1, func2, func3) => {

  switch (value) {
    case 1:
      func1(`Resolva para `)
      func2('causar 1 dano à distância')
      break;
    case 2:
      func1(`Resolva para `)
      func2('causar 2 dano à distância')
      break;
    case 3:
      func1(`Resolva para `)
      func2('virar 2 dados para qualquer lado')
      break;
    case 6:
      func1(`Seu dado é `)
      func2('blank')
      break;
    default:
      func1(`Resolva para `)
      func2('colher 1 recurso')
      break;
  }
  func3(true);
};

export default catchValue;