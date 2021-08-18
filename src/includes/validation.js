import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, max } from '@vee-validate/rules'

export default {
  install(app) {
    app.component('Field', Field)
    app.component('ValidForm', Form)
    app.component('ErrorMessage', ErrorMessage)

    // Define Ruleset
    defineRule('required', required)
    defineRule('email', email)
    defineRule('shortdesc', max)
    defineRule('level', required)

    // Configure Error Message
    configure({
      generateMessage: (context) => {
        const message = {
          required: `${context.field} is required`,
          email: 'Please input valid email',
          shortdesc: `Maximum character only ${context.rule.params} characters`,
          level: 'Are you afraid to lose? Pick a level!'
        }

        if (!message[context.rule.name]) {
          return `${context.field} is not valid`
        }

        return message[context.rule.name]
      }
    })
  }
}
