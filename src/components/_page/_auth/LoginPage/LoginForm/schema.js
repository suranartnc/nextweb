import * as yup from 'yup'

export default yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('อีเมลไม่ถูกต้อง')
    .required('กรุณากรอกอีเมล'),
  password: yup
    .string()
    .trim()
    .required('กรุณากรอกรหัสผ่าน'),
})
