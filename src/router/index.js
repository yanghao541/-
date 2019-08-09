import Vue from "vue";
import VueRouter from "vue-router"
import one from "./one"
import two from "./two"
import three from "./three"
import citylist from "./citylist";
import home from "./home";
import cityBox from "./cityBox";
import planeTicket from "./planeTicket";
import trainTicket from "./trainTicket";
Vue.use(VueRouter)

export default new VueRouter ({
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        home,
        one,
        two,
        three,
        citylist,
        cityBox,
        planeTicket,
        trainTicket
    ],
     
})
