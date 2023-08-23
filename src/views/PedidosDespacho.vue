<script>
import SysoHeader from '../components/SysoHeader.vue';
import SysoMenu from '../components/SysoMenu.vue';

export default {
  name: 'ConsultaTransportadoras',

  data() {
    return {
      menuVisible: true,

      linhas: [
            { selecao: '<input type="checkbox">', nf: "12345", marketplace: "Americanas", data: ".", status: "Pedido faturado", transportadora: "V", acoes: "Alterar transportadora | Consulta pedido | imprimir etiqueta | imprimir nota fiscal" },
            { selecao: '<input type="checkbox">', nf: "12345", marketplace: "Americanas", data: ".", status: "Pedido faturado", transportadora: "V", acoes: "Alterar transportadora | Consulta pedido | imprimir etiqueta | imprimir nota fiscal" },
            { selecao: '<input type="checkbox">', nf: "12345", marketplace: "Americanas", data: ".", status: "Pedido faturado", transportadora: "V", acoes: "Alterar transportadora | Consulta pedido | imprimir etiqueta | imprimir nota fiscal" },
            { selecao: '<input type="checkbox">', nf: "12345", marketplace: "Americanas", data: ".", status: "Pedido faturado", transportadora: "V", acoes: "Alterar transportadora | Consulta pedido | imprimir etiqueta | imprimir nota fiscal" },
            { selecao: '<input type="checkbox">', nf: "12345", marketplace: "Americanas", data: ".", status: "Pedido faturado", transportadora: "V", acoes: "Alterar transportadora | Consulta pedido | imprimir etiqueta | imprimir nota fiscal" }
        ]
    };

  },

  components: { SysoHeader, SysoMenu },

  methods: {
        toggleMenu() {
            this.menuVisible = !this.menuVisible;
        },
    }
}

</script>

