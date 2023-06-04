import { createRouter, createWebHashHistory, useRoute } from "vue-router";
import AllComp from '../AllComp.vue'
import  User from '../components/user/User.vue'
import Usertwo from '../components/user/secondUser.vue'
import Userthree from '../components/user/threeUser.vue'
import FourUser from '../components/user/fourUser.vue'
import fiveUser from '../components/user/fiveUser.vue'
import sixUSer from '../components/user/sixUser.vue'
import firstMentor from '../components/mentors/firstMentor.vue'
import userMentor1 from '../components/mentors/userMentor.vue'
import Student from '../components/generalstudent/generalStudent.vue'
import UsaStudent from '../components/CauntryStudents/Usa.vue'
import Italy from '../components/CauntryStudents/Italy.vue'
import Korea from '../components/CauntryStudents/SouthCorea.vue'
// import userMentor2 from '../components/mentors/userMentor2.vue'
// import userMentor3 from '../components/mentors/userMentor3.vue'
// import userMentor4 from '../components/mentors/userMentor4.vue'



let routes = [
    {
        path:'/Koreastudents',
        component:Korea
    },
    {
        path:'/Italystudents',
        component:Italy
    },
    {
        path:'/Usastudents',
        component:UsaStudent
    },
    {
        path:'/generalstudents',
        component:Student
    },
    {
        path:'/',
        component:AllComp

    },
    {
        path:'/user/:id',
        name:'user',
        component:User,
        props:true
        
    },
    {
        path:'/usertwo',
        component:Usertwo,
        id:2
    },
    {
        path:'/userthree',
        component:Userthree
    },
    {
        path:'/fourUser',
        component:FourUser
    },
    {
        path:'/fiveUser',
        component:fiveUser
    },
    {
        path:'/sixUSer',
        component:sixUSer
    },
    {
        path:'/Mentors',
        component:firstMentor
    },
    {
        path:'/userMentor',
        component:userMentor1
    }
]

let router = createRouter({
    routes,
    history:createWebHashHistory()
});

export default router