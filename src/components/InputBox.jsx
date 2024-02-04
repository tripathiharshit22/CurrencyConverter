import React, { useId } from 'react'


function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = "",
}) {

  // useId is hook for generating unique IDs that can be passed to accessibility attributes 
  const amountInputId = useId() //it gives unique value IDs


  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* here in `...` we write css jo user se lenge ${} me */}

      <div className="w-1/2">
        <label  htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}

          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        //agar bss onAmountChange likhte to crash ho jata if onAmountChange doesn't exists , but phla wala onAmountChange use kiye fir function onAmountChange use kiye. too phla wala onAmountChange is use for checking the onAmountChange and doosra wala to always present hi rhega. fir ese hi e.target.value direct () me nhi likh skte hai , as it may return string too Number me convert
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          disabled={currencyDisable}
          value={selectCurrency}

          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        // onChange isi liye use hoti hai , taki currency drop menu me kuch change ho to wo value me fir se store hoye further use ke liye. e.target.value isi liye as "usd" string hai
        >

          {/* json me loop chla ke currency ko access karenge */}
          {currencyOptions.map((currency) => (

            <option key={currency} value={currency}>
              {/* to not to degrade the performance of loop in REACT we use key in loop , as nahi to REACT kahi same chiz ka DOM to nahi banye jaye rha to */}

              {currency}
            </option>
          ))}

        </select>
      </div>
    </div>
  );
}

export default InputBox;



