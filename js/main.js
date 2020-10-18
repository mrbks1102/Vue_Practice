var app = new Vue({
  el: '#app',
  data: {
    message: 'hello',
    url: "https://jp.vue.org/",
    toggle: true,
    languages: ['Javascript', 'Ruby', 'Python'],
  },
  methods: {
    Click: function () {
      this.message = "clicked"
    }
  }

})
