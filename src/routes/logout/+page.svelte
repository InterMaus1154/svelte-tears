<script>
    import {onMount} from "svelte";
    import {token} from "$lib/stores/auth.js";
    import {goto} from "$app/navigation";

    onMount(function () {
        // on logout, invalidate token
        token.set(null);
    });
</script>