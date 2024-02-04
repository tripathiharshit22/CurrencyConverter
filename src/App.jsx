import { useDebugValue, useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'



function App() {
  const [amount, setAmount] = useState(0)  
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0) 

  const currencyInfo = useCurrencyInfo(from) //useCurrencyInfo function me parameter(currency ) tha , aur yha uss currency me kewal from ki value ja skti hai

  const options = Object.keys(currencyInfo) 
  //useCurrencyInfo function me return data ho rha wo { "inr":87.909....}  isko return de rha to isi ko object kh rhe hai aur isi ka key ko use krenge  //drop down menu hai ye

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)

  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1631372209636-f0b794b78d61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
 
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-white-20 rounded-2xl p-5 backdrop-blur-sm bg-black/50">
          <form
            onSubmit={(e) => {
              e.preventDefault();

              convert();

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency)=>setAmount(currency)}
                selectCurrency={from}
                onAmountChange={(amount)=>{
                  setAmount(amount)
                }} 

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox

                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency)=>setTo(currency)}
                selectCurrency={to}
                amountDisable //kuch bhi pass krne ka mtlb hai true pass kar rhe

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
