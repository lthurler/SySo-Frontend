<script>
import SysoHeader from '../components/SysoHeader.vue';
import SysoMenu from '../components/SysoMenu.vue';

export default {
  name: 'ConsultaTransportadoras',

  data() {
    return {
      menuVisible: true,

      linhas: [
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"}                     
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
                    <p>Gestão armazenagem > <span>Entrada de NFe</span></p>
                    
                    <div id="titulo">
                        <h1>Entrada de nota fiscal fornecedor</h1>
                    </div>

                    <div id="entrada-container">                    
                        <div id="pesquisa-container">
                            <form action="">
                                <div>
                                    <label for="lojista">Logista:</label>
                                    <input type="text" name="lojista">
                                </div>

                                <div>
                                    <label for="deposito">Depósito:</label>
                                    <input type="text" name="deposito">
                                </div>                                

                                <div>
                                    <label for="nfe">Selecionar NFe:</label>
                                    <input type="text" name="nfe">
                                </div>                          
                            </form>

                            <div id="botoes-pesquisa">
                                <button type="submit">Carregar XML</button>
                                <button type="submit">Limpar</button>
                            </div>
                        </div>

                        <div id="container-tabela">
                            <div id="relacao">
                                <h2>Relacionamento produto fornecedor</h2>                                
                                <form action="">
                                    <div id="transp-nome">
                                        <label for="fornecedor">Fornecedor:</label>
                                        <input type="text" name="fornecedor">
                                    </div>

                                    <div id="status">
                                        <label for="razao">Razão Social:</label>
                                        <input type="text" name="razao">
                                    </div>

                                    <div id="cnpj">
                                        <label for="cnpj">CNPJ:</label>
                                        <input type="text" name="cnpj">
                                    </div>
                                </form>
                                <span>Relação de Produtos</span>                      
                            </div>

                            <div id="tabela">
                                <div class="linha tabela-header">
                                    <div class="celula celula-header">Item NF</div>
                                    <div class="celula celula-header">Nome do produto NFe</div>
                                    <div class="celula celula-header">Valor Total NFe</div>
                                    <div class="celula celula-header">Selecionar</div>
                                    <div class="celula celula-header">SKU</div>
                                    <div class="celula celula-header">Nome do Produto</div>
                                    <div class="celula celula-header">Quantidade NFe</div>                                                                
                                </div>                                                       
                                
                                <div class="linha tabela-linha" v-for="linha in linhas" :key="linha.item">
                                    <div class="celula">{{ linha.item }}</div>
                                    <div class="celula">{{ linha.nome }}</div>
                                    <div class="celula">{{ linha.valor }}</div>
                                    <div class="celula">{{ linha.selecionar }}</div>
                                    <div class="celula">{{ linha.sku }}</div>
                                    <div class="celula">{{ linha.produto }}</div>
                                    <div class="celula">{{ linha.quantidade }}</div>                                
                                </div>                            
                            </div>

                            <div id="observacao">
                                <label for="observacao">Observação:</label>
                                <input type="text" name="observacao">
                            </div>


                        </div>                    
                

                        <div id="total">                                                 
                            <div id="input-total">
                                <form action="">
                                    <div>
                                        <label for="itens">Quantidade total de itens:</label>
                                        <input type="text" name="itens">
                                    </div>

                                    <div>
                                        <label for="produtos">Quantidade total de produtos:</label>
                                        <input type="text" name="produtos">
                                    </div>

                                    <div>
                                        <label for="nota">Valor total da nota fiscal:</label>
                                        <input type="text" name="nota">
                                    </div>
                                </form>

                                <div id="botoes-total">
                                    <button type="submit">Salvar</button>
                                    <button type="submit">Cancelar</button>
                                </div>
                            </div>
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
    width: 20.5rem;
}

label {
    padding-right: .2rem;    
}

button {
    width: 6.7rem;
    height: 1.4rem;
    border-radius: .5rem;
    border: 1px solid var(--dark-green);
    font-family: 'Engravers Gothic';
    font-size: .7rem;    
    color: var(--white);
    background-color: var(--dark-green);
    transition: .5s;
}

button:hover {
    cursor: pointer;
    background-color: var(--light-green);
    color: var(--white);
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
    padding-top: .3rem;    
    text-align: center;
}

#entrada-container {
    display: flex;
    flex-direction: column;
    gap: .4rem;
    padding: .7rem 1rem 0 1rem;
}

#pesquisa-container {
    display: flex;    
    align-items: center;    
    padding: .2rem 0 .7rem 1.37rem;    
    border: 2px solid var(--dark-green);
    border-radius: 1rem;
}

#pesquisa-container form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .3rem;
}

#botoes-pesquisa {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1.8rem;
    gap: .2rem;
    font-weight: bold;   
}

#botoes-pesquisa button:last-child {    
    background-color: var(--white);
    color: var(--dark-green);        
}

#botoes-pesquisa button:last-child:hover {    
    background-color: var(--light-green);
    color: var(--white);        
}

#container-tabela {
    border: 2px solid var(--dark-green);
    border-radius: 20px;
    overflow: hidden;       
}

#relacao {
    display: flex;    
    flex-direction: column;
    justify-content: flex-start;
    gap:.3rem;    
    padding: 0 0 .5rem 1.3rem;    
}

#relacao span {
    font-size: 1rem;
}

#relacao form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-self: flex-start;
    gap: .3rem;
    padding-left: .8rem;
}

#tabela {
    display: grid;
    width: 100%;
    font-family: 'Engravers Gothic';    
}

.tabela-header {
    font-size: .8rem;
    padding: .3rem 0;
    border-top: none;
    background-color: var(--dark-green);
    color: var(--white);        
}

.tabela-linha {
    font-size: .8rem;
    background-color: var(--white);
}

.linha {
    display: grid;    
    grid-template-columns: 1fr 1.7614fr 1.2045fr 1.4886fr 1.2045fr 2.9205fr 1.7045fr;
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

#observacao {
    display: flex;
    flex-direction: column;
    font-family: 'Engravers Gothic';
    font-size: 1rem;
    padding: .2rem .9rem .5rem .9rem;
}

#observacao label{
    padding-left: .2rem;
}

#observacao input{
    width: 100%;
    height: 2.5rem;
}

#total {    
    border: 2px solid var(--dark-green);
    border-radius: 1rem;
}

#input-total {
    display: flex;    
    align-items: center;    
    padding: .3rem 0 .3rem 1.37rem;    
     
}

#input-total form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .2rem;
}

#input-total form input {
    width: 18.3rem;
}

#botoes-total {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1.8rem;
    gap: .2rem;
    font-weight: bold;   
}

#botoes-total button:last-child {    
    background-color: var(--white);
    color: var(--dark-green);        
}

#botoes-total button:last-child:hover {    
    background-color: var(--light-green);
    color: var(--white);        
}

</style>
