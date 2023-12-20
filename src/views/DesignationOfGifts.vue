<template>
    <div class="container-des">
        <h3>Розприділити подарунки</h3>
        <div v-for="(designation, index) in designationsList" :key="designation.id" class="designation">
            {{ index + 1 }}: {{ designation.friendId }} - {{ designation.giftId }}
            <button class="button" @click="deleteDesignation(designation.id)">Видалити</button>
        </div>
    </div>
    <div class="container-select">
        <label class="lable">
            Друг
            <select v-model="designationData.friendId" class="select">
                <option v-for="friend in friendsList" :key="friend.id" class="option">
                    {{ friend.name }}
                </option>
            </select>
        </label>
        <label class="lable">
            Подарунок
            <select v-model="designationData.giftId" class="select">
                <option v-for="gifts in giftsList" :key="gifts.id" class="option">
                    {{ gifts.title }}
                </option>
            </select>
        </label>
        <button class="button" @click="onAddDesignation">Додати</button>
    </div>

    <div v-if="message">{{ message }}</div>
</template>

<script>
import { mapState, mapActions } from 'pinia'

import { useDesignationStore } from '../store/designation'
import { useFriendsStore } from '../store/friends'
import { useGiftsStore } from '../store/gifts'
export default {
    name: 'DesignationOfGifts',
    data() {
        return {
            designationData: {},
            message: null,
        }
    },
    computed: {
        ...mapState(useGiftsStore, ['giftsList']),
        ...mapState(useFriendsStore, ['friendsList']),
        ...mapState(useDesignationStore, ['designationsList']),
    },

    methods: {
        ...mapActions(useDesignationStore, ['addDesignation', 'deleteDesignation']),
        onAddDesignation() {
            if (!this.designationData.friendId || !this.designationData.giftId) this.message = 'Заповніть всі поля'
            else {
                this.addDesignation(this.designationData)
                this.designationData = {}
                this.message = null
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.container-select {
    display: flex;
    gap: 20px;
}
.select {
    padding: 9px 10px;
    font-size: 20px;
}
.container-des {
    max-width: 500px;

    margin: 0 auto;
    margin-bottom: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
}
.designation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    &:not(:last-child) {
        border-bottom: 2px solid #000;
    }
}
.button {
    padding: 5px 10px;
    background-color: #42b983;
    color: white;
    font-size: 20px;
    transition: all 0.3s;
    &:hover {
        background-color: #2c3e50;
    }
}
.lable {
    display: flex;
    align-items: center;
    gap: 20px;
}
.input {
    padding: 8px 10px;
}
.container {
    max-width: 430px;
    border: 2px solid #000;
    margin-bottom: 10px;
}
</style>
