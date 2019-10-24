import { useState } from 'react'

export default function FetchMore({ children, service, start, limit }) {
  const [lastStart, setLastStart] = useState(start)
  const [isLoading, setIsLoading] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const [data, setData] = useState([])

  const fetchMore = async () => {
    setIsLoading(true)
    const newData = await service({ start: lastStart, limit })
    setIsLoading(false)
    setLastStart(lastStart + newData.length)
    setData(data.concat(newData))

    if (newData.length < limit) {
      setIsDone(true)
    }
  }

  return children({ data, fetchMore, isLoading, isDone })
}
