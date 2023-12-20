<template>
    <h1>Список друзів</h1>
    <div class="container">
        <div v-for="(friend, index) in friendsList" :key="friend.id" class="friend">
            {{ index + 1 }}: {{ friend.name }}
            <button class="button" @click="deleteFriend(friend.id)">Видалити</button>
        </div>
    </div>
    <div>
        <label class="lable">
            Новий друг
            <input v-model="friendData.name" type="text" class="input" />
            <button class="button" @click="onAdd(friendData)">Додати</button>
        </label>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useFriendsStore } from '../store/friends'

export default {
    name: 'FriendView',
    data() {
        return {
            friendData: {},
        }
    },
    computed: {
        ...mapState(useFriendsStore, ['friendsList']),
    },

    methods: {
        ...mapActions(useFriendsStore, ['addFriends', 'deleteFriend']),
        onAdd(friendData) {
            this.addFriends(friendData)
            this.friendData = {}
        },
    },
}
</script>

<style lang="scss" scoped>
.friend {
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
</style>
