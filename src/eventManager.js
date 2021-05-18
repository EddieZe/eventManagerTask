// class EventManager {
//     events = {}
//     constructor() {
//         this.events = {}
//     }
//     registerEvent = (eventName, cb) => {
//         if (this.events[eventName]) {
//             this.events[eventName].push(cb)
//         } else {
//             this.events[eventName] = [cb]
//         }
//     }

//     fire = (eventName) => {
//         return new Promise((resolve, reject) => {
//             for (let cb of this.events[eventName]) {
//                 try {
//                     cb()
//                 } catch (e) {}
//             }
//             resolve()
//         })
//     }

//     deleteRegistration = (eventName) => {
//         if(this.events[eventName]){
//             this.events[eventName] = undefined
//         }
//     }
// }

// export default EventManager