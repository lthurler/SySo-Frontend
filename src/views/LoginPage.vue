<script setup>

</script>

<template>
    <main>
        <div class="container">
            <div id="content">
                <div id="logo">
                    <img src="/src/assets/img/logo.png">
                    <img src="/src/assets/img/brabos.png">
                </div>

                <div id="login">
                    <div id="conta-img">
                        <img src="/src/assets/img/Ativo 7.png">
                        <img src="/src/assets/img/Ativo 8.png">
                        <!-- <span>Minha Conta</span>                         -->
                    </div>

                    <div class="login-container">
                       <div id="titulo">
                          <div id="titulo-span">
                            <span>Login</span>
                          </div>
                       </div>

                          <div id="form-container">
                            <form id="form">
                                <div class="input" id="input-email">
                                    <label for="email">E-mail:</label>
                                    <input type="email" name="email" id="email">
                                    <!-- <span class="msg">Valid email</span> -->
                                </div>
    
                                <div class="input" id="input-senha">
                                    <label for="password">Senha:</label>
                                    <input type="password" name="password" id="senha">
                                    <!-- <span class="msg">Incorrect password</span>  -->
                                </div>
    
                                <button type="submit" id="login-button">Entrar</button>
                            </form>
                            
                            <div id="esqueci">
                                <a href="#">Esqueci a senha</a>
                            </div>
                          </div>
                    </div>

                    <div id="social-media">
                        <a href="#"><img src="/src/assets/img/Ativo 2.png"></a>
                        <a href="#"><img src="/src/assets/img/Ativo 3.png"></a>
                        <a href="#"><img src="/src/assets/img/Ativo 4.png"></a>
                        <a href="#"><img src="/src/assets/img/Ativo 5.png"></a>
                    </div>
                    
                    <div id="url">
                      <a href="#">WWW.AGENCIABRABOS.COM.BR</a>  
                      <!-- <a href="#"><img src="/src/assets/img/Ativo 6.png"></a> -->
                    </div>
                </div>
            </div>
        </div>
    </main>

</template>

<style scoped>

a {
  text-decoration: none;
  color: var(--white);
  cursor: pointer;
}

main {
  background-color: var(--white);
}

.container {
  width: 100vw;
  height: 100vh;
  background-image: url("/src/assets/img/parte verde-01.png");
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
}

#content {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;  
}

#logo {  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 17rem;
  padding-left: 7rem;
  padding-bottom: 3.5rem;
}

#logo img {
  width: 65%;
}

#login {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 11rem;
  padding-bottom: 5rem;  
}

#conta-img {
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 2.3rem; */
  padding-bottom: .7rem;
}

#conta-img img:first-child {
  width: 7%;
}

#conta-img img:last-child {
  width: 55%;
  /* color: var(--white); */
  padding-top: .5rem;
  padding-left: .7rem;  
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.7);
  border-radius: 20px;
  padding: 1rem 1rem 2rem 1rem;  
}

#titulo {
  border-bottom: 2px solid var(--white);  
  width: 55%;  
}

#titulo-span {
  text-align: center;
  color: var(--white);
  font-size: 1.7rem;
  padding-bottom: .4rem;  
}

#form {  
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
}

.input {
  display: flex;
  flex-direction: column;  
}

#input-email {
  padding-bottom: 1rem;
}

#input-senha {
  padding-bottom: .7rem;
}

.input label {
  color: var(--white);  
  padding-left: .3rem;
  font-size: 1rem;
}

.input input {  
  font-size: 1rem;
  padding: .5rem 2.5rem;
  background-color: var(--white);
  border: none;
  outline: none;
  border-radius: .40em;
  color: var(--white);  
}

.input input:focus {
  box-shadow: 0 0 0 1px hsl(var(--primary-hsl));
}

#login-button {
  padding: .1rem 3.3rem;
  margin: 0 auto;  
  font-size: 1.2rem;
  font-family: Engrgotn;
  color: #000;
  background-color: #86C525;
  border: 1px solid hsl(var(--primary-hsl));
  border-radius: .35em;
  outline: none;
  cursor: pointer;  
}

#login-button:hover,
#login-button:focus {
  background-color: hsl(var(--primary-hsl), .4);
}

#esqueci {
  text-align: center;
}

#esqueci a {
  font-size: .8rem;
  text-decoration: underline;  
}

#social-media {
  padding-top: 1.5rem;
  padding-left: 1.5rem;  
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#social-media img {
  width: 60%;
}

#url {
  position: absolute;
  bottom: 0;
  padding-bottom: 1rem;
  font-size: 1.2rem;
}

</style>
