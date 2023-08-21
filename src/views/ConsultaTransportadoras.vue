<script>
import SysoHeader from '../components/SysoHeader.vue';
import SysoMenu from '../components/SysoMenu.vue';

export default {
  name: 'ConsultaTransportadoras',

  data() {
    return {
      linhas: [
            { nome: "Viper Transporter", cnpj: "11.111.111.11/0001-10", site: "10", rastreamento: "www.ssw.com.br", contato: "Amarildo José da Silva", telefone: "11 96778-3667", email: "vipex@vipex.com.br", acoes: "Relacionar lista de abrangência | Editar transportadora | Status" },
            { nome: "Viper Transporter", cnpj: "11.111.111.11/0001-10", site: "10", rastreamento: "www.ssw.com.br", contato: "Amarildo José da Silva", telefone: "11 96778-3667", email: "vipex@vipex.com.br", acoes: "Relacionar lista de abrangência | Editar transportadora | Status" },
            { nome: "Viper Transporter", cnpj: "11.111.111.11/0001-10", site: "10", rastreamento: "www.ssw.com.br", contato: "Amarildo José da Silva", telefone: "11 96778-3667", email: "vipex@vipex.com.br", acoes: "Relacionar lista de abrangência | Editar transportadora | Status" },
            { nome: "Viper Transporter", cnpj: "11.111.111.11/0001-10", site: "10", rastreamento: "www.ssw.com.br", contato: "Amarildo José da Silva", telefone: "11 96778-3667", email: "vipex@vipex.com.br", acoes: "Relacionar lista de abrangência | Editar transportadora | Status" },
            { nome: "Viper Transporter", cnpj: "11.111.111.11/0001-10", site: "10", rastreamento: "www.ssw.com.br", contato: "Amarildo José da Silva", telefone: "11 96778-3667", email: "vipex@vipex.com.br", acoes: "Relacionar lista de abrangência | Editar transportadora | Status" },
            { nome: "Viper Transporter", cnpj: "11.111.111.11/0001-10", site: "10", rastreamento: "www.ssw.com.br", contato: "Amarildo José da Silva", telefone: "11 96778-3667", email: "vipex@vipex.com.br", acoes: "Relacionar lista de abrangência | Editar transportadora | Status" },
            { nome: "Viper Transporter", cnpj: "11.111.111.11/0001-10", site: "10", rastreamento: "www.ssw.com.br", contato: "Amarildo José da Silva", telefone: "11 96778-3667", email: "vipex@vipex.com.br", acoes: "Relacionar lista de abrangência | Editar transportadora | Status" },
            { nome: "Viper Transporter", cnpj: "11.111.111.11/0001-10", site: "10", rastreamento: "www.ssw.com.br", contato: "Amarildo José da Silva", telefone: "11 96778-3667", email: "vipex@vipex.com.br", acoes: "Relacionar lista de abrangência | Editar transportadora | Status" },
            { nome: "Viper Transporter", cnpj: "11.111.111.11/0001-10", site: "10", rastreamento: "www.ssw.com.br", contato: "Amarildo José da Silva", telefone: "11 96778-3667", email: "vipex@vipex.com.br", acoes: "Relacionar lista de abrangência | Editar transportadora | Status" },
            { nome: "Viper Transporter", cnpj: "11.111.111.11/0001-10", site: "10", rastreamento: "www.ssw.com.br", contato: "Amarildo José da Silva", telefone: "11 96778-3667", email: "vipex@vipex.com.br", acoes: "Relacionar lista de abrangência | Editar transportadora | Status" },
            { nome: "Viper Transporter", cnpj: "11.111.111.11/0001-10", site: "10", rastreamento: "www.ssw.com.br", contato: "Amarildo José da Silva", telefone: "11 96778-3667", email: "vipex@vipex.com.br", acoes: "Relacionar lista de abrangência | Editar transportadora | Status" },
            { nome: "Viper Transporter", cnpj: "11.111.111.11/0001-10", site: "10", rastreamento: "www.ssw.com.br", contato: "Amarildo José da Silva", telefone: "11 96778-3667", email: "vipex@vipex.com.br", acoes: "Relacionar lista de abrangência | Editar transportadora | Status" },
            { nome: "Viper Transporter", cnpj: "11.111.111.11/0001-10", site: "10", rastreamento: "www.ssw.com.br", contato: "Amarildo José da Silva", telefone: "11 96778-3667", email: "vipex@vipex.com.br", acoes: "Relacionar lista de abrangência | Editar transportadora | Status" },
            { nome: "Viper Transporter", cnpj: "11.111.111.11/0001-10", site: "10", rastreamento: "www.ssw.com.br", contato: "Amarildo José da Silva", telefone: "11 96778-3667", email: "vipex@vipex.com.br", acoes: "Relacionar lista de abrangência | Editar transportadora | Status" },
            { nome: "Viper Transporter", cnpj: "11.111.111.11/0001-10", site: "10", rastreamento: "www.ssw.com.br", contato: "Amarildo José da Silva", telefone: "11 96778-3667", email: "vipex@vipex.com.br", acoes: "Relacionar lista de abrangência | Editar transportadora | Status" }        
        ]
    };
},
  components: { SysoHeader, SysoMenu }
}

</script>

