import { useState } from "react";

import "./App.css";


function CurrencyInput({currency, value , onChange}) {
    return (
        <>
         <label>{currency}는</label>
         <input type="number" value={value} onChange={e => onChange(currency, e.target.value)} />
        </>
    )
}
function App() {
  const [money, setMoney] = useState({
    krw: 0,
    usd: 0
  });
    const onChange = (currency, value) => {
        currency === "krw" ? setMoney({krw: value, usd: value / 1300}) : setMoney({krw: value * 1300, usd: value})
    }

  return (
    <>
      <h2>환율 변환기 (KRW-USD)</h2>
      <CurrencyInput currency={"krw"} value={money.krw} onChange={onChange} />
      <CurrencyInput currency={"usd"} value={money.usd} onChange={onChange} />
    </>
  );
}

export default App;
