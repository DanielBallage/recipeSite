
/*Pull a random recipe from TheMealDB api*/

new Vue({
    el: '#randomMeal', 
    data () {
      return {
        info: null,
      }
    },
    mounted () {
      axios
        .get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => (this.info = response.data.meals[0]))   
    }
    
  });


  /* List all Meals in alphabeltical order */
  function meal(a) {
    new Vue({
        el: '#meals' + a, 
        data () {
          return {
            info: null,
          }
        },
    
        
        mounted () {
          axios
          
            .get('https://www.themealdb.com/api/json/v1/1/search.php?f=' + a)
            .then(response => (this.info = response.data))
        }
        
      });


}

meal("A");
meal("B");
meal("C");
meal("D");
meal("E");
meal("F");
meal("G");
meal("H");
meal("I");
meal("J");
meal("K");
meal("L");
meal("M");
meal("N");
meal("O");
meal("P");
meal("Q");
meal("R");
meal("S");
meal("T");
meal("U");
meal("V");
meal("W");
meal("X");
meal("Y");
meal("Z");
 
  
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display !== "none") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}