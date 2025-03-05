<script>
    import Header from "$lib/Header.svelte";
    import {token, isAuthenticated} from "$lib/stores/auth.js";
    import {page} from "$app/state";
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";

    onMount(function () {
        if (!$isAuthenticated && page.url.pathname !== '/login') {
            goto('/login');
        }
    });


</script>
<Header/>
<slot/>