<template>
    <main>
        <SysoHeader @toggle-menu="toggleMenu" />
        <div id="content">
            <SysoMenu :menuVisible="menuVisible" />            
            <div id="dados-content">
                <div id="dados">
                    <p>Gestão de cadastro > <span>Lista de pedidos para preparação de despacho</span></p>
                    
                    <div id="titulo">
                        <h1>Lista de pedidos para preparação de despacho</h1>
                    </div>

                    <div id="pedidos-container">                    
                        <div id="colunas-pesquisa">
                            <div>
                                <form action="">
                                    <div>
                                        <label for="grupo">Grupo Logista:</label>
                                        <input type="text" name="grupo">
                                    </div>

                                    <div>
                                        <label for="lojista">Logista:</label>
                                        <input type="text" name="lojista">
                                    </div>

                                    <div>
                                        <label for="pesquisar">Pesquisar:</label>
                                        <input type="text" name="pesquisar">
                                    </div>                          
                                </form>
                            </div>

                            <div>
                                <form action="">
                                    <div>
                                        <label for="estoque">Estoque:</label>
                                        <input type="text" name="estoque">
                                    </div>

                                    <div>
                                        <label for="tags">Tags:</label>
                                        <input type="text" name="tags">
                                    </div>                                

                                    <div>
                                        <label for="tipo">Tipo:</label>
                                        <input type="text" name="tipo">
                                    </div>                          
                                </form>
                            </div>

                            <div>
                                <form action="">
                                    <div>
                                        <label for="loja">Loja Vinculada:</label>
                                        <input type="text" name="loja">
                                    </div>

                                    <div>
                                        <label for="status">Status:</label>
                                        <input type="text" name="status">
                                    </div>                                

                                    <div>
                                        <label for="marca">Marca:</label>
                                        <input type="text" name="marca">
                                    </div>                          
                                </form>
                            </div>

                            <div id="botao-pesquisa">                                
                                <button type="submit">FILTRAR</button>
                            </div>                            
                        </div>                                                               

                        <div id="leitor-container">
                            <h2>Listagem de pedidos por leitor de código de barras</h2>
                            <div id="colunas-leitor">
                                <div class="coluna">
                                    <form action="">
                                        <div>
                                            <label for="grupo">Grupo Logista:</label>
                                            <input type="text" name="grupo">
                                        </div>

                                        <div>
                                            <label for="lojista">Logista:</label>
                                            <input type="text" name="lojista">
                                        </div>

                                        <div>
                                            <label for="transportadora">Transportadora:</label>
                                            <input type="text" name="transportadora">
                                        </div>

                                        <div>
                                            <label for="estado">Estado:</label>
                                            <input type="text" name="estado">
                                        </div>

                                        <div>
                                            <label for="cidade">Cidade:</label>
                                            <input type="text" name="cidade">
                                        </div>

                                        <div>
                                            <label for="bairro">Bairro:</label>
                                            <input type="text" name="bairro">
                                        </div> 

                                        <div>
                                            <label for="cep-inicial">CEP inicial:</label>
                                            <input type="text" name="cep-inicial">
                                        </div>                             
                                    </form>
                                </div>

                                <div class="coluna">
                                    <form action="">
                                        <div>
                                            <label for="marketplace">Marketplace:</label>
                                            <input type="text" name="marketplace">
                                        </div>

                                        <div>
                                            <label for="data">Data prevista:</label>
                                            <input id="data" type="text" name="data" placeholder="      /     /       A       /     /     ">
                                        </div>

                                        <div id="lista">
                                            <div><span>Lista de pedidos:</span></div>
                                            <input type="text" name="lista">
                                        </div>

                                        <div>
                                            <label for="cep-final">CEP final:</label>
                                            <input type="text" name="cep-final">
                                        </div>
                                    </form>
                                </div>

                                <div class="coluna" id="botoes-coluna">
                                    <div><button type="submit">Leitor de Código de Barras</button></div>
                                    <button type="submit">Alterar Transportadora de pedidos</button>
                                    <button type="submit">Despachar pedidos selecionados</button>
                                    <button type="submit">Imprimir lista de romaneio</button>
                                    <div></div>
                                </div>

                            </div>

                            <div id="selecionar">
                                <input type="checkbox" name="selecionar-pedidos">
                                <span>Selecionar todos os pedidos</span>
                                <i class="ri-corner-right-down-fill"></i>
                            </div>

                            <div id="tabela">
                                <div class="linha tabela-header">
                                    <div class="celula celula-header">Selecionar</div>
                                    <div class="celula celula-header">Número nota fiscal</div>
                                    <div class="celula celula-header">Marketplace</div>
                                    <div class="celula celula-header">Data prometida</div>
                                    <div class="celula celula-header">Status do pedido marketplace</div>
                                    <div class="celula celula-header">Transportadora</div>
                                    <div class="celula celula-header">Ações</div>                                                                
                                </div>                            
                                
                                <div class="linha tabela-linha" v-for="linha in linhas" :key="linha.cnpj">
                                    <div class="celula" v-html="linha.selecao"></div>                                
                                    <div class="celula">{{ linha.nf }}</div>
                                    <div class="celula">{{ linha.marketplace }}</div>
                                    <div class="celula">{{ linha.data }}</div>
                                    <div class="celula">{{ linha.status }}</div>
                                    <div class="celula">{{ linha.transportadora }}</div>
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

form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .3rem;
}

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
    background-color: var(--dark-gray);
    border-radius: 17px;
}

#dados {
    height: 33.2rem;
    width: 64.26rem;
    margin: .4rem;
    background-color: var(--light-gray);    
    border-radius: 11px;
    font-family: 'Engravers Gothic Bold';
    font-size: .8rem;
    font-weight: bold;
    color: var(--dark-green);       
}

#dados p {
    padding: .15rem 0 0 1rem;    
}

#dados p span {
    font-size: .9rem;
}

#titulo {
    padding-top: .2rem;    
    text-align: center;
}

