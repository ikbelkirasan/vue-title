if (Vue) {
	Vue.component('vue-title', {
		template: '<title><slot></slot></title>',
		created() {
			titles = document.querySelectorAll('title')
			titles.forEach(title => {
				title.remove()
			})
		}
	})
}

else {
	console.warn('[vue-title] Vue is not loaded.')
}