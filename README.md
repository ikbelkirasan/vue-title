# vue-title

This is a simple Vue component that allows you to bind your page title to Vue.

## How to use?

Using `vue-title` is very easy.

1) Import [vue-title.min.js](https://raw.githubusercontent.com/ikbelkirasan/vue-title/master/dist/vue-title.min.js) into your project. (You can find it in `dist` folder).


2) Add `vue-title` component to your Vue template.

```html
<div id="app">
  <vue-title>{{pageTitle}}</vue-title>
</div>
```

```javascript
new Vue({
  el: '#app',
  data: {
    pageTitle: 'vue-title page'
  }
})
```

## License 
MIT

