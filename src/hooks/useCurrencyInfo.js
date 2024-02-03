import {useEffect,useState} from "react"

function useCurrencyInfo(currency){ //custom hook

    const[data,setdata]=useState({})//{} empty object use kiye as if no fetch is callwd too crash na kare

    useEffect(()=>{ //we use useEffect as the component is mounted to fetch automatically call ho jye

        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json')
        //most of the API call se jo value aayegi uska type string ke form me hamesa hoti hai to usko handle karna hoga,usko json me convert karna hoga
        //to see api paste this:https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json
        //iss API me date nahi chahiye, kewal need info ki hai

        .then((res)=>res.json) //converting into json (res=response)

        .then((res)=>setdata(res[currency]))  //API ke andar jo usd currency ka key hai wo same same hai jo link me {currency} use kare hai wo same hai
        console.log(data)
    },[currency])//dependencies hai , jab bhi link me currency change ho
    console.log(data)
    return(data)
}

export default useCurrencyInfo  ;