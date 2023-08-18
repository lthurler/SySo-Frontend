<script>

export default {
    name: "SysoHeader",
    
    props: {},

    methods: {},
        
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
                <img src="/src/assets/img/lupa.png">    
            </div>

            <!-- <div id="search-button">
                <img src="/src/assets/img/lupa.png">
            </div> -->

            <div id="hamburguer">
                <img src="/src/assets/img/menu_hamburguer.png">
            </div>
        </div>
    </header>
</template>

<style scoped>
#header{
    display: flex;
    /* justify-content: space-around; */
    align-items: center;    
    height: 15vh;
    width: 100%;
    padding-top: .7rem;
}

#logo {
    /* padding: .5rem 0 0 4rem; */
    padding-left: 4rem;
    padding-right: 7rem;
}

#logo img{
    max-width: 58px;
}

#search-bar {
    display: flex;
    justify-content: center;
    align-items: center;    
}

#search-bar input {
    width: 50rem;
    height: 1.6rem;
    background-color: #f0f0f0;
    border: none;
    outline: none;
    border-radius: .3rem;
}

#search-bar img {
    max-width: 65px;
    padding-left: .5rem;
    margin-right: 2rem;
}

#hamburguer img {
    max-width: 55px;
}


</style>