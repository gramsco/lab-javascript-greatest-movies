/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


// function ratesAverage(arr){
//     let sum = (acc, currVal) => Number(acc) + Number(currVal.rate);
//     return arr.reduce(sum,0)/arr.length;
// }

//récupère la moyenne des rates d'un array
function ratesAverage(arr){
    let sum = (accumulator,currentValue) => Number(accumulator) + Number(currentValue.rate);  
    return Number((arr.reduce(sum,0)/arr.length).toFixed(2));
}

  

// Iteration 2: Drama movies - Get the average of Drama Movies


function dramaMoviesRate (arr){
    const dram = arr.filter((movie) => movie.genre.includes('Drama') === true);
    if (dram.length === 0){
        return 0;
    }
    return ratesAverage(dram);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)



// function orderByDuration(arr){
//     return arr.sort((a,b) => {
//       if (a.duration < b.duration) {
//         return -1;
//       }
//       else if (b.duration < a.duration) {
//         return 1;
//       }
//       else {
//       return 0;
//       }
//       });
//   }

// }

function orderByDuration(arr){
    return arr.sort((a,b) => {
     if (a.duration < b.duration) return -1;
     if (b.duration < a.duration) return 1;
     if (a.title < b.title) return -1;
     if (b.title < a.title) return 1;
     return 0;
    });
}

// pour le souvenir
//     return arr.sort((a,b) => {
  
//       if (a.duration == b.duration){
//         return arr.sort((a,b) => {
//           if (a.title < b.title){
//             return -1;
//             }
//           else if (b.title < a.title){
//             return 1;
//             }
//           else {
//             return 0;
//             }
//         });
//       }
//       else if (a.duration < b.duration) {
//         return -1;
//       }
//       else {
//         return 1;
//       }
//     });
//   }
  



// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(arr){
    const dramSh = arr.filter((arr) => arr.genre.includes('Drama') === true).filter((arr) => arr.director === 'Steven Spielberg');
    return dramSh.length;    
  }


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){

    let firstTwenty = arr.sort((a,b)=> {
      if (a.title < b.title) return -1;
      if (b.title < a.title) return 1;
      if (a.title == b.title) return 0;
    });
    let final = firstTwenty.splice(0,20);
    return final.map(movie => movie.title);
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){

    let nouv_arr =[];

    arr.forEach((item)=> {
      const newObj = Object.assign({},item);
      nouv_arr.push(newObj)
    });


    nouv_arr.forEach((item)=> {
      const newObj = Object.assign({},item);

      let h_en_min = 0;
      let min = 0;

      // get hours in minutes
      item.duration[1] == "h" ? h_en_min = Number(item.duration[0])*60 : h_en_min = 0;

      // get minutes
      item.duration.includes("min") ? min = Number(item.duration[item.duration.indexOf('min')-2]+Number(item.duration[item.duration.indexOf('min')-1])):min = 0;

      item.duration = h_en_min+min;

      newObj.duration = item.duration;

      return newObj
        });
        return nouv_arr;
      
}


  // object assign //

    

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr){
  let bestYear = "";
  let max_score = 0;
  let years = []
  let final_arr = []
  if (arr.length == 0) return null;
  if (arr.length == 1) bestYear = arr[0].year, max_score = arr[0].rate;

  arr.forEach((a) => {
    years.push(a.year)
  });

  years = years.filter((v,i) => years.indexOf(v) === i);
  years.sort();


  let obj = {}

  years.forEach((a) => {

    obj[a] = [];

  })


  arr.forEach((a) => {

    let year = a.year;
   
    obj[year].push(a.rate);

  })

  let finall_array = []

  let splice = [{a:1},{b:2},{c:3},{d:4},{e:5}]

  console.log(splice.splice(2,1))
  console.log(splice)


  for (element in obj){

    sub_obj = {}    
    let lang = obj[element].length;
    let redux = obj[element].reduce((a,b) => Number(a)+Number(b),0)
    let moy = redux/lang
    sub_obj[element] = moy.toFixed(2);
    finall_array.push(sub_obj)
  }
  
  console.log(finall_array)
}

  
  
// function bestYearAvg(arr){
//V1 = 94 lines of code
//V2 : 64 lines of code

function bestYearAvg(arr){
  let bestYear = "";
  let max_score = 0;
  let years = []
  let finall_array = []

  if (arr.length == 0) return null;
  if (arr.length == 1) bestYear = arr[0].year, max_score = arr[0].rate;

  // on crée un tableau avec toutes les années
  arr.forEach((a) => years.push(a.year));

  // on supprime les doublons
  years = years.filter((v,i) => years.indexOf(v) === i);
  
  //on les met dans l'ordre (pas obligatoire)
  years.sort();

  // on crée un objet 
  let obj = {}

  // qu'on remplit avec les années qui obtiennent une liste
  years.forEach((a) => obj[a] = [])

  //on remplit la liste par les notes
  arr.forEach((a) => {

    let year = a.year;
   
    obj[year].push(a.rate);

  })

  for (element in obj){

    // on crée un nouvel objet 
    let sub_obj = {}
    let lang = obj[element].length;
    
    //on additionne pour chaque année toutes les notes
    let redux = obj[element].reduce((a,b) => (+a)+(+b),0)
    
    // on fait la moyenne
    let moy = redux/lang
    sub_obj[element] = moy.toFixed(2);
    
    //on ajoute tout dans le dernier tableau
    finall_array.push(sub_obj)
  }
  
  //on trouve la meilleure note et sa date
  for (let i = 0; i < finall_array.length ; i++){

    let k = Object.keys(finall_array[i])[0]
    let v = Number(Object.values(finall_array[i])[0])

    if (v == max_score) if (k < bestYear) bestYear = k  
    if (v > max_score) bestYear = k, max_score = v;

  }
  
  return `The best year was ${bestYear} with an average rate of ${max_score}`;
}