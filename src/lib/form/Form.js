import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import { useStores } from '@lib/store'

export default function Form({
  children,
  defaultValues = {},
  schema,
  onSubmit,
  onError = handleError,
}) {
  const { ErrorStore } = useStores()
  const { register, handleSubmit, errors } = useForm({
    defaultValues,
    resolver: schema ? yupResolver(schema) : null,
  })

  return (
    <form
      onSubmit={handleSubmit(data => {
        const response = onSubmit(data)

        if (response && typeof response.catch === 'function') {
          response.catch(onError(ErrorStore))
        }
      })}>
      {children({ register, errors })}
    </form>
  )
}

function handleError(errorStore) {
  return error => {
    errorStore.addError({
      title: error.message,
    })
  }
}
