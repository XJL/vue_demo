<template>
    <ul>
        <li v-for="v in list">{{v}}</li>
    </ul>
</template>

<script>
    export default {
        data: function() {
            return {
                list: [
                    "apple",
                    "banana",
                    "orange"
                ]
            }
        }
    }
</script>