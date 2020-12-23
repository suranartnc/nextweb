import { useStores, Observer } from '@lib/store'

export default function Notifications() {
  const { ErrorStore } = useStores()
  return (
    <Observer>
      {() => (
        <div css={{ position: 'fixed', right: 0, top: 0, padding: '10px' }}>
          {ErrorStore.errors.map((error, index) => (
            <div
              key={index}
              css={{
                marginBottom: '10px',
                border: '1px solid black',
                fontSize: '14px',
                padding: '0px 15px',
                borderRadius: '5px',
                backgroundColor: '#222',
                color: '#fff',
              }}>
              <p>{error.title}</p>
              <a
                onClick={() => {
                  ErrorStore.removeError(error.id)
                }}>
                X
              </a>
            </div>
          ))}
        </div>
      )}
    </Observer>
  )
}
