// We can remove old functionality!
// class OldCalc {
//   operations(t1, t2, operation) {
//     switch (operation) {
//       case 'add': t1 + t2
//       case 'sub': t1 - t2
//       default: NaN
//     }
//   }
// }

class NewCalc {
  add(t1, t2) {
    console.log(t1 + t2); 
  }
  sub(t1, t2) {
    console.log(t1 - t2); 
  }
}

class AdapterCalc extends NewCalc {
  operations(t1, t2, operation) {
    switch (operation) {
      case 'add': return this.add(t1, t2)
      case 'sub': return this.sub(t1, t2)
      default: NaN
    }
  }
}

const service = new AdapterCalc();

service.add(2,2)
service.operations(2,2, 'add')