#pedidos-container {
    display: flex;
    flex-direction: column;
    padding: .8rem 1rem 0 1rem;    
}

#colunas-pesquisa {
    display: flex;
    border: 2px solid var(--dark-green);
    border-radius: 1rem;
    gap:1rem;
    padding: .5rem 1rem;
    margin-bottom: .2rem;
}

#botao-pesquisa {
    align-self: center;
}

#botao-pesquisa button {
    width: 5.7rem;
    height: 1.4rem;
    border-radius: .5rem;
    border:none;
    font-family: 'Engravers Gothic';
    font-size: .7rem;    
    color: var(--white);
    border: 1px solid var(--dark-green);
    background-color: var(--dark-green);
    transition: .5s;
}

#botao-pesquisa button:hover {
    cursor:pointer;
    background-color: var(--light-green);
}

#leitor-container {
    border: 2px solid var(--dark-green);
    border-radius: 1rem;
    overflow: hidden;
}

#leitor-container h2 {
    padding-left: 1rem;    
}

#colunas-leitor {
   display: flex;   
   padding: .5rem 1rem 0 1rem;
   gap: 2rem; 
}

.coluna {
    display: flex;
    flex-direction: column;    
    gap: .3rem;
}

#data {
    font-family: 'Engravers Gothic Bold';    
    color: var(--dark-green);
    background-color: var(--light-gray);

}

#lista {
    display: flex;
}

#lista span {
    padding-right: .2rem;    
}

#lista input {    
    height: 3rem;
}

#botoes-coluna {
    padding-left: 2rem;
    align-items: center;    
}

#botoes-coluna button {
    width: 13.7rem;
    height: 1.5rem;
    border-radius: .5rem;
    border:none;
    font-family: 'Engravers Gothic';
    font-size: .8rem;        
    color: var(--white);
    background-color: var(--dark-green);
    border: 2px solid var(--dark-green);
    transition: .5s;
}

#botoes-coluna button:hover {
    cursor:pointer;
    background-color: var(--light-green);
}

#botoes-coluna div:first-child {
    padding-bottom: .3rem;
}

#botoes-coluna button:first-child {
    width: 17.5rem;
    height: 4rem;
    border-radius: 1rem;    
    font-size: 1rem;
    color: #235339;
    background-color: var(--white);
    border: 2px solid #235339;    
}

#botoes-coluna button:first-child:hover {
    cursor:pointer;
    color:var(--white);
    background-color: var(--light-green);
}

#selecionar {
    display: flex;
    align-items: center;
    padding-left: 1rem;
}

#selecionar input {
    width: 1rem;        
}

#selecionar span {
    padding: .2rem .2rem .5rem .2rem;    
}

#selecionar i {
    font-size: .9rem;
    padding-top: .4rem;
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
    background-color: var(--dark-green);
    color: var(--white);        
}

.tabela-linha {
    font-size: .7rem;
    background-color: var(--white);
}

.linha {
    display: grid;
    grid-template-columns: 1fr 1.1957fr 1.1957fr 1.1304fr 1.6957fr 1.3369fr 3.6304fr;
    align-items: center;
    border-bottom: 2px solid #e7e7e7; 
}

.celula {    
    text-align: center;
    border-right: 2px solid #e7e7e7; 
}

.celula:last-child {
    border-right: none;
    font-size: .5rem; 
}

#paginacao {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    padding-top: .4rem;
    padding-right: 1rem;
}

#botao button{
    padding: .3rem 2rem;
    border-radius: .3rem;
    border: none;
    font-family: 'Engravers Gothic';    
    color: var(--white);
    background-color: var(--dark-green);
    transition: .5s;
}

#botao button:hover {
    cursor: pointer;   
    background-color: var(--light-green);            
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
    color: var(--dark-green);
    font-size: 1rem;
    transition: .5s;
}

#paginas a i:hover {       
    color: var(--light-green);            
}

</style>
