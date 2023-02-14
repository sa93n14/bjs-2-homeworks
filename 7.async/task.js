class AlarmClock {
    constructor() {
        this.alarmCollection = []; 
        this.intervalId = null; 
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        
        if (this.alarmCollection.find(clockTime => clockTime === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({callback: callback, time: time, canCall: true});
    } 

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((clock) => clock.time !== time);
    } 

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    } 

    start() {
        if (this.intervalId !== null) {
            return;
        }

        this.intervalId = setInterval(() => this.alarmCollection.forEach(element => {
            if (element.time === this.getCurrentFormattedTime() && element.canCall === true) {
                    element.canCall = false;
                    element.callback();
                }
            }
                
        ), 1000)
    } 

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    } 

    resetAllCalls() {
        this.alarmCollection.forEach(element => element.canCall = true)
    } 

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    } 
}