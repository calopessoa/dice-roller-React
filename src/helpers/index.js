const catchValue = (value, func1, func2) => {

  switch (value) {
    case 1:
      func1(`Resolve it to `)
      func2('cause 1 ranged damage')
      break;
    case 2:
      func1(`Resolve it to `)
      func2('cause 2 ranged damage')
      break;
    case 3:
      func1(`Resolve it to `)
      func2('turn 2 of your dice to any side')
      break;
    case 6:
      func1(`Seu dado é `)
      func2('blank')
      break;
    default:
      func1(`Resolve it to `)
      func2('get 1 resource')
      break;
  }
  // func3(true);
};

export default catchValue;