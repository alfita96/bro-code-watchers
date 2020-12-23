<template>
  <div id="login">
    <PasswordReset v-if="showPasswordReset" @close="togglePasswordReset()"></PasswordReset>
    <section>
      <div class="col1">
        <h1>Bro Code Watchers</h1>
        <p>Herzlich Willkomen zu unserer online Film & Serien Datenbank.</p>
      </div>
      <div :class="{ 'signup-form': !showLoginForm }" class="col2">
        <form v-if="showLoginForm" @submit.prevent>
          <h1>Willkommen zurück!</h1>
          <div>
            <label for="email1">Email</label>
            <input v-model.trim="loginForm.email" type="text" placeholder="your@email.com" id="email1" />
          </div>
          <div>
            <label for="password1">Passwort</label>
            <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password1" />
          </div>
          <button @click="login()" class="button">Login</button>
          <div class="extras">
            <a @click="togglePasswordReset()">Passwort vergessen?</a>
            <a @click="toggleForm()">Registrieren</a>
          </div>
        </form>
        <form v-else @submit.prevent>
          <h1>Registrieren</h1>
          <div>
            <label for="name">Name</label>
            <input v-model.trim="signupForm.name" type="text" placeholder="Name" id="name" />
          </div>
          <div>
            <label for="email2">Email</label>
            <input v-model.trim="signupForm.email" type="text" placeholder="your@email.com" id="email2" />
          </div>
          <div>
            <label for="password2">Passwort</label>
            <input v-model.trim="signupForm.password" type="password" placeholder="min 6 characters" id="password2" />
          </div>
          <button @click="signup()" class="button">Bestätigen</button>
          <div class="extras">
            <a @click="toggleForm()">Zurück zum Login</a>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>>

<script>
import PasswordReset from '@/components/PasswordReset'

export default {
  components: {
    PasswordReset
  },
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        title: '',
        email: '',
        password: ''
      },
      showLoginForm: true,
      showPasswordReset: false
    }
  },
  methods: {
    togglePasswordReset () {
      this.showPasswordReset = !this.showPasswordReset
    },
    toggleForm () {
      this.showLoginForm = !this.showLoginForm
    },
    login () {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    },
    signup () {
      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title
      })
    }
  }
}
</script>
