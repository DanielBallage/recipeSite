/*const vueTest = new Vue ({
    el: '#vueTester',
    data: {
        title: "I hope this works"
    }
})*/

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



  

  