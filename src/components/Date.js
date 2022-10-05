import moment from "moment";
import localization from 'moment/locale/pl'

export default function Date({date}){

    const setUpDate = () => {
      return moment(date).locale("pl", localization).startOf('day').fromNow()
    }

    return (
        <p className={"font-osans dark:text-on-primary-1 text-on-primary-1 font-normal"}>
            {setUpDate()}
        </p>
    )
}