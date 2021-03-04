<template>
  <div class="menu">
    <h2>Contact</h2>
    <div class="container">
      <form @submit.prevent="onSubmit">
        <label>Name</label>
        <input 
          type="text" 
          v-model="name"
          name="name"
          placeholder="Name"
        >
        <label>Email</label>
        <input 
          type="email" 
          v-model="email"
          name="email"
          placeholder="Your Email"
          >
        <label>Message</label>
        <textarea 
          name="message"
          v-model="message"
          cols="30" rows="5"
          placeholder="Message">
        </textarea>
        <input type="submit" value="Send">
        <h5 class="sentMessage">{{sentMessage}}</h5>
      </form>
    </div>
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
    let sentMessage = ref('');

    function onSubmit(e) {
      //TODO: Get Correct Template Info From Sean - From this website: https://dashboard.emailjs.com/sign-in and https://www.freecodecamp.org/news/send-emails-from-your-vue-application/
      try {
        emailjs.sendForm('service_xksrv36', 'template_0eq85al', e.target, 'user_NmUBaYwG8JB9jdqCJ9Vcc', {
          name: name,
          email: email,
          message: message
        })
        sentMessage = 'Message Sent!';

      } catch(error) {
          sentMessage = 'error';
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    }

    return {
      name,
      email,
      message,
      onSubmit,
      sentMessage
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

.contact-form {
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

.sentMessage {
  margin-top: 25px;
}

/* From: https://github.com/Seybel/vue-emailjs-demo/blob/main/src/components/ContactForm.vue */

* {box-sizing: border-box;}

label {
  float: left;
}
input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type=submit] {
  background-color: #FF5700;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: #dd8d41;
}
.container {
  display: block;
  margin:auto;
  margin-top:40px;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

</style>