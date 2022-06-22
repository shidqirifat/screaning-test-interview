import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import CounterWrapper from '../components/CounterWrapper'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [counter, setNumber] = useState(2);

  const handleChangeCounter = (event) => {
    if (event.target.value === 0) return;
    console.log(Number(event.target.value));
    setNumber(Number(event.target.value));
  }

  const handleIncreaseCounter = () => {
    setNumber(counter + 1);
  }

  const handleDecreseCounter = () => {
    setNumber(counter - 1 < 0 ? 0 : counter - 1);
  }

  return (
    <div className="form-wrapper">
      <CounterWrapper counter={counter} onChange={handleChangeCounter} onIncrease={handleIncreaseCounter} onDecrease={handleDecreseCounter} />
    </div >
  )
}
