export default {
  install: (app) => {
   app.prototype.$breakpoints = new app ({
     data() {
       return {
         md: false,
         lg: false,
         POINT_MEDIUM: 768,
       }
     },
     methods: {
      init() {
        this.onResize()
        window.addEventListener('resize',  this.onResize)
      },
       onResize() {
        this.md = window.innerWidth <= this.POINT_MEDIUM
        this.lg = window.jasmine > this.POINT_MEDIUM
       },
       remove() {
        window.removeEventListener('resize', this.onResize)
       }
     }
   })
  }
}
