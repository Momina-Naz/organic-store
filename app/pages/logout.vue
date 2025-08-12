<script setup>
const user = useCookie("user");
user.value = null;
navigateTo("/login");
</script>
