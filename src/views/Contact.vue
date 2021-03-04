<template>
  <div class="menu">
    <h2>Contact</h2>
    <b-form class="bot-form">
      <b-form-group>
        <b-form-input class="input" type="text" 
                      placeholder="Name" v-model="name"/>
      </b-form-group>
      <b-form-group>
        <b-form-input 
          type="email" 
          v-model="email"
          name="email"
          placeholder="Your Email"
        />
      </b-form-group>
      <b-form-group>
        <b-form-textarea
        class="input"
        id="textarea-rows"
        placeholder="Message" 
        v-model="mainBody"
        rows="8"
        no-resize>
        </b-form-textarea>
      </b-form-group>
      <label class="submit">
        <b-button variant="outline-primary" @click="onSubmit">Send</b-button>
      </label>
      <h5>{{message}}</h5>
    </b-form>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import emailjs from 'emailjs-com';

export default {
  name: 'Home',
  setup() {
    const name = ref('');
    const email = ref('');
    // const sendEmail = ref('');
    const message = ref('');

    async function onSubmit() {


      //TODO: Get Correct Template Info From Sean - From this website: https://dashboard.emailjs.com/sign-in and https://www.freecodecamp.org/news/send-emails-from-your-vue-application/
      try {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'e.target',
        'YOUR_USER_ID', {
          name: this.name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    }

    return {
      name,
      email,
      onSubmit,
      message,
    };
  }
}
</script>

<style scoped>
h2 {
  font-weight: bold;
}

.menu {
  display: flex;
  padding: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.bot-form {
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 40px 40px;
  padding: 20px;
}

.check {
  float: left;
  margin: 4px;
}

</style>