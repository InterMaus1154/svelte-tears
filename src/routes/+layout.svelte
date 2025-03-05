<script>
    import Header from "$lib/Header.svelte";
    import {token, isAuthenticated} from "$lib/stores/auth.js";
    import {page} from "$app/state";
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";
    import {browser} from "$app/environment";

    // this ensures if token is invalidated, it will automatically redirect to login
    $: if (browser && !$isAuthenticated && page.url.pathname !== "/login") {
        goto('/login');
    }

    onMount(function () {
        if (!$isAuthenticated && page.url.pathname !== '/login') {
            goto('/login');
        }
    });


</script>
<Header/>
<!--rest of page content is injected into slot, so no need to repeat the logic elsewhere-->
<slot/>