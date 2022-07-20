import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { TransactionContainer } from './styles'
import TransactionCard from './transactionCard'

const data = [
  {
    id: 1,
    category: "deposit",
    amount: "463",
    status: "successful",
    date: Date,
    transactionCurrency: "USD"
  },

  {
    id: 2,
    category: "withdrawal",
    amount: "1271",
    status: "successful",
    date: Date,
    transactionCurrency: "SEC"
  },

  {
    id: 3,
    category: "transfer",
    amount: "936",
    status: "successful",
    date: Date,
    transactionCurrency: "SEC"
  },
  {
    id: 4,
    category: "deposit",
    amount: "911",
    status: "successful",
    date: Date,
    transactionCurrency: "USD"
  },

  {
    id: 5,
    category: "withdrawal",
    amount: "928",
    status: "successful",
    date: Date,
    transactionCurrency: "SEC"
  },

  {
    id: 6,
    category: "transfer",
    amount: "238",
    status: "successful",
    date: Date,
    transactionCurrency: "SEC"
  }
]

const transactionCategories = [
  { value: 'all', label: 'All' },
  { value: 'deposit', label: 'Deposits' },
  { value: 'transfer', label: 'Transfers' },
  { value: 'withdrawal', label: 'Withdrawals' },
]

export default function Index() {

  const [category, setCategory ] = useState({ value: 'all', label: 'All' })

  return (
    <TransactionContainer>
       <section className="central-column">
        <div className="container">
                <h3>Transaction</h3>
                <span>
                      <Select
                          autoFocus
                          placeholder="Choose category"
                          defaultValue={category}
                         
                          onChange={setCategory}
                          options={ transactionCategories }
                        />
                </span>
        </div>
       </section>
       <section className="central-column">
        <div className="container">

            { category.value === "all"? data.map(each => (
                <TransactionCard key={each.id} datum={each}/>
            )) : data.filter(each =>  each.category === category.value ).map(each => (
                <TransactionCard key={each.id} datum={each}/>
            )) }
        </div>
       </section>
    </TransactionContainer>
  )
}


