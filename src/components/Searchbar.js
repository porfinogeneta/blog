import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Searchbar() {

    const navigate = useNavigate()

    const [term, setTerm] = useState()

    const handleSearch = () => {
        if (term) {
            navigate(`/search/?q=${term}`)
        }
    }

    return (
        <div className={" flex mx-4 mb-32 justify-center flex-col md:flex-row"}>
            <div className={"flex border-2 dark:text-white-2 text-on-primary-3 border-accent rounded-3xl py-2 px-4 items-center"}>
                <svg width="24" height="24" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.6792 32.3365L20.5427 22.2C19.7719 22.8681 18.8726 23.3884 17.8448 23.7609C16.817 24.1335 15.725 24.3198 14.5687 24.3198C11.7937 24.3198 9.44271 23.3562 7.51562 21.4292C5.58854 19.5021 4.625 17.1767 4.625 14.4531C4.625 11.7295 5.58854 9.40416 7.51562 7.47708C9.44271 5.55 11.7809 4.58646 14.5302 4.58646C17.2538 4.58646 19.5727 5.55 21.487 7.47708C23.4012 9.40416 24.3583 11.7295 24.3583 14.4531C24.3583 15.558 24.1785 16.6243 23.8187 17.6521C23.459 18.6799 22.9194 19.6434 22.2 20.5427L32.375 30.6406L30.6792 32.3365ZM14.5302 22.0073C16.6115 22.0073 18.3844 21.2686 19.849 19.7911C21.3135 18.3137 22.0458 16.5344 22.0458 14.4531C22.0458 12.3719 21.3135 10.5925 19.849 9.1151C18.3844 7.63767 16.6115 6.89896 14.5302 6.89896C12.4233 6.89896 10.6311 7.63767 9.15365 9.1151C7.67622 10.5925 6.9375 12.3719 6.9375 14.4531C6.9375 16.5344 7.67622 18.3137 9.15365 19.7911C10.6311 21.2686 12.4233 22.0073 14.5302 22.0073Z" fill="currentColor"/>
                </svg>
                <input
                    className={"focus:outline-none dark:bg-dark-main dark:text-white-2 bg-primary text-xl font-osans text-on-primary-3"}
                    type={"text"} placeholder={'Szukaj...'} onChange={(e) => setTerm(e.target.value)}
                />
            </div>
            <button onClick={handleSearch} className={"bg-tertiary self-center mt-4 md:mt-0 text-white-3 px-4 py-2 rounded-3xl md:ml-4"}>
                <p className={"font-osans text-white-3 font-medium tracking-wide"}>Wyszukaj</p>
            </button>
        </div>
    )
}