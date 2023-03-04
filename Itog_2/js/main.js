let eventBus = new Vue()

Vue.component('Notes', {
    template: `
    <!-- <p>Заметки</p> -->
    <!-- <p>0%</p> -->
    
    <div class="Notes">
        <createNotes></createNotes>
    <div>


    `,
    date(){
        return {
            Notes: "Notes",

        }
    },
    
    mounted(){
        eventBus.$on('', Название => {
            this.Название.push(Название)
        })
    },

    methods: {

    },

    computed: {
        
    }

})

Vue.component('createNotes', {
    template: `
    <!-- <p>Заполнение карточки</p> -->
    <!-- <p>15%</p> -->
        
    <div class="createNotes">
        <form class="Autocomplete">

            <h3>Create Notes</h3>
    
            <p>
                <label for="title"></label>
                <input id="title" v-model="title" type="text" placeholder="text">
            </p>
    
            <p>
                <label for="subtitle"></label>
                <input id="subtitle" v-model="subtitle" type="text" placeholder="subtitle">
            </p>
    
            <p>
                <label for="description"></label>
                <input id="description" v-model="discription" type="text" placeholder="Description">
            </p>
    
            <p>
                <span class="downoloadFile"></span>
            </p>
    
            <p>
                <input type="submit" value="Submit">
            </p>
        </form>
    </div>

    `,
    date(){

    }

})

Vue.component('twodiv', {
    template: `
    <!-- <p>Редактирование карточки</p> -->
    <!-- <p>25%</p> -->
    
    <div class="updateNotes">

    </div>

</form>

    `,
    date(){
        
    }

    
})

Vue.component('threediv', {
    template: `
    <!-- <p>Заполнение карточки</p> -->
    <!-- <p>50%</p> -->    
    
    `,
    date(){
        
    }

})

Vue.component('foodiv', {
    template: `
    <!-- <p>Заполнение карточки</p> -->
    <!-- <p>75%</p> -->    
    
    `,
    date(){
        
    }

})

Vue.component('fivediv', {
    template: `
    <!-- <p>Заполнение карточки</p> -->
    <!-- <p>100%</p> -->    
    
    `,
    date(){
        
    }

})

let txt = new Vue({
    el: '#txt',
    data(){

    }
})