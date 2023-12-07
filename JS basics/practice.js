class Movie {
  constructor(title, studio, rating) {
  this.title = title;
  this.studio = studio;
  this.rating = rating;
  if (typeof this.rating === "undefined") {
  this.rating = "PG";
  }
  }
 }
 let mov1 = new Movie("lEO", "Super class");
 let mov2 = new Movie("vikaram", "gold", "5");
 let mov3 = new Movie("jawan", "silver","5");
 let mov4 = new Movie("Jailer", "platinum");
 console.log(mov1)
 function getPG(mov) {
  let res = []
  for (let i = 0; i < mov.length; i++) {
 if (mov[i].rating =="‘PG") {
  res.push(mov[i].title);
  }
  }
  return res;
 }
 let arr = [mov1, mov2, mov3, mov4]
 console.log(getPG(arr));
 let mov5 = new Movie("Pic", "sun producation", "PG13");
 console.log(mov5);