<template>
    <div class="flex items-center justify-center mt-10">
        <div class="flex border-2 border-gray-200 rounded-md w-full">
            <input v-model="searchTerm" type="text" class="px-4 py-2 min-w-full" placeholder="Search...">
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            searchTerm: ""
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
