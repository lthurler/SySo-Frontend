<script>

export default {
    name: "SysoHeader",
    
    props: {},

    methods: {
        toggleMenu() {
            this.$emit("toggle-menu");
        },
    
    },    

    components: {}        
}

</script>

<template>
    <header>
        <div id="header">
            <div id="logo">
                <img src="/src/assets/img/Icone_logo.png">
            </div>

            <div id="search-bar">
                <input type="text">
                <a href="#">
                    <img src="/src/assets/img/lupa.png">
                </a>                
            </div>           

            <div id="hamburguer">
                <a href="#" @click.prevent="toggleMenu">
                    <i class="ri-menu-line"></i>                    
                </a>
            </div>
        </div>
    </header>
</template>

<style scoped>
#header{
    display: flex;    
    align-items: center;    
    height: 15vh;
    width: 100%;
    padding-top: .4rem;
}

#logo {    
    padding-left: 4.8rem;
    padding-right: 9.2rem;
}

#logo img{
    max-width: 73px;
}

#search-bar {
    display: flex;
    justify-content: center;
    align-items: center;    
}

#search-bar input {
    width: 53rem;
    height: 2rem;
    background-color: #f0f0f0;
    border: none;
    outline: none;
    border-radius: .3rem;
}

#search-bar a {
    margin-right: 2rem;
}

#search-bar img {
    max-width: 70px;
    padding-left: .5rem;    
}

#hamburguer a i {
    padding-bottom: .2rem;
    font-size: 3.5rem;
    color: black;
}

</style>