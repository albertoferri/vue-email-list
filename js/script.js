// ******** VUE ********
const { createApp, ref } = Vue;
createApp({
    data() {
        return {
            mails: [],
            phone: null,
            owner: null,
            expired: null
        }
    },
    // ####### OPZIONALE TEST ##########
    methods: {
        getPhoneInfo() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/phone')
                .then((response) => {
                    this.phone = response.data.response;
                })
                .catch((error) => {
                    console.error(error);
                });
            axios.get('https://flynn.boolean.careers/exercises/api/random/name')
                .then((response) => {
                    this.owner = response.data.response;
                })
                .catch((error) => {
                    console.error(error);
                });
            axios.get('https://flynn.boolean.careers/exercises/api/random/boolean')
                .then((response) => {
                    this.expired = response.data.response;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },
    // ####### FINE TEST ##########
    mounted() {
        // promise serve per far visualizzare l'array alla fine del ciclo
        let promises = [];
        for(let i = 0; i < 10; i++){
            promises.push(
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            );
        }

        // push dentro l'array solo quando il ciclo prima è finito
        Promise.all(promises).then((results) => {
            results.forEach((result) => {
                this.mails.push(result.data.response);
            });
            console.log(this.mails);
        });
    },
}).mount("#app");
// ******** VUE ********