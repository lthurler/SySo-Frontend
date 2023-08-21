<script>

export default {
    name: "SysoMenu",

    props: {},

    methods: {
        goToconsultaTransportadoras() {
            this.$router.push('/consulta-transportadoras')
        },
        
        goToLogin() {
            this.$router.push('/')
        },

        goToListaProdutos() {
            this.$router.push('/lista')
        },

        goToConsultaNota() {
            this.$router.push('/consulta-nota')
        },
        
        goToEntradaNota() {
            this.$router.push('/entrada-nota')
        }
    },

    components: {},
}

</script>

<template>
    <aside>
        <div id="container">
            <div id="titulo">
                <img src="/src/assets/img/user.jpg">
                <span>Menu</span>                
            </div>

            <nav id="menu">
                <ul id="menu-itens">
                    <div>
                        <li><a href="#" @click.prevent="">Home</a></li>
                    </div>

                    <div>
                        <li><a href="#" @click.prevent="goToListaProdutos">Gestão de Cadastro</a></li>
                    </div> 

                    <div>
                        <li><a href="#" @click.prevent="">Gestão de Pedidos</a></li>
                    </div>

                    <div>
                        <li><a href="#" @click.prevent="goToConsultaNota">Gestão Armazenagem</a></li>
                    </div>

                    <div>
                        <li><a href="#" @click.prevent="goToconsultaTransportadoras">Gestão Logística</a></li>
                    </div>

                    <div>
                        <li><a href="#" @click.prevent="goToEntradaNota">Gestão de Faturamento</a></li>
                    </div>

                    <div>
                        <li><a href="#" @click.prevent="">Integração</a></li>
                    </div>

                    <div>
                        <li><a href="#" @click.prevent="">Rastreamento</a></li>
                    </div>

                    <div>
                        <li><a href="#" @click.prevent="">Configuração</a></li>
                    </div>

                    <div>
                        <li><a href="#" @click.prevent="">Usuário</a></li>
                    </div>

                    <div>
                        <li><a href="#" @click.prevent="">Configurações</a></li>
                    </div>
                </ul>

                <a href="#" @click.prevent="goToLogin">
                    <div id="menu-sair">
                        <img src="/src/assets/img/sair.jpg">
                        <p>Sair</p>
                    </div>
                </a>                    
            </nav>
        </div>
    </aside>    
</template>



<style scoped>

#container {
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 1rem 3rem 1.05rem 0;    
    background-color: #111111;
    color: var(--white);
    border-radius: 0 2rem 0 0;
    border:none;
}

#titulo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: .3rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    border-bottom: 1px solid#86c525;            
}

#titulo img{
    max-width: 60px;
}

#menu-itens {    
    font-size: 1.2rem;
    padding: 0;   
}

#menu-itens div {
    margin-bottom: .5rem;
    padding-left: 1.5rem;
    border-bottom: 1px solid transparent;/* padding-right: 1rem; */
}

#menu-itens div:nth-last-child(2) {
    margin-bottom: 3.4rem;
}


#menu-itens div:last-child {    
    margin-bottom:.8rem;    
}

#menu-itens div:hover {
    border-bottom-color: #86c525;
    /* border-bottom: 1px solid#86c525; */
}

#menu-sair {
    display: flex;    
    align-items: center;
    padding-left: .4rem;
    font-size: 1.54rem;
}

#menu-sair img {
    max-width: 31px;
}

#menu-sair p {
    padding-bottom: .1rem;
    padding-left: .15rem;
}

</style>