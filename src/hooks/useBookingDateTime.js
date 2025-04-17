
const useBookingDateTime = () => {

    const formateDate = (date) => {
        const rawDate = new Date(date)
        const appendZero = (num) => num < 10 ? `0${num}` : num
        return `${rawDate.getFullYear()}-${appendZero(rawDate.getMonth() + 1)}-${appendZero(rawDate.getDate())}`
    }

    const initializeDateTime = () => {
        const initialDate = new Date()
        const currentHour = initialDate.getHours()

        if(!(currentHour >= 12 && currentHour <= 22)) {
            initialDate.setDate(initialDate.getDate() + 1)
            initialDate.setHours(11)
        }

        return [formateDate(initialDate), getAvailableHours(initialDate)]
    }

    const getAvailableHours = (date) => {
        let availableHours = []
        for(let i = date.getHours() + 1 ; i <= 23; i++) {
            availableHours.push(`${i}:00`)
        }
        return availableHours
    }

    const updateTime = (date) => {
        if(formateDate(new Date(date)) === formateDate(new Date())) {
            return initializeDateTime()
        } else {
            return [formateDate(date), getAvailableHours(new Date(date))]
        }
    }

    return [initializeDateTime, updateTime]
}

export default useBookingDateTime