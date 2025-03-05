<script>
    import {token} from "$lib/stores/auth.js";
    import {goto} from "$app/navigation";
    
    // simulate login, normally you would make your API call here to authenticate username / password
    function loginUser(){
        token.set("test_token");
        goto("/");
    }
</script>

<h1>This is login page</h1>
<button on:click={loginUser}>Login</button>