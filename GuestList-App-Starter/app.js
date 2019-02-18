new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventTitle2: 'v text output',
            signUpText: 'Add your name to the guest list for <em>exclusive</em> offers:',
            eventDesc: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"
        }, 
        newNameText: '',
        limitText: '',
        guestName: [],
        eventCapacity: 25,
        eventCapacityPercent: 0
    },
    methods:{
        formSubmitted: function() {
            if(this.newNameText.length > 0 && this.eventCapacityPercent < 100){
                this.guestName.push(this.newNameText)
                this.newNameText = ''
                this.eventCapacityPercent = this.guestName.length / (this.eventCapacity / 100)
            } 
            if (this.eventCapacityPercent == 100){
                this.limitText = "You've reached the guest limit"
            }
        },
        keyPressed: function() {
            console.log("@keyup.32='keyPressed'")
        }
    },
    computed: {
        sortNames: function() {
            return this.guestName.sort()
        }
    },
    watch: {
        guestName: function(data) {
            console.log('watch triggered')
        }
    },
    filters: {
        toUpper: function (value) {
            return value.toUpperCase()
        },
        formatName: function (value){
            return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()
        }
    }
});

new Vue ({
    el: '#navigation',
    data: {
        appName: 'Guest List'
    }
});