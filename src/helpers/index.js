const catchValue = (value, expression, command, disable) => {

  switch (value) {
    case 1:
      expression(`Resolve it to `)
      command('cause 1 ranged damage')
      break;
    case 2:
      expression(`Resolve it to `)
      command('cause 2 ranged damage')
      break;
    case 3:
      expression(`Resolve it to `)
      command('turn 2 of your dice to any side')
      break;
    case 6:
      expression(`Your die is `)
      command('blank')
      disable(true);
      break;
    default:
      expression(`Resolve it to `)
      command('get 1 resource')
      break;
  }
  // func3(true);
};

// const resolveDie = (resolution, disable) => {

//   switch (resolution) {
//     case resolution.includes('resource'):
//       console.log(resolution);
//       disable(true);
//       break;
//     case resolution.includes('blank'):
//       console.log(`You can't resolve blanks`);
//       break;
//     case resolution.includes('turn'):
//       setCheated(true);
//       setHideSelection(false);
//       disable(true);
//       break;
//     case resolution.includes('special'):
//       // func1(`Your die is `)
//       disable(true);
//       break;
//     default:
//       console.log(resolution);
//       setGlobalValue(getNumber);
//       disable(true);
//       break;
//   }
// }

export default catchValue;