<template>
    <main>
        <SysoHeader />
        <div id="content">
            <SysoMenu />

            <div id="dados-content">
                <div id="dados">
                    <p>Gestão de Logística > <strong>Consulta Transportadoras</strong></p>
                    
                    <div id="titulo">
                        <h1>Consulta Transportadoras</h1>
                    </div>

                    <div id="consulta-container">                    
                        <div id="filtro">                            
                            <form action="">
                                <div id="input-grupo">
                                    <label for="grupo">Grupo Logista:</label>
                                    <input type="text" name="grupo">
                                </div>

                                <div id="input-logista">
                                    <label for="logista">Logista:</label>
                                    <input type="text" name="logista">
                                </div>

                                <div id="input-pesquisar">
                                    <label for="pesquisar">Pesquisar:</label>
                                    <input type="text" name="pesquisar">
                                </div>

                                <div id="input-estoque">
                                    <label for="estoque">Estoque:</label>
                                    <input type="text" name="estoque">
                                </div>
                                <button type="submit">Filtrar</button>
                            </form>                            
                        </div>                    

                    <div id="resultado">
                        <div id="transp-dados">
                            <form action="">
                                <div id="transp-nome">
                                    <label for="nome">Nome Transportadora:</label>
                                    <input type="text" name="nome">
                                </div>

                                <div id="cnpj">
                                    <label for="cnpj">CNPJ:</label>
                                    <input type="text" name="cnpj">
                                </div>

                                <div id="status">
                                    <label for="status">Status:</label>
                                    <input type="text" name="status">
                                </div>                            
                            </form>
                        </div>

                        <div id="tabela">
                            <div class="linha tabela-header">
                                <div class="celula celula-header">Nome da Transportadora</div>
                                <div class="celula celula-header">CNPJ</div>
                                <div class="celula celula-header">Site</div>
                                <div class="celula celula-header">Site Rastreamento</div>
                                <div class="celula celula-header">Contato</div>
                                <div class="celula celula-header">Telefone</div>
                                <div class="celula celula-header">E-mail</div>
                                <div class="celula celula-header">Ações</div>
                                
                            </div>                            
                            
                            <div class="linha tabela-linha" v-for="linha in linhas" :key="linha.cnpj">
                                <div class="celula">{{ linha.nome }}</div>
                                <div class="celula">{{ linha.cnpj }}</div>
                                <div class="celula">{{ linha.site }}</div>
                                <div class="celula">{{ linha.rastreamento }}</div>
                                <div class="celula">{{ linha.contato }}</div>
                                <div class="celula">{{ linha.telefone }}</div>
                                <div class="celula">{{ linha.email }}</div>
                                <div class="celula">{{ linha.acoes }}</div>
                            </div>                            
                        </div>
                    </div> 
                </div>

                        <div id="paginacao">  
                            <div></div>                      
                            <div id="botao">
                                <button>Proxima Página&nbsp;&nbsp;<i class="bi bi-arrow-right"></i></button>                        
                            </div>

                            <div id="paginas">
                                <a href="#"><i class="bi bi-chevron-double-left"></i></a>
                                <span>&nbsp;1&nbsp;</span>
                                <span>-</span>
                                <span>&nbsp;1000&nbsp;</span>
                                <a href="#"><i class="bi bi-chevron-double-right"></i></a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

input {
    background-color: #e5e5e5;
    border: none;
    outline: none;
    border-radius: .3rem;
    width: 12rem;
}

label {
    padding-right: .2rem;    
}

#content {
    display: grid;
    grid-template-columns: 16.75rem 65rem;
    gap: 1.8rem;
}

#dados-content {
    height: 34rem;
    width: 65rem;    
    background-color: #f0f0f0;
    border-radius: 17px;
}

#dados {
    height: 33.2rem;
    width: 64.26rem;
    margin: .4rem;
    background-color: #f7f7f7;    
    border-radius: 11px;
    font-family: 'Engravers Gothic Bold';
    font-size: .8rem;
    font-weight: bold;
    color: #235339;       
}

#dados p {
    padding: .15rem 0 0 1rem;    
}

#dados p strong {
    font-size: .9rem;
}

#titulo {
    padding-top: .3rem;    
    text-align: center;
}

#consulta-container {
    display: flex;
    flex-direction: column;
    padding: .8rem 1rem 0 1rem;    
}

#filtro {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35%;
    padding: .5rem 0;
    border: 2px solid #235339;
    border-radius: 1rem;
    margin-bottom: .9rem;
}

#filtro form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .3rem;
}

#input-estoque {
    margin-bottom: .28rem;
}

#filtro form button {    
    padding: .3rem 1.3rem;
    border-radius: .5rem;
    border: none;
    font-family: 'Engravers Gothic';    
    color: var(--white);
    background-color: #235339;
}

#resultado {
    display: flex;
    flex-direction: column;
    border: 2px solid #235339;
    border-radius: 1rem;
    overflow: hidden;
}

#transp-dados {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 37%;
    padding: .5rem 0 .8rem 1.4rem;

}

#transp-dados form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .27rem;
}

#tabela {
    display: grid;
    width: 100%;
    font-family: 'Engravers Gothic';    
}

.tabela-header {
    font-size: .7rem;
    padding: .3rem 0;
    border-top: none;
    background-color: #235339;
    color: var(--white);        
}

.tabela-linha {
    font-size: .5rem;
    background-color: var(--white);
}

.linha {
    display: grid;  
    grid-template-columns: 2.29fr 1.90fr 1fr 1.88fr 1.74fr 1.45fr 1.75fr 3.90fr;
    align-items: center;
    border-bottom: 2px solid #e7e7e7; 
}

.celula {    
    text-align: center;
    border-right: 2px solid #e7e7e7; 
}

.celula:last-child {
    border-right: none; 
}

#paginacao {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    padding-top: .6rem;
    padding-right: 1rem;
}

#botao button{
    padding: .3rem 2rem;
    border-radius: .3rem;
    border: none;
    font-family: 'Engravers Gothic';    
    color: var(--white);
    background-color: #235339;
}

#paginas {
    width: 6rem;
    display: flex;   
    justify-self: end;       
}

#paginas span {
    padding-bottom: .1rem;
}

#paginas a i {
    color: #235339;
    font-size: 1rem;
}

</style>
