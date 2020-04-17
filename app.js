
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
    
  })


  /* List all Meals in alphabeltical order */

new Vue({
    el: '#mealsA', 
    data () {
      return {
        info: null,
      }
    },

    
    mounted () {
      axios
      
        .get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(response => (this.info = response.data.meals))  
    }

    /* need a for loop to get each item in the array of each letter*/
    
  })


  

  