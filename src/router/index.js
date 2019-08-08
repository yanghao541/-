import Vue from "vue";
import VueRouter from "vue-router"
import one from "./one"
import two from "./two"
import three from "./three"
import home from "./home";
import citylist from "./citylist";
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        home,
        one,
        two,
        three,
        citylist
    ]
})

