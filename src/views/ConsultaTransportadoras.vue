<script>
import SysoHeader from '../components/SysoHeader.vue';
import SysoMenu from '../components/SysoMenu.vue';

export default {
  name: 'ConsultaTransportadoras',

  data() {
    return {
      linhas: [
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" },
        { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" }
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

                    <div id="filtro">]
                        <form action="">
                            <div id="input-grupo">
                                <label for="grupo">Grupo Logista</label>
                                <input type="text" name="grupo">
                            </div>

                            <div id="input-logista">
                                <label for="logista">Logista</label>
                                <input type="text" name="logista">
                            </div>

                            <div id="input-pesquisar">
                                <label for="pesquisar">Pesquisar</label>
                                <input type="text" name="pesquisar">
                            </div>

                            <div id="input-estoque">
                                <label for="estoque">Estoque</label>
                                <input type="text" name="estoque">
                            </div>
                            <button type="submit">Filtrar</button>
                        </form>
                    </div>

                    <div id="resultado">
                        <div id="transp-dados">
                            <form action="">
                                <div id="transp-nome">
                                    <label for="nome">Nome Transportadora</label>
                                    <input type="text" name="nome">
                                </div>

                                <div id="cnpj">
                                    <label for="cnpj">CNPJ</label>
                                    <input type="text" name="cnpj">
                                </div>

                                <div id="status">
                                    <label for="status">Status</label>
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

                <div id="botao">
                    <button>Proxima Página</button>
                </div>

                <div id="paginas">
                    <a href="#"></a>
                    <span>1</span>
                    <span>-</span>
                    <span>1000</span>
                    <a href="#"></a>
                </div>
                
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

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
    font-family: Engrgotn;
    font-size: .8rem;
    font-weight: bold;
    color: #235339;       
}

#dados p {
    padding: .5rem 0 0 1rem;    
}

#dados p strong {
    font-size: .9rem;
}

#titulo {
    padding-top: 1rem;    
    text-align: center;
}

</style>