<script>
import SysoHeader from '../components/SysoHeader.vue';
import SysoMenu from '../components/SysoMenu.vue';

export default {
  name: 'ConsultaTransportadoras',

  data() {
    return {
      linhas: [
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"},
            { item:"1002984", nome:"colch casal mol ensac", valor:"r$275,00",selecionar:"Digite sku, nome, ean", sku:".", produto:".", quantidade:"#"}
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
                    <p>Gestão de armazenagem > <span>Consulta de entrada de NFe</span></p>
                    
                    <div id="titulo">
                        <h1>Consulta de entrada de NFe</h1>
                    </div>

                    <div id="consulta-container">                    
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
                                    <label for="fornecedor">Fornecedor:</label>
                                    <input type="text" name="fornecedor">
                                </div>

                                <div>
                                    <label for="entrada">Selecionar NFe entrada:</label>
                                    <input type="text" name="entrada">
                                </div>                          
                            </form>

                            <div id="botoes-pesquisa">
                                <button type="submit">Pesquisar</button>
                                <button type="submit">Limpar</button>
                            </div>
                        </div>    
                        <div id="container-tabela">
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
    border: 1px solid #235339;
    font-family: 'Engravers Gothic';
    font-size: .7rem;    
    color: var(--white);
    background-color: #235339;
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

#dados p span {
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

#pesquisa-container {
    display: flex;    
    align-items: center;
    margin-bottom: .9rem;
    padding: 1rem 0 .7rem 1.37rem;    
    border: 2px solid #235339;
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
    color: #235339;        
}

#container-tabela {
    border: 2px solid #235339;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 1rem;   
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
    font-size: .6rem;
    background-color: var(--white);
}

.linha {
    display: grid;  
    grid-template-columns: 1fr 1.7595fr 1.2025fr 1.2025fr 1.2025fr 2.9241fr 1.9873fr;
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

#total {    
    border: 2px solid #235339;
    border-radius: 1rem;
}

#input-total {
    display: flex;    
    align-items: center;    
    padding: .5rem 0 .7rem 1.37rem;    
     
}

#input-total form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .3rem;
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
    color: #235339;        
}

</style>
