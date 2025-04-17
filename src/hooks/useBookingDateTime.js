const useBookingDateTime = () => {

    const formateDate = (date) => {
        const rawDate = new Date(date)
        const appendZero = (num) => num < 10 ? `0${num}` : num
        return `${rawDate.getFullYear()}-${appendZero(rawDate.getMonth() + 1)}-${appendZero(rawDate.getDate())}`
    }

    const initializeDateTime = () => {
        const initialDate = new Date()
        return [formateDate(initialDate), fetchAPI(initialDate)]
    }


    const updateTime = (date) => {
        if(formateDate(new Date(date)) === formateDate(new Date())) {
            return initializeDateTime()
        } else {
            return [formateDate(date), fetchAPI(new Date(date))]
        }
    }

    return [initializeDateTime, updateTime]
}

export default useBookingDateTime