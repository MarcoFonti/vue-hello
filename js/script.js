// CHECK 
console.log('Vue OK', Vue);

//! SCALETTA 
/*
1- METTO NOME DELLA CHIAVE IN HTML
2- PRENDO DA VUE LA FUNZIONE CREATEAPP
3- METTO IN VARIBILE LA FUNZIONE CREATEAPP E LA INVOCO
4- USO DATA PER CONNETERMI AL DOM DANDOGLI DEI DATI ALL'INTERNO DI UN RETURN
5- INVOCO IL METODO MOUNT PER COLLEGARE IL MIO ID CREATO SU HTML
*/


/* ESTRAPOLO FUNZIONE DA VUE */
const { createApp } = Vue;

/* CREO VARIBILE E RICHIAMO LA FUNZIONE */
const app = createApp({


    /* NOME PAGINA */
    name: 'MiaApp',



    /* USO LA FUNZIONE DATA IN MODO DA RESTITUIRE I DATI DINAMICI CON CUI POSSO INTERAGIRE CON HTML */
    data() {
        return {
            message: 'Ciao Vue',
            image: 'https://blr.vue.community/logo.png',
            alt_image: 'Logo Vue'
        }
    }
})


/* COLLEGO ID HTML */
app.mount('#root');
