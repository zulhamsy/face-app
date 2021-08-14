import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email } from '@vee-validate/rules'

export default {
  install(app) {
    app.component('Field', Field)
    app.component('ValidForm', Form)
    app.component('ErrorMessage', ErrorMessage)

    // Define Ruleset
    defineRule('required', required)
    defineRule('email', email)

    // Configure Error Message
    configure({
      generateMessage: (context) => {
        const message = {
          required: `${context.field} is required`,
          email: 'Please input valid email'
        }

        if (!message[context.rule.name]) {
          return `${context.field} is not valid`
        }

        return message[context.rule.name]
      }
    })
  }
}
