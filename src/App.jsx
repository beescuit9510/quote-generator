import React, { useState } from 'react'
import { useEffect } from 'react'
import { FaQuoteLeft, FaTwitter } from 'react-icons/fa'
import { CgSpinner } from 'react-icons/cg'

function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isFetching, setIsFetching] = useState(false)
  const getQuote = () =>
    fetch('https://api.quotable.io/quotes/random?limit=1')
      .then((res) => res.json())
      .then((res) => {
        const quote = res.pop()
        setAuthor(quote.author)
        setQuote(quote.content)
      })
      .catch(console.log)

  const tweet = () => {
    const text = `${quote} - ${author}`
    const url = `https://twitter.com/intent/tweet?text=${text}`
    window.open(url, '_blank')
  }

  useEffect(() => {
    getQuote().then(() => setIsLoading(false))
  }, [])
  return (
    <>
      <div className='max-w-[750px] w-[90%] h-screen mx-auto text-center flex justify-center items-center'>
        <div className='border-gray-300 rounded-lg shadow-xl border w-full flex flex-col py-5 px-7 bg-[rgba(0, 0, 0, 0.2)]'>
          <div className='mb-2'>
            <p className='text-2xl md:text-4xl inline'>
              {isLoading ? (
                <div className='w-full flex justify-center items-center my-14'>
                  <CgSpinner className='animate-spin text-7xl' />
                </div>
              ) : (
                <>
                  <FaQuoteLeft className='text-3xl md:text-5xl inline -translate-y-2 capitalize' />
                  {quote}
                </>
              )}
            </p>
          </div>
          <p className='text-lg md:text-2xl italic font-light capitalize'>
            {author}
          </p>
          <div className='flex justify-between mt-2'>
            <button
              onClick={() => tweet()}
              className='px-6 py-2 bg-gray-900 rounded-md text-white shadow-btn hover:translate-y-1 hover:shadow-none hover:text-blue-400'
            >
              <FaTwitter className='text-sm' />
            </button>
            <button
              onClick={() => {
                setIsFetching(true)
                getQuote().then(() => setIsFetching(false))
              }}
              className='px-6 py-2 bg-gray-900 rounded-md text-white text-sm relative shadow-btn hover:translate-y-1 hover:shadow-none'
            >
              <CgSpinner
                className={`animate-spin absolute left-[44%] text-xl ${
                  isFetching ? 'visible' : 'invisible'
                }`}
              />
              <p className={`${isFetching && 'invisible'}`}>New Quote</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
