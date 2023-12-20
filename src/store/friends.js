import { defineStore } from 'pinia'

export const useFriendsStore = defineStore('friends', {
    state: () => ({
        friendsList: [
            {
                id: 1,
                name: 'Баба Галя',
            },
            {
                id: 2,
                name: 'Дід Петро',
            },
            {
                id: 3,
                name: 'Онука Олена',
            },
        ],
    }),
    getters: {},
    actions: {
        addFriends(friend) {
            this.friendsList.push({
                id: new Date().getTime(),
                ...friend,
            })
        },
        deleteFriend(friendId) {
            this.friendsList = this.friendsList.filter((friend) => friend.id !== friendId)
        },
    },
})
