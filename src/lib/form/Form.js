import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import { inject } from '@lib/store'

function Form({
  errorStore,
  children,
  defaultValues = {},
  schema,
  onSubmit,
  onError = handleError,
}) {
  const { register, handleSubmit, errors } = useForm({
    defaultValues,
    resolver: schema ? yupResolver(schema) : null,
  })

  return (
    <form
      onSubmit={handleSubmit(data => {
        const response = onSubmit(data)

        if (response && typeof response.catch === 'function') {
          response.catch(onError(errorStore))
        }
      })}>
      {children({ register, errors })}
    </form>
  )
}

function handleError(errorStore) {
  return error =>
    errorStore.addError({
      title: error.message,
    })
}

export default inject('errorStore', { observe: false })(Form)
