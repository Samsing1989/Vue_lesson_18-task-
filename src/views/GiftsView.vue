<template>
    <h1>Список подарунків</h1>

    <div class="container">
        <div v-for="(gift, index) in giftsList" :key="gift.id" class="gift">
            {{ index + 1 }} - {{ gift.title }}
            <button class="button" @click="deleteGifts(gift.id)">Видалити</button>
        </div>
    </div>
    <div>
        <label class="lable">
            Новий подарунок
            <input v-model="giftData.title" type="text" class="input" />
            <button class="button" @click="onAdd(giftData)">Додати</button>
        </label>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useGiftsStore } from '../store/gifts'

export default {
    name: 'GiftsView',
    data() {
        return {
            giftData: {},
        }
    },
    computed: {
        ...mapState(useGiftsStore, ['giftsList']),
    },

    methods: {
        ...mapActions(useGiftsStore, ['addGifts', 'deleteGifts']),
        onAdd(giftData) {
            this.addGifts(giftData)
            this.giftData = {}
        },
    },
}
</script>

<style lang="scss" scoped>
.gift {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    &:not(:last-child) {
        border-bottom: 2px solid #000;
    }
}
</style>
