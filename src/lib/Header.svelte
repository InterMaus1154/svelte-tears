<script>
    import {isAuthenticated} from "$lib/stores/auth.js";
</script>
<header>
    <nav>
        <!--show only login option if user is not logged in-->
        {#if $isAuthenticated}
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/logout">Logout</a>
        {:else}
            <a href="/login">Login</a>
        {/if}
    </nav>
</header>