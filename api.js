//storing our vue instance in a var
var vue = new Vue({
  el: '#app',
  data: {
    lookup: "",
    gifs: []
  },
  methods: {
    get: function(){
    	var url = 'https://sam.awd.systems/wp-json/wp/v2/categories'
      axios.get(url).then(function (response){
        debugger;
        //why not this???
      })
    }
  }
})
