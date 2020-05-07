/* List all Meals in alphabeltical order */
function meal(letter) {
  new Vue({
    el: '#meals' + letter,
    data() {
      return {
        info: { meals: [{ strMeal: '' }, { strMeal: '' }] },
      };
    },

    mounted() {
      axios
        .get('https://www.themealdb.com/api/json/v1/1/search.php?f=' + letter)
        .then((response) => (this.info = response.data));
    },
  });
}

meal('A');
meal('B');
meal('C');
meal('D');
meal('E');
meal('F');
meal('G');
meal('H');
meal('I');
meal('J');
meal('K');
meal('L');
meal('M');
meal('N');
meal('O');
meal('P');
meal('Q');
meal('R');
meal('S');
meal('T');
meal('U');
meal('V');
meal('W');
meal('X');
meal('Y');
meal('Z');

let colls = [...document.getElementsByClassName('collapsible')];

colls.forEach((coll) => {
  coll.addEventListener('click', () => {
    coll.classList.toggle('active');
    const content = coll.nextElementSibling;
    const disp = content.style.display === 'block' ? 'none' : 'block';
    content.style.display = disp;
  });
});
