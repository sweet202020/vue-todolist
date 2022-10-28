/* Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no */


/* creare un app per l'inserimento e la visualizzaqzione per una lista di tasks.
Aggiungere un input con un pulsante, una lista di tasks da visualizzare di default.
Al click sul pulsante aggiungiamo la task inserita nell'input dentro la lista di tasks.
La nuova task non deve essere vuota ne minore di 5 caratteri, mostrare un messaggio che la task non è idonea. */

const {createApp}=Vue

createApp({
    data(){
        return{
            error:false,
            newTask:{
                text: '',
                done: false,
            } ,
            tasks:[
                
                {
                    text: 'Learn Html',
                    done: true
                },
                {
                    text: 'Learn CSS',
                    done: true
                },
                {
                    text: 'Learn JavaScript',
                    done: true
                },
            ]
        }
    },
    methods: {
        addList(){
            console.log(this.newTask.text.length);
            if (this.newTask.text.length < 5){
                this.error = true
            } else {
                this.error = false
                this.tasks.unshift(this.newTask);
    
                //svuotare input dopo aggiunta task
                this.newTask = "";
            }
        }
    }
}).mount('#app')