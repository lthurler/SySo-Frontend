<script setup>

</script>

<template>
    <main>
        <div id="container">
            <div id="content">
                <div id="logo">
                    <img src="/src/assets/img/logo.png">
                    <img src="/src/assets/img/brabos.png">
                </div>
                <div id="login">
                    <div id="conta-img">
                        <img src="/src/assets/img/Ativo 7.png">
                        <img src="/src/assets/img/Ativo 8.png">
                    </div>

                    <div class="login-container">
                        <h1 class="login-title">Welcome</h1>
                        <form class="form">
                            <div class="input">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email">
                                {/* <span class="msg">Valid email</span>  */}
                            </div>

                            <div class="input">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password">
                                {/* <span class="msg">Incorrect password</span> */}
                            </div>

                            <button type="submit" id="login-button">Login</button>
                        </form>
                            <p><a>Esqueci a senha</a></p>
                    </div>

                    <div id="social-media">
                        <img src="/src/assets/img/Ativo 2.png">
                        <img src="/src/assets/img/Ativo 3.png">
                        <img src="/src/assets/img/Ativo 4.png">
                        <img src="/src/assets/img/Ativo 5.png">
                    </div>
                </div>
            </div>

        </div>
    </main>

</template>

<style scoped>
:root {
  --primary-light-hsl: 200, 100%, 91%;
  --primary-hsl: 200, 100%, 50%;
  --primary-dark-hsl: 200, 100%, 6%;
  --success-hsl: 100, 60%, 50%;
  --error-hsl: 0, 60%, 50%;
}

body {
  margin: 0;
}

.full-screen-container {
  background-image: url("background-image.jpg");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  --color: hsl(var(--primary-dark-hsl), .7);
  background-color: var(--color);
  box-shadow: 0 0 15px 0 var(--color);
  padding: 40px 30px;
  width: 80%;
  max-width: 600px;
  border-radius: 20px;
}

.login-title {
  margin: 0;
  color: white;
  text-align: center;
  font-size: 2rem;
  font-weight: normal;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.input-group label {
  color: white;
  font-weight: lighter;
}

.input-group input {
  font-size: 1.25rem;
  padding: .5em;
  background-color: hsl(var(--primary-light-hsl), .3);
  border: none;
  outline: none;
  border-radius: .25em;
  color: white;
  font-weight: lighter;
}

.input-group.success input {
  box-shadow: 0 0 0 1px hsl(var(--success-hsl));
}

.input-group.error input {
  box-shadow: 0 0 0 1px hsl(var(--error-hsl));
}

.input-group input:focus {
  box-shadow: 0 0 0 1px hsl(var(--primary-hsl));
}

.input-group .msg {
  display: none;
  font-size: .75rem;
}

.input-group.success .msg,
.input-group.error .msg {
  display: block;
}

.input-group.error .msg {
  color: hsl(var(--error-hsl));
}

.input-group.success .msg {
  color: hsl(var(--success-hsl));
}

.login-button {
  padding: .5em 1em;
  font-size: 1.5rem;
  font-weight: lighter;
  color: white;
  background-color: hsl(var(--primary-hsl), .25);
  border: 1px solid hsl(var(--primary-hsl));
  border-radius: .25em;
  outline: none;
  cursor: pointer;
}

.login-button:hover,
.login-button:focus {
  background-color: hsl(var(--primary-hsl), .4);
}


</style>
