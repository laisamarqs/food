import { useDispatch, useSelector } from 'react-redux'
import { FormikProps } from 'formik'

import Button from '../../ui/Button'
import { FieldSet } from '../../ui/FieldSet'

import { FormControls } from './styles'

import { formatPrice, calculeTotalPrice } from '../../../utils'
import { getErrorMessage } from '../../../utils/form-validate'

import { RootState } from '../../../store'
import { openFormDelivery } from '../../../store/reducers/formDelivery'

import { usePurchaseMutation } from '../../../services/api'

export type PaymentFormProps = {
  form: FormikProps<FormValues>
}

const PaymentForm = ({ form }: PaymentFormProps) => {
  const { itemsCart } = useSelector((state: RootState) => state.cart)
  const [, { isLoading, isError }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const amount = formatPrice(calculeTotalPrice(itemsCart))

  return (
    <div aria-label="Formulário de pagamento">
      <div className="margin-bottom">
        <h3>Pagamento - Valor a pagar {amount}</h3>

        <FieldSet.Root>
          <FieldSet.Label label="Nome no cartão*" id="cardName" />
          <FieldSet.Input
            id="cardName"
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            value={form.values.cardName}
            type="text"
            required="true"
          />
          <FieldSet.ErrorMessage
            errorMessage={getErrorMessage('cardName', form)}
          />
        </FieldSet.Root>

        <div className="flex">
          <FieldSet.Root maxWidth="228px">
            <FieldSet.Label label="Número do cartão*" id="cardNumber" />
            <FieldSet.InputMask
              id="cardNumber"
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.cardNumber}
              mask="9999 9999 9999 9999"
              type="text"
              required="true"
            />
            <FieldSet.ErrorMessage
              errorMessage={getErrorMessage('cardNumber', form)}
            />
          </FieldSet.Root>

          <FieldSet.Root maxWidth="87px">
            <FieldSet.Label label="CVV*" id="cardCode" />
            <FieldSet.InputMask
              id="cardCode"
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.cardCode}
              mask="999"
              type="text"
              required="true"
            />
            <FieldSet.ErrorMessage
              errorMessage={getErrorMessage('cardCode', form)}
            />
          </FieldSet.Root>
        </div>

        <div className="flex margin-bottom">
          <FieldSet.Root maxWidth="9.68rem">
            <FieldSet.Label label="Mês de expiração*" id="expiresMonth" />
            <FieldSet.InputMask
              id="expiresMonth"
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.expiresMonth}
              mask="99"
              type="text"
              required="true"
            />
            <FieldSet.ErrorMessage
              errorMessage={getErrorMessage('expiresMonth', form)}
            />
          </FieldSet.Root>

          <FieldSet.Root maxWidth="9.68rem">
            <FieldSet.Label label="Ano de expiração*" id="expiresYear" />
            <FieldSet.InputMask
              id="expiresYear"
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.expiresYear}
              mask="99"
              type="text"
              required="true"
            />
            <FieldSet.ErrorMessage
              errorMessage={getErrorMessage('expiresYear', form)}
            />
          </FieldSet.Root>
        </div>
      </div>

      <FormControls>
        <Button
          background="secundary"
          title="Finalizar o pagamento"
          label={isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
          type="submit"
        />

        <Button
          background="secundary"
          title="Voltar para a edição de endereço"
          label="Voltar para a edição de endereço"
          type="button"
          onClick={(e) => {
            dispatch(openFormDelivery())
            e.preventDefault()
          }}
        />
      </FormControls>

      {isError && <p>Oops! Algo deu errado, tente novamente.</p>}
    </div>
  )
}

export default PaymentForm