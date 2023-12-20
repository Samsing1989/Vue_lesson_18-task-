<template>
    <nav>
        <router-link to="/">Головна</router-link> | <router-link to="/friend">Друзі</router-link> |
        <router-link to="/gift">Подарунки</router-link> |
        <router-link to="/designation">Призначення подарунків</router-link> |
    </nav>
    <router-view />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 20px;
    padding: 0px 100px;
}

nav {
    text-align: center;
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
