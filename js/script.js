// ******** VUE ********
const { createApp } = Vue;
createApp({
    data() {
        return {
            mail: "",
        }
    },
    mounted() {
        
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) =>{

            this.mail = result.data.response

        })


    },
}).mount("#app");
// ******** VUE ********