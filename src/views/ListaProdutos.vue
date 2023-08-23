<script>
import SysoHeader from '../components/SysoHeader.vue';
import SysoMenu from '../components/SysoMenu.vue';

export default {
  name: 'ListaProdutos',

  data() {
    return {
        menuVisible: true,

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
            { sku: "1009858", produto: "Colchão exemplo01", quantidade: "100", acoes: "APROVAR/ESTORNAR" }
            
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
                    <p>Gestão de Cadastro > <span>Lista de pedidos para preparação de despacho</span></p>
                    
                    <div id="titulo">
                        <h1>Lista de produtos pedido</h1>
                    </div>

                    <div id="subtitulo">
                        <span>Relação de produtos:</span>
                    </div>

                    <div id="container-tabela">                        
                        <div id="tabela">
                            <div class="linha tabela-header">
                                <div class="celula celula-header">SKU</div>
                                <div class="celula celula-header">Nome do produto</div>
                                <div class="celula celula-header">Quantidade</div>
                                <div class="celula celula-header">Ações</div>
                            </div>                            
                            
                            <div class="linha tabela-linha" v-for="linha in linhas" :key="linha.sku">
                                <div class="celula">{{ linha.sku }}</div>
                                <div class="celula">{{ linha.produto }}</div>
                                <div class="celula">{{ linha.quantidade }}</div>
                                <div class="celula">{{ linha.acoes }}</div>
                            </div>                            
                        </div>
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
    color: #235339;       
}

#dados p {
    padding: .5rem 0 0 1rem;    
}

#dados p span {    
    font-size: .9rem;
}

#titulo {
    padding-top: 1rem;    
    text-align: center;
}

#subtitulo {
    font-size: 1.5rem;
    padding-bottom: .3rem;
    padding-left: 1rem;
}

#container-tabela {
    border: 2px solid var(--dark-green);
    border-radius: 20px;
    overflow: hidden;
    font-family: 'Engravers Gothic'; 
}

#tabela {
    display: grid;
    width: 100%;    
}

.tabela-header {
    font-size: 1rem;
    border-top: none;
    background-color: var(--dark-green);
    color: var(--white);
    padding: .2rem 0;    
}

.tabela-linha {
    font-size: .7rem;
    background-color: var(--white);
}

.linha {
    display: grid;  
    grid-template-columns: repeat(3, 1fr) 2fr;
    align-items: center;
    border-bottom: 2px solid var(--light-gray); 
}

.celula {    
    text-align: center;
    border-right: 2px solid var(--light-gray); 
}

.celula:last-child {
    border-right: none; 
}

</style>