Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      header: {},
      articles: []
    };
  },
  methods: {
    getHeaderData() {
      axios
        .get(
          "https://ameliaputri09.github.io/Tekweb2022/contents/header.json"
        )
        .then((res) => {
          this.header = res.data;
          console.log(this.header);
          this.getArticles();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getArticles() {
      axios
        .get(
          "https://ameliaputri09.github.io/Tekweb2022/contents/articles.json"
        )
        .then((res) => {
          this.articles = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.getHeaderData()
  }
}).mount("#app");
