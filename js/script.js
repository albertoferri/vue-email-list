// ******** VUE ********
const { createApp } = Vue;
createApp({
    data() {
        return {
            mails: [],
        }
    },
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