function toArray(obj) {
    var sol = [];
    for (key of Object.keys(obj)) {
      sol.push([key, obj[key]]);
    }
    return sol;
  }

  console.log(toArray({a:1, b:2}))
  console.log(toArray({ shrimp: 15, tots: 12 }))